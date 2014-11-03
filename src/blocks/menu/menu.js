/* global xblocks, XBPopupElement */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

var XBMenuElementStatic = {};

XBMenuElementStatic._innerClose = function(target) {
    if (target._xbpopup) {
        target._xbpopup.close();
    }
};

xblocks.create('xb-menu', [
    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement()),

        events: {
            'xb-open': function() {
                this._xbfocus = new xblocks.utils.focus.Table(this, {
                    'rowLoop': true,
                    'colLoop': true
                });
            },

            'xb-close': function() {
                this._xbfocus.destroy();
                this._xbfocus = undefined;

                // close all submenus
                Array.prototype.forEach.call(
                    this.querySelectorAll('.xb-menu-target'),
                    XBMenuElementStatic._innerClose
                );

                console.log(this.tether.target);
            },

            // Escape
            'keydown:keypass(27)': function() {
                // TODO при закрытии вложенного окна фокус должен переходить на предка
                this.close();
            },

            // Enter
            'keydown:keypass(13)': function() {
                var item = this._xbfocus.getItem();

                if (item && item.submenuInstance) {
                    item.submenuInstance.open();
                }
            },

            'blur': function() {
                //this.close();
            }
        }
    }
]);
