/* global xblocks, global */
/* jshint strict: false */

xblocks.utils.lazyFocus = function(node) {
    global.setImmediate(node.focus.bind(node));
};
