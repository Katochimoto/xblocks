/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.eChecked = {
    accessors: {
        checked: {
            get: function() {
                if (this.xblock._isMountedComponent()) {
                    return this.xblock._component.isChecked();

                } else {
                    var controlNode = this.getElementsByClassName('_xb-check_controller');
                    if (controlNode.length) {
                        return controlNode[0].checked;
                    }
                }
            },

            set: function(isChecked) {
                if (this.xblock._isMountedComponent()) {
                    this.xblock._component.setChecked(isChecked);

                } else {
                    var controlNode = this.getElementsByClassName('_xb-check_controller');
                    if (controlNode.length) {
                        controlNode[0].checked = Boolean(isChecked);
                    }
                }
            }
        }
    }
};
