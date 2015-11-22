import wrap from 'event/wrap';

/**
 * @function xblocks.event.filterClick
 * @param   {[type]}   which    [description]
 * @param   {Function} callback [description]
 * @returns {[type]}            [description]
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
