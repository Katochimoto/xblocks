//jscs:disable
/* global xblocks */
/* jshint strict: false */
//jscs:enable

xblocks.utils.filterPropsPrefixIco = function(name) {
    return xblocks.utils.REG_PROPS_PREFIX_ICO.test(name);
};
