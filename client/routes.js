import ComponentApp from 'components/App';

const routes = [
    {
        path: '/',
        component: ComponentApp
    },
    {
        path: '*',
        component: ComponentApp
    }
];

export default routes;
