(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xtag"), require("xblocks"), require("React"));
	else if(typeof define === 'function' && define.amd)
		define(["xtag", "xblocks", "React"], factory);
	else if(typeof exports === 'object')
		exports["xblocks"] = factory(require("xtag"), require("xblocks"), require("React"));
	else
		root["xblocks"] = factory(root["xtag"], root["xblocks"], root["React"]);
})(this, function (__WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__) {
return /******/ (function (modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);
	__webpack_require__(3);

	exports.xb = {
	    'Button': __webpack_require__(14),
	    'Checkbox': __webpack_require__(79),
	    'Ico': __webpack_require__(81),
	    'Link': __webpack_require__(83),
	    'Menuseparator': __webpack_require__(85),
	    'Radio': __webpack_require__(87),
	    'Input': __webpack_require__(89),
	    'Popup': __webpack_require__(93),
	    'Menuitem': __webpack_require__(95),
	    'Menu': __webpack_require__(97),
	    'MenuInline': __webpack_require__(102),
	    'Select': '',
	    'SpeechRecognition': '',
	    'Calendar': ''
	};

	/*
	(function (global, undefined) {


	    global.xb = {};
	    global.xv = {};

	    var Tether = global.Tether;

	    var React = global.React;

	    var xblocks = global.xblocks;

	    var xb = global.xb;
	    var xv = global.xv;

	    var __doc = global.document;
	    var __noop = function () {};
	    var __forEach = Array.prototype.forEach;

	}(function () {
	    return this || (1, eval)('this');
	}()));
	*/

/***/ },
/* 1 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(2);
	var lastTime = 0;
	var vendors = ['ms', 'moz', 'webkit', 'o'];
	var vendor;

	for (var x = 0; x < 4 && !context.requestAnimationFrame; ++x) {
	    vendor = vendors[x];
	    context.requestAnimationFrame = context[vendor + 'RequestAnimationFrame'];
	    context.cancelAnimationFrame = context[vendor + 'CancelAnimationFrame'] || context[vendor + 'CancelRequestAnimationFrame'];
	}

	if (!context.requestAnimationFrame) {
	    context.requestAnimationFrame = function (callback) {
	        var currTime = Date.now();
	        var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	        var id = context.setTimeout(function () {
	            callback(currTime + timeToCall);
	        }, timeToCall);
	        lastTime = currTime + timeToCall;
	        return id;
	    };
	}

	if (!context.cancelAnimationFrame) {
	    context.cancelAnimationFrame = function (id) {
	        context.clearTimeout(id);
	    };
	}

/***/ },
/* 2 */
/***/ function (module, exports) {

	'use strict';

	module.exports = (function () {
	    return this || (1, eval)('this');
	})();

/***/ },
/* 3 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xtag = __webpack_require__(4);
	var debounce = __webpack_require__(5);
	var throttle = __webpack_require__(13);

	/**
	 * @example
	 * "scroll:debounce(100,true,false)": function () {}
	 *
	 * @type {Object}
	 */
	xtag.pseudos.debounce = {
	    onCompiled: function onCompiled(listener, pseudo) {
	        var len = pseudo.arguments.length;
	        var wait = Number(pseudo.arguments[0]);
	        var leading = true;
	        var trailing = false;

	        if (len > 1) {
	            leading = pseudo.arguments[1] === 'true';
	        }

	        if (len > 2) {
	            trailing = pseudo.arguments[2] === 'true';
	        }

	        return debounce(listener, wait, {
	            'leading': leading,
	            'trailing': trailing
	        });
	    }
	};

	/**
	 * @example
	 * "scroll:throttle(100,true,false)": function () {}
	 *
	 * @type {Object}
	 */
	xtag.pseudos.throttle = {
	    onCompiled: function onCompiled(listener, pseudo) {
	        var len = pseudo.arguments.length;
	        var wait = Number(pseudo.arguments[0]);
	        var leading = true;
	        var trailing = false;

	        if (len > 1) {
	            leading = pseudo.arguments[1] === 'true';
	        }

	        if (len > 2) {
	            trailing = pseudo.arguments[2] === 'true';
	        }

	        return throttle(listener, wait, {
	            'leading': leading,
	            'trailing': trailing
	        });
	    }
	};

/***/ },
/* 4 */
/***/ function (module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function (module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isObject = __webpack_require__(6),
	    now = __webpack_require__(7);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed invocations. Provide an options object to indicate that `func`
	 * should be invoked on the leading and/or trailing edge of the `wait` timeout.
	 * Subsequent calls to the debounced function return the result of the last
	 * `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=false] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {number} [options.maxWait] The maximum time `func` is allowed to be
	 *  delayed before it's invoked.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // avoid costly calculations while the window size is in flux
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // invoke `sendMail` when the click event is fired, debouncing subsequent calls
	 * jQuery('#postbox').on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // ensure `batchLog` is invoked once after 1 second of debounced calls
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', _.debounce(batchLog, 250, {
	 *   'maxWait': 1000
	 * }));
	 *
	 * // cancel a debounced call
	 * var todoChanges = _.debounce(batchLog, 1000);
	 * Object.observe(models.todo, todoChanges);
	 *
	 * Object.observe(models, function (changes) {
	 *   if (_.find(changes, { 'user': 'todo', 'type': 'delete'})) {
	 *     todoChanges.cancel();
	 *   }
	 * }, ['delete']);
	 *
	 * // ...at some point `models.todo` is changed
	 * models.todo.completed = true;
	 *
	 * // ...before 1 second has passed `models.todo` is deleted
	 * // which cancels the debounced `todoChanges` call
	 * delete models.todo;
	 */
	function debounce(func, wait, options) {
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = wait < 0 ? 0 : (+wait || 0);
	  if (options === true) {
	    var leading = true;
	    trailing = false;
	  } else if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(+options.maxWait || 0, wait);
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function cancel() {
	    if (timeoutId) {
	      clearTimeout(timeoutId);
	    }
	    if (maxTimeoutId) {
	      clearTimeout(maxTimeoutId);
	    }
	    lastCalled = 0;
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	  }

	  function complete(isCalled, id) {
	    if (id) {
	      clearTimeout(id);
	    }
	    maxTimeoutId = timeoutId = trailingCall = undefined;
	    if (isCalled) {
	      lastCalled = now();
	      result = func.apply(thisArg, args);
	      if (!timeoutId && !maxTimeoutId) {
	        args = thisArg = undefined;
	      }
	    }
	  }

	  function delayed() {
	    var remaining = wait - (now() - stamp);
	    if (remaining <= 0 || remaining > wait) {
	      complete(trailingCall, maxTimeoutId);
	    } else {
	      timeoutId = setTimeout(delayed, remaining);
	    }
	  }

	  function maxDelayed() {
	    complete(trailing, timeoutId);
	  }

	  function debounced() {
	    args = arguments;
	    stamp = now();
	    thisArg = this;
	    trailingCall = trailing && (timeoutId || !leading);

	    if (maxWait === false) {
	      var leadingCall = leading && !timeoutId;
	    } else {
	      if (!maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled),
	          isCalled = remaining <= 0 || remaining > maxWait;

	      if (isCalled) {
	        if (maxTimeoutId) {
	          maxTimeoutId = clearTimeout(maxTimeoutId);
	        }
	        lastCalled = stamp;
	        result = func.apply(thisArg, args);
	      }
	      else if (!maxTimeoutId) {
	        maxTimeoutId = setTimeout(maxDelayed, remaining);
	      }
	    }
	    if (isCalled && timeoutId) {
	      timeoutId = clearTimeout(timeoutId);
	    }
	    else if (!timeoutId && wait !== maxWait) {
	      timeoutId = setTimeout(delayed, wait);
	    }
	    if (leadingCall) {
	      isCalled = true;
	      result = func.apply(thisArg, args);
	    }
	    if (isCalled && !timeoutId && !maxTimeoutId) {
	      args = thisArg = undefined;
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 6 */
/***/ function (module, exports) {

	/**
	 * Checks if `value` is the [language type](https://es5.github.io/#x8) of `Object`.
	 * (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an object, else `false`.
	 * @example
	 *
	 * _.isObject({});
	 * // => true
	 *
	 * _.isObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isObject(1);
	 * // => false
	 */
	function isObject(value) {
	  // Avoid a V8 JIT bug in Chrome 19-20.
	  // See https://code.google.com/p/v8/issues/detail?id=2291 for more details.
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 7 */
/***/ function (module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeNow = getNative(Date, 'now');

	/**
	 * Gets the number of milliseconds that have elapsed since the Unix epoch
	 * (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @category Date
	 * @example
	 *
	 * _.defer(function (stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function () {
	  return new Date().getTime();
	};

	module.exports = now;


/***/ },
/* 8 */
/***/ function (module, exports, __webpack_require__) {

	var isNative = __webpack_require__(9);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object == null ? undefined : object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 9 */
/***/ function (module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(10),
	    isHostObject = __webpack_require__(11),
	    isObjectLike = __webpack_require__(12);

	/** Used to detect host constructors (Safari > 5). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var fnToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  fnToString.call(hasOwnProperty).replace(/[\\^$.*+?()[\]{}|]/g, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function, else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (value == null) {
	    return false;
	  }
	  if (isFunction(value)) {
	    return reIsNative.test(fnToString.call(value));
	  }
	  return isObjectLike(value) && (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}

	module.exports = isNative;


/***/ },
/* 10 */
/***/ function (module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isFunction(_);
	 * // => true
	 *
	 * _.isFunction(/abc/);
	 * // => false
	 */
	function isFunction(value) {
	  // The use of `Object#toString` avoids issues with the `typeof` operator
	  // in older versions of Chrome and Safari which return 'function' for regexes
	  // and Safari 8 which returns 'object' for typed array constructors.
	  return isObject(value) && objToString.call(value) == funcTag;
	}

	module.exports = isFunction;


/***/ },
/* 11 */
/***/ function (module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	var isHostObject = (function () {
	  try {
	    Object({ 'toString': 0 } + '');
	  } catch(e) {
	    return function () { return false; };
	  }
	  return function (value) {
	    // IE < 9 presents many host objects as `Object` objects that can coerce
	    // to strings despite having improperly defined `toString` methods.
	    return typeof value.toString != 'function' && typeof (value + '') == 'string';
	  };
	}());

	module.exports = isHostObject;


/***/ },
/* 12 */
/***/ function (module, exports) {

	/**
	 * Checks if `value` is object-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 13 */
/***/ function (module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(5),
	    isObject = __webpack_require__(6);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed invocations. Provide an options object to indicate
	 * that `func` should be invoked on the leading and/or trailing edge of the
	 * `wait` timeout. Subsequent calls to the throttled function return the
	 * result of the last `func` call.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the the throttled function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](http://drupalmotion.com/article/debounce-and-throttle-visual-explanation)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options] The options object.
	 * @param {boolean} [options.leading=true] Specify invoking on the leading
	 *  edge of the timeout.
	 * @param {boolean} [options.trailing=true] Specify invoking on the trailing
	 *  edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // avoid excessively updating the position while scrolling
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // invoke `renewToken` when the click event is fired, but not more than once every 5 minutes
	 * jQuery('.interactive').on('click', _.throttle(renewToken, 300000, {
	 *   'trailing': false
	 * }));
	 *
	 * // cancel a trailing throttled call
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (options === false) {
	    leading = false;
	  } else if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, { 'leading': leading, 'maxWait': +wait, 'trailing': trailing });
	}

	module.exports = throttle;


/***/ },
/* 14 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(15);

	var xblocks = __webpack_require__(16);

	/**
	 * xb-button html element
	 *
	 * @prop {string} [size=m] size, possible values: s|m|l|xl
	 * @prop {string} [theme=normal] normal|action|dark|flying|pseudo-inverted|pseudo|promo
	 * @prop {string} [type=button] label|inline|link|file|button|submit|checkbox|radio
	 * @prop {string} [target] _blank|_self|_parent|_top
	 * @prop {string} [value]
	 * @prop {string} [href]
	 * @prop {string} [name]
	 * @prop {string} [form]
	 * @prop {string} [for]
	 * @prop {boolean} [multiple=false]
	 * @prop {boolean} [autofocus=false]
	 * @prop {boolean} [disabled=false]
	 * @prop {boolean} [checked=false]
	 * @prop {boolean} [required=false]
	 *
	 * @example
	 * &#60;xb-button type="checkbox" name="checkbox" value="1">checkbox&#60;/xb-button>
	 * <xb-button type="checkbox" name="checkbox" value="1">checkbox</xb-button>
	 *
	 * @example
	 * &#60;xb-button type="radio" name="radio" value="1">radio 1&#60;/xb-button>
	 * <xb-button type="radio" name="radio" value="1">radio 1</xb-button> <xb-button type="radio" name="radio" value="2">radio 2</xb-button>
	 *
	 * @augments HTMLInputElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eChecked
	 * @mixes xblocks.mixin.eInputValueProps
	 * @mixes xblocks.mixin.eFocus
	 */
	module.exports = xblocks.create('xb-button', [__webpack_require__(75), __webpack_require__(76), __webpack_require__(77), __webpack_require__(78), {
	    'prototype': Object.create(HTMLInputElement.prototype),

	    'accessors': {
	        'defaultValue': {
	            'get': function get() {
	                var type = this.attrs.type;
	                if (type === 'checkbox' || type === 'radio') {
	                    return 'on';
	                }

	                return '';
	            }
	        }
	    }
	}]);

/***/ },
/* 15 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);
	var resetLastRadioChecked = __webpack_require__(19);
	var filterProps = __webpack_require__(20);

	var ButtonContent = __webpack_require__(71);

	/**
	 * The template node xb-button
	 *
	 * @mixes React.addons.PureRenderMixin
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	module.exports = xblocks.view.register('xb-button', [__webpack_require__(73), __webpack_require__(74)('xb-ico'), {
	    displayName: 'xb-button',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'autofocus': React.PropTypes.bool,
	        'checked': React.PropTypes.bool,
	        'for': React.PropTypes.string,
	        'form': React.PropTypes.string,
	        'href': React.PropTypes.string,
	        'multiple': React.PropTypes.bool,
	        'name': React.PropTypes.string,
	        'required': React.PropTypes.bool,
	        'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	        'target': React.PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
	        'theme': React.PropTypes.oneOf(['action', 'dark', 'flying', 'normal', 'promo', 'pseudo-inverted', 'pseudo']),
	        'type': React.PropTypes.oneOf(['label', 'inline', 'link', 'file', 'button', 'submit', 'checkbox', 'radio']),
	        'value': React.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'checked': false,
	            'children': String.fromCharCode(160),
	            'disabled': false,
	            'multiple': false,
	            'required': false,
	            'size': 'm',
	            'tabindex': '0',
	            'theme': 'normal',
	            'type': 'button'
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            'checked': this.props.checked
	        };
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            'checked': Boolean(nextProps.checked)
	        });
	    },

	    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	        if (nextProps.type === 'radio' && nextState.checked) {
	            resetLastRadioChecked(this.container(), nextProps.name);
	        }
	    },

	    componentWillMount: function componentWillMount() {
	        if (this.props.type === 'radio' && this.state.checked) {
	            resetLastRadioChecked(this.container(), this.props.name);
	        }
	    },

	    _onChange: function _onChange(event) {
	        this.container().checked = event.target.checked;
	    },

	    render: function render() {
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

	        classes = classnames(classes);

	        var icoProps = filterProps(/^xb-ico-/, this.props);
	        var tabIndex = this.props.tabindex;
	        var type = this.props.type;

	        if (this.props.disabled) {
	            tabIndex = '-1';
	        }

	        var content = React.createElement(
	            ButtonContent,
	            { key: 'content', _uid: this.props._uid, ico: icoProps },
	            this.props.children
	        );

	        if (type === 'link') {
	            return React.createElement(
	                'a',
	                { className: classes,
	                    href: this.props.href,
	                    name: this.props.name,
	                    target: this.props.target,
	                    title: this.props.title,
	                    tabIndex: tabIndex },
	                content
	            );
	        } else if (type === 'file') {
	            return React.createElement(
	                'label',
	                { className: classes },
	                React.createElement(
	                    'span',
	                    { className: '_xb-file-intruder' },
	                    React.createElement(
	                        'span',
	                        { className: '_xb-file-intruder-inner' },
	                        React.createElement('input', { className: '_xb-file-intruder-input',
	                            type: 'file',
	                            name: this.props.name,
	                            title: this.props.title,
	                            disabled: this.props.disabled,
	                            multiple: this.props.multiple,
	                            autoFocus: this.props.autofocus,
	                            form: this.props.form,
	                            tabIndex: tabIndex }),
	                        React.createElement('span', { className: '_xb-file-intruder-focus' })
	                    )
	                ),
	                content
	            );
	        } else if (type === 'label' || type === 'checkbox' || type === 'radio') {
	            var children = [];

	            if (type === 'checkbox' || type === 'radio') {
	                children.push(React.createElement('input', { key: 'checkControl',
	                    type: type,
	                    className: '_xb-check_controller',
	                    name: this.props.name,
	                    value: this.props.value,
	                    form: this.props.form,
	                    disabled: this.props.disabled,
	                    defaultChecked: this.props.checked,
	                    checked: this.state.checked,
	                    autoFocus: this.props.autofocus,
	                    readOnly: true,
	                    onChange: this._onChange,
	                    required: this.props.required,
	                    tabIndex: tabIndex }));

	                children.push(React.createElement(xv.Button, _extends({}, this.props, { key: 'content', type: 'inline', tabindex: 'null' })));

	                classes = classnames({
	                    'xb-button': true,
	                    '_theme-check': true,
	                    '_disabled': this.props.disabled
	                });
	            } else {
	                children.push(React.createElement(
	                    'span',
	                    { key: 'file-intruder', className: '_xb-file-intruder' },
	                    React.createElement(
	                        'span',
	                        { className: '_xb-file-intruder-inner' },
	                        React.createElement('input', { className: '_xb-file-intruder-input',
	                            type: 'button',
	                            form: this.props.form,
	                            disabled: this.props.disabled,
	                            autoFocus: this.props.autofocus,
	                            tabIndex: tabIndex }),
	                        React.createElement('span', { className: '_xb-file-intruder-focus' })
	                    )
	                ));

	                children.push(content);
	            }

	            return React.createElement(
	                'label',
	                { className: classes, htmlFor: this.props['for'], title: this.props.title },
	                children
	            );
	        } else if (type === 'inline') {
	            return React.createElement(
	                'span',
	                { className: classes, tabIndex: tabIndex },
	                content
	            );
	        } else {
	            return React.createElement(
	                'button',
	                { className: classes,
	                    type: type,
	                    form: this.props.form,
	                    title: this.props.title,
	                    name: this.props.name,
	                    value: this.props.value,
	                    tabIndex: tabIndex,
	                    disabled: this.props.disabled,
	                    autoFocus: this.props.autofocus },
	                content
	            );
	        }
	    }
	}]);

/***/ },
/* 16 */
/***/ function (module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function (module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function (module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2015 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/

	(function () {
		'use strict';

		function classNames () {

			var classes = '';

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if ('string' === argType || 'number' === argType) {
					classes += ' ' + arg;

				} else if (Array.isArray(arg)) {
					classes += ' ' + classNames.apply(null, arg);

				} else if ('object' === argType) {
					for (var key in arg) {
						if (arg.hasOwnProperty(key) && arg[key]) {
							classes += ' ' + key;
						}
					}
				}
			}

			return classes.substr(1);
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true){
			// AMD. Register as an anonymous module.
			!(__WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.call(exports, __webpack_require__, exports, module), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}

	}());


/***/ },
/* 19 */
/***/ function (module, exports) {

	"use strict";

	var checkedCache = {};

	/**
	 * FIXME don't work cloneNode
	 * @memberOf xblocks.utils
	 * @name resetLastRadioChecked
	 * @props {HTMLElement} element
	 * @props {string} name
	 */
	module.exports = function (element, name) {
	    name = String(name);
	    var lastCheckedElement = checkedCache[name];

	    if (lastCheckedElement && lastCheckedElement !== element) {
	        lastCheckedElement.checked = false;
	    }

	    checkedCache[name] = element;
	};

/***/ },
/* 20 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var pick = __webpack_require__(21);
	var transform = __webpack_require__(44);

	var pickIterator = function pickIterator(value, key) {
	    return this.test(key);
	};
	var transformIterator = function transformIterator(result, value, key) {
	    result[key.replace(this, '')] = value;
	};

	module.exports = function (reg, props) {
	    return transform(pick(props, pickIterator, reg), transformIterator, {}, reg);
	};

/***/ },
/* 21 */
/***/ function (module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFlatten = __webpack_require__(22),
	    bindCallback = __webpack_require__(33),
	    pickByArray = __webpack_require__(35),
	    pickByCallback = __webpack_require__(36),
	    restParam = __webpack_require__(43);

	/**
	 * Creates an object composed of the picked `object` properties. Property
	 * names may be specified as individual arguments or as arrays of property
	 * names. If `predicate` is provided it's invoked for each property of `object`
	 * picking the properties `predicate` returns truthy for. The predicate is
	 * bound to `thisArg` and invoked with three arguments: (value, key, object).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|...(string|string[])} [predicate] The function invoked per
	 *  iteration or property names to pick, specified as individual property
	 *  names or arrays of property names.
	 * @param {*} [thisArg] The `this` binding of `predicate`.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'user': 'fred', 'age': 40 };
	 *
	 * _.pick(object, 'user');
	 * // => { 'user': 'fred' }
	 *
	 * _.pick(object, _.isString);
	 * // => { 'user': 'fred' }
	 */
	var pick = restParam(function (object, props) {
	  if (object == null) {
	    return {};
	  }
	  return typeof props[0] == 'function'
	    ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	    : pickByArray(object, baseFlatten(props));
	});

	module.exports = pick;


/***/ },
/* 22 */
/***/ function (module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(23),
	    isArguments = __webpack_require__(24),
	    isArray = __webpack_require__(32),
	    isArrayLike = __webpack_require__(25),
	    isObjectLike = __webpack_require__(12);

	/**
	 * The base implementation of `_.flatten` with added support for restricting
	 * flattening and specifying the start index.
	 *
	 * @private
	 * @param {Array} array The array to flatten.
	 * @param {boolean} [isDeep] Specify a deep flatten.
	 * @param {boolean} [isStrict] Restrict flattening to arrays-like objects.
	 * @param {Array} [result=[]] The initial result value.
	 * @returns {Array} Returns the new flattened array.
	 */
	function baseFlatten(array, isDeep, isStrict, result) {
	  result || (result = []);

	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    var value = array[index];
	    if (isObjectLike(value) && isArrayLike(value) &&
	        (isStrict || isArray(value) || isArguments(value))) {
	      if (isDeep) {
	        // Recursively flatten arrays (susceptible to call stack limits).
	        baseFlatten(value, isDeep, isStrict, result);
	      } else {
	        arrayPush(result, value);
	      }
	    } else if (!isStrict) {
	      result[result.length] = value;
	    }
	  }
	  return result;
	}

	module.exports = baseFlatten;


/***/ },
/* 23 */
/***/ function (module, exports) {

	/**
	 * Appends the elements of `values` to `array`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {Array} values The values to append.
	 * @returns {Array} Returns `array`.
	 */
	function arrayPush(array, values) {
	  var index = -1,
	      length = values.length,
	      offset = array.length;

	  while (++index < length) {
	    array[offset + index] = values[index];
	  }
	  return array;
	}

	module.exports = arrayPush;


/***/ },
/* 24 */
/***/ function (module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(25),
	    isObjectLike = __webpack_require__(12);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is classified as an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArguments(function () { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  return isObjectLike(value) && isArrayLike(value) &&
	    hasOwnProperty.call(value, 'callee') && !propertyIsEnumerable.call(value, 'callee');
	}

	module.exports = isArguments;


/***/ },
/* 25 */
/***/ function (module, exports, __webpack_require__) {

	var getLength = __webpack_require__(26),
	    isLength = __webpack_require__(31);

	/**
	 * Checks if `value` is array-like.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value));
	}

	module.exports = isArrayLike;


/***/ },
/* 26 */
/***/ function (module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(27);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792)
	 * that affects Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 27 */
/***/ function (module, exports, __webpack_require__) {

	var toObject = __webpack_require__(28);

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function (object) {
	    return object == null ? undefined : toObject(object)[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 28 */
/***/ function (module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6),
	    isString = __webpack_require__(29),
	    support = __webpack_require__(30);

	/**
	 * Converts `value` to an object if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Object} Returns the object.
	 */
	function toObject(value) {
	  if (support.unindexedChars && isString(value)) {
	    var index = -1,
	        length = value.length,
	        result = Object(value);

	    while (++index < length) {
	      result[index] = value.charAt(index);
	    }
	    return result;
	  }
	  return isObject(value) ? value : Object(value);
	}

	module.exports = toObject;


/***/ },
/* 29 */
/***/ function (module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(12);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' || (isObjectLike(value) && objToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 30 */
/***/ function (module, exports) {

	/** Used for native method references. */
	var arrayProto = Array.prototype,
	    errorProto = Error.prototype,
	    objectProto = Object.prototype;

	/** Native method references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable,
	    splice = arrayProto.splice;

	/**
	 * An object environment feature flags.
	 *
	 * @static
	 * @memberOf _
	 * @type Object
	 */
	var support = {};

	(function (x) {
	  var Ctor = function () { this.x = x; },
	      object = { '0': x, 'length': x },
	      props = [];

	  Ctor.prototype = { 'valueOf': x, 'y': x };
	  for (var key in new Ctor) { props.push(key); }

	  /**
	   * Detect if `name` or `message` properties of `Error.prototype` are
	   * enumerable by default (IE < 9, Safari < 5.1).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.enumErrorProps = propertyIsEnumerable.call(errorProto, 'message') ||
	    propertyIsEnumerable.call(errorProto, 'name');

	  /**
	   * Detect if `prototype` properties are enumerable by default.
	   *
	   * Firefox < 3.6, Opera > 9.50 - Opera < 11.60, and Safari < 5.1
	   * (if the prototype or a property on the prototype has been set)
	   * incorrectly set the `[[Enumerable]]` value of a function's `prototype`
	   * property to `true`.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.enumPrototypes = propertyIsEnumerable.call(Ctor, 'prototype');

	  /**
	   * Detect if properties shadowing those on `Object.prototype` are non-enumerable.
	   *
	   * In IE < 9 an object's own properties, shadowing non-enumerable ones,
	   * are made non-enumerable as well (a.k.a the JScript `[[DontEnum]]` bug).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.nonEnumShadows = !/valueOf/.test(props);

	  /**
	   * Detect if own properties are iterated after inherited properties (IE < 9).
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.ownLast = props[0] != 'x';

	  /**
	   * Detect if `Array#shift` and `Array#splice` augment array-like objects
	   * correctly.
	   *
	   * Firefox < 10, compatibility modes of IE 8, and IE < 9 have buggy Array
	   * `shift()` and `splice()` functions that fail to remove the last element,
	   * `value[0]`, of array-like objects even though the "length" property is
	   * set to `0`. The `shift()` method is buggy in compatibility modes of IE 8,
	   * while `splice()` is buggy regardless of mode in IE < 9.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.spliceObjects = (splice.call(object, 0, 1), !object[0]);

	  /**
	   * Detect lack of support for accessing string characters by index.
	   *
	   * IE < 8 can't access characters by index. IE 8 can only access characters
	   * by index on string literals, not string objects.
	   *
	   * @memberOf _.support
	   * @type boolean
	   */
	  support.unindexedChars = ('x'[0] + Object('x')[0]) != 'xx';
	}(1, 0));

	module.exports = support;


/***/ },
/* 31 */
/***/ function (module, exports) {

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
	 */
	function isLength(value) {
	  return typeof value == 'number' && value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 32 */
/***/ function (module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    isLength = __webpack_require__(31),
	    isObjectLike = __webpack_require__(12);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeIsArray = getNative(Array, 'isArray');

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(function () { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function (value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 33 */
/***/ function (module, exports, __webpack_require__) {

	var identity = __webpack_require__(34);

	/**
	 * A specialized version of `baseCallback` which only supports `this` binding
	 * and specifying the number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {Function} func The function to bind.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function bindCallback(func, thisArg, argCount) {
	  if (typeof func != 'function') {
	    return identity;
	  }
	  if (thisArg === undefined) {
	    return func;
	  }
	  switch (argCount) {
	    case 1: return function (value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function (value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function (accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function (value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function () {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 34 */
/***/ function (module, exports) {

	/**
	 * This method returns the first argument provided to it.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {*} value Any value.
	 * @returns {*} Returns `value`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.identity(object) === object;
	 * // => true
	 */
	function identity(value) {
	  return value;
	}

	module.exports = identity;


/***/ },
/* 35 */
/***/ function (module, exports, __webpack_require__) {

	var toObject = __webpack_require__(28);

	/**
	 * A specialized version of `_.pick` which picks `object` properties specified
	 * by `props`.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {string[]} props The property names to pick.
	 * @returns {Object} Returns the new object.
	 */
	function pickByArray(object, props) {
	  object = toObject(object);

	  var index = -1,
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index];
	    if (key in object) {
	      result[key] = object[key];
	    }
	  }
	  return result;
	}

	module.exports = pickByArray;


/***/ },
/* 36 */
/***/ function (module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(37);

	/**
	 * A specialized version of `_.pick` which picks `object` properties `predicate`
	 * returns truthy for.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {Object} Returns the new object.
	 */
	function pickByCallback(object, predicate) {
	  var result = {};
	  baseForIn(object, function (value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}

	module.exports = pickByCallback;


/***/ },
/* 37 */
/***/ function (module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(38),
	    keysIn = __webpack_require__(40);

	/**
	 * The base implementation of `_.forIn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return baseFor(object, iteratee, keysIn);
	}

	module.exports = baseForIn;


/***/ },
/* 38 */
/***/ function (module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(39);

	/**
	 * The base implementation of `baseForIn` and `baseForOwn` which iterates
	 * over `object` properties returned by `keysFunc` invoking `iteratee` for
	 * each property. Iteratee functions may exit iteration early by explicitly
	 * returning `false`.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @returns {Object} Returns `object`.
	 */
	var baseFor = createBaseFor();

	module.exports = baseFor;


/***/ },
/* 39 */
/***/ function (module, exports, __webpack_require__) {

	var toObject = __webpack_require__(28);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function (object, iteratee, keysFunc) {
	    var iterable = toObject(object),
	        props = keysFunc(object),
	        length = props.length,
	        index = fromRight ? length : -1;

	    while ((fromRight ? index-- : ++index < length)) {
	      var key = props[index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 40 */
/***/ function (module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(41),
	    isArguments = __webpack_require__(24),
	    isArray = __webpack_require__(32),
	    isFunction = __webpack_require__(10),
	    isIndex = __webpack_require__(42),
	    isLength = __webpack_require__(31),
	    isObject = __webpack_require__(6),
	    isString = __webpack_require__(29),
	    support = __webpack_require__(30);

	/** `Object#toString` result references. */
	var arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/** Used to fix the JScript `[[DontEnum]]` bug. */
	var shadowProps = [
	  'constructor', 'hasOwnProperty', 'isPrototypeOf', 'propertyIsEnumerable',
	  'toLocaleString', 'toString', 'valueOf'
	];

	/** Used for native method references. */
	var errorProto = Error.prototype,
	    objectProto = Object.prototype,
	    stringProto = String.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/** Used to avoid iterating over non-enumerable properties in IE < 9. */
	var nonEnumProps = {};
	nonEnumProps[arrayTag] = nonEnumProps[dateTag] = nonEnumProps[numberTag] = { 'constructor': true, 'toLocaleString': true, 'toString': true, 'valueOf': true };
	nonEnumProps[boolTag] = nonEnumProps[stringTag] = { 'constructor': true, 'toString': true, 'valueOf': true };
	nonEnumProps[errorTag] = nonEnumProps[funcTag] = nonEnumProps[regexpTag] = { 'constructor': true, 'toString': true };
	nonEnumProps[objectTag] = { 'constructor': true };

	arrayEach(shadowProps, function (key) {
	  for (var tag in nonEnumProps) {
	    if (hasOwnProperty.call(nonEnumProps, tag)) {
	      var props = nonEnumProps[tag];
	      props[key] = hasOwnProperty.call(props, key);
	    }
	  }
	});

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keysIn(new Foo);
	 * // => ['a', 'b', 'c'] (iteration order is not guaranteed)
	 */
	function keysIn(object) {
	  if (object == null) {
	    return [];
	  }
	  if (!isObject(object)) {
	    object = Object(object);
	  }
	  var length = object.length;

	  length = (length && isLength(length) &&
	    (isArray(object) || isArguments(object) || isString(object)) && length) || 0;

	  var Ctor = object.constructor,
	      index = -1,
	      proto = (isFunction(Ctor) && Ctor.prototype) || objectProto,
	      isProto = proto === object,
	      result = Array(length),
	      skipIndexes = length > 0,
	      skipErrorProps = support.enumErrorProps && (object === errorProto || object instanceof Error),
	      skipProto = support.enumPrototypes && isFunction(object);

	  while (++index < length) {
	    result[index] = (index + '');
	  }
	  // lodash skips the `constructor` property when it infers it's iterating
	  // over a `prototype` object because IE < 9 can't set the `[[Enumerable]]`
	  // attribute of an existing property and the `constructor` property of a
	  // prototype defaults to non-enumerable.
	  for (var key in object) {
	    if (!(skipProto && key == 'prototype') &&
	        !(skipErrorProps && (key == 'message' || key == 'name')) &&
	        !(skipIndexes && isIndex(key, length)) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  if (support.nonEnumShadows && object !== objectProto) {
	    var tag = object === stringProto ? stringTag : (object === errorProto ? errorTag : objToString.call(object)),
	        nonEnums = nonEnumProps[tag] || nonEnumProps[objectTag];

	    if (tag == objectTag) {
	      proto = objectProto;
	    }
	    length = shadowProps.length;
	    while (length--) {
	      key = shadowProps[length];
	      var nonEnum = nonEnums[key];
	      if (!(isProto && nonEnum) &&
	          (nonEnum ? hasOwnProperty.call(object, key) : object[key] !== proto[key])) {
	        result.push(key);
	      }
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 41 */
/***/ function (module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns `array`.
	 */
	function arrayEach(array, iteratee) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (iteratee(array[index], index, array) === false) {
	      break;
	    }
	  }
	  return array;
	}

	module.exports = arrayEach;


/***/ },
/* 42 */
/***/ function (module, exports) {

	/** Used to detect unsigned integer values. */
	var reIsUint = /^\d+$/;

	/**
	 * Used as the [maximum length](http://ecma-international.org/ecma-262/6.0/#sec-number.max_safe_integer)
	 * of an array-like value.
	 */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 43 */
/***/ function (module, exports) {

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://developer.mozilla.org/Web/JavaScript/Reference/Functions/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.restParam(function (what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function restParam(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : (+start || 0), 0);
	  return function () {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        rest = Array(length);

	    while (++index < length) {
	      rest[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, rest);
	      case 1: return func.call(this, args[0], rest);
	      case 2: return func.call(this, args[0], args[1], rest);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = rest;
	    return func.apply(this, otherArgs);
	  };
	}

	module.exports = restParam;


/***/ },
/* 44 */
/***/ function (module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var arrayEach = __webpack_require__(41),
	    baseCallback = __webpack_require__(45),
	    baseCreate = __webpack_require__(69),
	    baseForOwn = __webpack_require__(70),
	    isArray = __webpack_require__(32),
	    isFunction = __webpack_require__(10),
	    isObject = __webpack_require__(6),
	    isTypedArray = __webpack_require__(56);

	/**
	 * An alternative to `_.reduce`; this method transforms `object` to a new
	 * `accumulator` object which is the result of running each of its own enumerable
	 * properties through `iteratee`, with each invocation potentially mutating
	 * the `accumulator` object. The `iteratee` is bound to `thisArg` and invoked
	 * with four arguments: (accumulator, value, key, object). Iteratee functions
	 * may exit iteration early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Array|Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The custom accumulator value.
	 * @param {*} [thisArg] The `this` binding of `iteratee`.
	 * @returns {*} Returns the accumulated value.
	 * @example
	 *
	 * _.transform([2, 3, 4], function (result, n) {
	 *   result.push(n *= n);
	 *   return n % 2 == 0;
	 * });
	 * // => [4, 9]
	 *
	 * _.transform({ 'a': 1, 'b': 2 }, function (result, n, key) {
	 *   result[key] = n * 3;
	 * });
	 * // => { 'a': 3, 'b': 6 }
	 */
	function transform(object, iteratee, accumulator, thisArg) {
	  var isArr = isArray(object) || isTypedArray(object);
	  iteratee = baseCallback(iteratee, thisArg, 4);

	  if (accumulator == null) {
	    if (isArr || isObject(object)) {
	      var Ctor = object.constructor;
	      if (isArr) {
	        accumulator = isArray(object) ? new Ctor : [];
	      } else {
	        accumulator = baseCreate(isFunction(Ctor) ? Ctor.prototype : undefined);
	      }
	    } else {
	      accumulator = {};
	    }
	  }
	  (isArr ? arrayEach : baseForOwn)(object, function (value, index, object) {
	    return iteratee(accumulator, value, index, object);
	  });
	  return accumulator;
	}

	module.exports = transform;


/***/ },
/* 45 */
/***/ function (module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(46),
	    baseMatchesProperty = __webpack_require__(60),
	    bindCallback = __webpack_require__(33),
	    identity = __webpack_require__(34),
	    property = __webpack_require__(67);

	/**
	 * The base implementation of `_.callback` which supports specifying the
	 * number of arguments to provide to `func`.
	 *
	 * @private
	 * @param {*} [func=_.identity] The value to convert to a callback.
	 * @param {*} [thisArg] The `this` binding of `func`.
	 * @param {number} [argCount] The number of arguments to provide to `func`.
	 * @returns {Function} Returns the callback.
	 */
	function baseCallback(func, thisArg, argCount) {
	  var type = typeof func;
	  if (type == 'function') {
	    return thisArg === undefined
	      ? func
	      : bindCallback(func, thisArg, argCount);
	  }
	  if (func == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return baseMatches(func);
	  }
	  return thisArg === undefined
	    ? property(func)
	    : baseMatchesProperty(func, thisArg);
	}

	module.exports = baseCallback;


/***/ },
/* 46 */
/***/ function (module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(47),
	    getMatchData = __webpack_require__(57),
	    toObject = __webpack_require__(28);

	/**
	 * The base implementation of `_.matches` which does not clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    var key = matchData[0][0],
	        value = matchData[0][1];

	    return function (object) {
	      if (object == null) {
	        return false;
	      }
	      object = toObject(object);
	      return object[key] === value && (value !== undefined || (key in object));
	    };
	  }
	  return function (object) {
	    return baseIsMatch(object, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 47 */
/***/ function (module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(48),
	    toObject = __webpack_require__(28);

	/**
	 * The base implementation of `_.isMatch` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Array} matchData The propery names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = toObject(object);
	  while (index--) {
	    var data = matchData[index];
	    if ((noCustomizer && data[2])
	          ? data[1] !== object[data[0]]
	          : !(data[0] in object)
	        ) {
	      return false;
	    }
	  }
	  while (++index < length) {
	    data = matchData[index];
	    var key = data[0],
	        objValue = object[key],
	        srcValue = data[1];

	    if (noCustomizer && data[2]) {
	      if (objValue === undefined && !(key in object)) {
	        return false;
	      }
	    } else {
	      var result = customizer ? customizer(objValue, srcValue, key) : undefined;
	      if (!(result === undefined ? baseIsEqual(srcValue, objValue, customizer, true) : result)) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 48 */
/***/ function (module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(49),
	    isObject = __webpack_require__(6),
	    isObjectLike = __webpack_require__(12);

	/**
	 * The base implementation of `_.isEqual` without support for `this` binding
	 * `customizer` functions.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, isLoose, stackA, stackB) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, isLoose, stackA, stackB);
	}

	module.exports = baseIsEqual;


/***/ },
/* 49 */
/***/ function (module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(50),
	    equalByTag = __webpack_require__(52),
	    equalObjects = __webpack_require__(53),
	    isArray = __webpack_require__(32),
	    isHostObject = __webpack_require__(11),
	    isTypedArray = __webpack_require__(56);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing objects.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA=[]] Tracks traversed `value` objects.
	 * @param {Array} [stackB=[]] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = objToString.call(object);
	    if (objTag == argsTag) {
	      objTag = objectTag;
	    } else if (objTag != objectTag) {
	      objIsArr = isTypedArray(object);
	    }
	  }
	  if (!othIsArr) {
	    othTag = objToString.call(other);
	    if (othTag == argsTag) {
	      othTag = objectTag;
	    } else if (othTag != objectTag) {
	      othIsArr = isTypedArray(other);
	    }
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !(objIsArr || objIsObj)) {
	    return equalByTag(object, other, objTag);
	  }
	  if (!isLoose) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, isLoose, stackA, stackB);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  // For more information on detecting circular references see https://es5.github.io/#JO.
	  stackA || (stackA = []);
	  stackB || (stackB = []);

	  var length = stackA.length;
	  while (length--) {
	    if (stackA[length] == object) {
	      return stackB[length] == other;
	    }
	  }
	  // Add `object` and `other` to the stack of traversed objects.
	  stackA.push(object);
	  stackB.push(other);

	  var result = (objIsArr ? equalArrays : equalObjects)(object, other, equalFunc, customizer, isLoose, stackA, stackB);

	  stackA.pop();
	  stackB.pop();

	  return result;
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 50 */
/***/ function (module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(51);

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing arrays.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var index = -1,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isLoose && othLength > arrLength)) {
	    return false;
	  }
	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index],
	        result = customizer ? customizer(isLoose ? othValue : arrValue, isLoose ? arrValue : othValue, index) : undefined;

	    if (result !== undefined) {
	      if (result) {
	        continue;
	      }
	      return false;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isLoose) {
	      if (!arraySome(other, function (othValue) {
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB);
	          })) {
	        return false;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, isLoose, stackA, stackB))) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalArrays;


/***/ },
/* 51 */
/***/ function (module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check,
	 *  else `false`.
	 */
	function arraySome(array, predicate) {
	  var index = -1,
	      length = array.length;

	  while (++index < length) {
	    if (predicate(array[index], index, array)) {
	      return true;
	    }
	  }
	  return false;
	}

	module.exports = arraySome;


/***/ },
/* 52 */
/***/ function (module, exports) {

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    stringTag = '[object String]';

	/**
	 * A specialized version of `baseIsEqualDeep` for comparing objects of
	 * the same `toStringTag`.
	 *
	 * **Note:** This function only supports comparing values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {string} tag The `toStringTag` of the objects to compare.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag) {
	  switch (tag) {
	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object)
	        ? other != +other
	        : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
	      return object == (other + '');
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 53 */
/***/ function (module, exports, __webpack_require__) {

	var keys = __webpack_require__(54);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparing values.
	 * @param {boolean} [isLoose] Specify performing partial comparisons.
	 * @param {Array} [stackA] Tracks traversed `value` objects.
	 * @param {Array} [stackB] Tracks traversed `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, isLoose, stackA, stackB) {
	  var objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isLoose) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isLoose ? key in other : hasOwnProperty.call(other, key))) {
	      return false;
	    }
	  }
	  var skipCtor = isLoose;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key],
	        result = customizer ? customizer(isLoose ? othValue : objValue, isLoose? objValue : othValue, key) : undefined;

	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(result === undefined ? equalFunc(objValue, othValue, customizer, isLoose, stackA, stackB) : result)) {
	      return false;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (!skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = equalObjects;


/***/ },
/* 54 */
/***/ function (module, exports, __webpack_require__) {

	var getNative = __webpack_require__(8),
	    isArrayLike = __webpack_require__(25),
	    isObject = __webpack_require__(6),
	    shimKeys = __webpack_require__(55),
	    support = __webpack_require__(30);

	/* Native method references for those with the same name as other `lodash` methods. */
	var nativeKeys = getNative(Object, 'keys');

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.keys(new Foo);
	 * // => ['a', 'b'] (iteration order is not guaranteed)
	 *
	 * _.keys('hi');
	 * // => ['0', '1']
	 */
	var keys = !nativeKeys ? shimKeys : function (object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 55 */
/***/ function (module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(24),
	    isArray = __webpack_require__(32),
	    isIndex = __webpack_require__(42),
	    isLength = __webpack_require__(31),
	    isString = __webpack_require__(29),
	    keysIn = __webpack_require__(40);

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A fallback implementation of `Object.keys` which creates an array of the
	 * own enumerable property names of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function shimKeys(object) {
	  var props = keysIn(object),
	      propsLength = props.length,
	      length = propsLength && object.length;

	  var allowIndexes = !!length && isLength(length) &&
	    (isArray(object) || isArguments(object) || isString(object));

	  var index = -1,
	      result = [];

	  while (++index < propsLength) {
	    var key = props[index];
	    if ((allowIndexes && isIndex(key, length)) || hasOwnProperty.call(object, key)) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = shimKeys;


/***/ },
/* 56 */
/***/ function (module, exports, __webpack_require__) {

	var isLength = __webpack_require__(31),
	    isObjectLike = __webpack_require__(12);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values of typed arrays. */
	var typedArrayTags = {};
	typedArrayTags[float32Tag] = typedArrayTags[float64Tag] =
	typedArrayTags[int8Tag] = typedArrayTags[int16Tag] =
	typedArrayTags[int32Tag] = typedArrayTags[uint8Tag] =
	typedArrayTags[uint8ClampedTag] = typedArrayTags[uint16Tag] =
	typedArrayTags[uint32Tag] = true;
	typedArrayTags[argsTag] = typedArrayTags[arrayTag] =
	typedArrayTags[arrayBufferTag] = typedArrayTags[boolTag] =
	typedArrayTags[dateTag] = typedArrayTags[errorTag] =
	typedArrayTags[funcTag] = typedArrayTags[mapTag] =
	typedArrayTags[numberTag] = typedArrayTags[objectTag] =
	typedArrayTags[regexpTag] = typedArrayTags[setTag] =
	typedArrayTags[stringTag] = typedArrayTags[weakMapTag] = false;

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) && isLength(value.length) && !!typedArrayTags[objToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 57 */
/***/ function (module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(58),
	    pairs = __webpack_require__(59);

	/**
	 * Gets the propery names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = pairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 58 */
/***/ function (module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);

	/**
	 * Checks if `value` is suitable for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` if suitable for strict
	 *  equality comparisons, else `false`.
	 */
	function isStrictComparable(value) {
	  return value === value && !isObject(value);
	}

	module.exports = isStrictComparable;


/***/ },
/* 59 */
/***/ function (module, exports, __webpack_require__) {

	var keys = __webpack_require__(54),
	    toObject = __webpack_require__(28);

	/**
	 * Creates a two dimensional array of the key-value pairs for `object`,
	 * e.g. `[[key1, value1], [key2, value2]]`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * _.pairs({ 'barney': 36, 'fred': 40 });
	 * // => [['barney', 36], ['fred', 40]] (iteration order is not guaranteed)
	 */
	function pairs(object) {
	  object = toObject(object);

	  var index = -1,
	      props = keys(object),
	      length = props.length,
	      result = Array(length);

	  while (++index < length) {
	    var key = props[index];
	    result[index] = [key, object[key]];
	  }
	  return result;
	}

	module.exports = pairs;


/***/ },
/* 60 */
/***/ function (module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(61),
	    baseIsEqual = __webpack_require__(48),
	    baseSlice = __webpack_require__(62),
	    isArray = __webpack_require__(32),
	    isKey = __webpack_require__(63),
	    isStrictComparable = __webpack_require__(58),
	    last = __webpack_require__(64),
	    toObject = __webpack_require__(28),
	    toPath = __webpack_require__(65);

	/**
	 * The base implementation of `_.matchesProperty` which does not clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to compare.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  var isArr = isArray(path),
	      isCommon = isKey(path) && isStrictComparable(srcValue),
	      pathKey = (path + '');

	  path = toPath(path);
	  return function (object) {
	    if (object == null) {
	      return false;
	    }
	    var key = pathKey;
	    object = toObject(object);
	    if ((isArr || !isCommon) && !(key in object)) {
	      object = path.length == 1 ? object : baseGet(object, baseSlice(path, 0, -1));
	      if (object == null) {
	        return false;
	      }
	      key = last(path);
	      object = toObject(object);
	    }
	    return object[key] === srcValue
	      ? (srcValue !== undefined || (key in object))
	      : baseIsEqual(srcValue, object[key], undefined, true);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 61 */
/***/ function (module, exports, __webpack_require__) {

	var toObject = __webpack_require__(28);

	/**
	 * The base implementation of `get` without support for string paths
	 * and default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path of the property to get.
	 * @param {string} [pathKey] The key representation of path.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path, pathKey) {
	  if (object == null) {
	    return;
	  }
	  object = toObject(object);
	  if (pathKey !== undefined && pathKey in object) {
	    path = [pathKey];
	  }
	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = toObject(object)[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 62 */
/***/ function (module, exports) {

	/**
	 * The base implementation of `_.slice` without an iteratee call guard.
	 *
	 * @private
	 * @param {Array} array The array to slice.
	 * @param {number} [start=0] The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the slice of `array`.
	 */
	function baseSlice(array, start, end) {
	  var index = -1,
	      length = array.length;

	  start = start == null ? 0 : (+start || 0);
	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = (end === undefined || end > length) ? length : (+end || 0);
	  if (end < 0) {
	    end += length;
	  }
	  length = start > end ? 0 : ((end - start) >>> 0);
	  start >>>= 0;

	  var result = Array(length);
	  while (++index < length) {
	    result[index] = array[index + start];
	  }
	  return result;
	}

	module.exports = baseSlice;


/***/ },
/* 63 */
/***/ function (module, exports, __webpack_require__) {

	var isArray = __webpack_require__(32),
	    toObject = __webpack_require__(28);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\n\\]|\\.)*?\1)\]/,
	    reIsPlainProp = /^\w*$/;

	/**
	 * Checks if `value` is a property name and not a property path.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {Object} [object] The object to query keys on.
	 * @returns {boolean} Returns `true` if `value` is a property name, else `false`.
	 */
	function isKey(value, object) {
	  var type = typeof value;
	  if ((type == 'string' && reIsPlainProp.test(value)) || type == 'number') {
	    return true;
	  }
	  if (isArray(value)) {
	    return false;
	  }
	  var result = !reIsDeepProp.test(value);
	  return result || (object != null && value in toObject(object));
	}

	module.exports = isKey;


/***/ },
/* 64 */
/***/ function (module, exports) {

	/**
	 * Gets the last element of `array`.
	 *
	 * @static
	 * @memberOf _
	 * @category Array
	 * @param {Array} array The array to query.
	 * @returns {*} Returns the last element of `array`.
	 * @example
	 *
	 * _.last([1, 2, 3]);
	 * // => 3
	 */
	function last(array) {
	  var length = array ? array.length : 0;
	  return length ? array[length - 1] : undefined;
	}

	module.exports = last;


/***/ },
/* 65 */
/***/ function (module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(66),
	    isArray = __webpack_require__(32);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\n\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `value` to property path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {Array} Returns the property path array.
	 */
	function toPath(value) {
	  if (isArray(value)) {
	    return value;
	  }
	  var result = [];
	  baseToString(value).replace(rePropName, function (match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = toPath;


/***/ },
/* 66 */
/***/ function (module, exports) {

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` or `undefined` values.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  return value == null ? '' : (value + '');
	}

	module.exports = baseToString;


/***/ },
/* 67 */
/***/ function (module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(27),
	    basePropertyDeep = __webpack_require__(68),
	    isKey = __webpack_require__(63);

	/**
	 * Creates a function that returns the property value at `path` on a
	 * given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': { 'c': 2 } } },
	 *   { 'a': { 'b': { 'c': 1 } } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b.c'));
	 * // => [2, 1]
	 *
	 * _.pluck(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 68 */
/***/ function (module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(61),
	    toPath = __webpack_require__(65);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  var pathKey = (path + '');
	  path = toPath(path);
	  return function (object) {
	    return baseGet(object, path, pathKey);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 69 */
/***/ function (module, exports, __webpack_require__) {

	var isObject = __webpack_require__(6);

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function () {
	  function object() {}
	  return function (prototype) {
	    if (isObject(prototype)) {
	      object.prototype = prototype;
	      var result = new object;
	      object.prototype = undefined;
	    }
	    return result || {};
	  };
	}());

	module.exports = baseCreate;


/***/ },
/* 70 */
/***/ function (module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(38),
	    keys = __webpack_require__(54);

	/**
	 * The base implementation of `_.forOwn` without support for callback
	 * shorthands and `this` binding.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 71 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var isEmpty = __webpack_require__(72);

	module.exports = xblocks.view.create({
	    displayName: 'xb-button_content',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'ico': React.PropTypes.object
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'ico': {}
	        };
	    },

	    render: function render() {
	        var children = [React.createElement(
	            'span',
	            { className: '_content-content',
	                key: 'content',
	                'data-xb-content': this.props._uid },
	            this.props.children
	        )];

	        if (!isEmpty(this.props.ico) && this.props.ico.type) {
	            if (!this.props.ico.float || this.props.ico.float === 'left') {
	                children.unshift(React.createElement('xb-ico', _extends({}, this.props.ico, { key: 'ico' })));
	            } else if (this.props.ico.float === 'right') {
	                children.push(React.createElement('xb-ico', _extends({}, this.props.ico, { key: 'ico' })));
	            }
	        }

	        return React.createElement(
	            'span',
	            { className: '_content' },
	            children
	        );
	    }
	});

/***/ },
/* 72 */
/***/ function (module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(24),
	    isArray = __webpack_require__(32),
	    isArrayLike = __webpack_require__(25),
	    isFunction = __webpack_require__(10),
	    isObjectLike = __webpack_require__(12),
	    isString = __webpack_require__(29),
	    keys = __webpack_require__(54);

	/**
	 * Checks if `value` is empty. A value is considered empty unless it's an
	 * `arguments` object, array, string, or jQuery-like collection with a length
	 * greater than `0` or an object with own enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {Array|Object|string} value The value to inspect.
	 * @returns {boolean} Returns `true` if `value` is empty, else `false`.
	 * @example
	 *
	 * _.isEmpty(null);
	 * // => true
	 *
	 * _.isEmpty(true);
	 * // => true
	 *
	 * _.isEmpty(1);
	 * // => true
	 *
	 * _.isEmpty([1, 2, 3]);
	 * // => false
	 *
	 * _.isEmpty({ 'a': 1 });
	 * // => false
	 */
	function isEmpty(value) {
	  if (value == null) {
	    return true;
	  }
	  if (isArrayLike(value) && (isArray(value) || isString(value) || isArguments(value) ||
	      (isObjectLike(value) && isFunction(value.splice)))) {
	    return !value.length;
	  }
	  return !keys(value).length;
	}

	module.exports = isEmpty;


/***/ },
/* 73 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var React = __webpack_require__(17);

	/**
	 * Common attributes
	 *
	 * @memberOf xblocks.mixin
	 * @type {object}
	 * @prop {object} propTypes
	 * @prop {string} propTypes.accesskey
	 * @prop {string} propTypes.contextmenu
	 * @prop {enum} propTypes.dir
	 * @prop {boolean} propTypes.hidden
	 * @prop {boolean} propTypes.spellcheck
	 * @prop {string} propTypes.tabindex
	 * @prop {string} propTypes.title
	 */
	module.exports = {
	    'propTypes': {
	        'accesskey': React.PropTypes.string,
	        'contextmenu': React.PropTypes.string,
	        'dir': React.PropTypes.oneOf(['ltr', 'rtl']),
	        'disabled': React.PropTypes.bool,
	        'hidden': React.PropTypes.bool,
	        'spellcheck': React.PropTypes.bool,
	        'tabindex': React.PropTypes.string,
	        'title': React.PropTypes.string
	    }
	};

/***/ },
/* 74 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);

	module.exports = function (tagName) {
	    var props = xblocks.utils.propTypes(tagName);
	    var exportProps = {};
	    var prefix = tagName + '-';
	    var p;

	    for (p in props) {
	        if (props.hasOwnProperty(p) && p[0] !== '_') {
	            exportProps[prefix + p] = props[p];
	        }
	    }

	    return {
	        'propTypes': exportProps
	    };
	};

/***/ },
/* 75 */
/***/ function (module, exports) {

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
	 * @prop {boolean} disabled
	 *
	 * @memberOf xblocks.mixin
	 * @type {object}
	 */
	'use strict';

	module.exports = {
	    'accessors': {
	        'disabled': {
	            'attribute': {
	                'boolean': true
	            }
	        }
	    }
	};

/***/ },
/* 76 */
/***/ function (module, exports) {

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
	 * @prop {boolean} checked
	 *
	 * @memberOf xblocks.mixin
	 * @type {object}
	 */
	'use strict';

	module.exports = {
	    'accessors': {
	        'checked': {
	            'attribute': {
	                'boolean': true
	            }
	        }
	    }
	};

/***/ },
/* 77 */
/***/ function (module, exports) {

	/**
	 * Value element interface.
	 * The value can be changed only through the attribute.
	 *
	 * @example
	 * xblocks.create('xb-checkbox', [
	 *     xblocks.mixin.eInputValueProps,
	 *     {
	 *         accessors: {
	 *             ...
	 *             // override the default values
	 *             'defaultValue': {
	 *                 'get': function () {
	 *                     return 'on';
	 *                  }
	 *              }
	 *         },
	 *         events: { ... },
	 *         methods: { ... }
	 *         ...
	 *     }
	 * ]);
	 *
	 * var e = document.createElement('xb-checkbox');
	 * // read
	 * console.log(e.value)
	 * // 1
	 *
	 * // write
	 * e.value = "123";
	 * // 123
	 *
	 * // jquery write
	 * $(e).attr('value', '321')
	 * // 321
	 *
	 * @memberOf xblocks.mixin
	 * @type {object}
	 */
	'use strict';

	module.exports = {
	    'accessors': {

	        /**
	         * @prop {string} value
	         */
	        'value': {
	            'attribute': {
	                'name': 'value'
	            },

	            'get': function get() {
	                return String(this.getAttribute('value') || this.defaultValue || '');
	            }
	        },

	        /**
	         * @prop {string} defaultValue
	         */
	        'defaultValue': {
	            'get': function get() {
	                return '';
	            }
	        }
	    }
	};

/***/ },
/* 78 */
/***/ function (module, exports) {

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
	 * @type {object}
	 */
	'use strict';

	module.exports = {
	    'methods': {
	        'focus': function focus() {
	            this.firstChild.focus();
	        },

	        'blur': function blur() {
	            this.firstChild.blur();
	        }
	    }
	};

/***/ },
/* 79 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(80);

	var xblocks = __webpack_require__(16);

	/**
	 * xb-checkbox html element
	 *
	 * @prop {string} [size=m] size, possible values: s|m
	 * @prop {string} [value=on]
	 * @prop {string} [name]
	 * @prop {string} [form]
	 * @prop {string} [for]
	 * @prop {boolean} [autofocus=false]
	 * @prop {boolean} [disabled=false]
	 * @prop {boolean} [checked=false]
	 * @prop {boolean} [required=false]
	 *
	 * @class xb.Checkbox
	 * @memberof xb
	 * @augments HTMLInputElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eChecked
	 * @mixes xblocks.mixin.eInputValueProps
	 * @mixes xblocks.mixin.eFocus
	 */
	module.exports = xblocks.create('xb-checkbox', [__webpack_require__(75), __webpack_require__(76), __webpack_require__(77), __webpack_require__(78), {
	    'prototype': Object.create(HTMLInputElement.prototype),

	    'accessors': {
	        'defaultValue': {
	            'get': function get() {
	                return 'on';
	            }
	        }
	    }
	}]);

/***/ },
/* 80 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);

	/**
	 * The template node xb-checkbox
	 *
	 * @class xv.Checkbox
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	module.exports = xblocks.view.register('xb-checkbox', [__webpack_require__(73), {
	    displayName: 'xb-checkbox',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'autofocus': React.PropTypes.bool,
	        'checked': React.PropTypes.bool,
	        'for': React.PropTypes.string,
	        'form': React.PropTypes.string,
	        'name': React.PropTypes.string,
	        'required': React.PropTypes.bool,
	        'size': React.PropTypes.oneOf(['s', 'm']),
	        'value': React.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'checked': false,
	            'children': '',
	            'disabled': false,
	            'required': false,
	            'size': 'm',
	            'tabindex': '0',
	            'value': 'on'
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            'checked': this.props.checked
	        };
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            'checked': nextProps.checked
	        });
	    },

	    _onChange: function _onChange(event) {
	        this.setState({
	            'checked': event.target.checked
	        });
	    },

	    render: function render() {
	        var classes = {
	            'xb-checkbox': true,
	            '_disabled': this.props.disabled
	        };

	        if (this.props.size) {
	            classes['_size-' + this.props.size] = true;
	        }

	        classes = classnames(classes);

	        var tabIndex = this.props.tabindex;

	        if (this.props.disabled) {
	            tabIndex = '-1';
	        }

	        return React.createElement(
	            'label',
	            { className: classes,
	                title: this.props.title,
	                htmlFor: this.props['for'] },
	            React.createElement('input', { type: 'checkbox',
	                className: '_xb-check_controller',
	                name: this.props.name,
	                value: this.props.value,
	                disabled: this.props.disabled,
	                defaultChecked: this.props.checked,
	                checked: this.state.checked,
	                autoFocus: this.props.autofocus,
	                readOnly: true,
	                onChange: this._onChange,
	                required: this.props.required,
	                tabIndex: tabIndex,
	                form: this.props.form }),
	            React.createElement(
	                'span',
	                { className: '_xb-checkbox_flag _xb-check_flag' },
	                React.createElement('span', { className: '_xb-checkbox_flag-icon' })
	            ),
	            React.createElement(
	                'span',
	                { 'data-xb-content': this.props._uid },
	                this.props.children
	            )
	        );
	    }
	}]);

/***/ },
/* 81 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(82);

	var xblocks = __webpack_require__(16);

	/**
	 * xb-ico html element
	 *
	 * @prop {string} [value=&160;] the text inside the tag
	 * @prop {boolean} [active=false]
	 * @prop {boolean} [disabled=false]
	 * @prop {string} [size=s] icon size, possible values: s|m
	 * @prop {string} type icon type, possible values: attention|close|check|download|download-white|dropdown|eye|link|link-white|mail|notification|odnoklassniki|pause|people|play|print|remove|services|settings|three-dots|trash|trash-white|twitter|help|upload|upload-white|vk
	 *
	 * @example
	 * &#60;xb-ico type="notification" value="attribute value">&#60;/xb-ico>
	 * <xb-ico value="attribute value" type="notification"></xb-ico>
	 *
	 * @example
	 * &#60;xb-ico disabled type="attention">&#60;/xb-ico>
	 * <xb-ico disabled type="attention"></xb-ico>
	 *
	 * @example
	 * &#60;xb-ico active type="attention">&#60;/xb-ico>
	 * <xb-ico active type="attention"></xb-ico>
	 *
	 * @example
	 * &#60;xb-ico size="m" type="attention">&#60;/xb-ico>
	 * <xb-ico size="m" type="attention"></xb-ico>
	 *
	 * @class xb.Ico
	 * @memberof xb
	 * @augments HTMLElement
	 * @mixes xblocks.mixin.eDisabled
	 */
	module.exports = xblocks.create('xb-ico', [__webpack_require__(75), {
	    'accessors': {
	        'active': {
	            'attribute': {
	                'boolean': true
	            }
	        }
	    }
	}]);

/***/ },
/* 82 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);

	/**
	 * The template node xb-ico
	 *
	 * @class xv.Ico
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	module.exports = xblocks.view.register('xb-ico', [__webpack_require__(73), {
	    displayName: 'xb-ico',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'active': React.PropTypes.bool,
	        'size': React.PropTypes.oneOf(['s', 'm']),
	        'value': React.PropTypes.string,
	        'type': React.PropTypes.oneOf(['attention', 'check', 'close', 'download', 'download-white', 'dropdown', 'eye', 'help', 'link', 'link-white', 'mail', 'mic-off', 'mic-on', 'notification', 'odnoklassniki', 'pause', 'people', 'play', 'print', 'remove', 'services', 'settings', 'three-dots', 'trash', 'trash-white', 'twitter', 'upload', 'upload-white', 'vk'])
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'active': false,
	            'children': String.fromCharCode(160),
	            'disabled': false,
	            'size': 's'
	        };
	    },

	    render: function render() {
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

	        classes = classnames(classes);

	        var content = this.props.value || this.props.children;

	        return React.createElement(
	            'span',
	            { className: classes, 'data-xb-content': this.props._uid },
	            content
	        );
	    }
	}]);

/***/ },
/* 83 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(84);

	var xblocks = __webpack_require__(16);

	/**
	 * xb-link html element
	 *
	 * @class xb.Link
	 * @memberof xb
	 * @augments HTMLAnchorElement
	 * @mixes xblocks.mixin.eDisabled
	 */
	module.exports = xblocks.create('xb-link', [__webpack_require__(75), {
	    'prototype': Object.create(HTMLAnchorElement.prototype)
	}]);

/***/ },
/* 84 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);

	/**
	 * The template node xb-link
	 *
	 * @class xv.Link
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	module.exports = xblocks.view.register('xb-link', [__webpack_require__(73), {
	    displayName: 'xb-link',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'href': React.PropTypes.string,
	        'name': React.PropTypes.string,
	        'target': React.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
	        'theme': React.PropTypes.oneOf(['normal', 'outer', 'pseudo', 'empty'])
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'disabled': false,
	            'tabindex': '1',
	            'target': '_self',
	            'theme': 'normal'
	        };
	    },

	    render: function render() {
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

	        classes = classnames(classes);

	        var content = this.props.value || this.props.children;

	        return React.createElement(
	            'a',
	            { name: this.props.name,
	                href: this.props.href,
	                target: this.props.target,
	                tabIndex: tabIndex,
	                className: classes,
	                'data-xb-content': this.props._uid },
	            content
	        );
	    }
	}]);

/***/ },
/* 85 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(86);

	var xblocks = __webpack_require__(16);

	/**
	 * xb-menuseparator html element
	 *
	 * @class xb.Menuseparator
	 * @memberof xb
	 * @augments HTMLElement
	 */
	module.exports = xblocks.create('xb-menuseparator', [{
	    'prototype': Object.create(HTMLElement.prototype)
	}]);

/***/ },
/* 86 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);

	/**
	 * The template node xb-menuseparator
	 *
	 * @class xv.Menuseparator
	 * @memberof xv
	 */
	module.exports = xblocks.view.register('xb-menuseparator', {
	    displayName: 'xb-menuseparator',

	    render: function render() {
	        return React.createElement('div', { className: 'xb-menuseparator' });
	    }
	});

/***/ },
/* 87 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(88);

	var xblocks = __webpack_require__(16);

	/**
	 * xb-radio html element
	 *
	 * @prop {string} [size=m] size, possible values: s|m
	 * @prop {string} [value=on]
	 * @prop {string} [name]
	 * @prop {string} [form]
	 * @prop {string} [for]
	 * @prop {boolean} [autofocus=false]
	 * @prop {boolean} [disabled=false]
	 * @prop {boolean} [checked=false]
	 * @prop {boolean} [required=false]
	 *
	 * @class xb.Radio
	 * @memberof xb
	 * @augments HTMLInputElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eChecked
	 * @mixes xblocks.mixin.eInputValueProps
	 * @mixes xblocks.mixin.eFocus
	 */
	module.exports = xblocks.create('xb-radio', [__webpack_require__(75), __webpack_require__(76), __webpack_require__(77), __webpack_require__(78), {
	    'prototype': Object.create(HTMLInputElement.prototype),

	    'accessors': {
	        'defaultValue': {
	            'get': function get() {
	                return 'on';
	            }
	        }
	    }
	}]);

/***/ },
/* 88 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);
	var resetLastRadioChecked = __webpack_require__(19);

	/**
	 * The template node xb-radio
	 *
	 * @class xv.Radio
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	module.exports = xblocks.view.register('xb-radio', [__webpack_require__(73), {
	    displayName: 'xb-radio',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'autofocus': React.PropTypes.bool,
	        'checked': React.PropTypes.bool,
	        'for': React.PropTypes.string,
	        'form': React.PropTypes.string,
	        'name': React.PropTypes.string,
	        'required': React.PropTypes.bool,
	        'size': React.PropTypes.oneOf(['s', 'm']),
	        'value': React.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'checked': false,
	            'children': '',
	            'disabled': false,
	            'required': false,
	            'size': 'm',
	            'tabindex': '0',
	            'value': 'on'
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            'checked': this.props.checked
	        };
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            'checked': Boolean(nextProps.checked)
	        });
	    },

	    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	        if (nextState.checked) {
	            resetLastRadioChecked(this.container(), nextProps.name);
	        }
	    },

	    componentWillMount: function componentWillMount() {
	        if (this.state.checked) {
	            resetLastRadioChecked(this.container(), this.props.name);
	        }
	    },

	    _onChange: function _onChange(event) {
	        this.container().checked = event.target.checked;
	    },

	    render: function render() {
	        var classes = {
	            'xb-radio': true,
	            '_disabled': this.props.disabled
	        };

	        if (this.props.size) {
	            classes['_size-' + this.props.size] = true;
	        }

	        classes = classnames(classes);

	        var tabIndex = this.props.tabindex;

	        if (this.props.disabled) {
	            tabIndex = '-1';
	        }

	        return React.createElement(
	            'label',
	            { className: classes,
	                title: this.props.title,
	                htmlFor: this.props['for'] },
	            React.createElement('input', { type: 'radio',
	                className: '_xb-check_controller',
	                name: this.props.name,
	                value: this.props.value,
	                disabled: this.props.disabled,
	                defaultChecked: this.props.checked,
	                checked: this.state.checked,
	                autoFocus: this.props.autofocus,
	                readOnly: true,
	                onChange: this._onChange,
	                required: this.props.required,
	                tabIndex: tabIndex,
	                form: this.props.form }),
	            React.createElement(
	                'span',
	                { className: '_xb-radio_flag _xb-check_flag' },
	                React.createElement('span', { className: '_xb-radio_flag-icon' })
	            ),
	            React.createElement(
	                'span',
	                { 'data-xb-content': this.props._uid },
	                this.props.children
	            )
	        );
	    }
	}]);

/***/ },
/* 89 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(90);

	var xblocks = __webpack_require__(16);

	/**
	 * xb-input html element
	 *
	 * @prop {string} [name]
	 * @prop {string} [type=text] text|number|date|datetime|email|month|range|search|tel|time|url|week|color
	 * @prop {string} [size=m] s|m|l|xl
	 * @prop {string} [autocomplete] on|off
	 * @prop {string} [rows=4]
	 * @prop {string} [cols]
	 * @prop {string} [placeholder]
	 * @prop {string} [value]
	 * @prop {string} [prefix]
	 * @prop {string} [postfix]
	 * @prop {string} [tabindex]
	 * @prop {boolean} [disabled=false]
	 * @prop {boolean} [autosize=false]
	 * @prop {boolean} [multiline=false]
	 * @prop {boolean} [required=false]
	 * @prop {boolean} [readonly=false]
	 * @prop {boolean} [reset=false]
	 * @prop {boolean} [autofocus=false]
	 * @prop {boolean} [ghost=false]
	 *
	 * @class xb.Input
	 * @memberof xb
	 * @augments HTMLInputElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eInputValueState
	 * @mixes xblocks.mixin.eFocus
	 */
	module.exports = xblocks.create('xb-input', [__webpack_require__(75), __webpack_require__(92), __webpack_require__(78), {
	    'prototype': Object.create(HTMLInputElement.prototype),

	    'events': {
	        'xb-speech-recognition-start': function xbSpeechRecognitionStart(event) {
	            console.log(event);
	        },

	        'xb-speech-recognition-result': function xbSpeechRecognitionResult(event) {
	            if (event.detail) {
	                var input = this.querySelector('input');

	                if (event.detail.interim) {
	                    var start = input.selectionStart;

	                    xblocks.dom.replaceTextSelection(input, event.detail.interim, function (callback) {
	                        callback(input.value);
	                    }, function (value, callback) {
	                        input.value = value;
	                        callback(function () {
	                            input.selectionStart = start;
	                            input.scrollLeft = input.scrollWidth;
	                        });
	                    });
	                } else if (event.detail.final) {
	                    this.value = event.detail.final;
	                    input.value = event.detail.final;
	                    var len = this.value.length;
	                    input.setSelectionRange(len, len);
	                    input.scrollLeft = input.scrollWidth;
	                }
	            }
	            console.log(event.detail, this);
	        },

	        'xb-speech-recognition-end': function xbSpeechRecognitionEnd(event) {
	            if (event.detail) {
	                var input = this.querySelector('input');
	                this.value = event.detail.final;
	                input.value = event.detail.final;
	                var len = this.value.length;
	                input.setSelectionRange(len, len);
	                input.scrollLeft = input.scrollWidth;
	            }
	            console.log(event.detail);
	        },

	        'xb-speech-recognition-error': function xbSpeechRecognitionError(event) {
	            console.log(event);
	        }
	    }
	}]);

/***/ },
/* 90 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);

	var InputController = __webpack_require__(91);

	/**
	 * The template node xb-input
	 *
	 * @class xv.Input
	 * @memberof xv
	 * @mixes React.addons.PureRenderMixin
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	module.exports = xblocks.view.register('xb-input', [__webpack_require__(73), __webpack_require__(74)('xb-link'), {
	    displayName: 'xb-input',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'autocomplete': React.PropTypes.oneOf(['on', 'off']),
	        'autofocus': React.PropTypes.bool,
	        'autosize': React.PropTypes.bool,
	        'cols': React.PropTypes.string,
	        'ghost': React.PropTypes.bool,
	        'multiline': React.PropTypes.bool,
	        'name': React.PropTypes.string,
	        'placeholder': React.PropTypes.string,
	        'postfix': React.PropTypes.string,
	        'prefix': React.PropTypes.string,
	        'readonly': React.PropTypes.bool,
	        'required': React.PropTypes.bool,
	        'reset': React.PropTypes.bool,
	        'rows': React.PropTypes.string,
	        'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	        'type': React.PropTypes.oneOf(['text', 'number', 'date', 'datetime', 'email', 'month', 'range', 'search', 'tel', 'time', 'url', 'week', 'color', 'wysiwyg']),
	        'value': React.PropTypes.string,
	        'xb-link': React.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'autosize': false,
	            'disabled': false,
	            'ghost': false,
	            'multiline': false,
	            'readonly': false,
	            'required': false,
	            'reset': false,
	            'rows': '4',
	            'size': 'm',
	            'type': 'text',
	            'value': undefined
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            'value': this.props.value
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        // check show or hide placeholder after mount element
	        this.refs.controller._dispatchEventToggleHint('', this.props.value);
	    },

	    /**
	     * Remember current value in state
	     * @param {Event} event
	     * @private
	     */
	    _onChange: function _onChange(event) {
	        this.setState({
	            'value': event.target.value
	        });
	    },

	    /**
	     * Show or hide placeholder
	     * @param {boolean} toggle
	     * @private
	     */
	    _onHintToggle: function _onHintToggle(toggle) {
	        React.findDOMNode(this.refs.placeholder).style.visibility = toggle ? 'inherit' : 'hidden';
	    },

	    /**
	     * Check show complex input
	     * @returns {boolean}
	     * @private
	     */
	    _isComplex: function _isComplex() {
	        return Boolean(this.props.postfix || this.props.prefix || this.props.reset || this.props.autosize || this.props['xb-link'] || this.props.placeholder);
	    },

	    /**
	     * Click reset button
	     * @private
	     */
	    _onClickReset: function _onClickReset() {
	        this.setState({
	            'value': ''
	        });
	    },

	    render: function render() {
	        var isComplex = this._isComplex();
	        var classes = {
	            'xb-input': true,
	            '_disabled': this.props.disabled,
	            '_autosize': this.props.autosize,
	            '_ghost': this.props.ghost,
	            '_complex': isComplex,
	            '_simple': !isComplex
	        };

	        if (this.props.size) {
	            classes['_size-' + this.props.size] = true;
	        }

	        classes = classnames(classes);

	        var isPlaceholderHint = false;
	        var controllerProps = {
	            'autoFocus': this.props.autofocus,
	            'autocomplete': this.props.autocomplete,
	            'autosize': this.props.autosize,
	            'className': '_controller',
	            'cols': this.props.cols,
	            'disabled': this.props.disabled,
	            'key': 'controller',
	            'multiline': this.props.multiline,
	            'name': this.props.name,
	            'onChange': this._onChange,
	            'onHintToggle': this._onHintToggle,
	            'readOnly': this.props.readonly,
	            'ref': 'controller',
	            'required': this.props.required,
	            'rows': this.props.rows,
	            'tabIndex': this.props.tabindex,
	            'value': this.state.value
	        };

	        if (isComplex) {
	            var children = [];

	            if (this.props.placeholder) {
	                isPlaceholderHint = true;

	                children.push(React.createElement(
	                    'span',
	                    { ref: 'placeholder', key: 'placeholder', className: '_hint' },
	                    React.createElement(
	                        'span',
	                        { className: '_hint-inner' },
	                        this.props.placeholder
	                    )
	                ));
	            }

	            if (this.props['xb-link']) {
	                var linkProps = filterProps(/^xb-link-/, this.props);
	                linkProps['theme'] = 'empty';
	                linkProps['key'] = 'label';

	                children.push(React.createElement(
	                    'xb-link',
	                    linkProps,
	                    this.props['xb-link']
	                ));
	            }

	            if (this.props.prefix) {
	                children.push(React.createElement(
	                    'span',
	                    { key: 'prefix', className: '_left' },
	                    this.props.prefix
	                ));
	            }

	            if (this.props.postfix) {
	                children.push(React.createElement(
	                    'span',
	                    { key: 'postfix', className: '_right' },
	                    this.props.postfix
	                ));
	            }

	            if (this.props.reset) {
	                children.push(React.createElement('span', { key: 'reset', className: '_reset', onClick: this._onClickReset }));
	            }

	            children.push(React.createElement(
	                'span',
	                { key: 'content', className: '_content' },
	                React.createElement(InputController, _extends({}, controllerProps, { isPlaceholderHint: isPlaceholderHint })),
	                React.createElement('span', { key: 'view', className: '_view' })
	            ));

	            return React.createElement(
	                'label',
	                { className: classes },
	                children
	            );
	        } else {

	            return React.createElement(InputController, _extends({}, controllerProps, { className: classes, isPlaceholderHint: isPlaceholderHint }));
	        }
	    }
	}]);

/***/ },
/* 91 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);

	/**
	 * @class xv.InputController
	 * @memberof xv
	 */
	module.exports = xblocks.view.create({
	    displayName: 'xb-input_controller',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'autoFocus': React.PropTypes.bool,
	        'autocomplete': React.PropTypes.oneOf(['on', 'off']),
	        'autosize': React.PropTypes.bool,
	        'className': React.PropTypes.string,
	        'cols': React.PropTypes.string,
	        'disabled': React.PropTypes.bool,
	        'isPlaceholderHint': React.PropTypes.bool,
	        'multiline': React.PropTypes.bool,
	        'name': React.PropTypes.string,
	        'onChange': React.PropTypes.func,
	        'onHintToggle': React.PropTypes.func,
	        'placeholder': React.PropTypes.string,
	        'readOnly': React.PropTypes.bool,
	        'required': React.PropTypes.bool,
	        'rows': React.PropTypes.string,
	        'tabIndex': React.PropTypes.string,
	        'value': React.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autoFocus': false,
	            'autosize': false,
	            'disabled': false,
	            'isPlaceholderHint': false,
	            'multiline': false,
	            'readOnly': false,
	            'required': false,
	            'value': undefined
	        };
	    },

	    componentDidUpdate: function componentDidUpdate(prevProps) {
	        this._recalculateSize();
	        this._dispatchEventToggleHint(prevProps.value, this.props.value);
	    },

	    componentDidMount: function componentDidMount() {
	        this._recalculateSize();
	    },

	    _dispatchEventToggleHint: function _dispatchEventToggleHint(prevValue, nextValue) {
	        if (this.props.isPlaceholderHint) {
	            var hasPrevValue = Boolean(prevValue);
	            var hasNestValue = Boolean(nextValue);

	            /* jshint -W016 */
	            if (hasPrevValue ^ hasNestValue) {
	                this.props.onHintToggle(hasPrevValue && !hasNestValue);
	            }
	        }
	    },

	    _recalculateSize: function _recalculateSize() {
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

	    render: function render() {
	        var tabIndex = this.props.tabIndex;
	        if (this.props.disabled && tabIndex) {
	            tabIndex = '-1';
	        }

	        var props = {
	            'autoFocus': this.props.autoFocus,
	            'autocomplete': this.props.autocomplete,
	            'className': this.props.className,
	            'disabled': this.props.disabled,
	            'name': this.props.name,
	            'onChange': this.props.onChange,
	            'placeholder': this.props.placeholder || '', // macos inserts placeholder default
	            'readOnly': this.props.readOnly,
	            'required': this.props.required,
	            'tabIndex': tabIndex,
	            'value': this.props.value
	        };

	        if (this.props.multiline) {
	            return React.createElement('textarea', _extends({}, props, { rows: this.props.rows, cols: this.props.cols }));
	        } else {
	            return React.createElement('input', _extends({}, props, { type: 'text' }));
	        }
	    }
	});

/***/ },
/* 92 */
/***/ function (module, exports) {

	/**
	 * Value element interface.
	 * Уou can edit the value, for example in the input or textarea.
	 *
	 * @example
	 * xblocks.create('xb-input', [
	 *     xblocks.mixin.eInputValueState,
	 *     {
	 *         accessors: {
	 *             ...
	 *             // override the default values
	 *             'defaultValue': {
	 *                 'get': function () {
	 *                     return 'on';
	 *                  }
	 *              }
	 *         },
	 *         events: { ... },
	 *         methods: { ... }
	 *         ...
	 *     }
	 * ]);
	 *
	 * var e = document.createElement('xb-input');
	 * // read
	 * console.log(e.value)
	 * // 1
	 *
	 * // write
	 * e.value = "123";
	 * // 123
	 *
	 * // jquery write
	 * $(e).attr('value', '321')
	 * // 321
	 *
	 * @memberOf xblocks.mixin
	 * @type {object}
	 */
	'use strict';

	module.exports = {
	    'accessors': {

	        /**
	         * @prop {string} value
	         */
	        'value': {
	            'attribute': {
	                'name': 'value'
	            },

	            'get': function get() {
	                var component = this.xblock && this.xblock.getMountedComponent();

	                if (component && typeof component.state.value !== 'undefined') {
	                    return component.state.value;
	                }

	                return String(this.getAttribute('value') || this.defaultValue || '');
	            },

	            'set': function set(value) {
	                var component = this.xblock && this.xblock.getMountedComponent();

	                if (component) {
	                    component.setState({ 'value': String(value) });
	                }
	            }
	        },

	        /**
	         * @prop {string} defaultValue
	         */
	        'defaultValue': {
	            'get': function get() {
	                return '';
	            }
	        }
	    }
	};

/***/ },
/* 93 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(94);

	var context = __webpack_require__(2);
	var xblocks = __webpack_require__(16);

	var popupCommon = {
	    onOpen: function onOpen() {
	        this.focus();
	        xblocks.event.dispatch(this, 'xb-open');
	    },

	    onClose: function onClose() {
	        this.blur();
	        xblocks.event.dispatch(this, 'xb-close');
	    },

	    /**
	     * Check valid value for attribute by default
	     * @param {*} value value for attribute
	     * @returns {boolean}
	     */
	    checkDefaultAttr: function checkDefaultAttr(value) {
	        return typeof value !== 'undefined';
	    },

	    /**
	     * Association of attributes and options
	     * @param {Object} options tether options
	     * @param {Object} attrs attributes of element
	     */
	    fillOptionsFromAttrs: function fillOptionsFromAttrs(options, attrs) {
	        for (var attrName in attrs) {
	            var params = popupCommon.tetherAttrsAlign[attrName];
	            if (!params) {
	                continue;
	            }

	            var optionName = params[0];
	            var checker = params[1] || popupCommon.checkDefaultAttr;
	            var value = attrs[attrName];

	            if (checker(value)) {
	                if (typeof optionName === 'function') {
	                    optionName(options, value);
	                } else {
	                    options[optionName] = value;
	                }
	            }
	        }
	    },

	    /**
	     * The default setting for the popup
	     * @returns {Object}
	     * @this {xb.Popup}
	     */
	    tetherDefaultOptions: function tetherDefaultOptions() {
	        return {
	            'attachment': 'middle center',
	            'classes': { 'element': this.xtagName },
	            'classPrefix': this.xtagName,
	            'element': this,
	            'enabled': false,
	            'optimizations': { 'gpu': true },
	            'target': this.ownerDocument.body,
	            'targetAttachment': 'middle center',
	            'targetModifier': 'visible'
	        };
	    },

	    /**
	     * Union rules attributes
	     * @type {Object}
	     */
	    tetherAttrsAlign: {
	        'attachment': ['attachment'],
	        'target-attachment': ['targetAttachment'],
	        'target-offset': ['targetOffset'],
	        'offset': ['offset'],
	        'target': ['target', function (value) {
	            return value && (typeof value === 'string' || value instanceof context.HTMLElement);
	        }],
	        'target-parent': [function (options, value) {
	            options.target = value;
	        }, function (value) {
	            return value && value instanceof context.HTMLElement;
	        }],
	        'target-modifier': [function (options, value) {
	            options.targetModifier = value === 'initial' ? undefined : value;
	        }, function (value) {
	            return value === 'initial' || value === 'visible' || value === 'scroll-handle';
	        }],
	        'optimizations-gpu': [function (options, value) {
	            options.optimizations.gpu = value;
	        }, function (value) {
	            return typeof value === 'boolean';
	        }],
	        'constraints': [function (options, value) {
	            options.constraints = JSON.parse(decodeURIComponent(value));
	        }, function (value) {
	            return value && typeof value === 'string';
	        }]
	    }
	};

	/**
	 * xb-popup html element
	 *
	 * @constructor
	 * @augments HTMLElement
	 * @mixes xblocks.mixin.eFocus
	 */
	module.exports = xblocks.create('xb-popup', [__webpack_require__(78), {
	    prototype: Object.create(HTMLElement.prototype),

	    events: {
	        'jsx-click-close': function jsxClickClose(event) {
	            event.stopImmediatePropagation();
	            this.close();
	        },

	        'keydown:keypass(27)': function keydownKeypass27() {
	            this.close();
	        }
	    },

	    /**
	     * @lends xb.Popup.prototype
	     */
	    accessors: {

	        /**
	         * @readonly
	         * @prop {Object} default options
	         */
	        defaultOptions: {
	            get: popupCommon.tetherDefaultOptions
	        },

	        /**
	         * @readonly
	         * @prop {object} options the display options window
	         */
	        options: {
	            get: function get() {
	                if (this._options) {
	                    return this._options;
	                }

	                this._options = this.defaultOptions;

	                var tetherAttrs = xblocks.dom.attrs.get(this, {
	                    'attachment': undefined,
	                    'constraints': undefined,
	                    'offset': undefined,
	                    'optimizations-gpu': true,
	                    'target-attachment': undefined,
	                    'target-modifier': undefined,
	                    'target-offset': undefined,
	                    'target-parent': false,
	                    'target': undefined
	                });

	                if (tetherAttrs['target-parent']) {
	                    tetherAttrs['target-parent'] = this.parentNode;
	                }

	                popupCommon.fillOptionsFromAttrs(this._options, tetherAttrs);

	                return this._options;
	            }
	        },

	        /**
	         * @readonly
	         * @prop {Tether} tether Tether the window object
	         */
	        tether: {
	            get: function get() {
	                if (!this._tether) {
	                    this._tether = new Tether(this.options);
	                }

	                return this._tether;
	            }
	        },

	        /**
	         * @readonly
	         * @prop {boolean} opened window is open
	         */
	        opened: {
	            get: function get() {
	                return this.tether.enabled;
	            }
	        }
	    },

	    methods: {
	        /**
	         * Change the settings window
	         * @memberOf xb.Popup.prototype
	         * @param {object} nextOptions new settings
	         */
	        setOptions: function setOptions(nextOptions) {
	            var tether = this.tether;

	            xblocks.utils.assign(true, this.options, nextOptions);
	            tether.setOptions(this.options, false);

	            if (tether.enabled) {
	                tether.position();
	            }
	        },

	        /**
	         * Open the window
	         * @memberOf xb.Popup.prototype
	         * @param {object} options new settings
	         * @returns {boolean}
	         */
	        open: function open(options) {
	            var tether = this.tether;

	            if (tether.enabled) {
	                return false;
	            }

	            if (typeof options === 'object') {
	                this.setOptions(options);
	            }

	            xblocks.event.dispatch(this, 'xb-before-open');

	            tether.enable(true);
	            tether.target._xbpopup = this;

	            // FireFox does not set the focus without delay
	            context.setImmediate(popupCommon.onOpen.bind(this));

	            return true;
	        },

	        /**
	         * Close the window
	         * @memberOf xb.Popup.prototype
	         * @returns {boolean}
	         */
	        close: function close() {
	            var tether = this.tether;

	            if (!tether.enabled) {
	                return false;
	            }

	            xblocks.event.dispatch(this, 'xb-before-close');

	            tether.target._xbpopup = undefined;
	            tether.disable();
	            tether.clearCache();

	            // FireFox does not fire a blur event
	            context.setImmediate(popupCommon.onClose.bind(this));

	            return true;
	        },

	        /**
	         * Recalculate the location
	         * @memberOf xb.Popup.prototype
	         * @returns {boolean}
	         */
	        position: function position() {
	            this.tether.position();
	            return true;
	        }
	    }
	}]);

/***/ },
/* 94 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);

	/**
	 * The template node xb-popup
	 *
	 * @class xv.Popup
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	module.exports = xblocks.view.register('xb-popup', [__webpack_require__(73), {
	    displayName: 'xb-popup',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'close': React.PropTypes.bool,
	        'theme': React.PropTypes.oneOf(['blank', 'error', 'island', 'modal', 'normal'])
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'close': false,
	            'theme': 'normal'
	        };
	    },

	    _onClickClose: function _onClickClose() {
	        xblocks.event.dispatch(React.findDOMNode(this), 'jsx-click-close', { 'bubbles': true, 'cancelable': true });
	    },

	    render: function render() {
	        var children = [React.createElement('div', { key: 'content',
	            className: '_content',
	            'data-xb-content': this.props._uid,
	            dangerouslySetInnerHTML: { __html: this.props.children } })];

	        children.unshift(this.template('xb-popup-title', {
	            'key': 'title',
	            'className': '_title'
	        }));

	        if (this.props.close) {
	            children.unshift(React.createElement('a', { key: 'close', className: '_close', onClick: this._onClickClose }));
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

	        classes = classnames(classes);

	        return React.createElement(
	            'div',
	            { className: classes, tabIndex: '0' },
	            children
	        );
	    }
	}]);

/***/ },
/* 95 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(96);

	var context = __webpack_require__(2);
	var xblocks = __webpack_require__(16);

	var _xbMenuitem = {
	    submenuAttrs: {
	        'attachment': 'top left',
	        'target-attachment': 'top right',
	        'target-modifier': 'initial',
	        'constraints': encodeURIComponent(JSON.stringify([{
	            'to': 'window',
	            'attachment': 'element together'
	        }]))
	    },

	    submenu: (function () {
	        var timerOpenSubmenu = 0;

	        return {

	            /**
	             * @param {xb.Menu} [submenu]
	             * @this {context}
	             */
	            open: function open(submenu) {
	                if (submenu && !timerOpenSubmenu) {
	                    timerOpenSubmenu = context.setTimeout(submenu.open.bind(submenu), 200);
	                }
	            },

	            /**
	             * @this {context}
	             */
	            cancel: function cancel() {
	                if (timerOpenSubmenu) {
	                    context.clearTimeout(timerOpenSubmenu);
	                    timerOpenSubmenu = 0;
	                }
	            },

	            /**
	             * @this {xb.Menuitem}
	             */
	            remove: function remove() {
	                if (this._submenuInstance) {
	                    _xbMenuitem.submenu.cancel();

	                    this._submenuInstance.close();
	                    xblocks.dom.removeChild(this._submenuInstance);
	                    this._submenuInstance = undefined;
	                }
	            }
	        };
	    })()
	};

	/**
	 * xb-menuitem html element
	 *
	 * @class xb.Menuitem
	 * @memberof xb
	 * @augments HTMLElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eInputValueProps
	 * @listens xblocks.utils:Table~event:xb-focus
	 * @listens xblocks.utils:Table~event:xb-blur
	 * @listens xblocks.Element~event:xb-repaint
	 * @listens xblocks.Element~event:xb-created
	 * @listens xblocks.Element~event:xb-destroy
	 */
	module.exports = xblocks.create('xb-menuitem', [__webpack_require__(75), __webpack_require__(77), {
	    'prototype': Object.create(HTMLElement.prototype),

	    'events': {
	        /**
	         * @callback
	         */
	        'xb-created': function xbCreated() {
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
	        'xb-blur': function xbBlur() {
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
	        'xb-focus': function xbFocus(event) {
	            this.focused = true;

	            // open the submenu only event-mouse
	            if (event.detail.originalEvent.type !== 'keydown') {
	                _xbMenuitem.submenu.open(this.submenuInstance);

	                // scroll menu only keyboard events
	            } else {
	                    this.menuInstance.scrollIntoItem(this);
	                }
	        }
	    },

	    /**
	     * @lends xb.Menuitem.prototype
	     */
	    'accessors': {
	        /**
	         * @prop {string} label
	         */

	        /**
	         * @prop {boolean} [disabled=false]
	         */

	        /**
	         * @prop {boolean} [focused=false] Item in focus
	         */
	        'focused': {
	            'attribute': {
	                'boolean': true
	            }
	        },

	        /**
	         * @prop {boolean} [selected=false] Item is selected
	         */
	        'selected': {
	            'attribute': {
	                'boolean': true
	            }
	        },

	        /**
	         * @prop {boolean} [submenu=false] Item has a submenu
	         */
	        'submenu': {
	            'attribute': {
	                'boolean': true
	            }
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
	         */
	        'menuInstance': {
	            'get': function get() {
	                if (this._menuInstance || this._menuInstance === null) {
	                    return this._menuInstance;
	                }

	                this._menuInstance = xblocks.utils.getParentMenu(this);

	                return this._menuInstance;
	            }
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu|null} submenuInstance Submenu instance
	         */
	        'submenuInstance': {
	            'get': function get() {
	                if (this._submenuInstance || this._submenuInstance === null) {
	                    return this._submenuInstance;
	                }

	                this._submenuInstance = null;

	                if (this.submenu) {
	                    var targetClassName = '_menuitem-target-' + this.xuid;
	                    var menu = this.ownerDocument.createElement('xb-menu');
	                    var parentConstraints = this.menuInstance.getAttribute('constraints');
	                    var attrs = xblocks.utils.merge({ 'target': '.' + targetClassName }, _xbMenuitem.submenuAttrs);

	                    // для подменю необходимо наследовать набор ограничений т.к. по умолчанию ограничением является вьюпорт
	                    // меню может быть открыто в блоке со скролом,
	                    // в этом случае ограничением для подменю будет блок со скролом
	                    if (parentConstraints) {
	                        attrs.constraints = parentConstraints;
	                    }

	                    for (var attrName in attrs) {
	                        menu.setAttribute(attrName, attrs[attrName]);
	                    }

	                    menu.innerHTML = this.content;

	                    this.classList.add(targetClassName);
	                    this._submenuInstance = this.ownerDocument.body.appendChild(menu);
	                }

	                return this._submenuInstance;
	            }
	        }
	    }
	}]);

/***/ },
/* 96 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);
	var React = __webpack_require__(17);
	var classnames = __webpack_require__(18);
	var isEmpty = __webpack_require__(72);

	/**
	 * The template node xb-menuitem
	 *
	 * @class xv.Menuitem
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	module.exports = xblocks.view.register('xb-menuitem', [__webpack_require__(73), __webpack_require__(74)('xb-ico'), {
	    displayName: 'xb-menuitem',

	    mixins: [React.addons.PureRenderMixin],

	    propTypes: {
	        'focused': React.PropTypes.bool,
	        'ico': React.PropTypes.object,
	        'label': React.PropTypes.string.isRequired,
	        'selected': React.PropTypes.bool,
	        'submenu': React.PropTypes.bool
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'disabled': false,
	            'focused': false,
	            'selected': false,
	            'submenu': false
	        };
	    },

	    render: function render() {
	        var classes = {
	            'xb-menuitem': true,
	            '_disabled': this.props.disabled,
	            '_focused': this.props.focused,
	            '_selected': this.props.selected,
	            '_submenu': this.props.submenu
	        };

	        classes = classnames(classes);

	        var children = [React.createElement(
	            'span',
	            { className: '_label', key: 'label' },
	            this.props.label
	        )];

	        var icoProps = filterProps(/^xb-ico-/, this.props);

	        if (!isEmpty(icoProps) && icoProps.type) {
	            icoProps.key = 'ico';

	            if (!icoProps.float || icoProps.float === 'left') {
	                children.unshift(React.createElement('xb-ico', icoProps));
	            } else if (icoProps.float === 'right') {
	                children.push(React.createElement('xb-ico', icoProps));
	            }
	        }

	        return React.createElement(
	            'div',
	            { className: classes },
	            children
	        );
	    }
	}]);

/***/ },
/* 97 */
/***/ function (module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function (global) {//require('./index.styl');
	'use strict';

	__webpack_require__(98);
	__webpack_require__(99);

	var xblocks = __webpack_require__(16);
	var lazyFocus = __webpack_require__(100);

	var _xbMenu = {

	    /**
	     * @param {xb.Menuitem} target
	     * @this {global}
	     */
	    closeSubmenu: function closeSubmenu(target) {
	        if (target._xbpopup) {
	            target._xbpopup.close();
	        }
	    },

	    /**
	     * The default setting for the menu
	     * @returns {Object}
	     * @this {xb.Menu}
	     */
	    tetherDefaultOptions: function tetherDefaultOptions() {
	        var options = _xbPopup.tetherDefaultOptions.call(this);
	        options.constraints = [{
	            'to': 'scrollParent',
	            'attachment': 'element'
	        }, {
	            'to': 'window',
	            'attachment': 'element'
	        }];

	        return options;
	    }
	};

	/**
	 * xb-menu html element
	 *
	 * @class xb.Menu
	 * @augments xb.Popup
	 * @memberof xb
	 * @mixes xblocks.mixin.eMenu
	 */
	module.exports = xblocks.create('xb-menu', [__webpack_require__(101), {
	    'prototype': Object.create(xb.Popup.prototype || new xb.Popup()),

	    'events': {
	        'xb-before-open': function xbBeforeOpen() {
	            this.style.visibility = 'hidden';
	        },

	        'xb-open': function xbOpen() {
	            this._xbFocus = new xblocks.utils.Table(this, {
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

	        'xb-close': function xbClose() {
	            if (this._xbFocus) {
	                this._xbFocus.destroy();
	                this._xbFocus = undefined;
	            }

	            this._closeAllSubmenu();
	        },

	        'keydown:keypass(27)': function keydownKeypass27() {
	            this.close();

	            // focus of ancestor
	            var parentMenu = this.parentMenu;
	            if (parentMenu) {
	                lazyFocus(parentMenu);
	            }
	        },

	        'blur': function blur() {
	            if (!this.hasOpenSubmenu) {
	                this.close();
	                // event.relatedTarget is null in firefox
	                global.setImmediate(this._closeUpFocus.bind(this));
	            }
	        }
	    },

	    /**
	     * @lends xb.Menu.prototype
	     */
	    'accessors': {

	        /**
	         * @readonly
	         * @prop {Object} default options
	         */
	        'defaultOptions': {
	            'get': _xbMenu.tetherDefaultOptions
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu} [parentMenu] menu-ancestor
	         */
	        'parentMenu': {
	            'get': function get() {
	                return this.tether.target.menuInstance;
	            }
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu} [firstParentMenu] the first menu ancestor
	         */
	        'firstParentMenu': {
	            'get': function get() {
	                var parentMenu = this.parentMenu;

	                if (parentMenu) {
	                    return parentMenu.firstParentMenu || parentMenu;
	                }

	                return this;
	            }
	        }
	    },

	    'methods': {
	        '_closeAllSubmenu': function _closeAllSubmenu() {
	            __forEach.call(this.querySelectorAll('.xb-menu-target.xb-menu-enabled'), _xbMenu.closeSubmenu);
	        },

	        '_afterOpen': function _afterOpen() {
	            this.position();
	            this.style.visibility = 'visible';
	            // the focus is not put on the invisible element
	            // put again
	            lazyFocus(this);
	        },

	        '_closeUpFocus': function _closeUpFocus() {
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
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, (function () { return this; }())))

/***/ },
/* 98 */
/***/ function (module, exports) {

	//jscs:disable
	/* global xblocks, __doc */
	//jscs:enable

	'use strict';

	__doc.addEventListener('contextmenu', xblocks.event.delegate('[contextmenu]', function (event) {
	    var element = event.delegateElement;
	    var doc = element.ownerDocument;
	    var menuId = element.getAttribute('contextmenu');
	    var menuElement = menuId && doc.getElementById(menuId);

	    if (!menuElement || menuElement.xtagName !== 'xb-menu') {
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
	        'targetModifier': undefined,
	        'optimizations': {
	            'moveElement': false
	        },
	        'constraints': [{
	            'to': 'scrollParent',
	            'attachment': 'element'
	        }, {
	            'to': 'window',
	            'attachment': 'element'
	        }]
	    });
	}), false);

/***/ },
/* 99 */
/***/ function (module, exports) {

	/* global xblocks, React, xv */
	/* jshint strict: false */

	/**
	 * The template node xb-menu
	 *
	 * @class xv.Menu
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes xblocks.mixin.vMenu
	 * @mixes React.addons.PureRenderMixin
	 */
	'use strict';

	xv.Menu = xblocks.view.register('xb-menu', [xblocks.mixin.vCommonAttrs, xblocks.mixin.vMenu, {
	    'displayName': 'xb-menu',

	    'mixins': [React.addons.PureRenderMixin],

	    'propTypes': {
	        'size': React.PropTypes.string
	    },

	    'getDefaultProps': function getDefaultProps() {
	        return {
	            'size': ''
	        };
	    },

	    'afterOpen': function afterOpen(callback) {
	        this._updateMaxHeight(this.props.size, callback);
	    }
	}]);

/***/ },
/* 100 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(2);

	/**
	 * @function xblocks.utils.lazyFocus
	 * @param   {[type]} node [description]
	 * @returns {[type]}      [description]
	 */
	module.exports = function (node) {
	  context.setTimeout(node.focus.bind(node), 0);
	};

/***/ },
/* 101 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var lazyFocus = __webpack_require__(100);

	/**
	 * Common interface for elements xb-menu and xb-menu-inline.
	 *
	 * @prop {boolean} hasOpenSubmenu The menu contains the open submenu
	 *
	 * @memberOf xblocks.mixin
	 * @type {object}
	 */
	module.exports = {
	    events: {

	        /**
	         * Оpen the submenu
	         * @this {xb.Menuitem}
	         */
	        'click:delegate(xb-menuitem:not([disabled]))': function clickDelegateXbMenuitemNotDisabled() {
	            if (this.submenuInstance) {
	                this.submenuInstance.open();
	            }
	        },

	        /**
	         * Оpen the submenu
	         * @this {xb.Menu}
	         */
	        'keydown:keypass(13,39)': function keydownKeypass1339() {
	            var item = this._xbFocus.getItem();

	            if (item && item.submenuInstance) {
	                item.submenuInstance.open();
	            }
	        },

	        /**
	         * Restore focus
	         * @param {Event} event
	         * @this {xb.Menu}
	         */
	        'jsx-scroll-throttle': function jsxScrollThrottle(event) {
	            // close all submenu
	            event.stopImmediatePropagation();
	            lazyFocus(this);
	        }
	    },

	    accessors: {

	        /**
	         * The menu contains the open submenu
	         * @prop {boolean} hasOpenSubmenu
	         */
	        hasOpenSubmenu: {
	            get: function get() {
	                return Boolean(this.querySelector('.xb-menu-target.xb-menu-enabled'));
	            }
	        }
	    },

	    methods: {

	        /**
	         * @param {xb.Menuitem} menuitem
	         */
	        scrollIntoItem: function scrollIntoItem(menuitem) {
	            if (!xblocks.dom.isParent(this, menuitem)) {
	                return;
	            }

	            var component = this.xblock && this.xblock.getMountedComponent();

	            if (component) {
	                component.scrollIntoItem(menuitem);
	            }
	        }
	    }
	};

/***/ },
/* 102 */
/***/ function (module, exports, __webpack_require__) {

	//require('./index.styl');
	'use strict';

	__webpack_require__(103);

	var xblocks = __webpack_require__(16);
	var lazyFocus = __webpack_require__(100);
	var Table = __webpack_require__(104);
	var noop = __webpack_require__(126);

	var menuCommon = {
	    init: function init() {
	        if (this._xbFocus) {
	            this._xbFocus.destroy();
	        }

	        this._xbFocus = new Table(this, {
	            'col': 'xb-menu-inline:not([disabled])',
	            'rowLoop': true,
	            'colLoop': true
	        });
	    }
	};

	/**
	 * xb-menu-inline html element
	 *
	 * @class xb.MenuInline
	 * @memberof xb
	 * @augments HTMLElement
	 * @mixes xblocks.mixin.eFocus
	 * @mixes xblocks.mixin.eMenu
	 */
	module.exports = xblocks.create('xb-menu-inline', [__webpack_require__(78), __webpack_require__(101), {
	    prototype: Object.create(HTMLElement.prototype),

	    events: {
	        'xb-created': menuCommon.init,

	        'xb-repaint': menuCommon.init,

	        blur: function blur() {
	            if (!this.hasOpenSubmenu) {
	                this._xbFocus.blurItem();
	            }
	        }
	    },

	    methods: {
	        open: noop,

	        close: function close() {
	            // FireFox does not fire a blur event
	            lazyFocus(this);
	        }
	    }
	}]);

/***/ },
/* 103 */
/***/ function (module, exports) {

	/* global xblocks, React, xv */
	/* jshint strict: false */

	/**
	 * The template node xb-menu-inline
	 *
	 * @class xv.MenuInline
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes xblocks.mixin.vMenu
	 * @mixes React.addons.PureRenderMixin
	 */
	'use strict';

	xv.MenuInline = xblocks.view.register('xb-menu-inline', [xblocks.mixin.vCommonAttrs, xblocks.mixin.vMenu, {
	    'displayName': 'xb-menu-inline',

	    'mixins': [React.addons.PureRenderMixin],

	    'propTypes': {
	        'size': React.PropTypes.string
	    },

	    'getDefaultProps': function getDefaultProps() {
	        return {
	            'size': ''
	        };
	    },

	    'componentDidMount': function componentDidMount() {
	        this._updateMaxHeight(this.props.size);
	    }
	}]);

/***/ },
/* 104 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(16);
	var delegate = __webpack_require__(105);
	var filterClick = __webpack_require__(109);
	var filterMouse = __webpack_require__(110);
	var matchesSelector = __webpack_require__(107);
	var eachAfter = __webpack_require__(111);
	var eachBefore = __webpack_require__(114);
	var index = __webpack_require__(116);
	var merge = __webpack_require__(117);
	var throttle = __webpack_require__(13);
	var pop = Array.prototype.pop;
	var slice = Array.prototype.slice;

	module.exports = Table;

	function Table(node, options) {
	    this._options = merge({
	        'col': 'xb-menu:not([disabled])',
	        'row': 'xb-menuitem:not([disabled])',
	        'colLoop': false,
	        'rowLoop': false
	    }, options);

	    this._node = node;
	    this._item = undefined;
	    this._originalEvent = undefined;

	    this._onKeydown = this._onKeydown.bind(this);
	    this._onMouseover = delegate(this._options.row, this._onMouseover.bind(this));
	    this._onMouseout = delegate(this._options.row, this._onMouseout.bind(this));
	    this._onMousemove = throttle(delegate(this._options.row, this._onMouseAction.bind(this)));
	    this._onClick = filterClick('left', delegate(this._options.row, this._onMouseAction.bind(this)));

	    this._bind();
	}

	Table.prototype = {
	    EVENT_BLUR: 'xb-blur',
	    EVENT_FOCUS: 'xb-focus',

	    destroy: function destroy() {
	        this._unbind();
	        this._node = undefined;
	        this._originalEvent = undefined;

	        if (this._item) {
	            var item = this._item;
	            this._item = undefined;
	            xblocks.event.dispatch(item, this.EVENT_BLUR);
	        }
	    },

	    getItem: function getItem() {
	        return this._item;
	    },

	    blurItem: function blurItem() {
	        if (this._item) {
	            var item = this._item;
	            this._item = undefined;
	            xblocks.event.dispatch(item, this.EVENT_BLUR);
	        }
	    },

	    _bind: function _bind() {
	        this._node.addEventListener('keydown', this._onKeydown, false);
	        this._node.addEventListener('click', this._onClick, false);
	        this._node.addEventListener('mouseover', this._onMouseover, false);
	        this._node.addEventListener('mouseout', this._onMouseout, false);
	        this._node.addEventListener('mousemove', this._onMousemove, false);
	    },

	    _unbind: function _unbind() {
	        this._node.removeEventListener('keydown', this._onKeydown, false);
	        this._node.removeEventListener('click', this._onClick, false);
	        this._node.removeEventListener('mouseover', this._onMouseover, false);
	        this._node.removeEventListener('mouseout', this._onMouseout, false);
	        this._node.removeEventListener('mousemove', this._onMousemove, false);
	    },

	    _col: function _col(item) {
	        if (!item) {
	            return;
	        }

	        var col = item;
	        while (col = col.parentNode) {
	            if (matchesSelector(col, this._options.col)) {
	                return col;
	            }

	            if (col === this._node) {
	                break;
	            }
	        }
	    },

	    _colFirst: function _colFirst() {
	        return this._node.querySelector(this._options.col) || this._node;
	    },

	    _colLast: function _colLast() {
	        return pop.call(slice.call(this._node.querySelectorAll(this._options.col))) || this._node;
	    },

	    _colMatchIterate: function _colMatchIterate(data, element) {
	        if (matchesSelector(element, this._options.col)) {
	            data.col = element;
	            return false;
	        }
	    },

	    _colNext: function _colNext(col) {
	        var data = {};
	        eachAfter(col, this._colMatchIterate.bind(this, data), this._node, false);
	        return data.col;
	    },

	    _colPrev: function _colPrev(col) {
	        var data = {};
	        eachBefore(col, this._colMatchIterate.bind(this, data), this._node, false);
	        return data.col;
	    },

	    _rowFirst: function _rowFirst(col) {
	        return col.querySelector(this._options.row);
	    },

	    _rowLast: function _rowLast(col) {
	        return pop.call(slice.call(col.querySelectorAll(this._options.row)));
	    },

	    _rowMatchIterate: function _rowMatchIterate(data, element) {
	        if (matchesSelector(element, this._options.row)) {
	            data.row = element;
	            return false;
	        }
	    },

	    _rowNext: function _rowNext(row) {
	        var data = {};
	        eachAfter(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
	        return data.row;
	    },

	    _rowPrev: function _rowPrev(row) {
	        var data = {};
	        eachBefore(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
	        return data.row;
	    },

	    _rowIndex: function _rowIndex(row) {
	        return index(this._options.row, row, this._col(row));
	    },

	    _rowByIndex: function _rowByIndex(col, idx) {
	        return col.querySelectorAll(this._options.row)[idx];
	    },

	    _focus: function _focus(element) {
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

	    _onKeydown: function _onKeydown(event) {
	        if (event.altKey || event.metaKey || event.shiftKey) {
	            return;
	        }

	        var action;

	        switch (event.keyCode) {
	            case 37:
	                // ArrowLeft
	                action = '_onArrowLeft';
	                break;
	            case 38:
	                // ArrowUp
	                action = '_onArrowUp';
	                break;
	            case 39:
	                // ArrowRight
	                action = '_onArrowRight';
	                break;
	            case 40:
	                // ArrowDown
	                action = '_onArrowDown';
	                break;
	        }

	        if (!action) {
	            return;
	        }

	        event.preventDefault();
	        event.stopPropagation();
	        this._originalEvent = event;

	        this[action]();
	    },

	    _onMouseAction: function _onMouseAction(event) {
	        if (!this._item || this._item !== event.delegateElement) {
	            this._originalEvent = event;
	            this._focus(event.delegateElement);
	        }
	    },

	    _onMouseover: function _onMouseover(event) {
	        filterMouse(event.delegateElement, event, this._onMouseAction.bind(this));
	    },

	    _onMouseout: function _onMouseout(event) {
	        filterMouse(event.delegateElement, event, this._onMouseAction.bind(this));
	    },

	    _onArrowLeft: function _onArrowLeft() {
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

	    _onArrowRight: function _onArrowRight() {
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

	    _onArrowUp: function _onArrowUp() {
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

	    _onArrowDown: function _onArrowDown() {
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

/***/ },
/* 105 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var delegateMatch = __webpack_require__(106);
	var wrap = __webpack_require__(108);

	/**
	 * @function xblocks.event.delegate
	 * @param   {[type]}   selector [description]
	 * @param   {Function} callback [description]
	 * @returns {[type]}            [description]
	 */
	module.exports = function (selector, callback) {

	    return function (event) {
	        wrap(event);

	        var match = delegateMatch(selector, event.target);

	        if (!match) {
	            return;
	        }

	        event.delegateElement = match;

	        callback.call(match, event);
	    };
	};

/***/ },
/* 106 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var matchesSelector = __webpack_require__(107);

	/**
	 * @function xblocks.event.delegateMatch
	 * @param   {[type]} selector [description]
	 * @param   {[type]} target   [description]
	 * @returns {[type]}          [description]
	 */
	module.exports = function (selector, target) {
	    if (!target || !target.tagName) {
	        return;
	    }

	    var match;

	    if (matchesSelector(target, selector)) {
	        match = target;
	    } else if (matchesSelector(target, selector + ' *')) {
	        var parent = target.parentNode;

	        while (parent) {
	            if (matchesSelector(parent, selector)) {
	                match = parent;
	                break;
	            }

	            parent = parent.parentNode;
	        }
	    }

	    return match;
	};

/***/ },
/* 107 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(2);
	var indexOf = Array.prototype.indexOf;
	var proto = context.Element.prototype;
	var matches = proto.matches || proto.matchesSelector || proto.webkitMatchesSelector || proto.mozMatchesSelector || proto.msMatchesSelector || proto.oMatchesSelector || function (selector) {
	    return indexOf.call((this.parentNode || this.ownerDocument).querySelectorAll(selector), this) !== -1;
	};

	/**
	 * @function xblocks.dom.matchesSelector
	 * @param   {[type]} element  [description]
	 * @param   {[type]} selector [description]
	 * @returns {boolean}
	 */
	module.exports = function (element, selector) {
	    return element.nodeType === 1 ? matches.call(element, selector) : false;
	};

/***/ },
/* 108 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(2);
	var doc = context.document;
	var html = doc.documentElement;
	var hop = Object.prototype.hasOwnProperty;
	var clickWhich = {
	    1: 'left',
	    2: 'center',
	    3: 'right'
	};

	/**
	 * @function xblocks.event.wrap
	 * @param   {[type]} event [description]
	 * @returns {[type]}       [description]
	 */
	module.exports = function (event) {
	    if (event.xbWrapped) {
	        return event;
	    }

	    event.xbWrapped = true;

	    if (event.srcElement && !event.target) {
	        event.target = event.srcElement;
	    }

	    if (!event.relatedTarget && event.fromElement) {
	        event.relatedTarget = event.fromElement === event.target ? event.toElement : event.fromElement;
	    }

	    if (!hop.call(event, 'pageX') && hop.call(event, 'clientX')) {
	        event.pageX = event.clientX;
	        event.pageY = event.clientY;

	        if (html) {
	            event.pageX += html.scrollLeft - (html.clientLeft || 0);
	            event.pageY += html.scrollTop - (html.clientTop || 0);
	        } else if (doc.body) {
	            event.pageX += doc.body.scrollLeft;
	            event.pageY += doc.body.scrollTop;
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
	        event.whichStr = clickWhich[event.which];
	    }

	    return event;
	};

/***/ },
/* 109 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var wrap = __webpack_require__(108);

	/**
	 * @function xblocks.event.filterClick
	 * @param   {[type]}   which    [description]
	 * @param   {Function} callback [description]
	 * @returns {[type]}            [description]
	 */
	module.exports = function (which, callback) {
	    which = Array.isArray(which) ? which : [which];

	    return function (event) {
	        if (event.type !== 'click') {
	            return;
	        }

	        wrap(event);

	        if (which.indexOf(event.whichStr) !== -1) {
	            callback.call(this, event);
	        }
	    };
	};

/***/ },
/* 110 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var wrap = __webpack_require__(108);

	/**
	 * @function xblocks.event.filterMouseEnter
	 * @param {HTMLElement} element
	 * @param {Event} event mouseover or mouseout event
	 * @param {function} callback
	 */
	module.exports = function (element, event, callback) {
	    wrap(event);

	    var toElement = event.relatedTarget;

	    while (toElement && toElement !== element) {
	        toElement = toElement.parentNode;
	    }

	    if (toElement === element) {
	        return;
	    }

	    return callback.call(element, event);
	};

/***/ },
/* 111 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var isParent = __webpack_require__(112);
	var eachInnerFollowing = __webpack_require__(113);

	/**
	 * @function xblocks.dom.eachAfter
	 * @param   {[type]}   node     [description]
	 * @param   {Function} callback [description]
	 * @param   {[type]}   context  [description]
	 * @param   {[type]}   inner    [description]
	 * @returns {[type]}            [description]
	 */
	module.exports = function (node, callback, context, inner) {
	    inner = typeof inner === 'undefined' ? true : Boolean(inner);
	    var next;
	    var cbcall;

	    do {
	        if (context && !isParent(context, node)) {
	            return;
	        }

	        next = node;

	        while (next = next.nextSibling) {
	            cbcall = inner ? eachInnerFollowing(next, callback) : callback && callback(next);

	            if (typeof cbcall !== 'undefined' && !cbcall) {
	                return false;
	            }
	        }
	    } while (node = node.parentNode);
	};

/***/ },
/* 112 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(2);
	var html = context.document.documentElement;

	/**
	 * @function xblocks.dom.isParent
	 * @param {HTMLElement} container
	 * @param {HTMLElement} element
	 * @returns {boolean}
	 */
	module.exports = (function () {

	    if ('compareDocumentPosition' in html) {
	        return function (container, element) {
	            return (container.compareDocumentPosition(element) & 16) === 16;
	        };
	    } else if ('contains' in html) {
	        return function (container, element) {
	            return container !== element && container.contains(element);
	        };
	    } else {
	        return function (container, element) {
	            while (element = element.parentNode) {
	                if (element === container) {
	                    return true;
	                }
	            }

	            return false;
	        };
	    }
	})();

/***/ },
/* 113 */
/***/ function (module, exports) {

	/**
	 * Проход по всем потомкам в прямом порядке (от певой до последней)
	 * @function xblocks.dom.eachInnerFollowing
	 */
	'use strict';

	module.exports = function (node, callback) {
	    var stack = [node];
	    var item;
	    var cbcall;
	    var childsLength;

	    while (item = stack.pop()) {
	        cbcall = callback && callback(item, stack);

	        if (typeof cbcall !== 'undefined' && !cbcall) {
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

/***/ },
/* 114 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var isParent = __webpack_require__(112);
	var eachInnerPrevious = __webpack_require__(115);

	/**
	 * @function xblocks.dom.eachBefore
	 * @param   {[type]}   node     [description]
	 * @param   {Function} callback [description]
	 * @param   {[type]}   context  [description]
	 * @param   {[type]}   inner    [description]
	 * @returns {[type]}            [description]
	 */
	module.exports = function (node, callback, context, inner) {
	    inner = typeof inner === 'undefined' ? true : Boolean(inner);
	    var prev;
	    var cbcall;

	    do {
	        if (context && !isParent(context, node)) {
	            return;
	        }

	        prev = node;

	        while (prev = prev.previousSibling) {
	            cbcall = inner ? eachInnerPrevious(prev, callback) : callback && callback(prev);

	            if (typeof cbcall !== 'undefined' && !cbcall) {
	                return false;
	            }
	        }
	    } while (node = node.parentNode);
	};

/***/ },
/* 115 */
/***/ function (module, exports) {

	/**
	 * Проход по всем потомкам в обратном порядке (от последней до первой)
	 * @function xblocks.dom.eachInnerPrevious
	 */
	'use strict';

	module.exports = function (node, callback) {
	    var stack = [node];
	    var item;
	    var cbcall;
	    var i;
	    var childsLength;

	    while (item = stack.pop()) {
	        cbcall = callback && callback(item, stack);

	        if (typeof cbcall !== 'undefined' && !cbcall) {
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

/***/ },
/* 116 */
/***/ function (module, exports, __webpack_require__) {

	'use strict';

	var globalContext = __webpack_require__(2);
	var indexOf = Array.prototype.indexOf;

	/**
	 * @function xblocks.dom.index
	 * @param   {[type]} selector [description]
	 * @param   {[type]} element  [description]
	 * @param   {[type]} context  [description]
	 * @returns {[type]}          [description]
	 */
	module.exports = function (selector, element, context) {
	  context = context || globalContext.document;
	  return indexOf.call(context.querySelectorAll(selector), element);
	};

/***/ },
/* 117 */
/***/ function (module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseMerge = __webpack_require__(118),
	    createAssigner = __webpack_require__(124);

	/**
	 * Recursively merges own enumerable properties of the source object(s), that
	 * don't resolve to `undefined` into the destination object. Subsequent sources
	 * overwrite property assignments of previous sources. If `customizer` is
	 * provided it's invoked to produce the merged values of the destination and
	 * source properties. If `customizer` returns `undefined` merging is handled
	 * by the method instead. The `customizer` is bound to `thisArg` and invoked
	 * with five arguments: (objectValue, sourceValue, key, object, source).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * var users = {
	 *   'data': [{ 'user': 'barney' }, { 'user': 'fred' }]
	 * };
	 *
	 * var ages = {
	 *   'data': [{ 'age': 36 }, { 'age': 40 }]
	 * };
	 *
	 * _.merge(users, ages);
	 * // => { 'data': [{ 'user': 'barney', 'age': 36 }, { 'user': 'fred', 'age': 40 }] }
	 *
	 * // using a customizer callback
	 * var object = {
	 *   'fruits': ['apple'],
	 *   'vegetables': ['beet']
	 * };
	 *
	 * var other = {
	 *   'fruits': ['banana'],
	 *   'vegetables': ['carrot']
	 * };
	 *
	 * _.merge(object, other, function (a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);

	module.exports = merge;


/***/ },
/* 118 */
/***/ function (module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(41),
	    baseMergeDeep = __webpack_require__(119),
	    isArray = __webpack_require__(32),
	    isArrayLike = __webpack_require__(25),
	    isObject = __webpack_require__(6),
	    isObjectLike = __webpack_require__(12),
	    isTypedArray = __webpack_require__(56),
	    keys = __webpack_require__(54);

	/**
	 * The base implementation of `_.merge` without support for argument juggling,
	 * multiple sources, and `this` binding `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {Object} Returns `object`.
	 */
	function baseMerge(object, source, customizer, stackA, stackB) {
	  if (!isObject(object)) {
	    return object;
	  }
	  var isSrcArr = isArrayLike(source) && (isArray(source) || isTypedArray(source)),
	      props = isSrcArr ? undefined : keys(source);

	  arrayEach(props || source, function (srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObjectLike(srcValue)) {
	      stackA || (stackA = []);
	      stackB || (stackB = []);
	      baseMergeDeep(object, source, key, baseMerge, customizer, stackA, stackB);
	    }
	    else {
	      var value = object[key],
	          result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	          isCommon = result === undefined;

	      if (isCommon) {
	        result = srcValue;
	      }
	      if ((result !== undefined || (isSrcArr && !(key in object))) &&
	          (isCommon || (result === result ? (result !== value) : (value === value)))) {
	        object[key] = result;
	      }
	    }
	  });
	  return object;
	}

	module.exports = baseMerge;


/***/ },
/* 119 */
/***/ function (module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(120),
	    isArguments = __webpack_require__(24),
	    isArray = __webpack_require__(32),
	    isArrayLike = __webpack_require__(25),
	    isPlainObject = __webpack_require__(121),
	    isTypedArray = __webpack_require__(56),
	    toPlainObject = __webpack_require__(122);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Array} [stackA=[]] Tracks traversed source objects.
	 * @param {Array} [stackB=[]] Associates values with source counterparts.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseMergeDeep(object, source, key, mergeFunc, customizer, stackA, stackB) {
	  var length = stackA.length,
	      srcValue = source[key];

	  while (length--) {
	    if (stackA[length] == srcValue) {
	      object[key] = stackB[length];
	      return;
	    }
	  }
	  var value = object[key],
	      result = customizer ? customizer(value, srcValue, key, object, source) : undefined,
	      isCommon = result === undefined;

	  if (isCommon) {
	    result = srcValue;
	    if (isArrayLike(srcValue) && (isArray(srcValue) || isTypedArray(srcValue))) {
	      result = isArray(value)
	        ? value
	        : (isArrayLike(value) ? arrayCopy(value) : []);
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      result = isArguments(value)
	        ? toPlainObject(value)
	        : (isPlainObject(value) ? value : {});
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  // Add the source value to the stack of traversed objects and associate
	  // it with its merged value.
	  stackA.push(srcValue);
	  stackB.push(result);

	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    object[key] = mergeFunc(result, srcValue, customizer, stackA, stackB);
	  } else if (result === result ? (result !== value) : (value === value)) {
	    object[key] = result;
	  }
	}

	module.exports = baseMergeDeep;


/***/ },
/* 120 */
/***/ function (module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function arrayCopy(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = arrayCopy;


/***/ },
/* 121 */
/***/ function (module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(37),
	    isArguments = __webpack_require__(24),
	    isHostObject = __webpack_require__(11),
	    isObjectLike = __webpack_require__(12),
	    support = __webpack_require__(30);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for native method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * **Note:** This method assumes objects created by the `Object` constructor
	 * have no inherited enumerable properties.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object, else `false`.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 * }
	 *
	 * _.isPlainObject(new Foo);
	 * // => false
	 *
	 * _.isPlainObject([1, 2, 3]);
	 * // => false
	 *
	 * _.isPlainObject({ 'x': 0, 'y': 0 });
	 * // => true
	 *
	 * _.isPlainObject(Object.create(null));
	 * // => true
	 */
	function isPlainObject(value) {
	  var Ctor;

	  // Exit early for non `Object` objects.
	  if (!(isObjectLike(value) && objToString.call(value) == objectTag && !isHostObject(value) && !isArguments(value)) ||
	      (!hasOwnProperty.call(value, 'constructor') && (Ctor = value.constructor, typeof Ctor == 'function' && !(Ctor instanceof Ctor)))) {
	    return false;
	  }
	  // IE < 9 iterates inherited properties before own properties. If the first
	  // iterated property is an object's own property then there are no inherited
	  // enumerable properties.
	  var result;
	  if (support.ownLast) {
	    baseForIn(value, function (subValue, key, object) {
	      result = hasOwnProperty.call(object, key);
	      return false;
	    });
	    return result !== false;
	  }
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function (subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 122 */
/***/ function (module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(123),
	    keysIn = __webpack_require__(40);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable
	 * properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {Object} Returns the converted plain object.
	 * @example
	 *
	 * function Foo() {
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.assign({ 'a': 1 }, new Foo);
	 * // => { 'a': 1, 'b': 2 }
	 *
	 * _.assign({ 'a': 1 }, _.toPlainObject(new Foo));
	 * // => { 'a': 1, 'b': 2, 'c': 3 }
	 */
	function toPlainObject(value) {
	  return baseCopy(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 123 */
/***/ function (module, exports) {

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function baseCopy(source, props, object) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];
	    object[key] = source[key];
	  }
	  return object;
	}

	module.exports = baseCopy;


/***/ },
/* 124 */
/***/ function (module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(33),
	    isIterateeCall = __webpack_require__(125),
	    restParam = __webpack_require__(43);

	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function (object, sources) {
	    var index = -1,
	        length = object == null ? 0 : sources.length,
	        customizer = length > 2 ? sources[length - 2] : undefined,
	        guard = length > 2 ? sources[2] : undefined,
	        thisArg = length > 1 ? sources[length - 1] : undefined;

	    if (typeof customizer == 'function') {
	      customizer = bindCallback(customizer, thisArg, 5);
	      length -= 2;
	    } else {
	      customizer = typeof thisArg == 'function' ? thisArg : undefined;
	      length -= (customizer ? 1 : 0);
	    }
	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 125 */
/***/ function (module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(25),
	    isIndex = __webpack_require__(42),
	    isObject = __webpack_require__(6);

	/**
	 * Checks if the provided arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call, else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	      ? (isArrayLike(object) && isIndex(index, object.length))
	      : (type == 'string' && index in object)) {
	    var other = object[index];
	    return value === value ? (value === other) : (other !== other);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 126 */
/***/ function (module, exports) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @category Utility
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 *
	 * _.noop(object) === undefined;
	 * // => true
	 */
	function noop() {
	  // No operation performed.
	}

	module.exports = noop;


/***/ }
/******/ ])
});
;