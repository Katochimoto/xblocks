/* global xblocks, React */
/* jshint strict: false */

/**
 * Checked element interface
 *
 * <xb-checkbox name="a" checked>checkbox</xb-checkbox>
 * <xb-radio name="b" checked>radio 1</xb-radio> <xb-radio name="b">radio 2</xb-radio>
 * <xb-button name="c" type="checkbox" checked>button checkbox</xb-button>
 * <xb-button name="d" type="radio" checked>button radio 1</xb-button> <xb-button name="d" type="radio">button radio 2</xb-button>
 *
 * @example
 * xblocks.create('xb-checkbox', [
 *     xblocks.mixin.eChecked,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-checkbox');
 * // read
 * console.log(e.checked)
 * // false
 *
 * // write
 * e.checked = true;
 * // true
 *
 * // jquery write
 * $(e).prop('checked', false)
 * // false
 *
 * @memberOf xblocks.mixin
 * @name eChecked
 * @type {{accessors: {checked: {get: get, set: set}}}}
 */
xblocks.mixin.eChecked = {
    accessors: {
        checked: {
            /**
             * Getter checked value
             * @returns {boolean|undefined}
             */
            get: function() {
                if (this.mounted) {
                    return this.xblock._component.isChecked();

                } else {
                    var controlNode = this.getElementsByClassName('_xb-check_controller');
                    if (controlNode.length) {
                        return controlNode[0].checked;
                    }
                }
            },

            /**
             * Setter checked value
             * @param {boolean} isChecked
             */
            set: function(isChecked) {
                if (this.mounted) {
                    this.xblock._component.setChecked(isChecked);

                } else {
                    var controlNode = this.getElementsByClassName('_xb-check_controller');
                    if (controlNode.length) {
                        controlNode[0].checked = Boolean(isChecked);
                    }
                }
            }
        }
    }
};
