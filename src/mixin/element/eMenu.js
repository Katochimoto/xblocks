/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eMenu = {
    'events': {

        /**
         * @this {xb.Menuitem}
         */
        'click:delegate(xb-menuitem:not([disabled]))': function() {
            if (this.submenuInstance) {
                this.submenuInstance.open();
            }
        },

        /**
         * @this {xb.Menu}
         */
        'keydown:keypass(13,39)': function() {
            var item = this._xbfocus.getItem();

            if (item && item.submenuInstance) {
                item.submenuInstance.open();
            }
        },

        /**
         * @this {xb.Menu}
         */
        'jsx-scroll-throttle': function(event) {
            // close all submenu
            event.stopImmediatePropagation();
            xblocks.utils.lazyFocus(this);
        }
    },

    'accessors': {
        'hasOpenSubmenu': {
            'get': function() {
                return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
            }
        }
    }
};
