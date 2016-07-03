import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import classnames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-link
 *
 * @class xv.Link
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Link = view.register('xb-link', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-link',

        mixins: [ PureRenderMixin ],

        propTypes: {
            'href': PropTypes.string,
            'name': PropTypes.string,
            'rel': PropTypes.string,
            'target': PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]).isRequired,
            'theme': PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'empty' ]).isRequired
        },

        getDefaultProps: function () {
            return {
                'data-xb-tabindex': '0',
                'disabled': false,
                'rel': 'noopener noreferrer',
                'target': '_self',
                'theme': 'normal'
            };
        },

        render: function () {
            const classes = classnames({
                'xb-link': true,
                '_disabled': this.props.disabled,
                [ `_theme-${this.props.theme}` ]: true
            });

            return (
                <a name={this.props.name}
                    href={this.props.href}
                    target={this.props.target}
                    tabIndex={this.getTabIndex()}
                    className={classes}
                    rel={this.props.rel}>

                    {this.context.content()}
                </a>
            );
        }
    }
]);
