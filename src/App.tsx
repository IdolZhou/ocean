import { AutoComplete, Avatar, Button, Divider, Dropdown, Layout, Nav } from '@douyinfe/semi-ui';
import {
  IconSemiLogo,
  IconHome,
  IconLive,
  IconSetting,
  IconLanguage,
  IconBell,
  IconSun,
  IconMoon,
  IconUser,
  IconBookmark,
  IconExit,
  IconSearch
} from '@douyinfe/semi-icons';
import { useState } from 'react';

function App() {
  const { Header, Footer, Sider, Content } = Layout;
  const commonStyle = {
    height: 64,
    lineHeight: '64px',
    background: 'var(--semi-color-fill-0)'
  };
  const [isLight, setIsLight] = useState<boolean>(true);
  const switchModeHandle = () => {
    const body = document.body;
    if (body.hasAttribute('theme-mode')) {
      body.removeAttribute('theme-mode');
      setIsLight(true);
    } else {
      body.setAttribute('theme-mode', 'dark');
      setIsLight(false);
    }
  };

  return (
    <Layout>
      <Header style={commonStyle}>
        <Nav mode="horizontal" defaultSelectedKeys={['Home']}>
          <Nav.Header>
            <IconSemiLogo style={{ fontSize: 36 }} />
          </Nav.Header>

          <Nav.Item itemKey="Home" text="首页" icon={<IconHome size="large" />} />
          <Nav.Item itemKey="Live" text="直播" icon={<IconLive size="large" />} />
          <Divider margin='24px' layout={'vertical'} />
          <AutoComplete
            // data={stringData}
            // value={value}
            showClear
            prefix={<IconSearch />}
            placeholder="搜索... "
            // onSearch={handleStringSearch}
            // onChange={handleChange}
            style={{ width: 400 }}
          />
          <Nav.Footer>
            <Dropdown
              trigger={'click'}
              position={'bottom'}
              render={
                <Dropdown.Menu>
                  <Dropdown.Item icon={<IconUser />}>中文</Dropdown.Item>
                  <Dropdown.Item icon={<IconBookmark />}>English</Dropdown.Item>
                </Dropdown.Menu>
              }>
              <Button
                theme="borderless"
                icon={<IconLanguage size="large" />}
                style={{
                  color: 'var(--semi-color-text-2)',
                  marginRight: '12px',
                }}
              />
            </Dropdown>

            <Button
              theme="borderless"
              icon={isLight ? (<IconSun size="large" />) : (<IconMoon size="large" />)}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }}
              onClick={switchModeHandle}
            />
            <Button
              theme="borderless"
              icon={<IconBell size="large" />}
              style={{
                color: 'var(--semi-color-text-2)',
                marginRight: '12px',
              }} />

            <Dropdown
              trigger={'click'}
              position={'bottomRight'}
              render={
                <Dropdown.Menu>
                  <Dropdown.Item icon={<IconUser />}>Profile</Dropdown.Item>
                  <Dropdown.Item icon={<IconBookmark />}>Library</Dropdown.Item>
                  <Dropdown.Item icon={<IconSetting />}>Settings</Dropdown.Item>
                  <Divider margin='2px' />
                  <Dropdown.Item icon={<IconExit />}>Sign out</Dropdown.Item>

                </Dropdown.Menu>
              }>
              <Avatar color="orange" size="small">
                O
              </Avatar>
            </Dropdown>
          </Nav.Footer>
        </Nav>
      </Header>
      <Layout style={{ width: '90%', margin: 'auto' }}>
        <Content style={{ height: 300, lineHeight: '300px' }}>Content</Content>
        <Sider style={{ width: 200, background: 'var(--semi-color-fill-2)' }}>Sider</Sider>
      </Layout>
      <Footer style={commonStyle}>Footer</Footer>
    </Layout>
  );
}

export default App;
