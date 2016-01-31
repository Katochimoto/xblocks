import wrap from 'event/wrap';

/**
 * @param {number|number[]} which
 * @param {function} callback
 * @returns {function}
 */
export default function (which, callback) {
    which = Array.isArray(which) ? which : [ which ];

    return function (event) {
        if (event.type !== 'click') {
            return;
        }

        wrap(event);

        if (which.indexOf(event.whichStr) !== -1) {
            callback.call(this, event);
        }
    };
}
