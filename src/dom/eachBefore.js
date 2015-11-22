import isParent from 'dom/isParent';
import eachInnerPrevious from 'dom/eachInnerPrevious';

/**
 * @function xblocks.dom.eachBefore
 * @param   {[type]}   node     [description]
 * @param   {Function} callback [description]
 * @param   {[type]}   context  [description]
 * @param   {[type]}   inner    [description]
 * @returns {[type]}            [description]
 */
export default function (node, callback, context, inner) {
    inner = (typeof inner === 'undefined' ? true : Boolean(inner));
    var prev;
    var cbcall;

    do {
        if (context && !isParent(context, node)) {
            return;
        }

        prev = node;

        while ((prev = prev.previousSibling)) {
            cbcall = inner ? eachInnerPrevious(prev, callback) : (callback && callback(prev));

            if (typeof cbcall !== 'undefined' && !cbcall) {
                return false;
            }
        }

    } while ((node = node.parentNode));
}
