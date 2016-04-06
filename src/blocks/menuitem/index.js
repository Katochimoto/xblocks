import './index.styl';
import './index.jsx';

import { xb } from 'context';
import { create } from 'xblocks-core';
import context from 'context';
import lazyFocus from 'utils/lazyFocus';
import getParentMenu from 'utils/getParentMenu';
import merge from 'lodash/merge';
import removeChild from 'dom/removeChild';
import mixinElementDisabled from 'mixin/element/disabled';
import mixinElementInputValueProps from 'mixin/element/inputValueProps';

const MENUITEM_COMMON = {
    submenuAttrs: {
        'attachment': 'top left',
        'target-attachment': 'top right',
        'target-modifier': 'initial',
        'constraints': encodeURIComponent(JSON.stringify([
            {
                'to': 'window',
                'attachment': 'element together'
            }
        ]))
    },

    submenu: (function () {
        var timerOpenSubmenu = 0;

        return {

            /**
             * @param {xb.Menu} [submenu]
             * @this context
             */
            open: function (submenu) {
                if (submenu && !timerOpenSubmenu) {
                    timerOpenSubmenu = context.setTimeout(submenu.open.bind(submenu), 200);
                }
            },

            /**
             * @this context
             */
            cancel: function () {
                if (timerOpenSubmenu) {
                    context.clearTimeout(timerOpenSubmenu);
                    timerOpenSubmenu = 0;
                }
            },

            /**
             * @this xb.Menuitem
             */
            remove: function () {
                if (this._submenuInstance) {
                    var submenu = this._submenuInstance;
                    this._submenuInstance = undefined;

                    MENUITEM_COMMON.submenu.cancel();
                    submenu.close();
                    removeChild(submenu);
                }
            }
        };
    }())
};

/**
 * xb-menuitem html element
 *
 * @class xb.Menuitem
 * @memberof xb
 * @augments HTMLElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eInputValueProps
 * @listens xblocks.utils:TableNavigator~event:xb-focus
 * @listens xblocks.utils:TableNavigator~event:xb-blur
 * @listens xblocks.Element~event:xb-repaint
 * @listens xblocks.Element~event:xb-created
 * @listens xblocks.Element~event:xb-destroy
 */
export default xb.Menuitem = create('xb-menuitem', [
    mixinElementDisabled,
    mixinElementInputValueProps,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            /**
             * @callback
             */
            'xb-created': function () {
                MENUITEM_COMMON.submenu.remove.call(this);
                this.submenu = Boolean(this.content.trim());
            },

            /**
             * @callback
             */
            'xb-repaint': MENUITEM_COMMON.submenu.remove,

            /**
             * @callback
             */
            'xb-destroy': MENUITEM_COMMON.submenu.remove,

            /**
             * @callback
             */
            'xb-blur': function () {
                this.focused = false;

                MENUITEM_COMMON.submenu.cancel();

                var submenu = this.submenuInstance;
                if (submenu && submenu.opened) {
                    // to close the submenu and return focus
                    lazyFocus(this.menuInstance);
                }
            },

            /**
             * @callback
             * @param {Event} event
             */
            'xb-focus': function (event) {
                this.focused = true;

                // scroll menu only keyboard events
                if (event.detail.originalEvent.type === 'keydown') {
                    this.menuInstance.scrollIntoItem(this);

                // open the submenu only event-mouse
                } else {
                    MENUITEM_COMMON.submenu.open(this.submenuInstance);
                }
            }
        },

        /**
         * @lends xb.Menuitem.prototype
         */
        accessors: {
            /**
             * @prop {boolean} [focused=false] Item in focus
             */
            focused: {
                attribute: {
                    boolean: true
                }
            },

            /**
             * @prop {boolean} [selected=false] Item is selected
             */
            selected: {
                attribute: {
                    boolean: true
                }
            },

            /**
             * @prop {boolean} [submenu=false] Item has a submenu
             */
            submenu: {
                attribute: {
                    boolean: true
                }
            },

            /**
             * @readonly
             * @prop {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
             */
            menuInstance: {
                get: function () {
                    if (this._menuInstance || this._menuInstance === null) {
                        return this._menuInstance;
                    }

                    this._menuInstance = getParentMenu(this);

                    return this._menuInstance;
                }
            },

            /**
             * @readonly
             * @prop {xb.Menu|null} submenuInstance Submenu instance
             */
            submenuInstance: {
                get: function () {
                    if (this._submenuInstance || this._submenuInstance === null) {
                        return this._submenuInstance;
                    }

                    this._submenuInstance = null;

                    if (this.submenu) {
                        let targetClassName = `_menuitem-target-${this.xuid}`;
                        let menu = this.ownerDocument.createElement('xb-menu');
                        let parentConstraints = this.menuInstance.getAttribute('constraints');
                        let attrs = merge({ 'target': `.${targetClassName}` }, MENUITEM_COMMON.submenuAttrs);

                        // для подменю необходимо наследовать набор ограничений т.к. по умолчанию ограничением является вьюпорт
                        // меню может быть открыто в блоке со скролом,
                        // в этом случае ограничением для подменю будет блок со скролом
                        if (parentConstraints) {
                            attrs.constraints = parentConstraints;
                        }

                        for (let attrName in attrs) {
                            menu.setAttribute(attrName, attrs[ attrName ]);
                        }

                        menu.innerHTML = this.content;

                        this.classList.add(targetClassName);

                        this._submenuInstance = this.ownerDocument.body.appendChild(menu);
                    }

                    return this._submenuInstance;
                }
            }
        }
    }
]);
