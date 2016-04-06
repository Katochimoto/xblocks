const MENU_TAG = 'xb-menu';
const MENU_INLINE_TAG = 'xb-menu-inline';

/**
 * @param {HTMLElement} node
 * @returns {HTMLElement|null}
 */
export default function (node) {
    var parent = node;

    while (parent) {
        if (parent.xtagName === MENU_TAG || parent.xtagName === MENU_INLINE_TAG) {
            return parent;
        }

        parent = parent.parentNode;
    }

    return null;
}
