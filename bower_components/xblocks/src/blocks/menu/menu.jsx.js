/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */
/* jshint -W098 */
var XBMenu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menu',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'type': React.PropTypes.oneOf([ 'context', 'toolbar', 'list' ])
        },

        getDefaultProps: function() {
            return {
                'type': 'list'
            };
        },

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
