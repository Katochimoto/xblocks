/* global xblocks */
/* jshint strict: false */

/*! borschik:include:ico.jsx.js */

xblocks.create('xb-ico', [
    xblocks.mixin.eDisabled,

    {
        'accessors': {
            'active': {
                'attribute': {
                    'boolean': true
                }
            }
        }
    }
]);
