import lazyFocus from 'utils/lazyFocus';
import isParent from 'dom/isParent';

/**
 * Common interface for elements xb-menu and xb-menu-inline.
 *
 * @prop {boolean} hasOpenSubmenu The menu contains the open submenu
 *
 * @memberOf xblocks.mixin
 * @type {object}
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
            var item = this._xbFocus.getItem();

            if (item && item.submenuInstance) {
                item.submenuInstance.open();
            }
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
