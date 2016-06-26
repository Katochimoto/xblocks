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
 * @type {Object}
 */
export default {
    lifecycle: {
        created: function () {
            const tabindex = this.getAttribute('tabindex');
            if (tabindex === null && !this.hasAttribute('disabled')) {
                this.setAttribute('tabindex', '0');
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
            }
        }
    }
    /*
    methods: {
        focus: function () {
            _.invoke(ReactDOM.findDOMNode(this.getComponent()), 'focus');
        },

        blur: function () {
            _.invoke(ReactDOM.findDOMNode(this.getComponent()), 'blur');
        }
    }
    */
};
