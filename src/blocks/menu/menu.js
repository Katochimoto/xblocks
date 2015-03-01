/* global global, xblocks, __forEach, xb */
/* jshint strict: false */

/*! borschik:include:_contextmenu.js */
/*! borschik:include:menu.jsx.js */

var _xbMenu = {

    /**
     * @param {xb.Menuitem} target
     * @this {global}
     */
    'closeSubmenu': function(target) {
        if (target._xbpopup) {
            target._xbpopup.close();
        }
    }
};

/**
 * @class xb.Menu
 * @augments xb.Popup
 * @memberof xb
 * @mixes xblocks.mixin.eMenu
 */
xb.Menu = xblocks.create('xb-menu', [
    xblocks.mixin.eMenu,

    {
        'prototype': Object.create(xb.Popup.prototype || new xb.Popup()),

        'events': {
            'xb-before-open': function() {
                this.style.visibility = 'hidden';
            },

            'xb-open': function() {
                this._xbfocus = new xblocks.utils.Table(this, {
                    'rowLoop': true,
                    'colLoop': true
                });

                var component = this.xblock.getMountedComponent();
                if (component) {
                    // check show scroll navigator after open menu
                    component.afterOpen(this._afterOpen.bind(this));

                } else {
                    this._afterOpen();
                }
            },

            'xb-close': function() {
                if (this._xbfocus) {
                    this._xbfocus.destroy();
                    this._xbfocus = undefined;
                }

                this._closeAllSubmenu();
            },

            'keydown:keypass(27)': function() {
                this.close();

                // focus of ancestor
                var parentMenu = this.parentMenu;
                if (parentMenu) {
                    xblocks.utils.lazyFocus(parentMenu);
                }
            },

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this.close();
                    // event.relatedTarget is null in firefox
                    global.setImmediate(this._closeUpFocus.bind(this));
                }
            }
        },

        'accessors': {
            'parentMenu': {
                'get': function() {
                    return this.tether.target.menuInstance;
                }
            },

            'firstParentMenu': {
                'get': function() {
                    var parentMenu = this.parentMenu;

                    if (parentMenu) {
                        return parentMenu.firstParentMenu || parentMenu;
                    }

                    return this;
                }
            }
        },

        'methods': {
            '_closeAllSubmenu': function() {
                __forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    _xbMenu.closeSubmenu
                );
            },

            '_afterOpen': function() {
                this.position();
                this.style.visibility = 'visible';
                // the focus is not put on the invisible element
                // put again
                xblocks.utils.lazyFocus(this);
            },

            '_closeUpFocus': function() {
                var focusMenu = xblocks.utils.getParentMenu(this.ownerDocument.activeElement);
                var parent = this.parentMenu;

                while (parent) {
                    if (parent === focusMenu) {
                        break;
                    }

                    parent.close();
                    parent = parent.parentMenu;
                }
            }
        }
    }
]);
