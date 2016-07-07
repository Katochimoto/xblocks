import _ from 'lodash';
import globalContext from 'context';

const VENDORS = [ 'ms', 'moz', 'webkit', 'o' ];

/**
 * @param {string} name
 * @param {Object} [context]
 * @returns {*}
 */
export default function (name, context) {
    context = context || globalContext;

    if (context[ name ]) {
        return context[ name ];
    }

    name = _.capitalize(name);

    let vendor;
    let x = 0;
    for (; x < 4; ++x) {
        vendor = VENDORS[ x ];
        if (context[ vendor + name ]) {
            return context[ vendor + name ];
        }
    }
}
