/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:checkbox.jsx.js */

xblocks.create('xb-checkbox', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        methods: {
            focus: function() {
                this.firstChild.focus();
            },

            blur: function() {
                this.firstChild.blur();
            }
        }
    }
]);
