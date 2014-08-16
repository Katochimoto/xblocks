/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBMenuseparator = xblocks.view.register('xb-menuseparator', {
    displayName: 'xb-menuseparator',

    render: function() {
        return (
            <div className="xb-menuseparator" />
        );
    }
});

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

        statics: {
            TMPL_GROUP_MENU: '<xb-menu constraints="<%=constraints%>" target-attachment="top right" attachment="top left" target=".<%=targetClass%>"><%=children%></xb-menu>'
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
            this.setState({ 'selected': nextProps.selected });
        },

        /*
        _onMouseOver: function() {
            this.setState({ 'selected': true });
        },

        _onMouseOut: function() {
            this.setState({ 'selected': false });
        },
        */

        render: function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled': this.props.disabled,
                '_selected': this.state.selected
            };

            var children = '';

            if (this.props.children) {
                var targetClass = '_menuitem-target-' + this.props._uid;
                var constraints = encodeURIComponent(JSON.stringify([{
                    to: 'scrollParent',
                    attachment: 'together'
                }]));

                classes[targetClass] = true;
                classes['_group'] = true;

                children = xblocks.utils.tmpl(XBMenuitem.TMPL_GROUP_MENU, {
                    'constraints': constraints,
                    'targetClass': targetClass,
                    'children': this.props.children
                });
            }

            classes = React.addons.classSet(classes);

            return (
                <div className={classes}>
                    <span>{this.props.label}</span>
                    <div className="_content"
                        data-xb-content={this.props._uid}
                        dangerouslySetInnerHTML={{__html: children}} />
                </div>
            );
        }
    }
]);
