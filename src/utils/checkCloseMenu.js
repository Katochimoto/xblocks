import context from 'context';
import wrap from 'event/wrap';
import delegateMatch from 'event/delegateMatch';

var doc = context.document;

var _currentMenu = null;

var _onMousedown = function (event) {
    if (!_currentMenu) {
        _unbind();
        return;
    }

    wrap(event);

    var match = delegateMatch('xb-menu', event.target);

    if (!match || match.firstParentMenu !== _currentMenu) {
        _currentMenu.close();
        _unbind();
    }
};

var _onXbClose = function () {
    _unbind();
};

var _bind = function (menuNode) {
    _unbind();
    _currentMenu = menuNode;
    _currentMenu.addEventListener('xb-close', _onXbClose, false);
    doc.addEventListener('mousedown', _onMousedown, false);
};

var _unbind = function () {
    if (_currentMenu) {
        doc.removeEventListener('mousedown', _onMousedown, false);
        _currentMenu.removeEventListener('xb-close', _onXbClose, false);
        _currentMenu = null;
    }
};

/**
 * @function xblocks.utils.checkCloseMenu
 * @param {HTMLElement} menuNode
 * @returns {boolean}
 */
export default function (menuNode) {
    var firstParentMenu = menuNode.firstParentMenu;

    if (_currentMenu) {
        if (_currentMenu !== firstParentMenu) {
            if (!_currentMenu.close()) {
                menuNode.close();
            }

        } else if (!firstParentMenu.opened) {
            menuNode.close();

        } else {
            return false;
        }
    }

    _bind(firstParentMenu);
    return true;
}
