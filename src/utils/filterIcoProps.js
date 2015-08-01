//jscs:disable
/* global xblocks */
/* jshint strict: false */
//jscs:enable

xblocks.utils.filterIcoProps = function(props) {
    return xblocks.utils.mapObject(
        xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixIco),
        xblocks.utils.mapPropsPrefixIco
    );
};
