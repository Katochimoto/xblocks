import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
import PureRenderMixin from 'react-addons-pure-render-mixin';

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

        mixins: [ PureRenderMixin ],

        // @if NODE_ENV='development'
        propTypes: {
            'size': PropTypes.string
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

export default xv.MenuInline;
