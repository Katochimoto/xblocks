/* global xblocks */
/* jshint strict: false */

xblocks.mixin.eInputValueState = {
    'accessors': {
        'value': {
            'attribute': {
                'name': 'value'
            },

            'get': function() {
                if (this.mounted && typeof(this.xblock._component.state.value) !== 'undefined') {
                    return this.xblock._component.state.value;
                }

                return String(this.getAttribute('value') || this.defaultValue || '');
            },

            'set': function(value) {
                if (this.mounted) {
                    this.xblock._component.setState({
                        'value': String(value)
                    });
                }
            }
        },

        'defaultValue': {
            'get': function() {
                return '';
            }
        }
    }
};
