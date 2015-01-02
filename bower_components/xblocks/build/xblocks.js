/* ../node_modules/xblocks-utils/xblocks-utils.js begin */
/* jshint -W067 */
/* jshint unused: false */
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

    var indexOf = Array.prototype.indexOf;
    var pop = Array.prototype.pop;
    var slice = Array.prototype.slice;
    var hasOwnProperty = Object.prototype.hasOwnProperty;

    /* xblocks/utils.js begin */
// Time
/* xblocks/utils/debounce.js begin */
/* global xblocks, global */
/* jshint strict: false */

xblocks.utils.debounce = function(callback, delay, context) {
    var args;
    var maxTimeoutId;
    var result;
    var stamp;
    var timeoutId;
    var trailingCall;
    var lastCalled = 0;
    var maxWait = false;
    var trailing = false;
    var leading = true;
    var contextCall;

    delay = Number(delay || 250);

    function delayed() {
        var now = Date.now();
        var remaining = delay - (now - stamp);

        if (remaining <= 0 || remaining > delay) {
            if (maxTimeoutId) {
                global.clearTimeout(maxTimeoutId);
            }

            var isCalled = trailingCall;
            maxTimeoutId = timeoutId = trailingCall = undefined;

            if (isCalled) {
                lastCalled = now;
                result = callback.apply(contextCall, args);

                if (!timeoutId && !maxTimeoutId) {
                    args = contextCall = null;
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

        if (trailing || (maxWait !== delay)) {
            lastCalled = Date.now();
            result = callback.apply(contextCall, args);

            if (!timeoutId && !maxTimeoutId) {
                args = contextCall = null;
            }
        }
    }

    return function() {
        args = arguments;
        contextCall = (context || this);
        stamp = Date.now();
        trailingCall = trailing && (timeoutId || !leading);

        var leadingCall;
        var isCalled;
        var remaining;

        if (maxWait === false) {
            leadingCall = leading && !timeoutId;

        } else {
            if (!maxTimeoutId && !leading) {
                lastCalled = stamp;
            }

            remaining = maxWait - (stamp - lastCalled);
            isCalled = remaining <= 0 || remaining > maxWait;

            if (isCalled) {
                if (maxTimeoutId) {
                    maxTimeoutId = global.clearTimeout(maxTimeoutId);
                }

                lastCalled = stamp;
                result = callback.apply(contextCall, args);

            } else if (!maxTimeoutId) {
                maxTimeoutId = global.setTimeout(maxDelayed, remaining);
            }
        }

        if (isCalled && timeoutId) {
            timeoutId = global.clearTimeout(timeoutId);

        } else if (!timeoutId && delay !== maxWait) {
            timeoutId = global.setTimeout(delayed, delay);
        }

        if (leadingCall) {
            isCalled = true;
            result = callback.apply(contextCall, args);
        }

        if (isCalled && !timeoutId && !maxTimeoutId) {
            args = contextCall = null;
        }

        return result;
    };
};

/* xblocks/utils/debounce.js end */

/* xblocks/utils/throttle.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * Выполнение функции не чаще одного раза в указанный период
 */
xblocks.utils.throttle = function(callback, delay, context) {
    delay = Number(delay || 250);
    var throttle = 0;

    return function() {
        if (throttle) {
            return;
        }

        throttle = global.setTimeout(function() {
            throttle = 0;
        }, delay);

        callback.apply(context || this, arguments);
    };
};

/* xblocks/utils/throttle.js end */

/* xblocks/utils/microtask.js begin */
/* global global, xblocks */
/* jshint strict: false */

xblocks.utils.microtask = (function() {
    var iterations = 0;
    var callbacks = [];
    var twiddle = global.document.createTextNode('');
    var Mutation = global.MutationObserver || global.JsMutationObserver;

    (new Mutation(function() {
        while (callbacks.length) {
            callbacks.shift()();
        }

    })).observe(twiddle, {
        characterData: true
    });

    return function(callback) {
        twiddle.textContent = iterations++;
        callbacks.push(callback);
    };

}());

/* xblocks/utils/microtask.js end */


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
/* global xblocks, hasOwnProperty */
/* jshint strict: false */

/**
 * @param {*} obj
 * @returns {boolean}
 */
xblocks.utils.isEmptyObject = function(obj) {
    if (xblocks.utils.type(obj) === 'object') {
        for (var key in obj) {
            if (hasOwnProperty.call(obj, key)) {
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
/* global pop, slice */

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
        return pop.call(slice.call(this._node.querySelectorAll(this._options.col))) || this._node;
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
        return pop.call(slice.call(col.querySelectorAll(this._options.row)));
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


/* xblocks/utils.js end */

    /* xblocks/dom.js begin */
/* xblocks/dom/index.js begin */
/* global xblocks, global, indexOf */
/* jshint strict: false */

xblocks.dom.index = function(selector, element, context) {
    return indexOf.call((context || global.document).querySelectorAll(selector), element);
};

/* xblocks/dom/index.js end */

/* xblocks/dom/isParent.js begin */
/* global xblocks, global */
/* jshint strict: false */

xblocks.dom.isParent = (function() {
    var root = global.document.documentElement;

    if ('compareDocumentPosition' in root) {
        return function(container, element) {
            /*jshint -W016 */
            return (container.compareDocumentPosition(element) & 16) == 16;
        };

    } else if ('contains' in root) {
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
/* global xblocks, indexOf, global */
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
            return (indexOf.call((this.parentNode || this.ownerDocument).querySelectorAll(selector), this) !== -1);
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


/* xblocks/dom.js end */

    /* xblocks/event.js begin */
/* xblocks/event/delegate.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.event.delegate = function(selector, callback) {

    return function(event) {
        var target = event.target || event.srcElement;
        var match;

        if (!target.tagName) {
            return;
        }

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

xblocks.event._clickWhich = {
    1: 'left',
    2: 'center',
    3: 'right'
};

xblocks.event.filterClick = function(which, callback) {
    which = Array.isArray(which) ? which : [ which ];

    return function(event) {
        if (event.type !== 'click') {
            return;
        }

        var whichEvt = event.which;

        if (!whichEvt && event.button) {
            /* jshint -W016 */
            if (event.button & 1) {
                whichEvt = 1;
            } else if (event.button & 4) {
                whichEvt = 2;
            } else if (event.button & 2) {
                whichEvt = 3;
            }
        }

        whichEvt = xblocks.event._clickWhich[ whichEvt ];

        if (which.indexOf(whichEvt) !== -1) {
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
    var toElement = event.relatedTarget || event.srcElement;

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

    var Tether = global.Tether;

    var React = global.React;

    /**
     * @namespace xblocks
     */
    var xblocks = global.xblocks;

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

    for (var p in props) {
        if (props.hasOwnProperty(p) && p[0] !== '_') {
            exportProps[prefix + p] = props[p];
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


/* utils.js end */

    /* mixin.js begin */
/* global xblocks */
/* jshint strict: false */

/**
 * @memberOf xblocks
 * @namespace xblocks.mixin
 */
xblocks.mixin = xblocks.mixin || {};

/* mixin/eDisabled.js begin */
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
 * @name eDisabled
 */
xblocks.mixin.eDisabled = {
    accessors: {
        disabled: {
            attribute: {
                boolean: true
            }
        }
    }
};

/* mixin/eDisabled.js end */

/* mixin/eChecked.js begin */
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
 * @name eChecked
 */
xblocks.mixin.eChecked = {
    accessors: {
        checked: {
            attribute: {
                boolean: true
            }
        }
    }
};

/* mixin/eChecked.js end */

/* mixin/eInputValueState.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.mixin.eInputValueState = {
    accessors: {
        value: {
            get: function() {
                if (this.mounted) {
                    return this.xblock._component.state.value;

                } else {
                    var controlNode = this.querySelector('input,textarea');
                    return (controlNode ? controlNode.value : '');
                }
            },

            set: function(value) {
                if (this.mounted) {
                    this.xblock._component.setState({
                        'value': String(value)
                    });

                } else {
                    var controlNode = this.querySelector('input,textarea');
                    if (controlNode) {
                        controlNode.value = String(value);
                    }
                }
            }
        }
    }
};

/* mixin/eInputValueState.js end */

/* mixin/eInputValueProps.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.mixin.eInputValueProps = {
    accessors: {
        value: {
            attribute: {
                name: 'value'
            },

            get: function() {
                return String(this.getAttribute('value') || this.defaultValue || '');
            }
        },

        defaultValue: {
            get: function() {
                return '';
            }
        }
    }
};

/* mixin/eInputValueProps.js end */

/* mixin/eFocus.js begin */
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
 * @name eFocus
 * @type {{methods: {focus: focus, blur: blur}}}
 */
xblocks.mixin.eFocus = {
    methods: {
        focus: function() {
            this.firstChild.focus();
        },

        blur: function() {
            this.firstChild.blur();
        }
    }
};

/* mixin/eFocus.js end */


/* mixin/vChecked.js begin */
/* global xblocks */
/* jshint strict: false */

xblocks.mixin.vChecked = {

    /**
     * @returns {boolean}
     */
    isChecked: function() {
        if (this.refs.checkControl) {
            return this.refs.checkControl.getDOMNode().checked;
        }
    },

    /**
     * @param {boolean} isChecked
     */
    setChecked: function(isChecked) {
        if (this.refs.checkControl) {
            this.refs.checkControl.getDOMNode().checked = Boolean(isChecked);
        }
    }
};

/* mixin/vChecked.js end */

/* mixin/vCommonAttrs.js begin */
/* global xblocks, React */
/* jshint strict: false */

xblocks.mixin.vCommonAttrs = {
    'propTypes': {
        'accesskey': React.PropTypes.string,
        'contextmenu': React.PropTypes.string,
        'dir': React.PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'hidden': React.PropTypes.bool,
        'spellcheck': React.PropTypes.bool,
        'tabindex': React.PropTypes.string,
        'title': React.PropTypes.string
    }
};

/* mixin/vCommonAttrs.js end */


/* mixin.js end */


    /* blocks/ico/ico.js begin */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/ico/ico.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBIco = xblocks.view.register('xb-ico', {
    displayName: 'xb-ico',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'alt': React.PropTypes.string,
        'title': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'children': React.PropTypes.node,
        'size': React.PropTypes.oneOf([ 's', 'm' ]),
        'type': React.PropTypes.oneOf([
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
        ]),
        'active': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 's',
            'children': String.fromCharCode(160)
        };
    },

    render: function() {
        var classes = {
            'xb-ico': true,
            '_active': this.props.active,
            '_disabled': this.props.disabled
        };

        if (this.props.type) {
            classes['_type-' + this.props.type] = true;
        }

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        var content = this.props.value || this.props.children;

        return (
            React.DOM.span( {className:classes,
                title:this.props.title,
                tabIndex:tabIndex,
                'data-xb-content':this.props._uid}, content)
        );
    }
});

var XBIcoFactory = React.createFactory(XBIco);

/* blocks/ico/ico.jsx.js end */


xblocks.create('xb-ico', [
    xblocks.mixin.eDisabled,

    {
        accessors: {
            active: {
                get: function() {
                    return xblocks.dom.attrs.valueConversion(
                        'active',
                        this.getAttribute('active'),
                        React.PropTypes.bool
                    );
                },

                set: function(isActive) {
                    if (isActive) {
                        this.setAttribute('active', '');
                    } else {
                        this.removeAttribute('active');
                    }
                }
            }
        }
    }
]);

/* blocks/ico/ico.js end */

    /* blocks/link/link.js begin */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/link/link.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBLink = xblocks.view.register('xb-link', {
    displayName: 'xb-link',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'href': React.PropTypes.string,
        'name': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'target': React.PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
        'theme': React.PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'input' ])
    },

    getDefaultProps: function() {
        return {
            'theme': 'normal',
            'tabindex': '1'
        };
    },

    render: function() {
        var classes = {
            'xb-link': true,
            '_disabled': this.props.disabled
        };

        if (this.props.theme) {
            classes['_theme-' + this.props.theme] = true;
        }

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        classes = React.addons.classSet(classes);

        var content = this.props.value || this.props.children;

        return (
            React.DOM.a( {id:this.props.id,
                name:this.props.name,
                href:this.props.href,
                target:this.props.target,
                tabIndex:tabIndex,
                className:classes,
                'data-xb-content':this.props._uid}, content)
        );
    }
});

var XBLinkFactory = React.createFactory(XBLink);

/* blocks/link/link.jsx.js end */


xblocks.create('xb-link', [
    xblocks.mixin.eDisabled
]);

/* blocks/link/link.js end */

    /* blocks/button/button.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/button/button.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

/* blocks/button/button-content.jsx.js begin */
/** @jsx React.DOM */
/* jshint strict: false */

var XBButtonContent = xblocks.view.create({
    displayName: 'XBButtonContent',

    propTypes: {
        'ico': React.PropTypes.object
    },

    getDefaultProps: function() {
        return {
            'ico': {}
        };
    },

    shouldComponentUpdate: function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    render: function() {
        var icoProps = xblocks.utils.merge({}, this.props.ico);
        var children = [
            React.DOM.span( {className:"_content-content",
                key:"content",
                'data-xb-content':this.props._uid}, this.props.children)
        ];

        if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';
            var icoView = XBIcoFactory(icoProps);

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(icoView);

            } else if (icoProps.float === 'right') {
                children.push(icoView);
            }
        }

        return (
            React.DOM.span( {className:"_content"}, children)
        );
    }
});

var XBButtonContentFactory = React.createFactory(XBButtonContent);

/* blocks/button/button-content.jsx.js end */


var XBButton = xblocks.view.register('xb-button', [
    xblocks.utils.exportPropTypes('xb-ico'),

    {
        displayName: 'xb-button',

        propTypes: {
            'children': React.PropTypes.node,
            'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'theme': React.PropTypes.oneOf([
                'normal',
                'action',
                'dark',
                'flying',
                'pseudo-inverted',
                'pseudo',
                'promo'
            ]),
            'type': React.PropTypes.oneOf([
                'label',
                'inline',
                'link',
                'file',

                'button',
                'submit',

                'checkbox',
                'radio'
            ]),
            'target': React.PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
            'value': React.PropTypes.string,
            'href': React.PropTypes.string,
            'name': React.PropTypes.string,
            'title': React.PropTypes.string,
            'form': React.PropTypes.string,
            'for': React.PropTypes.string,
            'tabindex': React.PropTypes.string,

            'multiple': React.PropTypes.bool,
            'autofocus': React.PropTypes.bool,
            'disabled': React.PropTypes.bool,
            'checked': React.PropTypes.bool,
            'required': React.PropTypes.bool
        },

        statics: {
            filterIcoProps: function(props) {
                return xblocks.utils.mapObject(
                    xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixIco),
                    xblocks.utils.mapPropsPrefixIco
                );
            }
        },

        getDefaultProps: function() {
            return {
                'size': 'm',
                'theme': 'normal',
                'type': 'button',
                'tabindex': '0',
                'children': String.fromCharCode(160),
                'checked': false,
                'multiple': false,
                'autofocus': false,
                'disabled': false,
                'required': false
            };
        },

        getInitialState: function() {
            return {
                'checked': this.props.checked
            };
        },

        componentWillReceiveProps: function(nextProps) {
            this.setState({
                'checked': Boolean(nextProps.checked)
            });
        },

        componentWillUpdate: function(nextProps, nextState) {
            if (nextProps.type === 'radio' && nextState.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), nextProps.name);
            }
        },

        componentWillMount: function() {
            if (this.props.type === 'radio' && this.state.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), this.props.name);
            }
        },

        _onChange: function(event) {
            this.container().checked = event.target.checked;
        },

        render: function() {
            var classes = {
                'xb-button': true,
                '_disabled': this.props.disabled
            };

            if (this.props.theme) {
                classes['_theme-' + this.props.theme] = true;
            }

            if (this.props.size) {
                classes['_size-' + this.props.size] = true;
            }

            classes = React.addons.classSet(classes);

            var icoProps = XBButton.filterIcoProps(this.props);
            var tabIndex = this.props.tabindex;
            var type = this.props.type;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            var content = (
                XBButtonContentFactory(
                    {key:"content",
                    _uid:this.props._uid,
                    ico:icoProps}, 

                    this.props.children
                )
            );

            if (type === 'link') {
                return (
                    React.DOM.a( {className:classes,
                        href:this.props.href,
                        name:this.props.name,
                        target:this.props.target,
                        title:this.props.title,
                        tabIndex:tabIndex}, 

                        content
                    )
                );

            } else if (type === 'file') {
                return (
                    React.DOM.label( {className:classes}, 
                        React.DOM.span( {className:"_xb-file-intruder"}, 
                            React.DOM.span( {className:"_xb-file-intruder-inner"}, 
                                React.DOM.input( {className:"_xb-file-intruder-input",
                                    type:"file",
                                    name:this.props.name,
                                    title:this.props.title,
                                    disabled:this.props.disabled,
                                    multiple:this.props.multiple,
                                    autoFocus:this.props.autofocus,
                                    tabIndex:tabIndex}),

                                React.DOM.span( {className:"_xb-file-intruder-focus"} )
                            )
                        ),
                        content
                    )
                );

            } else if (type === 'label' || type === 'checkbox' || type === 'radio') {
                var children = [];

                if (type === 'checkbox' || type === 'radio') {
                    children.push(
                        React.DOM.input( {key:"checkControl",
                            type:type,
                            className:"_xb-check_controller",
                            name:this.props.name,
                            value:this.props.value,
                            disabled:this.props.disabled,
                            defaultChecked:this.props.checked,
                            checked:this.state.checked,
                            autoFocus:this.props.autofocus,
                            readOnly:true,
                            onChange:this._onChange,
                            required:this.props.required,
                            tabIndex:tabIndex})
                    );

                    children.push(XBButtonFactory(xblocks.utils.merge({}, this.props, {
                        'key': 'content',
                        'type': 'inline',
                        'tabindex': null
                    })));

                    classes = React.addons.classSet({
                        'xb-button': true,
                        '_theme-check': true,
                        '_disabled': this.props.disabled
                    });

                } else {
                    children.push(
                        React.DOM.span( {key:"file-intruder", className:"_xb-file-intruder"}, 
                            React.DOM.span( {className:"_xb-file-intruder-inner"}, 
                                React.DOM.input( {className:"_xb-file-intruder-input",
                                    type:"button",
                                    disabled:this.props.disabled,
                                    autoFocus:this.props.autofocus,
                                    tabIndex:tabIndex}),

                                React.DOM.span( {className:"_xb-file-intruder-focus"} )
                            )
                        )
                    );

                    children.push(content);
                }

                return (
                    React.DOM.label( {className:classes,
                        form:this.props.form,
                        htmlFor:this.props['for'],
                        title:this.props.title}, children)
                );

            } else if (type === 'inline') {
                return (
                    React.DOM.span( {className:classes,
                        tabIndex:tabIndex}, 

                        content
                    )
                );

            } else {
                return (
                    React.DOM.button( {className:classes,
                        type:type,
                        form:this.props.form,
                        title:this.props.title,
                        name:this.props.name,
                        value:this.props.value,
                        tabIndex:tabIndex,
                        disabled:this.props.disabled,
                        autoFocus:this.props.autofocus}, 

                        content
                    )
                );
            }
        }
    }
]);

var XBButtonFactory = React.createFactory(XBButton);

/* blocks/button/button.jsx.js end */


xblocks.create('xb-button', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            defaultValue: {
                get: function() {
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
/* global xblocks, React */
/* jshint strict: false */

/* blocks/input/input.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React, XBInputControllerFactory */
/* jshint strict: false */

/* blocks/input/input-controller.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

var XBInputController = xblocks.view.create({
    displayName: 'XBInputController',

    propTypes: {
        'className': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readOnly': React.PropTypes.bool,
        'autosize': React.PropTypes.bool,
        'autoFocus': React.PropTypes.bool,
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabIndex': React.PropTypes.string,
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),

        'onChange': React.PropTypes.func,
        'onHintToggle': React.PropTypes.func,
        'isPlaceholderHint': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'value': ''
        };
    },

    componentDidUpdate: function(prevProps) {
        this._recalculateSize();
        this._dispatchEventToggleHint(prevProps.value, this.props.value);
    },

    componentDidMount: function() {
        this._recalculateSize();
    },

    _dispatchEventToggleHint: function(prevValue, nextValue) {
        if (this.props.isPlaceholderHint) {
            var hasPrevValue = Boolean(prevValue);
            var hasNestValue = Boolean(nextValue);

            /* jshint -W016 */
            if (hasPrevValue ^ hasNestValue) {
                this.props.onHintToggle(hasPrevValue && !hasNestValue);
            }
        }
    },

    _recalculateSize: function() {
        if (this.props.autosize) {
            var node = this.getDOMNode();

            if (this.props.multiline) {
                node.style.height = '0px';
                node.style.height = node.scrollHeight + 'px';

            } else {
                node.style.width = '20px';
                node.style.width = (node.scrollWidth < 20 ? 20 : node.scrollWidth) + 'px';
            }
        }
    },

    render: function() {
        var tabIndex = this.props.tabIndex;
        if (this.props.disabled && tabIndex) {
            tabIndex = '-1';
        }

        if (this.props.multiline) {
            return (
                React.DOM.textarea( {value:this.props.value,
                    className:this.props.className,
                    name:this.props.name,
                    disabled:this.props.disabled,
                    required:this.props.required,
                    readOnly:this.props.readOnly,
                    autoFocus:this.props.autoFocus,
                    rows:this.props.rows,
                    cols:this.props.cols,
                    placeholder:this.props.placeholder,
                    tabIndex:tabIndex,
                    autocomplete:this.props.autocomplete,
                    onChange:this.props.onChange})
            );

        } else {
            return (
                React.DOM.input( {value:this.props.value,
                    type:"text",
                    className:this.props.className,
                    name:this.props.name,
                    disabled:this.props.disabled,
                    required:this.props.required,
                    readOnly:this.props.readOnly,
                    autoFocus:this.props.autoFocus,
                    placeholder:this.props.placeholder,
                    tabIndex:tabIndex,
                    autocomplete:this.props.autocomplete,
                    onChange:this.props.onChange})
            );
        }
    }
});

var XBInputControllerFactory = React.createFactory(XBInputController);

/* blocks/input/input-controller.jsx.js end */


// TODO "list" attribute
// TODO "pattern" attribute
// TODO "title" attribute

var XBInput = xblocks.view.register('xb-input', [
    xblocks.utils.exportPropTypes('xb-link'),

    {
        displayName: 'xb-input',

        propTypes: {
            'id': React.PropTypes.string,
            'class': React.PropTypes.string,
            'name': React.PropTypes.string,
            'disabled': React.PropTypes.bool,
            'autosize': React.PropTypes.bool,
            'multiline': React.PropTypes.bool,
            'required': React.PropTypes.bool,
            'readonly': React.PropTypes.bool,
            'reset': React.PropTypes.bool,
            'autofocus': React.PropTypes.bool,
            'ghost': React.PropTypes.bool,
            'type': React.PropTypes.oneOf([
                'text', 'number', 'date', 'datetime', 'email', 'month',
                'range', 'search', 'tel', 'time', 'url', 'week', 'color'
            ]),
            'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'rows': React.PropTypes.string,
            'cols': React.PropTypes.string,
            'placeholder': React.PropTypes.string,
            'value': React.PropTypes.string,
            'prefix': React.PropTypes.string,
            'postfix': React.PropTypes.string,
            'tabindex': React.PropTypes.string,
            'xb-link': React.PropTypes.string
        },

        statics: {
            filterLinkProps: function(props) {
                return xblocks.utils.mapObject(
                    xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixLink),
                    xblocks.utils.mapPropsPrefixLink
                );
            }
        },

        shouldComponentUpdate: function(nextProps, nextState) {
            return (
                !xblocks.utils.equals(nextProps, this.props) ||
                !xblocks.utils.equals(nextState, this.state)
            );
        },

        getDefaultProps: function() {
            return {
                'value': '',
                'type': 'text',
                'size': 'm',
                'rows': '4'
            };
        },

        getInitialState: function() {
            return {
                'value': this.props.value
            };
        },

        componentDidMount: function() {
            // check show or hide placeholder after mount element
            this.refs.controller._dispatchEventToggleHint('', this.props.value);
        },

        /**
         * Remember current value in state
         * @param {Event} event
         * @private
         */
        _onChange: function(event) {
            this.setState({
                'value': event.target.value
            });
        },

        /**
         * Show or hide placeholder
         * @param {boolean} toggle
         * @private
         */
        _onHintToggle: function(toggle) {
            this.refs.placeholder.getDOMNode().style.visibility = (toggle ? 'inherit' : 'hidden');
        },

        /**
         * Check show complex input
         * @returns {boolean}
         * @private
         */
        _isComplex: function() {
            return (
                this.props.postfix ||
                this.props.prefix ||
                this.props.reset ||
                this.props.autosize ||
                this.props['xb-link']
            );
        },

        /**
         * Click reset button
         * @private
         */
        _onClickReset: function() {
            this.setState({
                'value': ''
            });
        },

        render: function() {
            var isComplex = this._isComplex();
            var classes = {
                'xb-input': true,
                '_disabled': Boolean(this.props.disabled),
                '_autosize': Boolean(this.props.autosize),
                '_ghost': Boolean(this.props.ghost)
            };

            if (this.props.size) {
                classes['_size-' + this.props.size] = true;
            }

            if (isComplex) {
                classes._complex = true;
            } else {
                classes._simple = true;
            }

            classes = React.addons.classSet(classes);

            var isPlaceholderHint = false;

            if (isComplex) {
                var children = [];

                if (this.props.placeholder) {
                    isPlaceholderHint = true;

                    children.push(
                        React.DOM.span( {ref:"placeholder", key:"placeholder", className:"_hint"}, 
                            React.DOM.span( {className:"_hint-inner"}, this.props.placeholder)
                        )
                    );
                }

                if (this.props['xb-link']) {
                    var linkProps = XBInput.filterLinkProps(this.props);
                    linkProps['theme'] = 'input';
                    linkProps['key'] = 'label';

                    children.push(XBLinkFactory(linkProps, this.props['xb-link']));
                }

                if (this.props.prefix) {
                    children.push(
                        React.DOM.span( {key:"prefix", className:"_left"}, this.props.prefix)
                    );
                }

                if (this.props.postfix) {
                    children.push(
                        React.DOM.span( {key:"postfix", className:"_right"}, this.props.postfix)
                    );
                }

                if (this.props.reset) {
                    children.push(
                        React.DOM.span( {key:"reset", className:"_reset", onClick:this._onClickReset})
                    );
                }

                children.push(
                    React.DOM.span( {key:"content", className:"_content"}, 
                        XBInputControllerFactory( {key:"controller",
                            ref:"controller",
                            className:"_controller",
                            value:this.state.value,
                            name:this.props.name,
                            disabled:this.props.disabled,
                            required:this.props.required,
                            readOnly:this.props.readonly,
                            multiline:this.props.multiline,
                            autoFocus:this.props.autofocus,
                            rows:this.props.rows,
                            cols:this.props.cols,
                            tabIndex:this.props.tabindex,
                            autocomplete:this.props.autocomplete,
                            autosize:this.props.autosize,
                            onChange:this._onChange,
                            onHintToggle:this._onHintToggle,
                            isPlaceholderHint:isPlaceholderHint}),
                        React.DOM.span( {key:"view", className:"_view"})
                    )
                );

                return (
                    React.DOM.label( {className:classes}, children)
                );

            } else {

               return (
                    XBInputControllerFactory( {key:"controller",
                        ref:"controller",
                        className:classes,
                        value:this.state.value,
                        name:this.props.name,
                        disabled:this.props.disabled,
                        required:this.props.required,
                        readOnly:this.props.readonly,
                        multiline:this.props.multiline,
                        autoFocus:this.props.autofocus,
                        rows:this.props.rows,
                        cols:this.props.cols,
                        placeholder:this.props.placeholder,
                        tabIndex:this.props.tabindex,
                        autocomplete:this.props.autocomplete,
                        autosize:this.props.autosize,
                        onChange:this._onChange,
                        onHintToggle:this._onHintToggle,
                        isPlaceholderHint:isPlaceholderHint})
                );
            }
        }
    }
]);

var XBInputFactory = React.createFactory(XBInput);

/* blocks/input/input.jsx.js end */


xblocks.create('xb-input', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueState,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);

/* blocks/input/input.js end */

    /* blocks/checkbox/checkbox.js begin */
/* global xblocks, React */
/* jshint strict: false */

/* blocks/checkbox/checkbox.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBCheckbox = xblocks.view.register('xb-checkbox', [ {
    displayName: 'xb-checkbox',

    propTypes: {
        'children': React.PropTypes.node,
        'size': React.PropTypes.oneOf([ 's', 'm' ]),
        'value': React.PropTypes.string,
        'name': React.PropTypes.string,
        'title': React.PropTypes.string,
        'form': React.PropTypes.string,
        'for': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'autofocus': React.PropTypes.bool,
        'checked': React.PropTypes.bool,
        'disabled': React.PropTypes.bool,
        'required': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'children': '',
            'value': 'on',
            'tabindex': '0',
            'checked': false,
            'disabled': false,
            'autofocus': false,
            'required': false
        };
    },

    getInitialState: function() {
        return {
            'checked': this.props.checked
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            'checked': nextProps.checked
        });
    },

    _onChange: function(event) {
        this.setState({
            'checked': event.target.checked
        });
    },

    render: function() {
        var classes = {
            'xb-checkbox': true,
            '_disabled': this.props.disabled
        };

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        return (
            React.DOM.label( {className:classes,
                title:this.props.title,
                form:this.props.form,
                htmlFor:this.props['for']}, 

                React.DOM.input( {type:"checkbox",
                    className:"_xb-check_controller",
                    name:this.props.name,
                    value:this.props.value,
                    disabled:this.props.disabled,
                    defaultChecked:this.props.checked,
                    checked:this.state.checked,
                    autoFocus:this.props.autofocus,
                    readOnly:true,
                    onChange:this._onChange,
                    required:this.props.required,
                    tabIndex:tabIndex}),

                React.DOM.span( {className:"_xb-checkbox_flag _xb-check_flag"}, 
                    React.DOM.span( {className:"_xb-checkbox_flag-icon"})
                ),
                React.DOM.span( {'data-xb-content':this.props._uid}, this.props.children)
            )
        );
    }
} ]);

var XBCheckboxFactory = React.createFactory(XBCheckbox);

/* blocks/checkbox/checkbox.jsx.js end */


xblocks.create('xb-checkbox', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            defaultValue: {
                get: function() {
                    return 'on';
                }
            }
        }
    }
]);

/* blocks/checkbox/checkbox.js end */

    /* blocks/radio/radio.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/radio/radio.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBRadio = xblocks.view.register('xb-radio', [ {
    displayName: 'xb-radio',

    propTypes: {
        'children': React.PropTypes.node,
        'size': React.PropTypes.oneOf([ 's', 'm' ]),
        'value': React.PropTypes.string,
        'name': React.PropTypes.string,
        'title': React.PropTypes.string,
        'form': React.PropTypes.string,
        'for': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'autofocus': React.PropTypes.bool,
        'checked': React.PropTypes.bool,
        'disabled': React.PropTypes.bool,
        'required': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'children': '',
            'value': 'on',
            'tabindex': '0',
            'checked': false,
            'disabled': false,
            'autofocus': false,
            'required': false
        };
    },

    getInitialState: function() {
        return {
            'checked': this.props.checked
        };
    },

    componentWillReceiveProps: function(nextProps) {
        this.setState({
            'checked': Boolean(nextProps.checked)
        });
    },

    componentWillUpdate: function(nextProps, nextState) {
        if (nextState.checked) {
            xblocks.utils.resetLastRadioChecked(this.container(), nextProps.name);
        }
    },

    componentWillMount: function() {
        if (this.state.checked) {
            xblocks.utils.resetLastRadioChecked(this.container(), this.props.name);
        }
    },

    _onChange: function(event) {
        this.container().checked = event.target.checked;
    },

    render: function() {
        var classes = {
            'xb-radio': true,
            '_disabled': this.props.disabled
        };

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        return (
            React.DOM.label( {className:classes,
                title:this.props.title,
                form:this.props.form,
                htmlFor:this.props['for']}, 

                React.DOM.input( {type:"radio",
                    className:"_xb-check_controller",
                    name:this.props.name,
                    value:this.props.value,
                    disabled:this.props.disabled,
                    defaultChecked:this.props.checked,
                    checked:this.state.checked,
                    autoFocus:this.props.autofocus,
                    readOnly:true,
                    onChange:this._onChange,
                    required:this.props.required,
                    tabIndex:tabIndex}),

                React.DOM.span( {className:"_xb-radio_flag _xb-check_flag"}, 
                    React.DOM.span( {className:"_xb-radio_flag-icon"})
                ),
                React.DOM.span( {'data-xb-content':this.props._uid}, this.props.children)
            )
        );
    }
} ]);

var XBRadioFactory = React.createFactory(XBRadio);

/* blocks/radio/radio.jsx.js end */


xblocks.create('xb-radio', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eChecked,
    xblocks.mixin.eInputValueProps,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLInputElement.prototype),

        accessors: {
            defaultValue: {
                get: function() {
                    return 'on';
                }
            }
        }
    }
]);

/* blocks/radio/radio.js end */

    /* blocks/popup/popup.js begin */
/* global global, xblocks, Tether */
/* jshint strict: false */

/**
 * Checked in:
 * ChromeCanary 40
 * FireFox Developer Edition 35
 */

/* blocks/popup/popup.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

/* jshint -W098 */
var XBPopup = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-popup',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'close': React.PropTypes.bool,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank' ])
        },

        getDefaultProps: function() {
            return {
                'close': false,
                'theme': 'normal'
            };
        },

        render: function() {
            var children = [
                React.DOM.div( {key:"content",
                    className:"_content",
                    'data-xb-content':this.props._uid,
                    dangerouslySetInnerHTML:{ __html: this.props.children }})
            ];

            children.unshift(this.template('xb-popup-title', {
                'key': 'title',
                'className': '_title'
            }));

            if (this.props.close) {
                children.unshift(
                    React.DOM.a( {key:"close",
                        className:"_close"})
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
                classes['_theme-' + this.props.theme] = true;
            }

            classes = React.addons.classSet(classes);

            return (
                React.DOM.div( {className:classes,
                    tabIndex:"0"}, children)
            );
        }
    }
]);

var XBPopupFactory = React.createFactory(XBPopup);

/* blocks/popup/popup.jsx.js end */


var XBPopupElementStatic = {};

XBPopupElementStatic._onOpen = function() {
    this.focus();
    xblocks.event.dispatch(this, 'xb-open');
};

XBPopupElementStatic._onClose = function() {
    this.blur();
    xblocks.event.dispatch(this, 'xb-close');
};

/* jshint -W098 */
var XBPopupElement = xblocks.create('xb-popup', [
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'click:delegate(._close)': function(evt) {
                var popupNode = xblocks.react.findContainerForNode(this);
                if (popupNode) {
                    popupNode.close();
                }
            },

            'keydown:keypass(27)': function() {
                this.close();
            }
        },

        accessors: {
            options: {
                get: function() {
                    if (this._options) {
                        return this._options;
                    }

                    var tetherAttrs = xblocks.dom.attrs.get(this, {
                        'optimizations-gpu': true,
                        'target': global.document.body,
                        'target-parent': false,
                        'target-attachment': 'middle center',
                        'target-modifier': 'visible',
                        'target-offset': undefined,
                        'attachment': 'middle center',
                        'offset': undefined,
                        'constraints': undefined
                    });

                    this._options = {
                        'enabled': false,
                        'element': this,
                        'target': tetherAttrs['target'],
                        'targetParent': tetherAttrs['target-parent'],
                        'attachment': tetherAttrs['attachment'],
                        'targetAttachment': tetherAttrs['target-attachment'],
                        'targetModifier': tetherAttrs['target-modifier'],
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

            tether: {
                get: function() {
                    if (!this._tether) {
                        this._tether = new Tether(this.options);
                    }

                    return this._tether;
                }
            },

            opened: {
                get: function() {
                    return this.tether.enabled;
                }
            }
        },

        methods: {
            setOptions: function(nextOptions) {
                var tether = this.tether;

                xblocks.utils.merge(true, this.options, nextOptions);
                tether.setOptions(this.options, false);

                if (tether.enabled) {
                    tether.position();
                }
            },

            open: function(options) {
                var tether = this.tether;

                if (tether.enabled) {
                    return false;
                }

                if (typeof(options) === 'object') {
                    this.setOptions(options);
                }

                tether.enable(true);
                tether.target._xbpopup = this;

                // FireFox does not set the focus without delay
                global.setImmediate(XBPopupElementStatic._onOpen.bind(this));

                return true;
            },

            close: function() {
                var tether = this.tether;

                if (!tether.enabled) {
                    return false;
                }

                tether.target._xbpopup = undefined;
                tether.disable();
                tether.clearCache();

                // FireFox does not fire a blur event
                global.setImmediate(XBPopupElementStatic._onClose.bind(this));

                return true;
            },

            position: function() {
                this.tether.position();
                return true;
            }
        }
    }
]);

/* blocks/popup/popup.js end */

    /* blocks/menu/menuseparator.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/menu/menuseparator.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React */

/* jshint strict: false */
/* jshint -W098 */
var XBMenuseparator = xblocks.view.register('xb-menuseparator', {
    displayName: 'xb-menuseparator',

    render: function() {
        return (
            React.DOM.div( {className:"xb-menuseparator"})
        );
    }
});

var XBMenuseparatorFactory = React.createFactory(XBMenuseparator);

/* blocks/menu/menuseparator.jsx.js end */


xblocks.create('xb-menuseparator', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);

/* blocks/menu/menuseparator.js end */

    /* blocks/menu/menuitem.js begin */
/* global xblocks, global */
/* jshint strict: false */

/**
 * Checked in:
 * ChromeCanary 40
 * FireFox Developer Edition 35
 */

/* blocks/menu/menuitem.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React */

/* jshint strict: false */
/* jshint -W098 */
var XBMenuitem = xblocks.view.register('xb-menuitem', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menuitem',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'label': React.PropTypes.string.isRequired,
            'disabled': React.PropTypes.bool,
            'selected': React.PropTypes.bool,
            'focused': React.PropTypes.bool,
            'submenu': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'disabled': false,
                'selected': false,
                'focused': false,
                'submenu': false
            };
        },

        render: function() {
            var classes = {
                'xb-menuitem': true,
                '_disabled': this.props.disabled,
                '_focused': this.props.focused,
                '_selected': this.props.selected,
                '_submenu': this.props.submenu,
            };

            classes = React.addons.classSet(classes);

            return (
                React.DOM.div( {className:classes}, 
                    React.DOM.span(null, this.props.label)
                )
            );
        }
    }
]);

var XBMenuitemFactory = React.createFactory(XBMenuitem);

/* blocks/menu/menuitem.jsx.js end */


var XBMenuitemElementStatic = {};

XBMenuitemElementStatic._timerOpenSubmenu = 0;

XBMenuitemElementStatic._submenuRemove = function() {
    if (this._submenuInstance) {
        this._submenuInstance.close();
        this._submenuInstance.parentNode.removeChild(this._submenuInstance);
        this._submenuInstance = undefined;
    }
};

/* jshint -W098 */
var XBMenuitemElement = xblocks.create('xb-menuitem', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eInputValueProps,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': function() {
                XBMenuitemElementStatic._submenuRemove.call(this);
                this.submenu = Boolean(this.content.trim());
            },

            'xb-repaint': XBMenuitemElementStatic._submenuRemove,

            'xb-blur': function() {
                this.focused = false;

                global.clearTimeout(XBMenuitemElementStatic._timerOpenSubmenu);
                XBMenuitemElementStatic._timerOpenSubmenu = 0;

                var submenu = this.submenuInstance;
                if (submenu && submenu.opened) {
                    // to close the submenu and return focus
                    this.menuInstance.focus();
                }
            },

            'xb-focus': function(event) {
                this.focused = true;

                // open the submenu only event-mouse
                if (event.detail.originalEvent.type !== 'keydown') {
                    var submenu = this.submenuInstance;
                    if (submenu && !XBMenuitemElementStatic._timerOpenSubmenu) {
                        XBMenuitemElementStatic._timerOpenSubmenu = global.setTimeout(submenu.open.bind(submenu), 200);
                    }
                }
            }
        },

        accessors: {
            focused: {
                attribute: {
                    boolean: true
                }
            },

            selected: {
                attribute: {
                    boolean: true
                }
            },

            submenu: {
                attribute: {
                    boolean: true
                }
            },

            menuInstance: {
                get: function() {
                    if (this._menuInstance || this._menuInstance === null) {
                        return this._menuInstance;
                    }

                    this._menuInstance = null;

                    var menuNode = this.parentNode && xblocks.react.findContainerForNode(this.parentNode);

                    if (menuNode && menuNode.xtagName === 'xb-menu') {
                        this._menuInstance = menuNode;
                    }

                    return this._menuInstance;
                }
            },

            submenuInstance: {
                get: function() {
                    if (this._submenuInstance || this._submenuInstance === null) {
                        return this._submenuInstance;
                    }

                    var targetClassName = '_menuitem-target-' + this.xuid;

                    this._submenuInstance = null;

                    if (this.submenu) {
                        this.classList.add(targetClassName);

                        var menu = this.ownerDocument.createElement('xb-menu');
                        menu.setAttribute('target-attachment', 'top right');
                        menu.setAttribute('attachment', 'top left');
                        menu.setAttribute('target', '.' + targetClassName);
                        menu.setAttribute('constraints', encodeURIComponent(JSON.stringify([{
                            'to': 'scrollParent',
                            'attachment': 'together'
                        }])));
                        menu.innerHTML = this.content;

                        this._submenuInstance = this.ownerDocument.body.appendChild(menu);
                    }

                    return this._submenuInstance;
                }
            }
        }
    }
]);

/* blocks/menu/menuitem.js end */

    /* blocks/menu/menu.js begin */
/* global global, xblocks, XBPopupElement */
/* jshint strict: false */

/**
 * Checked in:
 * ChromeCanary 40
 * FireFox Developer Edition 35
 */

/* blocks/menu/menu.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */
/* jshint -W098 */
var XBMenu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menu',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'type': React.PropTypes.oneOf([ 'context', 'toolbar', 'list' ])
        },

        getDefaultProps: function() {
            return {
                'type': 'list'
            };
        },

        render: function() {
            var classes = {
                '_popup': true
            };

            classes = React.addons.classSet(classes);

            return (
                React.DOM.div( {className:classes,
                    tabIndex:"0",
                    'data-xb-content':this.props._uid,
                    dangerouslySetInnerHTML:{ __html: this.props.children }})
            );
        }
    }
]);

var XBMenuFactory = React.createFactory(XBMenu);

/* blocks/menu/menu.jsx.js end */


var XBMenuElementStatic = {};

/**
 * @this {global}
 */
XBMenuElementStatic._closeSubmenu = function(target) {
    if (target._xbpopup) {
        target._xbpopup.close();
    }
};

/**
 * @this {XBMenuElement}
 */
XBMenuElementStatic._closeUpFocus = function() {
    var focusMenu = xblocks.react.findContainerForNode(this.ownerDocument.activeElement);
    var parent = this.parentMenu;

    while (parent) {
        if (parent === focusMenu) {
            break;
        }

        parent.close();
        parent = parent.parentMenu;
    }
};

/* jshint -W098 */
var XBMenuElement = xblocks.create('xb-menu', [
    {
        prototype: Object.create(XBPopupElement.prototype || new XBPopupElement()),

        events: {
            'xb-open': function() {
                this._xbfocus = new xblocks.utils.Table(this, {
                    'rowLoop': true,
                    'colLoop': true
                });
            },

            'xb-close': function() {
                if (this._xbfocus) {
                    this._xbfocus.destroy();
                    this._xbfocus = undefined;
                }

                // close all submenus
                Array.prototype.forEach.call(
                    this.querySelectorAll('.xb-menu-target.xb-menu-enabled'),
                    XBMenuElementStatic._closeSubmenu
                );
            },

            'keydown:keypass(27)': function() {
                this.close();

                // focus of ancestor
                var parentMenu = this.parentMenu;
                if (parentMenu) {
                    parentMenu.focus();
                }
            },

            'keydown:keypass(13,39)': function() {
                var item = this._xbfocus.getItem();

                if (item && item.submenuInstance) {
                    item.submenuInstance.open();
                }
            },

            /**
             * @this {XBMenuitemElement}
             */
            'click:delegate(xb-menuitem:not([disabled]))': function() {
                if (this.submenuInstance) {
                    this.submenuInstance.open();
                }
            },

            'blur': function() {
                if (!this.hasOpenSubmenu) {
                    this.close();
                    // event.relatedTarget is null in firefox
                    global.setImmediate(XBMenuElementStatic._closeUpFocus.bind(this));
                }
            }
        },

        accessors: {
            hasOpenSubmenu: {
                get: function() {
                    return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
                }
            },

            parentMenu: {
                get: function() {
                    return this.tether.target.menuInstance;
                }
            }
        }
    }
]);

/* blocks/menu/menu.js end */

    /* blocks/select/select.js begin */
/* global xblocks */
/* jshint strict: false */

/* blocks/select/select.jsx.js begin */
/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBSelect = xblocks.view.register('xb-select', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-select',

        propTypes: {
            'disabled': React.PropTypes.bool,

            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocorrect':  React.PropTypes.oneOf([ 'on', 'off' ]),
            'autocapitalize':  React.PropTypes.oneOf([ 'on', 'off' ]),

            'size': React.PropTypes.string,
            'autofocus': React.PropTypes.bool,
            'form': React.PropTypes.string,
            'multiple': React.PropTypes.bool,
            'name': React.PropTypes.string,
            'required': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'disabled': false,
                'tabindex': '1'
            };
        },

        componentDidMount: function() {
            new Tether({
                element: this.refs.dropdown.getDOMNode(),
                target: this.refs.control.getDOMNode(),
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

        render: function() {
            var classes = {
                'xb-select': true,
                '_disabled': this.props.disabled
            };

            classes = React.addons.classSet(classes);

            var tabIndex = this.props.tabindex;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            return (
                React.DOM.div( {className:classes}, 
                    React.DOM.input( {className:"_controller"} ),
                    XBButtonFactory( {ref:"control",
                        type:"inline"}),
                    React.DOM.div( {ref:"dropdown", className:"_xb-select-dropdown"}, 
                        React.DOM.ul( {className:"_group"}, 
                            React.DOM.li( {className:"_item"}, React.DOM.a( {className:"_item-control"}, "1")),
                            React.DOM.li( {className:"_item"}, React.DOM.a( {className:"_item-control"}, "2")),
                            React.DOM.li( {className:"_item"}, React.DOM.a( {className:"_item-control"}, "3"))
                        )
                    )
                )
            );
        }
    }
]);

var XBSelectFactory = React.createFactory(XBSelect);

/* blocks/select/select.jsx.js end */


xblocks.create('xb-select', [
    xblocks.mixin.eDisabled,
    xblocks.mixin.eFocus,

    {
        prototype: Object.create(HTMLSelectElement.prototype)
    }
]);

/* blocks/select/select.js end */


}(function() {
    return this || (1, eval)('this');
}()));
