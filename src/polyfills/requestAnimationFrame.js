import context from 'context';
import vendor from 'utils/vendor';
var lastTime = 0;

context.requestAnimationFrame = vendor('requestAnimationFrame') ||
    function (callback) {
        var currTime = Date.now();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = context.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };

context.cancelAnimationFrame = vendor('cancelAnimationFrame') ||
    vendor('cancelRequestAnimationFrame') ||
    function (id) {
        context.clearTimeout(id);
    };

export default {
    requestAnimationFrame: context.requestAnimationFrame.bind(context),
    cancelAnimationFrame: context.cancelAnimationFrame.bind(context)
};
