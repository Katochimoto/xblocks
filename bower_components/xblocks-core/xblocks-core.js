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

    var global = (function() {
        return this || (1, eval)('this');
    }());

    global.xblocks = xblocks;

    /* ../node_modules/setimmediate/setImmediate.js begin */
(function (global, undefined) {
    "use strict";

    if (global.setImmediate) {
        return;
    }

    var nextHandle = 1; // Spec says greater than zero
    var tasksByHandle = {};
    var currentlyRunningATask = false;
    var doc = global.document;
    var setImmediate;

    function addFromSetImmediateArguments(args) {
        tasksByHandle[nextHandle] = partiallyApplied.apply(undefined, args);
        return nextHandle++;
    }

    // This function accepts the same arguments as setImmediate, but
    // returns a function that requires no arguments.
    function partiallyApplied(handler) {
        var args = [].slice.call(arguments, 1);
        return function() {
            if (typeof handler === "function") {
                handler.apply(undefined, args);
            } else {
                (new Function("" + handler))();
            }
        };
    }

    function runIfPresent(handle) {
        // From the spec: "Wait until any invocations of this algorithm started before this one have completed."
        // So if we're currently running a task, we'll need to delay this invocation.
        if (currentlyRunningATask) {
            // Delay by doing a setTimeout. setImmediate was tried instead, but in Firefox 7 it generated a
            // "too much recursion" error.
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
        } else {
            var task = tasksByHandle[handle];
            if (task) {
                currentlyRunningATask = true;
                try {
                    task();
                } finally {
                    clearImmediate(handle);
                    currentlyRunningATask = false;
                }
            }
        }
    }

    function clearImmediate(handle) {
        delete tasksByHandle[handle];
    }

    function installNextTickImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            process.nextTick(partiallyApplied(runIfPresent, handle));
            return handle;
        };
    }

    function canUsePostMessage() {
        // The test against `importScripts` prevents this implementation from being installed inside a web worker,
        // where `global.postMessage` means something completely different and can't be used for this purpose.
        if (global.postMessage && !global.importScripts) {
            var postMessageIsAsynchronous = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                postMessageIsAsynchronous = false;
            };
            global.postMessage("", "*");
            global.onmessage = oldOnMessage;
            return postMessageIsAsynchronous;
        }
    }

    function installPostMessageImplementation() {
        // Installs an event handler on `global` for the `message` event: see
        // * https://developer.mozilla.org/en/DOM/window.postMessage
        // * http://www.whatwg.org/specs/web-apps/current-work/multipage/comms.html#crossDocumentMessages

        var messagePrefix = "setImmediate$" + Math.random() + "$";
        var onGlobalMessage = function(event) {
            if (event.source === global &&
                typeof event.data === "string" &&
                event.data.indexOf(messagePrefix) === 0) {
                runIfPresent(+event.data.slice(messagePrefix.length));
            }
        };

        if (global.addEventListener) {
            global.addEventListener("message", onGlobalMessage, false);
        } else {
            global.attachEvent("onmessage", onGlobalMessage);
        }

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            global.postMessage(messagePrefix + handle, "*");
            return handle;
        };
    }

    function installMessageChannelImplementation() {
        var channel = new MessageChannel();
        channel.port1.onmessage = function(event) {
            var handle = event.data;
            runIfPresent(handle);
        };

        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            channel.port2.postMessage(handle);
            return handle;
        };
    }

    function installReadyStateChangeImplementation() {
        var html = doc.documentElement;
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            // Create a <script> element; its readystatechange event will be fired asynchronously once it is inserted
            // into the document. Do so, thus queuing up the task. Remember to clean up once it's been called.
            var script = doc.createElement("script");
            script.onreadystatechange = function () {
                runIfPresent(handle);
                script.onreadystatechange = null;
                html.removeChild(script);
                script = null;
            };
            html.appendChild(script);
            return handle;
        };
    }

    function installSetTimeoutImplementation() {
        setImmediate = function() {
            var handle = addFromSetImmediateArguments(arguments);
            setTimeout(partiallyApplied(runIfPresent, handle), 0);
            return handle;
        };
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = attachTo && attachTo.setTimeout ? attachTo : global;

    // Don't get fooled by e.g. browserify environments.
    if ({}.toString.call(global.process) === "[object process]") {
        // For Node.js before 0.9
        installNextTickImplementation();

    } else if (canUsePostMessage()) {
        // For non-IE10 modern browsers
        installPostMessageImplementation();

    } else if (global.MessageChannel) {
        // For web workers, where supported
        installMessageChannelImplementation();

    } else if (doc && "onreadystatechange" in doc.createElement("script")) {
        // For IE 6–8
        installReadyStateChangeImplementation();

    } else {
        // For older browsers
        installSetTimeoutImplementation();
    }

    attachTo.setImmediate = setImmediate;
    attachTo.clearImmediate = clearImmediate;
}(new Function("return this")()));

/* ../node_modules/setimmediate/setImmediate.js end */


    /* xblocks/utils.js begin */
/* global xblocks, global */
(function(global, xblocks, undefined) {
    'use strict';

    /**
     * @namespace
     */
    xblocks.utils = {};

    xblocks.utils.REG_TYPE_EXTRACT = /\s([a-zA-Z]+)/;

    xblocks.utils.support = {
        template: ('content' in global.document.createElement('template'))
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

        for (; i < length; i++) {
            if ((options = arguments[i]) !== null) {
                // Extend the base object
                for (name in options) {
                    src = target[name];
                    copy = options[name];

                    if (target === copy) {
                        continue;
                    }

                    if ( deep && copy && ( xblocks.utils.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)) ) ) {
                        if ( copyIsArray ) {
                            copyIsArray = false;
                            clone = src && Array.isArray(src) ? src : [];

                        } else {
                            clone = src && xblocks.utils.isPlainObject(src) ? src : {};
                        }

                        target[name] = xblocks.utils.merge( deep, clone, copy );

                    } else if (copy !== undefined) {
                        target[name] = copy;
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
        return Object.prototype.toString.call(param).match(xblocks.utils.REG_TYPE_EXTRACT)[1].toLowerCase();
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
        return obj !== null && obj === obj.window;
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

        var p;
        for (p in x) {
            if (x.hasOwnProperty(p)) {
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
        if (xblocks.utils.type(obj) === 'object') {
            for (var name in obj) {
                return false;
            }
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

    /**
     * @param {function} callback
     * @param {*} args
     * @returns {function}
     */
    xblocks.utils.lazyCall = function(callback, args) {
        callback._args = (callback._args || []).concat(args);

        if (!callback._timer) {
            callback._timer = global.setTimeout(function() {
                callback._timer = 0;
                callback(callback._args.splice(0, callback._args.length));
            }, 0);
        }

        return callback;
    };

    /**
     * @param {string} methodName
     * @returns {boolean}
     */
    xblocks.utils.pristine = function(methodName) {
        var method = global[methodName];

        if (!methodName || !method) {
            return false;
        }

        if (!(new RegExp("^[\\$_a-z][\\$\\w]*$",'i')).test(methodName)) {
            return false;
        }

        if (typeof method !== 'function' && typeof method !== 'object') {
            return false;
        }

        var re = new RegExp("function\\s+" + methodName + "\\(\\s*\\)\\s*{\\s*\\[native code\\]\\s*}");

        if (!re.test(method)) {
            return false;
        }

        if (typeof method === 'function') {
            if (!method.valueOf || method.valueOf() !== method) {
                return false;
            }
        }

        return true;
    };

    /**
     * @constructor
     */
    xblocks.utils.CustomEvent = (function() {
        if (!xblocks.utils.pristine('CustomEvent')) {
            var CustomEvent = function(event, params) {
                params = xblocks.utils.merge({
                    bubbles: false,
                    cancelable: false,
                    detail: undefined

                }, params || {});

                var evt = document.createEvent('CustomEvent');
                evt.initCustomEvent(event, params.bubbles, params.cancelable, params.detail);
                return evt;
            };

            CustomEvent.prototype = global.Event.prototype;

            return CustomEvent;

        } else {
            return global.CustomEvent;
        }
    }());

}(global, xblocks));

/* xblocks/utils.js end */

    /* xblocks/dom.js begin */
/* global xblocks */
(function(xblocks) {
    'use strict';

    /**
     * @namespace
     */
    xblocks.dom = {};

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
     * @type {string[]}
     */
    xblocks.dom.attrs.XB_ATTRS = {
        'STATIC': 'xb-static'
    };

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

}(xblocks));

/* xblocks/dom.js end */

    /* xblocks/view.js begin */
/* global xblocks, global */
(function(global, xblocks) {
    'use strict';

    var XBView = {};

    /**
     * @module xblocks.view
     */
    xblocks.view = {};

    /**
     * @param {object} component
     */
    xblocks.view.create = function(component) {
        if (!Array.isArray(component.mixins)) {
            component.mixins = [];
        }

        component.mixins.push(XBView);

        if (!xblocks.utils.isPlainObject(component.propTypes)) {
            component.propTypes = {};
        }

        component.propTypes._uid = global.React.PropTypes.string;

        return global.React.createClass(component);
    };

    /**
     * @param {string} blockName
     * @param {object} component
     * @throws
     */
    xblocks.view.register = function(blockName, component) {
        if (global.React.DOM.hasOwnProperty(blockName)) {
            throw 'Specified item "' + blockName + '" is already defined';
        }

        global.React.DOM[blockName] = xblocks.view.create(component);
        return global.React.DOM[blockName];
    };

    /**
     * @param {string} blockName
     * @returns {*}
     */
    xblocks.view.get = function(blockName) {
        return global.React.DOM[blockName];
    };

}(global, xblocks));

/* xblocks/view.js end */

    /* xblocks/block.js begin */
/* global xblocks, global */
(function(global, xblocks) {
    'use strict';

    /**
     * @param {String} blockName
     * @param {?Object} options
     * @returns {HTMLElement}
     */
    xblocks.create = function(blockName, options) {
        options = xblocks.utils.isPlainObject(options) ? options : {};

        xblocks.utils.merge(true, options, {
            lifecycle: {
                created: function() {
                    this.xblock = xblocks.element.create(this);
                },

                inserted: function() {

                },

                removed: function() {
                    this.xblock.destroy();
                    delete this.xblock;
                },

                attributeChanged: function(attrName, oldValue, newValue) {
                    if (this.xblock._isMountedComponent()) {
                        return;
                    }

                    // removeAttribute('xb-static')
                    if (attrName === xblocks.dom.attrs.XB_ATTRS.STATIC && newValue === null) {
                        this.xblock._repaint();
                    }
                }
            },

            accessors: {
                content: {
                    /**
                     * @return {string}
                     */
                    get: function() {
                        return this.xblock._getNodeContent();
                    },

                    /**
                     * @param {string} content
                     */
                    set: function(content) {
                        this.xblock._setNodeContent(content);
                    }
                }
            }
        });

        return global.xtag.register(blockName, options);
    };

}(global, xblocks));

/* xblocks/block.js end */

    /* xblocks/element.js begin */
/* global xblocks, global */
(function(global, xblocks, undefined) {
    'use strict';

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
        global.React.unmountComponentAtNode(this._node);
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

        if (nextProps.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
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

        props._uid = this._uid;

        var view = xblocks.view.get(this._name)(props, children);

        if (props.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
            this.unmount();
            this._node.innerHTML = global.React.renderComponentToStaticMarkup(view);
            this._upgradeNode();

            if (callback) {
                callback.call(this);
            }

        } else {
            this._component = global.React.renderComponent(
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
        var event = new xblocks.utils.CustomEvent('xb-created', { detail: { xblock: this } });
        this._node.dispatchEvent(event);

        xblocks.utils.lazyCall(_globalInitEvent, this._node);
    };

    /**
     * @private
     */
    XBElement.prototype._callbackRepaint = function() {
        var event = new xblocks.utils.CustomEvent('xb-repaint', { detail: { xblock: this } });
        this._node.dispatchEvent(event);

        xblocks.utils.lazyCall(_globalRepaintEvent, this._node);
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
        if (global.CustomElements) {
            global.CustomElements.upgradeAll(this._node);
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
            return null;
        }

        var element = this._node.querySelector('[data-xb-content="' + this._uid + '"]');

        if (!element) {
            element = this._node.querySelector('script[type="text/template"]');

            if (!element || element.parentNode !== this._node) {
                element = this._node.querySelector('template');

                if (element && element.parentNode === this._node) {
                    // FIXME temporarily, until the implementation of the DocumentFragment
                    var tmp = global.document.createElement('div');
                    tmp.appendChild(global.document.importNode(element.content, true));
                    element = tmp;
                }
            }
        }

        return element;
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
                contentElement.innerHTML = content;
                this._upgradeNode();
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

    /**
     * @param {array} records
     * @private
     */
    function _globalInitEvent(records) {
        global.dispatchEvent(new xblocks.utils.CustomEvent('xb-created', { detail: { records: records } }));
    }

    /**
     * @param {array} records
     * @private
     */
    function _globalRepaintEvent(records) {
        global.dispatchEvent(new xblocks.utils.CustomEvent('xb-repaint', { detail: { records: records } }));
    }

}(global, xblocks));

/* xblocks/element.js end */


}());
