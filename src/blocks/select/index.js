import './style';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create, event as xevent } from 'xblocks-core';
import ConstantMenu from 'constants/menu';
import ConstantSelect from 'constants/select';
import initialDefinitionSelected from 'utils/initialDefinitionSelected';
import removeChild from 'dom/removeChild';
import mixinElementDisabled from 'mixin/element/disabled';
import mixinFocusComponent from 'mixin/element/focusComponent';

const MENU_ATTRS = {
    'attachment': 'top left',
    'target-attachment': 'bottom left',
    'target-modifier': 'initial',
    'constraints': encodeURIComponent(JSON.stringify([
        {
            'to': 'window',
            'attachment': 'element together'
        }
    ]))
};

/**
 * xb-select html element
 *
 * @class xb.Select
 * @memberof xb
 * @augments HTMLElement
 */
export default xb.Select = create('xb-select', [
    mixinElementDisabled,
    mixinFocusComponent,

    {
        prototype: Object.create(HTMLElement.prototype),

        lifecycle: {
            created: function () {
                this[ ConstantSelect.SELECTED ] = initialDefinitionSelected(this, true);
            }
        },

        events: {
            'xb-destroy': function () {
                this._menuRemove();
                this[ ConstantSelect.SELECTED ] = {};
            },

            'xb-update': function () {
                this._menuRemove();
            },

            'click': function () {
                this.selectMenuInstance.open();
            },

            'keydown:keypass(32)': function () {
                this.selectMenuInstance.open();
            },

            'change': function () {
                this.getComponent().setState({ selected: this.selectedObjects });
            }
        },

        /**
         * @lends xb.Select.prototype
         */
        accessors: {
            componentStyle: {
                get: function () {
                    return {
                        [ this.xtagName ]: require('!!raw!postcss!stylus!./style/inline.styl')
                    };
                }
            },

            /**
             * @prop {xb.Menu} selectMenuInstance Menu instance
             * @readonly
             */
            selectMenuInstance: {
                get: function () {
                    let menu = this[ ConstantSelect.MENU ];

                    if (!menu) {
                        menu = this[ ConstantSelect.MENU ] = this._menuCreate();
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
                    // если меню ещё не открывалось
                    // вызывать selectMenuInstance не нужно, чтобы не создавать меню без необходимости
                    if (!this[ ConstantSelect.MENU ]) {
                        return _.map(this[ ConstantSelect.SELECTED ], 'value');
                    }

                    return this.selectMenuInstance.value;
                }
            },

            /**
             * @prop {HTMLElement[]} selectedItems the selected item
             * @readonly
             */
            selectedItems: {
                get: function () {
                    // если меню ещё не открывалось
                    // вызывать selectMenuInstance не нужно, чтобы не создавать меню без необходимости
                    if (!this[ ConstantSelect.MENU ]) {
                        return _.values(this[ ConstantSelect.SELECTED ]);
                    }

                    return this.selectMenuInstance.selectedItems;
                }
            },

            /**
             * @prop {Object[]} selectedObjects the selected item
             * @readonly
             */
            selectedObjects: {
                get: function () {
                    // если меню ещё не открывалось
                    // вызывать selectMenuInstance не нужно, чтобы не создавать меню без необходимости
                    if (!this[ ConstantSelect.MENU ]) {
                        return _.map(this[ ConstantSelect.SELECTED ], item => {
                            return {
                                label: item.getAttribute('label'),
                                value: item.value
                            };
                        });
                    }

                    return this.selectMenuInstance.selectedObjects;
                }
            }
        },

        methods: {
            /**
             * @private
             */
            _menuRemove: function () {
                const menu = this[ ConstantSelect.MENU ];
                if (!menu) {
                    return;
                }

                this[ ConstantSelect.MENU ] = undefined;
                menu.close();
                removeChild(menu);
            },

            /**
             * @returns {xb.Menu}
             * @private
             */
            _menuCreate: function () {
                const targetClassName = `_select-target-${this.xuid}`;
                const menu = this.ownerDocument.createElement('xb-menu');
                const attrs = _.merge({ target: `.${targetClassName}` }, MENU_ATTRS);
                const size = Number(this.getAttribute('size') || 0);

                if (size) {
                    attrs.size = size;
                }

                for (let attrName in attrs) {
                    menu.setAttribute(attrName, attrs[ attrName ]);
                }

                menu[ ConstantMenu.SELECTED ] = this[ ConstantSelect.SELECTED ];

                menu.selectable = true;
                menu.alwaysselected = true;
                menu.multiple = this.multiple;
                menu.autoclose = !this.multiple;
                menu.innerHTML = this.content;
                menu.addEventListener('xb-destroy', ::this._menuRemove, false);

                xevent.forwardingEvents('change', menu, this);

                this.classList.add(targetClassName);

                return this.ownerDocument.body.appendChild(menu);
            }
        }
    }
]);
