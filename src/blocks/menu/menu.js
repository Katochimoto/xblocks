/* global xblocks, XBPopupElement */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

xblocks.create('xb-menu', [
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement()),

        events: {
            'open-after': function() {
                this._xbFocus = new xblocks.utils.focus.Table(this, {
                    'rowLoop': true,
                    'colLoop': true
                });
                this.focus();
            },

            'close-before': function() {
                this._xbFocus.destroy();
                this._xbFocus = null;
                Array.prototype.forEach.call(this.querySelectorAll('.xb-menu-target'), _blocksMenuInnerClose);
            },

            // Escape
            'keydown:keypass(27)': function() {
                // TODO при закрытии вложенного окна фокус должен переходить на предка

                this.close();
            },

            'blur': function() {
                //this.close();
            }
        }
    }
]);

function _blocksMenuInnerClose(target) {
    if (target.xbPopup) {
        target.xbPopup.close();
    }
}
