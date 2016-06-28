import './index.styl';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create, event as xevent, dom } from 'xblocks-core';
import Tether from 'tether';
import context from 'context';
import popupDefaultOptions from 'utils/popupDefaultOptions';
import immediate from 'setimmediate2/src';
import ConstantPopup from 'constants/popup';

/**
 * Union rules attributes
 * @type {Object}
 * @constant
 */
const ATTRS_ALIGN = {
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
};

/**
 * xb-popup html element
 *
 * @class xb.Popup
 * @augments HTMLElement
 * @memberof xb
 */
export default xb.Popup = create('xb-popup', [
    {
        prototype: Object.create(HTMLElement.prototype),

        lifecycle: {
            created: function () {
                this.setAttribute('tabindex', '0');
            }
        },

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
             * @prop {Object} popupDefaultOptions default options
             * @readonly
             */
            popupDefaultOptions: {
                get: popupDefaultOptions
            },

            /**
             * @prop {Object} popupOptions the display options window
             * @see http://tether.io/#options
             * @readonly
             */
            popupOptions: {
                get: function () {
                    if (this[ ConstantPopup.OPTIONS ]) {
                        return this[ ConstantPopup.OPTIONS ];
                    }

                    const popupOptions = this[ ConstantPopup.OPTIONS ] = this.popupDefaultOptions;

                    const attrs = dom.attrs.get(this, {
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

                    if (attrs[ 'target-parent' ]) {
                        attrs[ 'target-parent' ] = this.parentNode;
                    }

                    fillOptionsFromAttrs(popupOptions, attrs);

                    return popupOptions;
                }
            },

            /**
             * @readonly
             * @prop {Tether} core Tether the window object
             */
            core: {
                get: function () {
                    if (!this[ ConstantPopup.CORE ]) {
                        this[ ConstantPopup.CORE ] = new Tether(this.popupOptions);
                    }

                    return this[ ConstantPopup.CORE ];
                }
            },

            /**
             * @readonly
             * @prop {boolean} opened window is open
             */
            opened: {
                get: function () {
                    return this.core.enabled;
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
                _.assign(this.popupOptions, nextOptions);

                const core = this.core;
                core.setOptions(this.popupOptions, false);

                if (core.enabled) {
                    core.position();
                }
            },

            /**
             * Open the window
             * @memberOf xb.Popup.prototype
             * @param {object} popupOptions new settings
             * @returns {boolean}
             */
            open: function (popupOptions) {
                const core = this.core;

                if (core.enabled) {
                    return false;
                }

                if (_.isPlainObject(popupOptions)) {
                    this.setOptions(popupOptions);
                }

                xevent.dispatch(this, 'xb-before-open');

                core.enable(true);
                core.target[ ConstantPopup.POPUP ] = this;

                // FireFox does not set the focus without delay
                immediate.setImmediate(() => {
                    this.focus();
                    xevent.dispatch(this, 'xb-open');
                });

                return true;
            },

            /**
             * Close the window
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            close: function () {
                const core = this.core;

                if (!core.enabled) {
                    return false;
                }

                xevent.dispatch(this, 'xb-before-close');

                core.target[ ConstantPopup.POPUP ] = undefined;
                core.disable();
                core.clearCache();

                // FireFox does not fire a blur event
                immediate.setImmediate(() => {
                    this.blur();
                    xevent.dispatch(this, 'xb-close');
                });

                return true;
            },

            /**
             * Recalculate the location
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            position: function () {
                this.core.position();
                return true;
            }
        }
    }
]);

/**
 * Check valid value for attribute by default
 * @param {*} value value for attribute
 * @returns {boolean}
 * @private
 */
function checkDefaultAttr(value) {
    return (typeof value !== 'undefined');
}

/**
 * Association of attributes and options
 * @param {Object} popupOptions popup options
 * @param {Object} attrs attributes of element
 * @private
 */
function fillOptionsFromAttrs(popupOptions, attrs) {
    for (let attrName in attrs) {
        let params = ATTRS_ALIGN[ attrName ];
        if (!params) {
            continue;
        }

        let optionName = params[0];
        let checker = params[1] || checkDefaultAttr;
        let value = attrs[ attrName ];

        if (checker(value)) {
            if (_.isFunction(optionName)) {
                optionName(popupOptions, value);

            } else {
                popupOptions[ optionName ] = value;
            }
        }
    }
}
