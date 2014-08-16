/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBMenuitem = xblocks.view.register('xb-menuitem', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menuitem',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'label': React.PropTypes.string,
            'disabled': React.PropTypes.bool
        },

        statics: {
            TMPL_GROUP_MENU: '<xb-menu constraints="<%=constraints%>" target-attachment="top right" attachment="top left" target=".<%=targetClass%>"><%=children%></xb-menu>'
        },

        render: function() {
            var classes = {
                'xb-menuitem': true,
                '_empty': !Boolean(this.props.label),
                '_disabled': this.props.disabled
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
                <a className={classes}>
                    <span>{this.props.label}</span>
                    <div className="_content"
                        data-xb-content={this.props._uid}
                        dangerouslySetInnerHTML={{__html: children}} />
                </a>
            );
        }
    }
]);
