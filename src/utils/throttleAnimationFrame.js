import { requestAnimationFrame } from 'polyfills/requestAnimationFrame';

/**
 * @function xblocks.utils.throttleAnimationFrame
 * @param   {Function} callback [description]
 * @param   {[type]}   context  [description]
 * @returns {[type]}            [description]
 */
export default function (callback, context) {
    let throttle = 0;
    const animationCallback = function () {
        throttle = 0;
    };

    return function () {
        if (throttle) {
            return;
        }

        throttle = requestAnimationFrame(animationCallback);

        callback.apply(context || this, arguments);
    };
}
