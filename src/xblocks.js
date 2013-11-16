/* global escape  */

(function(Modernizr) {

    Modernizr.addTest('createshadowroot', function() {
        return !!document.createElement('div').createShadowRoot;
    });

    Modernizr.addTest('stylescoped', 'scoped' in document.createElement('style'));

})(Modernizr);


(function(yr) {

    yr.externals['xb-escape'] = function(value) {
        return escape(value);
    };

    yr.externals['xb-modernizr'] = function(name) {
        return Modernizr[name];
    };

    yr.externals['xb-inarray'] = function(name, array) {
        var l = array && array.length || 0;
        while (l--) {
            if (name == array[l]) {
                return true;
            }
        }
        return false;
    };

    yr.externals['xb-empty-array'] = function(value) {
        if (typeof value === 'object' && (value instanceof Array) && value.length) {
            return false;
        }

        return true;
    };

    yr.externals['xb-concat-array'] = function() {
        var ret = [];
        var l = arguments.length;

        while(l--) {
            var val = arguments[l];
            if (!yr.externals['xb-empty-array'](val)) {
                ret = ret.concat(val);
            }
        }

        return ret;
    };

})(yr);

/* borschik:include:../node_modules/borschik/js/borschik.js */
/* borschik:include:../node_modules/x-tag-core/dist/x-tag-core.js */
/* borschik:include:../node_modules/tv4/tv4.js */
/* borschik:include:blocks/blocks.js */
/* borschik:include:blocks/button/button.js */
/* borschik:include:blocks/field/field.js */

