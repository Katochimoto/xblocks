/* jshint -W067 */
/* jshint unused: false */
(function(global, undefined) {
    'use strict';

    if (!notUseNative() && (global.msSetImmediate || global.setImmediate)) {
        if (!global.setImmediate) {
            global.setImmediate = global.msSetImmediate;
            global.clearImmediate = global.msClearImmediate;
        }

        return;
    }

    var doc = global.document;
    var slice = Array.prototype.slice;
    var toString = Object.prototype.toString;
    var Timer = {};

    Timer.polifill = {};
    Timer.nextId = 1;
    Timer.tasks = {};
    Timer.lock = false;

    Timer.run = function(handleId) {
        if (Timer.lock) {
            global.setTimeout( Timer.wrap( Timer.run, handleId ), 0 );

        } else {
            var task = Timer.tasks[ handleId ];

            if (task) {
                Timer.lock = true;

                try {
                    task();

                } finally {
                    Timer.clear( handleId );
                    Timer.lock = false;
                }
            }
        }
    };

    Timer.wrap = function(handler) {
        var args = slice.call(arguments, 1);

        return function() {
            handler.apply(undefined, args);
        };
    };

    Timer.create = function(args) {
        Timer.tasks[ Timer.nextId ] = Timer.wrap.apply(undefined, args);
        return Timer.nextId++;
    };

    Timer.clear = function(handleId) {
        delete Timer.tasks[ handleId ];
    };

    /* polifill/messageChannel.js begin */
/* global global, Timer */

Timer.polifill.messageChannel = function() {
    var channel = new global.MessageChannel();

    channel.port1.onmessage = function(event) {
        Timer.run(Number(event.data));
    };

    return function() {
        var handleId = Timer.create(arguments);
        channel.port2.postMessage(handleId);
        return handleId;
    };
};

/* polifill/messageChannel.js end */

    /* polifill/nextTick.js begin */
/* global global, Timer */

Timer.polifill.nextTick = function() {
    return function() {
        var handleId = Timer.create(arguments);
        global.process.nextTick( Timer.wrap( Timer.run, handleId ) );
        return handleId;
    };
};

/* polifill/nextTick.js end */

    /* polifill/postMessage.js begin */
/* global global, Timer */

Timer.polifill.postMessage = function() {
    var messagePrefix = 'setImmediate$' + Math.random() + '$';

    var onGlobalMessage = function(event) {
        if (event.source === global &&
            typeof(event.data) === 'string' &&
            event.data.indexOf(messagePrefix) === 0) {

            Timer.run(Number(event.data.slice(messagePrefix.length)));
        }
    };

    if (global.addEventListener) {
        global.addEventListener('message', onGlobalMessage, false);

    } else {
        global.attachEvent('onmessage', onGlobalMessage);
    }

    return function() {
        var handleId = Timer.create(arguments);
        global.postMessage(messagePrefix + handleId, '*');
        return handleId;
    };
};

/* polifill/postMessage.js end */

    /* polifill/readyStateChange.js begin */
/* global Timer, doc */

Timer.polifill.readyStateChange = function() {
    var html = doc.documentElement;

    return function() {
        var handleId = Timer.create(arguments);
        var script = doc.createElement('script');

        script.onreadystatechange = function() {
            Timer.run(handleId);
            script.onreadystatechange = null;
            html.removeChild(script);
            script = null;
        };

        html.appendChild(script);

        return handleId;
    };
};

/* polifill/readyStateChange.js end */

    /* polifill/setTimeout.js begin */
/* global global, Timer */

Timer.polifill.setTimeout = function() {
    return function() {
        var handleId = Timer.create(arguments);
        global.setTimeout( Timer.wrap( Timer.run, handleId ), 0 );
        return handleId;
    };
};

/* polifill/setTimeout.js end */




    function canUsePostMessage() {
        if (global.postMessage && !global.importScripts) {
            var asynch = true;
            var oldOnMessage = global.onmessage;
            global.onmessage = function() {
                asynch = false;
            };
            global.postMessage('', '*');
            global.onmessage = oldOnMessage;
            return asynch;
        }
    }

    function notUseNative() {
        // @see http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/
        return (global.navigator && /Trident/.test(global.navigator.userAgent));
    }


    var polifill;

    if (notUseNative()) {
        polifill = 'setTimeout';

    // Don't get fooled by e.g. browserify environments.
    // For Node.js before 0.9
    } else if (toString.call(global.process) === '[object process]') {
        polifill = 'nextTick';

    // For non-IE10 modern browsers
    } else if (canUsePostMessage()) {
        polifill = 'postMessage';

    // For web workers, where supported
    } else if (global.MessageChannel) {
        polifill = 'messageChannel';

    // For IE 6–8
    } else if (doc && ('onreadystatechange' in doc.createElement('script'))) {
        polifill = 'readyStateChange';

    // For older browsers
    } else {
        polifill = 'setTimeout';
    }

    // If supported, we should attach to the prototype of global, since that is where setTimeout et al. live.
    var attachTo = Object.getPrototypeOf && Object.getPrototypeOf(global);
    attachTo = (attachTo && attachTo.setTimeout ? attachTo : global);

    attachTo.setImmediate = Timer.polifill[ polifill ]();
    attachTo.setImmediate.usePolifill = polifill;
    attachTo.msSetImmediate = attachTo.setImmediate;

    attachTo.clearImmediate = Timer.clear;
    attachTo.msClearImmediate = Timer.clear;

}(function() {
    return this || (1, eval)('this');
}()));
/* jshint -W067 */
/* jshint unused: false */
(function(global, undefined) {
    'use strict';

    /**
     * @namespace React
     */
    var React = global.React;

    global.xblocks = global.xblocks || {};

    /**
     * @namespace xblocks
     */
    var xblocks = global.xblocks;

    var __doc = global.document;
    var __toString = Object.prototype.toString;
    var __forEach = Array.prototype.forEach;
    var __noop = function() {};

    /* xblocks/utils.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.utils = xblocks.utils || {};

xblocks.utils.REG_TYPE_EXTRACT = /\s([a-zA-Z]+)/;
xblocks.utils.REG_PRISTINE = /^[\$_a-z][\$\w]*$/i;

xblocks.utils.SELECTOR_TMPL = 'script[type="text/x-template"][ref],template[ref]';
xblocks.utils.SELECTOR_CONTENT = 'script[type="text/x-template"]:not([ref]),template:not([ref])';

/* xblocks/utils/log.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.log = {};

xblocks.utils.log.time = function(/*element, name*/) {
    /*
    if (!element._xtimers) {
        element._xtimers = {};
    }

    if (!Array.isArray(element._xtimers[ name ])) {
        element._xtimers[ name ] = [];
    }

    element._xtimers[ name ].push(performance.now());
    */
};

/* xblocks/utils/log.js end */

/* xblocks/utils/seq.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @returns {number}
 */
xblocks.utils.seq = (function() {
    var i = 0;
    return function() {
        return ++i;
    };
}());

/* xblocks/utils/seq.js end */

/* xblocks/utils/type.js begin */
/* global xblocks, __toString */
/* jshint strict: false */

/**
 * @param {*} param
 * @returns {string}
 */
xblocks.utils.type = function(param) {
    if (param === undefined) {
        return 'undefined';
    }

    if (param === null) {
        return 'null';
    }

    var type = typeof(param);

    if (type === 'object') {
        type = __toString.call(param)
            .match(xblocks.utils.REG_TYPE_EXTRACT)[1]
            .toLowerCase();
    }

    if (type === 'number') {
        var paramStr = param.toString();
        if (paramStr === 'NaN') {
            type = 'NaN';

        } else {
            type = paramStr.indexOf('.') === -1 ? 'integer' : 'float';
        }
    }

    return type;
};

/* xblocks/utils/type.js end */

/* xblocks/utils/isPlainObject.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {*} obj
 * @returns {boolean}
 */
xblocks.utils.isPlainObject = function(obj) {
    if (xblocks.utils.type(obj) !== 'object') {
        return false;
    }

    if (obj.constructor && !obj.constructor.prototype.hasOwnProperty('isPrototypeOf')) {
        return false;
    }

    return true;
};

/* xblocks/utils/isPlainObject.js end */

/* xblocks/utils/pristine.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @param {string} methodName
 * @returns {boolean}
 */
xblocks.utils.pristine = function(methodName) {
    if (!methodName) {
        return false;
    }

    var method = global[ methodName ];

    if (!method) {
        return false;
    }

    if (!xblocks.utils.REG_PRISTINE.test(methodName)) {
        return false;
    }

    var type = typeof(method);

    if (type !== 'function' && type !== 'object') {
        return false;
    }

    var re = new RegExp("function\\s+" + methodName + "\\(\\s*\\)\\s*{\\s*\\[native code\\]\\s*}");

    if (!re.test(method)) {
        return false;
    }

    if (type === 'function') {
        if (!method.valueOf || method.valueOf() !== method) {
            return false;
        }
    }

    return true;
};

/* xblocks/utils/pristine.js end */

/* xblocks/utils/merge.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @returns {object}
 */
xblocks.utils.merge = function() {
    var options;
    var name;
    var src;
    var copy;
    var copyIsArray;
    var clone;
    var target = arguments[0] || {};
    var i = 1;
    var length = arguments.length;
    var deep = false;
    var type = xblocks.utils.type(target);

    if (type === 'boolean') {
        deep = target;
        target = arguments[i] || {};
        i++;
    }

    type = xblocks.utils.type(target);

    if (type !== 'object' && type !== 'function') {
        target = {};
    }

    if (i === length) {
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

                if (deep && copy && (xblocks.utils.isPlainObject(copy) || (copyIsArray = Array.isArray(copy)))) {
                    if (copyIsArray) {
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

/* xblocks/utils/merge.js end */

/* xblocks/utils/lazy.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @function
 * @private
 */
xblocks.utils._lazy = (function() {
    if (typeof(global.setImmediate) === 'function') {
        return global.setImmediate;

    } else {
        return function(callback) {
            return global.setTimeout(callback, 0);
        };
    }
}());

/**
 * @param {function} callback
 * @param {*} args
 * @returns {function}
 */
xblocks.utils.lazy = function(callback, args) {
    if (!callback._args) {
        callback._args = [];
    }

    callback._args.push(args);

    if (!callback._timer) {
        callback._timer = xblocks.utils._lazy(function() {
            callback._timer = 0;

            var args = callback._args;
            callback._args = [];

            callback(args);
        });
    }

    return callback;
};

/* xblocks/utils/lazy.js end */

/* xblocks/utils/equals.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {*} x
 * @param {*} y
 * @returns {boolean}
 */

xblocks.utils._equal = {
    'array': function(x, y) {
        if (x === y) {
            return true;
        }

        var i = 0;
        var l = x.length;

        if (l !== y.length) {
            return false;
        }

        for (; i < l; i++) {
            if (!xblocks.utils.equals(x[i], y[i])) {
                return false;
            }
        }

        return true;
    },

    'object': function(x, y) {
        if (x === y) {
            return true;
        }

        var i;

        for (i in x) {
            if (y.hasOwnProperty(i)) {
                if (!xblocks.utils.equals(x[i], y[i])) {
                    return false;
                }

            } else {
                return false;
            }
    	}

        for (i in y) {
            if (!x.hasOwnProperty(i)) {
                return false;
            }
        }

    	return true;
    },

    'date': function(x, y) {
        return x.getTime() === y.getTime();
    },

    'regexp': function(x, y) {
        return x.toString() === y.toString();
    },

    'function': function(x, y) {
        return x.toString() === y.toString();
    }
};

xblocks.utils.equals = function(x, y) {
    if (x === y) {
        return true;
    }

    var xType = xblocks.utils.type(x);
    var yType = xblocks.utils.type(y);

    if (xType !== yType) {
        return false;
    }

    if (xblocks.utils._equal.hasOwnProperty(xType)) {
        return xblocks.utils._equal[ xType ](x, y);
    }

    return x == y;
};

/* xblocks/utils/equals.js end */

/* xblocks/utils/propTypes.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {string} tagName
 * @returns {object}
 */
xblocks.utils.propTypes = function(tagName) {
    var view = xblocks.view.get(tagName);

    if (!view) {
        return {};
    }

    if (view.propTypes) {
        return view.propTypes;
    }

    if (view.originalSpec && view.originalSpec.propTypes) {
        return view.originalSpec.propTypes;
    }

    return {};
};

/* xblocks/utils/propTypes.js end */

/* xblocks/utils/tmpl.js begin */
/* global xblocks */
/* jshint strict: false */

(function() {

    var cache = {};

    /**
     * @param {string} str
     * @param {object} data
     * @returns {string}
     * @see http://ejohn.org/blog/javascript-micro-templating/
     */
    xblocks.utils.tmpl = function(str, data) {
        if (!cache.hasOwnProperty(str)) {
            /* jshint -W054 */
            cache[ str ] = new Function('obj',
               "var p=[],print=function(){p.push.apply(p,arguments);};" +
               "with(obj){p.push('" +
               str.replace(/[\r\t\n]/g, " ")
                   .split("<%").join("\t")
                   .replace(/((^|%>)[^\t]*)'/g, "$1\r")
                   .replace(/\t=(.*?)%>/g, "',$1,'")
                   .split("\t").join("');")
                   .split("%>").join("p.push('")
                   .split("\r").join("\\'") +
                   "');}return p.join('');");
        }

        return data ? cache[ str ](data) : cache[ str ];
    };

}());

/* xblocks/utils/tmpl.js end */


/* xblocks/utils.js end */

    /* xblocks/dom.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.dom = xblocks.dom || {};
xblocks.dom.attrs = xblocks.dom.attrs || {};

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
    'required',
    'selected',
    'xb-static'
];

/**
 * @type {object}
 */
xblocks.dom.attrs.XB_ATTRS = {
    STATIC: 'xb-static'
};

xblocks.dom.ELEMENT_PROTO = (global.HTMLElement || global.Element).prototype;

/* xblocks/dom/attrs.js begin */
/* global xblocks, React, __forEach */
/* jshint strict: false */

/**
 * @param {HTMLElement} element
 * @param {object} attrs
 * @return {object}
 */
xblocks.dom.attrs.get = function(element, attrs) {
    if (element.nodeType !== 1 || !element.hasAttributes()) {
        return attrs;
    }

    for (var attrName in attrs) {
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
 * @param {string} prop
 * @param {*} value
 * @param {function} [type]
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
 * @param {object} props
 * @param {object} [propTypes]
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

/* xblocks/dom/attrs.js end */

/* xblocks/dom/contentNode.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {HTMLElement} node
 * @returns {HTMLElement}
 */
xblocks.dom.contentNode = function(node) {
    var element;

    if (node.xuid && node.nodeType === 1 && node.hasChildNodes()) {
        element = node.querySelector('[data-xb-content="' + node.xuid + '"]');

        if (!element) {
            element = node.querySelector(xblocks.utils.SELECTOR_CONTENT);
        }
    }

    return element || node;
};

/* xblocks/dom/contentNode.js end */

/* xblocks/dom/upgrade.js begin */
/* global xblocks, global, __noop */
/* jshint strict: false */

xblocks.dom.upgrade = (function() {
    if (global.CustomElements && typeof(global.CustomElements.upgrade) === 'function') {
        return global.CustomElements.upgrade;

    } else {
        return __noop;
    }
}());

/* xblocks/dom/upgrade.js end */

/* xblocks/dom/upgradeAll.js begin */
/* global xblocks, global, __noop */
/* jshint strict: false */

xblocks.dom.upgradeAll = (function() {
    if (global.CustomElements && typeof(global.CustomElements.upgradeAll) === 'function') {
        return global.CustomElements.upgradeAll;

    } else {
        return __noop;
    }
}());

/* xblocks/dom/upgradeAll.js end */

/* xblocks/dom/cloneNode.js begin */
/* global xblocks */
/* jshint strict: false */

/**
* @param {HTMLElement} node
* @param {Boolean} deep
* @returns {NodeList}
*/
xblocks.dom.cloneNode = function(node, deep) {
    // FireFox19 cannot use native cloneNode the Node object
    return xblocks.dom.ELEMENT_PROTO.cloneNode.call(node, deep);

    /*
    try {
        // FireFox19 cannot use native cloneNode the Node object
        return xblocks.dom.ELEMENT_PROTO.cloneNode.call(node, deep);
    } catch(e) {
        // FireFox <=13
        // uncaught exception: [Exception... "Could not convert JavaScript argument"  nsresult: "0x80570009 (NS_ERROR_XPC_BAD_CONVERT_JS)"
        return node.ownerDocument.importNode(node, deep);
    }
    */
};

/* xblocks/dom/cloneNode.js end */

/* xblocks/dom/outerHTML.js begin */
/* global xblocks, global, __doc */
/* jshint strict: false */

/**
* @returns {{ get: function, set: function }}
*/
xblocks.dom.outerHTML = (function() {

    var container = __doc.createElementNS('http://www.w3.org/1999/xhtml', '_');
    var getter;
    var setter;

    if (container.hasOwnProperty('outerHTML')) {
        getter = function() {
            return this.outerHTML;
        };

        setter = function(html) {
            this.outerHTML = html;
        };

    } else {
        var serializer = global.XMLSerializer && (new global.XMLSerializer());
        var xmlns = /\sxmlns=\"[^\"]+\"/;

        if (serializer) {
            getter = function() {
                return serializer.serializeToString(this).replace(xmlns, '');
            };

        } else {
            getter = function() {
                container.appendChild(this.cloneNode(false));
                var html = container.innerHTML.replace('><', '>' + this.innerHTML + '<');
                container.innerHTML = '';
                return html;
            };
        }

        setter = function(html) {
            var node = this;
            var parent = node.parentNode;
            var child;

            if (!parent) {
                global.DOMException.code = global.DOMException.NOT_FOUND_ERR;
                throw global.DOMException;
            }

            container.innerHTML = html;

            while ((child = container.firstChild)) {
                parent.insertBefore(child, node);
            }

            parent.removeChild(node);
        };
    }

    return {
        'get': getter,
        'set': setter
    };

}());

/* xblocks/dom/outerHTML.js end */


/* xblocks/dom.js end */

    /* xblocks/event.js begin */
/* global xblocks, global, CustomEventCommon */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.event = xblocks.event || {};

/**
 * @constructor
 */
xblocks.event.Custom = (function() {
    if (xblocks.utils.pristine('CustomEvent')) {
        return global.CustomEvent;
    }

    return (function() {
        /* polyfills/CustomEventCommon.js begin */
/* global global */

var CustomEventCommon;
var doc = global.document;
var issetCustomEvent = false;

try {
    issetCustomEvent = Boolean(doc.createEvent('CustomEvent'));
} catch(e) {
    // do nothing
}

if (issetCustomEvent) {
    CustomEventCommon = function(eventName, params) {
        params = params || {};

        var bubbles = Boolean(params.bubbles);
        var cancelable = Boolean(params.cancelable);
        var evt = doc.createEvent('CustomEvent');

        evt.initCustomEvent(eventName, bubbles, cancelable, params.detail);

        return evt;
    };

} else {
    CustomEventCommon = function(eventName, params) {
        params = params || {};

        var bubbles = Boolean(params.bubbles);
        var cancelable = Boolean(params.cancelable);
        var evt = doc.createEvent('Event');

        evt.initEvent(eventName, bubbles, cancelable);
        evt.detail = params.detail;

        return evt;
    };
}

CustomEventCommon.prototype = global.Event.prototype;

/* polyfills/CustomEventCommon.js end */

        return CustomEventCommon;
    }());
}());

/**
 * @param {HTMLElement} element
 * @param {string} name
 * @param {object} params
 */
xblocks.event.dispatch = function(element, name, params) {
    element.dispatchEvent(new xblocks.event.Custom(name, params || {}));
};

/* xblocks/event.js end */

    /* xblocks/react.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * NOTE check after update React !!
 */

/**
 * @namespace
 */
xblocks.react = xblocks.react || {};

xblocks.react._idAttributeName = 'data-reactid';

xblocks.react._separator = '.';

var _containersByReactRootID = {};

/**
 * @param {HTMLElement} node
 * @returns {Boolean}
 */
xblocks.react.unmountComponentAtNode = function(node) {
    var rootId = xblocks.react.getRootID(node);

    if (React.unmountComponentAtNode(node)) {
        delete _containersByReactRootID[ rootId ];
        return true;
    }

    return false;
};

/**
 * @param {Object} nextElement
 * @param {HTMLElement} container
 * @param {Function} [callback]
 * @returns {Object}
 */
xblocks.react.render = function(nextElement, container, callback) {
    var component = React.render(nextElement, container, callback);
    _containersByReactRootID[ component._rootNodeID ] = container;
    return component;
};

/**
 * @param {String} id
 * @returns {HTMLElement}
 */
xblocks.react.findContainerForID = function(id) {
    var rootId = xblocks.react.getReactRootIDFromNodeID(id);
    return _containersByReactRootID[ rootId ];
};

/**
 * @param {HTMLElement} node
 * @returns {HTMLElement}
 */
xblocks.react.findContainerForNode = function(node) {
    var id = xblocks.react.getID(node);
    return (id && xblocks.react.findContainerForID(id));
};

/**
 * @param {HTMLElement} node
 * @returns {?String}
 */
xblocks.react.getRootID = function(node) {
    var rootElement = xblocks.react.getRootElementInContainer(node);
    return (rootElement && xblocks.react.getID(rootElement));
};

/**
 * @param {HTMLElement} node
 * @returns {?HTMLElement}
 */
xblocks.react.getRootElementInContainer = function(node) {
    if (!node) {
        return null;
    }

    if (node.nodeType === 9) {
        return node.documentElement;
    } else {
        return node.firstChild;
    }
};

/**
 * @param {HTMLElement} node
 * @returns {?String}
 */
xblocks.react.getID = function(node) {
    return (node && node.getAttribute && node.getAttribute(xblocks.react._idAttributeName) || '');
};

/**
 * @param {String} id
 * @returns {?String}
 */
xblocks.react.getReactRootIDFromNodeID = function(id) {
    if (id && id.charAt(0) === xblocks.react._separator && id.length > 1) {
        var index = id.indexOf(xblocks.react._separator, 1);
        return index > -1 ? id.substr(0, index) : id;
    }
    return null;
};

/* xblocks/react.js end */

    /* xblocks/tag.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.tag = global.xtag;

/* xblocks/tag.js end */

    /* xblocks/view.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * @module xblocks.view
 */
xblocks.view = {};

var _viewComponentsFactory = {};

var _viewCommon = {
    propTypes: {
        '_uid': React.PropTypes.node,
        '_container': React.PropTypes.any,  // Bad way ;(
        'children': React.PropTypes.node,
        'xb-static': React.PropTypes.bool
    },

    template: function(ref, props) {
        var xtmpl = this.props._container && this.props._container.xtmpl;

        if (typeof(xtmpl) === 'object' && xtmpl !== null && xtmpl.hasOwnProperty(ref)) {
            props = props || {};
            props.dangerouslySetInnerHTML = {
                '__html': this._templatePrepare(xtmpl[ref])
            };

            return React.DOM.div(props);
        }

        return null;
    },

    container: function() {
        return this.props._container;
    }
};

var _viewCommonUser = {
    _templatePrepare: function(tmplString) {
        return tmplString;
    }
};

/**
 * @param {object} component
 */
xblocks.view.create = function(component) {
    component = Array.isArray(component) ? component : [ component ];
    component.unshift(true, {}, _viewCommonUser);
    component.push(_viewCommon);

    return React.createClass(xblocks.utils.merge.apply({}, component));
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

    React.DOM[ blockName ] = xblocks.view.create(component);
    _viewComponentsFactory[ blockName ] = React.createFactory( React.DOM[ blockName ] );
    return React.DOM[ blockName ];
};

/**
 * @param {string} blockName
 * @returns {Function}
 */
xblocks.view.get = function(blockName) {
    return React.DOM[ blockName ];
};

/**
* @param {string} blockName
* @returns {Function}
*/
xblocks.view.getFactory = function(blockName) {
    return _viewComponentsFactory[ blockName ];
};

/* xblocks/view.js end */

    /* xblocks/block.js begin */
/* global xblocks, __forEach */
/* jshint strict: false */

var _blockStatic = {
    init: function(element) {
        if (!element.xtagName) {
            element.xtagName = element.tagName.toLowerCase();
            element.xtmpl = {};
            element.xuid = xblocks.utils.seq();
            element.xprops = xblocks.utils.propTypes(element.xtagName);
            element.xinserted = false;
            return true;
        }

        return false;
    },

    tmplCompile: function(tmplElement) {
        this.xtmpl[ tmplElement.getAttribute('ref') ] = tmplElement.innerHTML;
    },

    create: function(element) {
        if (element.hasChildNodes()) {
            __forEach.call(
                element.querySelectorAll(xblocks.utils.SELECTOR_TMPL),
                _blockStatic.tmplCompile,
                element
            );
        }

        element.xblock = xblocks.element.create(element);
    },

    createLazy: function(elements) {
        elements.forEach(_blockStatic.create);
    }
};

var _blockCommon = {
    lifecycle: {
        created: function() {
            xblocks.utils.log.time(this, 'xb_init');
            xblocks.utils.log.time(this, 'dom_inserted');

            _blockStatic.init(this);
        },

        inserted: function() {
            if (this.xinserted) {
                return;
            }

            _blockStatic.init(this);

            this.xinserted = true;

            var isScriptContent = Boolean(this.querySelector('script'));

            // asynchronous read content
            // <xb-test><script>...</script><div>not found</div></xb-test>
            if (isScriptContent) {
                xblocks.utils.lazy(_blockStatic.createLazy, this);

            } else {
                _blockStatic.create(this);
            }

            xblocks.utils.log.time(this, 'dom_inserted');
        },

        removed: function() {
            this.xinserted = false;

            // replace initial content after destroy react component
            // fix:
            // element.parentNode.removeChild(element);
            // document.body.appendChild(element);
            if (this.xblock) {
                var content = this.content;
                this.xblock.destroy();
                this.xblock = undefined;
                this.content = content;
            }
        },

        attributeChanged: function(attrName, oldValue, newValue) {
            // removeAttribute('xb-static')
            if (attrName === xblocks.dom.attrs.XB_ATTRS.STATIC &&
                newValue === null &&
                this.xblock &&
                !this.mounted) {

                this.xblock.repaint();
            }
        }
    },

    accessors: {
        // check mounted react
        mounted: {
            get: function() {
                return Boolean(this.xblock && this.xblock.isMounted());
            }
        },

        content: {
            get: function() {
                if (this.mounted) {
                    return this.xblock.getMountedContent();
                }

                return xblocks.dom.contentNode(this).innerHTML;
            },

            set: function(content) {
                if (this.mounted) {
                    this.xblock.setMountedContent(content);

                } else {
                    xblocks.dom.contentNode(this).innerHTML = content;
                    this.upgrade();
                }
            }
        },

        // getting object attributes
        attrs: {
            get: function() {
                return xblocks.dom.attrs.toObject(this);
            }
        },

        state: {
            get: function() {
                var prop;
                var props = xblocks.dom.attrs.toObject(this);
                var xprops = this.xprops;
                var eprops = xblocks.tag.tags[ this.xtagName ].accessors;
                var common = _blockCommon.accessors;

                for (prop in eprops) {
                    if (xprops.hasOwnProperty(prop) &&
                        eprops.hasOwnProperty(prop) &&
                        !common.hasOwnProperty(prop)) {

                        props[ prop ] = this[ prop ];
                    }
                }

                xblocks.dom.attrs.typeConversion(props, xprops);
                return props;
            }
        },

        outerHTML: xblocks.dom.outerHTML
    },

    methods: {
        upgrade: function() {
            xblocks.dom.upgradeAll(this);
        },

        cloneNode: function(deep) {
            // not to clone the contents
            var node = xblocks.dom.cloneNode(this, false);
            xblocks.dom.upgrade(node);

            node.xtmpl = this.xtmpl;
            node.xinserted = false;

            if (deep) {
                node.content = this.content;
            }

            //???
            //if ('checked' in this) clone.checked = this.checked;

            return node;
        }
    }
};

/**
 * @param {string} blockName
 * @param {?object} options
 * @returns {HTMLElement}
 */
xblocks.create = function(blockName, options) {
    options = Array.isArray(options) ? options : [ options ];
    options.unshift(true, {});
    options.push(_blockCommon);

    // error when merging prototype in FireFox <=19
    var proto;
    var o;
    var i = 2;
    var l = options.length;

    for (; i < l; i++) {
        o = options[ i ];

        if (xblocks.utils.isPlainObject(o)) {
            if (!proto && o.prototype) {
                proto = o.prototype;
            }

            delete o.prototype;
        }
    }

    options = xblocks.utils.merge.apply({}, options);

    if (proto) {
        options.prototype = proto;
    }

    return xblocks.tag.register(blockName, options);
};

/* xblocks/block.js end */

    /* xblocks/element.js begin */
/* global xblocks, global */
/* jshint strict: false */

var _elementStatic = {
    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    checkNodeChange: function(record) {
        return (record.type === 'childList');
    },

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    checkAttributesChange: function(record) {
        return (record.type === 'attributes');
    },

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    filterAttributesRemove: function(record) {
        return (record.type === 'attributes' && !this._node.hasAttribute(record.attributeName));
    },

    /**
     * @param {MutationRecord} record
     * @returns {string}
     * @private
     */
    mapAttributesName: function(record) {
        return record.attributeName;
    },

    /**
     * @param {array} records
     * @private
     */
    globalInitEvent: function(records) {
        xblocks.event.dispatch(global, 'xb-created', { detail: { records: records } });
    },

    /**
     * @param {array} records
     * @private
     */
    globalRepaintEvent: function(records) {
        xblocks.event.dispatch(global, 'xb-repaint', { detail: { records: records } });
    }

    /**
     * @param {array} records
     * @private
     */
    //globalUpdateEvent: function(records) {
    //    xblocks.event.dispatch(global, 'xb-update', { detail: { records: records } });
    //}
};

/**
 * @param {HTMLElement} node
 * @constructor
 */
xblocks.element = function(node) {
    node.xblock = this;
    this._node = node;
    this._init(node.state, node.content, this._callbackInit);
};

/**
 * @param {HTMLElement} node
 * @returns {xblocks.element}
 */
xblocks.element.create = function(node) {
    return new xblocks.element(node);
};

/**
 * @type {HTMLElement}
 * @private
 */
xblocks.element.prototype._node = null;

/**
 * @type {Constructor}
 * @private
 */
xblocks.element.prototype._component = null;

/**
 * @type {MutationObserver}
 * @private
 */
xblocks.element.prototype._observer = null;

/**
 * Unmounts a component and removes it from the DOM
 */
xblocks.element.prototype.destroy = function() {
    xblocks.react.unmountComponentAtNode(this._node);
    this.unmount();
};

/**
 * Unmounts a component
 */
xblocks.element.prototype.unmount = function() {
    if (this._observer) {
        this._observer.disconnect();
    }

    if (this.isMounted()) {
        this._component.unmountComponent();
    }

    this._component = null;
};

/**
 * @param {object} [props]
 * @param {Array} [removeProps]
 * @param {function} [callback]
 */
xblocks.element.prototype.update = function(props, removeProps, callback) {
    if (!this.isMounted()) {
        return;
    }

    var nextProps = this._node.state;
    var action = 'setProps';

    if (typeof(props) === 'object') {
        var prop;
        for (prop in props) {
            if (props.hasOwnProperty(prop)) {
                nextProps[ prop ] = props[ prop ];
            }
        }
    }

    // merge of new and current properties
    // and the exclusion of remote properties
    if (Array.isArray(removeProps) && removeProps.length) {
        action = 'replaceProps';
        nextProps = xblocks.utils.merge(true, {}, this.getMountedProps(), nextProps);

        var l = removeProps.length;
        while (l--) {
            if (nextProps.hasOwnProperty(removeProps[l])) {
                delete nextProps[ removeProps[l] ];
            }
        }
    }

    if (nextProps.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
        this.repaint(callback);

    } else {
        xblocks.dom.attrs.typeConversion(nextProps, this._node.xprops);
        this._component[ action ](nextProps, this._callbackUpdate.bind(this, callback));
    }
};

/**
 * @param {function} [callback]
 */
xblocks.element.prototype.repaint = function(callback) {
    var children = this._node.content;
    var props = this._node.state;
    var mprops = this.getMountedProps() || {};
    var prop;

    for (prop in mprops) {
        if (mprops.hasOwnProperty(prop)) {
            props[ prop ] = mprops[ prop ];
        }
    }

    this.destroy();
    this._init(props, children, this._callbackRepaint.bind(this, callback));
};

/**
 *
 * @returns {boolean}
 */
xblocks.element.prototype.isMounted = function() {
    return Boolean(this._component && this._component.isMounted());
};

xblocks.element.prototype.setMountedContent = function(content) {
    if (this.isMounted()) {
        this.update({ 'children': content });
    }
};

xblocks.element.prototype.getMountedContent = function() {
    if (this.isMounted()) {
        return this._component.props.children;
    }
};

/**
 * @returns {?object}
 */
xblocks.element.prototype.getMountedProps = function() {
    return this.isMounted() ? this._component.props : null;
};

/**
 * @param {object} [props]
 * @param {string} [children]
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._init = function(props, children, callback) {
    if (this.isMounted()) {
        return;
    }

    props._uid = this._node.xuid;
    props._container = this._node;
    xblocks.dom.attrs.typeConversion(props, this._node.xprops);

    var proxyConstructor = xblocks.view.getFactory(this._node.xtagName)(props, children);

    if (props.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
        this.unmount();
        xblocks.utils.log.time(this._node, 'react_render');
        this._node.innerHTML = React.renderToStaticMarkup(proxyConstructor);
        xblocks.utils.log.time(this._node, 'react_render');
        this._node.upgrade();

        if (callback) {
            callback.call(this);
        }

    } else {
        xblocks.utils.log.time(this._node, 'react_render');
        var that = this;
        this._component = xblocks.react.render(
            proxyConstructor,
            this._node,
            function() {
                xblocks.utils.log.time(that._node, 'react_render');
                that._component = this;
                that._callbackRender(callback);
            }
        );
    }
};

/**
 * @private
 */
xblocks.element.prototype._callbackInit = function() {
    xblocks.event.dispatch(this._node, 'xb-created');
    xblocks.utils.lazy(_elementStatic.globalInitEvent, this._node);
    xblocks.utils.log.time(this._node, 'xb_init');
};

/**
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._callbackRepaint = function(callback) {
    xblocks.event.dispatch(this._node, 'xb-repaint');
    xblocks.utils.lazy(_elementStatic.globalRepaintEvent, this._node);

    if (callback) {
        callback.call(this);
    }
};

/**
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._callbackRender = function(callback) {
    this._node.upgrade();

    if (!this._observer) {
        this._observer = new global.MutationObserver(this._callbackMutation.bind(this));
    }

    this._observer.observe(this._node, {
        attributes: true,
        childList: true,
        characterData: true,
        subtree: false,
        attributeOldValue: false,
        characterDataOldValue: false,
        attributeFilter: Object.keys(this._node.xprops)
    });

    if (callback) {
        callback.call(this);
    }
};

/**
 * @param {MutationRecord[]} records
 * @private
 */
xblocks.element.prototype._callbackMutation = function(records) {
    if (!this.isMounted()) {
        return;
    }

    // full repaint
    if (records.some(_elementStatic.checkNodeChange)) {
        this.repaint();

    } else if (records.some(_elementStatic.checkAttributesChange)) {

        var removeAttrs = records
            .filter(_elementStatic.filterAttributesRemove, this)
            .map(_elementStatic.mapAttributesName);

        this.update(null, removeAttrs);
    }
};

/**
 * @param {function} [callback]
 * @private
 */
xblocks.element.prototype._callbackUpdate = function(callback) {
    this._node.upgrade();

    xblocks.event.dispatch(this._node, 'xb-update');
    //xblocks.utils.lazy(_elementStatic.globalUpdateEvent, this._node);

    if (callback) {
        callback.call(this);
    }
};

/* xblocks/element.js end */


}(function() {
    return this || (1, eval)('this');
}()));
