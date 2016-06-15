import './index.styl';
import './index.jsx';
import './contextmenu';

import { xb } from 'context';
import { create } from 'xblocks-core';
import lazyFocus from 'utils/lazyFocus';
import tetherDefaultOptions from 'utils/tetherDefaultOptions';
import TableNavigator from 'utils/TableNavigator';
import getParentMenu from 'utils/getParentMenu';
import immediate from 'setimmediate2/src';
import mixinElementMenu from 'mixin/element/menu';
import ConstantMenu from 'constants/menu';

/**
 * xb-menu html element
 *
 * @class xb.Menu
 * @augments xb.Popup
 * @memberof xb
 * @mixes xblocks.mixin.menu
 */
export default xb.Menu = create('xb-menu', [
    mixinElementMenu,

    {
        prototype: Object.create(document.createElement('xb-popup').constructor).prototype,

        events: {
            'xb-before-open': function () {
                this.style.visibility = 'hidden';
            },

            'xb-open': function () {
                this[ ConstantMenu.TABLE ] = new TableNavigator(this, {
                    rowLoop: true,
                    colLoop: true
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
                if (this[ ConstantMenu.TABLE ]) {
                    this[ ConstantMenu.TABLE ].destroy();
                    this[ ConstantMenu.TABLE ] = undefined;
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
             * @prop {Object} default setting for the menu
             * @readonly
             */
            defaultOptions: {
                get: function () {
                    let options = tetherDefaultOptions.call(this);

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
            }
        },

        methods: {
            _closeAllSubmenu: function () {
                Array.prototype.forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    this._closeSubmenu
                );
            },

            /**
             * @param {xb.Menuitem} target
             */
            _closeSubmenu: function (target) {
                if (target._xbpopup) {
                    target._xbpopup.close();
                }
            },

            _afterOpen: function () {
                this.position();
                this.style.visibility = 'visible';
                // the focus is not put on the invisible element
                // put again
                lazyFocus(this);
            },

            _closeUpFocus: function () {
                const focusMenu = getParentMenu(this.ownerDocument.activeElement);
                let parent = this.parentMenu;

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
