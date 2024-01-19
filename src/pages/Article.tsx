/**
* 📄FileName   : Article.tsx
* ⏱CreateDate : 2024/01/19 15:16:31
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 文章阅读页
*/

import { Divider, Timeline } from '@douyinfe/semi-ui';


export interface IArticleProps {
}

export function Article(props: IArticleProps) {
    return (
        <div>
            文章详情
            <Divider layout='vertical' dashed />
            <Timeline
                mode="alternate"
                dataSource={[
                    {
                        time: '2019-07-14 10:35',
                        extra: '节点辅助说明信息',
                        content: '第一个节点内容',
                        type: 'ongoing',
                    },
                    {
                        time: '2019-06-13 16:17',
                        extra: '节点辅助说明信息',
                        content: <span style={{ fontSize: '18px' }}>第二个节点内容</span>,
                        color: 'pink',
                    },
                    {
                        time: '2019-05-14 18:34',
                        extra: '节点辅助说明信息',
                        // dot: <IconAlertTriangle />,
                        content: '第三个节点内容',
                        type: 'warning',
                    },
                    {
                        time: '2019-05-09 09:12',
                        extra: '节点辅助说明信息',
                        content: '第四个节点内容',
                        type: 'success',
                    },
                ]}></Timeline>
        </div>
    );
}

