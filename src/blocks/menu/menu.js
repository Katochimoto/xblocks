/* global global, xblocks, XBPopupElement */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

var XBMenuElementStatic = {};

XBMenuElementStatic._closeSubmenu = function(target) {
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
                if (this._xbfocus) {
                    this._xbfocus.destroy();
                    this._xbfocus = undefined;
                }

                // close all submenus
                this.closeSubmenu();
            },

            // Escape
            'keydown:keypass(27)': function() {
                this.close();

                // focus of ancestor
                var parentMenu = this.parentMenu;
                if (parentMenu) {
                    parentMenu.unlock();
                    parentMenu.focus();
                }
            },

            // Enter
            'keydown:keypass(13)': function() {
                var item = this._xbfocus.getItem();

                if (item && item.submenuInstance) {
                    if (item.submenuInstance.open()) {
                        this.lock();
                    }
                }
            },

            'blur': function(e) {
                if (!this.hasOpenSubmenu) {
                    this.close();
                    global.setImmediate(function() {
                        console.log('>>1', document.activeElement);
                        console.log('>>2', e.relatedTarget);
                    });
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
            lock: function() {
                if (this._xbfocus) {
                    this._xbfocus.lock(true);
                }
            },

            unlock: function() {
                if (this._xbfocus) {
                    this._xbfocus.lock(false);
                }
            },

            closeSubmenu: function() {
                Array.prototype.forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    XBMenuElementStatic._closeSubmenu
                );
            }
        }
    }
]);
