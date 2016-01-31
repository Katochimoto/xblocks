import context from 'context';

/**
 * @function xblocks.utils.lazyFocus
 * @param {HTMLElement} node
 */
export default function (node) {
    context.setTimeout(node.focus.bind(node), 0);
}
