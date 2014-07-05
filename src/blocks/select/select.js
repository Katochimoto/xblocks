/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:select.jsx.js */

xblocks.create('xb-select', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLSelectElement.prototype)
    }
]);
