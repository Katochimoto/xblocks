/* global xblocks, React */
/* jshint strict: false */

xblocks.utils.mapPropsPrefixIco = function(name, descr) {
    return {
        'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_ICO, ''),
        'descr': descr
    };
};
