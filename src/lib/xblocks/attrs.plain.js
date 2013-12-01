/**
 * @param {Object} [obj]
 * @constructor
 */
function AttrsPlain(obj) {
    if (typeof obj === 'object') {
        for (var name in obj) {
            if (obj.hasOwnProperty(name)) {
                this[name] = obj[name];
            }
        }
    }
}

/**
 *
 * @param {String} name
 * @return {*}
 */
AttrsPlain.prototype.get = function(name) {
    return this[name];
};

/**
 *
 * @param {String} name
 * @param {*} value
 */
AttrsPlain.prototype.set = function(name, value) {
    this[name] = value;
};

/**
 *
 * @param {String} name
 * @return {boolean}
 */
AttrsPlain.prototype.isEmpty = function(name) {
    return !this[name];
};

/**
 * @return {AttrsPlain}
 */
AttrsPlain.prototype.toPlain = function() {
    return this;
};

/**
 * @return {AttrsComplex}
 */
AttrsPlain.prototype.toComplex = function() {
    xblocks.log.time('AttrsPlain->toComplex');

    var obj = new AttrsComplex();

    for (var key in this) {
        if (this.hasOwnProperty(key)) {
            ns(obj, key, this[key]);
        }
    }

    xblocks.log.timeEnd('AttrsPlain->toComplex');
    return obj;
};
