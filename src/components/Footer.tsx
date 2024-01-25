/**
* 📄FileName   : Footer.tsx
* ⏱CreateDate : 2024/01/24 10:29:52
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description: 页面脚部组件
*/

import { Box, Container, Typography } from '@mui/material';
import { Copyright } from './Copyright';

export function Footer() {
    return (
        <Box
            component="footer"
            sx={{
                py: 3,
                px: 2,
                mt: 'auto',
                backgroundColor: (theme) =>
                    theme.palette.mode === 'light'
                        ? theme.palette.grey[200]
                        : theme.palette.grey[800],
            }}>
            <Container maxWidth="sm">
                <Typography variant="body1" align='center'>
                    My sticky footer can be found here.
                </Typography>
                <Copyright />
            </Container>
        </Box>
    );
}
