import _ from 'lodash';
import ReactDOM from 'react-dom';

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
    methods: {
        focus: function () {
            _.invoke(ReactDOM.findDOMNode(this.getComponent()), 'focus');
        },

        blur: function () {
            _.invoke(ReactDOM.findDOMNode(this.getComponent()), 'blur');
        }
    }
};
