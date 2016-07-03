import './style';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
import mixinDisabled from 'mixin/element/disabled';
import mixinFocusComponent from 'mixin/element/focusComponent';

/**
 * xb-link html element
 *
 * @class xb.Link
 * @memberof xb
 * @augments HTMLAnchorElement
 * @mixes xblocks.mixin.eDisabled
 */
export default xb.Link = create('xb-link', [
    mixinDisabled,
    mixinFocusComponent,

    {
        prototype: Object.create(HTMLAnchorElement.prototype),

        /**
         * @lends xb.Link.prototype
         */
        accessors: {
            componentStyle: {
                get: function () {
                    return {
                        [ this.xtagName ]: require('!!raw!postcss!stylus!./style/inline.styl')
                    };
                }
            },

            isShadowSupported: {
                get: _.stubTrue
            }
        }
    }
]);
