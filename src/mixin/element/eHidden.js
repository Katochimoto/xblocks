/* global xblocks */
/* jshint strict: false */

/**
 * Hidden element interface
 *
 * <xb-button hidden>button</xb-button>
 *
 * @example
 * xblocks.create('xb-button', [
 *     xblocks.mixin.eHidden,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-button');
 * // read
 * console.log(e.hidden)
 * // false
 *
 * // write
 * e.hidden = true;
 * // true
 *
 * // jquery write
 * $(e).prop('hidden', false)
 * // false
 *
 * @memberOf xblocks.mixin
 * @type {object}
 */
xblocks.mixin.eHidden = {
    'accessors': {
        'hidden': {
            'attribute': {
                'boolean': true
            }
        }
    }
};
