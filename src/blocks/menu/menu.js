/* global global, xblocks, XBPopupElement */
/* jshint strict: false */

/**
 * Checked in:
 * ChromeCanary 40
 * FireFox Developer Edition 35
 */

/*! borschik:include:menu.jsx.js */

var XBMenuElementStatic = {};

XBMenuElementStatic._closeSubmenu = function(target) {
    if (target._xbpopup) {
        target._xbpopup.close();
    }
};

/**
 * @this {HTMLElement}
 */
XBMenuElementStatic._closeUpFocus = function() {
    var focusMenu = xblocks.react.findReactContainerForNode(global.document.activeElement);
    var parent = this.parentMenu;

    while (parent) {
        if (parent === focusMenu) {
            break;
        }

        parent.close();
        parent = parent.parentMenu;
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
                if (this._xbfocus) {
                    this._xbfocus.destroy();
                    this._xbfocus = undefined;
                }

                // close all submenus
                this.closeSubmenu();
            },

            'keydown:keypass(27)': function() {
                this.close();

                // focus of ancestor
                var parentMenu = this.parentMenu;
                if (parentMenu) {
                    parentMenu.focus();
                }
            },

            'keydown:keypass(13,39)': function() {
                var item = this._xbfocus.getItem();

                if (item && item.submenuInstance) {
                    item.submenuInstance.open();
                }
            },

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this.close();
                    // event.relatedTarget is null in firefox
                    global.setImmediate(XBMenuElementStatic._closeUpFocus.bind(this));
                }
            }
        },

        accessors: {
            hasOpenSubmenu: {
                get: function() {
                    return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
                }
            },

            parentMenu: {
                get: function() {
                    return this.tether.target.menuInstance;
                }
            }
        },

        methods: {
            closeSubmenu: function() {
                Array.prototype.forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    XBMenuElementStatic._closeSubmenu
                );
            }
        }
    }
]);
