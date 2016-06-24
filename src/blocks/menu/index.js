import './index.styl';
import './index.jsx';
import './contextmenu';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
import lazyFocus from 'utils/lazyFocus';
import popupDefaultOptions from 'utils/popupDefaultOptions';
import TableNavigator from 'utils/TableNavigator';
import getParentMenu from 'utils/getParentMenu';
import immediate from 'setimmediate2/src';
import mixinElementMenu from 'mixin/element/menu';
import ConstantMenu from 'constants/menu';
import ConstantPopup from 'constants/popup';

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

                const component = this.getComponent();

                if (component) {
                    // check show scroll navigator after open menu
                    component.afterOpen(::this._afterOpen);

                } else {
                    this._afterOpen();
                }
            },

            'xb-close': function () {
                const table = this[ ConstantMenu.TABLE ];

                if (table) {
                    this[ ConstantMenu.TABLE ] = undefined;
                    table.destroy();
                }

                this._closeAllSubmenu();
            },

            'keydown:keypass(27)': function () {
                this.close();
                _.invoke(this, 'parentMenu.focus');
            },

            'blur': function () {
                if (!this.hasOpenSubmenu) {
                    this.close();
                    // event.relatedTarget is null in firefox
                    immediate.setImmediate(::this._closeUpFocus);
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
            popupDefaultOptions: {
                get: function () {
                    const popupOptions = popupDefaultOptions.call(this);

                    popupOptions.constraints = [
                        {
                            'to': 'scrollParent',
                            'attachment': 'element'
                        },
                        {
                            'to': 'window',
                            'attachment': 'element'
                        }
                    ];

                    return popupOptions;
                }
            }
        },

        methods: {
            _closeAllSubmenu: function () {
                _.forEach(this.querySelectorAll('.xb-menu-target.xb-menu-enabled'), this._closeSubmenu);
            },

            /**
             * @param {xb.Menuitem} target
             */
            _closeSubmenu: function (target) {
                _.invoke(target, [ ConstantPopup.POPUP, 'close' ]);
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
