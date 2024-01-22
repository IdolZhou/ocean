import { RouterProvider } from 'react-router-dom';
import { Container } from '@mui/material';
import { route } from './routes/index';
import { FormDialog } from '@components/FormDialog';
import { NavBar } from '@components/NavBar';
import { Copyright } from '@components/Copyright';

function App() {
  return (
    <>
      {/* 导航栏 */}
      <NavBar />
      {/* 主体内容 */}
      <Container maxWidth="lg">
        <RouterProvider router={route} />
      </Container>
      {/* 脚部版权信息 */}
      <Copyright />
      <FormDialog />
    </>
  );
}

export default App;
