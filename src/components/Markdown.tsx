/**
* 📄FileName   : Markdown.tsx
* ⏱CreateDate : 2024/01/24 17:16:24
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: Markdown博文内容显示组件
*/

import { Box, Link, Typography } from '@mui/material';
import ReactMarkdown from 'react-markdown';

export interface IMarkdownProps {
}
function MarkdownListItem(props: any) {
    return <Box component="li" sx={{ mt: 1, typography: 'body1' }} {...props} />;
}
export function Markdown(props: any) {

    const options = {
        overrides: {
            h1: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'h4',
                    component: 'h1',
                },
            },
            h2: {
                component: Typography,
                props: { gutterBottom: true, variant: 'h6', component: 'h2' },
            },
            h3: {
                component: Typography,
                props: { gutterBottom: true, variant: 'subtitle1' },
            },
            h4: {
                component: Typography,
                props: {
                    gutterBottom: true,
                    variant: 'caption',
                    paragraph: true,
                },
            },
            p: {
                component: Typography,
                props: { paragraph: true },
            },
            a: { component: Link },
            li: {
                component: MarkdownListItem,
            },
        },
    };

    return (
        <ReactMarkdown options={options} {...props} />
    );
}
