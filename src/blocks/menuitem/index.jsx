import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';
import exportPropTypes from 'utils/exportPropTypes';
import filterProps from 'utils/filterProps';
import isEmpty from 'lodash/isEmpty';

/**
 * The template node xb-menuitem
 *
 * @class xv.Menuitem
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Menuitem = view.register('xb-menuitem', [
    mixinViewCommonAttrs,
    exportPropTypes('xb-ico'),

    {
        displayName: 'xb-menuitem',

        mixins: [ PureRenderMixin ],

        propTypes: {
            'focused':  PropTypes.bool,
            'ico':      PropTypes.object,
            'label':    PropTypes.string.isRequired,
            'selected': PropTypes.bool,
            'submenu':  PropTypes.bool
        },

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
                <span className="_label" key="label">
                    {this.props.label}
                </span>
            ];

            var icoProps = filterProps(/^xb-ico-/, this.props);

            if (!isEmpty(icoProps) && icoProps.type) {
                icoProps.key = 'ico';

                if (!icoProps.float || icoProps.float === 'left') {
                    children.unshift(
                        <xb-ico {...icoProps} />
                    );

                } else if (icoProps.float === 'right') {
                    children.push(
                        <xb-ico {...icoProps} />
                    );
                }
            }

            return (
                <div className={classes}>
                    {children}
                </div>
            );
        }
    }
]);
