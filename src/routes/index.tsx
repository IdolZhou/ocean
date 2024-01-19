
import { Navigate, createBrowserRouter } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import { Article } from '@pages/Article';
import { NotFound } from '@pages/404';

const routes = [
    {
        path: '/',
        element: <Navigate to='/home' />,
        meta: {
            title: 'home',
        }
    },
    {
        path: '/home',
        element: <>Home</>,
        meta: {
            title: 'home',
        }
    },
    {
        path: '/article',
        element: <Article />,
        meta: {
            title: 'signin',
        }
    },

    {
        path: '/profile',
        element: <PrivateRoute element={<>profile</>} roles={['admin', 'general']} />,
        meta: {
            title: 'profile',
        }
    },
    {
        path: '/settings',
        element: <PrivateRoute element={<>settings</>} roles={['admin', 'general']} />,
        meta: {
            title: 'settings',
        }
    },
    {
        path: '/dashBoard',
        element: <PrivateRoute element={<>dashBoard</>} roles={['admin', 'general']} />,
        meta: {
            title: 'dashBoard',
        }
    },
    {
        path: '*',
        element: <NotFound />,
        meta: {
            title: 'notfound',
        }
    },
];

export const route = createBrowserRouter(routes);


