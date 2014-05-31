(function(xblocks) {
    /*! borschik:include:button.jsx.js */

    var base = {
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
        }
    };

    xblocks.create('xb-button', xblocks.utils.merge(true, base, {
        prototype: Object.create(HTMLButtonElement.prototype)
    }));

}(xblocks));
