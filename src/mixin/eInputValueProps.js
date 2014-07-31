/* global xblocks */
/* jshint strict: false */

xblocks.mixin.eInputValueProps = {
    accessors: {
        value: {
            attribute: {
                name: 'value'
            },

            get: function() {
                return '' + (this.getAttribute('value') || this.defaultValue || '');
            }
        },

        defaultValue: {
            get: function() {
                return '';
            }
        }
    }
};
