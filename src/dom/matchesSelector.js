xblocks.dom.matchesSelector = (function() {
    var ElementPrototype = Element.prototype;
    var matches = ElementPrototype.matches ||
        ElementPrototype.matchesSelector ||
        ElementPrototype.webkitMatchesSelector ||
        ElementPrototype.mozMatchesSelector ||
        ElementPrototype.msMatchesSelector ||
        ElementPrototype.oMatchesSelector ||
        function(selector) {
            var nodes = (this.parentNode || this.document).querySelectorAll(selector);
            var i = -1;
    	    while (nodes[++i] && nodes[i] !== this) {
                continue;
            }
            /* jshint: -W035 */
    	    return Boolean(nodes[i]);
        };

    return function(element, selector) {
        return (element.nodeType === 1 ? matches.call(element, selector) : false);
    };

}());
