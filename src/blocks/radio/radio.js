/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:radio.jsx.js */

xblocks.create('xb-radio', [
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
