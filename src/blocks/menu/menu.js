/* global xblocks, XBPopupElement */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

var XBMenuElementStatic = {};

XBMenuElementStatic._innerClose = function(target) {
    if (target.xbPopup) {
        target.xbPopup.close();
    }
};

xblocks.create('xb-menu', [
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement()),

        events: {
            'xb-open-after': function() {
                this._xbFocus = new xblocks.utils.focus.Table(this, {
                    'rowLoop': true,
                    'colLoop': true
                });

                this.focus();
            },

            'xb-close-before': function() {
                this._xbFocus.destroy();
                this._xbFocus = null;

                Array.prototype.forEach.call(this.querySelectorAll('.xb-menu-target'), XBMenuElementStatic._innerClose);
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
