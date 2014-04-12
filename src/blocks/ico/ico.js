(function(xblocks, React) {

    /*! borschik:include:ico.jsx.js */

    var XBIco = xblocks.create('xb-ico');

    XBIco.attrs = {
        get: function() {
            return {
                size: 'm'
            };
        }
    };

    XBIco.value = {
        get: function() {
            return this.xblock.getHtml();
        },

        set: function(value) {
            this.xblock.setHtml(value);
        }
    };

    XBIco.register();

}(xblocks, React));

