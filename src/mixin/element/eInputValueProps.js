/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eInputValueProps = {
    'accessors': {
        'value': {
            'attribute': {
                'name': 'value'
            },

            'get': function() {
                return String(this.getAttribute('value') || this.defaultValue || '');
            }
        },

        'defaultValue': {
            'get': function() {
                return '';
            }
        }
    }
};
