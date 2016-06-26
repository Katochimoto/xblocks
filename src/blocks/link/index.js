import './index.styl';
import './index.jsx';
import { xb } from 'context';
import { create } from 'xblocks-core';
import mixinDisabled from 'mixin/element/disabled';
import mixinFocus from 'mixin/element/focus';

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
    mixinFocus,

    {
        prototype: Object.create(HTMLAnchorElement.prototype),

        /**
         * @lends xb.Link.prototype
         */
        accessors: {
            componentStyle: {
                get: function () {
                    return {
                        [ this.xtagName ]: require('!!raw!postcss!stylus!./inline.styl')
                    };
                }
            },

            isShadowSupported: {
                get: function () {
                    return true;
                }
            }
        }
    }
]);
