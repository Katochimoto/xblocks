(function(xblocks) {
    'use strict';

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
            return this.xblock.html();
        },

        set: function(value) {
            this.xblock.html(value);
        }
    };

    XBIco.register();

}(xblocks));

