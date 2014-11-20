/** @jsx React.DOM */
/* global xblocks, React */

/* jshint strict: false */
/* jshint -W098 */
var XBMenuitem = xblocks.view.register('xb-menuitem', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menuitem',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'label': React.PropTypes.string.isRequired,
            'disabled': React.PropTypes.bool,
            'selected': React.PropTypes.bool,
            'focused': React.PropTypes.bool,
            'submenu': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'disabled': false,
                'selected': false,
                'focused': false,
                'submenu': false
            };
        },

        render: function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled': this.props.disabled,
                '_focused': this.props.focused,
                '_selected': this.props.selected,
                '_submenu': this.props.submenu,
            };

            classes = React.addons.classSet(classes);

            return React.DOM.div({
                'className': classes
            }, React.DOM.span({}, this.props.label));
        }
    }
]);
