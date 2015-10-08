var xv = require('context').xv;
var xblocks = require('xblocks');
var React = require('react');
var classnames = require('classnames');
var filterProps = require('utils/filterProps');
var isEmpty = require('_/lang/isEmpty');

/**
 * The template node xb-menuitem
 *
 * @class xv.Menuitem
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Menuitem = xblocks.view.register('xb-menuitem', [
    require('mixin/view/commonAttrs'),
    require('utils/exportPropTypes')('xb-ico'),

    {
        displayName: 'xb-menuitem',

        mixins: [ React.addons.PureRenderMixin ],

        // @ifdef DEBUG
        propTypes: {
            'focused':  React.PropTypes.bool,
            'ico':      React.PropTypes.object,
            'label':    React.PropTypes.string.isRequired,
            'selected': React.PropTypes.bool,
            'submenu':  React.PropTypes.bool
        },
        // @endif

        getDefaultProps: function () {
            return {
                'disabled': false,
                'focused':  false,
                'selected': false,
                'submenu':  false
            };
        },

        render: function () {
            var classes = {
                'xb-menuitem': true,
                '_disabled':   this.props.disabled,
                '_focused':    this.props.focused,
                '_selected':   this.props.selected,
                '_submenu':    this.props.submenu
            };

            classes = classnames(classes);

            var children = [
                <span className="_label" key="label">{this.props.label}</span>
            ];

            var icoProps = filterProps(/^xb-ico-/, this.props);

            if (!isEmpty(icoProps) && icoProps.type) {
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
    }
]);

module.exports = xv.Menuitem;
