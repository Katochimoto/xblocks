/**
 * @param {Object} [obj]
 * @constructor
 */
xblocks.attrs.AttrsComplex = function(obj) {
    xblocks.attrs.AttrsPlain.apply(this, arguments);
};

xblocks.attrs.AttrsComplex.prototype = _.create(xblocks.attrs.AttrsPlain.prototype, {
    'constructor': xblocks.attrs.AttrsComplex,

    /**
     * @returns {*}
     */
    getValue: function() {
        return this[xblocks.attrs.ATTR_COMPLEX_VALUE];
    },

    /**
     * @param {*} value
     */
    setValue: function(value) {
        this[xblocks.attrs.ATTR_COMPLEX_VALUE] = value;
    },

    /**
     * @param {String} name
     * @return {xblocks.attrs.AttrsComplex|undefined}
     */
    get: function(name) {
        return xblocks.attrs._fns(this, name);
    },

    /**
     * @param {String} name
     * @param {*} value
     */
    set: function(name, value) {
        xblocks.attrs._ns(this, name, value);
    },

    /**
     * @param {String} name
     * @return {Boolean}
     */
    isEmpty: function(name) {
        return _.isEmpty(this.get(name));
    },

    /**
     * @return {xblocks.attrs.AttrsComplex}
     */
    toComplex: function() {
        return this;
    },

    /**
     * @return {xblocks.attrs.AttrsPlain}
     */
    toPlain: function() {
        xblocks.log.time('AttrsComplex->toPlain');

        var plainObject = xblocks.attrs.plain();

        function z(ns, o) {
            if (xblocks.attrs.isComplex(o) && ns.length && !_.isUndefined(o.getValue())) {
                plainObject[ns.join(xblocks.attrs.SEPARATOR)] = o.getValue();
            }

            for (var key in o) {
                if (o.hasOwnProperty(key) && xblocks.attrs.isComplex(o[key])) {
                    ns.push(key);
                    z(ns, o[key]);
                }
            }

            ns.pop();
        }

        z([], this);

        xblocks.log.timeEnd('AttrsComplex->toPlain');
        return plainObject;
    },

    /**
     * @param {Number} [nesting] вложенность
     * @return {Object}
     */
    toSchema: function(nesting) {
        xblocks.log.time('AttrsComplex->toSchema');

        var schema = {};
        var stack = [];
        stack.push([ this, schema, 0 ]);

        var ns;
        while((ns = stack.pop())) {
            ns[1].content = ns[0].getValue();
            ns[1].attrs = {};

            if (nesting > 0 && ns[2] >= nesting) {
                ns[1].attrs = ns[0].toPlain();
                continue;
            }

            for (var key in ns[0]) {
                if (ns[0].hasOwnProperty(key) && xblocks.attrs.isComplex(ns[0][key])) {
                    if (_.isEmpty(ns[0][key], xblocks.attrs.ATTR_COMPLEX_VALUE)) {
                        ns[1].attrs[key] = ns[0][key].getValue();

                    } else {
                        ns[1].attrs[key] = {};
                        stack.push([ns[0][key], ns[1].attrs[key], ++ns[2]]);
                    }
                }
            }
        }

        xblocks.log.timeEnd('AttrsComplex->toSchema');
        return _.cloneDeep(schema);
    }
});
