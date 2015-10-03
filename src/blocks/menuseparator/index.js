// require('./index.styl');

var xblocks = require('xblocks');

/**
 * xb-menuseparator html element
 *
 * @class xb.Menuseparator
 * @memberof xb
 * @augments HTMLElement
 */
module.exports = xblocks.create('xb-menuseparator', [
    {
        'prototype': Object.create(HTMLElement.prototype)
    }
]);
