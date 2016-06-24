import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
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
export default xv.MenuInline = view.register('xb-menu-inline', [
    mixinViewCommonAttrs,
    mixinViewMenu('xb-menu-inline'),

    {
        displayName: 'xb-menu-inline',

        mixins: [ PureRenderMixin ],

        propTypes: {
            size: PropTypes.string
        },

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
