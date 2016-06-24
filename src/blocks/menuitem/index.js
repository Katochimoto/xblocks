import './index.styl';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
import context from 'context';
import lazyFocus from 'utils/lazyFocus';
import getParentMenu from 'utils/getParentMenu';
import removeChild from 'dom/removeChild';
import mixinElementDisabled from 'mixin/element/disabled';
import mixinElementValueProps from 'mixin/element/inputValueProps';
import ConstantMenuitem from 'constants/menuitem';
import ConstantMenu from 'constants/menu';

const SUBMENU_ATTRS = {
    'attachment': 'top left',
    'target-attachment': 'top right',
    'target-modifier': 'initial',
    'constraints': encodeURIComponent(JSON.stringify([
        {
            'to': 'window',
            'attachment': 'element together'
        }
    ]))
};

/**
 * xb-menuitem html element
 *
 * @class xb.Menuitem
 * @memberof xb
 * @augments HTMLElement
 * @mixes mixin/element/disabled
 * @mixes mixin/element/inputValueProps
 * @listens xblocks.utils:TableNavigator~event:xb-focus
 * @listens xblocks.utils:TableNavigator~event:xb-blur
 * @listens xblocks.Element~event:xb-repaint
 * @listens xblocks.Element~event:xb-created
 * @listens xblocks.Element~event:xb-destroy
 */
export default xb.Menuitem = create('xb-menuitem', [
    mixinElementDisabled,
    mixinElementValueProps,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            /**
             * @callback
             */
            'xb-created': function () {
                this._submenuRemove();
                this._updateSelection();
            },

            /**
             * @callback
             */
            'xb-destroy': function () {
                this._submenuRemove();
            },

            /**
             * @callback
             */
            'xb-blur': function () {
                this.focused = false;
                this._submenuCancel();

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
                    this._submenuOpen();
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
                get: function () {
                    return Boolean(this[ ConstantMenuitem.FOCUSED ]);
                },

                set: function (value) {
                    this[ ConstantMenuitem.FOCUSED ] = Boolean(value);
                }
            },

            /**
             * @prop {boolean} [selected=false] Item is selected
             */
            selected: {
                attribute: {
                    boolean: true
                },

                set: function (value) {
                    if (value && this.submenu) {
                        this.selected = false;
                    }
                }
            },

            /**
             * @prop {boolean} [submenu=false] Item has a submenu
             * @readonly
             */
            submenu: {
                get: function () {
                    return Boolean(this.content);
                }
            },

            /**
             * @prop {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
             * @readonly
             */
            menuInstance: {
                get: function () {
                    let menu = this[ ConstantMenuitem.MENU ];

                    if (!menu && menu !== null) {
                        menu = this[ ConstantMenuitem.MENU ] = getParentMenu(this);
                    }

                    return menu;
                }
            },

            /**
             * @prop {xb.Menu|xb.MenuInline|null} menuInstance First menu instance
             * @readonly
             */
            firstMenuInstance: {
                get: function () {
                    return _.get(this, 'menuInstance.firstParentMenu');
                }
            },

            /**
             * @prop {xb.Menu|null} submenuInstance Submenu instance
             * @readonly
             */
            submenuInstance: {
                get: function () {
                    let submenu = this[ ConstantMenuitem.SUBMENU ];

                    if (!submenu && submenu !== null) {
                        submenu = this[ ConstantMenuitem.SUBMENU ] = this.submenu ? this._submenuCreate() : null;
                    }

                    return submenu;
                }
            }
        },

        methods: {
            /**
             * @private
             */
            _submenuOpen: function () {
                if (this[ ConstantMenuitem.SUBMENU_TIMER ]) {
                    return;
                }

                let submenu = this.submenuInstance;
                if (!submenu) {
                    return;
                }

                this[ ConstantMenuitem.SUBMENU_TIMER ] = context.setTimeout(::submenu.open, 200);
            },

            /**
             * @private
             */
            _submenuCancel: function () {
                let timer = this[ ConstantMenuitem.SUBMENU_TIMER ];
                if (timer) {
                    context.clearTimeout(timer);
                    this[ ConstantMenuitem.SUBMENU_TIMER ] = 0;
                }
            },

            /**
             * @private
             */
            _submenuRemove: function () {
                let submenu = this[ ConstantMenuitem.SUBMENU ];
                if (!submenu) {
                    return;
                }

                this[ ConstantMenuitem.SUBMENU ] = undefined;
                this._submenuCancel();

                submenu.close();
                removeChild(submenu);
            },

            /**
             * @returns {xb.Menu}
             * @private
             */
            _submenuCreate: function () {
                const parentMenu = this.menuInstance;

                // для подменю необходимо наследовать набор ограничений т.к. по умолчанию ограничением является вьюпорт
                // меню может быть открыто в блоке со скролом,
                // в этом случае ограничением для подменю будет блок со скролом
                const parentAttrs = {
                    constraints: parentMenu.getAttribute('constraints'),
                    autoclose: parentMenu.hasAttribute('autoclose') && 'autoclose',
                    multiple: parentMenu.hasAttribute('multiple') && 'multiple',
                    selectable: parentMenu.hasAttribute('selectable') && 'selectable'
                };

                const targetClassName = `_menuitem-target-${this.xuid}`;
                const menu = this.ownerDocument.createElement('xb-menu');
                const attrs = _.merge({ target: `.${targetClassName}` }, SUBMENU_ATTRS);

                for (let attrName in parentAttrs) {
                    if (parentAttrs[ attrName ]) {
                        attrs[ attrName ] = parentAttrs[ attrName ];
                    }
                }

                for (let attrName in attrs) {
                    menu.setAttribute(attrName, attrs[ attrName ]);
                }

                menu.innerHTML = this.content;
                menu.addEventListener('xb-destroy', ::this._submenuRemove, false);

                this.classList.add(targetClassName);

                return this.ownerDocument.body.appendChild(menu);
            },

            /**
             * @private
             */
            _updateSelection: function () {
                if (!this.parentNode) {
                    return;
                }

                const uid = this.getAttribute(ConstantMenuitem.SELECTED_ATTR);
                if (!uid) {
                    return;
                }

                const menu = this.firstMenuInstance;
                if (!menu) {
                    return;
                }

                const selected = _.has(menu, [ ConstantMenu.SELECTED, uid ]);
                this.selected = selected;

                if (!selected) {
                    this.removeAttribute(ConstantMenuitem.SELECTED_ATTR);
                }
            }
        }
    }
]);
