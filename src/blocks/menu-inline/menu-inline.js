//jscs:disable
/* global xblocks, __noop, xb */
/* jshint strict: false */
//jscs:enable

/**
* Checked in:
* ChromeCanary 40
* FireFox Developer Edition 35
*/

/*! borschik:include:menu-inline.jsx.js */

var _xbMenuInline = {
    'init': function() {
        if (this._xbFocus) {
            this._xbFocus.destroy();
        }

        this._xbFocus = new xblocks.utils.Table(this, {
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
xb.MenuInline = xblocks.create('xb-menu-inline', [
    xblocks.mixin.eFocus,
    xblocks.mixin.eMenu,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            'xb-created': _xbMenuInline.init,

            'xb-repaint': _xbMenuInline.init,

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this._xbFocus.blurItem();
                }
            }
        },

        'methods': {
            'open': __noop,

            'close': function() {
                // FireFox does not fire a blur event
                xblocks.utils.lazyFocus(this);
            }
        }
    }
]);
