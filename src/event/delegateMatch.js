import matchesSelector from 'dom/matchesSelector';

/**
 * @param {string} selector
 * @param {HTMLElement} target
 * @returns {?HTMLElement}
 */
export default function (selector, target) {
    if (!target || !target.tagName) {
        return;
    }

    var match;

    if (matchesSelector(target, selector)) {
        match = target;

    } else if (matchesSelector(target, selector + ' *')) {
        var parent = target.parentNode;

        while (parent) {
            if (matchesSelector(parent, selector)) {
                match = parent;
                break;
            }

            parent = parent.parentNode;
        }
    }

    return match;
}
