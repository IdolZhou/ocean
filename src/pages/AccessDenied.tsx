/**
* 📄FileName   : AccessDenied.tsx
* ⏱CreateDate : 2024/01/19 16:22:11
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 未授权页面
*/



import { Empty } from '@douyinfe/semi-ui';
import {
    IllustrationNoAccess,
    IllustrationNoAccessDark,
} from '@douyinfe/semi-illustrations';
function AccessDenied() {
    return (

        <Empty
            image={<IllustrationNoAccess style={{ width: 150, height: 150 }} />}
            darkModeImage={<IllustrationNoAccessDark style={{ width: 150, height: 150 }} />}
            description={"You don't have permission to view this page."}
        // style={emptyStyle}
        />
    );
}

export default AccessDenied;