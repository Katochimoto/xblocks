/* global xblocks, global */
/* jshint strict: false */

/**
 * Checked in:
 * ChromeCanary 40
 * FireFox Developer Edition 35
 */

/*! borschik:include:menuitem.jsx.js */

var XBMenuitemElementStatic = {
    '_timerOpenSubmenu': 0,

    '_submenuRemove': function() {
        if (this._submenuInstance) {
            this._submenuInstance.close();
            this._submenuInstance.parentNode.removeChild(this._submenuInstance);
            this._submenuInstance = undefined;
        }
    }
};

/* jshint -W098 */
var XBMenuitemElement = xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueProps,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            'xb-created': function() {
                XBMenuitemElementStatic._submenuRemove.call(this);
                this.submenu = Boolean(this.content.trim());
            },

            'xb-repaint': XBMenuitemElementStatic._submenuRemove,

            'xb-blur': function() {
                this.focused = false;

                global.clearTimeout(XBMenuitemElementStatic._timerOpenSubmenu);
                XBMenuitemElementStatic._timerOpenSubmenu = 0;

                var submenu = this.submenuInstance;
                if (submenu && submenu.opened) {
                    // to close the submenu and return focus
                    this.menuInstance.focus();
                }
            },

            'xb-focus': function(event) {
                this.focused = true;

                // open the submenu only event-mouse
                if (event.detail.originalEvent.type !== 'keydown') {
                    var submenu = this.submenuInstance;
                    if (submenu && !XBMenuitemElementStatic._timerOpenSubmenu) {
                        XBMenuitemElementStatic._timerOpenSubmenu = global.setTimeout(submenu.open.bind(submenu), 200);
                    }
                }
            }
        },

        'accessors': {
            'focused': {
                'attribute': {
                    'boolean': true
                }
            },

            'selected': {
                'attribute': {
                    'boolean': true
                }
            },

            'submenu': {
                'attribute': {
                    'boolean': true
                }
            },

            'menuInstance': {
                get: function() {
                    if (this._menuInstance || this._menuInstance === null) {
                        return this._menuInstance;
                    }

                    this._menuInstance = null;

                    var menuNode = this.parentNode && xblocks.react.findContainerForNode(this.parentNode);

                    if (menuNode && (menuNode.xtagName === 'xb-menu' || menuNode.xtagName === 'xb-menu-inline')) {
                        this._menuInstance = menuNode;
                    }

                    return this._menuInstance;
                }
            },

            'submenuInstance': {
                get: function() {
                    if (this._submenuInstance || this._submenuInstance === null) {
                        return this._submenuInstance;
                    }

                    var targetClassName = '_menuitem-target-' + this.xuid;

                    this._submenuInstance = null;

                    if (this.submenu) {
                        this.classList.add(targetClassName);

                        var menu = this.ownerDocument.createElement('xb-menu');
                        menu.setAttribute('attachment', 'top left');
                        menu.setAttribute('target-attachment', 'top right');
                        menu.setAttribute('target', '.' + targetClassName);
                        menu.setAttribute('constraints', encodeURIComponent(JSON.stringify([
                            {
                                'to': 'scrollParent',
                                'attachment': 'element together'
                            },
                            {
                                'to': 'window',
                                'attachment': 'element together'
                            }
                        ])));
                        menu.innerHTML = this.content;

                        this._submenuInstance = this.ownerDocument.body.appendChild(menu);
                    }

                    return this._submenuInstance;
                }
            }
        }
    }
]);
