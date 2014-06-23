(function(global, undefined) {
    'use strict';

    var React = global.React;
    var xblocks = global.xblocks;

    xblocks.utils.compact = function(data) {
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                if (!data[prop]) {
                    delete data[prop];
                }
            }
        }

        return data;
    };

    xblocks.utils.toAttrsName = function(name) {
        switch (name) {
            case 'class':
                return 'className';
            case 'tabindex':
                return 'tabIndex';
            case 'autofocus':
                return 'autoFocus';
            default:
                return name;
        }
    };

    xblocks.utils.normalizeAttrsName = function(data) {
        var attrs = {};
        Object.keys(data).forEach(function(key) {
            attrs[xblocks.utils.toAttrsName(key)] = data[key];
        });
        return attrs;
    };

    /*! borschik:include:blocks/ico/ico.js */
    /*! borschik:include:blocks/link/link.js */
    /*! borschik:include:blocks/button/button.js */
    /*! borschik:include:blocks/input/input.js */

}(function() {
    return this || (1, eval)('this');
}()));
