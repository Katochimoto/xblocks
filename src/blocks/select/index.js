import './index.styl';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
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

        events: {
            'click': function () {
                this.menuInstance.open();
            }
        },

        /**
         * @lends xb.Select.prototype
         */
        accessors: {
            /**
             * @prop {xb.Menu} menuInstance Menu instance
             * @readonly
             */
            menuInstance: {
                get: function () {
                    let menu = this[ '_menu' ];

                    if (!menu) {
                        menu = this[ '_menu' ] = createMenu(this);
                    }

                    return menu;
                }
            }
        }
    }
]);

function createMenu(select) {
    const targetClassName = `_select-target-${select.xuid}`;
    const menu = select.ownerDocument.createElement('xb-menu');
    const attrs = _.merge({
        'target': `.${targetClassName}`,
        'selectable': 'selectable'
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

    menu.innerHTML = select.content;

    select.classList.add(targetClassName);

    return select.ownerDocument.body.appendChild(menu);
}
