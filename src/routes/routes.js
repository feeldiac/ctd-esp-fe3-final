import { lazy } from 'react';

const Home = lazy(() => import('../pages/Home'));
const Contact = lazy(() => import('../pages/Contact'));
const Detail = lazy(() => import('../pages/Detail'));
const Favs = lazy(() => import('../pages/Favs'));

const routes = [
    {
        path: '',
        element:  Home,
    },
    {
        path: 'contact',
        element:  Contact,
    },
    {
        path: 'dentist/:id',
        element:  Detail,
    },
    {
        path: 'favs',
        element:  Favs,
    }
];

export default routes;