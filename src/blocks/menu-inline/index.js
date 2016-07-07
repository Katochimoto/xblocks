import './style';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
import lazyFocus from 'utils/lazyFocus';
import TableNavigator from 'utils/TableNavigator';
import mixinElementMenu from 'mixin/element/menu';
import mixinElementFocus from 'mixin/element/focus';
import ConstantMenu from 'constants/menu';

/**
 * xb-menu-inline html element
 *
 * @class xb.MenuInline
 * @memberof xb
 * @augments HTMLElement
 * @mixes xblocks.mixin.eFocus
 * @mixes xblocks.mixin.eMenu
 */
export default xb.MenuInline = create('xb-menu-inline', [
    mixinElementFocus,
    mixinElementMenu,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': function () {
                this[ ConstantMenu.TABLE ] = new TableNavigator(this, {
                    col: 'xb-menu-inline:not([disabled])',
                    rowLoop: true,
                    colLoop: true
                });
            },

            'xb-destroy': function () {
                const table = this[ ConstantMenu.TABLE ];
                if (table) {
                    this[ ConstantMenu.TABLE ] = undefined;
                    table.destroy();
                }
            },

            'blur': function () {
                if (!this.hasOpenSubmenu) {
                    this[ ConstantMenu.TABLE ].blurItem();
                }
            }
        },

        /**
         * @lends xb.MenuInline.prototype
         */
        accessors: {
            componentStyle: {
                get: function () {
                    return {
                        [ this.xtagName ]: require('!!raw!postcss!stylus!./style/inline.styl')
                    };
                }
            },

            isShadowSupported: {
                get: _.stubFalse
            }
        },

        methods: {
            open: _.noop,

            close: function () {
                // FireFox does not fire a blur event
                lazyFocus(this);
            }
        }
    }
]);
