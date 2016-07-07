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

    let match;

    if (matchesSelector(target, selector)) {
        match = target;

    } else if (matchesSelector(target, selector + ' *')) {
        let parent = target.parentNode;

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
