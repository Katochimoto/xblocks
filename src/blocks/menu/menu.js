/* global xblocks */
/* jshint strict: false */

/*! borschik:include:menu.jsx.js */

xblocks.create('xb-menu', [
    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement()),

        events: {
            'close-before': function() {
                Array.prototype.forEach.call(this.querySelectorAll('.xb-menu-target'), _blocksMenuInnerClose);
            }
        }
    }
]);

function _blocksMenuInnerClose(target) {
    if (target.xbPopup) {
        target.xbPopup.close();
    }
}
