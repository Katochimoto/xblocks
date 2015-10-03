/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * The template node xb-menu
 *
 * @class xv.Menu
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes xblocks.mixin.vMenu
 * @mixes React.addons.PureRenderMixin
 */
xv.Menu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,
    xblocks.mixin.vMenu,

    {
        'displayName': 'xb-menu',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size': React.PropTypes.string
        },

        'getDefaultProps': function () {
            return {
                'size': ''
            };
        },

        'afterOpen': function (callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);
