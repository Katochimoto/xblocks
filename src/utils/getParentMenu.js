/**
 * @param {HTMLElement} node
 * @returns {HTMLElement|null}
 */
export default function (node) {
    var parent = node;

    while (parent) {
        if (parent.xtagName === 'xb-menu' || parent.xtagName === 'xb-menu-inline') {
            return parent;
        }

        parent = parent.parentNode;
    }

    return null;
}
