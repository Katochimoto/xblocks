/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menuitem.jsx.js */

var XBMenuitemElementStatic = {};

XBMenuitemElementStatic._submenuRemove = function() {
    if (this._submenuInstance) {
        this._submenuInstance.close();
        this._submenuInstance.parentNode.removeChild(this._submenuInstance);
        this._submenuInstance = undefined;
    }
};

xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': function() {
                XBMenuitemElementStatic._submenuRemove.call(this);
                this.submenu = Boolean(this.content.trim());
            },

            'xb-repaint': XBMenuitemElementStatic._submenuRemove,

            'xb-blur': function() {
                this.selected = false;
            },

            'xb-focus': function() {
                this.selected = true;
            }
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
