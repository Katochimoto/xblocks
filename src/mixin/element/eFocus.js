//jscs:disable
/* global xblocks */
/* jshint strict: false */
//jscs:enable

/**
 * Focus element interface
 *
 * @example
 * xblocks.create('xb-button', [
 *     xblocks.mixin.eFocus,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-button');
 * // set focus
 * e.focus();
 *
 * // set blur
 * e.blur();
 *
 * @memberOf xblocks.mixin
 * @type {object}
 */
xblocks.mixin.eFocus = {
    'methods': {
        'focus': function() {
            this.firstChild.focus();
        },

        'blur': function() {
            this.firstChild.blur();
        }
    }
};
