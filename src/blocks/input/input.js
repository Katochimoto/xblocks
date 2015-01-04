/* global xblocks */
/* jshint strict: false */

/*! borschik:include:input.jsx.js */

xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);
