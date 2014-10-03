xblocks.dom.eachBefore = function(node, callback, context, inner) {
    inner = (typeof(inner) === 'undefined' ? true : Boolean(inner));
    var prev;
    var cbcall;

    do {
        if (context && !xblocks.dom.isParent(context, node)) {
            return;
        }

        prev = node;

        while ((prev = prev.previousSibling)) {
            cbcall = inner ? xblocks.dom.eachInnerPrevious(prev, callback) : (callback && callback(prev));

            if (typeof(cbcall) !== 'undefined' && !cbcall) {
                return false;
            }
        }

    } while ((node = node.parentNode));
};
