(function(xtag, xblocks) {
    'use strict';

    xblocks = xblocks || {};
    var attrs = xblocks.attrs = {};
    var ATTRS_SEP = '-';

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

    AttrsPlain.prototype.get = function(name) {
        return this[name];
    };

    AttrsPlain.prototype.set = function(name, value) {
        this[name] = value;
    };

    AttrsPlain.prototype.empty = function(name) {
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

    extend(AttrsComplex, AttrsPlain);

    AttrsComplex.prototype.value = function() {
        return this._;
    };

    AttrsComplex.prototype.get = function(name) {
        return fns(this, name);
    };

    AttrsComplex.prototype.set = function(name, value) {
        ns(this, name, value);
    };

    AttrsComplex.prototype.empty = function(name) {
        return isEmpty(fns(this, name));
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
        var obj = new AttrsPlain();

        function z(ns, o) {
            for (var key in o) {
                if (o.hasOwnProperty(key)) {
                    if (o.value()) {
                        obj[ns.join(ATTRS_SEP)] = o.value();
                    } else {
                        ns.push(key);
                        z(ns, o[key]);
                    }
                }
            }

            ns.pop();
        }

        z([], this);

        return obj;
    };


    /**
     *
     * @param {Object} child
     * @param {Object} parent
     */
    function extend(child, parent) {
        var f = function() {};
        f.prototype = parent.prototype;
        child.prototype = new f();
        child.prototype.constructor = child;
        child.superclass = parent.prototype;
    }

    /**
     *
     * @param {Object} obj
     * @returns {Boolean}
     */
    function isEmpty(obj) {
        if (typeof obj !== 'object') {
            return true;
        }

        for (var key in obj) {
            if (obj.hasOwnProperty(key)) {
                return false;
            }
        }

        return true;
    }

    /**
     *
     * @param {Object} target
     * @param {String} name
     * @param {*} [value]
     * @returns {Object}
     */
    function ns(target, name, value) {
        var _ns = target;
        var _name = name.split(ATTRS_SEP);

        for (var i = 0, l = _name.length; i < l; i++) {
            var part = _name[i];
            var type = typeof(_ns[part]);
            if (type === 'undefined') {
                _ns = _ns[part] = target[part] || new AttrsComplex();
            } else if (type !== 'object') {
                _ns = _ns[part] = new AttrsComplex({ _: _ns[part] });
            } else {
                _ns = _ns[part];
            }
        }

        if (value) {
            _ns._ = value;
        }

        return _ns;
    }

    /**
     * @param {Object} target
     * @param {String} name
     * @returns {*}
     */
    function fns(target, name) {
        var _ns = target;
        var _name = name.split(ATTRS_SEP);

        for (var i = 0, l = _name.length; i < l; i++) {
            var part = _name[i];
            var type = typeof(_ns[part]);
            if (type !== 'object') {
                return undefined;
            } else {
                _ns = _ns[part];
            }
        }

        return _ns;
    }

    /**
     *
     * @param element
     * @returns {Object}
     */
    attrs.toObject = function(element) {
        var obj = new AttrsComplex();
        var plain = attrs.toPlainObject(element);

        for (var key in plain) {
            if (plain.hasOwnProperty(key)) {
                ns(obj, key, plain[key]);
            }
        }

        return obj;
    };

    /**
     *
     * @param element
     * @returns {Object}
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


})(xtag, xblocks);
