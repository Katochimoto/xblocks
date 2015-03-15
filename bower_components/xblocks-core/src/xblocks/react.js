/* global xblocks, React */
/* jshint strict: false */

/**
 * NOTE check after update React !!
 */

/**
 * @namespace
 */
xblocks.react = xblocks.react || {};

/**
 * @param {HTMLElement} node
 * @returns {boolean}
 */
xblocks.react.unmountComponentAtNode = function(node) {
    if (React.unmountComponentAtNode(node)) {
        return true;
    }

    return false;
};

/**
 * @param {object} nextElement
 * @param {HTMLElement} container
 * @param {function} [callback]
 * @returns {function}
 */
xblocks.react.render = function(nextElement, container, callback) {
    return React.render(nextElement, container, callback);
};
