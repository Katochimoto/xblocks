/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:input.jsx.js */

xblocks.create('xb-input', {
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
        },

        disabled: {
            get: function() {
                return xblocks.dom.attrs.valueConversion('disabled', this.getAttribute('disabled'), React.PropTypes.bool);
            },

            set: function(isDisabled) {
                if (isDisabled) {
                    this.setAttribute('disabled', '');
                } else {
                    this.removeAttribute('disabled');
                }
            }
        }
    },

    methods: {
        focus: function() {
            this.querySelector('input,textarea').focus();
        },

        blur: function() {
            this.querySelector('input,textarea').blur();
        }
    }
});
