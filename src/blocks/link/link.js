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
            return this.xblock.getHtml();
        },

        set: function(value) {
            this.xblock.setHtml(value);
        }
    };

    XBLink.register();

}(xblocks));

