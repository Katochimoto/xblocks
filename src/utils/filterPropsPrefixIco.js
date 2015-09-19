'use strict';

var REG_PROPS_PREFIX_ICO = /^xb-ico-/;

module.exports = function(name) {
    return xblocks.utils.REG_PROPS_PREFIX_ICO.test(name);
};
