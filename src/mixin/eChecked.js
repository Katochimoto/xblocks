/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.eChecked = {
    accessors: {
        checked: {
            get: function() {
                if (this.xblock._isMountedComponent()) {
                    return this.xblock._component.state.checked;

                } else {
                    return Boolean(this.querySelector('input:checked'));
                }
            },

            set: function(isChecked) {
                if (this.xblock._isMountedComponent()) {
                    this.xblock.update({
                        'checked': Boolean(isChecked)
                    });

                } else {
                    var controlNode = this.querySelector('input');
                    if (controlNode) {
                        controlNode.checked = Boolean(isChecked);
                    }
                }
            }
        }
    }
};
