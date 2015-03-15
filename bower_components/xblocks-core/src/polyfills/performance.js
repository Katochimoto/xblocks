/* jshint -W067 */
(function(global) {
    'use strict';

    if (typeof(global.performance) === 'undefined') {
        global.performance = {};
    }

    if (!global.performance.now) {
        var nowOffset;

        if (global.performance.timing && global.performance.timing.navigationStart) {
            nowOffset = global.performance.timing.navigationStar;

        } else {
            nowOffset = Date.now();
        }

        global.performance.now = function() {
            return (Date.now() - nowOffset);
        };
    }

}(function() {
    return this || (1, eval)('this');
}()));
