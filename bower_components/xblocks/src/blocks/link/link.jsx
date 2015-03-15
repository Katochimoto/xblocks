/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * The template node xb-link
 *
 * @class xv.Link
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Link = xblocks.view.register('xb-link', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-link',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'disabled': React.PropTypes.bool,
            'href':     React.PropTypes.string,
            'name':     React.PropTypes.string,
            'target':   React.PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
            'theme':    React.PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'input' ])
        },

        'getDefaultProps': function() {
            return {
                'disabled': false,
                'theme':    'normal',
                'tabindex': '1'
            };
        },

        /* jshint ignore:start */
        'render': function() {
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

            classes = classNames(classes);

            var content = this.props.value || this.props.children;

            return (
                <a name={this.props.name}
                    href={this.props.href}
                    target={this.props.target}
                    tabIndex={tabIndex}
                    className={classes}
                    data-xb-content={this.props._uid}>{content}</a>
            );
        }
        /* jshint ignore:end */
    }
]);
