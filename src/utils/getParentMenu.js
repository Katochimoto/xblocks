/**
 * @param {HTMLElement} node
 * @returns {HTMLElement|null}
 */
module.exports = function(node) {
    var parent = node;

    while (parent) {
        if (parent.xtagName === 'xb-menu' || parent.xtagName === 'xb-menu-inline') {
            return parent;
        }

        parent = parent.parentNode;
    }

    return null;
};
