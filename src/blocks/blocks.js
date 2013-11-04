(function() {
    'use strict';

    var xblocks = {};
    xblocks.version = '0.0.1';

    var namespace;

    if (typeof module !== 'undefined') {
        namespace = module.exports = xblocks;
    } else {
        namespace = (function() {
            return this || (1, eval)('this');
        }());
    }

    namespace.xblocks = xblocks;


    xblocks.attrs2obj = function(element) {
        var out = {};
        for (var i = 0, attrs = element.attributes, l = attrs.length; i < l; i++) {
            var attr = attrs.item(i);
            if (attr.nodeValue === 'true' || attr.nodeValue === 'false' || attr.nodeName === attr.nodeValue) {
                if (attr.nodeName === attr.nodeValue || attr.nodeValue === 'true') {
                    out[attr.nodeName] = true;

                } else {
                    out[attr.nodeName] = false;
                }

            } else {
                out[attr.nodeName] = attr.nodeValue;
            }
        }

        return out;
    };

}());

