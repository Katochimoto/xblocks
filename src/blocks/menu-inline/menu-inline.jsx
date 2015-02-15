/** @jsx React.DOM */
/* global xblocks, React, XBMenuViewCommon, xv */
/* jshint strict: false */

/**
 * @class xv.MenuInline
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.MenuInline = xblocks.view.register('xb-menu-inline', [
    xblocks.mixin.vCommonAttrs,
    XBMenuViewCommon,

    {
        'displayName': 'xb-menu-inline',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size': React.PropTypes.string
        },

        'getDefaultProps': function() {
            return {
                'size': ''
            };
        },

        'componentDidMount': function() {
            this._updateMaxHeight(this.props.size);
        }
    }
]);
