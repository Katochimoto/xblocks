var xv = require('context').xv;
var xblocks = require('xblocks');
var React = require('react');
var classnames = require('classnames');

/**
 * The template node xb-link
 *
 * @class xv.Link
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Link = xblocks.view.register('xb-link', [
    require('mixin/view/commonAttrs'),

    {
        displayName: 'xb-link',

        mixins: [ React.addons.PureRenderMixin ],

        // @if NODE_ENV='development'
        propTypes: {
            'href':     React.PropTypes.string,
            'name':     React.PropTypes.string,
            'target':   React.PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
            'theme':    React.PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'empty' ])
        },
        // @endif

        getDefaultProps: function () {
            return {
                'disabled': false,
                'tabindex': '1',
                'target':   '_self',
                'theme':    'normal'
            };
        },

        render: function () {
            var classes = {
                'xb-link':   true,
                '_disabled': this.props.disabled
            };

            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            classes = classnames(classes);

            var content = this.props.value || this.props.children;

            return (
                <a name={this.props.name}
                    href={this.props.href}
                    target={this.props.target}
                    tabIndex={tabIndex}
                    className={classes}
                    data-xb-content={this.props._uid}>

                    {content}
                </a>
            );
        }
    }
]);

module.exports = xv.Link;
