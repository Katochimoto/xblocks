/* global xblocks */
/* jshint strict: false */

xblocks.mixin.vChecked = {

    /**
     * @returns {boolean}
     */
    isChecked: function() {
        if (this.refs.checkControl) {
            return this.refs.checkControl.getDOMNode().checked;
        }
    },

    /**
     * @param {boolean} isChecked
     */
    setChecked: function(isChecked) {
        if (this.refs.checkControl) {
            this.refs.checkControl.getDOMNode().checked = Boolean(isChecked);
        }
    }
};
