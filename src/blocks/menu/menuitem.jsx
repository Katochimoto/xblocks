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
            'selected': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'disabled': false,
                'selected': false
            };
        },

        getInitialState: function() {
            return {
                'selected': this.props.selected
            };
        },

        componentWillReceiveProps: function(nextProps) {
            this.setState({
                'selected': nextProps.selected
            });
        },

        componentDidMount: function() {
        },

        componentWillUnmount: function() {
        },

        componentDidUpdate: function(prevProps, prevState) {
        },

        _removeSubmenu: function() {
            if (this.submenu && this.submenu.parentNode) {
                this.submenu.parentNode.removeChild(this.submenu);
                this.submenu = null;
            }
        },

        render: function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled': this.props.disabled,
                '_selected': this.state.selected
            };

            if (this.props.children.trim()) {
                classes['_menuitem-target-' + this.props._uid] = true;
                classes['_submenu'] = true;
            }

            classes = React.addons.classSet(classes);

            return React.DOM.div({
                'className': classes
            }, React.DOM.span({}, this.props.label));
        }
    }
]);
