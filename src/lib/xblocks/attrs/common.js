/** @namespace attrs */

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
            namespace = namespace[part] = new AttrsComplex(target[part] || {});
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
