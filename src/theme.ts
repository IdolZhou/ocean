import { PaletteMode, ThemeOptions } from '@mui/material';

// A custom theme for this app
export const getDesignTokens = (mode: PaletteMode): ThemeOptions => ({
  palette: {
    mode: mode,
    primary: {
      main: '#556cd6',
      // #6C63FF
    },
    secondary: {
      main: '#19857b',
    },
    error: {
      main: '#ff1744',
    },
  },
  typography: {
    button: {
      textTransform: 'none',
    },
  },
});
