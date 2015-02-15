/* global xblocks, xb */
/* jshint strict: false */

/*! borschik:include:radio.jsx.js */

/**
 * @class xb.Radio
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
xb.Radio = xblocks.create('xb-radio', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'accessors': {
            'defaultValue': {
                'get': function() {
                    return 'on';
                }
            }
        }
    }
]);
