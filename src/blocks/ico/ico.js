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
            return this.innerHTML;
        },

        set: function(value) {
            this.innerHTML = value;
        }
    };

    XBIco.register();

}(xblocks, React));

