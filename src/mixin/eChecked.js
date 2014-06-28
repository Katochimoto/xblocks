/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.eChecked = {
    accessors: {
        checked: {
            get: function() {
                return xblocks.dom.attrs.valueConversion('checked', this.getAttribute('checked'), React.PropTypes.bool);
            },

            set: function(isDisabled) {
                if (isDisabled) {
                    this.setAttribute('checked', '');
                } else {
                    this.removeAttribute('checked');
                }
            }
        }
    }
};
