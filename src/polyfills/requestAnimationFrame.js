var context = require('context');
var vendor = require('utils/vendor');
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

module.exports = {
    'requestAnimationFrame': context.requestAnimationFrame,
    'cancelAnimationFrame': context.cancelAnimationFrame
};
