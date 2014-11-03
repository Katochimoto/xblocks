/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menuitem.jsx.js */

var XBMenuitemElementStatic = {};

XBMenuitemElementStatic._submenuReset = function() {
    if (this._submenu) {
        this._submenu.close();
        this._submenu.parentNode.removeChild(this._submenu);
        this._submenu = undefined;
    }
};

XBMenuitemElementStatic._selected = function() {
    this.selected = true;
};

XBMenuitemElementStatic._unselected = function() {
    this.selected = false;
};

xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': XBMenuitemElementStatic._submenuReset,
            'xb-repaint': XBMenuitemElementStatic._submenuReset,
            'xb-blur': XBMenuitemElementStatic._unselected,
            'xb-focus': XBMenuitemElementStatic._selected
        },

        accessors: {
            selected: {
                attribute: {
                    boolean: true
                }
            },

            submenu: {
                get: function() {
                    if (!this._submenu && this._submenu !== null) {
                        var content = this.content.trim();

                        if (content) {
                            var menu = this.ownerDocument.createElement('xb-menu');
                            menu.setAttribute('target-attachment', 'top right');
                            menu.setAttribute('attachment', 'top left');
                            menu.setAttribute('target', '._menuitem-target-' + this.xuid);
                            menu.setAttribute('constraints', encodeURIComponent(JSON.stringify([{
                                'to': 'scrollParent',
                                'attachment': 'together'
                            }])));
                            menu.innerHTML = content;

                            this._submenu = this.ownerDocument.body.appendChild(menu);

                        } else {
                            this._submenu = null;
                        }
                    }

                    return this._submenu;
                }
            }
        }
    }
]);
