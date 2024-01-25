/**
* 📄FileName   : NavBar.tsx
* ⏱CreateDate : 2024/01/18 21:12:28
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description:水平导航栏
*/

import {
    AppBar,
    Button,
    IconButton,
    Link,
    Menu,
    MenuItem,
    Toolbar,
    Typography,
    useTheme,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import TranslateIcon from '@mui/icons-material/Translate';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import NotificationsIcon from '@mui/icons-material/Notifications';
import { useDialogStore } from '@stores/dialog';
import { useModeStore } from '@stores/mode';
import { useState } from 'react';

export function NavBar() {
    const setVisible = useDialogStore((state) => state.setVisible);
    const setMode = useModeStore((state) => state.setMode);
    const theme = useTheme();
    const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
    const open = Boolean(anchorEl);
    const handleClose = () => {
        setAnchorEl(null);
    };
    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorEl(event.currentTarget);
    };
    return (
        <AppBar
            position="static"
            color="default"
            elevation={0}
            sx={{ borderBottom: (theme) => `1px solid ${theme.palette.divider}` }}>
            <Toolbar sx={{ flexWrap: 'wrap' }}>
                <Typography variant="h6" color="inherit" noWrap sx={{ flexGrow: 1 }}>
                    Company name
                </Typography>
                <nav>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}>
                        Features
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}>
                        Enterprise
                    </Link>
                    <Link
                        variant="button"
                        color="text.primary"
                        href="#"
                        sx={{ my: 1, mx: 1.5 }}>
                        Support
                    </Link>
                    <IconButton sx={{ my: 1, mx: 1.5 }} onClick={() => setMode()} color="inherit">
                        {theme.palette.mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
                    </IconButton>
                    <IconButton sx={{ my: 1, mx: 1.5 }} onClick={handleClick}>
                        <TranslateIcon />
                    </IconButton>
                    <Menu open={open}
                        onClose={handleClose}
                        anchorEl={anchorEl}
                        anchorOrigin={{
                            vertical: 'bottom',
                            horizontal: 'left',
                        }}
                        transformOrigin={{
                            vertical: 'top',
                            horizontal: 'left',
                        }}>
                        <MenuItem>简体中文</MenuItem>
                        <MenuItem>English</MenuItem>
                    </Menu>
                    <IconButton sx={{ my: 1, mx: 1.5 }}>
                        <NotificationsNoneIcon />
                    </IconButton>
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
