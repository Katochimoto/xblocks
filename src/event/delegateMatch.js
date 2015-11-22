import matchesSelector from 'dom/matchesSelector';

/**
 * @function xblocks.event.delegateMatch
 * @param   {[type]} selector [description]
 * @param   {[type]} target   [description]
 * @returns {[type]}          [description]
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
