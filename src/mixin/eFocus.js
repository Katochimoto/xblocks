/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.eFocus = {
    accessors: {
        _focusControl: {
            get: function() {
                return this.firstChild;
            }
        }
    },

    methods: {
        focus: function() {
            this._focusControl.focus();
        },

        blur: function() {
            this._focusControl.blur();
        }
    }
};
