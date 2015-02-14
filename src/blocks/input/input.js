/* global xblocks, xb */
/* jshint strict: false */

/*! borschik:include:input.jsx.js */

/**
 * @class xb.Input
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eInputValueState
 * @mixes xblocks.mixin.eFocus
 */
xb.Input = xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLElement.prototype)
    }
]);
