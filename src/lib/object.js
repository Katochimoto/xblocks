(function() {
    'use strict';

    if (!Object.create) {
        Object.create = (function() {
            function F() {}

            return function(o) {
                if (arguments.length != 1) {
                    throw new Error('Object.create implementation only accepts one parameter.');
                }

                F.prototype = o;
                return new F();
            };
        })();
    }

    /**
     *
     * @param {Object} child
     * @param {Object} parent
     */
    Object.extend = function(child, parent) {
        var f = function() {};
        f.prototype = parent.prototype;
        child.prototype = new f();
        child.prototype.constructor = child;
        child.superclass = parent.prototype;
    };

    /**
     *
     * @param {Object} obj
     * @param {Array} [ignore]
     * @returns {Boolean}
     */
    Object.isEmpty = function(obj, ignore) {
        if (typeof obj !== 'object') {
            return true;
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (!ignore || (ignore && ignore.indexOf(key) === -1)) {
                    return false;
                }
            }
        }

        return true;
    };

    Object.merge = function(target) {
        for (var i = 1, l = arguments.length; i < l; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (source.hasOwnProperty(key)) {
                    target[key] = source[key];
                }
            }
        }

        return target;
    };

})();
