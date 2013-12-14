/**
 *
 * @param {HTMLElement} controller
 * @constructor
 */
function Autosize(controller) {
    /**
     *
     * @type {HTMLElement}
     * @private
     */
    this._controller = controller;

    /**
     *
     * @type {Boolean}
     * @private
     */
    this._multiline = (this._controller.tagName.toLowerCase() === 'textarea');

    this.update();
}

/**
 *
 * @param {HTMLElement} controller
 */
Autosize.prototype.setController = function(controller) {
    this._controller = controller;
    this._multiline = (this._controller.tagName.toLowerCase() === 'textarea');
    this.update();
};

/**
 * @method update
 * @param {Number} value
 */
Autosize.prototype.update = function(value) {
    if (this._multiline) {
        this._resetHeight(value);
    } else {
        this._resetWidth(value);
    }
};

/**
 * @method _resetWidth
 * @param {Number} value
 * @private
 */
Autosize.prototype._resetWidth = function(value) {
    var style = this._controller.style;
    if (typeof value === 'number') {
        style.width = value + 'px';
        return;
    }

    style.width = '0px';
    style.width = this._controller.scrollWidth + 'px';
};

/**
 * @method _resetHeight
 * @param {Number} value
 * @private
 */
Autosize.prototype._resetHeight = function(value) {
    var style = this._controller.style;
    if (typeof value === 'number') {
        style.height = value + 'px';
        return;
    }

    style.height = '0px';
    style.height = this._controller.scrollHeight + 'px';
};