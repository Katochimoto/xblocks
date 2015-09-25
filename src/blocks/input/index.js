//require('./index.styl');
require('./index.jsx');

var xblocks = require('xblocks');

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
 * @mixes xblocks.mixin.eInputValueState
 * @mixes xblocks.mixin.eFocus
 */
module.exports = xblocks.create('xb-input', [
    require('mixin/element/disabled'),
    require('mixin/element/inputValueState'),
    require('mixin/element/focus'),

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'events': {
            'xb-speech-recognition-start': function(event) {
                console.log(event);
            },

            'xb-speech-recognition-result': function(event) {
                if (event.detail) {
                    var input = this.querySelector('input');

                    if (event.detail.interim) {
                        var start = input.selectionStart;

                        xblocks.dom.replaceTextSelection(
                            input,
                            event.detail.interim,
                            function(callback) {
                                callback(input.value);
                            },
                            function(value, callback) {
                                input.value = value;
                                callback(function() {
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
                console.log(event.detail, this);
            },

            'xb-speech-recognition-end': function(event) {
                if (event.detail) {
                    var input = this.querySelector('input');
                    this.value = event.detail.final;
                    input.value = event.detail.final;
                    var len = this.value.length;
                    input.setSelectionRange(len, len);
                    input.scrollLeft = input.scrollWidth;
                }
                console.log(event.detail);
            },

            'xb-speech-recognition-error': function(event) {
                console.log(event);
            }
        }
    }
]);
