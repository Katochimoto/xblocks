(function(Modernizr) {

    Modernizr.addTest('createshadowroot', function() {
        return !!document.createElement('div').createShadowRoot;
    });

    Modernizr.addTest('stylescoped', 'scoped' in document.createElement('style'));

})(Modernizr);


(function(yr) {

    yr.externals['xb-modernizr'] = function(name) {
        return Modernizr[name];
    };

    yr.externals['xb-inarray'] = function(name, array) {
        var l = array.length;
        while (l--) {
            if (name == array[l]) {
                return true;
            }
        }
        return false;
    };

})(yr);

/* borschik:include:../node_modules/borschik/js/borschik.js */
/* borschik:include:../node_modules/x-tag-core/dist/x-tag-core.js */
/* borschik:include:../node_modules/tv4/tv4.js */
/* borschik:include:blocks/blocks.js */
/* borschik:include:blocks/button/button.js */
/* borschik:include:blocks/field/field.js */

