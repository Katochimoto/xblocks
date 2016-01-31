/**
 * @param {HTMLElement} element
 * @returns {HTMLElement}
 */
export default function (element) {
    if (element.parentNode) {
        return element.parentNode.removeChild(element);
    }
}
