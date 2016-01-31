import delegateMatch from 'event/delegateMatch';
import wrap from 'event/wrap';

/**
 * @param {string} selector
 * @param {function} callback
 * @returns {function}
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
