/* global global */
xblocks.dom.isParent = (function() {
    var root = global.document.documentElement;

    if ('compareDocumentPosition' in root) {
        return function(container, element) {
            /*jshint -W016 */
            return (container.compareDocumentPosition(element) & 16) == 16;
        };

    } else if ('contains' in root) {
        return function(container, element) {
            return container !== element && container.contains(element);
        };

    } else {
        return function(container, element) {
            while ((element = element.parentNode)) {
                if (element === container) {
                    return true;
                }
            }

            return false;
        };
    }
}());
