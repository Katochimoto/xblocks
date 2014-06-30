/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:input.jsx.js */

xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLElement.prototype),

        accessors: {
            _focusControl: {
                get: function() {
                    var controlNode = this.getElementsByClassName('_xb-input_controller');
                    return (controlNode.length ? controlNode[0] : undefined);
                }
            }
        }
    }
]);
