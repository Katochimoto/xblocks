import './index.styl';
import './index.jsx';

import { xb } from 'context';
import { create } from 'xblocks-core';
import lazyFocus from 'utils/lazyFocus';
import Table from 'utils/Table';
import noop from 'lodash/noop';
import mixinElementMenu from 'mixin/element/menu';
import mixinElementFocus from 'mixin/element/focus';

var menuCommon = {
    init: function () {
        if (this._xbFocus) {
            this._xbFocus.destroy();
        }

        this._xbFocus = new Table(this, {
            'col': 'xb-menu-inline:not([disabled])',
            'rowLoop': true,
            'colLoop': true
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
            'xb-created': menuCommon.init,

            'xb-repaint': menuCommon.init,

            blur: function () {
                if (!this.hasOpenSubmenu) {
                    this._xbFocus.blurItem();
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
