import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Tab,
    Tabs,
} from '@mui/material';
import { useState } from 'react';
import { SignIn } from '@components/SignIn';
import { SignUp } from '@components/SignUp';
import { useDialogStore } from '@stores/dialog';

export function FormDialog() {
    // 从Store中获取状态值
    const visible = useDialogStore((state) => state.visible);
    const setVisible = useDialogStore((state) => state.setVisible);
    // 设置tabs选中项 0：登录；1：注册
    const [index, setIndex] = useState(0);

    // Tabs 选中项改变事件
    const handleChange = (_event: React.SyntheticEvent, newValue: number) => {
        setIndex(newValue);
    };

    const handleClose = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };

    return (
        <Dialog
            open={visible}
            onClose={handleClose}
            PaperProps={{
                component: 'form',
                onSubmit: (event: React.FormEvent<HTMLFormElement>) => {
                    event.preventDefault();
                    const formData = new FormData(event.currentTarget);
                    const formJson = Object.fromEntries((formData as any).entries());
                    const email = formJson.email;
                    console.log(email);
                    handleClose();
                },
            }}>
            <DialogTitle>
                <Tabs value={index} onChange={handleChange} centered>
                    <Tab label="Sign In" />
                    <Tab label="Sign Up" />
                </Tabs>
            </DialogTitle>
            <DialogContent>
                {index === 0 ? (<SignIn />) : (<SignUp />)}
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
                <Button type="submit" variant="contained">Subscribe</Button>
            </DialogActions>
            {/* <Grid container>
                <Grid item xs>
                    <Link href="#" variant="body2">
                        Forgot password?
                    </Link>
                </Grid>
                <Grid item>
                    <Link href="#" variant="body2">
                        {"Don't have an account? Sign Up"}
                    </Link>
                </Grid>
            </Grid> */}
        </Dialog>
    );
}
