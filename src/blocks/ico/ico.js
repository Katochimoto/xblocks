/* global xblocks, xb */
/* jshint strict: false */

/*! borschik:include:ico.jsx.js */

/**
 * @class xb.Ico
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 */
xb.Ico = xblocks.create('xb-ico', [
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
