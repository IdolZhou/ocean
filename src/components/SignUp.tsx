import { Checkbox, FormControlLabel, FormGroup, TextField } from '@mui/material';


export function SignUp() {
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
                    label="I want to receive inspiration and updates via email."
                />
            </FormGroup>
        </>
    );
}
