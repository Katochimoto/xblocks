/**
 * @function xblocks.dom.removeChild
 * @param   {[type]} element [description]
 * @returns {[type]}         [description]
 */
export default function (element) {
    if (element.parentNode) {
        return element.parentNode.removeChild(element);
    }
}
