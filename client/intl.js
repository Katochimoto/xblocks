import _ from 'lodash';
import { addLocaleData } from 'react-intl';

const locale = navigator.language.split('-')[ 0 ];

var req = require.context('../locales', false, /\.json$/);
var messages = {};

req.keys().forEach((file) => {
    let loc = file.replace('./', '').replace('.json', '');
    messages[ loc ] = req(file);
});

messages = _.assign({}, messages[ 'en' ], messages[ locale ] || {});

var intlReq = require.context('react-intl/locale-data', false, /(ru|en)\.js$/);
addLocaleData(intlReq(`./${locale}.js`));

export {
    locale,
    messages
};
