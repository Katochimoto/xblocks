/**
 * Value element interface.
 * The value can be changed only through the attribute.
 *
 * @example
 * xblocks.create('xb-checkbox', [
 *     xblocks.mixin.eInputValueProps,
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
 * @memberOf xblocks.mixin
 * @type {object}
 */
module.exports = {
    'accessors': {

        /**
         * @prop {string} value
         */
        'value': {
            'attribute': {
                'name': 'value'
            },

            'get': function () {
                return String(this.getAttribute('value') || this.defaultValue || '');
            }
        },

        /**
         * @prop {string} defaultValue
         */
        'defaultValue': {
            'get': function () {
                return '';
            }
        }
    }
};
