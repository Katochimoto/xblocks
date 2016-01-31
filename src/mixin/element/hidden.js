/**
 * Hidden element interface
 *
 * <xb-button hidden>button</xb-button>
 *
 * @example
 * import { create } from 'xblocks-core';
 * import mixinHidden from 'mixin/element/hidden';
 *
 * create('xb-button', [
 *     mixinHidden,
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
 * @prop {boolean} hidden
 * @type {Object}
 */
export default {
    accessors: {
        hidden: {
            attribute: {
                boolean: true
            }
        }
    }
};
