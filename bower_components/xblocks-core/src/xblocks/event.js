/* global xblocks, global, CustomEventCommon */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.event = xblocks.event || {};

/**
 * Designer events
 *
 * @example
 * new xblocks.event.Custom('custom-event', {
 *     bubbles: true,
 *     cancelable: true,
 *     detail: { data: '123' }
 * })
 *
 * @constructor
 * @memberOf xblocks.event
 */
xblocks.event.Custom = (function() {
    if (xblocks.utils.pristine('CustomEvent')) {
        return global.CustomEvent;
    }

    return (function() {
        /*! borschik:include:../polyfills/CustomEventCommon.js */
        return CustomEventCommon;
    }());
}());

/**
 * Dispatch event
 *
 * @example
 * xblocks.event.dispatch(node, 'custom-event', {
 *     bubbles: true,
 *     cancelable: true,
 *     detail: { data: '123' }
 * })
 *
 * @param {HTMLElement} element node events
 * @param {string} name event name
 * @param {object} params the event parameters
 */
xblocks.event.dispatch = function(element, name, params) {
    element.dispatchEvent(new xblocks.event.Custom(name, params || {}));
};
