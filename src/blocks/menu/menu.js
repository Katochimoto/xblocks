/* global global, xblocks, __forEach, xb */
/* jshint strict: false */

/*! borschik:include:_contextmenu.js */
/*! borschik:include:menu.jsx.js */

var XBMenuElementStatic = {

    /**
     * @param {XBMenuitemElement} target
     * @this {global}
     */
    _closeSubmenu: function(target) {
        if (target._xbpopup) {
            target._xbpopup.close();
        }
    }
};

var XBMenuElementCommon = {
    'events': {

        /**
         * @this {XBMenuitemElement}
         */
        'click:delegate(xb-menuitem:not([disabled]))': function() {
            if (this.submenuInstance) {
                this.submenuInstance.open();
            }
        },

        /**
         * @this {XBMenuitemElement}
         */
        'keydown:keypass(13,39)': function() {
            var item = this._xbfocus.getItem();

            if (item && item.submenuInstance) {
                item.submenuInstance.open();
            }
        },

        'jsx-scroll-throttle': function(event) {
            // close all submenu
            event.stopImmediatePropagation();
            xblocks.utils.lazyFocus(this);
        },

        'scrollwheel:delegate(._popup-content)': function(event) {
            var delta = event.delta;
            var scrollTop = this.scrollTop;
            var offsetHeight = this.offsetHeight;
            var scrollHeight = this.scrollHeight;

            if (delta > 0 && scrollTop === 0 ||
                delta < 0 && scrollTop + offsetHeight >= scrollHeight ||
                offsetHeight === scrollHeight) {

                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }
    },

    'accessors': {
        'hasOpenSubmenu': {
            get: function() {
                return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
            }
        }
    }
};

/**
 * @class xb.Menu
 * @augments xb.Popup
 * @memberof xb
 */
xb.Menu = xblocks.create('xb-menu', [
    XBMenuElementCommon,

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
                get: function() {
                    return this.tether.target.menuInstance;
                }
            },

            'firstParentMenu': {
                get: function() {
                    var parentMenu = this.parentMenu;

                    if (parentMenu) {
                        return parentMenu.firstParentMenu || parentMenu;
                    }

                    return this;
                }
            }
        },

        'methods': {
            _closeAllSubmenu: function() {
                __forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    XBMenuElementStatic._closeSubmenu
                );
            },

            _afterOpen: function() {
                this.position();
                this.style.visibility = 'visible';
                // the focus is not put on the invisible element
                // put again
                xblocks.utils.lazyFocus(this);
            },

            _closeUpFocus: function() {
                var focusMenu = xblocks.react.findContainerForNode(this.ownerDocument.activeElement);
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
