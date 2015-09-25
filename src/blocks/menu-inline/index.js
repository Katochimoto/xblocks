//require('./index.styl');
require('./index.jsx');

var context = require('context');
var xblocks = require('xblocks');

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
module.exports = xblocks.create('xb-menu-inline', [
    require('mixin/element/focus'),
    require('mixin/element/menu'),

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': _xbMenuInline.init,

            'xb-repaint': _xbMenuInline.init,

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this._xbFocus.blurItem();
                }
            }
        },

        methods: {
            open: __noop,

            close: function() {
                // FireFox does not fire a blur event
                context.setTimeout(this.focus.bind(this), 0);
            }
        }
    }
]);
