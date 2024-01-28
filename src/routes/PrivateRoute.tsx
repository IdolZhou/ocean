import { ReactElement } from 'react';
import { Navigate } from 'react-router-dom';
import { AccessDenied } from '@pages/AccessDenied';

export interface IPrivateRouteProps {
    /**
     * 需要渲染的组件
     */
    element: ReactElement;

    /**
     * 角色列表
     */
    roles: string[];
}

function PrivateRoute(props: IPrivateRouteProps) {
    const { element, roles } = props;

    // TODO redux 存储中获取
    const userInfo = {
        name: 'zhangsan',
        role: 'user',
    };

    const isAuthenticated = true;//useAppSelector((state) => state.users.isAuthenticated);
    const userHasRequiredRole = userInfo && roles.includes(userInfo.role) ? true : false;

    // 认证和鉴权都通过
    if (isAuthenticated && userHasRequiredRole) {
        return element;
    }

    // 认证通过，但当前角色没有权限
    if (isAuthenticated && !userHasRequiredRole) {
        return <AccessDenied />;
    }

    return <Navigate to='/' />;
}

export default PrivateRoute;