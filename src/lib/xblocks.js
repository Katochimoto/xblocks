(function() {
    /**
     * @module xblocks
     */
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


    /*! borschik:include:xblocks/utils.js */
    /*! borschik:include:xblocks/attrs.js */
    /*! borschik:include:xblocks/dom.js */
    /*! borschik:include:xblocks/block.js */
    /*! borschik:include:xblocks/element.js */

}());
