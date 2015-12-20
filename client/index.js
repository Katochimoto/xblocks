import 'resources/prism.css';
import '../lib/xblocks/dist/xblocks.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'resources/style';

import { Router } from 'react-router';
import { createHashHistory } from 'history';
import { IntlProvider } from 'react-intl';

import routeConfig from './routes';
import { locale, messages } from './intl';

let history = createHashHistory();

let app = document.body.appendChild(document.createElement('div'));
app.id = 'app';

ReactDOM.render((
    <IntlProvider locale={locale} messages={messages}>
        <Router
            history={history}
            routes={routeConfig} />
    </IntlProvider>
), app);
