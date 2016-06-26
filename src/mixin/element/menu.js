import _ from 'lodash';
import { event as xevent } from 'xblocks-core';
import lazyFocus from 'utils/lazyFocus';
import initialDefinitionSelected from 'utils/initialDefinitionSelected';
import isParent from 'dom/isParent';
import ConstantMenu from 'constants/menu';
import ConstantMenuitem from 'constants/menuitem';

/**
 * Common interface for elements xb-menu and xb-menu-inline.
 */
export default {
    lifecycle: {
        created: function () {
            if (this.selectable) {
                this[ ConstantMenu.SELECTED ] = initialDefinitionSelected(this);
            }
        }
    },

    events: {
        /**
         * Оpen the submenu or menu item is selected
         * @this xb.Menuitem
         */
        'click:delegate(xb-menuitem:not([disabled]))': function () {
            if (this.submenuInstance) {
                this.submenuInstance.open();

            } else if (this.menuInstance) {
                this.menuInstance.menuitemSelect();
            }
        },

        /**
         * Оpen the submenu
         * @this xb.Menu
         */
        'keydown:keypass(13,39)': function () {
            const item = this[ ConstantMenu.TABLE ].getItem();

            if (item && item.submenuInstance) {
                item.submenuInstance.open();
            }
        },

        /**
         * The menu item is selected
         * @this xb.Menu
         */
        'keydown:keypass(32)': function () {
            this.menuitemSelect();
        },

        /**
         * Restore focus
         * @param {Event} event
         * @this xb.Menu
         */
        'jsx-scroll-throttle': function (event) {
            // close all submenu
            event.stopImmediatePropagation();
            lazyFocus(this);
        }
    },

    accessors: {

        /**
         * The menu contains the open submenu
         * @prop {boolean} hasOpenSubmenu
         */
        hasOpenSubmenu: {
            get: function () {
                return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
            }
        },

        selectable: {
            attribute: {
                boolean: true
            }
        },

        multiple: {
            attribute: {
                boolean: true
            }
        },

        /**
         * @prop {boolean} autoclose closing the menu after selecting
         */
        autoclose: {
            attribute: {
                boolean: true
            }
        },

        /**
         * @prop {xb.Menu|null} parentMenu menu-ancestor
         * @readonly
         */
        parentMenu: {
            get: function () {
                const parentMenu = _.get(this, 'core.target.menuInstance', null);
                return (parentMenu === this) ? null : parentMenu;
            }
        },

        /**
         * @prop {xb.Menu} [firstParentMenu] the first menu ancestor
         * @readonly
         */
        firstParentMenu: {
            get: function () {
                const parentMenu = this.parentMenu;

                if (parentMenu) {
                    return parentMenu.firstParentMenu || parentMenu;
                }

                return this;
            }
        },

        /**
         * @prop {string[]} value the values of the selected menu item
         * @readonly
         */
        value: {
            get: function () {
                return _.map(this.firstParentMenu[ ConstantMenu.SELECTED ], 'value');
            }
        },

        /**
         * @prop {HTMLElement[]} selectedItems selected menu items
         * @readonly
         */
        selectedItems: {
            get: function () {
                return _.values(this.firstParentMenu[ ConstantMenu.SELECTED ]);
            }
        },

        /**
         * @prop {Object[]} selectedObjects the data of selected items
         * @readonly
         */
        selectedObjects: {
            get: function () {
                return _.map(this.firstParentMenu[ ConstantMenu.SELECTED ], item => {
                    return {
                        label: item.getAttribute('label'),
                        value: item.value
                    };
                });
            }
        }
    },

    methods: {

        /**
         * @param {xb.Menuitem} menuitem
         */
        scrollIntoItem: function (menuitem) {
            if (!isParent(this, menuitem)) {
                return;
            }

            const component = this.getComponent();

            if (component) {
                component.setState({ scrollIntoItem: menuitem });
            }
        },

        menuitemSelect: function () {
            if (!this.selectable) {
                return;
            }

            const selectedAttr = ConstantMenuitem.SELECTED_ATTR;
            const item = this[ ConstantMenu.TABLE ].getItem();
            const selected = !item.selected;
            const uid = item.getAttribute(selectedAttr) || _.uniqueId('selected');
            const firstParentMenu = this.firstParentMenu;

            // сброс выбранных пунктов, если не мультиселект и текущий пункт будет выбран
            if (!this.multiple && selected) {
                _(firstParentMenu[ ConstantMenu.SELECTED ])
                    .chain()
                    .keys()
                    .join(`"],xb-menuitem[${selectedAttr}="`)
                    .thru(value => this.ownerDocument.querySelectorAll(`xb-menuitem[${selectedAttr}="${value}"]`))
                    .forEach(node => {
                        node.selected = false;
                        node.removeAttribute(selectedAttr);
                    })
                    .value();

                firstParentMenu[ ConstantMenu.SELECTED ] = {};
            }

            if (selected) {
                item.selected = true;
                item.setAttribute(selectedAttr, uid);
                _.set(firstParentMenu, [ ConstantMenu.SELECTED, uid ], item);

            } else {
                item.selected = false;
                item.removeAttribute(selectedAttr);
                _.unset(firstParentMenu, [ ConstantMenu.SELECTED, uid ]);
            }

            if (this.autoclose) {
                firstParentMenu.close();
            }

            xevent.dispatch(firstParentMenu, 'change', { detail: { item } });
        }
    }
};
