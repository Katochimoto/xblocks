import _ from 'lodash';
import { addLocaleData } from 'react-intl';

const locale = (navigator.language || navigator.browserLanguage).split('-')[ 0 ];

let req = require.context('../locales', false, /\.json$/);
let messages = {};

req.keys().forEach(function (file) {
    let loc = file.replace('./', '').replace('.json', '');
    messages[ loc ] = req(file);
});

messages = _.assign({}, messages[ 'en' ], messages[ locale ] || {});

let reactIntlData = require.context('react-intl/locale-data', false, /^\.\/(ru|en)\.js$/);
addLocaleData(reactIntlData(`./${locale}.js`));

if (!window.Intl) {
    require('intl');

    let intlData = require.context('intl/locale-data/jsonp', false, /^\.\/(ru|en)\.js$/);
    intlData.keys().forEach(function (file) {
        intlData(file);
    });
}

export {
    locale,
    messages
};
