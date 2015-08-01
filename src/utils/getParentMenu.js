//jscs:disable
/* global xblocks */
/* jshint strict: false */
//jscs:enable

/**
 * @param {HTMLElement} node
 * @returns {HTMLElement|null}
 */
xblocks.utils.getParentMenu = function(node) {
    var parent = node;

    while (parent) {
        if (parent.xtagName === 'xb-menu' || parent.xtagName === 'xb-menu-inline') {
            return parent;
        }

        parent = parent.parentNode;
    }

    return null;
};
