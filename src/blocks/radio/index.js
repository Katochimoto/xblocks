import './style';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
import mixinElementDisabled from 'mixin/element/disabled';
import mixinElementChecked from 'mixin/element/checked';
import mixinElementInputValueProps from 'mixin/element/inputValueProps';
import mixinFocusComponent from 'mixin/element/focusComponent';

/**
 * xb-radio html element
 *
 * @class xb.Radio
 * @memberof xb
 * @augments HTMLInputElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
export default xb.Radio = create('xb-radio', [
    mixinElementDisabled,
    mixinElementChecked,
    mixinElementInputValueProps,
    mixinFocusComponent,

    {
        prototype: Object.create(HTMLInputElement.prototype),

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
            },

            defaultValue: {
                get: _.constant('on')
            }
        }
    }
]);
