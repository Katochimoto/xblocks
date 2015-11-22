import context from 'context';
import delegate from 'event/delegate';

context.document.addEventListener('contextmenu', delegate('[contextmenu]', function (event) {
    var element = event.delegateElement;
    var doc = element.ownerDocument;
    var menuId = element.getAttribute('contextmenu');
    var menuElement = menuId && doc.getElementById(menuId);

    if (!menuElement || menuElement.xtagName !== 'xb-menu') {
        return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    var targetElementId = 'xb-contextmenu-target';
    var targetElement = doc.getElementById(targetElementId);

    if (targetElement) {
        if (targetElement._xbpopup) {
            targetElement._xbpopup.close();
        }

    } else {
        targetElement = doc.createElement('div');
        targetElement.id = targetElementId;
        targetElement.style.position = 'absolute';
        targetElement.style.visibility = 'hidden';
        doc.body.appendChild(targetElement);
    }

    targetElement.style.top = event.pageY + 'px';
    targetElement.style.left = event.pageX + 'px';

    menuElement.open({
        'target': targetElement,
        'attachment': 'top left',
        'targetAttachment': 'bottom left',
        'targetModifier': undefined,
        'optimizations': {
            'moveElement': false
        },
        'constraints': [
            {
                'to': 'scrollParent',
                'attachment': 'element'
            },
            {
                'to': 'window',
                'attachment': 'element'
            }
        ]
    });

}), false);
