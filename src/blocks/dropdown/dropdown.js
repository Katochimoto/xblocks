(function(xblocks) {
    'use strict';

    var XBDropDown = xblocks.create('xb-dropdown', {
        _target: null
    });

    XBDropDown.attrs = {
        get: function() {
            return {

            };
        }
    };

    /*
    XBDropDown.on('update', function() {
        this.xblock._target = _getTarget(this, this.xblock.attrs.target);
    });

    XBDropDown.on('inserted', function() {
        this.xblock._target = _getTarget(this, this.xblock.attrs.target);

        if (this.parentNode.nodeName !== 'BODY') {
            var parent = xblocks.getXBParentNode(this);
            parent.xblock.lock(true);
            document.body.appendChild(this.parentNode.removeChild(this));
            parent.xblock.lock(false);
        }
    });

    XBDropDown.on('removed', function() {

    });

    XBDropDown.register();



    function _getTarget(element, query) {
        if (!element.parentNode) {
            return null;
        }

        return query ? element.parentNode.querySelector(query) : element.parentNode;
    }
    */


}(xblocks));
