import _ from 'lodash';
import { event as xevent } from 'xblocks-core';
import lazyFocus from 'utils/lazyFocus';
import initialDefinitionSelected from 'utils/initialDefinitionSelected';
import isParent from 'dom/isParent';
import ConstantMenu from 'constants/menu';
import ConstantMenuitem from 'constants/menuitem';

/**
 * Common interface for elements xb-menu and xb-menu-inline.
 *
 * @prop {boolean} hasOpenSubmenu The menu contains the open submenu
 * @type {Object}
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
         * Оpen the submenu
         * @this xb.Menuitem
         */
        'click:delegate(xb-menuitem:not([disabled]))': function () {
            if (this.submenuInstance) {
                this.submenuInstance.open();

            } else if (this.menuInstance) {
                menuitemSelect(this.menuInstance);
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
         * space
         * @this xb.Menu
         */
        'keydown:keypass(32)': function () {
            menuitemSelect(this);
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
         * @prop {xb.Menu} [parentMenu] menu-ancestor
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
         * @prop {HTMLElement[]} selectedItems the selected menu item
         * @readonly
         */
        selectedItems: {
            get: function () {
                return _.values(this.firstParentMenu[ ConstantMenu.SELECTED ]);
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
                component.scrollIntoItem(menuitem);
            }
        }
    }
};

/**
 * @param {xb.Menu} menu
 * @private
 */
function menuitemSelect(menu) {
    if (!menu.selectable) {
        return;
    }

    const selectedAttr = ConstantMenuitem.SELECTED_ATTR;
    const item = menu[ ConstantMenu.TABLE ].getItem();
    const selected = !item.selected;
    const uid = item.getAttribute(selectedAttr) || _.uniqueId('selected');
    const firstParentMenu = menu.firstParentMenu;

    // сброс выбранных пунктов, если не мультиселект и текущий пункт будет выбран
    if (!menu.multiple && selected) {
        _(firstParentMenu[ ConstantMenu.SELECTED ])
            .chain()
            .keys()
            .join(`"],xb-menuitem[${selectedAttr}="`)
            .thru(value => firstParentMenu.ownerDocument.querySelectorAll(`xb-menuitem[${selectedAttr}="${value}"]`))
            .forEach(removePropSelectIterate)
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

    xevent.dispatch(menu, 'change', {
        detail: { item }
    });
}

function removePropSelectIterate(node) {
    node.selected = false;
    node.removeAttribute(ConstantMenuitem.SELECTED_ATTR);
}
