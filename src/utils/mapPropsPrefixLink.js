'use strict';

var REG_PROPS_PREFIX_LINK = /^xb-link-/;

module.exports = function(name, descr) {
    return {
        'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_LINK, ''),
        'descr': descr
    };
};
