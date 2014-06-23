/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:button.jsx.js */

xblocks.create('xb-button', {
    prototype: Object.create(HTMLButtonElement.prototype),

    accessors: {
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
            this.firstChild.focus();
        },

        blur: function() {
            this.firstChild.blur();
        }
    }
});
