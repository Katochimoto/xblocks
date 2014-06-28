/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.eChecked = {
    accessors: {
        checked: {
            get: function() {
                if (this.xblock._isMountedComponent()) {
                    return this.xblock._component.state.checked;

                } else {
                    var controlNode = this.querySelector('input');
                    return (controlNode ? controlNode.checked : false);
                }
            },

            set: function(value) {
                if (this.xblock._isMountedComponent()) {
                    this.xblock._component.setState({
                        'checked': Boolean(value)
                    });

                } else {
                    var controlNode = this.querySelector('input');
                    if (controlNode) {
                        controlNode.checked = Boolean(value);
                    }
                }
            }
        }
    }
};
