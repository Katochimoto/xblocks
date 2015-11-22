import delegateMatch from 'event/delegateMatch';
import wrap from 'event/wrap';

/**
 * @function xblocks.event.delegate
 * @param   {[type]}   selector [description]
 * @param   {Function} callback [description]
 * @returns {[type]}            [description]
 */
export default function (selector, callback) {

    return function (event) {
        wrap(event);

        var match = delegateMatch(selector, event.target);

        if (!match) {
            return;
        }

        event.delegateElement = match;

        callback.call(match, event);
    };
}
