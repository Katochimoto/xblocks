/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
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
            'type': React.PropTypes.oneOf([ 'context', 'list' ]),
            'size': React.PropTypes.string
        },

        'getDefaultProps': function() {
            return {
                'type': 'list',
                'size': ''
            };
        },

        'afterOpen': function(callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);
