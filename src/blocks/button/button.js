/* global xblocks, global, React */
/* jshint strict: false */

/*! borschik:include:button.jsx.js */

xblocks.create('xb-button', {
    prototype: Object.create(HTMLButtonElement.prototype),

    accessors: {
        disabled: {
            get: function() {
                return Boolean(xblocks.dom.attrs.getRealValue('disabled', this.getAttribute('disabled')));
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
