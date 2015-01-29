/** @jsx React.DOM */
/* global xblocks, React */

/* jshint strict: false */
/* jshint -W098 */
var XBMenuseparator = xblocks.view.register('xb-menuseparator', {
    displayName: 'xb-menuseparator',

    render: function() {
        return (
            React.createElement("div", {className: "xb-menuseparator"})
        );
    }
});
