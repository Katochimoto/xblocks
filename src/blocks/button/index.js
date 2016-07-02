import './style';
import './index.jsx';
import { xb } from 'context';
import { create } from 'xblocks-core';

import mixinDisabled from 'mixin/element/disabled';
import mixinChecked from 'mixin/element/checked';
import mixinInputValueProps from 'mixin/element/inputValueProps';
import mixinFocusComponent from 'mixin/element/focusComponent';

/**
 * xb-button html element
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
    mixinFocusComponent,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            componentStyle: {
                get: function () {
                    const type = this.attrs.type;
                    const styles = {
                        [ this.xtagName ]: require('!!raw!postcss!stylus!./style/inline.styl')
                    };

                    switch (type) {
                    case 'file':
                    case 'label':
                        styles[ `${this.xtagName}_${type}` ] = require(`!!raw!postcss!stylus!./style/_${type}.styl`);
                        break;
                    }

                    return styles;
                }
            },

            isShadowSupported: {
                get: function () {
                    return false;
                }
            },

            defaultValue: {
                get: function () {
                    const type = this.attrs.type;

                    switch (type) {
                    case 'checkbox':
                    case 'radio':
                        return 'on';
                    }

                    return '';
                }
            }
        }
    }
]);
