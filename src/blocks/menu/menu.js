/* global global, xblocks, XBPopupElement, __forEach, __doc */
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
            event.stopImmediatePropagation();
            this.focus();
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

/* jshint -W098 */
var XBMenuElement = xblocks.create('xb-menu', [
    XBMenuElementCommon,

    {
        'prototype': Object.create(XBPopupElement.prototype || new XBPopupElement()),

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
                    parentMenu.focus();
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
                this.style.visibility = 'visible';
                // the focus is not put on the invisible element
                // put again
                this.focus();
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
