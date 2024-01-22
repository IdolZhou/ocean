/**
* 📄FileName   : NavBar.tsx
* ⏱CreateDate : 2024/01/18 21:12:28
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description:水平导航栏
*/

import { useState } from 'react';
import { AppBar, Button, Link, Toolbar, Typography } from '@mui/material';

import { useDialogStore } from '@stores/dialog';

export interface INavBarProps {
}

export function NavBar(props: INavBarProps) {
    const setVisible = useDialogStore((state) => state.setVisible);
    const [current, setCurrent] = useState('mail');


    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}
        >
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Company name
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Features
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}
                    >
                        Support
                    </Link>
                </nav>
                <Button href="#"
                    variant="outlined"
                    sx={{ my: 1, mx: 1.5 }}
                    onClick={() => setVisible(true)}>
                    Login
                </Button>
            </Toolbar>
        </AppBar>
    );
}
