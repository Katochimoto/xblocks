xblocks.dom.event = xblocks.dom.event || {};

xblocks.dom.event.delegate = function(selector, callback) {

    return function(event) {
        var target = event.target || event.relatedTarget || event.srcElement;
        var match;

        if (!target.tagName) {
            return null;
        }

        if (xblocks.dom.matchesSelector(target, selector)) {
            match = target;

        } else if (xblocks.dom.matchesSelector(target, selector + ' *')) {
            var parent = target.parentNode;

            while (parent) {
                if (xblocks.dom.matchesSelector(parent, selector)) {
                    match = parent;
                    break;
                }

                parent = parent.parentNode;
            }
        }

        if (!match) {
            return null;
        }

        event.delegateElement = match;
        callback.call(match, event);
    };
};
