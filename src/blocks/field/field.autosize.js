/**
 *
 * @param {HTMLElement} controller
 * @constructor
 */
function Autosize(controller) {
    /**
     *
     * @type {HTMLElement}
     */
    this.controller = controller;
    /**
     *
     * @type {Boolean}
     */
    this.multiline = controller.tagName.toLowerCase() === 'textarea';
    this.update();
}

/**
 * @method update
 * @param {Number} value
 */
Autosize.prototype.update = function(value) {
    if (this.multiline) {
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
    var style = this.controller.style;
    if (typeof value === 'number') {
        style.width = value + 'px';
        return;
    }

    style.width = '0px';
    style.width = this.controller.scrollWidth + 'px';
};

/**
 * @method _resetHeight
 * @param {Number} value
 * @private
 */
Autosize.prototype._resetHeight = function(value) {
    var style = this.controller.style;
    if (typeof value === 'number') {
        style.height = value + 'px';
        return;
    }

    style.height = '0px';
    style.height = this.controller.scrollHeight + 'px';
};