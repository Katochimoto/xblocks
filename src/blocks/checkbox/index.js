import './style';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
import mixinDisabled from 'mixin/element/disabled';
import mixinChecked from 'mixin/element/checked';
import mixinInputValueProps from 'mixin/element/inputValueProps';
import mixinFocusComponent from 'mixin/element/focusComponent';

/**
 * xb-checkbox html element
 *
 * @class xb.Checkbox
 * @memberof xb
 * @augments HTMLInputElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
export default xb.Checkbox = create('xb-checkbox', [
    mixinDisabled,
    mixinChecked,
    mixinInputValueProps,
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
                get: _.stubFalse
            },

            defaultValue: {
                get: _.constant('on')
            }
        }
    }
]);
