/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menuitem.jsx.js */

var XBMenuitemElementStatic = {};

XBMenuitemElementStatic._submenuReset = function() {
    if (this._submenuInstance) {
        this._submenuInstance.close();
        this._submenuInstance.parentNode.removeChild(this._submenuInstance);
        this._submenuInstance = undefined;
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
            'xb-created': function() {
                XBMenuitemElementStatic._submenuReset();
                this.submenu = Boolean(this.content.trim());
            },

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
                attribute: {
                    boolean: true
                }
            },

            menuInstance: {
                get: function() {
                    if (this._menuInstance || this._menuInstance === null) {
                        return this._menuInstance;
                    }

                    this._menuInstance = null;
                    var parent = this.parentNode;
                    var menuNode = parent && xblocks.utils.react.findReactContainerForNode(parent);

                    if (menuNode && menuNode.xtagName === 'xb-menu') {
                        this._menuInstance = menuNode;
                    }

                    return this._menuInstance;
                }
            },

            submenuInstance: {
                get: function() {
                    if (this._submenuInstance || this._submenuInstance === null) {
                        return this._submenuInstance;
                    }

                    var targetClassName = '_menuitem-target-' + this.xuid;

                    this._submenuInstance = null;

                    if (this.submenu) {
                        this.classList.add(targetClassName);

                        var menu = this.ownerDocument.createElement('xb-menu');
                        menu.setAttribute('target-attachment', 'top right');
                        menu.setAttribute('attachment', 'top left');
                        menu.setAttribute('target', '.' + targetClassName);
                        menu.setAttribute('constraints', encodeURIComponent(JSON.stringify([{
                            'to': 'scrollParent',
                            'attachment': 'together'
                        }])));
                        menu.innerHTML = this.content.trim();

                        this._submenuInstance = this.ownerDocument.body.appendChild(menu);
                    }

                    return this._submenuInstance;
                }
            }
        }
    }
]);
