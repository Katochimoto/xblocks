(function(xtag, xblocks) {
    'use strict';

    xblocks = xblocks || {};
    xblocks.types = xblocks.types || {};

    xblocks.types.number = (function() {

        return function(field) {
            function onkeydown() {}

            function onkeypress() {}

            function onkeyup() {}

            function onfocusin() {}

            function onfocusout() {}

            return {
                init: function() {
                    onkeydown.event = field.on('keydown', onkeydown);
                    onkeypress.event = field.on('keypress', onkeypress);
                    onkeyup.event = field.on('keyup', onkeyup);
                    onfocusin.event = field.on('focusin', onfocusin);
                    onfocusout.event = field.on('focusout', onfocusout);
                },
                destroy: function() {
                    field.off('keydown', onkeydown.event);
                    field.off('keypress', onkeypress.event);
                    field.off('keyup', onkeyup.event);
                    field.off('focusin', onfocusin.event);
                    field.off('focusout', onfocusout.event);
                },
                update: function() {}
            };
        };
    })();

})(xtag, xblocks);
