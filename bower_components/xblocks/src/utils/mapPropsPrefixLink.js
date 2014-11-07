/* global xblocks */
/* jshint strict: false */

xblocks.utils.mapPropsPrefixLink = function(name, descr) {
    return {
        'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_LINK, ''),
        'descr': descr
    };
};
