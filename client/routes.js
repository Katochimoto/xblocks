import _ from 'lodash';
import App from 'components/App';
import GettingStarted from 'components/GettingStarted';
import Examples from 'components/Examples';
import Controls from 'components/Controls';

const routes = [
    {
        path: '/',
        component: App,
        childRoutes: [
            {
                path: 'getting-started',
                component: GettingStarted,
                onEnter: onEnterPath,
                childRoutes: [
                    {
                        path: ':name',
                        component: GettingStarted,
                        onEnter: onEnterSubpath
                    }
                ]
            },
            {
                path: 'examples',
                component: Examples,
                onEnter: onEnterPath,
                childRoutes: [
                    {
                        path: ':name',
                        component: Examples,
                        onEnter: onEnterSubpath
                    }
                ]
            },
            {
                path: 'controls',
                component: Controls,
                onEnter: onEnterPath,
                childRoutes: [
                    {
                        path: ':name',
                        component: Controls,
                        onEnter: onEnterSubpath
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

function onEnterPath() {
    _.defer(() => {
        window.scrollTo(0, 0);
        Prism.highlightAll();
    });
}

function onEnterSubpath(nextState) {
    _.defer(() => {
        var scrollNode = document.querySelector(`.anchor[data-hash="${nextState.params.name}"]`);
        if (scrollNode) {
            scrollNode.scrollIntoView();
            window.document.body.scrollTop -= 70;
        }
    });
}
