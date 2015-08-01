//jscs:disable
/* global xblocks, xb */
/* jshint strict: false */
//jscs:enable

/*! borschik:include:select.jsx.js */

/**
 * xb-select html element
 *
 * in the development
 *
 * @class xb.Select
 * @augments HTMLSelectElement
 * @memberof xb
 */
xb.Select = xblocks.create('xb-select', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLSelectElement.prototype)
    }
]);
