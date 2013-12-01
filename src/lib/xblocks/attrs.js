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
     * @param {Boolean} [nesting=false]
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

            if (ns[2] >= nesting) {
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



    /**
     *
     * @param {Object} target
     * @param {String} name
     * @param {*} [value]
     * @return {Object}
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
     * @return {*}
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
     * @return {AttrsPlain}
     */
    attrs.toPlainObject = function(element) {
        xblocks.log.time('attrs->toPlainObject');

        var plain = new AttrsPlain();
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

            plain[name] = val;
        }

        xblocks.log.timeEnd('attrs->toPlainObject');
        return plain;
    };

    /**
     *
     * @param {HTMLElement} element
     * @return {AttrsComplex}
     */
    attrs.toComplexObject = function(element) {
        return attrs.toPlainObject(element).toComplex();
    };

    /**
     *
     * @param {HTMLElement} element
     * @return {Object}
     */
    attrs.toSchemaObject = function(element) {
        return attrs.toComplexObject(element).toSchema();
    };

    /**
     *
     * @param {HTMLElement} element
     * @param {String} attrName
     * @return {Boolean}
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
