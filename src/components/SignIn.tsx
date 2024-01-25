import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField
} from '@mui/material';
import { t } from 'i18next';


export function SignIn() {

    return (
        <>
            <TextField
                autoFocus
                required
                margin='normal'
                // id="email"
                // name="email"
                label="Email Address"
                type="email"
                fullWidth
                variant="standard"
            />
            <TextField
                required
                margin='normal'
                // id="password"
                // name="password"
                label="Password"
                type="password"
                fullWidth
                variant="standard"
            />
            <FormGroup>
                <FormControlLabel
                    control={<Checkbox color="primary" />}
                    label={t('SignIn.RememberMe')}
                />
            </FormGroup>
        </>
    );
}
