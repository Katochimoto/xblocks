/* global xblocks, global, React */
/* jshint strict: false */

/*! borschik:include:ico.jsx.js */

xblocks.create('xb-ico', [
    xblocks.mixin.eDisabled,

    {
        accessors: {
            active: {
                get: function() {
                    return xblocks.dom.attrs.valueConversion(
                        'active',
                        this.getAttribute('active'),
                        React.PropTypes.bool
                    );
                },

                set: function(isActive) {
                    if (isActive) {
                        this.setAttribute('active', '');
                    } else {
                        this.removeAttribute('active');
                    }
                }
            }
        }
    }
]);
