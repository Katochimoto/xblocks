/* global xblocks */
/* jshint strict: false */

/*! borschik:include:popup.jsx.js */

xblocks.create('xb-popup', [
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

                    var gpu = this.hasAttribute('optimizations-gpu') ?
                        xblocks.dom.attrs.valueConversion('optimizations-gpu', this.getAttribute('optimizations-gpu'), React.PropTypes.bool) :
                        false;

                    var target = this.getAttribute('target') || document.body;
                    var attachment = this.getAttribute('attachment') || 'middle center';
                    var targetAttachment = this.getAttribute('target-attachment') || 'middle center';
                    var targetModifier = this.getAttribute('target-modifier') || 'visible';
                    var offset = this.getAttribute('offset');
                    var targetOffset = this.getAttribute('target-offset');
                    var constraints = this.getAttribute('constraints');

                    this._options = {
                        'enabled': false,
                        'element': this,
                        'target': target,
                        'attachment': attachment,
                        'targetAttachment': targetAttachment,
                        'targetModifier': targetModifier,
                        'classPrefix': 'xb-popup',
                        'optimizations': {
                            'gpu': gpu
                        },
                        'classes': {
                            'element': 'xb-popup',
                            'enabled': '_enabled'
                        }
                    };

                    if (offset) {
                        this._options['offset'] = offset;
                    }

                    if (targetOffset) {
                        this._options['targetOffset'] = targetOffset;
                    }

                    if (constraints) {
                        this._options['constraints'] = JSON.parse(constraints);
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
