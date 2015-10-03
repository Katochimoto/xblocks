// require('./index.styl');
require('./index.jsx');

var xblocks = require('xblocks');

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
module.exports = xblocks.create('xb-checkbox', [
    require('mixin/element/disabled'),
    require('mixin/element/checked'),
    require('mixin/element/inputValueProps'),
    require('mixin/element/focus'),

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'accessors': {
            'defaultValue': {
                'get': function () {
                    return 'on';
                }
            }
        }
    }
]);
