var animationFrame = require('polyfills/requestAnimationFrame');

/**
 * @function xblocks.utils.throttleAnimationFrame
 * @param   {Function} callback [description]
 * @param   {[type]}   context  [description]
 * @returns {[type]}            [description]
 */
module.exports = function (callback, context) {
    var throttle = 0;
    var animationCallback = function () {
        throttle = 0;
    };

    return function () {
        if (throttle) {
            return;
        }

        debugger;
        throttle = animationFrame.requestAnimationFrame(animationCallback);

        callback.apply(context || this, arguments);
    };
};
