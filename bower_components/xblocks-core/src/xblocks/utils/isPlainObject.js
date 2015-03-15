/* global xblocks */
/* jshint strict: false */

/**
 * Check to see if an object is a plain object (created using "{}" or "new Object")
 *
 * @example
 * xblocks.utils.isPlainObject({})
 * // true
 * xblocks.utils.isPlainObject(test)
 * // false
 *
 * @param {*} value the value to test
 * @returns {boolean}
 */
xblocks.utils.isPlainObject = function(value) {
    if (xblocks.utils.type(value) !== 'object') {
        return false;
    }

    if (value.constructor && !value.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
        return false;
    }

    return true;
};
