/* ../node_modules/xblocks-utils/xblocks-utils.js begin */
/* jshint -W067 */
/* jshint unused: false */

/* polyfills.js begin */
/* polyfills/assign.js begin */
/* jshint -W067 */
/* jshint unused: false */
(function(global, undefined) {

    if (typeof(Object.assign) === 'function') {
        return;
    }

    Object.defineProperty(Object, 'assign', {
        'enumerable': false,
        'configurable': true,
        'writable': true,
        'value': function(target) {
            'use strict';

            if (target === undefined || target === null) {
                throw new TypeError('Cannot convert first argument to object');
            }

            var to = Object(target);
            var i = 1;
            var l = arguments.length;

            for (; i < l; i++) {
                var nextSource = arguments[ i ];

                if (nextSource === undefined || nextSource === null) {
                    continue;
                }

                var keysArray = Object.keys(Object(nextSource));
                var nextIndex = 0;
                var len = keysArray.length;

                for (; nextIndex < len; nextIndex++) {
                    var nextKey = keysArray[  nextIndex ];
                    var desc = Object.getOwnPropertyDescriptor(nextSource, nextKey);

                    if (desc !== undefined && desc.enumerable) {
                        to[ nextKey ] = nextSource[ nextKey ];
                    }
                }
            }

            return to;
        }
    });

}(function() {
    return this || (1, eval)('this');
}()));

/* polyfills/assign.js end */

/* polyfills/requestAnimationFrame.js begin */
/* jshint -W067 */
(function(global) {
    'use strict';

    var lastTime = 0;
    var vendors = [ 'ms', 'moz', 'webkit', 'o' ];
    var vendor;

    for (var x = 0; x < 4 && !global.requestAnimationFrame; ++x) {
        vendor = vendors[ x ];
        global.requestAnimationFrame = global[ vendor + 'RequestAnimationFrame' ];
        global.cancelAnimationFrame = global[ vendor + 'CancelAnimationFrame' ] ||
            global[ vendor + 'CancelRequestAnimationFrame' ];
    }

    if (!global.requestAnimationFrame) {
        global.requestAnimationFrame = function(callback) {
            var currTime = Date.now();
            var timeToCall = Math.max(0, 16 - (currTime - lastTime));
            var id = global.setTimeout(function() {
                callback(currTime + timeToCall);
            }, timeToCall);
            lastTime = currTime + timeToCall;
            return id;
        };
    }

    if (!global.cancelAnimationFrame) {
        global.cancelAnimationFrame = function(id) {
            global.clearTimeout(id);
        };
    }

}(function() {
    return this || (1, eval)('this');
}()));

/* polyfills/requestAnimationFrame.js end */


/* polyfills.js end */


(function(global, undefined) {
    'use strict';

    global.xblocks = global.xblocks || {};

    /**
     * @namespace xblocks
     */
    var xblocks = global.xblocks;

    xblocks.utils = xblocks.utils || {};
    xblocks.dom = xblocks.dom || {};
    xblocks.event = xblocks.event || {};

    var __doc = global.document;
    var __html = __doc.documentElement;
    var __indexOf = Array.prototype.indexOf;
    var __pop = Array.prototype.pop;
    var __slice = Array.prototype.slice;
    var __hasOwnProperty = Object.prototype.hasOwnProperty;

    /* xblocks/utils.js begin */
// Time
/* xblocks/utils/debounce.js begin */
/* global xblocks, global */
/* jshint strict: false */

xblocks.utils.debounce = function(callback, wait, options) {
    var args;
    var maxTimeoutId;
    var result;
    var stamp;
    var thisArg;
    var timeoutId;
    var trailingCall;
    var lastCalled = 0;
    var maxWait = false;
    var trailing = false;
    var leading = true;

    if (typeof(callback) !== 'function') {
        throw new TypeError('Expected a function');
    }

    wait = wait < 0 ? 0 : Number(wait || 250);

    if (options === true) {
        leading = true;
        trailing = false;

    } else if (xblocks.utils.isPlainObject(options)) {
        leading = options.leading;
        maxWait = options.hasOwnProperty('maxWait') && Math.max(Number(options.maxWait || 0), wait);
        trailing = options.hasOwnProperty('trailing') ? Boolean(options.trailing) : trailing;
    }

    function cancel() {
        if (timeoutId) {
            global.clearTimeout(timeoutId);
        }

        if (maxTimeoutId) {
            global.clearTimeout(maxTimeoutId);
        }

        maxTimeoutId = timeoutId = trailingCall = undefined;
    }

    function delayed() {
        var remaining = wait - (Date.now() - stamp);

        if (remaining <= 0 || remaining > wait) {
            if (maxTimeoutId) {
                global.clearTimeout(maxTimeoutId);
            }

            var isCalled = trailingCall;
            maxTimeoutId = timeoutId = trailingCall = undefined;

            if (isCalled) {
                lastCalled = Date.now();
                result = callback.apply(thisArg, args);

                if (!timeoutId && !maxTimeoutId) {
                    args = thisArg = null;
                }
            }

        } else {
            timeoutId = global.setTimeout(delayed, remaining);
        }
    }

    function maxDelayed() {
        if (timeoutId) {
            global.clearTimeout(timeoutId);
        }

        maxTimeoutId = timeoutId = trailingCall = undefined;

        if (trailing || (maxWait !== wait)) {
            lastCalled = Date.now();
            result = callback.apply(thisArg, args);

            if (!timeoutId && !maxTimeoutId) {
                args = thisArg = null;
            }
        }
    }

    function debounced() {
        args = arguments;
        stamp = Date.now();
        thisArg = this;
        trailingCall = trailing && (timeoutId || !leading);

        var leadingCall;
        var isCalled;

        if (maxWait === false) {
            leadingCall = leading && !timeoutId;

        } else {
            if (!maxTimeoutId && !leading) {
                lastCalled = stamp;
            }

            var remaining = maxWait - (stamp - lastCalled);
            isCalled = remaining <= 0 || remaining > maxWait;

            if (isCalled) {
                if (maxTimeoutId) {
                    maxTimeoutId = global.clearTimeout(maxTimeoutId);
                }

                lastCalled = stamp;
                result = callback.apply(thisArg, args);

            } else if (!maxTimeoutId) {
                maxTimeoutId = global.setTimeout(maxDelayed, remaining);
            }
        }

        if (isCalled && timeoutId) {
            timeoutId = global.clearTimeout(timeoutId);

        } else if (!timeoutId && wait !== maxWait) {
            timeoutId = global.setTimeout(delayed, wait);
        }

        if (leadingCall) {
            isCalled = true;
            result = callback.apply(thisArg, args);
        }

        if (isCalled && !timeoutId && !maxTimeoutId) {
            args = thisArg = null;
        }

        return result;
    }

    debounced.cancel = cancel;
    return debounced;
};

/**
 * @example
 * "scroll:debounce(100,true,false)": function() {}
 *
 * @type {Object}
 */
xblocks.tag.pseudos.debounce = {
    onCompiled: function(listener, pseudo) {
        var len = pseudo.arguments.length;
        var wait = Number(pseudo.arguments[0]);
        var leading = true;
        var trailing = false;

        if (len > 1) {
            leading = (pseudo.arguments[1] === 'true');
        }

        if (len > 2) {
            trailing = (pseudo.arguments[2] === 'true');
        }

        return xblocks.utils.debounce(listener, wait, {
            'leading': leading,
            'trailing': trailing
        });
    }
};

/* xblocks/utils/debounce.js end */

/* xblocks/utils/throttle.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.throttle = function(callback, wait, options) {
    wait = Number(wait || 250);
    var leading = true;
    var trailing = false;

    if (typeof(callback) !== 'function') {
        throw new TypeError('Expected a function');
    }

    if (options === false) {
        leading = false;

    } else if (xblocks.utils.isPlainObject(options)) {
        leading = options.hasOwnProperty('leading') ? Boolean(options.leading) : leading;
        trailing = options.hasOwnProperty('trailing') ? Boolean(options.trailing) : trailing;
    }

    var debounceOptions = {
        'leading': leading,
        'maxWait': Number(wait),
        'trailing': trailing
    };

    return xblocks.utils.debounce(callback, wait, debounceOptions);
};

/**
 * @example
 * "scroll:throttle(100,true,false)": function() {}
 *
 * @type {Object}
 */
xblocks.tag.pseudos.throttle = {
    onCompiled: function(listener, pseudo) {
        var len = pseudo.arguments.length;
        var wait = Number(pseudo.arguments[0]);
        var leading = true;
        var trailing = false;

        if (len > 1) {
            leading = (pseudo.arguments[1] === 'true');
        }

        if (len > 2) {
            trailing = (pseudo.arguments[2] === 'true');
        }

        return xblocks.utils.throttle(listener, wait, {
            'leading': leading,
            'trailing': trailing
        });
    }
};

/* xblocks/utils/throttle.js end */

/* xblocks/utils/microtask.js begin */
/* global global, xblocks, __doc */
/* jshint strict: false */

xblocks.utils.microtask = (function() {
    var iterations = 0;
    var callbacks = [];
    var twiddle = __doc.createTextNode('');
    var Mutation = global.MutationObserver || global.JsMutationObserver;

    (new Mutation(function() {
        while (callbacks.length) {
            callbacks.shift()();
        }

    })).observe(twiddle, {
        'characterData': true
    });

    return function(callback) {
        twiddle.textContent = iterations++;
        callbacks.push(callback);
    };

}());

/* xblocks/utils/microtask.js end */

/* xblocks/utils/throttleAnimationFrame.js begin */
/* global xblocks, global */
/* jshint strict: false */

xblocks.utils.throttleAnimationFrame = function(callback, context) {
    var throttle = 0;
    var animationCallback = function() {
        throttle = 0;
    };

    return function() {
        if (throttle) {
            return;
        }

        throttle = global.requestAnimationFrame(animationCallback);

        callback.apply(context || this, arguments);
    };
};

/* xblocks/utils/throttleAnimationFrame.js end */


// Traverse
/* xblocks/utils/filterObject.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {object} from
 * @param {function} [callback]
 * @returns {object}
 */
xblocks.utils.filterObject = function(from, callback) {
    var obj = {};
    var props = {};
    var fill = false;

    Object.keys(from).forEach(function(property) {
        var descr = Object.getOwnPropertyDescriptor(from, property);
        if (callback && callback(property, descr)) {
            props[ property ] = descr;
            fill = true;
        }
    });

    if (fill) {
        Object.defineProperties(obj, props);
    }

    return obj;
};

/* xblocks/utils/filterObject.js end */

/* xblocks/utils/mapObject.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {object} from
 * @param {function} [callback]
 * @returns {object}
 */
xblocks.utils.mapObject = function(from, callback) {
    var obj = {};
    var props = {};
    var fill = false;

    Object.keys(from).forEach(function(property) {
        var descr = Object.getOwnPropertyDescriptor(from, property);
        var map = callback && callback(property, descr);
        if (xblocks.utils.type(map) === 'object') {
            props[ map.name ] = map.descr;
            fill = true;
        }
    });

    if (fill) {
        Object.defineProperties(obj, props);
    }

    return obj;
};

/* xblocks/utils/mapObject.js end */


// Checkers
/* xblocks/utils/isEmptyObject.js begin */
/* global xblocks, __hasOwnProperty */
/* jshint strict: false */

/**
 * @param {*} obj
 * @returns {boolean}
 */
xblocks.utils.isEmptyObject = function(obj) {
    if (xblocks.utils.type(obj) === 'object') {
        for (var key in obj) {
            if (__hasOwnProperty.call(obj, key)) {
                return false;
            }
        }
    }

    return true;
};

/* xblocks/utils/isEmptyObject.js end */

/* xblocks/utils/isWindow.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {*} obj
 * @returns {boolean}
 */
xblocks.utils.isWindow = function(obj) {
    return (obj !== null && obj === obj.window);
};

/* xblocks/utils/isWindow.js end */


// Other
/* xblocks/utils/uid.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * Generate unique string
 * @returns {string}
 */
xblocks.utils.uid = function() {
    return global.Math.floor((1 + global.Math.random()) * 0x10000000).toString(36);
};

/* xblocks/utils/uid.js end */

/* xblocks/utils/table.js begin */
/* global __pop, __slice */

xblocks.utils.Table = function(node, options) {
    this._options = xblocks.utils.merge({
        'col': 'xb-menu:not([disabled])',
        'row': 'xb-menuitem:not([disabled])',
        'colLoop': false,
        'rowLoop': false
    }, options);

    this._node = node;
    this._item = undefined;
    this._originalEvent = undefined;

    this._onKeydown = this._onKeydown.bind(this);

    this._onMouseover = xblocks.event.delegate(
        this._options.row,
        this._onMouseover.bind(this)
    );

    this._onMouseout = xblocks.event.delegate(
        this._options.row,
        this._onMouseout.bind(this)
    );

    this._onMousemove = xblocks.utils.throttle(
        xblocks.event.delegate(
            this._options.row,
            this._onMouseAction.bind(this)
        )
    );

    this._onClick = xblocks.event.filterClick('left',
        xblocks.event.delegate(
            this._options.row,
            this._onMouseAction.bind(this)
        )
    );

    this._bind();
};

xblocks.utils.Table.prototype = {
    EVENT_BLUR: 'xb-blur',
    EVENT_FOCUS: 'xb-focus',

    destroy: function() {
        this._unbind();
        this._node = undefined;
        this._originalEvent = undefined;

        if (this._item) {
            xblocks.event.dispatch(this._item, this.EVENT_BLUR);
            // "_item" must live for the proper event handling
            //this._item = undefined;
        }
    },

    getItem: function() {
        return this._item;
    },

    blurItem: function() {
        if (this._item) {
            xblocks.event.dispatch(this._item, this.EVENT_BLUR);
            this._item = undefined;
        }
    },

    _bind: function() {
        this._node.addEventListener('keydown', this._onKeydown, false);
        this._node.addEventListener('click', this._onClick, false);
        this._node.addEventListener('mouseover', this._onMouseover, false);
        this._node.addEventListener('mouseout', this._onMouseout, false);
        this._node.addEventListener('mousemove', this._onMousemove, false);
    },

    _unbind: function() {
        this._node.removeEventListener('keydown', this._onKeydown, false);
        this._node.removeEventListener('click', this._onClick, false);
        this._node.removeEventListener('mouseover', this._onMouseover, false);
        this._node.removeEventListener('mouseout', this._onMouseout, false);
        this._node.removeEventListener('mousemove', this._onMousemove, false);
    },

    _col: function(item) {
        if (!item) {
            return;
        }

        var col = item;
        while ((col = col.parentNode)) {
            if (xblocks.dom.matchesSelector(col, this._options.col)) {
                return col;
            }

            if (col === this._node) {
                break;
            }
        }
    },

    _colFirst: function() {
        return this._node.querySelector(this._options.col) || this._node;
    },

    _colLast: function() {
        return __pop.call(__slice.call(this._node.querySelectorAll(this._options.col))) || this._node;
    },

    _colMatchIterate: function(data, element) {
        if (xblocks.dom.matchesSelector(element, this._options.col)) {
            data.col = element;
            return false;
        }
    },

    _colNext: function(col) {
        var data = {};
        xblocks.dom.eachAfter(col, this._colMatchIterate.bind(this, data), this._node, false);
        return data.col;
    },

    _colPrev: function(col) {
        var data = {};
        xblocks.dom.eachBefore(col, this._colMatchIterate.bind(this, data), this._node, false);
        return data.col;
    },

    _rowFirst: function(col) {
        return col.querySelector(this._options.row);
    },

    _rowLast: function(col) {
        return __pop.call(__slice.call(col.querySelectorAll(this._options.row)));
    },

    _rowMatchIterate: function(data, element) {
        if (xblocks.dom.matchesSelector(element, this._options.row)) {
            data.row = element;
            return false;
        }
    },

    _rowNext: function(row) {
        var data = {};
        xblocks.dom.eachAfter(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
        return data.row;
    },

    _rowPrev: function(row) {
        var data = {};
        xblocks.dom.eachBefore(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
        return data.row;
    },

    _rowIndex: function(row) {
        return xblocks.dom.index(this._options.row, row, this._col(row));
    },

    _rowByIndex: function(col, idx) {
        return col.querySelectorAll(this._options.row)[idx];
    },

    _focus: function(element) {
        if (element === this._item) {
            return;
        }

        if (this._item) {
            xblocks.event.dispatch(this._item, this.EVENT_BLUR, {
                'detail': { 'originalEvent': this._originalEvent }
            });
        }

        this._item = element;
        xblocks.event.dispatch(this._item, this.EVENT_FOCUS, {
            'detail': { 'originalEvent': this._originalEvent }
        });
    },

    _onKeydown: function(event) {
        if (event.altKey || event.metaKey || event.shiftKey) {
            return;
        }

        var action;

        switch (event.keyCode) {
            case 37: // ArrowLeft
                action = '_onArrowLeft';
                break;
            case 38: // ArrowUp
                action = '_onArrowUp';
                break;
            case 39: // ArrowRight
                action = '_onArrowRight';
                break;
            case 40: // ArrowDown
                action = '_onArrowDown';
                break;
        }

        if (!action) {
            return;
        }

        event.preventDefault();
        event.stopPropagation();
        this._originalEvent = event;

        this[ action ]();
    },

    _onMouseAction: function(event) {
        if (!this._item || this._item !== event.delegateElement) {
            this._originalEvent = event;
            this._focus(event.delegateElement);
        }
    },

    _onMouseover: function(event) {
        xblocks.event.filterMouseEnter(event.delegateElement, event, this._onMouseAction.bind(this));
    },

    _onMouseout: function(event) {
        xblocks.event.filterMouseLeave(event.delegateElement, event, this._onMouseAction.bind(this));
    },

    _onArrowLeft: function() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            var idx = this._rowIndex(this._item);
            var col = this._colPrev(this._col(this._item));

            if (!col) {
                col = this._colLast();
                if (!this._options.colLoop) {
                    idx--;
                }
            }

            var row = this._rowByIndex(col, idx);

            if (!row) {
                row = this._rowLast(col);
            }

            this._focus(row);
        }
    },

    _onArrowRight: function() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            var idx = this._rowIndex(this._item);
            var col = this._colNext(this._col(this._item));

            if (!col) {
                col = this._colFirst();
                if (!this._options.colLoop) {
                    idx++;
                }
            }

            var row = this._rowByIndex(col, idx);

            if (!row) {
                row = this._rowFirst(col);
            }

            this._focus(row);
        }
    },

    _onArrowUp: function() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            var row = this._rowPrev(this._item);

            if (!row) {
                var col;

                if (this._options.rowLoop) {
                    col = this._col(this._item);

                } else {
                    col = this._colPrev(this._col(this._item)) || this._colLast();
                }

                row = this._rowLast(col);
            }

            this._focus(row);
        }
    },

    _onArrowDown: function() {
        if (!this._item) {
            this._focus(this._rowFirst(this._colFirst()));

        } else {
            var row = this._rowNext(this._item);

            if (!row) {
                var col;

                if (this._options.rowLoop) {
                    col = this._col(this._item);

                } else {
                    col = this._colNext(this._col(this._item)) || this._colFirst();
                }

                row = this._rowFirst(col);
            }

            this._focus(row);
        }
    }
};

/* xblocks/utils/table.js end */

/* xblocks/utils/lazyFocus.js begin */
/* global xblocks, global */
/* jshint strict: false */

xblocks.utils.lazyFocus = function(node) {
    global.setImmediate(node.focus.bind(node));
};

/* xblocks/utils/lazyFocus.js end */


/* xblocks/utils.js end */

    /* xblocks/dom.js begin */
/* xblocks/dom/index.js begin */
/* global xblocks, __indexOf, __doc */
/* jshint strict: false */

xblocks.dom.index = function(selector, element, context) {
    return __indexOf.call((context || __doc).querySelectorAll(selector), element);
};

/* xblocks/dom/index.js end */

/* xblocks/dom/isParent.js begin */
/* global xblocks, __html */
/* jshint strict: false */

xblocks.dom.isParent = (function() {

    if ('compareDocumentPosition' in __html) {
        return function(container, element) {
            /*jshint -W016 */
            return (container.compareDocumentPosition(element) & 16) == 16;
        };

    } else if ('contains' in __html) {
        return function(container, element) {
            return container !== element && container.contains(element);
        };

    } else {
        return function(container, element) {
            while ((element = element.parentNode)) {
                if (element === container) {
                    return true;
                }
            }

            return false;
        };
    }

}());

/* xblocks/dom/isParent.js end */

/* xblocks/dom/matchesSelector.js begin */
/* global xblocks, __indexOf, global */
/* jshint strict: false */

xblocks.dom.matchesSelector = (function() {
    var proto = global.Element.prototype;
    var matches = proto.matches ||
        proto.matchesSelector ||
        proto.webkitMatchesSelector ||
        proto.mozMatchesSelector ||
        proto.msMatchesSelector ||
        proto.oMatchesSelector ||
        function(selector) {
            return (__indexOf.call((this.parentNode || this.ownerDocument).querySelectorAll(selector), this) !== -1);
        };

    return function(element, selector) {
        return (element.nodeType === 1 ? matches.call(element, selector) : false);
    };

}());

/* xblocks/dom/matchesSelector.js end */

/* xblocks/dom/eachInnerFollowing.js begin */
/**
 * Проход по всем потомкам в прямом порядке (от певой до последней)
 */
xblocks.dom.eachInnerFollowing = function(node, callback) {
    var stack = [ node ];
    var item;
    var cbcall;
    var childsLength;

    while ((item = stack.pop())) {
        cbcall = callback && callback(item, stack);

        if (typeof(cbcall) !== 'undefined' && !cbcall) {
            return false;

        } else if (cbcall === 'next') {
            continue;
        }

        if (item.nodeType !== 1) {
            continue;
        }

        if (!item.hasChildNodes()) {
            continue;
        }

        childsLength = item.childNodes.length;

        while (childsLength--) {
            stack.push(item.childNodes[childsLength]);
        }
    }

    return true;
};

/* xblocks/dom/eachInnerFollowing.js end */

/* xblocks/dom/eachInnerPrevious.js begin */
/**
 * Проход по всем потомкам в обратном порядке (от последней до первой)
 */
xblocks.dom.eachInnerPrevious = function(node, callback) {
    var stack = [ node ];
    var item;
    var cbcall;
    var i;
    var childsLength;

    while ((item = stack.pop())) {
        cbcall = callback && callback(item, stack);

        if (typeof(cbcall) !== 'undefined' && !cbcall) {
            return false;

        } else if (cbcall === 'next') {
            continue;
        }

        if (item.nodeType !== 1) {
            continue;
        }

        if (!item.hasChildNodes()) {
            continue;
        }

        childsLength = item.childNodes.length;
        i = 0;

        for (; i < childsLength; i++) {
            stack.push(item.childNodes[i]);
        }
    }

    return true;
};

/* xblocks/dom/eachInnerPrevious.js end */

/* xblocks/dom/eachBefore.js begin */
xblocks.dom.eachBefore = function(node, callback, context, inner) {
    inner = (typeof(inner) === 'undefined' ? true : Boolean(inner));
    var prev;
    var cbcall;

    do {
        if (context && !xblocks.dom.isParent(context, node)) {
            return;
        }

        prev = node;

        while ((prev = prev.previousSibling)) {
            cbcall = inner ? xblocks.dom.eachInnerPrevious(prev, callback) : (callback && callback(prev));

            if (typeof(cbcall) !== 'undefined' && !cbcall) {
                return false;
            }
        }

    } while ((node = node.parentNode));
};

/* xblocks/dom/eachBefore.js end */

/* xblocks/dom/eachAfter.js begin */
xblocks.dom.eachAfter = function(node, callback, context, inner) {
    inner = (typeof(inner) === 'undefined' ? true : Boolean(inner));
    var next;
    var cbcall;

    do {
        if (context && !xblocks.dom.isParent(context, node)) {
            return;
        }

        next = node;

        while ((next = next.nextSibling)) {
            cbcall = inner ? xblocks.dom.eachInnerFollowing(next, callback) : (callback && callback(next));

            if (typeof(cbcall) !== 'undefined' && !cbcall) {
                return false;
            }
        }

    } while ((node = node.parentNode));
};

/* xblocks/dom/eachAfter.js end */

/* xblocks/dom/cleanHTML.js begin */
/* global xblocks, __forEach, __doc */
/* jshint strict: false */

/**
* @returns {string}
*/
xblocks.dom.cleanHTML = (function() {
    var _remove = function(element) {
        element.parentNode.removeChild(element);
    };

    var _impl = __doc.implementation;

    return function(html) {
        var root = _impl.createHTMLDocument('').body;
        root.innerHTML = html;
        __forEach.call(root.querySelectorAll('script,style,img'), _remove);
        return root.innerHTML;
    };

}());

/* xblocks/dom/cleanHTML.js end */


/* xblocks/dom.js end */

    /* xblocks/event.js begin */
/* xblocks/event/wrap.js begin */
/* global xblocks, __doc, __html, __hasOwnProperty */
/* jshint strict: false */

xblocks.event._clickWhich = {
    1: 'left',
    2: 'center',
    3: 'right'
};

xblocks.event.wrap = function(event) {
    if (event.xbWrapped) {
        return event;
    }

    event.xbWrapped = true;

    if (event.srcElement && !event.target) {
        event.target = event.srcElement;
    }

    if (!event.relatedTarget && event.fromElement) {
        event.relatedTarget = (event.fromElement === event.target) ? event.toElement : event.fromElement;
    }

    if (!__hasOwnProperty.call(event, 'pageX') && __hasOwnProperty.call(event, 'clientX')) {
        event.pageX = event.clientX;
        event.pageY = event.clientY;

        if (__html) {
            event.pageX += __html.scrollLeft - (__html.clientLeft || 0);
            event.pageY += __html.scrollTop - (__html.clientTop || 0);

        } else if (__doc.body) {
            event.pageX += __doc.body.scrollLeft;
            event.pageY += __doc.body.scrollTop;
        }
    }

    if (!event.which && event.button) {
        /* jshint -W016 */
        if (event.button & 1) {
            event.which = 1;

        } else if (event.button & 4) {
            event.which = 2;

        } else if (event.button & 2) {
            event.which = 3;
        }
    }

    if (event.which) {
        event.whichStr = xblocks.event._clickWhich[ event.which ];
    }

    return event;
};

/* xblocks/event/wrap.js end */

/* xblocks/event/delegateMatch.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.event.delegateMatch = function(selector, target) {
    if (!target || !target.tagName) {
        return;
    }

    var match;

    if (xblocks.dom.matchesSelector(target, selector)) {
        match = target;

    } else if (xblocks.dom.matchesSelector(target, selector + ' *')) {
        var parent = target.parentNode;

        while (parent) {
            if (xblocks.dom.matchesSelector(parent, selector)) {
                match = parent;
                break;
            }

            parent = parent.parentNode;
        }
    }

    return match;
};

/* xblocks/event/delegateMatch.js end */

/* xblocks/event/delegate.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.event.delegate = function(selector, callback) {

    return function(event) {
        xblocks.event.wrap(event);

        var match = xblocks.event.delegateMatch(selector, event.target);

        if (!match) {
            return;
        }

        event.delegateElement = match;

        callback.call(match, event);
    };
};

/* xblocks/event/delegate.js end */

/* xblocks/event/filterClick.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.event.filterClick = function(which, callback) {
    which = Array.isArray(which) ? which : [ which ];

    return function(event) {
        if (event.type !== 'click') {
            return;
        }

        xblocks.event.wrap(event);

        if (which.indexOf(event.whichStr) !== -1) {
            callback.call(this, event);
        }
    };
};

/* xblocks/event/filterClick.js end */

/* xblocks/event/filterMouse.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {HTMLElement} element
 * @param {Event} event mouseover or mouseout event
 * @param {function} callback
 */
xblocks.event.filterMouseEnter = function(element, event, callback) {
    xblocks.event.wrap(event);

    var toElement = event.relatedTarget;

    while (toElement && toElement !== element) {
        toElement = toElement.parentNode;
    }

    if (toElement === element) {
        return;
    }

    return callback.call(element, event);
};

xblocks.event.filterMouseLeave = xblocks.event.filterMouseEnter;

/* xblocks/event/filterMouse.js end */


/* xblocks/event.js end */


}(function() {
    return this || (1, eval)('this');
}()));

/* ../node_modules/xblocks-utils/xblocks-utils.js end */


/* jshint -W067 */
/* jshint unused: false */
(function(global, undefined) {
    'use strict';

    global.xb = global.xb || {};
    global.xv = global.xv || {};

    var Tether = global.Tether;

    var React = global.React;

    var xblocks = global.xblocks;

    /**
     * @namespace xb
     */
    var xb = global.xb;

    /**
     * @namespace xv
     */
    var xv = global.xv;

    var __doc = global.document;
    var __noop = function() {};
    var __forEach = Array.prototype.forEach;

    /* ../node_modules/classnames/index.js begin */
function classNames() {
	var args = arguments;
	var classes = [];

	for (var i = 0; i < args.length; i++) {
		var arg = args[i];
		if (!arg) {
			continue;
		}

		if ('string' === typeof arg || 'number' === typeof arg) {
			classes.push(arg);
		} else if ('object' === typeof arg) {
			for (var key in arg) {
				if (!arg.hasOwnProperty(key) || !arg[key]) {
					continue;
				}
				classes.push(key);
			}
		}
	}
	return classes.join(' ');
}

// safely export classNames in case the script is included directly on a page
if (typeof module !== 'undefined' && module.exports) {
	module.exports = classNames;
}

/* ../node_modules/classnames/index.js end */


    /* utils.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks
 * @namespace xblocks.utils
 */
xblocks.utils = xblocks.utils || {};

xblocks.utils.REG_PROPS_PREFIX_LINK = /^xb-link-/;
xblocks.utils.REG_PROPS_PREFIX_ICO = /^xb-ico-/;

/* utils/filterPropsPrefixLink.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.filterPropsPrefixLink = function(name) {
    return xblocks.utils.REG_PROPS_PREFIX_LINK.test(name);
};

/* utils/filterPropsPrefixLink.js end */

/* utils/filterLinkProps.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.filterLinkProps = function(props) {
    return xblocks.utils.mapObject(
        xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixLink),
        xblocks.utils.mapPropsPrefixLink
    );
};

/* utils/filterLinkProps.js end */

/* utils/mapPropsPrefixLink.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.mapPropsPrefixLink = function(name, descr) {
    return {
        'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_LINK, ''),
        'descr': descr
    };
};

/* utils/mapPropsPrefixLink.js end */

/* utils/filterPropsPrefixIco.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.filterPropsPrefixIco = function(name) {
    return xblocks.utils.REG_PROPS_PREFIX_ICO.test(name);
};

/* utils/filterPropsPrefixIco.js end */

/* utils/filterIcoProps.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.filterIcoProps = function(props) {
    return xblocks.utils.mapObject(
        xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixIco),
        xblocks.utils.mapPropsPrefixIco
    );
};

/* utils/filterIcoProps.js end */

/* utils/mapPropsPrefixIco.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.mapPropsPrefixIco = function(name, descr) {
    return {
        'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_ICO, ''),
        'descr': descr
    };
};

/* utils/mapPropsPrefixIco.js end */

/* utils/exportPropTypes.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.utils.exportPropTypes = function(tagName) {
    var props = xblocks.utils.propTypes(tagName);
    var exportProps = {};
    var prefix = tagName + '-';
    var p;

    for (p in props) {
        if (props.hasOwnProperty(p) && p[ 0 ] !== '_') {
            exportProps[ prefix + p ] = props[ p ];
        }
    }

    return {
        'propTypes': exportProps
    };
};

/* utils/exportPropTypes.js end */

/* utils/resetLastRadioChecked.js begin */
/* global xblocks */
/* jshint strict: false */

(function() {

    var checkedCache = {};

    /**
     * FIXME don't work cloneNode
     * @memberOf xblocks.utils
     * @name resetLastRadioChecked
     * @props {HTMLElement} element
     * @props {string} name
     */
    xblocks.utils.resetLastRadioChecked = function(element, name) {
        name = String(name);
        var lastCheckedElement = checkedCache[ name ];

        if (lastCheckedElement && lastCheckedElement !== element) {
            lastCheckedElement.checked = false;
        }

        checkedCache[ name ] = element;
    };

}());

/* utils/resetLastRadioChecked.js end */

/* utils/getParentMenu.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @param {HTMLElement} node
 * @returns {HTMLElement|null}
 */
xblocks.utils.getParentMenu = function(node) {
    var parent = node;

    while (parent) {
        if (parent.xtagName === 'xb-menu' || parent.xtagName === 'xb-menu-inline') {
            return parent;
        }

        parent = parent.parentNode;
    }

    return null;
};

/* utils/getParentMenu.js end */


/* utils.js end */

    /* mixin.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks
 * @namespace xblocks.mixin
 */
xblocks.mixin = xblocks.mixin || {};

/* mixin/element/eDisabled.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * Disabled element interface
 *
 * <xb-button disabled>button</xb-button>
 *
 * @example
 * xblocks.create('xb-button', [
 *     xblocks.mixin.eDisabled,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-button');
 * // read
 * console.log(e.disabled)
 * // false
 *
 * // write
 * e.disabled = true;
 * // true
 *
 * // jquery write
 * $(e).prop('disabled', false)
 * // false
 *
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eDisabled = {
    'accessors': {
        'disabled': {
            'attribute': {
                'boolean': true
            }
        }
    }
};

/* mixin/element/eDisabled.js end */

/* mixin/element/eChecked.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * Checked element interface
 *
 * <xb-checkbox name="a" checked>checkbox</xb-checkbox>
 * <xb-radio name="b" checked>radio 1</xb-radio> <xb-radio name="b">radio 2</xb-radio>
 * <xb-button name="c" type="checkbox" checked>button checkbox</xb-button>
 * <xb-button name="d" type="radio" checked>button radio 1</xb-button> <xb-button name="d" type="radio">button radio 2</xb-button>
 *
 * @example
 * xblocks.create('xb-checkbox', [
 *     xblocks.mixin.eChecked,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-checkbox');
 * // read
 * console.log(e.checked)
 * // false
 *
 * // write
 * e.checked = true;
 * // true
 *
 * // jquery write
 * $(e).prop('checked', false)
 * // false
 *
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eChecked = {
    'accessors': {
        'checked': {
            'attribute': {
                'boolean': true
            }
        }
    }
};

/* mixin/element/eChecked.js end */

/* mixin/element/eInputValueState.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eInputValueState = {
    'accessors': {
        'value': {
            'attribute': {
                'name': 'value'
            },

            'get': function() {
                var component = this.xblock && this.xblock.getMountedComponent();

                if (component && typeof(component.state.value) !== 'undefined') {
                    return component.state.value;
                }

                return String(this.getAttribute('value') || this.defaultValue || '');
            },

            'set': function(value) {
                var component = this.xblock && this.xblock.getMountedComponent();

                if (component) {
                    component.setState({ 'value': String(value) });
                }
            }
        },

        'defaultValue': {
            'get': function() {
                return '';
            }
        }
    }
};

/* mixin/element/eInputValueState.js end */

/* mixin/element/eInputValueProps.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eInputValueProps = {
    'accessors': {
        'value': {
            'attribute': {
                'name': 'value'
            },

            'get': function() {
                return String(this.getAttribute('value') || this.defaultValue || '');
            }
        },

        'defaultValue': {
            'get': function() {
                return '';
            }
        }
    }
};

/* mixin/element/eInputValueProps.js end */

/* mixin/element/eFocus.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * Focus element interface
 *
 * @example
 * xblocks.create('xb-button', [
 *     xblocks.mixin.eFocus,
 *     {
 *         accessors: { ... },
 *         events: { ... },
 *         methods: { ... }
 *         ...
 *     }
 * ]);
 *
 * var e = document.createElement('xb-button');
 * // set focus
 * e.focus();
 *
 * // set blur
 * e.blur();
 *
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eFocus = {
    'methods': {
        'focus': function() {
            this.firstChild.focus();
        },

        'blur': function() {
            this.firstChild.blur();
        }
    }
};

/* mixin/element/eFocus.js end */

/* mixin/element/eMenu.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 */
xblocks.mixin.eMenu = {
    'events': {

        /**
         * @this {xb.Menuitem}
         */
        'click:delegate(xb-menuitem:not([disabled]))': function() {
            if (this.submenuInstance) {
                this.submenuInstance.open();
            }
        },

        /**
         * @this {xb.Menuitem}
         */
        'keydown:keypass(13,39)': function() {
            var item = this._xbfocus.getItem();

            if (item && item.submenuInstance) {
                item.submenuInstance.open();
            }
        },

        'jsx-scroll-throttle': function(event) {
            // close all submenu
            event.stopImmediatePropagation();
            xblocks.utils.lazyFocus(this);
        },

        'scrollwheel:delegate(._popup-content)': function(event) {
            var delta = event.delta;
            var scrollTop = this.scrollTop;
            var offsetHeight = this.offsetHeight;
            var scrollHeight = this.scrollHeight;

            if (delta > 0 && scrollTop === 0 ||
                delta < 0 && scrollTop + offsetHeight >= scrollHeight ||
                offsetHeight === scrollHeight) {

                event.preventDefault();
                event.stopImmediatePropagation();
            }
        }
    },

    'accessors': {
        'hasOpenSubmenu': {
            get: function() {
                return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
            }
        }
    }
};

/* mixin/element/eMenu.js end */


/* mixin/view/vCommonAttrs.js begin */
/* global xblocks, React */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 * @type {Object}
 */
xblocks.mixin.vCommonAttrs = {
    'propTypes': {
        'accesskey':    React.PropTypes.string,
        'contextmenu':  React.PropTypes.string,
        'dir':          React.PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'hidden':       React.PropTypes.bool,
        'spellcheck':   React.PropTypes.bool,
        'tabindex':     React.PropTypes.string,
        'title':        React.PropTypes.string
    }
};

/* mixin/view/vCommonAttrs.js end */

/* mixin/view/vMenu.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 * @type {Object}
 */
xblocks.mixin.vMenu = {
    'getInitialState': function() {
        return {
            'maxHeight': 0,
            'isShowScrollTop': false,
            'isShowScrollBottom': false
        };
    },

    'componentWillMount': function() {
        this._enterTopFrame = 0;
        this._enterBottomFrame = 0;
        this._lockScroll = false;
        this._onScroll = xblocks.utils.throttleAnimationFrame(this._onScroll);
        this._onScrollThrottle = xblocks.utils.throttle(this._onScrollThrottle, 500, {
            'leading': true,
            'trailing': false
        });
    },

    'componentWillReceiveProps': function(nextProps) {
        if (nextProps.size !== this.props.size) {
            this._updateMaxHeight(nextProps.size);
        }
    },

    '_updateMaxHeight': function(size, callback) {
        size = Number(size);
        var maxHeight = 0;

        if (size > 0) {
            var contentNode = React.findDOMNode(this.refs.content);
            var element = contentNode.children[ size - 1 ];

            if (element) {
                var rectContent = contentNode.getBoundingClientRect();
                var rectElement = element.getBoundingClientRect();
                maxHeight = rectElement.top + rectElement.height + contentNode.scrollTop - rectContent.top;
            }
        }

        this.setState({
            'maxHeight': maxHeight
        }, this._redrawScrollNavigator.bind(this, callback));
    },

    '_redrawScrollNavigator': function(callback) {
        var target = React.findDOMNode(this.refs.content);
        var safeArea = 5;
        var height = Math.max(target.scrollHeight, target.clientHeight);
        var isShowScrollTop = (target.scrollTop > safeArea);
        var isShowScrollBottom = (target.scrollTop + target.clientHeight < height - safeArea);

        this.setState({
            'isShowScrollTop': isShowScrollTop,
            'isShowScrollBottom': isShowScrollBottom
        }, this._redrawScrollNavigatorSuccess.bind(this, callback));
    },

    '_redrawScrollNavigatorSuccess': function(callback) {
        if (!this.state.isShowScrollTop) {
            this._onMouseLeaveTop();
        }

        if (!this.state.isShowScrollBottom) {
            this._onMouseLeaveBottom();
        }

        if (callback) {
            callback();
        }
    },

    '_onScroll': function() {
        if (this._lockScroll) {
            return;
        }

        this._lockScroll = true;
        this._onScrollThrottle();
        this._redrawScrollNavigator(this._onScrollSuccess);
    },

    '_onScrollSuccess': function() {
        this._lockScroll = false;
    },

    '_onScrollThrottle': function() {
        xblocks.event.dispatch(
            React.findDOMNode(this.refs.content),
            'jsx-scroll-throttle',
            { 'bubbles': true, 'cancelable': true }
        );
    },

    '_animationScrollTop': function() {
        React.findDOMNode(this.refs.content).scrollTop--;
        this._enterTopFrame = global.requestAnimationFrame(this._animationScrollTop);
    },

    '_onMouseEnterTop': function() {
        this._onMouseLeaveTop();
        this._animationScrollTop();
    },

    '_onMouseLeaveTop': function() {
        if (this._enterTopFrame) {
            global.cancelAnimationFrame(this._enterTopFrame);
            this._enterTopFrame = 0;
        }
    },

    '_animationScrollBottom': function() {
        React.findDOMNode(this.refs.content).scrollTop++;
        this._enterBottomFrame = global.requestAnimationFrame(this._animationScrollBottom);
    },

    '_onMouseEnterBottom': function() {
        this._onMouseLeaveBottom();
        this._animationScrollBottom();
    },

    '_onMouseLeaveBottom': function() {
        if (this._enterBottomFrame) {
            global.cancelAnimationFrame(this._enterBottomFrame);
            this._enterBottomFrame = 0;
        }
    },

    /* jshint ignore:start */
    'render': function() {
        var classes = {
            '_popup': true
        };

        classes = classNames(classes);

        var scrollTopStyle = {
            'display': (this.state.isShowScrollTop ? 'block' : 'none')
        };

        var scrollBottomStyle = {
            'display': (this.state.isShowScrollBottom ? 'block' : 'none')
        };

        var contentStyle = {
            'maxHeight': (this.state.maxHeight ? this.state.maxHeight + 'px' : 'none')
        };

        return (
            React.createElement("div", {className: classes, tabIndex: "0"}, 
                React.createElement("div", {style: scrollTopStyle, 
                    className: "_popup-scroll-top", 
                    onMouseEnter: this._onMouseEnterTop, 
                    onMouseLeave: this._onMouseLeaveTop}), 
                React.createElement("div", {ref: "content", 
                    style: contentStyle, 
                    className: "_popup-content", 
                    onScroll: this._onScroll, 
                    "data-xb-content": this.props._uid, 
                    dangerouslySetInnerHTML: { __html: this.props.children.trim()}}), 
                React.createElement("div", {style: scrollBottomStyle, 
                    className: "_popup-scroll-bottom", 
                    onMouseEnter: this._onMouseEnterBottom, 
                    onMouseLeave: this._onMouseLeaveBottom})
            )
        );
    }
    /* jshint ignore:end */
};

/* mixin/view/vMenu.jsx.js end */


/* mixin.js end */


    /* blocks/ico/ico.js begin */
/* global xblocks, xb */
/* jshint strict: false */

/* blocks/ico/ico.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Ico
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Ico = xblocks.view.register('xb-ico', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-ico',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'value':    React.PropTypes.string,
            'active':   React.PropTypes.bool,
            'disabled': React.PropTypes.bool,
            'size':     React.PropTypes.oneOf([ 's', 'm' ]),
            'type':     React.PropTypes.oneOf([
                'attention',
                'close',
                'check',
                'download',
                'download-white',
                'dropdown',
                'eye',
                'link',
                'link-white',
                'mail',
                'notification',
                'odnoklassniki',
                'pause',
                'people',
                'play',
                'print',
                'remove',
                'services',
                'settings',
                'three-dots',
                'trash',
                'trash-white',
                'twitter',
                'help',
                'upload',
                'upload-white',
                'vk'
            ])
        },

        'getDefaultProps': function() {
            return {
                'size':     's',
                'children': String.fromCharCode(160),
                'active':   false,
                'disabled': false
            };
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-ico':    true,
                '_active':   this.props.active,
                '_disabled': this.props.disabled
            };

            if (this.props.type) {
                classes[ '_type-' + this.props.type ] = true;
            }

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classNames(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            var content = this.props.value || this.props.children;

            return (
                React.createElement("span", {className: classes, 
                    title: this.props.title, 
                    tabIndex: tabIndex, 
                    "data-xb-content": this.props._uid}, content)
            );
        }
        /* jshint ignore:end */
    }
]);

/* blocks/ico/ico.jsx.js end */


/**
 * @class xb.Ico
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 */
xb.Ico = xblocks.create('xb-ico', [
    xblocks.mixin.eDisabled,

    {
        'accessors': {
            'active': {
                'attribute': {
                    'boolean': true
                }
            }
        }
    }
]);

/* blocks/ico/ico.js end */

    /* blocks/link/link.js begin */
/* global xblocks, xb */
/* jshint strict: false */

/* blocks/link/link.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Link
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Link = xblocks.view.register('xb-link', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-link',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'disabled': React.PropTypes.bool,
            'href':     React.PropTypes.string,
            'name':     React.PropTypes.string,
            'target':   React.PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
            'theme':    React.PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'input' ])
        },

        'getDefaultProps': function() {
            return {
                'disabled': false,
                'theme':    'normal',
                'tabindex': '1'
            };
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-link':   true,
                '_disabled': this.props.disabled
            };

            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            classes = classNames(classes);

            var content = this.props.value || this.props.children;

            return (
                React.createElement("a", {name: this.props.name, 
                    href: this.props.href, 
                    target: this.props.target, 
                    tabIndex: tabIndex, 
                    className: classes, 
                    "data-xb-content": this.props._uid}, content)
            );
        }
        /* jshint ignore:end */
    }
]);

/* blocks/link/link.jsx.js end */


/**
 * @class xb.Link
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 */
xb.Link = xblocks.create('xb-link', [
    xblocks.mixin.eDisabled
]);

/* blocks/link/link.js end */

    /* blocks/button/button.js begin */
/* global xblocks, xb */
/* jshint strict: false */

/* blocks/button/button.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/* blocks/button/button-content.jsx.js begin */
/** @jsx React.DOM */
/* global React, xv */
/* jshint strict: false */

/**
 * @class xv.ButtonContent
 * @memberof xv
 */
xv.ButtonContent = xblocks.view.create({
    'displayName': 'xb-button_content',

    'propTypes': {
        'ico': React.PropTypes.object
    },

    'getDefaultProps': function() {
        return {
            'ico': {}
        };
    },

    'shouldComponentUpdate': function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    /* jshint ignore:start */
    'render': function() {
        var icoProps = xblocks.utils.merge({}, this.props.ico);
        var children = [
            React.createElement("span", {className: "_content-content", 
                key: "content", 
                "data-xb-content": this.props._uid}, this.props.children)
        ];

        if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(React.createElement(xv.Ico, React.__spread({},  icoProps)));

            } else if (icoProps.float === 'right') {
                children.push(React.createElement(xv.Ico, React.__spread({},  icoProps)));
            }
        }

        return (
            React.createElement("span", {className: "_content"}, children)
        );
    }
    /* jshint ignore:end */
});

/* blocks/button/button-content.jsx.js end */


/**
 * @class xv.Button
 * @memberof xv
 * @mixes React.addons.PureRenderMixin
 * @mixes xblocks.mixin.vCommonAttrs
 */
xv.Button = xblocks.view.register('xb-button', [
    xblocks.utils.exportPropTypes('xb-ico'),
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-button',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size':         React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'theme':        React.PropTypes.oneOf([
                'normal',
                'action',
                'dark',
                'flying',
                'pseudo-inverted',
                'pseudo',
                'promo'
            ]),
            'type':         React.PropTypes.oneOf([
                'label',
                'inline',
                'link',
                'file',
                'button',
                'submit',
                'checkbox',
                'radio'
            ]),
            'target':       React.PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
            'value':        React.PropTypes.string,
            'href':         React.PropTypes.string,
            'name':         React.PropTypes.string,
            'form':         React.PropTypes.string,
            'for':          React.PropTypes.string,
            'multiple':     React.PropTypes.bool,
            'autofocus':    React.PropTypes.bool,
            'disabled':     React.PropTypes.bool,
            'checked':      React.PropTypes.bool,
            'required':     React.PropTypes.bool
        },

        'getDefaultProps': function() {
            return {
                'size':         'm',
                'theme':        'normal',
                'type':         'button',
                'tabindex':     '0',
                'children':     String.fromCharCode(160),
                'checked':      false,
                'multiple':     false,
                'autofocus':    false,
                'disabled':     false,
                'required':     false
            };
        },

        'getInitialState': function() {
            return {
                'checked': this.props.checked
            };
        },

        'componentWillReceiveProps': function(nextProps) {
            this.setState({
                'checked': Boolean(nextProps.checked)
            });
        },

        'componentWillUpdate': function(nextProps, nextState) {
            if (nextProps.type === 'radio' && nextState.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), nextProps.name);
            }
        },

        'componentWillMount': function() {
            if (this.props.type === 'radio' && this.state.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), this.props.name);
            }
        },

        '_onChange': function(event) {
            this.container().checked = event.target.checked;
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-button': true,
                '_disabled': this.props.disabled
            };

            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classNames(classes);

            var icoProps = xblocks.utils.filterIcoProps(this.props);
            var tabIndex = this.props.tabindex;
            var type = this.props.type;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            var content = (
                React.createElement(xv.ButtonContent, {key: "content", _uid: this.props._uid, ico: icoProps}, 
                    this.props.children
                )
            );

            if (type === 'link') {
                return (
                    React.createElement("a", {className: classes, 
                        href: this.props.href, 
                        name: this.props.name, 
                        target: this.props.target, 
                        title: this.props.title, 
                        tabIndex: tabIndex}, 

                        content
                    )
                );

            } else if (type === 'file') {
                return (
                    React.createElement("label", {className: classes}, 
                        React.createElement("span", {className: "_xb-file-intruder"}, 
                            React.createElement("span", {className: "_xb-file-intruder-inner"}, 
                                React.createElement("input", {className: "_xb-file-intruder-input", 
                                    type: "file", 
                                    name: this.props.name, 
                                    title: this.props.title, 
                                    disabled: this.props.disabled, 
                                    multiple: this.props.multiple, 
                                    autoFocus: this.props.autofocus, 
                                    tabIndex: tabIndex}), 

                                React.createElement("span", {className: "_xb-file-intruder-focus"})
                            )
                        ), 
                        content
                    )
                );

            } else if (type === 'label' || type === 'checkbox' || type === 'radio') {
                var children = [];

                if (type === 'checkbox' || type === 'radio') {
                    children.push(
                        React.createElement("input", {key: "checkControl", 
                            type: type, 
                            className: "_xb-check_controller", 
                            name: this.props.name, 
                            value: this.props.value, 
                            disabled: this.props.disabled, 
                            defaultChecked: this.props.checked, 
                            checked: this.state.checked, 
                            autoFocus: this.props.autofocus, 
                            readOnly: true, 
                            onChange: this._onChange, 
                            required: this.props.required, 
                            tabIndex: tabIndex})
                    );

                    var buttonProps = xblocks.utils.merge({}, this.props, {
                        'key': 'content',
                        'type': 'inline',
                        'tabindex': null
                    });

                    children.push(
                        React.createElement(xv.Button, React.__spread({},  buttonProps))
                    );

                    classes = classNames({
                        'xb-button': true,
                        '_theme-check': true,
                        '_disabled': this.props.disabled
                    });

                } else {
                    children.push(
                        React.createElement("span", {key: "file-intruder", className: "_xb-file-intruder"}, 
                            React.createElement("span", {className: "_xb-file-intruder-inner"}, 
                                React.createElement("input", {className: "_xb-file-intruder-input", 
                                    type: "button", 
                                    disabled: this.props.disabled, 
                                    autoFocus: this.props.autofocus, 
                                    tabIndex: tabIndex}), 

                                React.createElement("span", {className: "_xb-file-intruder-focus"})
                            )
                        )
                    );

                    children.push(content);
                }

                return (
                    React.createElement("label", {className: classes, form: this.props.form, htmlFor: this.props['for'], title: this.props.title}, 
                        children
                    )
                );

            } else if (type === 'inline') {
                return (
                    React.createElement("span", {className: classes, tabIndex: tabIndex}, 
                        content
                    )
                );

            } else {
                return (
                    React.createElement("button", {className: classes, 
                        type: type, 
                        form: this.props.form, 
                        title: this.props.title, 
                        name: this.props.name, 
                        value: this.props.value, 
                        tabIndex: tabIndex, 
                        disabled: this.props.disabled, 
                        autoFocus: this.props.autofocus}, 

                        content
                    )
                );
            }
        }
        /* jshint ignore:end */
    }
]);

/* blocks/button/button.jsx.js end */


/**
 * @class xb.Button
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
xb.Button = xblocks.create('xb-button', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'accessors': {
            'defaultValue': {
                'get': function() {
                    var type = this.attrs.type;
                    if (type === 'checkbox' || type === 'radio') {
                        return 'on';
                    }

                    return '';
                }
            }
        }
    }
]);

/* blocks/button/button.js end */

    /* blocks/input/input.js begin */
/* global xblocks, xb */
/* jshint strict: false */

/* blocks/input/input.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/* blocks/input/input-controller.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.InputController
 * @memberof xv
 */
xv.InputController = xblocks.view.create({
    'displayName': 'xb-input_controller',

    'mixins': [ React.addons.PureRenderMixin ],

    'propTypes': {
        'className':        React.PropTypes.string,
        'name':             React.PropTypes.string,
        'disabled':         React.PropTypes.bool,
        'multiline':        React.PropTypes.bool,
        'required':         React.PropTypes.bool,
        'readOnly':         React.PropTypes.bool,
        'autosize':         React.PropTypes.bool,
        'autoFocus':        React.PropTypes.bool,
        'rows':             React.PropTypes.string,
        'cols':             React.PropTypes.string,
        'placeholder':      React.PropTypes.string,
        'value':            React.PropTypes.string,
        'tabIndex':         React.PropTypes.string,
        'autocomplete':     React.PropTypes.oneOf([ 'on', 'off' ]),

        'onChange':         React.PropTypes.func,
        'onHintToggle':     React.PropTypes.func,
        'isPlaceholderHint': React.PropTypes.bool
    },

    'getDefaultProps': function() {
        return {
            'value':                undefined,
            'disabled':             false,
            'multiline':            false,
            'required':             false,
            'readOnly':             false,
            'autosize':             false,
            'autoFocus':            false,
            'isPlaceholderHint':    false
        };
    },

    'componentDidUpdate': function(prevProps) {
        this._recalculateSize();
        this._dispatchEventToggleHint(prevProps.value, this.props.value);
    },

    'componentDidMount': function() {
        this._recalculateSize();
    },

    '_dispatchEventToggleHint': function(prevValue, nextValue) {
        if (this.props.isPlaceholderHint) {
            var hasPrevValue = Boolean(prevValue);
            var hasNestValue = Boolean(nextValue);

            /* jshint -W016 */
            if (hasPrevValue ^ hasNestValue) {
                this.props.onHintToggle(hasPrevValue && !hasNestValue);
            }
        }
    },

    '_recalculateSize': function() {
        if (!this.props.autosize) {
            return;
        }

        var node = React.findDOMNode(this);

        if (this.props.multiline) {
            node.style.height = '0px';
            node.style.height = node.scrollHeight + 'px';

        } else {
            node.style.width = '20px';
            node.style.width = (node.scrollWidth < 20 ? 20 : node.scrollWidth) + 'px';
        }
    },

    /* jshint ignore:start */
    'render': function() {
        var tabIndex = this.props.tabIndex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        var props = {
            'value':        this.props.value,
            'className':    this.props.className,
            'name':         this.props.name,
            'disabled':     this.props.disabled,
            'required':     this.props.required,
            'readOnly':     this.props.readOnly,
            'autoFocus':    this.props.autoFocus,
            // macos inserts placeholder default
            'placeholder':  this.props.placeholder || '',
            'tabIndex':     tabIndex,
            'autocomplete': this.props.autocomplete,
            'onChange':     this.props.onChange
        };

        if (this.props.multiline) {
            return (
                React.createElement("textarea", React.__spread({},  props, {rows: this.props.rows, cols: this.props.cols}))
            );

        } else {
            return (
                React.createElement("input", React.__spread({},  props, {type: "text"}))
            );
        }
    }
    /* jshint ignore:end */
});

/* blocks/input/input-controller.jsx.js end */


// TODO "list" attribute
// TODO "pattern" attribute
// TODO "title" attribute

/**
 * @class xv.Input
 * @memberof xv
 * @mixes React.addons.PureRenderMixin
 */
xv.Input = xblocks.view.register('xb-input', [
    xblocks.utils.exportPropTypes('xb-link'),

    {
        'displayName': 'xb-input',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'name':         React.PropTypes.string,
            'disabled':     React.PropTypes.bool,
            'autosize':     React.PropTypes.bool,
            'multiline':    React.PropTypes.bool,
            'required':     React.PropTypes.bool,
            'readonly':     React.PropTypes.bool,
            'reset':        React.PropTypes.bool,
            'autofocus':    React.PropTypes.bool,
            'ghost':        React.PropTypes.bool,
            'type':         React.PropTypes.oneOf([
                                'text', 'number', 'date', 'datetime', 'email', 'month',
                                'range', 'search', 'tel', 'time', 'url', 'week', 'color',
                                'wysiwyg'
                            ]),
            'size':         React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'rows':         React.PropTypes.string,
            'cols':         React.PropTypes.string,
            'placeholder':  React.PropTypes.string,
            'value':        React.PropTypes.string,
            'prefix':       React.PropTypes.string,
            'postfix':      React.PropTypes.string,
            'tabindex':     React.PropTypes.string,
            'xb-link':      React.PropTypes.string
        },

        'getDefaultProps': function() {
            return {
                'value':        undefined,
                'type':         'text',
                'size':         'm',
                'rows':         '4',
                'disabled':     false,
                'autosize':     false,
                'multiline':    false,
                'required':     false,
                'readonly':     false,
                'reset':        false,
                'autofocus':    false,
                'ghost':        false
            };
        },

        'getInitialState': function() {
            return {
                'value': this.props.value
            };
        },

        'componentDidMount': function() {
            // check show or hide placeholder after mount element
            this.refs.controller._dispatchEventToggleHint('', this.props.value);
        },

        /**
         * Remember current value in state
         * @param {Event} event
         * @private
         */
        '_onChange': function(event) {
            this.setState({
                'value': event.target.value
            });
        },

        /**
         * Show or hide placeholder
         * @param {boolean} toggle
         * @private
         */
        '_onHintToggle': function(toggle) {
            React.findDOMNode(this.refs.placeholder).style.visibility = (toggle ? 'inherit' : 'hidden');
        },

        /**
         * Check show complex input
         * @returns {boolean}
         * @private
         */
        '_isComplex': function() {
            return Boolean(
                this.props.postfix ||
                this.props.prefix ||
                this.props.reset ||
                this.props.autosize ||
                this.props['xb-link'] ||
                this.props.placeholder
            );
        },

        /**
         * Click reset button
         * @private
         */
        '_onClickReset': function() {
            this.setState({
                'value': ''
            });
        },

        /* jshint ignore:start */
        'render': function() {
            var isComplex = this._isComplex();
            var classes = {
                'xb-input':     true,
                '_disabled':    this.props.disabled,
                '_autosize':    this.props.autosize,
                '_ghost':       this.props.ghost,
                '_complex':     isComplex,
                '_simple':      !isComplex
            };

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classNames(classes);

            var isPlaceholderHint = false;
            var controllerProps = {
                'key':          'controller',
                'ref':          'controller',
                'className':    '_controller',
                'value':        this.state.value,
                'name':         this.props.name,
                'disabled':     this.props.disabled,
                'required':     this.props.required,
                'readOnly':     this.props.readonly,
                'multiline':    this.props.multiline,
                'autoFocus':    this.props.autofocus,
                'rows':         this.props.rows,
                'cols':         this.props.cols,
                'tabIndex':     this.props.tabindex,
                'autocomplete': this.props.autocomplete,
                'autosize':     this.props.autosize,
                'onChange':     this._onChange,
                'onHintToggle': this._onHintToggle
            };

            if (isComplex) {
                var children = [];

                if (this.props.placeholder) {
                    isPlaceholderHint = true;

                    children.push(
                        React.createElement("span", {ref: "placeholder", key: "placeholder", className: "_hint"}, 
                            React.createElement("span", {className: "_hint-inner"}, this.props.placeholder)
                        )
                    );
                }

                if (this.props['xb-link']) {
                    var linkProps = xblocks.utils.filterLinkProps(this.props);
                    linkProps['theme'] = 'input';
                    linkProps['key'] = 'label';

                    children.push(
                        React.createElement(xv.Link, React.__spread({},  linkProps), this.props['xb-link'])
                    );
                }

                if (this.props.prefix) {
                    children.push(
                        React.createElement("span", {key: "prefix", className: "_left"}, this.props.prefix)
                    );
                }

                if (this.props.postfix) {
                    children.push(
                        React.createElement("span", {key: "postfix", className: "_right"}, this.props.postfix)
                    );
                }

                if (this.props.reset) {
                    children.push(
                        React.createElement("span", {key: "reset", className: "_reset", onClick: this._onClickReset})
                    );
                }

                children.push(
                    React.createElement("span", {key: "content", className: "_content"}, 
                        React.createElement(xv.InputController, React.__spread({},  controllerProps, {isPlaceholderHint: isPlaceholderHint})), 
                        React.createElement("span", {key: "view", className: "_view"})
                    )
                );

                return (
                    React.createElement("label", {className: classes}, children)
                );

            } else {

                return (
                    React.createElement(xv.InputController, React.__spread({},  controllerProps, {className: classes, isPlaceholderHint: isPlaceholderHint}))
                );
            }
        }
        /* jshint ignore:end */
    }
]);

/* blocks/input/input.jsx.js end */


/**
 * @class xb.Input
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eInputValueState
 * @mixes xblocks.mixin.eFocus
 */
xb.Input = xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLElement.prototype)
    }
]);

/* blocks/input/input.js end */

    /* blocks/checkbox/checkbox.js begin */
/* global xblocks, xb */
/* jshint strict: false */

/* blocks/checkbox/checkbox.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Checkbox
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Checkbox = xblocks.view.register('xb-checkbox', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-checkbox',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size':         React.PropTypes.oneOf([ 's', 'm' ]),
            'value':        React.PropTypes.string,
            'name':         React.PropTypes.string,
            'form':         React.PropTypes.string,
            'for':          React.PropTypes.string,
            'autofocus':    React.PropTypes.bool,
            'checked':      React.PropTypes.bool,
            'disabled':     React.PropTypes.bool,
            'required':     React.PropTypes.bool
        },

        'getDefaultProps': function() {
            return {
                'size':         'm',
                'children':     '',
                'value':        'on',
                'tabindex':     '0',
                'autofocus':    false,
                'checked':      false,
                'disabled':     false,
                'required':     false
            };
        },

        'getInitialState': function() {
            return {
                'checked': this.props.checked
            };
        },

        'componentWillReceiveProps': function(nextProps) {
            this.setState({
                'checked': nextProps.checked
            });
        },

        '_onChange': function(event) {
            this.setState({
                'checked': event.target.checked
            });
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-checkbox': true,
                '_disabled':   this.props.disabled
            };

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classNames(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                React.createElement("label", {className: classes, 
                    title: this.props.title, 
                    form: this.props.form, 
                    htmlFor: this.props['for']}, 

                    React.createElement("input", {type: "checkbox", 
                        className: "_xb-check_controller", 
                        name: this.props.name, 
                        value: this.props.value, 
                        disabled: this.props.disabled, 
                        defaultChecked: this.props.checked, 
                        checked: this.state.checked, 
                        autoFocus: this.props.autofocus, 
                        readOnly: true, 
                        onChange: this._onChange, 
                        required: this.props.required, 
                        tabIndex: tabIndex}), 

                    React.createElement("span", {className: "_xb-checkbox_flag _xb-check_flag"}, 
                        React.createElement("span", {className: "_xb-checkbox_flag-icon"})
                    ), 
                    React.createElement("span", {"data-xb-content": this.props._uid}, this.props.children)
                )
            );
        }
        /* jshint ignore:end */
    }
]);

/* blocks/checkbox/checkbox.jsx.js end */


/**
 * @class xb.Checkbox
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
xb.Checkbox = xblocks.create('xb-checkbox', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'accessors': {
            'defaultValue': {
                'get': function() {
                    return 'on';
                }
            }
        }
    }
]);

/* blocks/checkbox/checkbox.js end */

    /* blocks/radio/radio.js begin */
/* global xblocks, xb */
/* jshint strict: false */

/* blocks/radio/radio.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Radio
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Radio = xblocks.view.register('xb-radio', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-radio',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size':         React.PropTypes.oneOf([ 's', 'm' ]),
            'value':        React.PropTypes.string,
            'name':         React.PropTypes.string,
            'form':         React.PropTypes.string,
            'for':          React.PropTypes.string,
            'autofocus':    React.PropTypes.bool,
            'checked':      React.PropTypes.bool,
            'disabled':     React.PropTypes.bool,
            'required':     React.PropTypes.bool
        },

        'getDefaultProps': function() {
            return {
                'size':         'm',
                'children':     '',
                'value':        'on',
                'tabindex':     '0',
                'autofocus':    false,
                'checked':      false,
                'disabled':     false,
                'required':     false
            };
        },

        'getInitialState': function() {
            return {
                'checked': this.props.checked
            };
        },

        'componentWillReceiveProps': function(nextProps) {
            this.setState({
                'checked': Boolean(nextProps.checked)
            });
        },

        'componentWillUpdate': function(nextProps, nextState) {
            if (nextState.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), nextProps.name);
            }
        },

        'componentWillMount': function() {
            if (this.state.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), this.props.name);
            }
        },

        '_onChange': function(event) {
            this.container().checked = event.target.checked;
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-radio':  true,
                '_disabled': this.props.disabled
            };

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classNames(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                React.createElement("label", {className: classes, 
                    title: this.props.title, 
                    form: this.props.form, 
                    htmlFor: this.props['for']}, 

                    React.createElement("input", {type: "radio", 
                        className: "_xb-check_controller", 
                        name: this.props.name, 
                        value: this.props.value, 
                        disabled: this.props.disabled, 
                        defaultChecked: this.props.checked, 
                        checked: this.state.checked, 
                        autoFocus: this.props.autofocus, 
                        readOnly: true, 
                        onChange: this._onChange, 
                        required: this.props.required, 
                        tabIndex: tabIndex}), 

                    React.createElement("span", {className: "_xb-radio_flag _xb-check_flag"}, 
                        React.createElement("span", {className: "_xb-radio_flag-icon"})
                    ), 
                    React.createElement("span", {"data-xb-content": this.props._uid}, this.props.children)
                )
            );
        }
        /* jshint ignore:end */
    }
]);

/* blocks/radio/radio.jsx.js end */


/**
 * @class xb.Radio
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eChecked
 * @mixes xblocks.mixin.eInputValueProps
 * @mixes xblocks.mixin.eFocus
 */
xb.Radio = xblocks.create('xb-radio', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLInputElement.prototype),

        'accessors': {
            'defaultValue': {
                'get': function() {
                    return 'on';
                }
            }
        }
    }
]);

/* blocks/radio/radio.js end */

    /* blocks/popup/popup.js begin */
/* global global, xblocks, Tether, __doc, xb */
/* jshint strict: false */

/* blocks/popup/popup.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Popup
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Popup = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-popup',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'close': React.PropTypes.bool,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank' ])
        },

        'getDefaultProps': function() {
            return {
                'close': false,
                'theme': 'normal'
            };
        },

        '_onClickClose': function() {
            xblocks.event.dispatch(
                React.findDOMNode(this),
                'jsx-click-close',
                { 'bubbles': true, 'cancelable': true }
            );
        },

        /* jshint ignore:start */
        'render': function() {
            var children = [
                React.createElement("div", {key: "content", 
                    className: "_content", 
                    "data-xb-content": this.props._uid, 
                    dangerouslySetInnerHTML: { __html: this.props.children}})
            ];

            children.unshift(this.template('xb-popup-title', {
                'key': 'title',
                'className': '_title'
            }));

            if (this.props.close) {
                children.unshift(
                    React.createElement("a", {key: "close", className: "_close", onClick: this._onClickClose})
                );
            }

            children.push(this.template('xb-popup-buttons', {
                'key': 'buttons',
                'className': '_buttons'
            }));

            var classes = {
                '_popup': true
            };

            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            classes = classNames(classes);

            return (
                React.createElement("div", {className: classes, tabIndex: "0"}, children)
            );
        }
        /* jshint ignore:end */
    }
]);

/* blocks/popup/popup.jsx.js end */


var _xbPopup = {
    'onOpen': function() {
        this.focus();
        xblocks.event.dispatch(this, 'xb-open');
    },

    'onClose': function() {
        this.blur();
        xblocks.event.dispatch(this, 'xb-close');
    }
};

/**
 * @constructor
 * @mixes xblocks.mixin.eFocus
 */
xb.Popup = xblocks.create('xb-popup', [
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            'jsx-click-close': function(event) {
                event.stopImmediatePropagation();
                this.close();
            },

            'keydown:keypass(27)': function() {
                this.close();
            }
        },

        /**
         * @lends xb.Popup.prototype
         */
        'accessors': {
            /**
             * @property {object}
             */
            'options': {
                'get': function() {
                    if (this._options) {
                        return this._options;
                    }

                    var tetherAttrs = xblocks.dom.attrs.get(this, {
                        'optimizations-gpu': true,
                        'target': __doc.body,
                        'target-parent': false,
                        'target-attachment': 'middle center',
                        'target-modifier': 'visible',
                        'target-offset': undefined,
                        'attachment': 'middle center',
                        'offset': undefined,
                        'constraints': undefined
                    });

                    // TODO
                    // переписать тетхер и сделать для targetModifier значение по умолчанию
                    // вместо undefined
                    var targetModifier = tetherAttrs['target-modifier'];
                    if (!(targetModifier === 'visible' || targetModifier === 'scroll-handle')) {
                        targetModifier = undefined;
                    }

                    this._options = {
                        'enabled': false,
                        'element': this,
                        'target': tetherAttrs['target'],
                        'targetParent': tetherAttrs['target-parent'],
                        'attachment': tetherAttrs['attachment'],
                        'targetAttachment': tetherAttrs['target-attachment'],
                        'targetModifier': targetModifier,
                        'classPrefix': this.xtagName,
                        'optimizations': {
                            'gpu': tetherAttrs['optimizations-gpu']
                        },
                        'classes': {
                            'element': this.xtagName
                        }
                    };

                    if (tetherAttrs['offset']) {
                        this._options['offset'] = tetherAttrs['offset'];
                    }

                    if (tetherAttrs['target-offset']) {
                        this._options['targetOffset'] = tetherAttrs['target-offset'];
                    }

                    if (tetherAttrs['constraints']) {
                        this._options['constraints'] = JSON.parse(decodeURIComponent(tetherAttrs['constraints']));
                    }

                    if (this._options['targetParent']) {
                        this._options['target'] = this.parentNode;
                    }

                    return this._options;
                }
            },

            /**
             * @property {Tether}
             */
            'tether': {
                'get': function() {
                    if (!this._tether) {
                        this._tether = new Tether(this.options);
                    }

                    return this._tether;
                }
            },

            /**
             * @property {boolean}
             */
            'opened': {
                'get': function() {
                    return this.tether.enabled;
                }
            }
        },

        'methods': {
            /**
             * @method
             * @memberOf xb.Popup.prototype
             * @param {object} nextOptions
             */
            'setOptions': function(nextOptions) {
                var tether = this.tether;

                xblocks.utils.merge(true, this.options, nextOptions);
                tether.setOptions(this.options, false);

                if (tether.enabled) {
                    tether.position();
                }
            },

            /**
             * @memberOf xb.Popup.prototype
             * @param {object} options
             * @returns {boolean}
             */
            'open': function(options) {
                var tether = this.tether;

                if (tether.enabled) {
                    return false;
                }

                if (typeof(options) === 'object') {
                    this.setOptions(options);
                }

                xblocks.event.dispatch(this, 'xb-before-open');

                tether.enable(true);
                tether.target._xbpopup = this;

                // FireFox does not set the focus without delay
                global.setImmediate(_xbPopup.onOpen.bind(this));

                return true;
            },

            /**
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            'close': function() {
                var tether = this.tether;

                if (!tether.enabled) {
                    return false;
                }

                xblocks.event.dispatch(this, 'xb-before-close');

                tether.target._xbpopup = undefined;
                tether.disable();
                tether.clearCache();

                // FireFox does not fire a blur event
                global.setImmediate(_xbPopup.onClose.bind(this));

                return true;
            },

            /**
             * @memberOf xb.Popup.prototype
             * @returns {boolean}
             */
            'position': function() {
                this.tether.position();
                return true;
            }
        }
    }
]);

/* blocks/popup/popup.js end */

    /* blocks/menuseparator/menuseparator.js begin */
/* global xblocks, xb */
/* jshint strict: false */

/* blocks/menuseparator/menuseparator.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, xv */
/* jshint strict: false */

/**
 * @class xv.Menuseparator
 * @memberof xv
 */
xv.Menuseparator = xblocks.view.register('xb-menuseparator', {
    'displayName': 'xb-menuseparator',

    /* jshint ignore:start */
    'render': function() {
        return (
            React.createElement("div", {className: "xb-menuseparator"})
        );
    }
    /* jshint ignore:end */
});

/* blocks/menuseparator/menuseparator.jsx.js end */


/**
 * @class xb.Menuseparator
 * @memberof xb
 */
xb.Menuseparator = xblocks.create('xb-menuseparator', [
    {
        'prototype': Object.create(HTMLElement.prototype)
    }
]);

/* blocks/menuseparator/menuseparator.js end */

    /* blocks/menuitem/menuitem.js begin */
/* global xblocks, global, xb */
/* jshint strict: false */

/* blocks/menuitem/menuitem.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Menuitem
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Menuitem = xblocks.view.register('xb-menuitem', [
    xblocks.utils.exportPropTypes('xb-ico'),
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-menuitem',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'label':    React.PropTypes.string.isRequired,
            'disabled': React.PropTypes.bool,
            'selected': React.PropTypes.bool,
            'focused':  React.PropTypes.bool,
            'submenu':  React.PropTypes.bool
        },

        'getDefaultProps': function() {
            return {
                'disabled': false,
                'selected': false,
                'focused':  false,
                'submenu':  false
            };
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled':   this.props.disabled,
                '_focused':    this.props.focused,
                '_selected':   this.props.selected,
                '_submenu':    this.props.submenu,
            };

            classes = classNames(classes);

            var children = [
                React.createElement("span", {className: "_label", key: "label"}, this.props.label)
            ];

            var icoProps = xblocks.utils.filterIcoProps(this.props);

            if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
                icoProps.key = 'ico';

                if (!icoProps.float || icoProps.float === 'left') {
                    children.unshift(React.createElement(xv.Ico, React.__spread({},  icoProps)));

                } else if (icoProps.float === 'right') {
                    children.push(React.createElement(xv.Ico, React.__spread({},  icoProps)));
                }
            }

            return (
                React.createElement("div", {className: classes}, children)
            );
        }
        /* jshint ignore:end */
    }
]);

/* blocks/menuitem/menuitem.jsx.js end */


var _xbMenuitem = {
    'submenuAttrs': {
        'attachment': 'top right',
        'target-attachment': 'top left',
        // TODO
        // переписать тетхер и сделать для targetModifier значение по умолчанию
        // вместо undefined
        'target-modifier': 'initial',
        'constraints': encodeURIComponent(JSON.stringify([
            {
                'to': 'scrollParent',
                'attachment': 'element together'
            },
            {
                'to': 'window',
                'attachment': 'element together'
            }
        ]))
    },

    'submenu': (function() {
        var timerOpenSubmenu = 0;

        return {

            /**
             * @param {xb.Menu} [submenu]
             * @this {global}
             */
            'open': function(submenu) {
                if (submenu && !timerOpenSubmenu) {
                    timerOpenSubmenu = global.setTimeout(submenu.open.bind(submenu), 200);
                }
            },

            /**
             * @this {global}
             */
            'cancel': function() {
                if (timerOpenSubmenu) {
                    global.clearTimeout(timerOpenSubmenu);
                    timerOpenSubmenu = 0;
                }
            },

            /**
             * @this {xb.Menuitem}
             */
            'remove': function() {
                if (this._submenuInstance) {
                    _xbMenuitem.submenu.cancel();

                    this._submenuInstance.close();
                    xblocks.dom.removeChild(this._submenuInstance);
                    this._submenuInstance = undefined;
                }
            }
        };
    }())
};

/**
 * @class xb.Menuitem
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @mixes xblocks.mixin.eInputValueProps
 * @listens xblocks.utils:Table~event:xb-focus
 * @listens xblocks.utils:Table~event:xb-blur
 * @listens xblocks.element~event:xb-repaint
 * @listens xblocks.element~event:xb-created
 * @listens xblocks.element~event:xb-destroy
 */
xb.Menuitem = xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueProps,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            /**
             * @callback
             */
            'xb-created': function() {
                _xbMenuitem.submenu.remove.call(this);
                this.submenu = Boolean(this.content.trim());
            },

            /**
             * @callback
             */
            'xb-repaint': _xbMenuitem.submenu.remove,

            /**
             * @callback
             */
            'xb-destroy': _xbMenuitem.submenu.remove,

            /**
             * @callback
             */
            'xb-blur': function() {
                this.focused = false;

                _xbMenuitem.submenu.cancel();

                var submenu = this.submenuInstance;
                if (submenu && submenu.opened) {
                    // to close the submenu and return focus
                    xblocks.utils.lazyFocus(this.menuInstance);
                }
            },

            /**
             * @callback
             * @param {xblocks:utils:Table~event:xb-focus} event
             */
            'xb-focus': function(event) {
                this.focused = true;

                // open the submenu only event-mouse
                if (event.detail.originalEvent.type !== 'keydown') {
                    _xbMenuitem.submenu.open(this.submenuInstance);

                // scroll menu only keyboard events
                } else {
                    this.scrollIntoView(false);
                }
            }
        },

        /**
         * @lends xb.Menuitem.prototype
         */
        'accessors': {
            /**
             * @property {boolean} focused Item in focus
             */
            'focused': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @property {boolean} selected Item is selected
             */
            'selected': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @property {boolean} submenu Item has a submenu
             */
            'submenu': {
                'attribute': {
                    'boolean': true
                }
            },

            /**
             * @property {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
             */
            'menuInstance': {
                'get': function() {
                    if (this._menuInstance || this._menuInstance === null) {
                        return this._menuInstance;
                    }

                    this._menuInstance = xblocks.utils.getParentMenu(this);

                    return this._menuInstance;
                }
            },

            /**
             * @property {xb.Menu|null} submenuInstance Submenu instance
             */
            'submenuInstance': {
                'get': function() {
                    if (this._submenuInstance || this._submenuInstance === null) {
                        return this._submenuInstance;
                    }

                    this._submenuInstance = null;

                    if (this.submenu) {
                        var targetClassName = '_menuitem-target-' + this.xuid;
                        var menu = this.ownerDocument.createElement('xb-menu');

                        menu.setAttribute('target', '.' + targetClassName);

                        for (var attrName in _xbMenuitem.submenuAttrs) {
                            menu.setAttribute(attrName, _xbMenuitem.submenuAttrs[ attrName ]);
                        }

                        menu.innerHTML = this.content;

                        this.classList.add(targetClassName);
                        this._submenuInstance = this.ownerDocument.body.appendChild(menu);
                    }

                    return this._submenuInstance;
                }
            }
        }
    }
]);

/* blocks/menuitem/menuitem.js end */

    /* blocks/menu/menu.js begin */
/* global global, xblocks, __forEach, xb */
/* jshint strict: false */

/* blocks/menu/_contextmenu.js begin */
/* global xblocks, __doc */

__doc.addEventListener('contextmenu', xblocks.event.delegate('[contextmenu]', function(event) {
    var element = event.delegateElement;
    var doc = element.ownerDocument;
    var menuId = element.getAttribute('contextmenu');
    var menuElement = menuId && doc.getElementById(menuId);

    if (!menuElement || menuElement.xtagName !== 'xb-menu' || menuElement.attrs.type !== 'context') {
        return;
    }

    event.preventDefault();
    event.stopImmediatePropagation();

    var targetElementId = 'xb-contextmenu-target';
    var targetElement = doc.getElementById(targetElementId);

    if (targetElement) {
        if (targetElement._xbpopup) {
            targetElement._xbpopup.close();
        }

    } else {
        targetElement = doc.createElement('div');
        targetElement.id = targetElementId;
        targetElement.style.position = 'absolute';
        targetElement.style.visibility = 'hidden';
        doc.body.appendChild(targetElement);
    }

    targetElement.style.top = event.pageY + 'px';
    targetElement.style.left = event.pageX + 'px';

    menuElement.open({
        'target': targetElement,
        'attachment': 'top left',
        'targetAttachment': 'bottom left',
        // TODO
        // переписать тетхер и сделать для targetModifier значение по умолчанию
        // вместо undefined
        'targetModifier': null,
        'optimizations': {
            'moveElement': false
        },
        'constraints': [
            {
                'to': 'scrollParent',
                'attachment': 'element'
            },
            {
                'to': 'window',
                'attachment': 'element'
            }
        ]
    });

}), false);

/* blocks/menu/_contextmenu.js end */

/* blocks/menu/menu.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Menu
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes xblocks.mixin.vMenu
 * @mixes React.addons.PureRenderMixin
 */
xv.Menu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,
    xblocks.mixin.vMenu,

    {
        'displayName': 'xb-menu',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'type': React.PropTypes.oneOf([ 'context', 'list' ]),
            'size': React.PropTypes.string
        },

        'getDefaultProps': function() {
            return {
                'type': 'list',
                'size': ''
            };
        },

        'afterOpen': function(callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);

/* blocks/menu/menu.jsx.js end */


var _xbMenu = {

    /**
     * @param {xb.Menuitem} target
     * @this {global}
     */
    'closeSubmenu': function(target) {
        if (target._xbpopup) {
            target._xbpopup.close();
        }
    }
};

/**
 * @class xb.Menu
 * @augments xb.Popup
 * @memberof xb
 * @mixes xblocks.mixin.eMenu
 */
xb.Menu = xblocks.create('xb-menu', [
    xblocks.mixin.eMenu,

    {
        'prototype': Object.create(xb.Popup.prototype || new xb.Popup()),

        'events': {
            'xb-before-open': function() {
                this.style.visibility = 'hidden';
            },

            'xb-open': function() {
                this._xbfocus = new xblocks.utils.Table(this, {
                    'rowLoop': true,
                    'colLoop': true
                });

                var component = this.xblock.getMountedComponent();
                if (component) {
                    // check show scroll navigator after open menu
                    component.afterOpen(this._afterOpen.bind(this));

                } else {
                    this._afterOpen();
                }
            },

            'xb-close': function() {
                if (this._xbfocus) {
                    this._xbfocus.destroy();
                    this._xbfocus = undefined;
                }

                this._closeAllSubmenu();
            },

            'keydown:keypass(27)': function() {
                this.close();

                // focus of ancestor
                var parentMenu = this.parentMenu;
                if (parentMenu) {
                    xblocks.utils.lazyFocus(parentMenu);
                }
            },

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this.close();
                    // event.relatedTarget is null in firefox
                    global.setImmediate(this._closeUpFocus.bind(this));
                }
            }
        },

        'accessors': {
            'parentMenu': {
                'get': function() {
                    return this.tether.target.menuInstance;
                }
            },

            'firstParentMenu': {
                'get': function() {
                    var parentMenu = this.parentMenu;

                    if (parentMenu) {
                        return parentMenu.firstParentMenu || parentMenu;
                    }

                    return this;
                }
            }
        },

        'methods': {
            '_closeAllSubmenu': function() {
                __forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    _xbMenu.closeSubmenu
                );
            },

            '_afterOpen': function() {
                this.position();
                this.style.visibility = 'visible';
                // the focus is not put on the invisible element
                // put again
                xblocks.utils.lazyFocus(this);
            },

            '_closeUpFocus': function() {
                var focusMenu = xblocks.utils.getParentMenu(this.ownerDocument.activeElement);
                var parent = this.parentMenu;

                while (parent) {
                    if (parent === focusMenu) {
                        break;
                    }

                    parent.close();
                    parent = parent.parentMenu;
                }
            }
        }
    }
]);

/* blocks/menu/menu.js end */

    /* blocks/menu-inline/menu-inline.js begin */
/* global xblocks, __noop, xb */
/* jshint strict: false */

/**
* Checked in:
* ChromeCanary 40
* FireFox Developer Edition 35
*/

/* blocks/menu-inline/menu-inline.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.MenuInline
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes xblocks.mixin.vMenu
 * @mixes React.addons.PureRenderMixin
 */
xv.MenuInline = xblocks.view.register('xb-menu-inline', [
    xblocks.mixin.vCommonAttrs,
    xblocks.mixin.vMenu,

    {
        'displayName': 'xb-menu-inline',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size': React.PropTypes.string
        },

        'getDefaultProps': function() {
            return {
                'size': ''
            };
        },

        'componentDidMount': function() {
            this._updateMaxHeight(this.props.size);
        }
    }
]);

/* blocks/menu-inline/menu-inline.jsx.js end */


var _xbMenuInline = {
    'init': function() {
        if (this._xbfocus) {
            this._xbfocus.destroy();
        }

        this._xbfocus = new xblocks.utils.Table(this, {
            'col': 'xb-menu-inline:not([disabled])',
            'rowLoop': true,
            'colLoop': true
        });
    }
};

/**
 * @class xb.MenuInline
 * @memberof xb
 * @mixes xblocks.mixin.eFocus
 * @mixes xblocks.mixin.eMenu
 */
xb.MenuInline = xblocks.create('xb-menu-inline', [
    xblocks.mixin.eFocus,
    xblocks.mixin.eMenu,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            'xb-created': _xbMenuInline.init,

            'xb-repaint': _xbMenuInline.init,

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this._xbfocus.blurItem();
                }
            }
        },

        'methods': {
            'open': __noop,

            'close': function() {
                // FireFox does not fire a blur event
                xblocks.utils.lazyFocus(this);
            }
        }
    }
]);

/* blocks/menu-inline/menu-inline.js end */

    /* blocks/select/select.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/select/select.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, Tether, xv */
/* jshint strict: false */

/**
 * @class xv.Select
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
xv.Select = xblocks.view.register('xb-select', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-select',

        'propTypes': {
            'autocomplete':     React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocorrect':      React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocapitalize':   React.PropTypes.oneOf([ 'on', 'off' ]),
            'size':             React.PropTypes.string,
            'form':             React.PropTypes.string,
            'name':             React.PropTypes.string,
            'autofocus':        React.PropTypes.bool,
            'multiple':         React.PropTypes.bool,
            'required':         React.PropTypes.bool,
            'disabled':         React.PropTypes.bool
        },

        'getDefaultProps': function() {
            return {
                'required':  false,
                'multiple':  false,
                'autofocus': false,
                'disabled':  false,
                'tabindex':  '1'
            };
        },

        'componentDidMount': function() {
            new Tether({
                element: React.findDOMNode(this.refs.dropdown),
                target: React.findDOMNode(this.refs.control),
                attachment: 'top left',
                targetAttachment: 'bottom left',
                classPrefix: 'xb-dialog',
                constraints: [
                    {
                        to: 'window',
                        attachment: 'together none'
                    }
                ],
                optimizations: {
                    gpu: false
                },
                classes: {
                    element: 'xb-dialog'
                }
            });
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-select': true,
                '_disabled': this.props.disabled
            };

            classes = classNames(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                React.createElement("div", {className: classes}, 
                    React.createElement("input", {className: "_controller"}), 
                    React.createElement(xv.Button, {ref: "control", type: "inline"}), 
                    React.createElement("div", {ref: "dropdown", className: "_xb-select-dropdown"}, 
                        React.createElement("ul", {className: "_group"}, 
                            React.createElement("li", {className: "_item"}, React.createElement("a", {className: "_item-control"}, "1")), 
                            React.createElement("li", {className: "_item"}, React.createElement("a", {className: "_item-control"}, "2")), 
                            React.createElement("li", {className: "_item"}, React.createElement("a", {className: "_item-control"}, "3"))
                        )
                    )
                )
            );
        }
        /* jshint ignore:end */
    }
]);

/* blocks/select/select.jsx.js end */


xblocks.create('xb-select', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eFocus,

    {
        'prototype': Object.create(HTMLSelectElement.prototype)
    }
]);

/* blocks/select/select.js end */


}(function() {
    return this || (1, eval)('this');
}()));
