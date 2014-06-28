/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:button.jsx.js */

xblocks.create('xb-button', [
    xblocks.mixin.eDisabled,

    {
        prototype: Object.create(HTMLButtonElement.prototype),

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
