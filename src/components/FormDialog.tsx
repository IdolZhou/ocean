import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogTitle,
    Grid,
    Link,
    Tab,
    Tabs,
} from '@mui/material';
import { useState } from 'react';
import { SignIn } from '@components/SignIn';
import { SignUp } from '@components/SignUp';
import { useDialogStore } from '@stores/dialog';
import { t } from 'i18next';

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
                <Tabs centered value={index} onChange={handleChange} >
                    <Tab label={t('SignIn.SignIn')} />
                    <Tab label={t('SignIn.SignUp')} />
                </Tabs>
            </DialogTitle>
            <DialogContent>
                {index === 0 ? (<SignIn />) : (<SignUp />)}
            </DialogContent>
            <DialogActions style={{ justifyContent: 'center' }}>
                <Button type="submit" variant="contained">{
                    index === 0 ? t('SignIn.SignIn') : t('SignIn.SignUp')
                }</Button>
            </DialogActions>
            {index === 0 ? (
                <Grid sx={{ display: 'flex', py: 2 }}>
                    <Grid item xs sx={{ pl: 3 }}>
                        <Link href="#" variant="body2">
                            {t('SignIn.ForgotPassword')}
                        </Link>
                    </Grid>
                    <Grid item sx={{ pr: 3 }}>
                        <Link component="button" variant="body2" onClick={(event) => handleChange(event, 1)}>
                            {t("SignIn.NoAccount")}
                        </Link>
                    </Grid>
                </Grid>
            ) : (
                <Grid container justifyContent="flex-end" sx={{ pr: 3, py: 2 }}>
                    <Grid item>
                        <Link component="button" variant="body2" onClick={(event) => handleChange(event, 0)}>
                            {t("SignIn.HaveAccount")}
                        </Link>
                    </Grid>
                </Grid>
            )}


        </Dialog>
    );
}
