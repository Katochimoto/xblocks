(function(xblocks) {

    var CACHE = {};

    xblocks.view = {};

    xblocks.view.register = function(blockName, component) {
        CACHE[blockName] = component;
    };

    xblocks.view.get = function(blockName) {
        return CACHE[blockName];
    };

}(xblocks));