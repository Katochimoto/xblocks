/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */
/* jshint -W098 */
var XBMenuInline = xblocks.view.register('xb-menu-inline', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menu-inline',

        mixins: [ React.addons.PureRenderMixin ],

        render: function() {
            var classes = {
                '_popup': true
            };

            classes = React.addons.classSet(classes);

            return (
                React.createElement("div", {className: classes, 
                    tabIndex: "0", 
                    "data-xb-content": this.props._uid, 
                    dangerouslySetInnerHTML: { __html: this.props.children}})
            );
        }
    }
]);
