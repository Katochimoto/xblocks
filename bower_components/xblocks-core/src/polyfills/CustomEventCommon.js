/* global global */

var CustomEventCommon;
var doc = global.document;
var issetCustomEvent = false;

try {
    issetCustomEvent = Boolean(doc.createEvent('CustomEvent'));
} catch(e) {
    // do nothing
}

if (issetCustomEvent) {
    CustomEventCommon = function(eventName, params) {
        params = params || {};

        var bubbles = Boolean(params.bubbles);
        var cancelable = Boolean(params.cancelable);
        var evt = doc.createEvent('CustomEvent');

        evt.initCustomEvent(eventName, bubbles, cancelable, params.detail);

        return evt;
    };

} else {
    CustomEventCommon = function(eventName, params) {
        params = params || {};

        var bubbles = Boolean(params.bubbles);
        var cancelable = Boolean(params.cancelable);
        var evt = doc.createEvent('Event');

        evt.initEvent(eventName, bubbles, cancelable);
        evt.detail = params.detail;

        return evt;
    };
}

CustomEventCommon.prototype = global.Event.prototype;
