import {
  Layout,
} from '@douyinfe/semi-ui';
import { Dialog } from '@components/Dialog';
import { NavBar } from '@components/NavBar';
import { RouterProvider } from 'react-router-dom';
import { route } from './routes/index';

function App() {
  const { Header, Footer, Content } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  };

  return (
    <Layout>
      <Header style={commonStyle}>
        <NavBar />
      </Header>
      <Layout style={{ width: '90%', margin: 'auto' }}>
        <Content style={{ height: 300 }}>
          <RouterProvider router={route} />
        </Content>
        {/* <Sider style={{ width: 200, background: 'var(--semi-color-fill-2)' }}>Sider</Sider> */}
      </Layout>
      <Footer style={commonStyle}>Footer</Footer>

      {/* 登录/注册页 */}
      <Dialog />
    </Layout>
  );
}

export default App;
