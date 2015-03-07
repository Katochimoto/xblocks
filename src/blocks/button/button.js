/* global xblocks, xb */
/* jshint strict: false */

/*! borschik:include:button.jsx.js */

/**
 * xb-button html element
 *
 * @class xb.Button
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
xb.Button = xblocks.create('xb-button', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'accessors': {
            'defaultValue': {
                'get': function() {
                    var type = this.attrs.type;
                    if (type === 'checkbox' || type === 'radio') {
                        return 'on';
                    }

                    return '';
                }
            }
        }
    }
]);
