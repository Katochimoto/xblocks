/**
 * Value element interface.
 * Уou can edit the value, for example in the input or textarea.
 *
 * @example
 * import { create } from 'xblocks-core';
 * import mixinInputValueState from 'mixin/element/inputValueState';
 *
 * create('xb-input', [
 *     mixinInputValueState,
 *     {
 *         accessors: {
 *             ...
 *             // override the default values
 *             'defaultValue': {
 *                 'get': function () {
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
 * @type {Object}
 */
export default {
    accessors: {

        /**
         * @prop {string} value
         */
        value: {
            attribute: {
                name: 'value'
            },

            get: function () {
                const component = this.getComponent();

                if (component && typeof component.state.value !== 'undefined') {
                    return component.state.value;
                }

                return String(this.getAttribute('value') || this.defaultValue || '');
            },

            set: function (value) {
                const component = this.getComponent();

                if (component) {
                    component.setState({ value: String(value) });
                }
            }
        },

        /**
         * @prop {string} defaultValue
         */
        defaultValue: {
            get: function () {
                return '';
            }
        }
    }
};
