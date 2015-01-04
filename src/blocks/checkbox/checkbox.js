/* global xblocks */
/* jshint strict: false */

/*! borschik:include:checkbox.jsx.js */

xblocks.create('xb-checkbox', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            defaultValue: {
                get: function() {
                    return 'on';
                }
            }
        }
    }
]);
