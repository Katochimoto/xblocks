/* global xblocks */
/* jshint strict: false */

xblocks.utils.filterIcoProps = function(props) {
    return xblocks.utils.mapObject(
        xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixIco),
        xblocks.utils.mapPropsPrefixIco
    );
};
