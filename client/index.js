import '../node_modules/bootstrap/dist/css/bootstrap.css';
import '../lib/xblocks/dist/xblocks.css';
import 'resources/style';

import 'resources/prism.css';
import 'resources/prism.js';

import { Router } from 'react-router';
import { createHashHistory } from 'history';
import routeConfig from './routes';

let history = createHashHistory();

let app = document.body.appendChild(document.createElement('div'));
app.id = 'app';

ReactDOM.render((
    <Router
        history={history}
        routes={routeConfig} />
), app);
