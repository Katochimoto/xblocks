var globalContext = require('context');
var capitalize = require('_/string/capitalize');
var vendors = [ 'ms', 'moz', 'webkit', 'o' ];

module.exports = function (name, context) {
    context = context || globalContext;

    if (context[ name ]) {
        return context[ name ];
    }

    name = capitalize(name);

    var vendor;
    var x = 0;
    for (; x < 4; ++x) {
        vendor = vendors[ x ];
        if (context[ vendor + name ]) {
            return context[ vendor + name ];
        }
    }
};
