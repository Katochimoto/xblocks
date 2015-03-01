/* global global, xblocks, Tether, __doc, xb */
/* jshint strict: false */

/*! borschik:include:popup.jsx.js */

var _xbPopup = {
    'onOpen': function() {
        this.focus();
        xblocks.event.dispatch(this, 'xb-open');
    },

    'onClose': function() {
        this.blur();
        xblocks.event.dispatch(this, 'xb-close');
    }
};

/**
 * @constructor
 * @mixes xblocks.mixin.eFocus
 */
xb.Popup = xblocks.create('xb-popup', [
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            'jsx-click-close': function(event) {
                event.stopImmediatePropagation();
                this.close();
            },

            'keydown:keypass(27)': function() {
                this.close();
            }
        },

        /**
         * @lends xb.Popup.prototype
         */
        'accessors': {
            /**
             * @property {object}
             */
            'options': {
                'get': function() {
                    if (this._options) {
                        return this._options;
                    }

                    var tetherAttrs = xblocks.dom.attrs.get(this, {
                        'optimizations-gpu': true,
                        'target': __doc.body,
                        'target-parent': false,
                        'target-attachment': 'middle center',
                        'target-modifier': 'visible',
                        'target-offset': undefined,
                        'attachment': 'middle center',
                        'offset': undefined,
                        'constraints': undefined
                    });

                    // TODO
                    // переписать тетхер и сделать для targetModifier значение по умолчанию
                    // вместо undefined
                    var targetModifier = tetherAttrs['target-modifier'];
                    if (!(targetModifier === 'visible' || targetModifier === 'scroll-handle')) {
                        targetModifier = undefined;
                    }

                    this._options = {
                        'enabled': false,
                        'element': this,
                        'target': tetherAttrs['target'],
                        'targetParent': tetherAttrs['target-parent'],
                        'attachment': tetherAttrs['attachment'],
                        'targetAttachment': tetherAttrs['target-attachment'],
                        'targetModifier': targetModifier,
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

            /**
             * @property {Tether}
             */
            'tether': {
                'get': function() {
                    if (!this._tether) {
                        this._tether = new Tether(this.options);
                    }

                    return this._tether;
                }
            },

            /**
             * @property {boolean}
             */
            'opened': {
                'get': function() {
                    return this.tether.enabled;
                }
            }
        },

        'methods': {
            /**
             * @method
             * @memberOf xb.Popup.prototype
             * @param {object} nextOptions
             */
            'setOptions': function(nextOptions) {
                var tether = this.tether;

                xblocks.utils.merge(true, this.options, nextOptions);
                tether.setOptions(this.options, false);

                if (tether.enabled) {
                    tether.position();
                }
            },

            /**
             * @memberOf xb.Popup.prototype
             * @param {object} options
             * @returns {boolean}
             */
            'open': function(options) {
                var tether = this.tether;

                if (tether.enabled) {
                    return false;
                }

                if (typeof(options) === 'object') {
                    this.setOptions(options);
                }

                xblocks.event.dispatch(this, 'xb-before-open');

                tether.enable(true);
                tether.target._xbpopup = this;

                // FireFox does not set the focus without delay
                global.setImmediate(_xbPopup.onOpen.bind(this));

                return true;
            },

            /**
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            'close': function() {
                var tether = this.tether;

                if (!tether.enabled) {
                    return false;
                }

                xblocks.event.dispatch(this, 'xb-before-close');

                tether.target._xbpopup = undefined;
                tether.disable();
                tether.clearCache();

                // FireFox does not fire a blur event
                global.setImmediate(_xbPopup.onClose.bind(this));

                return true;
            },

            /**
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            'position': function() {
                this.tether.position();
                return true;
            }
        }
    }
]);
