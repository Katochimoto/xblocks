import _ from 'lodash';
import Symbol from 'es6-symbol';

const TABINDEX = Symbol('xblocks-tabindex');

/**
 * Focus element interface
 *
 * @example
 * import { create } from 'xblocks-core';
 * import mixinFocus from 'mixin/element/focus';
 *
 * create('xb-button', [
 *     mixinFocus,
 *     {
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
 * @type {Object}
 */
export default {
    lifecycle: {
        created: function () {
            const tabindex = this.getAttribute('tabindex');
            const disabled = this.hasAttribute('disabled');

            this[ TABINDEX ] = null;

            if (tabindex === null && !disabled) {
                this.setAttribute('tabindex', '0');

            } else if (tabindex && disabled) {
                this[ TABINDEX ] = tabindex;
                this.setAttribute('tabindex', '-1');
            }
        },

        attributeChanged: function (attrName, oldValue, newValue) {
            if (attrName === 'disabled') {
                if (newValue === null) {
                    this.setAttribute('tabindex', this[ TABINDEX ] !== null ? this[ TABINDEX ] : '0');

                } else {
                    this[ TABINDEX ] = this.getAttribute('tabindex');
                    this.setAttribute('tabindex', '-1');
                }

            } else if (attrName === 'tabindex') {
                this[ TABINDEX ] = newValue;
            }
        }
    },

    events: {
        'focus': function () {
            _.invoke(this.getComponent(), 'setState', { focused: true });
        },

        'blur': function () {
            _.invoke(this.getComponent(), 'setState', { focused: false });
        }
    }
};
