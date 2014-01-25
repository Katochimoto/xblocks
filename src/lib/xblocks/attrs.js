(function(xblocks) {
    'use strict';

    /**
     * @module xblocks.attrs
     */
    var attrs = xblocks.attrs = {};

    /**
     * @type {string} разделитель названия атрибута
     */
    attrs.SEPARATOR = '-';

    /**
     * @type {string} значение атрибута в комплексном представлении
     */
    attrs.ATTR_COMPLEX_VALUE = '_';

    /*! borschik:include:attrs/common.js */
    /*! borschik:include:attrs/plain.js */
    /*! borschik:include:attrs/complex.js */

    /**
     * Конструктор плоского представления атрибутов
     *
     * @param {Object} obj объект атрибутов элемента
     * @return {AttrsPlain}
     */
    attrs.plain = function(obj) {
        return new AttrsPlain(obj);
    };

    /**
     * Конструктор комплексного представления атрибутов
     *
     * @param {Object} obj объект атрибутов элемента
     * @return {AttrsComplex}
     */
    attrs.complex = function(obj) {
        return new AttrsComplex(obj);
    };

    /**
     * Выделение атрибутов элемента в плоском представлении
     *
     * @param {HTMLElement} element элемент
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
     * Выделение атрибутов элемента в комплексном представлении
     *
     * @param {HTMLElement} element элемент
     * @return {AttrsComplex}
     */
    attrs.toComplexObject = function(element) {
        return attrs.toPlainObject(element).toComplex();
    };

    /**
     * Выделение атрибутов элемента в представлении, пригодном для проверки со схемой
     *
     * @param {HTMLElement} element элемент
     * @return {Object}
     */
    attrs.toSchemaObject = function(element) {
        return attrs.toComplexObject(element).toSchema();
    };

    /**
     * Проверка наличия определенного атрибута
     *
     * @param {HTMLElement} element элемент
     * @param {String} attrName название атрибута
     * @return {Boolean} true, если атрибут указан и его значение определено
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


}(xblocks));
