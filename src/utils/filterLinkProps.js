'use strict';

module.exports = function(props) {
    return xblocks.utils.mapObject(
        xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixLink),
        xblocks.utils.mapPropsPrefixLink
    );
};
