import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';
import mixinViewMenu from 'mixin/view/menu';

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
    mixinViewCommonAttrs,
    mixinViewMenu,

    {
        displayName: 'xb-menu-inline',

        mixins: [ PureRenderMixin ],

        // @if NODE_ENV='development'
        propTypes: {
            size: PropTypes.string
        },
        // @endif

        getDefaultProps: function () {
            return {
                size: ''
            };
        },

        componentDidMount: function () {
            this._updateMaxHeight(this.props.size);
        }
    }
]);

export default xv.MenuInline;
