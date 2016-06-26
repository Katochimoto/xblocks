import './index.styl';
import './index.jsx';

import _ from 'lodash';
import { xb } from 'context';
import { create } from 'xblocks-core';
import replaceTextSelection from 'dom/replaceTextSelection';
import mixinDisabled from 'mixin/element/disabled';
import mixinFocus from 'mixin/element/focus';
import ConstantInput from 'constants/input';

/**
 * xb-input html element
 *
 * @prop {string} [name]
 * @prop {string} [type=text] text|number|date|datetime|email|month|range|search|tel|time|url|week|color
 * @prop {string} [size=m] s|m|l|xl
 * @prop {string} [autocomplete] on|off
 * @prop {string} [rows=4]
 * @prop {string} [cols]
 * @prop {string} [placeholder]
 * @prop {string} [value]
 * @prop {string} [prefix]
 * @prop {string} [postfix]
 * @prop {string} [tabindex]
 * @prop {boolean} [disabled=false]
 * @prop {boolean} [autosize=false]
 * @prop {boolean} [multiline=false]
 * @prop {boolean} [required=false]
 * @prop {boolean} [readonly=false]
 * @prop {boolean} [reset=false]
 * @prop {boolean} [autofocus=false]
 * @prop {boolean} [ghost=false]
 *
 * @class xb.Input
 * @memberof xb
 * @augments HTMLInputElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eFocus
 */
export default xb.Input = create('xb-input', [
    mixinDisabled,
    mixinFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        events: {
            'xb-speech-recognition-start': function () {
                // console.log(event);
            },

            'xb-speech-recognition-result': function (event) {
                if (event.detail) {
                    var input = this.querySelector('input');

                    if (event.detail.interim) {
                        var start = input.selectionStart;

                        replaceTextSelection(
                            input,
                            event.detail.interim,
                            function (callback) {
                                callback(input.value);
                            },
                            function (value, callback) {
                                input.value = value;
                                callback(function () {
                                    input.selectionStart = start;
                                    input.scrollLeft = input.scrollWidth;
                                });
                            }
                        );

                    } else if (event.detail.final) {
                        this.value = event.detail.final;
                        input.value = event.detail.final;
                        var len = this.value.length;
                        input.setSelectionRange(len, len);
                        input.scrollLeft = input.scrollWidth;
                    }
                }
                // console.log(event.detail, this);
            },

            'xb-speech-recognition-end': function (event) {
                if (event.detail) {
                    var input = this.querySelector('input');
                    this.value = event.detail.final;
                    input.value = event.detail.final;
                    var len = this.value.length;
                    input.setSelectionRange(len, len);
                    input.scrollLeft = input.scrollWidth;
                }
                // console.log(event.detail);
            },

            'xb-speech-recognition-error': function () {
                // console.log(event);
            }
        },

        accessors: {

            /**
             * @prop {string} value
             */
            value: {
                attribute: {
                    name: 'value'
                },

                get: function () {
                    return String(_.get(this, ConstantInput.VALUE, this.getAttribute('value') || this.defaultValue || ''));
                },

                set: function (value) {
                    const component = this.getComponent();

                    if (component) {
                        component.setState({ value: String(value) });
                    }
                }
            },

            /**
             * @prop {string} defaultValue
             */
            defaultValue: {
                get: function () {
                    return '';
                }
            }
        }
    }
]);
