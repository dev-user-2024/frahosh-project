import { lazy } from 'react';
import { useRoutes } from 'react-router-dom';
import Login from './Pages/Login';
import UploadArticle from './Pages/UploadArticle';
import Limitness from './Pages/Limitness';
import LimitnessAdd from './Components/local/Limitness/Components/LimitnessAdd';
import AddRole from './Components/local/AccessLevel/Components/AddRole';
import AddAccess from './Components/local/AccessLevel/Components/AddAccess';

const DefaultLayout = lazy(() => import('./Layouts/Default'))
const Dashboard = lazy(() => import('./Pages/Dashboard'))
const Tickets = lazy(() => import('./Pages/Tickets'))
const AccessLevel = lazy(() => import('./Pages/AccessLevel'))
const Users = lazy(() => import('./Pages/Users'))
const Financial = lazy(() => import('./Pages/Financial'))
const Monitoring = lazy(() => import('./Pages/Monitoring'))
// const Setting = lazy(() => import('./Pages/Setting'))

const routes = [
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                element: <Dashboard />,
                index: true,
            },
            {
                path: '/ticket',
                element: <Tickets />,
            },
            {
                path: '/access-level',
                element: <AccessLevel />,
            },
            {
                path: '/access-level/add-role',
                element: <AddRole />,
            },
            {
                path: '/access-level/add-access',
                element: <AddAccess />,
            },
            {
                path: '/users',
                element: <Users />,
            },
            {
                path: '/financial',
                element: <Financial />,
            },
            {
                path: '/monitoring',
                element: <Monitoring />,
            },
            // {
            //     path: '/setting',
            //     element: <Setting />,
            // },
            {
                path: '/upload-article',
                element: <UploadArticle />,
            },
            {
                path: '/limitness',
                element: <Limitness />,
            },
            {
                path: '/limitness/limitness-add',
                element: <LimitnessAdd />,
            },
        ],

    },
    {
        path: '/login',
        element: <Login />,
    }
]


const Routes = () => {
    const routing = useRoutes(routes)

    return (
        <div>
            {routing}
        </div>
    )
}

export default Routes