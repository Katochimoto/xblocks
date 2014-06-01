/*jshint -W067 */
(function() {
    'use strict';

    /**
     * MutationObserver provides developers a way to react to changes in a DOM
     * @typedef {Object} MutationObserver
     * @property {Function} disconnect
     * @property {Function} observe
     */

    /**
     * MutationRecord is the object that will be passed to the observer's callback
     * @typedef {Object} MutationRecord
     * @property {String} attributeName
     * @property {String} type
     */


    /**
     * @namespace xtag
     */

    /**
     * @namespace React
     * @property {Function} unmountComponentAtNode
     * @property {Function} renderComponent
     * @property {Function} createClass
     */

    /**
     * @namespace React.DOM
     */

    /**
     * React constructor component
     * @typedef {Function} Constructor
     * @property {Function} unmountComponent
     * @property {Function} replaceProps
     * @property {Function} setProps
     * @property {Function} isMounted
     */

    /**
     * @namespace xblocks
     */
    var xblocks = {};

    var namespace;

    if (typeof module !== 'undefined') {
        namespace = module.exports = xblocks;

    } else {
        namespace = (function() {
            return this || (1, eval)('this');
        }());
    }

    namespace.xblocks = xblocks;

    /* xblocks/utils.js begin */
(function(xblocks) {

    /**
     * @namespace
     */
    xblocks.utils = {};

    xblocks.utils.REG_TYPE_EXTRACT = /\s([a-zA-Z]+)/;

    xblocks.utils.support = {
        template: ('content' in document.createElement('template'))
    };

    /**
     * Generate unique string
     * @returns {string}
     */
    xblocks.utils.uid = function() {
        return Math.floor((1 + Math.random()) * 0x10000000 + Date.now()).toString(36);
    };

    /**
     * @returns {object}
     */
    xblocks.utils.merge = function() {
        var options, name, src, copy, copyIsArray, clone,
            target = arguments[0] || {},
            i = 1,
            length = arguments.length,
            deep = false;

        if ( typeof target === 'boolean' ) {
            deep = target;

            target = arguments[ i ] || {};
            i++;
        }

        if ( typeof target !== 'object' && xblocks.utils.type(target) !== 'function' ) {
            target = {};
        }

        if ( i === length ) {
            target = this;
            i--;
        }

        for ( ; i < length; i++ ) {
            if ( (options = arguments[ i ]) != null ) {
                // Extend the base object
                for ( name in options ) {
                    src = target[ name ];
                    copy = options[ name ];

                    if ( target === copy ) {
                        continue;
                    }

                    if ( deep && copy && ( xblocks.utils.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];

                        } else {
                            clone = src && xblocks.utils.isPlainObject(src) ? src : {};
                        }

                        target[ name ] = xblocks.utils.merge( deep, clone, copy );

                    } else if ( copy !== undefined ) {
                        target[ name ] = copy;
                    }
                }
            }
        }

        return target;
    };

    /**
     * @param {*} param
     * @returns {string}
     */
    xblocks.utils.type = function(param) {
        return ({}).toString.call(param).match(xblocks.utils.REG_TYPE_EXTRACT)[1].toLowerCase();
    };

    /**
     * @param {*} obj
     * @returns {boolean}
     */
    xblocks.utils.isPlainObject = function(obj) {
        if (xblocks.utils.type(obj) !== 'object' || obj.nodeType || xblocks.utils.isWindow(obj)) {
            return false;
        }

        if (obj.constructor && !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
            return false;
        }

        return true;
    };

    xblocks.utils.isWindow = function(obj) {
        return obj != null && obj === obj.window;
    };

    /**
     * @param {*} x
     * @param {*} y
     * @returns {boolean}
     */
    xblocks.utils.equals = function(x, y) {
        if (x === y) {
            return true;
        }

        if (!(x instanceof Object) || !(y instanceof Object)) {
            return false;
        }

        if (x.constructor !== y.constructor) {
            return false;
        }

        for (var p in x) {
            if (!x.hasOwnProperty(p)) {
                continue;
            }

            if (!y.hasOwnProperty(p)) {
                return false;
            }

            if (x[p] === y[p]) {
                continue;
            }

            if (typeof(x[p]) !== 'object') {
                return false;
            }

            if (!xblocks.utils.equals(x[p], y[p])) {
                return false;
            }
        }

        for (p in y) {
            if (y.hasOwnProperty(p) && !x.hasOwnProperty(p)) {
                return false;
            }
        }

        return true;
    };

    /**
     * @param {*} obj
     * @returns {boolean}
     */
    xblocks.utils.isEmptyObject = function(obj) {
        if (xblocks.utils.type(obj) !== 'object') {
            return true;
        }

        var name;
        for (name in obj) {
            return false;
        }

        return true;
    };

    /**
     * @param {object} from
     * @param {function} [callback]
     * @returns {object}
     */
    xblocks.utils.filterObject = function(from, callback) {
        var out = {};

        Object.keys(from).forEach(function(property) {
            var descr = Object.getOwnPropertyDescriptor(from, property);
            if (callback && callback(property, descr)) {
                Object.defineProperty(out, property, descr);
            }
        });

        return out;
    };

    /**
     * @param {object} from
     * @param {function} [callback]
     * @returns {object}
     */
    xblocks.utils.mapObject = function(from, callback) {
        var out = {};

        Object.keys(from).forEach(function(property) {
            var descr = Object.getOwnPropertyDescriptor(from, property);
            var map = callback && callback(property, descr);
            if (xblocks.utils.type(map) === 'object') {
                Object.defineProperty(out, map.name, map.descr);
            }
        });

        return out;
    };

}(xblocks));

/* xblocks/utils.js end */

    /* xblocks/dom.js begin */
(function(xblocks) {

    /**
     * @namespace
     */
    xblocks.dom = {};

    /* xblocks/dom/attrs.js begin */
/**
 * @namespace
 */
xblocks.dom.attrs = {};

/**
 * @type {string[]}
 */
xblocks.dom.attrs.ARRTS_BOOLEAN = [
    'active',
    'autofocus',
    'checked',
    'defer',
    'disabled',
    'ismap',
    'multiple',
    'readonly',
    'selected',
    'xb-static'
];

/**
 * @param {string} name
 * @param {string} value
 * @returns {string|boolean}
 */
xblocks.dom.attrs.getRealValue = function(name, value) {
    if (value === 'true' ||
        value === 'false' ||
        xblocks.dom.attrs.ARRTS_BOOLEAN.indexOf(name) !== -1
    ) {
        return (value === '' || name === value || value === 'true');
    }

    return value;
};

/**
 * Выделение атрибутов элемента в плоском представлении
 * @param {HTMLElement} element
 * @return {object}
 */
xblocks.dom.attrs.toObject = function(element) {
    if (element.nodeType !== 1) {
        return {};
    }

    var attrs = {};

    Array.prototype.forEach.call(element.attributes, function(attr) {
        attrs[attr.nodeName] = xblocks.dom.attrs.getRealValue(attr.nodeName, attr.value);
    });

    return attrs;
};

/* xblocks/dom/attrs.js end */


}(xblocks));

/* xblocks/dom.js end */

    /* xblocks/view.js begin */
(function(xblocks, React) {

    var XBView = {};

    /**
     * @module xblocks.view
     */
    xblocks.view = {};

    /**
     * @param {object} component
     */
    xblocks.view.create = function(component) {
        component.mixins = Array.isArray(component.mixins) ? component.mixins: [];
        component.mixins.push(XBView);

        component.propTypes = xblocks.utils.isPlainObject(component.propTypes) ? component.propTypes : {};
        component.propTypes._uid = React.PropTypes.string;

        return React.createClass(component);
    };

    /**
     * @param {string} blockName
     * @param {object} component
     * @throws
     */
    xblocks.view.register = function(blockName, component) {
        if (React.DOM.hasOwnProperty(blockName)) {
            throw 'Specified item "' + blockName + '" is already defined';
        }

        React.DOM[blockName] = xblocks.view.create(component);
        return React.DOM[blockName];
    };

    /**
     * @param {string} blockName
     * @returns {*}
     */
    xblocks.view.get = function(blockName) {
        return React.DOM[blockName];
    };

}(xblocks, React));

/* xblocks/view.js end */

    /* xblocks/block.js begin */
(function(xtag, xblocks) {

    /**
     * @param {String} blockName
     * @param {?Object} options
     * @returns {HTMLElement}
     */
    xblocks.create = function(blockName, options) {
        options = xblocks.utils.isPlainObject(options) ? options : {};

        xblocks.utils.merge(true, options, {
            lifecycle: {
                /**
                 * @this {HTMLElement}
                 */
                created: function() {
                    /**
                     * @type {XBElement}
                     */
                    this.xblock = xblocks.element.create(this);
                },

                /**
                 * @this {HTMLElement}
                 */
                removed: function() {
                    this.xblock.destroy();
                    delete this.xblock;
                },

                /**
                 * @this {HTMLElement}
                 */
                attributeChanged: function(attrName, oldValue, newValue) {
                    if (this.xblock._isMountedComponent()) {
                        return;
                    }

                    // removeAttribute('xb-static')
                    if (attrName === 'xb-static' && newValue === null) {
                        this.xblock._repaint();
                    }
                }
            },

            accessors: {
                content: {
                    /**
                     * @this {HTMLElement}
                     */
                    get: function() {
                        return this.xblock._getNodeContent();
                    },

                    /**
                     * @this {HTMLElement}
                     */
                    set: function(content) {
                        this.xblock._setNodeContent(content);
                    }
                }
            }
        });

        return xtag.register(blockName, options);
    };

}(xtag, xblocks));

/* xblocks/block.js end */

    /* xblocks/element.js begin */
(function(xtag, xblocks, React) {

    /**
     * @module xblocks.element
     */
    xblocks.element = {};

    /**
     * @param {HTMLElement} node
     * @return {XBElement}
     */
    xblocks.element.create = function(node) {
        return new XBElement(node);
    };

    /**
     * @param {HTMLElement} node
     * @constructor
     */
    function XBElement(node) {
        this._uid = xblocks.utils.uid();
        this._name = node.tagName.toLowerCase();
        this._node = node;

        this._init(this._getNodeProps(), this._getNodeContent(), this._callbackInit);
    }

    /**
     * @type {string}
     * @private
     */
    XBElement.prototype._uid = undefined;

    /**
     * @type {string}
     * @private
     */
    XBElement.prototype._name = undefined;

    /**
     * @type {HTMLElement}
     * @private
     */
    XBElement.prototype._node = null;

    /**
     * @type {Constructor}
     * @private
     */
    XBElement.prototype._component = null;

    /**
     * @type {MutationObserver}
     * @private
     */
    XBElement.prototype._observer = null;

    /**
     * Unmounts a component and removes it from the DOM
     */
    XBElement.prototype.destroy = function() {
        React.unmountComponentAtNode(this._node);
        this.unmount();
    };

    /**
     * Unmounts a component
     */
    XBElement.prototype.unmount = function() {
        if (this._observer) {
            this._observer.disconnect();
        }

        if (this._isMountedComponent()) {
            this._component.unmountComponent();
            this._component = null;
        }
    };

    /**
     * @param {object} [props]
     * @param {Array} [removeProps]
     */
    XBElement.prototype.update = function(props, removeProps) {
        if (!this._isMountedComponent()) {
            return;
        }

        var nextProps = this._getNodeProps();
        var action = 'setProps';

        xblocks.utils.merge(true, nextProps, props);

        // merge of new and current properties
        // and the exclusion of remote properties
        if (Array.isArray(removeProps) && removeProps.length) {
            action = 'replaceProps';
            var currentProps = this._getCurrentProps();
            nextProps = xblocks.utils.merge(true, currentProps, nextProps);
            nextProps = xblocks.utils.filterObject(nextProps, function(name) {
                return removeProps.indexOf(name) === -1;
            });
        }

        if (nextProps.hasOwnProperty('xb-static')) {
            this._repaint();

        } else {
            this._component[action](nextProps);
            this._upgradeNode();
        }
    };

    /**
     * @param {object} [props]
     * @param {string} [children]
     * @param {function} [callback]
     * @private
     */
    XBElement.prototype._init = function(props, children, callback) {
        if (this._isMountedComponent()) {
            return;
        }

        props['_uid'] = this._uid;

        var view = xblocks.view.get(this._name)(props, children);

        if (props.hasOwnProperty('xb-static')) {
            this.unmount();
            xtag.innerHTML(
                this._node,
                React.renderComponentToString(view)
            );

        } else {
            this._component = React.renderComponent(
                view,
                this._node,
                this._callbackRender.bind(this, callback)
            );
        }
    };

    /**
     * @private
     */
    XBElement.prototype._repaint = function() {
        var props = xblocks.utils.merge(true, this._getNodeProps(), this._getCurrentProps());
        var children = this._getNodeContent();
        this.destroy();
        this._init(props, children, this._callbackRepaint);
    };

    /**
     * @private
     */
    XBElement.prototype._callbackInit = function() {
        xtag.fireEvent(this._node, 'xb-created', {
            bubbles: false,
            cancelable: false,
            detail: { xblock: this }
        });
    };

    /**
     * @private
     */
    XBElement.prototype._callbackRepaint = function() {
        xtag.fireEvent(this._node, 'xb-repaint', {
            bubbles: false,
            cancelable: false,
            detail: { xblock: this }
        });
    };

    /**
     * @param {function} [callback]
     * @private
     */
    XBElement.prototype._callbackRender = function(callback) {
        this._upgradeNode();

        if (!this._observer) {
            this._observer = new MutationObserver(this._callbackMutation.bind(this));
        }

        this._observer.observe(this._node, {
            attributes: true,
            childList: true,
            characterData: true,
            subtree: false,
            attributeOldValue: false,
            characterDataOldValue: false
        });

        if (callback) {
            callback.call(this);
        }
    };

    /**
     * @param {MutationRecord[]} records
     * @private
     */
    XBElement.prototype._callbackMutation = function(records) {
        if (!this._isMountedComponent()) {
            return;
        }

        // full repaint
        if (records.some(this._checkNodeChange)) {
            this._repaint();

        } else if (records.some(this._checkAttributesChange)) {

            var removeAttrs = records
                .filter(this._filterAttributesRemove, this)
                .map(this._mapAttributesName);

            this.update(null, removeAttrs);
        }
    };

    XBElement.prototype._upgradeNode = function() {
        if (window.CustomElements) {
            CustomElements.upgradeAll(this._node);
        }
    };

    /**
     * @returns {object}
     */
    XBElement.prototype._getNodeProps = function() {
        return xblocks.dom.attrs.toObject(this._node);
    };

    /**
     * @returns {?HTMLElement}
     * @private
     */
    XBElement.prototype._getNodeContentElement = function() {
        if (!this._node.childNodes.length) {
            return;
        }

        var contents = xtag.query(this._node, '[data-xb-content="' + this._uid + '"]');
        if (contents.length === 1) {
            return contents[0];
        }

        var script = xtag.queryChildren(this._node, 'script[type="text/template"]');
        if (script.length === 1) {
            return script[0];
        }

        if (xblocks.utils.support.template) {
            var template = xtag.queryChildren(this._node, 'template');
            if (template.length === 1) {
                // FIXME temporarily, until the implementation of the DocumentFragment
                var tmp = document.createElement('div');
                tmp.appendChild(document.importNode(template[0].content, true));
                return tmp;
            }
        }
    };

    /**
     * @returns {string}
     * @private
     */
    XBElement.prototype._getNodeContent = function() {
        if (this._isMountedComponent()) {
            return this._component.props.children;
        }

        var contentElement = this._getNodeContentElement();
        if (contentElement) {
            return contentElement.innerHTML;
        }

        return this._node.innerHTML;
    };

    /**
     * @param {string} content
     * @private
     */
    XBElement.prototype._setNodeContent = function(content) {
        if (this._isMountedComponent()) {
            this.update({ children: content });

        } else {
            var contentElement = this._getNodeContentElement();
            if (contentElement) {
                xtag.innerHTML(contentElement, content);
            }
        }
    };

    /**
     *
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._isMountedComponent = function() {
        return (this._component && this._component.isMounted());
    };

    /**
     * @returns {?object}
     * @private
     */
    XBElement.prototype._getCurrentProps = function() {
        return this._isMountedComponent() ? this._component.props : null;
    };

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._checkNodeChange = function(record) {
        return (record.type === 'childList');
    };

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._checkAttributesChange = function(record) {
        return (record.type === 'attributes');
    };

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._filterAttributesRemove = function(record) {
        return (record.type === 'attributes' && !this._node.hasAttribute(record.attributeName));
    };

    /**
     * @param {MutationRecord} record
     * @returns {string}
     * @private
     */
    XBElement.prototype._mapAttributesName = function(record) {
        return record.attributeName;
    };

}(xtag, xblocks, React));

/* xblocks/element.js end */


}());
