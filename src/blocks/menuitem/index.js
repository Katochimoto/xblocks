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
import mixinElementValueProps from 'mixin/element/inputValueProps';

const SYMBOL_FOCUSED = Symbol('menuitem-focused');
const SYMBOL_MENU = Symbol('menuitem-menu');
const SYMBOL_SUBMENU = Symbol('menuitem-submenu');
const SYMBOL_SUBMENU_TIMER = Symbol('menuitem-submenu-timer');

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
    mixinElementValueProps,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            /**
             * @callback
             */
            'xb-created': function () {
                this._submenuRemove();
            },

            /**
             * @callback
             */
            'xb-repaint': function () {
                this._submenuRemove();
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
                    return Boolean(this[ SYMBOL_FOCUSED ]);
                },

                set: function (value) {
                    this[ SYMBOL_FOCUSED ] = Boolean(value);
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
                    return Boolean(this.content.trim());
                }
            },

            /**
             * @prop {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
             * @readonly
             */
            menuInstance: {
                get: function () {
                    if (this[ SYMBOL_MENU ] || this[ SYMBOL_MENU ] === null) {
                        return this[ SYMBOL_MENU ];
                    }

                    this[ SYMBOL_MENU ] = getParentMenu(this);

                    return this[ SYMBOL_MENU ];
                }
            },

            /**
             * @prop {xb.Menu|null} submenuInstance Submenu instance
             * @readonly
             */
            submenuInstance: {
                get: function () {
                    if (this[ SYMBOL_SUBMENU ] || this[ SYMBOL_SUBMENU ] === null) {
                        return this[ SYMBOL_SUBMENU ];
                    }

                    this[ SYMBOL_SUBMENU ] = null;

                    if (this.submenu) {
                        let targetClassName = `_menuitem-target-${this.xuid}`;
                        let menu = this.ownerDocument.createElement('xb-menu');
                        let parentConstraints = this.menuInstance.getAttribute('constraints');
                        let attrs = merge({ target: `.${targetClassName}` }, SUBMENU_ATTRS);

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

                        this[ SYMBOL_SUBMENU ] = this.ownerDocument.body.appendChild(menu);
                    }

                    return this[ SYMBOL_SUBMENU ];
                }
            }
        },

        methods: {
            /**
             * @private
             */
            _submenuOpen: function () {
                if (this[ SYMBOL_SUBMENU_TIMER ]) {
                    return;
                }

                let submenu = this.submenuInstance;
                if (!submenu) {
                    return;
                }

                this[ SYMBOL_SUBMENU_TIMER ] = context.setTimeout(submenu.open.bind(submenu), 200);
            },

            /**
             * @private
             */
            _submenuCancel: function () {
                if (this[ SYMBOL_SUBMENU_TIMER ]) {
                    context.clearTimeout(this[ SYMBOL_SUBMENU_TIMER ]);
                    this[ SYMBOL_SUBMENU_TIMER ] = 0;
                }
            },

            /**
             * @private
             */
            _submenuRemove: function () {
                let submenu = this[ SYMBOL_SUBMENU ];
                if (!submenu) {
                    return;
                }

                this[ SYMBOL_SUBMENU ] = undefined;

                this._submenuCancel();

                submenu.close();
                removeChild(submenu);
            }
        }
    }
]);
