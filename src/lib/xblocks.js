(function() {
    'use strict';

    var xblocks = {};

    var namespace;

    if (typeof module !== 'undefined') {
        namespace = module.exports = xblocks;
    } else {
        namespace = (function() {
            return this || (1, eval)('this');
        }());
    }

    namespace.xblocks = xblocks;

    var __options = {

    };

    xblocks.option = function(name, value) {
        if (typeof name === 'string') {
            if (typeof value === 'undefined') {
                return __options[name];

            } else {
                return __options[name] = value;
            }
        }

        return undefined;
    };



    /*! borschik:include:xblocks/utils.js */
    /*! borschik:include:xblocks/attrs.js */
    /*! borschik:include:xblocks/block.js */
    /*! borschik:include:xblocks/element.js */
    /*! borschik:include:xblocks/type/text.js */
    /*! borschik:include:xblocks/type/date.js */
    /*! borschik:include:xblocks/type/number.js */

}());

