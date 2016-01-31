/**
 * Value element interface.
 * The value can be changed only through the attribute.
 *
 * @example
 * import { create } from 'xblocks-core';
 * import mixinInputValueProps from 'mixin/element/inputValueProps';
 *
 * create('xb-checkbox', [
 *     mixinInputValueProps,
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
 * var e = document.createElement('xb-checkbox');
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
                return String(this.getAttribute('value') || this.defaultValue || '');
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
