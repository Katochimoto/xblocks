// require('./index.styl');
require('./index.jsx');

var xblocks = require('xblocks');

/**
 * xb-link html element
 *
 * @class xb.Link
 * @memberof xb
 * @augments HTMLAnchorElement
 * @mixes xblocks.mixin.eDisabled
 */
module.exports = xblocks.create('xb-link', [
    require('mixin/element/disabled'),

    {
        'prototype': Object.create(HTMLAnchorElement.prototype)
    }
]);
