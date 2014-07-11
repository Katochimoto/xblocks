/* global xblocks, React */
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
 * @name eHidden
 * @type {{accessors: {disabled: {get: get, set: set}}}}
 */
xblocks.mixin.eHidden = {
    accessors: {
        disabled: {
            get: function() {
                return xblocks.dom.attrs.valueConversion(
                    'hidden',
                    this.getAttribute('hidden'),
                    React.PropTypes.bool
                );
            },

            set: function(isDisabled) {
                if (isDisabled) {
                    this.setAttribute('hidden', '');
                } else {
                    this.removeAttribute('hidden');
                }
            }
        }
    }
};
