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

}(xblocks));
