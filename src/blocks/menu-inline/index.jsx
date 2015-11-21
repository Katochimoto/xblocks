var xv = require('context').xv;
var xblocks = require('xblocks');
var React = require('react');

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
    require('mixin/view/commonAttrs'),
    require('mixin/view/menu'),

    {
        displayName: 'xb-menu-inline',

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

        componentDidMount: function () {
            this._updateMaxHeight(this.props.size);
        }
    }
]);

module.exports = xv.MenuInline;
