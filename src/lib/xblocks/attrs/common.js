/**
 *
 * @param {Object} target
 * @param {String} name
 * @param {*} [value]
 * @return {Object}
 * @private
 */
xblocks.attrs._ns = function(target, name, value) {
    var namespace = target;
    var sname = name.split(xblocks.attrs.SEPARATOR);

    for (var i = 0, l = sname.length; i < l; i++) {
        var part = sname[i];

        if (_.isUndefined(namespace[part])) {
            namespace = namespace[part] = xblocks.attrs.complex(target[part] || {});

        } else if (!_.isPlainObject(namespace[part])) {
            var obj = {};
            obj[xblocks.attrs.ATTR_COMPLEX_VALUE] = namespace[part];
            namespace = namespace[part] = xblocks.attrs.complex(obj);

        } else {
            namespace = namespace[part];
        }
    }

    if (value) {
        namespace[xblocks.attrs.ATTR_COMPLEX_VALUE] = value;
    }

    return namespace;
};

/**
 * @param {Object} target
 * @param {String} name
 * @return {*}
 * @private
 */
xblocks.attrs._fns = function(target, name) {
    var namespace = target;
    var sname = name.split(xblocks.attrs.SEPARATOR);

    for (var i = 0, l = sname.length; i < l; i++) {
        var part = sname[i];

        if (!_.isPlainObject(namespace[part])) {
            return undefined;

        } else {
            namespace = namespace[part];
        }
    }

    return namespace;
};
