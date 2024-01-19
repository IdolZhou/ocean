/**
* 📄FileName   : NavBar.tsx
* ⏱CreateDate : 2024/01/18 21:12:28
* 🧑Author     : master
* 👆Version    : 1.0
* 💭Description:水平导航栏
*/

import { useState } from 'react';

import {
    AutoComplete,
    Avatar,
    Button,
    Divider,
    Dropdown,
    Nav
} from '@douyinfe/semi-ui';
import {
    IconSemiLogo,
    IconHome,
    IconLive,
    IconLanguage,
    IconBell,
    IconSun,
    IconMoon,
    IconUser,
    IconBookmark,
    IconSearch
} from '@douyinfe/semi-icons';
import { useDialogStore } from '@stores/dialog';

export interface INavBarProps {
}

export function NavBar(props: INavBarProps) {

    const [isLight, setIsLight] = useState<boolean>(true);
    const setVisible = useDialogStore((state) => state.setVisible);
    /**
     * 模式切换处理
     */
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
                <Avatar color="orange" size="small" onClick={() => setVisible(true)}>
                    O
                </Avatar>

                {/* 若已经登录显示下面 */}
                {/* <Dropdown
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
                </Dropdown> */}
            </Nav.Footer>
        </Nav>
    );
}
