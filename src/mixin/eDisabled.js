/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.eDisabled = {
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
    }
};
