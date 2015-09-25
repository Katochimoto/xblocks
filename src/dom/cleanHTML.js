var context = require('context');
var forEach = Array.prototype.forEach;
var remove = function (element) {
    element.parentNode.removeChild(element);
};

/**
 * @function xblocks.dom.cleanHTML
 * @returns {string}
 */
module.exports = function (html) {
    var root = context.document.implementation.createHTMLDocument('').body;
    root.innerHTML = html;
    forEach.call(root.querySelectorAll('script,style,img'), remove);
    return root.innerHTML;
};
