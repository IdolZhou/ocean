/**
* 📄FileName   : 404.tsx
* ⏱CreateDate : 2024/01/19 15:29:35
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 404 page
*/

import { Empty } from '@douyinfe/semi-ui';

import {
    IllustrationNotFound,
    IllustrationNotFoundDark,
} from '@douyinfe/semi-illustrations';

export function NotFound() {

    return (
        <Empty
            image={<IllustrationNotFound />}
            darkModeImage={<IllustrationNotFoundDark />}
            description={'404'}
        />
    );
}
