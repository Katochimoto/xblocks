/* global xblocks */
/* jshint strict: false */

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
 * @name eFocus
 * @type {{methods: {focus: focus, blur: blur}}}
 */
xblocks.mixin.eFocus = {
    methods: {
        focus: function() {
            this.firstChild.focus();
        },

        blur: function() {
            this.firstChild.blur();
        }
    }
};
