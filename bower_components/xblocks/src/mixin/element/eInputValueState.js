/* global xblocks */
/* jshint strict: false */

xblocks.mixin.eInputValueState = {
    'accessors': {
        'value': {
            'attribute': {
                'name': 'value'
            },

            'get': function() {
                var component = this.xblock.getMountedComponent();

                if (component && typeof(component.state.value) !== 'undefined') {
                    return component.state.value;
                }

                return String(this.getAttribute('value') || this.defaultValue || '');
            },

            'set': function(value) {
                var component = this.xblock.getMountedComponent();

                if (component) {
                    component.setState({ 'value': String(value) });
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
