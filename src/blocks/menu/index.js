import './index.styl';
import './index.jsx';
import './contextmenu';

import { xb } from 'context';
import xblocks from 'xblocks';
import lazyFocus from 'utils/lazyFocus';
import tetherDefaultOptions from 'utils/tetherDefaultOptions';
import Popup from '../popup';
import Table from 'utils/Table';
import getParentMenu from 'utils/getParentMenu';
import immediate from 'setimmediate2/src';
import mixinElementMenu from 'mixin/element/menu';

var forEach = Array.prototype.forEach;

var menuCommon = {

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
        var options = tetherDefaultOptions.call(this);
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
 * @mixes xblocks.mixin.menu
 */
xb.Menu = xblocks.create('xb-menu', [
    mixinElementMenu,

    {
        prototype: Object.create(Popup.prototype || new Popup()),

        events: {
            'xb-before-open': function () {
                this.style.visibility = 'hidden';
            },

            'xb-open': function () {
                this._xbFocus = new Table(this, {
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
                    immediate.setImmediate(this._closeUpFocus.bind(this));
                }
            }
        },

        /**
         * @lends xb.Menu.prototype
         */
        accessors: {

            /**
             * @readonly
             * @prop {Object} default options
             */
            defaultOptions: {
                get: menuCommon.tetherDefaultOptions
            },

            /**
             * @readonly
             * @prop {xb.Menu} [parentMenu] menu-ancestor
             */
            parentMenu: {
                get: function () {
                    return this.tether.target.menuInstance;
                }
            },

            /**
             * @readonly
             * @prop {xb.Menu} [firstParentMenu] the first menu ancestor
             */
            firstParentMenu: {
                get: function () {
                    var parentMenu = this.parentMenu;

                    if (parentMenu) {
                        return parentMenu.firstParentMenu || parentMenu;
                    }

                    return this;
                }
            }
        },

        methods: {
            _closeAllSubmenu: function () {
                forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    menuCommon.closeSubmenu
                );
            },

            _afterOpen: function () {
                this.position();
                this.style.visibility = 'visible';
                // the focus is not put on the invisible element
                // put again
                lazyFocus(this);
            },

            _closeUpFocus: function () {
                var focusMenu = getParentMenu(this.ownerDocument.activeElement);
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

export default xb.Menu;
