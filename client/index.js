import 'resources/prism.css';
import '../lib/xblocks/dist/xblocks.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'resources/style';

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
