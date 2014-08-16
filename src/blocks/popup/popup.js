/* global xblocks */
/* jshint strict: false */

/*! borschik:include:popup.jsx.js */

var XBPopupElement = xblocks.create('xb-popup', [
    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'click:delegate(._close)': function() {
                this.parentNode.parentNode.close();
            }
        },

        accessors: {
            options: {
                get: function() {
                    if (this._options) {
                        return this._options;
                    }

                    var tetherAttrs = xblocks.dom.attrs.get(this, {
                        'optimizations-gpu': true,
                        'target': document.body,
                        'target-parent': false,
                        'target-attachment': 'middle center',
                        'target-modifier': 'visible',
                        'target-offset': undefined,
                        'attachment': 'middle center',
                        'offset': undefined,
                        'constraints': undefined
                    });

                    this._options = {
                        'enabled': false,
                        'element': this,
                        'target': tetherAttrs['target'],
                        'targetParent': tetherAttrs['target-parent'],
                        'attachment': tetherAttrs['attachment'],
                        'targetAttachment': tetherAttrs['target-attachment'],
                        'targetModifier': tetherAttrs['target-modifier'],
                        'classPrefix': this.xtagName,
                        'optimizations': {
                            'gpu': tetherAttrs['optimizations-gpu']
                        },
                        'classes': {
                            'element': this.xtagName
                        }
                    };

                    if (tetherAttrs['offset']) {
                        this._options['offset'] = tetherAttrs['offset'];
                    }

                    if (tetherAttrs['target-offset']) {
                        this._options['targetOffset'] = tetherAttrs['target-offset'];
                    }

                    if (tetherAttrs['constraints']) {
                        this._options['constraints'] = JSON.parse(decodeURIComponent(tetherAttrs['constraints']));
                    }

                    if (this._options['targetParent']) {
                        this._options['target'] = this.parentNode;
                    }

                    return this._options;
                }
            },

            tether: {
                get: function() {
                    if (this._tether) {
                        return this._tether;
                    }

                    this._tether = new Tether(this.options);
                    return this._tether;
                }
            }
        },

        methods: {
            setOptions: function(nextOptions) {
                var tether = this.tether;
                this._options = xblocks.utils.merge(true, this.options, nextOptions);
                tether.setOptions(this._options, false);
                if (tether.enabled) {
                    tether.position();
                }
            },

            open: function(options) {
                var tether = this.tether;

                if (tether.enabled) {
                    return false;
                }

                if (typeof(options) === 'object') {
                    this.setOptions(options);
                }

                tether.enable(true);
                tether.target.xbPopup = this;

                xblocks.utils.dispatchEvent(this, 'open-after');

                return true;
            },

            close: function() {
                var tether = this.tether;

                if (!tether.enabled) {
                    return false;
                }

                xblocks.utils.dispatchEvent(this, 'close-before');

                tether.target.xbPopup = null;
                tether.disable();
                tether.clearCache();
                return true;
            },

            position: function() {
                this.tether.position();
                return true;
            }
        }
    }
]);
