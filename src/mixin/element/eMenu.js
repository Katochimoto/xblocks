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
         * @this {xb.Menuitem}
         */
        'keydown:keypass(13,39)': function() {
            var item = this._xbfocus.getItem();

            if (item && item.submenuInstance) {
                item.submenuInstance.open();
            }
        },

        'jsx-scroll-throttle': function(event) {
            // close all submenu
            event.stopImmediatePropagation();
            xblocks.utils.lazyFocus(this);
        },

        'scrollwheel:delegate(._popup-content)': function(event) {
            var delta = event.delta;
            var scrollTop = this.scrollTop;
            var offsetHeight = this.offsetHeight;
            var scrollHeight = this.scrollHeight;

            if (delta > 0 && scrollTop === 0 ||
                delta < 0 && scrollTop + offsetHeight >= scrollHeight ||
                offsetHeight === scrollHeight) {

                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }
    },

    'accessors': {
        'hasOpenSubmenu': {
            get: function() {
                return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
            }
        }
    }
};
