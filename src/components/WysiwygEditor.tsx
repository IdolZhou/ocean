/**
* 📄FileName   : WysiwygEditor.tsx
* ⏱CreateDate : 2024/02/06 14:25:11
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: Wysiwyg Markdown 编辑器
*/

import { useCallback, useMemo } from 'react';
import {
    createEditor,
    Descendant,
    Editor,
    Element as SlateElement,
    Node as SlateNode,
    Point,
    Range,
    Transforms,
} from 'slate';
import {
    Slate,
    Editable,
    withReact,
    ReactEditor,
    RenderElementProps
} from 'slate-react';
import { withHistory } from 'slate-history';
import { BulletedListElement } from 'types';
import { Box, Typography, useTheme } from '@mui/material';

export interface IMarkdownEditorProps {

}

type stringKey = Record<string, any>;

const SHORTCUTS: stringKey = {
    '*': 'list-item',
    '-': 'list-item',
    '+': 'list-item',
    '>': 'block-quote',
    '#': 'heading-one',
    '##': 'heading-two',
    '###': 'heading-three',
    '####': 'heading-four',
    '#####': 'heading-five',
    '######': 'heading-six',
};

const initialValue: Descendant[] = [
    {
        type: 'paragraph',
        children: [
            {
                text: 'The editor gives you full control over the logic you can add. For example, it\'s fairly common to want to add markdown-like shortcuts to editors. So that, when you start a line with "> " you get a blockquote that looks like this:',
            },
        ],
    },
    {
        type: 'block-quote',
        children: [{ text: 'A wise quote.' }],
    },
    {
        type: 'paragraph',
        children: [
            {
                text: 'Order when you start a line with "## " you get a level-two heading, like this:',
            },
        ],
    },
    {
        type: 'heading-one',
        children: [{ text: '标题1' }],
    },
    {
        type: 'heading-two',
        children: [{ text: 'Try it out!' }],
    },
    {
        type: 'paragraph',
        children: [
            {
                text: 'Try it out for yourself! Try starting a new line with ">", "-", or "#"s.',
            },
        ],
    },
];

const withShortcuts = (editor: any) => {
    const { deleteBackward, insertText } = editor;
    editor.insertText = (text: any) => {
        const { selection } = editor;
        console.log("text: ", text, selection, text.endsWith(' ') && selection && Range.isCollapsed(selection));

        if (text.endsWith(' ') && selection && Range.isCollapsed(selection)) {
            const { anchor } = selection;
            const block = Editor.above(editor, {
                match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
            });
            const path = block ? block[1] : [];
            const start = Editor.start(editor, path);
            const range = { anchor, focus: start };
            const beforeText: string = Editor.string(editor, range) + text.slice(0, -1);
            const type = SHORTCUTS[beforeText];

            if (type) {
                Transforms.select(editor, range);

                if (!Range.isCollapsed(range)) {
                    Transforms.delete(editor);
                }

                const newProperties: Partial<SlateElement> = {
                    type,
                };
                Transforms.setNodes<SlateElement>(editor, newProperties, {
                    match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
                });

                if (type === 'list-item') {
                    const list: BulletedListElement = {
                        type: 'bulleted-list',
                        children: [],
                    };
                    Transforms.wrapNodes(editor, list, {
                        match: n =>
                            !Editor.isEditor(n) &&
                            SlateElement.isElement(n) &&
                            n.type === 'list-item',
                    });
                }

                return;
            }
        }

        insertText(text);
    };

    editor.deleteBackward = (...args: any) => {
        const { selection } = editor;

        if (selection && Range.isCollapsed(selection)) {
            const match = Editor.above(editor, {
                match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
            });

            if (match) {
                const [block, path] = match;
                const start = Editor.start(editor, path);

                if (
                    !Editor.isEditor(block) &&
                    SlateElement.isElement(block) &&
                    block.type !== 'paragraph' &&
                    Point.equals(selection.anchor, start)
                ) {
                    const newProperties: Partial<SlateElement> = {
                        type: 'paragraph',
                    };
                    Transforms.setNodes(editor, newProperties);

                    if (block.type === 'list-item') {
                        Transforms.unwrapNodes(editor, {
                            match: n =>
                                !Editor.isEditor(n) &&
                                SlateElement.isElement(n) &&
                                n.type === 'bulleted-list',
                            split: true,
                        });
                    }

                    return;
                }
            }

            deleteBackward(...args);
        }
    };

    return editor;
};

const MarkdownListItem = (props: any) => {
    return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
};
const Element = ({ attributes, children, element }: any) => {
    switch (element.type) {
        case 'block-quote':
            return <blockquote {...attributes}>{children}</blockquote>;
        case 'bulleted-list':
            return <ul {...attributes}>{children}</ul>;
        case 'heading-one':
            return <Typography variant='h1'>{children}</Typography>;
        case 'heading-two':
            return <Typography variant='h2'>{children}</Typography>;
        case 'heading-three':
            return <Typography variant='h3'>{children}</Typography>;
        case 'heading-four':
            return <Typography variant='h4'>{children}</Typography>;
        case 'heading-five':
            return <Typography variant='h5'>{children}</Typography>;
        case 'heading-six':
            return <Typography variant='h6'>{children}</Typography>;
        case 'list-item':
            return <MarkdownListItem {...attributes}>{children}</MarkdownListItem>;
        default:
            return <Typography variant='p' {...attributes}>{children}</Typography>;
    }
};

export function WysiwygEditor(props: IMarkdownEditorProps) {
    const theme = useTheme();
    const renderElement = useCallback((props: RenderElementProps) => {
        console.log("renderElement: ", { ...props });
        return <Element {...props} />;
    }, []);
    const editor = useMemo(() => withShortcuts(withReact(withHistory(createEditor()))), []);
    const handleDOMBeforeInput = useCallback((event: InputEvent) => {
        // 队列微任务
        queueMicrotask(() => {
            const pendingDiffs = ReactEditor.androidPendingDiffs(editor);
            const scheduleFlush = pendingDiffs?.some(({ diff, path }) => {
                if (!diff.text.endsWith(' ')) {
                    return false;
                }

                const { text } = SlateNode.leaf(editor, path);
                const beforeText = text.slice(0, diff.start) + diff.text.slice(0, -1);
                if (!(beforeText in SHORTCUTS)) {
                    return;
                }

                const blockEntry = Editor.above(editor, {
                    at: path,
                    match: n => SlateElement.isElement(n) && Editor.isBlock(editor, n),
                });
                if (!blockEntry) {
                    return false;
                }

                const [, blockPath] = blockEntry;
                return Editor.isStart(editor, Editor.start(editor, path), blockPath);
            });

            if (scheduleFlush) {
                ReactEditor.androidScheduleFlush(editor);
            }
        });
    }, [editor]);

    return (
        <Slate editor={editor} initialValue={initialValue}>
            <Editable
                onDOMBeforeInput={handleDOMBeforeInput}
                renderElement={renderElement}
                placeholder="Write some markdown..."
                spellCheck
                // autoFocus
                style={{
                    padding: '5px',
                    border: `1px solid ${theme.palette.divider}`
                }}
            />
        </Slate >
    );
}
