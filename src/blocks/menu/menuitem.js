/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menuitem.jsx.js */

xblocks.create('xb-menuseparator', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);

xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,

    {
        prototype: Object.create(HTMLElement.prototype),

        accessors: {
            selected: {
                attribute: {
                    boolean: true
                }
            }
        }
    }
]);
