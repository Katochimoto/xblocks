import context from 'context';

/**
 * @function xblocks.utils.lazyFocus
 * @param   {[type]} node [description]
 * @returns {[type]}      [description]
 */
export default function (node) {
    context.setTimeout(node.focus.bind(node), 0);
}
