(function(xblocks) {
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
                        this.setAttribute('disabled', 'disabled');
                    } else {
                        this.removeAttribute('disabled');
                    }
                }
            }
        }
    });

}(xblocks));
