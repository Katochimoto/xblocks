/* global xblocks */
/* jshint strict: false */

/*! borschik:include:popup.jsx.js */

xblocks.create('xb-popup', [
    {
        prototype: Object.create(HTMLElement.prototype),

        accessors: {
            options: {
                get: function() {
                    if (this._options) {
                        return this._options;
                    }

                    this._options = {
                        'enabled': false,
                        'element': this,
                        'target': document.body,
                        'attachment': 'middle center',
                        'targetAttachment': 'middle center',
                        'targetModifier': 'visible',
                        'classPrefix': 'xb-popup',
                        'optimizations': {
                            'gpu': false
                        },
                        'classes': {
                            'element': 'xb-popup',
                            'enabled': '_enabled'
                        }
                    };

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
                return true;
            },

            close: function() {
                var tether = this.tether;

                if (!tether.enabled) {
                    return false;
                }

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
