/* global xblocks */
/* jshint strict: false */

/**
 * The generator is a unique sequence of positive numbers
 *
 * @example
 * xblocks.utils.seq()
 * // 1
 * xblocks.utils.seq()
 * // 2
 *
 * @function xblocks.utils.seq
 * @returns {number} a unique, incremental positive number
 */
xblocks.utils.seq = (function() {
    var i = 0;
    return function() {
        return ++i;
    };
}());
