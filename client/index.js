import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../lib/xblocks/dist/xblocks.css';
import 'resources/style';

import { Router } from 'react-router';
import { createHashHistory } from 'history';
import routeConfig from './routes';

var app = document.body.appendChild(document.createElement('div'));
app.id = 'app';

ReactDOM.render((
    <Router
        history={createHashHistory()}
        routes={routeConfig} />

), document.getElementById('app'));
