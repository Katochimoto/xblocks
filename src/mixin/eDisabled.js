/* global xblocks, React */
/* jshint strict: false */

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
 * @memberOf xblocks.mixin
 * @name eDisabled
 * @type {{accessors: {disabled: {get: get, set: set}}}}
 */
xblocks.mixin.eDisabled = {
    accessors: {
        disabled: {
            get: function() {
                return xblocks.dom.attrs.valueConversion(
                    'disabled',
                    this.getAttribute('disabled'),
                    React.PropTypes.bool
                );
            },

            set: function(isDisabled) {
                if (isDisabled) {
                    this.setAttribute('disabled', '');
                } else {
                    this.removeAttribute('disabled');
                }
            }
        }
    }
};
