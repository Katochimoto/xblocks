import context from 'context';
var html = context.document.documentElement;

/**
 * @function xblocks.dom.isParent
 * @param {HTMLElement} container
 * @param {HTMLElement} element
 * @returns {boolean}
 */
module.exports = (function () {

    if ('compareDocumentPosition' in html) {
        return function (container, element) {
            return (container.compareDocumentPosition(element) & 16) === 16;
        };

    } else if ('contains' in html) {
        return function (container, element) {
            return container !== element && container.contains(element);
        };

    } else {
        return function (container, element) {
            while ((element = element.parentNode)) {
                if (element === container) {
                    return true;
                }
            }

            return false;
        };
    }

}());
