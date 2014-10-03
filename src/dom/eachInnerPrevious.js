/**
 * Проход по всем потомкам в обратном порядке (от последней до первой)
 */
xblocks.dom.eachInnerPrevious = function(node, callback) {
    var stack = [ node ];
    var item;
    var cbcall;
    var i;
    var childsLength;

    while ((item = stack.pop())) {
        cbcall = callback && callback(item, stack);

        if (typeof(cbcall) !== 'undefined' && !cbcall) {
            return false;

        } else if (cbcall === 'next') {
            continue;
        }

        if (item.nodeType !== 1) {
            continue;
        }

        if (!item.hasChildNodes()) {
            continue;
        }

        childsLength = item.childNodes.length;
        i = 0;

        for (; i < childsLength; i++) {
            stack.push(item.childNodes[i]);
        }
    }

    return true;
};
