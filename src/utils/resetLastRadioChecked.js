const CHECKED_CACHE = {};

/**
 * FIXME don't work cloneNode
 * @param {HTMLElement} element
 * @param {string} name
 */
export default function (element, name) {
    name = String(name);
    var lastCheckedElement = CHECKED_CACHE[ name ];

    if (lastCheckedElement && lastCheckedElement !== element) {
        lastCheckedElement.checked = false;
    }

    CHECKED_CACHE[ name ] = element;
}
