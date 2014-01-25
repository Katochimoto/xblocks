(function(xblocks) {
    'use strict';

    var XBLink = xblocks.create('xb-link');

    XBLink.attrs = {
        get: function() {
            return {
                type: 'normal'
            };
        }
    };

    XBLink.value = {
        get: function() {
            return this.xblock.html();
        },

        set: function(value) {
            this.xblock.html(value);
        }
    };

    XBLink.register();

}(xblocks));

