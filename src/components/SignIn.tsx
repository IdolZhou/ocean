import {
    Checkbox,
    FormControlLabel,
    FormGroup,
    TextField
} from '@mui/material';


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
                autoFocus
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
                    label="Remember me"
                />
            </FormGroup>
        </>
    );
}
