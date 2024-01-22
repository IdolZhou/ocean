/**
* 📄FileName   : Copyright.tsx
* ⏱CreateDate : 2024/01/22 21:12:32
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 版权组件
*/

import { Link, Typography } from '@mui/material';



export function Copyright() {
    return (
        <Typography variant="body2" color="text.secondary" align="center">
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Your Website
            </Link>{' '}
            {new Date().getFullYear()}.
        </Typography>
    );
}
