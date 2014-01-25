(function(xblocks) {
    'use strict';

    var XBButton = xblocks.create('xb-button');

    XBButton.attrs = {
        get: function() {
            return {
                theme: 'normal',
                size: 'm'
            };
        }
    };

    XBButton.value = {
        get: function() {
            return this.xblock.html();
        },

        set: function(value) {
            this.xblock.html(value);
        }
    };

    XBButton.on('update', function() {
        this.removeAttribute('value');
    });

    XBButton.register();

}(xblocks));

