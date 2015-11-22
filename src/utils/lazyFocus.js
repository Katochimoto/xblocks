import context from 'context';

/**
 * @function xblocks.utils.lazyFocus
 * @param   {[type]} node [description]
 * @returns {[type]}      [description]
 */
module.exports = function (node) {
    context.setTimeout(node.focus.bind(node), 0);
};
