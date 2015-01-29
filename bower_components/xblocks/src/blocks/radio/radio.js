/* global xblocks */
/* jshint strict: false */

/*! borschik:include:radio.jsx.js */

xblocks.create('xb-radio', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'accessors': {
            'defaultValue': {
                get: function() {
                    return 'on';
                }
            }
        }
    }
]);
