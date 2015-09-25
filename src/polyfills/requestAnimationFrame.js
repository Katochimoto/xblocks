var context = require('context');
var lastTime = 0;
var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
var vendor;

for (var x = 0; x < 4 && !context.requestAnimationFrame; ++x) {
    vendor = vendors[ x ];
    context.requestAnimationFrame = context[ vendor + 'RequestAnimationFrame' ];
    context.cancelAnimationFrame = context[ vendor + 'CancelAnimationFrame' ] ||
        context[ vendor + 'CancelRequestAnimationFrame' ];
}

if (!context.requestAnimationFrame) {
    context.requestAnimationFrame = function (callback) {
        var currTime = Date.now();
        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
        var id = context.setTimeout(function () {
            callback(currTime + timeToCall);
        }, timeToCall);
        lastTime = currTime + timeToCall;
        return id;
    };
}

if (!context.cancelAnimationFrame) {
    context.cancelAnimationFrame = function (id) {
        context.clearTimeout(id);
    };
}
