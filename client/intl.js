import _ from 'lodash';
import { addLocaleData } from 'react-intl';

let locale = (navigator.language || navigator.browserLanguage).split('-')[ 0 ];
let req = require.context('../locales', false, /\.json$/);
let messages = {};

let lang = window.location && window.location.search.match(/(?:\&|\?)lang=(ru|en)(?:&|$)/);
if (lang && lang[1]) {
    locale = lang[1];
}

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
