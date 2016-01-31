/**
 * Disabled element interface
 *
 * <xb-button disabled>button</xb-button>
 *
 * @example
 * import { create } from 'xblocks-core';
 * import mixinDisabled from 'mixin/element/disabled';
 *
 * create('xb-button', [
 *     mixinDisabled,
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
 * @type {Object}
 */
export default {
    accessors: {
        disabled: {
            attribute: {
                boolean: true
            }
        }
    }
};
