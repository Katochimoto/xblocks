/* global escape  */

(function(yr, Modernizr) {
    'use strict';

    var ext = yr.externals;

    ext['xb-escape'] = function(value) {
        return escape(value);
    };

    ext['xb-modernizr'] = function(name) {
        return Modernizr[name];
    };

    ext['xb-inarray'] = function(name, array) {
        var l = array && array.length || 0;
        while (l--) {
            if (name == array[l]) {
                return true;
            }
        }
        return false;
    };

    ext['xb-empty-array'] = function(value) {
        if (typeof value === 'object' && (value instanceof Array) && value.length) {
            return false;
        }

        return true;
    };

    ext['xb-concat-array'] = function() {
        var ret = [];
        var l = arguments.length;

        while (l--) {
            var val = arguments[l];
            if (!ext['xb-empty-array'](val)) {
                ret = ret.concat(val);
            }
        }

        return ret;
    };

    ext['xb-prefix-rm'] = function(value, prefix) {
        if (!prefix) {
            return value;
        }

        return value.replace(prefix, '');
    };

})(yr, Modernizr);
