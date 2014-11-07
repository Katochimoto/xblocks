/* global xblocks */
/* jshint strict: false */

(function() {
    var checkedCache = {};

    /**
     * FIXME don't work cloneNode
     * @memberOf xblocks.utils
     * @name resetLastRadioChecked
     * @props {object} element
     * @props {string} name
     */
    xblocks.utils.resetLastRadioChecked = function(element, name) {
        if (!element._rootNodeID) {
            return;
        }

        name = String(name);
        var lastCheckedRootNodeId = checkedCache[ name ];

        if (lastCheckedRootNodeId && lastCheckedRootNodeId !== element._rootNodeID) {
            var rootNode = xblocks.react.findContainerForID(lastCheckedRootNodeId);

            if (rootNode) {
                rootNode.checked = false;
            }
        }

        checkedCache[ name ] = element._rootNodeID;
    };

}());
