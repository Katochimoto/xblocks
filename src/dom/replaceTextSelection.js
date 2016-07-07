/**
 * Replacing selected text
 * @function xblocks.dom.replaceTextSelection
 * @param {HTMLElement} element
 * @param {string} text
 * @param {function} getter
 * @param {function} setter
 */
export default function (element, text, getter, setter) {
    const start = element.selectionStart;
    const end = element.selectionEnd;
    const scrollLeft = element.scrollLeft;
    const scrollTop = element.scrollTop;
    const pos = start + text.length;

    getter(function (value) {
        value = value.substr(0, start) + text + value.substr(end);

        setter(value, function (callback) {
            element.selectionStart = pos;
            element.selectionEnd = pos;
            element.scrollTop = scrollTop;
            element.scrollLeft = scrollLeft;
            callback();
        });
    });
}
