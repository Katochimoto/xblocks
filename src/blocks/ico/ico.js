(function(xblocks, React) {

    /*! borschik:include:ico.jsx.js */

    var XBIco = xblocks.create('xb-ico');

    XBIco.state = {
        get: function() {
            return {
                size: 'm'
            };
        }
    };

    XBIco.register();

}(xblocks, React));

