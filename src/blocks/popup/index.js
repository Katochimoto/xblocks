import './index.styl';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create, event as xevent, dom } from 'xblocks-core';
import Tether from 'tether';
import context from 'context';
import tetherDefaultOptions from 'utils/tetherDefaultOptions';
import immediate from 'setimmediate2/src';
import mixinElementFocus from 'mixin/element/focus';

const POPUP_COMMON = {
    onOpen: function () {
        this.focus();
        xevent.dispatch(this, 'xb-open');
    },

    onClose: function () {
        this.blur();
        xevent.dispatch(this, 'xb-close');
    },

    /**
     * Check valid value for attribute by default
     * @param {*} value value for attribute
     * @returns {boolean}
     */
    checkDefaultAttr: function (value) {
        return (typeof value !== 'undefined');
    },

    /**
     * Association of attributes and options
     * @param {Object} options tether options
     * @param {Object} attrs attributes of element
     */
    fillOptionsFromAttrs: function (options, attrs) {
        for (let attrName in attrs) {
            let params = POPUP_COMMON.tetherAttrsAlign[ attrName ];
            if (!params) {
                continue;
            }

            let optionName = params[0];
            let checker = params[1] || POPUP_COMMON.checkDefaultAttr;
            let value = attrs[ attrName ];

            if (checker(value)) {
                if (typeof optionName === 'function') {
                    optionName(options, value);

                } else {
                    options[ optionName ] = value;
                }
            }
        }
    },

    /**
     * Union rules attributes
     * @type {Object}
     */
    tetherAttrsAlign: {
        'attachment': [ 'attachment' ],
        'target-attachment': [ 'targetAttachment' ],
        'target-offset': [ 'targetOffset' ],
        'offset': [ 'offset' ],
        'target': [
            'target',
            function (value) {
                return (value && (typeof value === 'string' || value instanceof context.HTMLElement));
            }
        ],
        'target-parent': [
            function (options, value) {
                options.target = value;
            },
            function (value) {
                return (value && value instanceof context.HTMLElement);
            }
        ],
        'target-modifier': [
            function (options, value) {
                options.targetModifier = (value === 'initial' ? undefined : value);
            },
            function (value) {
                return (value === 'initial' || value === 'visible' || value === 'scroll-handle');
            }
        ],
        'optimizations-gpu': [
            function (options, value) {
                options.optimizations.gpu = value;
            },
            function (value) {
                return (typeof value === 'boolean');
            }
        ],
        'constraints': [
            function (options, value) {
                options.constraints = JSON.parse(decodeURIComponent(value));
            },
            function (value) {
                return (value && typeof value === 'string');
            }
        ]
    }
};

/**
 * xb-popup html element
 *
 * @class xb.Popup
 * @augments HTMLElement
 * @memberof xb
 * @mixes .mixin.eFocus
 */
export default xb.Popup = create('xb-popup', [
    mixinElementFocus,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'jsx-click-close': function (event) {
                event.stopImmediatePropagation();
                this.close();
            },

            'keydown:keypass(27)': function () {
                this.close();
            }
        },

        /**
         * @lends xb.Popup.prototype
         */
        accessors: {

            /**
             * @prop {Object} default options
             * @readonly
             */
            defaultOptions: {
                get: tetherDefaultOptions
            },

            /**
             * @prop {object} options the display options window
             * @readonly
             */
            options: {
                get: function () {
                    if (this._options) {
                        return this._options;
                    }

                    this._options = this.defaultOptions;

                    var tetherAttrs = dom.attrs.get(this, {
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

                    POPUP_COMMON.fillOptionsFromAttrs(this._options, tetherAttrs);

                    return this._options;
                }
            },

            /**
             * @readonly
             * @prop {Tether} tether Tether the window object
             */
            tether: {
                get: function () {
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
            opened: {
                get: function () {
                    return this.tether.enabled;
                }
            }
        },

        methods: {
            /**
             * Change the settings window
             * @memberOf xb.Popup.prototype
             * @param {object} nextOptions new settings
             */
            setOptions: function (nextOptions) {
                _.assign(this.options, nextOptions);

                var tether = this.tether;
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
            open: function (options) {
                var tether = this.tether;

                if (tether.enabled) {
                    return false;
                }

                if (typeof options === 'object') {
                    this.setOptions(options);
                }

                xevent.dispatch(this, 'xb-before-open');

                tether.enable(true);
                tether.target._xbpopup = this;

                // FireFox does not set the focus without delay
                immediate.setImmediate(POPUP_COMMON.onOpen.bind(this));

                return true;
            },

            /**
             * Close the window
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            close: function () {
                var tether = this.tether;

                if (!tether.enabled) {
                    return false;
                }

                xevent.dispatch(this, 'xb-before-close');

                tether.target._xbpopup = undefined;
                tether.disable();
                tether.clearCache();

                // FireFox does not fire a blur event
                immediate.setImmediate(POPUP_COMMON.onClose.bind(this));

                return true;
            },

            /**
             * Recalculate the location
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            position: function () {
                this.tether.position();
                return true;
            }
        }
    }
]);
