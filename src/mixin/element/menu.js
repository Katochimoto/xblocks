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
            if (!this.selectable) {
                return;
            }

            if (!this.multiselect) {
                // TODO сброс предыдущего значения
            }

            const item = this[ ConstantMenu.TABLE ].getItem();
            item.selected = !item.selected;
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
