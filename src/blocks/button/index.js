import './index.styl';
import './index.jsx';
import { xb } from 'context';
import { create } from 'xblocks-core';

import mixinDisabled from 'mixin/element/disabled';
import mixinChecked from 'mixin/element/checked';
import mixinInputValueProps from 'mixin/element/inputValueProps';
import mixinFocus from 'mixin/element/focus';

/**
 * xb-button html element
 *
 * @prop {string} [size=m] size, possible values: s|m|l|xl
 * @prop {string} [theme=normal] normal|action|dark|flying|pseudo-inverted|pseudo|promo
 * @prop {string} [type=button] label|inline|link|file|button|submit|checkbox|radio
 * @prop {string} [target] _blank|_self|_parent|_top
 * @prop {string} [value]
 * @prop {string} [href]
 * @prop {string} [name]
 * @prop {string} [form]
 * @prop {string} [for]
 * @prop {boolean} [multiple=false]
 * @prop {boolean} [autofocus=false]
 * @prop {boolean} [disabled=false]
 * @prop {boolean} [checked=false]
 * @prop {boolean} [required=false]
 *
 * @example
 * &#60;xb-button type="checkbox" name="checkbox" value="1">checkbox&#60;/xb-button>
 * <xb-button type="checkbox" name="checkbox" value="1">checkbox</xb-button>
 *
 * @example
 * &#60;xb-button type="radio" name="radio" value="1">radio 1&#60;/xb-button>
 * <xb-button type="radio" name="radio" value="1">radio 1</xb-button> <xb-button type="radio" name="radio" value="2">radio 2</xb-button>
 *
 * @augments HTMLInputElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
export default xb.Button = create('xb-button', [
    mixinDisabled,
    mixinChecked,
    mixinInputValueProps,
    mixinFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            style: {
                get: function () {
                    return {
                        [ this.xtagName ]: require('!!raw!postcss!stylus!./inline.styl')
                    };
                }
            },

            isShadowSupported: {
                get: function () {
                    return false;
                }
            },

            defaultValue: {
                get: function () {
                    var type = this.attrs.type;
                    if (type === 'checkbox' || type === 'radio') {
                        return 'on';
                    }

                    return '';
                }
            }
        }
    }
]);
