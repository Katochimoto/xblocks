/* jshint -W067 */
(function(global) {
    'use strict';

    var indexOf = Array.prototype.indexOf;
    var proto = global.Element.prototype;

    proto.matches = proto.matches ||
        proto.matchesSelector ||
        proto.webkitMatchesSelector ||
        proto.mozMatchesSelector ||
        proto.msMatchesSelector ||
        proto.oMatchesSelector ||
        function(selector) {
            return (indexOf.call((this.parentNode || this.ownerDocument).querySelectorAll(selector), this) !== -1);
        };

}(function() {
    return this || (1, eval)('this');
}()));
