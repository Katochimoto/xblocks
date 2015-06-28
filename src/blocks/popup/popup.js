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
    },

    /**
     * Check valid value for attribute by default
     * @param {*} value value for attribute
     * @returns {boolean}
     */
    'checkDefaultAttr': function(value) {
        return (typeof(value) !== 'undefined');
    },

    /**
     * Association of attributes and options
     * @param {Object} options tether options
     * @param {Object} attrs attributes of element
     */
    'fillOptionsFromAttrs': function(options, attrs) {
        for (var attrName in attrs) {
            var params = _xbPopup.tetherAttrsAlign[ attrName ];
            if (!params) {
                continue;
            }

            var optionName = params[0];
            var checker = params[1] || _xbPopup.checkDefaultAttr;
            var value = attrs[ attrName ];

            if (checker(value)) {
                if (typeof(optionName) === 'function') {
                    optionName(options, value);

                } else {
                    options[ optionName ] = value;
                }
            }
        }
    },

    /**
     * The default setting for the popup
     * @returns {Object}
     * @this {xb.Popup}
     */
    'tetherDefaultOptions': function() {
        return {
            'attachment': 'middle center',
            'classes': { 'element': this.xtagName },
            'classPrefix': this.xtagName,
            'element': this,
            'enabled': false,
            'optimizations': { 'gpu': true },
            'target': __doc.body,
            'targetAttachment': 'middle center',
            'targetModifier': 'visible'
        };
    },

    /**
     * Union rules attributes
     * @type {Object}
     */
    'tetherAttrsAlign': {
        'attachment': [ 'attachment' ],
        'target-attachment': [ 'targetAttachment' ],
        'target-offset': [ 'targetOffset' ],
        'offset': [ 'offset' ],
        'target': [
            'target',
            function(value) {
                return (value && (typeof(value) === 'string' || value instanceof global.HTMLElement));
            }
        ],
        'target-parent': [
            function(options, value) {
                options.target = value;
            },
            function(value) {
                return (value && value instanceof global.HTMLElement);
            }
        ],
        'target-modifier': [
            function(options, value) {
                options.targetModifier = (value === 'initial' ? undefined : value);
            },
            function(value) {
                return (value === 'initial' || value === 'visible' || value === 'scroll-handle');
            }
        ],
        'optimizations-gpu': [
            function(options, value) {
                options.optimizations.gpu = value;
            },
            function(value) {
                return (typeof(value) === 'boolean');
            }
        ],
        'constraints': [
            function(options, value) {
                options.constraints = JSON.parse(decodeURIComponent(value));
            },
            function(value) {
                return (value && typeof(value) === 'string');
            }
        ]
    }
};

/**
 * xb-popup html element
 *
 * @constructor
 * @augments HTMLElement
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
             * @readonly
             * @prop {Object} default options
             */
            'defaultOptions': {
                'get': _xbPopup.tetherDefaultOptions
            },

            /**
             * @readonly
             * @prop {object} options the display options window
             */
            'options': {
                'get': function() {
                    if (this._options) {
                        return this._options;
                    }

                    this._options = this.defaultOptions;

                    var tetherAttrs = xblocks.dom.attrs.get(this, {
                        'attachment':        undefined,
                        'constraints':       undefined,
                        'offset':            undefined,
                        'optimizations-gpu': true,
                        'target-attachment': undefined,
                        'target-modifier':   undefined,
                        'target-offset':     undefined,
                        'target-parent':     false,
                        'target':            undefined
                    });

                    if (tetherAttrs[ 'target-parent' ]) {
                        tetherAttrs[ 'target-parent' ] = this.parentNode;
                    }

                    _xbPopup.fillOptionsFromAttrs(this._options, tetherAttrs);

                    return this._options;
                }
            },

            /**
             * @readonly
             * @prop {Tether} tether Tether the window object
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
             * @readonly
             * @prop {boolean} opened window is open
             */
            'opened': {
                'get': function() {
                    return this.tether.enabled;
                }
            }
        },

        'methods': {
            /**
             * Change the settings window
             * @memberOf xb.Popup.prototype
             * @param {object} nextOptions new settings
             */
            'setOptions': function(nextOptions) {
                var tether = this.tether;

                xblocks.utils.assign(true, this.options, nextOptions);
                tether.setOptions(this.options, false);

                if (tether.enabled) {
                    tether.position();
                }
            },

            /**
             * Open the window
             * @memberOf xb.Popup.prototype
             * @param {object} options new settings
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
             * Close the window
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
             * Recalculate the location
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
