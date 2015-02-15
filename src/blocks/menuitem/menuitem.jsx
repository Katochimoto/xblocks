/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Menuitem
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Menuitem = xblocks.view.register('xb-menuitem', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-menuitem',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'label':    React.PropTypes.string.isRequired,
            'disabled': React.PropTypes.bool,
            'selected': React.PropTypes.bool,
            'focused':  React.PropTypes.bool,
            'submenu':  React.PropTypes.bool
        },

        'statics': {
            'filterIcoProps': function(props) {
                return xblocks.utils.mapObject(
                    xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixIco),
                    xblocks.utils.mapPropsPrefixIco
                );
            }
        },

        'getDefaultProps': function() {
            return {
                'disabled': false,
                'selected': false,
                'focused': false,
                'submenu': false
            };
        },

        'render': function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled': this.props.disabled,
                '_focused': this.props.focused,
                '_selected': this.props.selected,
                '_submenu': this.props.submenu,
            };

            classes = React.addons.classSet(classes);

            var children = [
                <span className="_label" key="label">{this.props.label}</span>
            ];

            var icoProps = xv.Menuitem.filterIcoProps(this.props);

            if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
                icoProps.key = 'ico';

                if (!icoProps.float || icoProps.float === 'left') {
                    children.unshift(<XBIco {...icoProps}/>);

                } else if (icoProps.float === 'right') {
                    children.push(<XBIco {...icoProps}/>);
                }
            }

            return (
                <div className={classes}>{children}</div>
            );
        }
    }
]);
