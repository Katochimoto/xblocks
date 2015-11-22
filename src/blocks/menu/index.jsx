import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
import PureRenderMixin from 'react-addons-pure-render-mixin';

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
    require('mixin/view/commonAttrs'),
    require('mixin/view/menu'),

    {
        displayName: 'xb-menu',

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

        afterOpen: function (callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);

export default xv.Menu;
