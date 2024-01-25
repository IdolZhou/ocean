import { RouterProvider } from 'react-router-dom';
import { useMemo } from 'react';
import {
  Box,
  Container,
  CssBaseline,
  ThemeProvider,
  createTheme
} from '@mui/material';
import { getDesignTokens } from './theme.ts';
import { route } from './routes/index';
import { FormDialog } from '@components/FormDialog';
import { NavBar } from '@components/NavBar';
import { useModeStore } from '@stores/mode';
import { Footer } from '@components/Footer.tsx';

function App() {
  const mode = useModeStore((state) => state.mode);
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
        }}>
        <CssBaseline />
        {/* 导航栏 */}
        <NavBar />
        {/* 主体内容 */}
        <Container maxWidth="lg">
          <RouterProvider router={route} />
        </Container>
        {/* 脚部版权信息 */}
        <Footer />
        <FormDialog />
      </Box>
    </ThemeProvider>
  );
}

export default App;
