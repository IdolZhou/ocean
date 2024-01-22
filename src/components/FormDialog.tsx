import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    Tab,
    Tabs,
    TextField
} from '@mui/material';
import { useState } from 'react';
import { SignIn } from '@components/SignIn';
import { SignUp } from '@components/SignUp';
import { useDialogStore } from '@stores/dialog';


export interface IDialogProps {
}

export function FormDialog(props: IDialogProps) {
    // 从Store中获取状态值
    const visible = useDialogStore((state) => state.visible);
    const setVisible = useDialogStore((state) => state.setVisible);
    const [value, setValue] = useState(0);

    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const showDialog = () => {
        setVisible(true);
    };
    const handleOk = () => {
        setVisible(false);
        console.log('Ok button clicked');
    };
    const handleClose = () => {
        setVisible(false);
        console.log('Cancel button clicked');
    };
    const handleAfterClose = () => {
        console.log('After Close callback executed');
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
            }}
        >
            <DialogTitle>
                <Tabs value={value} onChange={handleChange} />
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    To subscribe to this website, please enter your email address here. We
                    will send updates occasionally.
                </DialogContentText>
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="email"
                    label="Email Address"
                    type="email"
                    fullWidth
                    variant="standard"
                />
                <TextField
                    autoFocus
                    required
                    margin="dense"
                    id="name"
                    name="password"
                    label="Password"
                    type="password"
                    fullWidth
                    variant="standard"
                />

                {/* <Tabs value={value} onChange={handleChange} aria-label="disabled tabs example">
                    <Tab label="Sign In" />
                    <Tab label="Sign Up" />
                </Tabs> */}
            </DialogContent>
            <DialogActions>
                <Button onClick={handleClose}>Cancel</Button>
                <Button type="submit">Subscribe</Button>
            </DialogActions>
        </Dialog>
    );
}
