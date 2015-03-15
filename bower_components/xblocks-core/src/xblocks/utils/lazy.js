/* global xblocks, global */
/* jshint strict: false */

/**
 * Deferred execution
 *
 * @example
 * var lazyCallback = function() {
 *     console.log(arguments);
 * };
 * xblocks.utils.lazy(lazyCallback, 'a');
 * xblocks.utils.lazy(lazyCallback, 'b');
 * xblocks.utils.lazy(lazyCallback, 'c');
 * // ....
 * [ Array[ 'a', 'b', 'c' ] ]
 *
 * @param {function} callback
 * @param {*} args
 * @returns {function}
 */
xblocks.utils.lazy = function(callback, args) {
    if (!callback._args) {
        callback._args = [];
    }

    callback._args.push(args);

    if (!callback._timer) {
        callback._timer = global.setImmediate(function() {
            callback._timer = 0;

            var args = callback._args;
            callback._args = [];

            callback(args);
        });
    }

    return callback;
};
