/* global xblocks, global, xb */
/* jshint strict: false */

/*! borschik:include:menuitem.jsx.js */

var _xbMenuitemElementStatic = {
    'submenuAttrs': {
        'attachment': 'top right',
        'target-attachment': 'top left',
        // TODO
        // переписать тетхер и сделать для targetModifier значение по умолчанию
        // вместо undefined
        'target-modifier': 'initial',
        'constraints': encodeURIComponent(JSON.stringify([
            {
                'to': 'scrollParent',
                'attachment': 'element together'
            },
            {
                'to': 'window',
                'attachment': 'element together'
            }
        ]))
    },

    'submenu': (function() {
        var timerOpenSubmenu = 0;

        return {
            'open': function(submenu) {
                if (submenu && !timerOpenSubmenu) {
                    timerOpenSubmenu = global.setTimeout(
                        submenu.open.bind(submenu),
                        200
                    );
                }
            },

            'cancel': function() {
                if (timerOpenSubmenu) {
                    global.clearTimeout(timerOpenSubmenu);
                    timerOpenSubmenu = 0;
                }
            },

            /**
             * @this {XBMenuitemElement}
             */
            'remove': function() {
                if (this._submenuInstance) {
                    _xbMenuitemElementStatic.submenu.cancel();

                    this._submenuInstance.close();
                    xblocks.dom.removeChild(this._submenuInstance);
                    this._submenuInstance = undefined;
                }
            }
        };
    }())
};

/**
 * @class xb.Menuitem
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eInputValueProps
 * @listens xblocks:utils:Table~event:xb-focus
 * @listens xblocks:utils:Table~event:xb-blur
 * @listens xblocks:element~event:xb-repaint
 * @listens xblocks:element~event:xb-created
 */
xb.Menuitem = xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueProps,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            /**
             * @callback
             */
            'xb-created': function() {
                _xbMenuitemElementStatic.submenu.remove.call(this);
                this.submenu = Boolean(this.content.trim());
            },

            /**
             * @callback
             */
            'xb-repaint': _xbMenuitemElementStatic.submenu.remove,

            /**
             * @callback
             */
            'xb-blur': function() {
                this.focused = false;

                _xbMenuitemElementStatic.submenu.cancel();

                var submenu = this.submenuInstance;
                if (submenu && submenu.opened) {
                    // to close the submenu and return focus
                    xblocks.utils.lazyFocus(this.menuInstance);
                }
            },

            /**
             * @callback
             * @param {xblocks:utils:Table~event:xb-focus}
             */
            'xb-focus': function(event) {
                this.focused = true;

                // open the submenu only event-mouse
                if (event.detail.originalEvent.type !== 'keydown') {
                    _xbMenuitemElementStatic.submenu.open(this.submenuInstance);

                // scroll menu only keyboard events
                } else {
                    this.scrollIntoView(false);
                }
            }
        },

        /**
         * @lends xb.Menuitem.prototype
         */
        'accessors': {
            /**
             * @property {boolean} focused Item in focus
             */
            'focused': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @property {boolean} selected Item is selected
             */
            'selected': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @property {boolean} submenu Item has a submenu
             */
            'submenu': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @property {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
             */
            'menuInstance': {
                'get': function() {
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

            /**
             * @property {xb.Menu|null} submenuInstance Submenu instance
             */
            'submenuInstance': {
                'get': function() {
                    if (this._submenuInstance || this._submenuInstance === null) {
                        return this._submenuInstance;
                    }

                    this._submenuInstance = null;

                    if (this.submenu) {
                        var targetClassName = '_menuitem-target-' + this.xuid;
                        var menu = this.ownerDocument.createElement('xb-menu');

                        menu.setAttribute('target', '.' + targetClassName);

                        for (var attrName in _xbMenuitemElementStatic.submenuAttrs) {
                            menu.setAttribute(
                                attrName,
                                _xbMenuitemElementStatic.submenuAttrs[ attrName ]
                            );
                        }

                        menu.innerHTML = this.content;

                        this.classList.add(targetClassName);
                        this._submenuInstance = this.ownerDocument.body.appendChild(menu);
                    }

                    return this._submenuInstance;
                }
            }
        }
    }
]);
