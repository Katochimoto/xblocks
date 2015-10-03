var xblocks = require('xblocks');
var React = require('react');

/**
 * The template node xb-menu
 *
 * @class xv.Menu
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes xblocks.mixin.vMenu
 * @mixes React.addons.PureRenderMixin
 */
module.exports = xblocks.view.register('xb-menu', [
    require('mixin/view/commonAttrs'),
    require('mixin/view/menu'),

    {
        displayName: 'xb-menu',

        mixins: [ React.addons.PureRenderMixin ],

        // @ifdef DEBUG
        propTypes: {
            'size': React.PropTypes.string
        },
        // @endif

        getDefaultProps: function () {
            return {
                'size': ''
            };
        },

        afterOpen: function (callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);
