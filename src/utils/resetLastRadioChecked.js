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
        var container = element.props._container;
        if (!container) {
            return;
        }

        name = String(name);
        var lastCheckedContainer = checkedCache[ name ];

        if (lastCheckedContainer && lastCheckedContainer !== container) {
            lastCheckedContainer.checked = false;
        }

        checkedCache[ name ] = container;
    };

}());
