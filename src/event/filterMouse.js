import wrap from 'event/wrap';

/**
 * @function xblocks.event.filterMouseEnter
 * @param {HTMLElement} element
 * @param {Event} event mouseover or mouseout event
 * @param {function} callback
 * @returns {*}
 */
export default function (element, event, callback) {
    wrap(event);

    var toElement = event.relatedTarget;

    while (toElement && toElement !== element) {
        toElement = toElement.parentNode;
    }

    if (toElement === element) {
        return;
    }

    return callback.call(element, event);
}
