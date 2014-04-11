/**
 * @module xblocks.dom.attrs
 */
xblocks.dom.attrs = {};

/**
 * Выделение атрибутов элемента в плоском представлении
 *
 * @param {HTMLElement} element элемент
 * @return {xblocks.attrs.AttrsPlain}
 */
xblocks.dom.attrs.toPlainObject = function(element) {
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
 * @return {xblocks.attrs.AttrsComplex}
 */
xblocks.dom.attrs.toComplexObject = function(element) {
    return xblocks.dom.attrs.toPlainObject(element).toComplex();
};

/**
 * Выделение атрибутов элемента в представлении, пригодном для проверки со схемой
 *
 * @param {HTMLElement} element элемент
 * @return {Object}
 */
xblocks.dom.attrs.toSchemaObject = function(element) {
    return xblocks.dom.attrs.toComplexObject(element).toSchema();
};

/**
 * Проверка наличия определенного атрибута
 *
 * @param {HTMLElement} element элемент
 * @param {String} attrName название атрибута
 * @return {Boolean} true, если атрибут указан и его значение определено
 */
xblocks.dom.attrs.isEmpty = function(element, attrName) {
    if (element.hasAttribute(attrName)) {
        var value = element.getAttribute(attrName);
        if (!value || value === 'false') {
            return true;
        }

        return false;
    }

    return true;
};
