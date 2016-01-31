import './index.styl';
import './index.jsx';
import { xb } from 'context';
import xcore from 'xblocks-core';

import mixinDisabled from 'mixin/element/disabled';
import mixinChecked from 'mixin/element/checked';
import mixinInputValueProps from 'mixin/element/inputValueProps';
import mixinFocus from 'mixin/element/focus';

/**
 * xb-checkbox html element
 *
 * @prop {string} [size=m] size, possible values: s|m
 * @prop {string} [value=on]
 * @prop {string} [name]
 * @prop {string} [form]
 * @prop {string} [for]
 * @prop {boolean} [autofocus=false]
 * @prop {boolean} [disabled=false]
 * @prop {boolean} [checked=false]
 * @prop {boolean} [required=false]
 *
 * @class xb.Checkbox
 * @memberof xb
 * @augments HTMLInputElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
export default xb.Checkbox = xcore.create('xb-checkbox', [
    mixinDisabled,
    mixinChecked,
    mixinInputValueProps,
    mixinFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            defaultValue: {
                get: function () {
                    return 'on';
                }
            }
        }
    }
]);
