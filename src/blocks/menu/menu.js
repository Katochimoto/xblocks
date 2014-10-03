/* global xblocks, XBPopupElement */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

xblocks.create('xb-menu', [
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement()),

        events: {
            'open-after': function() {
                this._xbFocus = new xblocks.utils.focus.Table(this, { 'rowLoop': true });
                this.focus();
            },

            'close-before': function() {
                this._xbFocus.destroy();
                this._xbFocus = null;
                Array.prototype.forEach.call(this.querySelectorAll('.xb-menu-target'), _blocksMenuInnerClose);
                this._selectedItem = null;
            },

            // Escape
            'keydown:keypass(27)': function() {
                // TODO при закрытии вложенного окна фокус должен переходить на предка

                this.close();
            },

            'blur': function() {
                //this.close();

                if (this._selectedItem) {
                    this._selectedItem.selected = false;
                    this._selectedItem = null;
                }
            },

            'mouseover:delegate(xb-menuitem)': function(event) {
                xblocks.utils.event.mouseEnterFilter(this, event, function() {
                    if (this.disabled) {
                        return;
                    }

                    var menuNode = this.parentNode.parentNode;

                    if (menuNode._selectedItem) {
                        if (menuNode._selectedItem !== this) {
                            menuNode._selectedItem.selected = false;
                            menuNode._selectedItem = null;
                        }

                    } else {
                        this.selected = true;
                        menuNode._selectedItem = this;
                    }
                });
            },

            'mouseout:delegate(xb-menuitem)': function(event) {
                xblocks.utils.event.mouseLeaveFilter(this, event, function() {
                    if (this.disabled) {
                        return;
                    }

                    var menuNode = this.parentNode.parentNode;

                    if (menuNode._selectedItem && menuNode._selectedItem !== this) {
                        menuNode._selectedItem.selected = false;
                        menuNode._selectedItem = null;
                    }

                    this.selected = false;
                    menuNode._selectedItem = null;
                });
            },

            'mousemove:delegate(xb-menuitem)': function() {
                if (this.disabled) {
                    return;
                }

                var menuNode = this.parentNode.parentNode;

                if (!menuNode._selectedItem || menuNode._selectedItem !== this) {
                    if (menuNode._selectedItem) {
                        menuNode._selectedItem.selected = false;
                    }

                    menuNode._selectedItem = this;
                    this.selected = true;
                }
            },

            'click:delegate(xb-menuitem)': function() {
                if (this.disabled) {
                    return;
                }

                var menuNode = this.parentNode.parentNode;

                if (!menuNode._selectedItem || menuNode._selectedItem !== this) {
                    if (menuNode._selectedItem) {
                        menuNode._selectedItem.selected = false;
                    }

                    menuNode._selectedItem = this;
                    this.selected = true;
                }

                this.opened = !this.opened;
            }
        }
    }
]);

function _blocksMenuInnerClose(target) {
    if (target.xbPopup) {
        target.xbPopup.close();
    }
}
