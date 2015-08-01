//jscs:disable
/* global xblocks */
/* jshint strict: false */
//jscs:enable

/**
 * Disabled element interface
 *
 * <xb-button disabled>button</xb-button>
 *
 * @example
 * xblocks.create('xb-button', [
 *     xblocks.mixin.eDisabled,
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
 * console.log(e.disabled)
 * // false
 *
 * // write
 * e.disabled = true;
 * // true
 *
 * // jquery write
 * $(e).prop('disabled', false)
 * // false
 *
 * @prop {boolean} disabled
 *
 * @memberOf xblocks.mixin
 * @type {object}
 */
xblocks.mixin.eDisabled = {
    'accessors': {
        'disabled': {
            'attribute': {
                'boolean': true
            }
        }
    }
};
