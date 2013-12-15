(function(xtag) {
    'use strict';

    define('type/number', function($) {
        return function(xbel) {
            function onkeydown() {}

            function onkeypress() {}

            function onkeyup() {}

            function onfocusin() {}

            function onfocusout() {}

            return {
                init: function() {
                    onkeydown.event = xbel.on('keydown', onkeydown);
                    onkeypress.event = xbel.on('keypress', onkeypress);
                    onkeyup.event = xbel.on('keyup', onkeyup);
                    onfocusin.event = xbel.on('focusin', onfocusin);
                    onfocusout.event = xbel.on('focusout', onfocusout);
                },
                destroy: function() {
                    xbel.off('keydown', onkeydown.event);
                    xbel.off('keypress', onkeypress.event);
                    xbel.off('keyup', onkeyup.event);
                    xbel.off('focusin', onfocusin.event);
                    xbel.off('focusout', onfocusout.event);
                },
                update: function() {}
            };
        };
    });

})(xtag);
