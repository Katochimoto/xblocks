/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

xblocks.create('xb-menuitem', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);

xblocks.create('xb-menu', [
    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement())
    }
]);
