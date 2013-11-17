(function(Modernizr) {

    Modernizr.addTest('createshadowroot', 'createShadowRoot' in document.createElement('div'));
    Modernizr.addTest('stylescoped', 'scoped' in document.createElement('style'));

})(Modernizr);
