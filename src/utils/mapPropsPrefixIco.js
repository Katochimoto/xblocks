'use strict';

var REG_PROPS_PREFIX_ICO = /^xb-ico-/;

module.exports = function(name, descr) {
    return {
        'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_ICO, ''),
        'descr': descr
    };
};
