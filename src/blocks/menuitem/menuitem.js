/* global xblocks, global, xb */
/* jshint strict: false */

/*! borschik:include:menuitem.jsx.js */

var _xbMenuitem = {
    'submenuAttrs': {
        'attachment': 'top right',
        'target-attachment': 'top left',
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

            /**
             * @param {xb.Menu} [submenu]
             * @this {global}
             */
            'open': function(submenu) {
                if (submenu && !timerOpenSubmenu) {
                    timerOpenSubmenu = global.setTimeout(submenu.open.bind(submenu), 200);
                }
            },

            /**
             * @this {global}
             */
            'cancel': function() {
                if (timerOpenSubmenu) {
                    global.clearTimeout(timerOpenSubmenu);
                    timerOpenSubmenu = 0;
                }
            },

            /**
             * @this {xb.Menuitem}
             */
            'remove': function() {
                if (this._submenuInstance) {
                    _xbMenuitem.submenu.cancel();

                    this._submenuInstance.close();
                    xblocks.dom.removeChild(this._submenuInstance);
                    this._submenuInstance = undefined;
                }
            }
        };
    }())
};

/**
 * xb-menuitem html element
 *
 * @class xb.Menuitem
 * @memberof xb
 * @augments HTMLElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eInputValueProps
 * @listens xblocks.utils:Table~event:xb-focus
 * @listens xblocks.utils:Table~event:xb-blur
 * @listens xblocks.Element~event:xb-repaint
 * @listens xblocks.Element~event:xb-created
 * @listens xblocks.Element~event:xb-destroy
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
                _xbMenuitem.submenu.remove.call(this);
                this.submenu = Boolean(this.content.trim());
            },

            /**
             * @callback
             */
            'xb-repaint': _xbMenuitem.submenu.remove,

            /**
             * @callback
             */
            'xb-destroy': _xbMenuitem.submenu.remove,

            /**
             * @callback
             */
            'xb-blur': function() {
                this.focused = false;

                _xbMenuitem.submenu.cancel();

                var submenu = this.submenuInstance;
                if (submenu && submenu.opened) {
                    // to close the submenu and return focus
                    xblocks.utils.lazyFocus(this.menuInstance);
                }
            },

            /**
             * @callback
             * @param {xblocks:utils:Table~event:xb-focus} event
             */
            'xb-focus': function(event) {
                this.focused = true;

                // open the submenu only event-mouse
                if (event.detail.originalEvent.type !== 'keydown') {
                    _xbMenuitem.submenu.open(this.submenuInstance);

                // scroll menu only keyboard events
                } else {
                    this.menuInstance.scrollIntoItem(this);
                }
            }
        },

        /**
         * @lends xb.Menuitem.prototype
         */
        'accessors': {
            /**
             * @prop {string} label
             */

             /**
              * @prop {boolean} [disabled=false]
              */

            /**
             * @prop {boolean} [focused=false] Item in focus
             */
            'focused': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @prop {boolean} [selected=false] Item is selected
             */
            'selected': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @prop {boolean} [submenu=false] Item has a submenu
             */
            'submenu': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @readonly
             * @prop {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
             */
            'menuInstance': {
                'get': function() {
                    if (this._menuInstance || this._menuInstance === null) {
                        return this._menuInstance;
                    }

                    this._menuInstance = xblocks.utils.getParentMenu(this);

                    return this._menuInstance;
                }
            },

            /**
             * @readonly
             * @prop {xb.Menu|null} submenuInstance Submenu instance
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

                        for (var attrName in _xbMenuitem.submenuAttrs) {
                            menu.setAttribute(attrName, _xbMenuitem.submenuAttrs[ attrName ]);
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
