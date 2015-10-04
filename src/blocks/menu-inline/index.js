require('./index.styl');
require('./index.jsx');

var xb = require('context').xb;
var xblocks = require('xblocks');
var lazyFocus = require('utils/lazyFocus');
var Table = require('utils/Table');
var noop = require('_/utility/noop');

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
xb.MenuInline = xblocks.create('xb-menu-inline', [
    require('mixin/element/focus'),
    require('mixin/element/menu'),

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

module.exports = xb.MenuInline;
