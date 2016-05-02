import 'resources/prism.css';
import '../lib/xblocks/dist/xblocks.css';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import 'resources/style';

import { Router, hashHistory } from 'react-router';
import { IntlProvider } from 'react-intl';
import routeConfig from './routes';
import { locale, messages } from './intl';

let app = document.body.appendChild(document.createElement('div'));
app.id = 'app';

ReactDOM.render((
    <IntlProvider locale={locale} messages={messages}>
        <Router
            history={hashHistory}
            routes={routeConfig} />
    </IntlProvider>
), app);
