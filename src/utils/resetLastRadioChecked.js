var checkedCache = {};

/**
 * FIXME don't work cloneNode
 * @param {HTMLElement} element
 * @param {string} name
 */
export default function (element, name) {
    name = String(name);
    var lastCheckedElement = checkedCache[ name ];

    if (lastCheckedElement && lastCheckedElement !== element) {
        lastCheckedElement.checked = false;
    }

    checkedCache[ name ] = element;
}
