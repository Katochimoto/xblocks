import isParent from 'dom/isParent';
import eachInnerFollowing from 'dom/eachInnerFollowing';

/**
 * @function xblocks.dom.eachAfter
 * @param   {[type]}   node     [description]
 * @param   {Function} callback [description]
 * @param   {[type]}   context  [description]
 * @param   {[type]}   inner    [description]
 * @returns {[type]}            [description]
 */
export default function (node, callback, context, inner) {
    inner = (typeof inner === 'undefined' ? true : Boolean(inner));
    var next;
    var cbcall;

    do {
        if (context && !isParent(context, node)) {
            return;
        }

        next = node;

        while ((next = next.nextSibling)) {
            cbcall = inner ? eachInnerFollowing(next, callback) : (callback && callback(next));

            if (typeof cbcall !== 'undefined' && !cbcall) {
                return false;
            }
        }

    } while ((node = node.parentNode));
}
