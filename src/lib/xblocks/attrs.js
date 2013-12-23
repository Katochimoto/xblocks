(function(xtag, xblocks) {
    'use strict';

    xblocks = xblocks || {};
    var attrs = xblocks.attrs = {};

    attrs.SEPARATOR = '-';
    attrs.ATTR_COMPLEX_VALUE = '_';

    /* borschik:include:attrs/common.js */
    /* borschik:include:attrs/plain.js */
    /* borschik:include:attrs/complex.js */

    /**
     *
     * @param {Object} obj
     * @returns {AttrsPlain}
     */
    attrs.plain = function(obj) {
        return new AttrsPlain(obj);
    };

    /**
     *
     * @param {Object} obj
     * @returns {AttrsComplex}
     */
    attrs.complex = function(obj) {
        return new AttrsComplex(obj);
    };

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
