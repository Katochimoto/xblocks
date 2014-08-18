/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menuitem.jsx.js */

xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': function() {
                if (this._submenu) {
                    this._submenu.close();
                    this._submenu.parentNode.removeChild(this._submenu);
                    this._submenu = undefined;
                }
            },

            'xb-repaint': function() {
                if (this._submenu) {
                    this._submenu.close();
                    this._submenu.parentNode.removeChild(this._submenu);
                    this._submenu = undefined;
                }
            }
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
                            var menu = global.document.createElement('xb-menu');
                            menu.setAttribute('target-attachment', 'top right');
                            menu.setAttribute('attachment', 'top left');
                            menu.setAttribute('target', '._menuitem-target-' + this.xuid);
                            menu.setAttribute('constraints', encodeURIComponent(JSON.stringify([{
                                'to': 'scrollParent',
                                'attachment': 'together'
                            }])));
                            menu.innerHTML = content;

                            this._submenu = global.document.body.appendChild(menu);

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
