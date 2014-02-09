(function(xblocks) {
    'use strict';

    var XBSelect = xblocks.create('xb-select');

    XBSelect.attrs = {
        get: function() {
            return {
                button: {
                    attrs: {
                        'theme': 'normal',
                        'size': 'm',
                        'ico-type': 'dropdown',
                        'ico-float': 'right'
                    }
                }
            };
        }
    };

    XBSelect.on('create', function() {

    });

    XBSelect.register();

}(xblocks));
