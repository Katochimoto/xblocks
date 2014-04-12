(function(xblocks, React) {

    xblocks.view = {};

    xblocks.view.register = function(blockName, component) {
        React.DOM[blockName] = component;
    };

    xblocks.view.get = function(blockName) {
        return React.DOM[blockName];
    };

}(xblocks, React));