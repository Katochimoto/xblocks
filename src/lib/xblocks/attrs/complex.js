/**
 * @param {Object} [obj]
 * @constructor
 */
function AttrsComplex(obj) {
    AttrsComplex.superclass.constructor.apply(this, arguments);
}

Object.extend(AttrsComplex, AttrsPlain);


AttrsComplex.prototype.getValue = function() {
    return this[attrs.ATTR_COMPLEX_VALUE];
};

AttrsComplex.prototype.setValue = function(value) {
    this[attrs.ATTR_COMPLEX_VALUE] = value;
};

/**
 *
 * @param {String} name
 * @return {AttrsComplex|undefined}
 */
AttrsComplex.prototype.get = function(name) {
    return fns(this, name);
};

/**
 *
 * @param {String} name
 * @param {*} value
 */
AttrsComplex.prototype.set = function(name, value) {
    ns(this, name, value);
};

/**
 *
 * @param {String} name
 * @return {Boolean}
 */
AttrsComplex.prototype.isEmpty = function(name) {
    return Object.isEmpty(fns(this, name));
};

/**
 * @return {AttrsComplex}
 */
AttrsComplex.prototype.toComplex = function() {
    return this;
};

/**
 * @return {AttrsPlain}
 */
AttrsComplex.prototype.toPlain = function() {
    xblocks.log.time('AttrsComplex->toPlain');

    var plainObject = new AttrsPlain();

    function z(ns, o) {
        if ((o instanceof AttrsComplex) && ns.length && typeof(o.getValue()) !== 'undefined') {
            plainObject[ns.join(attrs.SEPARATOR)] = o.getValue();
        }

        for (var key in o) {
            if (o.hasOwnProperty(key) && (o[key] instanceof AttrsComplex)) {
                ns.push(key);
                z(ns, o[key]);
            }
        }

        ns.pop();
    }

    z([], this);

    xblocks.log.timeEnd('AttrsComplex->toPlain');
    return plainObject;
};

/**
 * @param {Number} [nesting] вложенность
 * @return {Object}
 */
AttrsComplex.prototype.toSchema = function(nesting) {
    xblocks.log.time('AttrsComplex->toSchema');

    var schema = {};
    var stack = [];
    stack.push([this, schema, 0]);

    var ns;
    while (ns = stack.pop()) {
        ns[1].content = ns[0].getValue();
        ns[1].attrs = {};

        if (nesting > 0 && ns[2] >= nesting) {
            ns[1].attrs = ns[0].toPlain();
            continue;
        }

        for (var key in ns[0]) {
            if (ns[0].hasOwnProperty(key) && (ns[0][key] instanceof AttrsComplex)) {
                if (Object.isEmpty(ns[0][key], attrs.ATTR_COMPLEX_VALUE)) {
                    ns[1].attrs[key] = ns[0][key].getValue();

                } else {
                    ns[1].attrs[key] = {};
                    stack.push([ns[0][key], ns[1].attrs[key], ++ns[2]]);
                }
            }
        }
    }

    schema = JSON.parse(JSON.stringify(schema));

    xblocks.log.timeEnd('AttrsComplex->toSchema');
    return schema;
};
