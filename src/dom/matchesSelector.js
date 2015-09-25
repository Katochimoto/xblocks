var context = require('context');
var indexOf = Array.prototype.indexOf;
var proto = context.Element.prototype;
var matches = proto.matches ||
    proto.matchesSelector ||
    proto.webkitMatchesSelector ||
    proto.mozMatchesSelector ||
    proto.msMatchesSelector ||
    proto.oMatchesSelector ||
    function (selector) {
        return (indexOf.call((this.parentNode || this.ownerDocument).querySelectorAll(selector), this) !== -1);
    };

/**
 * @function xblocks.dom.matchesSelector
 * @param   {[type]} element  [description]
 * @param   {[type]} selector [description]
 * @returns {boolean}
 */
module.exports = function (element, selector) {
    return (element.nodeType === 1 ? matches.call(element, selector) : false);
};
