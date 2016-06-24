import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';
import mixinViewMenu from 'mixin/view/menu';

/**
 * The template node xb-menu
 *
 * @class xv.Menu
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes xblocks.mixin.vMenu
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Menu = view.register('xb-menu', [
    mixinViewCommonAttrs,
    mixinViewMenu('xb-menu'),

    {
        displayName: 'xb-menu',

        mixins: [ PureRenderMixin ],

        propTypes: {
            size: PropTypes.string
        },

        getDefaultProps: function () {
            return {
                size: ''
            };
        },

        afterOpen: function (callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);
