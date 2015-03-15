/* global xblocks */
/* jshint strict: false */

/**
 * Value element interface.
 * Уou can edit the value, for example in the input or textarea.
 *
 * @example
 * xblocks.create('xb-input', [
 *     xblocks.mixin.eInputValueState,
 *     {
 *         accessors: {
 *             ...
 *             // override the default values
 *             'defaultValue': {
 *                 'get': function() {
 *                     return 'on';
 *                  }
 *              }
 *         },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-input');
 * // read
 * console.log(e.value)
 * // 1
 *
 * // write
 * e.value = "123";
 * // 123
 *
 * // jquery write
 * $(e).attr('value', '321')
 * // 321
 *
 * @memberOf xblocks.mixin
 * @type {object}
 */
xblocks.mixin.eInputValueState = {
    'accessors': {

        /**
         * @prop {string} value
         */
        'value': {
            'attribute': {
                'name': 'value'
            },

            'get': function() {
                var component = this.xblock && this.xblock.getMountedComponent();

                if (component && typeof(component.state.value) !== 'undefined') {
                    return component.state.value;
                }

                return String(this.getAttribute('value') || this.defaultValue || '');
            },

            'set': function(value) {
                var component = this.xblock && this.xblock.getMountedComponent();

                if (component) {
                    component.setState({ 'value': String(value) });
                }
            }
        },

        /**
         * @prop {string} defaultValue
         */
        'defaultValue': {
            'get': function() {
                return '';
            }
        }
    }
};
