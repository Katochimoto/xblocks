var _currentMenu = null;

var _onMousedown = function (event) {
    if (!_currentMenu) {
        _unbind();
        return;
    }

    xblocks.event.wrap(event);

    var match = xblocks.event.delegateMatch('xb-menu', event.target);

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
    __doc.addEventListener('mousedown', _onMousedown, false);
};

var _unbind = function () {
    if (_currentMenu) {
        __doc.removeEventListener('mousedown', _onMousedown, false);
        _currentMenu.removeEventListener('xb-close', _onXbClose, false);
        _currentMenu = null;
    }
};

/**
 * @function xblocks.utils.checkCloseMenu
 * @param   {[type]} menuNode [description]
 * @returns {[type]}          [description]
 */
module.exports = function (menuNode) {
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
};
