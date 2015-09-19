'use strict';

var REG_PROPS_PREFIX_LINK = /^xb-link-/;

module.exports = function(name) {
    return xblocks.utils.REG_PROPS_PREFIX_LINK.test(name);
};
