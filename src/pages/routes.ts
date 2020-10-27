import * as Pages from '@/pages';

export default [
    {
        path: ['/'],
        page: Pages.Main,
    },
    {
        path: '/about',
        page: Pages.About,
        exact: false,
    },
    {
        path: '/path',
        page: Pages.Path,
    },
    {
        path: '/path/to',
        page: Pages.To,
    },
    {
        path: '/path/to/route',
        page: Pages.Route,
    },
];
