/* global xblocks, React */
/* jshint strict: false */

(function() {
    var checkedCache = {};

    /**
     * FIXME don't work cloneNode
     * @props {object} element
     * @props {string} element._rootNodeID
     * @props {string} name
     */
    xblocks.utils.resetLastRadioChecked = function(element, name) {
        if (!element._rootNodeID) {
            return;
        }

        name = String(name);
        var lastCheckedRootNodeId = checkedCache[name];

        if (lastCheckedRootNodeId && lastCheckedRootNodeId !== element._rootNodeID) {
            var rootNode = React.__internals.Mount.findReactContainerForID(lastCheckedRootNodeId);

            if (rootNode) {
                rootNode.checked = false;
            }
        }

        checkedCache[name] = element._rootNodeID;
    };

}());
