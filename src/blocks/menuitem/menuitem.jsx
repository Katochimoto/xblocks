/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * The template node xb-menuitem
 *
 * @class xv.Menuitem
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Menuitem = xblocks.view.register('xb-menuitem', [
    xblocks.utils.exportPropTypes('xb-ico'),
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-menuitem',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'focused':  React.PropTypes.bool,
            'ico':      React.PropTypes.object,
            'label':    React.PropTypes.string.isRequired,
            'selected': React.PropTypes.bool,
            'submenu':  React.PropTypes.bool
        },

        'getDefaultProps': function() {
            return {
                'disabled': false,
                'focused':  false,
                'selected': false,
                'submenu':  false
            };
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled':   this.props.disabled,
                '_focused':    this.props.focused,
                '_selected':   this.props.selected,
                '_submenu':    this.props.submenu,
            };

            classes = classNames(classes);

            var children = [
                <span className="_label" key="label">{this.props.label}</span>
            ];

            var icoProps = xblocks.utils.filterIcoProps(this.props);

            if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
                icoProps.key = 'ico';

                if (!icoProps.float || icoProps.float === 'left') {
                    children.unshift(<xb-ico {...icoProps} />);

                } else if (icoProps.float === 'right') {
                    children.push(<xb-ico {...icoProps} />);
                }
            }

            return (
                <div className={classes}>{children}</div>
            );
        }
        /* jshint ignore:end */
    }
]);
