// require('./index.styl');
require('./_contextmenu');
require('./index.jsx');

var xblocks = require('xblocks');
var lazyFocus = require('utils/lazyFocus');

var _xbMenu = {

    /**
     * @param {xb.Menuitem} target
     * @this {global}
     */
    closeSubmenu: function (target) {
        if (target._xbpopup) {
            target._xbpopup.close();
        }
    },

    /**
     * The default setting for the menu
     * @returns {Object}
     * @this {xb.Menu}
     */
    tetherDefaultOptions: function () {
        var options = _xbPopup.tetherDefaultOptions.call(this);
        options.constraints = [
            {
                'to': 'scrollParent',
                'attachment': 'element'
            },
            {
                'to': 'window',
                'attachment': 'element'
            }
        ];

        return options;
    }
};

/**
 * xb-menu html element
 *
 * @class xb.Menu
 * @augments xb.Popup
 * @memberof xb
 * @mixes xblocks.mixin.eMenu
 */
module.exports = xblocks.create('xb-menu', [
    require('mixin/element/menu'),

    {
        'prototype': Object.create(xb.Popup.prototype || new xb.Popup()),

        'events': {
            'xb-before-open': function () {
                this.style.visibility = 'hidden';
            },

            'xb-open': function () {
                this._xbFocus = new xblocks.utils.Table(this, {
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

            'xb-close': function () {
                if (this._xbFocus) {
                    this._xbFocus.destroy();
                    this._xbFocus = undefined;
                }

                this._closeAllSubmenu();
            },

            'keydown:keypass(27)': function () {
                this.close();

                // focus of ancestor
                var parentMenu = this.parentMenu;
                if (parentMenu) {
                    lazyFocus(parentMenu);
                }
            },

            'blur': function () {
                if (!this.hasOpenSubmenu) {
                    this.close();
                    // event.relatedTarget is null in firefox
                    global.setImmediate(this._closeUpFocus.bind(this));
                }
            }
        },

        /**
         * @lends xb.Menu.prototype
         */
        'accessors': {

            /**
             * @readonly
             * @prop {Object} default options
             */
            'defaultOptions': {
                'get': _xbMenu.tetherDefaultOptions
            },

            /**
             * @readonly
             * @prop {xb.Menu} [parentMenu] menu-ancestor
             */
            'parentMenu': {
                'get': function () {
                    return this.tether.target.menuInstance;
                }
            },

            /**
             * @readonly
             * @prop {xb.Menu} [firstParentMenu] the first menu ancestor
             */
            'firstParentMenu': {
                'get': function () {
                    var parentMenu = this.parentMenu;

                    if (parentMenu) {
                        return parentMenu.firstParentMenu || parentMenu;
                    }

                    return this;
                }
            }
        },

        'methods': {
            '_closeAllSubmenu': function () {
                __forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    _xbMenu.closeSubmenu
                );
            },

            '_afterOpen': function () {
                this.position();
                this.style.visibility = 'visible';
                // the focus is not put on the invisible element
                // put again
                lazyFocus(this);
            },

            '_closeUpFocus': function () {
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
