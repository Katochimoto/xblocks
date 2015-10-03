/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * The template node xb-menu-inline
 *
 * @class xv.MenuInline
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes xblocks.mixin.vMenu
 * @mixes React.addons.PureRenderMixin
 */
xv.MenuInline = xblocks.view.register('xb-menu-inline', [
    xblocks.mixin.vCommonAttrs,
    xblocks.mixin.vMenu,

    {
        'displayName': 'xb-menu-inline',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size': React.PropTypes.string
        },

        'getDefaultProps': function () {
            return {
                'size': ''
            };
        },

        'componentDidMount': function () {
            this._updateMaxHeight(this.props.size);
        }
    }
]);
