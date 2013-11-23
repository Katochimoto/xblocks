(function(xtag, xblocks) {
    'use strict';

    xblocks = xblocks || {};
    var attrs = xblocks.attrs = {};

    attrs.SEPARATOR = '-';
    attrs.ATTR_COMPLEX_VALUE = '_';

    /**
     * @param {Object} [obj]
     * @constructor
     */
    var AttrsPlain = function(obj) {
        if (typeof obj === 'object') {
            for (var name in obj) {
                if (obj.hasOwnProperty(name)) {
                    this[name] = obj[name];
                }
            }
        }
    };

    /**
     *
     * @param {String} name
     * @returns {*}
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
     * @returns {boolean}
     */
    AttrsPlain.prototype.isEmpty = function(name) {
        return !this[name];
    };

    /**
     * @returns {AttrsPlain}
     */
    AttrsPlain.prototype.toPlain = function() {
        return this;
    };

    /**
     * @returns {AttrsComplex}
     */
    AttrsPlain.prototype.toComplex = function() {
        var obj = new AttrsComplex();

        for (var key in this) {
            if (this.hasOwnProperty(key)) {
                ns(obj, key, this[key]);
            }
        }

        return obj;
    };


    /**
     * @param {Object} [obj]
     * @constructor
     */
    var AttrsComplex = function(obj) {
        AttrsComplex.superclass.constructor.apply(this, arguments);
    };

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
     * @returns {AttrsComplex|undefined}
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
     * @returns {Boolean}
     */
    AttrsComplex.prototype.isEmpty = function(name) {
        return Object.isEmpty(fns(this, name));
    };

    /**
     * @returns {AttrsComplex}
     */
    AttrsComplex.prototype.toComplex = function() {
        return this;
    };

    /**
     * @returns {AttrsPlain}
     */
    AttrsComplex.prototype.toPlain = function() {
        var plainObject = new AttrsPlain();

        function z(ns, o) {
            if ((o instanceof AttrsComplex) && ns.length) {
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

        return plainObject;
    };

    /**
     * @returns {Object}
     */
    AttrsComplex.prototype.toSchema = function() {
        var schema = {};

        function z(schema, complex) {
            schema.content = complex.getValue();
            schema.attrs = {};

            for (var key in complex) {
                if (complex.hasOwnProperty(key) && (complex[key] instanceof AttrsComplex)) {
                    if (Object.isEmpty(complex[key], [attrs.ATTR_COMPLEX_VALUE])) {
                        schema.attrs[key] = complex[key].getValue();

                    } else {
                        schema.attrs[key] = {};
                        z(schema.attrs[key], complex[key]);
                    }
                }
            }
        }

        z(schema, this);

        return JSON.parse(JSON.stringify(schema));
    };



    /**
     *
     * @param {Object} target
     * @param {String} name
     * @param {*} [value]
     * @returns {Object}
     */
    function ns(target, name, value) {
        var namespace = target;
        var sname = name.split(attrs.SEPARATOR);

        for (var i = 0, l = sname.length; i < l; i++) {
            var part = sname[i];
            var type = typeof(namespace[part]);
            if (type === 'undefined') {
                namespace = namespace[part] = target[part] || new AttrsComplex();
            } else if (type !== 'object') {
                var obj = {};
                obj[attrs.ATTR_COMPLEX_VALUE] = namespace[part];
                namespace = namespace[part] = new AttrsComplex(obj);
            } else {
                namespace = namespace[part];
            }
        }

        if (value) {
            namespace[attrs.ATTR_COMPLEX_VALUE] = value;
        }

        return namespace;
    }

    /**
     * @param {Object} target
     * @param {String} name
     * @returns {*}
     */
    function fns(target, name) {
        var namespace = target;
        var sname = name.split(attrs.SEPARATOR);

        for (var i = 0, l = sname.length; i < l; i++) {
            var part = sname[i];
            var type = typeof(namespace[part]);
            if (type !== 'object') {
                return undefined;
            } else {
                namespace = namespace[part];
            }
        }

        return namespace;
    }



    /**
     *
     * @param {HTMLElement} element
     * @returns {AttrsPlain}
     */
    attrs.toPlainObject = function(element) {
        var obj = new AttrsPlain();
        var i = 0;
        var attributes = element.attributes;
        var l = attributes.length;

        for (i = 0; i < l; i++) {
            var attr = attributes.item(i);
            var name = attr.nodeName;
            var val = attr.value;

            if (val === 'true' || val === 'false' || name === val) {
                val = (name === val || val === 'true');
            }

            obj[name] = val;
        }

        return obj;
    };

    /**
     *
     * @param {HTMLElement} element
     * @returns {AttrsComplex}
     */
    attrs.toComplexObject = function(element) {
        return attrs.toPlainObject(element).toComplex();
    };

    /**
     *
     * @param {HTMLElement} element
     * @returns {Object}
     */
    attrs.toSchemaObject = function(element) {
        return attrs.toComplexObject(element).toSchema();
    };

    /**
     *
     * @param {HTMLElement} element
     * @param {String} attrName
     * @returns {Boolean}
     */
    attrs.isEmpty = function(element, attrName) {
        if (element.hasAttribute(attrName)) {
            var value = element.getAttribute(attrName);
            if (!value || value === 'false') {
                return true;
            }

            return false;
        }

        return true;
    };


})(xtag, xblocks);
