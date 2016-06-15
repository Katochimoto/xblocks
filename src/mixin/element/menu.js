import get from 'lodash/get';
import lazyFocus from 'utils/lazyFocus';
import isParent from 'dom/isParent';
import ConstantMenu from 'constants/menu';

/**
 * Common interface for elements xb-menu and xb-menu-inline.
 *
 * @prop {boolean} hasOpenSubmenu The menu contains the open submenu
 * @type {Object}
 */
export default {
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

        multiselect: {
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
                return get(this, 'tether.target.menuInstance');
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

            var component = this.xblock && this.xblock.getMountedComponent();

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

    let item = menu[ ConstantMenu.TABLE ].getItem();
    let selected = !item.selected;

    // сброс выбранных пунктов, если не мультиселект и текущий пункт будет выбран
    if (!menu.multiselect && selected) {
        // TODO
    }

    item.selected = selected;
}
