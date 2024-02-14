import post1 from '@assets/post1.md';
import post2 from '@assets/post2.md';
import post3 from '@assets/post3.md';
import { WysiwygEditor } from '@components/WysiwygEditor';

export function Home() {
    const posts = [post1, post2, post3];
    return (
        // posts.map((post) => (
        //     <Markdown key={post.substring(0, 40)}>
        //         {post}
        //     </Markdown>
        // ))
        <>
            <WysiwygEditor />
        </>
    );
}
