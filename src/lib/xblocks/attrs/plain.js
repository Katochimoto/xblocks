/**
 * @param {Object} [obj]
 * @constructor
 */
xblocks.attrs.AttrsPlain = function(obj) {
    if (_.isPlainObject(obj)) {
        _.forOwn(obj, function(value, key) {
            this[key] = value;
        }, this);
    }
};

xblocks.attrs.AttrsPlain.prototype = {
    /**
     * @param {String} name
     * @return {*}
     */
    get: function(name) {
        return this[name];
    },

    /**
     * @param {String} name
     * @param {*} value
     */
    set: function(name, value) {
        this[name] = value;
    },

    /**
     * @param {String} name
     * @return {boolean}
     */
    isEmpty: function(name) {
        return !this[name];
    },

    toObject: function() {
        return JSON.parse(JSON.stringify(this));
    },

    /**
     * @return {xblocks.attrs.AttrsPlain}
     */
    toPlain: function() {
        return this;
    },

    /**
     * @return {xblocks.attrs.AttrsComplex}
     */
    toComplex: function() {
        xblocks.log.time('AttrsPlain->toComplex');

        var complex = xblocks.attrs.complex();
        _.forOwn(this, this._toComplex, complex);

        xblocks.log.timeEnd('AttrsPlain->toComplex');
        return complex;
    },

    /**
     * @this {xblocks.attrs.AttrsComplex}
     * @param value
     * @param key
     * @private
     */
    _toComplex: function(value, key) {
        xblocks.attrs._ns(this, key, value);
    }
};
