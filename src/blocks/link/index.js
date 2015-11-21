require('./index.styl');
require('./index.jsx');

var xb = require('context').xb;
var xblocks = require('xblocks');

/**
 * xb-link html element
 *
 * @class xb.Link
 * @memberof xb
 * @augments HTMLAnchorElement
 * @mixes xblocks.mixin.eDisabled
 */
xb.Link = xblocks.create('xb-link', [
    require('mixin/element/disabled'),

    {
        prototype: Object.create(HTMLAnchorElement.prototype)
    }
]);

module.exports = xb.Link;
