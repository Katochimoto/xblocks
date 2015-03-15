/* global xblocks, global */
/* jshint strict: false */

/**
 * Check the override method
 * @param {string} methodName method name
 * @returns {boolean} true if the method is not overridden
 */
xblocks.utils.pristine = function(methodName) {
    if (!methodName) {
        return false;
    }

    var method = global[ methodName ];

    if (!method) {
        return false;
    }

    if (!xblocks.utils.REG_PRISTINE.test(methodName)) {
        return false;
    }

    var type = typeof(method);

    if (type !== 'function' && type !== 'object') {
        return false;
    }

    var re = new RegExp("function\\s+" + methodName + "\\(\\s*\\)\\s*{\\s*\\[native code\\]\\s*}");

    if (!re.test(method)) {
        return false;
    }

    if (type === 'function') {
        if (!method.valueOf || method.valueOf() !== method) {
            return false;
        }
    }

    return true;
};
