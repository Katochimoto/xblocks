//jscs:disable
/* global xblocks */
/* jshint strict: false */
//jscs:enable

(function() {

    var checkedCache = {};

    /**
     * FIXME don't work cloneNode
     * @memberOf xblocks.utils
     * @name resetLastRadioChecked
     * @props {HTMLElement} element
     * @props {string} name
     */
    xblocks.utils.resetLastRadioChecked = function(element, name) {
        name = String(name);
        var lastCheckedElement = checkedCache[ name ];

        if (lastCheckedElement && lastCheckedElement !== element) {
            lastCheckedElement.checked = false;
        }

        checkedCache[ name ] = element;
    };

}());
