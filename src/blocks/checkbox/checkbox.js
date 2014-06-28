/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:checkbox.jsx.js */

xblocks.create('xb-checkbox', [
    xblocks.mixin.eDisabled,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            value: {
                get: function() {
                    if (this.xblock._isMountedComponent()) {
                        return this.xblock._component.props.value;

                    } else {
                        var controlNode = this.querySelector('input');
                        return (controlNode ? controlNode.value : '');
                    }
                },

                set: function(value) {
                    if (this.xblock._isMountedComponent()) {
                        this.xblock._component.setProps({
                            'value': String(value)
                        });

                    } else {
                        var controlNode = this.querySelector('input');
                        if (controlNode) {
                            controlNode.value = String(value);
                        }
                    }
                }
            }
        },

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
