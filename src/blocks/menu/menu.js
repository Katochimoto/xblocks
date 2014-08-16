/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

xblocks.create('xb-menu', [
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement()),

        events: {
            'open-after': function() {
                this.focus();
            },

            'close-before': function() {
                Array.prototype.forEach.call(this.querySelectorAll('.xb-menu-target'), _blocksMenuInnerClose);
                this._selectedItem = null;
            },

            // Escape
            'keydown:keypass(27)': function() {
                this.close();
            },

            'blur': function() {
                //this.close();

                if (this._selectedItem) {
                    this._selectedItem.selected = false;
                    this._selectedItem = null;
                }
            },

            // ArrowDown
            'keydown:keypass(40)': function() {
                var nextItem;

                if (this._selectedItem) {
                    nextItem = this._selectedItem.nextElementSibling;

                    while (nextItem) {
                        if (nextItem.xtagName && nextItem.xtagName === 'xb-menuitem' && !nextItem.disabled) {
                            break;
                        }

                        nextItem = nextItem.nextElementSibling;
                    }
                }

                if (!nextItem) {
                    nextItem = this.querySelector('xb-menuitem');
                }

                while (nextItem) {
                    if (nextItem.xtagName && nextItem.xtagName === 'xb-menuitem' && !nextItem.disabled) {
                        break;
                    }

                    nextItem = nextItem.nextElementSibling;
                }

                if (this._selectedItem) {
                    if (nextItem && this._selectedItem !== nextItem) {
                        this._selectedItem.selected = false;
                        this._selectedItem = null;
                    }
                }

                if (nextItem) {
                    nextItem.selected = true;
                    this._selectedItem = nextItem;
                }
            },

            // ArrowUp
            'keydown:keypass(38)': function() {
                var nextItem;

                if (this._selectedItem) {
                    nextItem = this._selectedItem.previousElementSibling;

                    while (nextItem) {
                        if (nextItem.xtagName && nextItem.xtagName === 'xb-menuitem' && !nextItem.disabled) {
                            break;
                        }

                        nextItem = nextItem.previousElementSibling;
                    }

                    if (!nextItem) {
                        nextItem = this._selectedItem.parentNode.lastChild;
                    }

                    while (nextItem) {
                        if (nextItem.xtagName && nextItem.xtagName === 'xb-menuitem' && !nextItem.disabled) {
                            break;
                        }

                        nextItem = nextItem.previousElementSibling;
                    }

                } else {
                    nextItem = this.querySelector('xb-menuitem');

                    while (nextItem) {
                        if (nextItem.xtagName && nextItem.xtagName === 'xb-menuitem' && !nextItem.disabled) {
                            break;
                        }

                        nextItem = nextItem.nextElementSibling;
                    }
                }

                if (this._selectedItem) {
                    if (nextItem && this._selectedItem !== nextItem) {
                        this._selectedItem.selected = false;
                        this._selectedItem = null;
                    }
                }

                if (nextItem) {
                    nextItem.selected = true;
                    this._selectedItem = nextItem;
                }
            },

            // ArrowRight
            'keydown:keypass(39)': function() {

            },

            // ArrowLeft
            'keydown:keypass(37)': function() {

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

            'mousemove:delegate(xb-menuitem)': function(event) {
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

            'click:delegate(xb-menuitem)': function(event) {
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
            }
        }
    }
]);

function _blocksMenuInnerClose(target) {
    if (target.xbPopup) {
        target.xbPopup.close();
    }
}
