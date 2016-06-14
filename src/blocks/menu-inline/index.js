import './index.styl';
import './index.jsx';

import { xb } from 'context';
import { create } from 'xblocks-core';
import lazyFocus from 'utils/lazyFocus';
import TableNavigator from 'utils/TableNavigator';
import noop from 'lodash/noop';
import mixinElementMenu from 'mixin/element/menu';
import mixinElementFocus from 'mixin/element/focus';
import ConstantMenu from 'constants/menu';

const MENU_COMMON = {
    init: function () {
        if (this[ ConstantMenu.TABLE ]) {
            this[ ConstantMenu.TABLE ].destroy();
        }

        this[ ConstantMenu.TABLE ] = new TableNavigator(this, {
            col: 'xb-menu-inline:not([disabled])',
            rowLoop: true,
            colLoop: true
        });
    }
};

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
            'xb-created': MENU_COMMON.init,

            'xb-repaint': MENU_COMMON.init,

            blur: function () {
                if (!this.hasOpenSubmenu) {
                    this[ ConstantMenu.TABLE ].blurItem();
                }
            }
        },

        methods: {
            open: noop,

            close: function () {
                // FireFox does not fire a blur event
                lazyFocus(this);
            }
        }
    }
]);
