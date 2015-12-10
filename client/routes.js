import App from 'components/App';
import GettingStarted from 'components/GettingStarted';
import Examples from 'components/Examples';

const routes = [
    {
        path: '/',
        component: App,
        childRoutes: [
            {
                path: 'getting-started',
                component: GettingStarted,
                childRoutes: [
                    {
                        path: ':name',
                        component: GettingStarted
                    }
                ]
            },
            {
                path: 'examples',
                component: Examples,
                childRoutes: [
                    {
                        path: ':name',
                        component: Examples
                    }
                ]
            }
        ]
    },
    {
        path: '*',
        component: App
    }
];

export default routes;
