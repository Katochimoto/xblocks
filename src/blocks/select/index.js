import './index.styl';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create, event as xevent } from 'xblocks-core';
import ConstantMenu from 'constants/menu';
import ConstantSelect from 'constants/select';
import initialDefinitionSelected from 'utils/initialDefinitionSelected';
import mixinElementDisabled from 'mixin/element/disabled';
import mixinElementFocus from 'mixin/element/focus';

/**
 * xb-select html element
 *
 * @class xb.Select
 * @memberof xb
 * @augments HTMLElement
 */
export default xb.Select = create('xb-select', [
    mixinElementDisabled,
    mixinElementFocus,

    {
        prototype: Object.create(HTMLElement.prototype),

        lifecycle: {
            created: function () {
                this[ ConstantSelect.SELECTED ] = initialDefinitionSelected(this);
            }
        },

        events: {
            'click': function () {
                this.selectMenuInstance.open();
            }
        },

        /**
         * @lends xb.Select.prototype
         */
        accessors: {
            /**
             * @prop {xb.Menu} selectMenuInstance Menu instance
             * @readonly
             */
            selectMenuInstance: {
                get: function () {
                    let menu = this[ ConstantSelect.MENU ];

                    if (!menu) {
                        menu = this[ ConstantSelect.MENU ] = createMenu(this);
                    }

                    return menu;
                }
            },

            multiple: {
                attribute: {
                    boolean: true
                }
            },

            /**
             * @prop {string[]} value the values of the selected item
             * @readonly
             */
            value: {
                get: function () {
                    return this.selectMenuInstance.value;
                }
            }
        }
    }
]);

function createMenu(select) {
    const targetClassName = `_select-target-${select.xuid}`;
    const menu = select.ownerDocument.createElement('xb-menu');
    const attrs = _.merge({
        'target': `.${targetClassName}`
    }, {
        'attachment': 'top left',
        'target-attachment': 'bottom left',
        'target-modifier': 'initial',
        'constraints': encodeURIComponent(JSON.stringify([
            {
                'to': 'window',
                'attachment': 'element together'
            }
        ]))
    });

    for (let attrName in attrs) {
        menu.setAttribute(attrName, attrs[ attrName ]);
    }

    menu[ ConstantMenu.SELECTED ] = select[ ConstantSelect.SELECTED ];

    menu.selectable = true;
    menu.multiple = select.multiple;
    menu.innerHTML = select.content;

    xevent.forwardingEvents('change', menu, select);

    select.classList.add(targetClassName);

    return select.ownerDocument.body.appendChild(menu);
}
