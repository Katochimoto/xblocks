/* global __doc */

__doc.addEventListener('contextmenu', xblocks.event.delegate('[contextmenu]', function(event) {
    var element = event.delegateElement;
    var doc = element.ownerDocument;
    var menuId = element.getAttribute('contextmenu');
    var menuElement = menuId && doc.getElementById(menuId);

    if (menuElement && menuElement.xtagName === 'xb-menu' && menuElement.attrs.type === 'context') {
        event.preventDefault();

        var targetElement = doc.createElement('div');
        targetElement.style.position = 'absolute';
        targetElement.style.visibility = 'hidden';
        targetElement.style.top = event.y + 'px';
        targetElement.style.left = event.x + 'px';

        doc.body.appendChild(targetElement);

        menuElement.addEventListener('xb-close', function _onClose() {
            menuElement.removeEventListener('xb-close', _onClose, false);
            targetElement.parentNode.removeChild(targetElement);
        }, false);

        menuElement.open({
            'target': targetElement,
            'attachment': 'top left',
            'targetAttachment': 'bottom left',
            'constraints': [{
                'to': 'scrollParent',
                'attachment': 'together'
            }, {
                'to': 'window',
                'attachment': 'together'
            }]
        });
    }

}), false);
