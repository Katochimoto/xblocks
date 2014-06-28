/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:button.jsx.js */

xblocks.create('xb-button', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eFocusFirstChild,

    {
        prototype: Object.create(HTMLButtonElement.prototype)
    }
]);
