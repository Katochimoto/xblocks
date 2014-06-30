/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:button.jsx.js */

xblocks.create('xb-button', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLButtonElement.prototype)
    }
]);
