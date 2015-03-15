/* global xblocks, React, __forEach */
/* jshint strict: false */

/**
 * To obtain the specified attributes
 *
 * @example
 * node = document.createElement('div');
 * node.setAttribute('attr1', '');
 * node.setAttribute('attr2', 'test1');
 * node.setAttribute('attr3', 'test2');
 * xblocks.dom.attrs.get(node, {
 *     'attr1': false,
 *     'attr2': undefined
 * });
 * // { 'attr1': true, 'attr2': 'test1' }
 *
 * @param {HTMLElement} element
 * @param {object} attrs the set of derived attributes (+default values)
 * @return {object}
 */
xblocks.dom.attrs.get = function(element, attrs) {
    if (element.nodeType !== 1 || !element.hasAttributes()) {
        return attrs;
    }

    var attrName;
    for (attrName in attrs) {
        if (attrs.hasOwnProperty(attrName) && element.hasAttribute(attrName)) {
            if (typeof(attrs[ attrName ]) === 'boolean') {
                attrs[ attrName ] = xblocks.dom.attrs.valueConversion(
                    attrName,
                    element.getAttribute(attrName),
                    React.PropTypes.bool
                );

            } else {
                attrs[ attrName ] = element.getAttribute(attrName);
            }
        }
    }

    return attrs;
};

/**
 * Retrieve object attributes
 *
 * @example
 * node = document.createElement('div');
 * node.setAttribute('attr1', '');
 * node.setAttribute('attr2', 'test');
 * xblocks.dom.attrs.toObject(node);
 * // { 'attr1': '', 'attr2': 'test' }
 *
 * @param {HTMLElement} element
 * @return {object}
 */
xblocks.dom.attrs.toObject = function(element) {
    var attrs = {};

    if (element.nodeType === 1 && element.hasAttributes()) {
        __forEach.call(element.attributes, xblocks.dom.attrs._toObjectIterator, attrs);
    }

    return attrs;
};

/**
 * @param {Attr} attr
 * @private
 */
xblocks.dom.attrs._toObjectIterator = function(attr) {
    this[ attr.nodeName ] = attr.value;
};

/**
 * Convert the attribute value to the specified type
 *
 * @example
 * xblocks.dom.attrs.valueConversion('attr1', 'true');
 * // true
 * xblocks.dom.attrs.valueConversion('attr1', 'true', React.PropTypes.string);
 * // 'true'
 * xblocks.dom.attrs.valueConversion('attr1', '123', React.PropTypes.number);
 * // 123
 *
 * @param {string} prop attribute name
 * @param {*} value attribute value
 * @param {function} [type] attribute type
 * @returns {*}
 */
xblocks.dom.attrs.valueConversion = function(prop, value, type) {
    if (!type) {
        if (value === 'true' || value === 'false' || xblocks.dom.attrs.ARRTS_BOOLEAN.indexOf(prop) !== -1) {
            type = React.PropTypes.bool;
        }
    }

    switch (type) {
        case React.PropTypes.bool:
            return Boolean(value === true || value === '' || prop === value || value === 'true');

        case React.PropTypes.string:
            return String(value);

        case React.PropTypes.number:
            return Number(value);

        default:
            return value;
    }
};

/**
 * Collective conversion of attribute types
 *
 * @example
 * xblocks.dom.attrs.typeConversion({
 *     'attr1': '123',
 *     'attr2': ''
 * }, {
 *     'attr1': React.PropTypes.number,
 *     'attr2': React.PropTypes.bool
 * });
 * // { 'attr1': 123, 'attr2': true }
 *
 * @param {object} props the set of attributes
 * @param {object} [propTypes] the set of attribute types
 * @returns {object}
 */
xblocks.dom.attrs.typeConversion = function(props, propTypes) {
    propTypes = propTypes || {};
    var prop;

    for (prop in props) {
        if (props.hasOwnProperty(prop)) {
            props[ prop ] = xblocks.dom.attrs.valueConversion(
                prop,
                props[ prop ],
                propTypes[ prop ]
            );
        }
    }

    return props;
};
