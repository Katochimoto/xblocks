import _ from 'lodash';
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
                        component: Examples,
                        onEnter: function (nextState) {
                            _.defer(() => {
                                var scrollNode = document.querySelector(`.anchor[data-hash="${nextState.params.name}"]`);
                                if (scrollNode) {
                                    scrollNode.scrollIntoView();
                                    window.document.body.scrollTop -= 70;
                                }
                            });
                        }
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
