/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:input.jsx.js */

xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,

    {
        prototype: Object.create(HTMLElement.prototype),

        methods: {
            focus: function() {
                var controlNode = this.querySelector('input,textarea');
                if (controlNode) {
                    controlNode.focus();
                }
            },

            blur: function() {
                var controlNode = this.querySelector('input,textarea');
                if (controlNode) {
                    controlNode.blur();
                }
            }
        }
    }
]);
