import context from 'context';
import vendor from 'utils/vendor';

var lastTime = 0;

export const requestAnimationFrame = context.requestAnimationFrame = vendor('requestAnimationFrame') ||
    function (callback) {
        var currTime = Date.now();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = context.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

export const cancelAnimationFrame = context.cancelAnimationFrame = vendor('cancelAnimationFrame') ||
    vendor('cancelRequestAnimationFrame') ||
    function (id) {
        context.clearTimeout(id);
    };
