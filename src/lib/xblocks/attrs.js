(function(xblocks) {

    /**
     * @module xblocks.attrs
     */
    xblocks.attrs = {

        /**
         * @type {string} разделитель названия атрибута
         */
        SEPARATOR: '-',

        /**
         * @type {string} значение атрибута в комплексном представлении
         */
        ATTR_COMPLEX_VALUE: '_'
    };


    /*! borschik:include:attrs/common.js */
    /*! borschik:include:attrs/plain.js */
    /*! borschik:include:attrs/complex.js */

    /**
     * Конструктор плоского представления атрибутов
     *
     * @example <caption>Example usage of plain.</caption>
     * xblocks.attrs.plain({ 'name': 'test', 'class': 'test' })
     *
     * @param {Object} [obj] объект атрибутов элемента
     * @return {xblocks.attrs,AttrsPlain}
     */
    xblocks.attrs.plain = function(obj) {
        return new xblocks.attrs.AttrsPlain(obj);
    };

    /**
     * Конструктор комплексного представления атрибутов
     *
     * @param {Object} [obj] объект атрибутов элемента
     * @return {xblocks.attrs.AttrsComplex}
     */
    xblocks.attrs.complex = function(obj) {
        return new xblocks.attrs.AttrsComplex(obj);
    };

    /**
     * @param {Object} obj
     * @returns {boolean}
     */
    xblocks.attrs.isComplex = function(obj) {
        return (obj instanceof xblocks.attrs.AttrsComplex);
    };

    /**
     * @param {Object} obj
     * @returns {boolean}
     */
    xblocks.attrs.isPlain = function(obj) {
        return (obj instanceof xblocks.attrs.AttrsPlain);
    };


    /**
     * Выделение атрибутов элемента в плоском представлении
     *
     * @param {HTMLElement} element элемент
     * @return {AttrsPlain}
     */
    xblocks.attrs.toPlainObject = function(element) {
        xblocks.log.time('attrs->toPlainObject');

        var plain = xblocks.attrs.plain();
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
    xblocks.attrs.toComplexObject = function(element) {
        return xblocks.attrs.toPlainObject(element).toComplex();
    };

    /**
     * Выделение атрибутов элемента в представлении, пригодном для проверки со схемой
     *
     * @param {HTMLElement} element элемент
     * @return {Object}
     */
    xblocks.attrs.toSchemaObject = function(element) {
        return xblocks.attrs.toComplexObject(element).toSchema();
    };

    /**
     * Проверка наличия определенного атрибута
     *
     * @param {HTMLElement} element элемент
     * @param {String} attrName название атрибута
     * @return {Boolean} true, если атрибут указан и его значение определено
     */
    xblocks.attrs.isEmpty = function(element, attrName) {
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
