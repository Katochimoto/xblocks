import './index.styl';
import './index.jsx';

import { xb } from 'context';
import xblocks from 'xblocks';
import mixinElementDisabled from 'mixin/element/disabled';
import mixinElementChecked from 'mixin/element/checked';
import mixinElementInputValueProps from 'mixin/element/inputValueProps';
import mixinElementFocus from 'mixin/element/focus';

/**
 * xb-radio html element
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
 * @class xb.Radio
 * @memberof xb
 * @augments HTMLInputElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
xb.Radio = xblocks.create('xb-radio', [
    mixinElementDisabled,
    mixinElementChecked,
    mixinElementInputValueProps,
    mixinElementFocus,

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

export default xb.Radio;
