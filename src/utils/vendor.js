import globalContext from 'context';
import capitalize from 'lodash/capitalize';

const vendors = [ 'ms', 'moz', 'webkit', 'o' ];

export default function (name, context) {
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
}
