/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.eFocusFirstChild = {
    methods: {
        focus: function() {
            this.firstChild.focus();
        },

        blur: function() {
            this.firstChild.blur();
        }
    }
};
