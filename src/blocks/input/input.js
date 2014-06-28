/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:input.jsx.js */

xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,

    {
        prototype: Object.create(HTMLElement.prototype),

        accessors: {
            value: {
                get: function() {
                    if (this.xblock._isMountedComponent()) {
                        return this.xblock._component.state.value;

                    } else {
                        var controlNode = this.querySelector('input,textarea');
                        return (controlNode ? controlNode.value : '');
                    }
                },

                set: function(value) {
                    if (this.xblock._isMountedComponent()) {
                        this.xblock._component.setState({
                            'value': String(value)
                        });

                    } else {
                        var controlNode = this.querySelector('input,textarea');
                        if (controlNode) {
                            controlNode.value = String(value);
                        }
                    }
                }
            }
        },

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
