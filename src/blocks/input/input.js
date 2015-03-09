/* global xblocks, xb */
/* jshint strict: false */

/*! borschik:include:input.jsx.js */

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
 * @augments HTMLElement
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eInputValueState
 * @mixes xblocks.mixin.eFocus
 */
xb.Input = xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLElement.prototype)
    }
]);
