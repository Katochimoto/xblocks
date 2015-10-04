require('./index.styl');
require('./index.jsx');

var xb = require('context').xb;
var xblocks = require('xblocks');

/**
 * xb-menuseparator html element
 *
 * @class xb.Menuseparator
 * @memberof xb
 * @augments HTMLElement
 */
xb.Menuseparator = xblocks.create('xb-menuseparator', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);

module.exports = xb.Menuseparator;
