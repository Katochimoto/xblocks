(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xtag"), require("react"), require("xblocks-core"), require("react-dom"), require("tether"));
	else if(typeof define === 'function' && define.amd)
		define(["xtag", "react", "xblocks-core", "react-dom", "tether"], factory);
	else if(typeof exports === 'object')
		exports["xblocks"] = factory(require("xtag"), require("react"), require("xblocks-core"), require("react-dom"), require("tether"));
	else
		root["xblocks"] = factory(root["xtag"], root["React"], root["xblocks-core"], root["ReactDOM"], root["Tether"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_16__, __WEBPACK_EXTERNAL_MODULE_17__, __WEBPACK_EXTERNAL_MODULE_138__, __WEBPACK_EXTERNAL_MODULE_164__) {
return /******/ (function(modules) { // webpackBootstrap
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
/******/ ((function(modules) {
	// Check all modules for deduplicated modules
	for(var i in modules) {
		if(Object.prototype.hasOwnProperty.call(modules, i)) {
			switch(typeof modules[i]) {
			case "function": break;
			case "object":
				// Module can be created from a template
				modules[i] = (function(_m) {
					var args = _m.slice(1), fn = modules[_m[0]];
					return function (a,b,c) {
						fn.apply(this, [a,b,c].concat(args));
					};
				}(modules[i]));
				break;
			default:
				// Module is a copy of another module
				modules[i] = modules[modules[i]];
				break;
			}
		}
	}
	return modules;
}([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(1);

	__webpack_require__(2);

	__webpack_require__(12);

	__webpack_require__(25);

	__webpack_require__(142);

	__webpack_require__(152);

	__webpack_require__(155);

	__webpack_require__(158);

	__webpack_require__(161);

	__webpack_require__(184);

	__webpack_require__(240);

	__webpack_require__(244);

	__webpack_require__(248);

	__webpack_require__(251);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _xtag = __webpack_require__(3);

	var _xtag2 = _interopRequireDefault(_xtag);

	var _debounce = __webpack_require__(4);

	var _debounce2 = _interopRequireDefault(_debounce);

	var _throttle = __webpack_require__(11);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * @example
	 * "scroll:debounce(100,true,false)": function () {}
	 *
	 * @type {Object}
	 */
	_xtag2.default.pseudos.debounce = {
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

	        return (0, _debounce2.default)(listener, wait, {
	            leading: leading,
	            trailing: trailing
	        });
	    }
	};

	/**
	 * @example
	 * "scroll:throttle(100,true,false)": function () {}
	 *
	 * @type {Object}
	 */
	_xtag2.default.pseudos.throttle = {
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

	        return (0, _throttle2.default)(listener, wait, {
	            leading: leading,
	            trailing: trailing
	        });
	    }
	};

/***/ },
/* 3 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_3__;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5),
	    now = __webpack_require__(6),
	    toNumber = __webpack_require__(7);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max,
	    nativeMin = Math.min;

	/**
	 * Creates a debounced function that delays invoking `func` until after `wait`
	 * milliseconds have elapsed since the last time the debounced function was
	 * invoked. The debounced function comes with a `cancel` method to cancel
	 * delayed `func` invocations and a `flush` method to immediately invoke them.
	 * Provide an options object to indicate whether `func` should be invoked on
	 * the leading and/or trailing edge of the `wait` timeout. The `func` is invoked
	 * with the last arguments provided to the debounced function. Subsequent calls
	 * to the debounced function return the result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the debounced function is
	 * invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.debounce` and `_.throttle`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to debounce.
	 * @param {number} [wait=0] The number of milliseconds to delay.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=false]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {number} [options.maxWait]
	 *  The maximum time `func` is allowed to be delayed before it's invoked.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new debounced function.
	 * @example
	 *
	 * // Avoid costly calculations while the window size is in flux.
	 * jQuery(window).on('resize', _.debounce(calculateLayout, 150));
	 *
	 * // Invoke `sendMail` when clicked, debouncing subsequent calls.
	 * jQuery(element).on('click', _.debounce(sendMail, 300, {
	 *   'leading': true,
	 *   'trailing': false
	 * }));
	 *
	 * // Ensure `batchLog` is invoked once after 1 second of debounced calls.
	 * var debounced = _.debounce(batchLog, 250, { 'maxWait': 1000 });
	 * var source = new EventSource('/stream');
	 * jQuery(source).on('message', debounced);
	 *
	 * // Cancel the trailing debounced invocation.
	 * jQuery(window).on('popstate', debounced.cancel);
	 */
	function debounce(func, wait, options) {
	  var lastArgs,
	      lastThis,
	      maxWait,
	      result,
	      timerId,
	      lastCallTime = 0,
	      lastInvokeTime = 0,
	      leading = false,
	      maxing = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxing = 'maxWait' in options;
	    maxWait = maxing ? nativeMax(toNumber(options.maxWait) || 0, wait) : maxWait;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }

	  function invokeFunc(time) {
	    var args = lastArgs,
	        thisArg = lastThis;

	    lastArgs = lastThis = undefined;
	    lastInvokeTime = time;
	    result = func.apply(thisArg, args);
	    return result;
	  }

	  function leadingEdge(time) {
	    // Reset any `maxWait` timer.
	    lastInvokeTime = time;
	    // Start the timer for the trailing edge.
	    timerId = setTimeout(timerExpired, wait);
	    // Invoke the leading edge.
	    return leading ? invokeFunc(time) : result;
	  }

	  function remainingWait(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime,
	        result = wait - timeSinceLastCall;

	    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
	  }

	  function shouldInvoke(time) {
	    var timeSinceLastCall = time - lastCallTime,
	        timeSinceLastInvoke = time - lastInvokeTime;

	    // Either this is the first call, activity has stopped and we're at the
	    // trailing edge, the system time has gone backwards and we're treating
	    // it as the trailing edge, or we've hit the `maxWait` limit.
	    return (!lastCallTime || (timeSinceLastCall >= wait) ||
	      (timeSinceLastCall < 0) || (maxing && timeSinceLastInvoke >= maxWait));
	  }

	  function timerExpired() {
	    var time = now();
	    if (shouldInvoke(time)) {
	      return trailingEdge(time);
	    }
	    // Restart the timer.
	    timerId = setTimeout(timerExpired, remainingWait(time));
	  }

	  function trailingEdge(time) {
	    clearTimeout(timerId);
	    timerId = undefined;

	    // Only invoke if we have `lastArgs` which means `func` has been
	    // debounced at least once.
	    if (trailing && lastArgs) {
	      return invokeFunc(time);
	    }
	    lastArgs = lastThis = undefined;
	    return result;
	  }

	  function cancel() {
	    if (timerId !== undefined) {
	      clearTimeout(timerId);
	    }
	    lastCallTime = lastInvokeTime = 0;
	    lastArgs = lastThis = timerId = undefined;
	  }

	  function flush() {
	    return timerId === undefined ? result : trailingEdge(now());
	  }

	  function debounced() {
	    var time = now(),
	        isInvoking = shouldInvoke(time);

	    lastArgs = arguments;
	    lastThis = this;
	    lastCallTime = time;

	    if (isInvoking) {
	      if (timerId === undefined) {
	        return leadingEdge(lastCallTime);
	      }
	      if (maxing) {
	        // Handle invocations in a tight loop.
	        clearTimeout(timerId);
	        timerId = setTimeout(timerExpired, wait);
	        return invokeFunc(lastCallTime);
	      }
	    }
	    if (timerId === undefined) {
	      timerId = setTimeout(timerExpired, wait);
	    }
	    return result;
	  }
	  debounced.cancel = cancel;
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 5 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is the
	 * [language type](http://www.ecma-international.org/ecma-262/6.0/#sec-ecmascript-language-types)
	 * of `Object`. (e.g. arrays, functions, objects, regexes, `new Number(0)`, and `new String('')`)
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
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
	 * _.isObject(_.noop);
	 * // => true
	 *
	 * _.isObject(null);
	 * // => false
	 */
	function isObject(value) {
	  var type = typeof value;
	  return !!value && (type == 'object' || type == 'function');
	}

	module.exports = isObject;


/***/ },
/* 6 */
/***/ function(module, exports) {

	/**
	 * Gets the timestamp of the number of milliseconds that have elapsed since
	 * the Unix epoch (1 January 1970 00:00:00 UTC).
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => Logs the number of milliseconds it took for the deferred function to be invoked.
	 */
	var now = Date.now;

	module.exports = now;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(8),
	    isObject = __webpack_require__(5),
	    isSymbol = __webpack_require__(9);

	/** Used as references for various `Number` constants. */
	var NAN = 0 / 0;

	/** Used to match leading and trailing whitespace. */
	var reTrim = /^\s+|\s+$/g;

	/** Used to detect bad signed hexadecimal string values. */
	var reIsBadHex = /^[-+]0x[0-9a-f]+$/i;

	/** Used to detect binary string values. */
	var reIsBinary = /^0b[01]+$/i;

	/** Used to detect octal string values. */
	var reIsOctal = /^0o[0-7]+$/i;

	/** Built-in method references without a dependency on `root`. */
	var freeParseInt = parseInt;

	/**
	 * Converts `value` to a number.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {number} Returns the number.
	 * @example
	 *
	 * _.toNumber(3);
	 * // => 3
	 *
	 * _.toNumber(Number.MIN_VALUE);
	 * // => 5e-324
	 *
	 * _.toNumber(Infinity);
	 * // => Infinity
	 *
	 * _.toNumber('3');
	 * // => 3
	 */
	function toNumber(value) {
	  if (typeof value == 'number') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return NAN;
	  }
	  if (isObject(value)) {
	    var other = isFunction(value.valueOf) ? value.valueOf() : value;
	    value = isObject(other) ? (other + '') : other;
	  }
	  if (typeof value != 'string') {
	    return value === 0 ? value : +value;
	  }
	  value = value.replace(reTrim, '');
	  var isBinary = reIsBinary.test(value);
	  return (isBinary || reIsOctal.test(value))
	    ? freeParseInt(value.slice(2), isBinary ? 2 : 8)
	    : (reIsBadHex.test(value) ? NAN : +value);
	}

	module.exports = toNumber;


/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);

	/** `Object#toString` result references. */
	var funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Function` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
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
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isSymbol(Symbol.iterator);
	 * // => true
	 *
	 * _.isSymbol('abc');
	 * // => false
	 */
	function isSymbol(value) {
	  return typeof value == 'symbol' ||
	    (isObjectLike(value) && objectToString.call(value) == symbolTag);
	}

	module.exports = isSymbol;


/***/ },
/* 10 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
	 * @example
	 *
	 * _.isObjectLike({});
	 * // => true
	 *
	 * _.isObjectLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isObjectLike(_.noop);
	 * // => false
	 *
	 * _.isObjectLike(null);
	 * // => false
	 */
	function isObjectLike(value) {
	  return !!value && typeof value == 'object';
	}

	module.exports = isObjectLike;


/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	var debounce = __webpack_require__(4),
	    isObject = __webpack_require__(5);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a throttled function that only invokes `func` at most once per
	 * every `wait` milliseconds. The throttled function comes with a `cancel`
	 * method to cancel delayed `func` invocations and a `flush` method to
	 * immediately invoke them. Provide an options object to indicate whether
	 * `func` should be invoked on the leading and/or trailing edge of the `wait`
	 * timeout. The `func` is invoked with the last arguments provided to the
	 * throttled function. Subsequent calls to the throttled function return the
	 * result of the last `func` invocation.
	 *
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is
	 * invoked on the trailing edge of the timeout only if the throttled function
	 * is invoked more than once during the `wait` timeout.
	 *
	 * See [David Corbacho's article](https://css-tricks.com/debouncing-throttling-explained-examples/)
	 * for details over the differences between `_.throttle` and `_.debounce`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to throttle.
	 * @param {number} [wait=0] The number of milliseconds to throttle invocations to.
	 * @param {Object} [options={}] The options object.
	 * @param {boolean} [options.leading=true]
	 *  Specify invoking on the leading edge of the timeout.
	 * @param {boolean} [options.trailing=true]
	 *  Specify invoking on the trailing edge of the timeout.
	 * @returns {Function} Returns the new throttled function.
	 * @example
	 *
	 * // Avoid excessively updating the position while scrolling.
	 * jQuery(window).on('scroll', _.throttle(updatePosition, 100));
	 *
	 * // Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
	 * var throttled = _.throttle(renewToken, 300000, { 'trailing': false });
	 * jQuery(element).on('click', throttled);
	 *
	 * // Cancel the trailing throttled invocation.
	 * jQuery(window).on('popstate', throttled.cancel);
	 */
	function throttle(func, wait, options) {
	  var leading = true,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  if (isObject(options)) {
	    leading = 'leading' in options ? !!options.leading : leading;
	    trailing = 'trailing' in options ? !!options.trailing : trailing;
	  }
	  return debounce(func, wait, {
	    'leading': leading,
	    'maxWait': wait,
	    'trailing': trailing
	  });
	}

	module.exports = throttle;


/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(13);

	__webpack_require__(14);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * xb-ico html element
	 *
	 * @prop {string} [value=&160;] the text inside the tag
	 * @prop {boolean} [active=false]
	 * @prop {boolean} [disabled=false]
	 * @prop {string} [size=s] icon size, possible values: s|m
	 * @prop {string} type icon type, possible values: attention|close|check|download|download-white|dropdown|
	 * eye|link|link-white|mail|notification|odnoklassniki|pause|people|play|print|remove|services|
	 * settings|three-dots|trash|trash-white|twitter|help|upload|upload-white|vk
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
	exports.default = _context.xb.Ico = (0, _xblocksCore.create)('xb-ico', [_disabled2.default, {
	    accessors: {
	        active: {
	            attribute: {
	                boolean: true
	            }
	        }
	    }
	}]);

/***/ },
/* 13 */
1,
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _classnames2 = __webpack_require__(18);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * The template node xb-ico
	 *
	 * @class xv.Ico
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.Ico = _xblocksCore.view.register('xb-ico', [_commonAttrs2.default, {
	    displayName: 'xb-ico',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        active: _react.PropTypes.bool,
	        size: _react.PropTypes.oneOf(['s', 'm']),
	        value: _react.PropTypes.string,
	        type: _react.PropTypes.oneOf(['attention', 'check', 'close', 'download', 'download-white', 'dropdown', 'eye', 'help', 'link', 'link-white', 'mail', 'mic-off', 'mic-on', 'notification', 'odnoklassniki', 'pause', 'people', 'play', 'print', 'remove', 'services', 'settings', 'three-dots', 'trash', 'trash-white', 'twitter', 'upload', 'upload-white', 'vk'])
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            active: false,
	            disabled: false,
	            size: 's'
	        };
	    },

	    render: function render() {
	        var _classnames;

	        var classes = (0, _classnames3.default)((_classnames = {
	            'xb-ico': true,
	            '_active': this.props.active,
	            '_disabled': this.props.disabled
	        }, _defineProperty(_classnames, '_type-' + this.props.type, true), _defineProperty(_classnames, '_size-' + this.props.size, true), _classnames));

	        var content = this.props.value || this.props.children || String.fromCharCode(160);

	        return React.createElement(
	            'span',
	            { className: classes, 'data-xb-content': this.props._uid },
	            content
	        );
	    }
	}]);

/***/ },
/* 15 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var context = function () {
	    /* eslint no-eval: 0 */
	    return this || (1, eval)('this');
	}();

	var xv = exports.xv = context.xv = {};
	var xb = exports.xb = context.xb = {};
	exports.default = context;

/***/ },
/* 16 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_16__;

/***/ },
/* 17 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_17__;

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	  Copyright (c) 2016 Jed Watson.
	  Licensed under the MIT License (MIT), see
	  http://jedwatson.github.io/classnames
	*/
	/* global define */

	(function () {
		'use strict';

		var hasOwn = {}.hasOwnProperty;

		function classNames () {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					classes.push(classNames.apply(null, arg));
				} else if (argType === 'object') {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				}
			}

			return classes.join(' ');
		}

		if (typeof module !== 'undefined' && module.exports) {
			module.exports = classNames;
		} else if (true) {
			// register as 'classnames', consistent with npm package name
			!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
				return classNames;
			}.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
		} else {
			window.classNames = classNames;
		}
	}());


/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(20);

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	var shallowCompare = __webpack_require__(21);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this mixin for a
	 * considerable performance boost.
	 *
	 * Most React components have pure render functions.
	 *
	 * Example:
	 *
	 *   var ReactComponentWithPureRenderMixin =
	 *     require('ReactComponentWithPureRenderMixin');
	 *   React.createClass({
	 *     mixins: [ReactComponentWithPureRenderMixin],
	 *
	 *     render: function() {
	 *       return <div className={this.props.className}>foo</div>;
	 *     }
	 *   });
	 *
	 * Note: This only checks shallow equality for props and state. If these contain
	 * complex data structures this mixin may have false-negatives for deeper
	 * differences. Only mixin to components which have simple props and state, or
	 * use `forceUpdate()` when you know deep data structures have changed.
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(22);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 22 */
/***/ function(module, exports) {

	/**
	 * Copyright (c) 2013-present, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @typechecks
	 * 
	 */

	/*eslint-disable no-self-compare */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * inlined Object.is polyfill to avoid requiring consumers ship their own
	 * https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is
	 */
	function is(x, y) {
	  // SameValue algorithm
	  if (x === y) {
	    // Steps 1-5, 7-10
	    // Steps 6.b-6.e: +0 != -0
	    return x !== 0 || 1 / x === 1 / y;
	  } else {
	    // Step 6.a: NaN == NaN
	    return x !== x && y !== y;
	  }
	}

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (is(objA, objB)) {
	    return true;
	  }

	  if (typeof objA !== 'object' || objA === null || typeof objB !== 'object' || objB === null) {
	    return false;
	  }

	  var keysA = Object.keys(objA);
	  var keysB = Object.keys(objB);

	  if (keysA.length !== keysB.length) {
	    return false;
	  }

	  // Test for A's keys different from B.
	  for (var i = 0; i < keysA.length; i++) {
	    if (!hasOwnProperty.call(objB, keysA[i]) || !is(objA[keysA[i]], objB[keysA[i]])) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(16);

	/**
	 * Common attributes
	 *
	 * @type {Object}
	 * @prop {Object} propTypes
	 * @prop {string} propTypes.accesskey
	 * @prop {string} propTypes.contextmenu
	 * @prop {enum} propTypes.dir
	 * @prop {boolean} propTypes.hidden
	 * @prop {boolean} propTypes.spellcheck
	 * @prop {string} propTypes.tabindex
	 * @prop {string} propTypes.title
	 */
	exports.default = {
	    propTypes: {
	        accesskey: _react.PropTypes.string,
	        contextmenu: _react.PropTypes.string,
	        dir: _react.PropTypes.oneOf(['ltr', 'rtl']),
	        disabled: _react.PropTypes.bool,
	        hidden: _react.PropTypes.bool,
	        spellcheck: _react.PropTypes.bool,
	        tabindex: _react.PropTypes.string,
	        title: _react.PropTypes.string
	    }
	};

/***/ },
/* 24 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Disabled element interface
	 *
	 * <xb-button disabled>button</xb-button>
	 *
	 * @example
	 * import { create } from 'xblocks-core';
	 * import mixinDisabled from 'mixin/element/disabled';
	 *
	 * create('xb-button', [
	 *     mixinDisabled,
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
	 * @type {Object}
	 */
	exports.default = {
	    accessors: {
	        disabled: {
	            attribute: {
	                boolean: true
	            }
	        }
	    }
	};

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(26);

	__webpack_require__(27);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _replaceTextSelection = __webpack_require__(139);

	var _replaceTextSelection2 = _interopRequireDefault(_replaceTextSelection);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _focus = __webpack_require__(140);

	var _focus2 = _interopRequireDefault(_focus);

	var _inputValueState = __webpack_require__(141);

	var _inputValueState2 = _interopRequireDefault(_inputValueState);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	exports.default = _context.xb.Input = (0, _xblocksCore.create)('xb-input', [_disabled2.default, _inputValueState2.default, _focus2.default, {
	    prototype: Object.create(HTMLInputElement.prototype),

	    events: {
	        'xb-speech-recognition-start': function xbSpeechRecognitionStart() {
	            // console.log(event);
	        },

	        'xb-speech-recognition-result': function xbSpeechRecognitionResult(event) {
	            if (event.detail) {
	                var input = this.querySelector('input');

	                if (event.detail.interim) {
	                    var start = input.selectionStart;

	                    (0, _replaceTextSelection2.default)(input, event.detail.interim, function (callback) {
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
	            // console.log(event.detail, this);
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
	            // console.log(event.detail);
	        },

	        'xb-speech-recognition-error': function xbSpeechRecognitionError() {
	            // console.log(event);
	        }
	    }
	}]);

/***/ },
/* 26 */
1,
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _classnames = __webpack_require__(18);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _filterProps = __webpack_require__(28);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _exportPropTypes = __webpack_require__(136);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _controller = __webpack_require__(137);

	var _controller2 = _interopRequireDefault(_controller);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * The template node xb-input
	 *
	 * @class xv.Input
	 * @memberof xv
	 * @mixes React.addons.PureRenderMixin
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	exports.default = _context.xv.Input = _xblocksCore.view.register('xb-input', [_commonAttrs2.default, (0, _exportPropTypes2.default)('xb-link'), {
	    displayName: 'xb-input',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        'autocomplete': _react.PropTypes.oneOf(['on', 'off']),
	        'autofocus': _react.PropTypes.bool,
	        'autosize': _react.PropTypes.bool,
	        'cols': _react.PropTypes.string,
	        'ghost': _react.PropTypes.bool,
	        'multiline': _react.PropTypes.bool,
	        'name': _react.PropTypes.string,
	        'placeholder': _react.PropTypes.string,
	        'postfix': _react.PropTypes.string,
	        'prefix': _react.PropTypes.string,
	        'readonly': _react.PropTypes.bool,
	        'required': _react.PropTypes.bool,
	        'reset': _react.PropTypes.bool,
	        'rows': _react.PropTypes.string,
	        'size': _react.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	        'type': _react.PropTypes.oneOf(['text', 'number', 'date', 'datetime', 'email', 'month', 'range', 'search', 'tel', 'time', 'url', 'week', 'color', 'wysiwyg']),
	        'value': _react.PropTypes.string,
	        'xb-link': _react.PropTypes.string
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
	        this.refs.controller.dispatchEventToggleHint('', this.props.value);
	    },

	    /**
	     * Remember current value in state
	     * @param {Event} event
	     * @private
	     */
	    onChange: function onChange(event) {
	        this.setState({
	            'value': event.target.value
	        });
	    },

	    /**
	     * Show or hide placeholder
	     * @param {boolean} toggle
	     * @private
	     */
	    onHintToggle: function onHintToggle(toggle) {
	        this.refs.placeholder.style.visibility = toggle ? 'inherit' : 'hidden';
	    },

	    /**
	     * Click reset button
	     * @private
	     */
	    onClickReset: function onClickReset() {
	        this.setState({
	            'value': ''
	        });
	    },

	    /**
	     * Check show complex input
	     * @returns {boolean}
	     * @private
	     */
	    isComplex: function isComplex() {
	        return Boolean(this.props.postfix || this.props.prefix || this.props.reset || this.props.autosize || this.props['xb-link'] || this.props.placeholder);
	    },

	    render: function render() {
	        var isComplex = this.isComplex();
	        var classes = _defineProperty({
	            'xb-input': true,
	            '_disabled': this.props.disabled,
	            '_autosize': this.props.autosize,
	            '_ghost': this.props.ghost
	        }, '_' + (isComplex ? 'complex' : 'simple') + '_size-' + this.props.size, true);

	        classes = (0, _classnames2.default)(classes);

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
	            'onChange': this.onChange,
	            'onHintToggle': this.onHintToggle,
	            'readOnly': this.props.readonly,
	            'ref': 'controller',
	            'required': this.props.required,
	            'rows': this.props.rows,
	            'tabIndex': this.props.tabindex,
	            'value': this.state.value
	        };

	        if (isComplex) {
	            var children = [];

	            if (this.props['xb-link']) {
	                var linkProps = (0, _filterProps2.default)(/^xb-link-/, this.props);
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

	            if (this.props.reset) {
	                children.push(React.createElement('span', { key: 'reset', className: '_reset', onClick: this.onClickReset }));
	            }

	            if (this.props.postfix) {
	                children.push(React.createElement(
	                    'span',
	                    { key: 'postfix', className: '_right' },
	                    this.props.postfix
	                ));
	            }

	            var placeholder = null;
	            if (this.props.placeholder) {
	                placeholder = React.createElement(
	                    'span',
	                    { ref: 'placeholder', key: 'placeholder', className: '_hint' },
	                    React.createElement(
	                        'span',
	                        { className: '_hint-inner' },
	                        this.props.placeholder
	                    )
	                );
	            }

	            children.push(React.createElement(
	                'span',
	                { key: 'content', className: '_content' },
	                placeholder,
	                React.createElement(_controller2.default, _extends({}, controllerProps, {
	                    isPlaceholderHint: Boolean(placeholder) })),
	                React.createElement(
	                    'span',
	                    { key: 'view', className: '_view' },
	                    String.fromCharCode(160)
	                )
	            ));

	            return React.createElement(
	                'label',
	                { className: classes },
	                children
	            );
	        } else {

	            return React.createElement(_controller2.default, _extends({}, controllerProps, {
	                className: classes,
	                isPlaceholderHint: false }));
	        }
	    }
	}]);

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (reg, props) {
	    props = (0, _pickBy2.default)(props, function (name, key) {
	        return reg.test(key);
	    });
	    return (0, _transform2.default)(props, function (result, value, key) {
	        result[key.replace(reg, '')] = value;
	    }, {});
	};

	var _pickBy = __webpack_require__(29);

	var _pickBy2 = _interopRequireDefault(_pickBy);

	var _transform = __webpack_require__(130);

	var _transform2 = _interopRequireDefault(_transform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(30),
	    basePickBy = __webpack_require__(120);

	/**
	 * Creates an object composed of the `object` properties `predicate` returns
	 * truthy for. The predicate is invoked with two arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Array|Function|Object|string} [predicate=_.identity]
	 *  The function invoked per property.
	 * @returns {Object} Returns the new object.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': '2', 'c': 3 };
	 *
	 * _.pickBy(object, _.isNumber);
	 * // => { 'a': 1, 'c': 3 }
	 */
	function pickBy(object, predicate) {
	  return object == null ? {} : basePickBy(object, baseIteratee(predicate));
	}

	module.exports = pickBy;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(31),
	    baseMatchesProperty = __webpack_require__(104),
	    identity = __webpack_require__(117),
	    isArray = __webpack_require__(88),
	    property = __webpack_require__(118);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  // Don't store the `typeof` result in a variable to avoid a JIT bug in Safari 9.
	  // See https://bugs.webkit.org/show_bug.cgi?id=156034 for more details.
	  if (typeof value == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (typeof value == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(32),
	    getMatchData = __webpack_require__(98),
	    matchesStrictComparable = __webpack_require__(103);

	/**
	 * The base implementation of `_.matches` which doesn't clone `source`.
	 *
	 * @private
	 * @param {Object} source The object of property values to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatches(source) {
	  var matchData = getMatchData(source);
	  if (matchData.length == 1 && matchData[0][2]) {
	    return matchesStrictComparable(matchData[0][0], matchData[0][1]);
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(33),
	    baseIsEqual = __webpack_require__(66);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.isMatch` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to inspect.
	 * @param {Object} source The object of property values to match.
	 * @param {Array} matchData The property names, values, and compare flags to match.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @returns {boolean} Returns `true` if `object` is a match, else `false`.
	 */
	function baseIsMatch(object, source, matchData, customizer) {
	  var index = matchData.length,
	      length = index,
	      noCustomizer = !customizer;

	  if (object == null) {
	    return !length;
	  }
	  object = Object(object);
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
	      var stack = new Stack;
	      if (customizer) {
	        var result = customizer(objValue, srcValue, key, object, source, stack);
	      }
	      if (!(result === undefined
	            ? baseIsEqual(srcValue, objValue, customizer, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG, stack)
	            : result
	          )) {
	        return false;
	      }
	    }
	  }
	  return true;
	}

	module.exports = baseIsMatch;


/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(34),
	    stackDelete = __webpack_require__(35),
	    stackGet = __webpack_require__(39),
	    stackHas = __webpack_require__(41),
	    stackSet = __webpack_require__(43);

	/**
	 * Creates a stack cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function Stack(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `Stack`.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 34 */
/***/ function(module, exports) {

	/**
	 * Removes all key-value entries from the stack.
	 *
	 * @private
	 * @name clear
	 * @memberOf Stack
	 */
	function stackClear() {
	  this.__data__ = { 'array': [], 'map': null };
	}

	module.exports = stackClear;


/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(36);

	/**
	 * Removes `key` and its value from the stack.
	 *
	 * @private
	 * @name delete
	 * @memberOf Stack
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function stackDelete(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocDelete(array, key) : data.map['delete'](key);
	}

	module.exports = stackDelete;


/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(37);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function assocDelete(array, key) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    return false;
	  }
	  var lastIndex = array.length - 1;
	  if (index == lastIndex) {
	    array.pop();
	  } else {
	    splice.call(array, index, 1);
	  }
	  return true;
	}

	module.exports = assocDelete;


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(38);

	/**
	 * Gets the index at which the `key` is found in `array` of key-value pairs.
	 *
	 * @private
	 * @param {Array} array The array to search.
	 * @param {*} key The key to search for.
	 * @returns {number} Returns the index of the matched value, else `-1`.
	 */
	function assocIndexOf(array, key) {
	  var length = array.length;
	  while (length--) {
	    if (eq(array[length][0], key)) {
	      return length;
	    }
	  }
	  return -1;
	}

	module.exports = assocIndexOf;


/***/ },
/* 38 */
/***/ function(module, exports) {

	/**
	 * Performs a
	 * [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var other = { 'user': 'fred' };
	 *
	 * _.eq(object, object);
	 * // => true
	 *
	 * _.eq(object, other);
	 * // => false
	 *
	 * _.eq('a', 'a');
	 * // => true
	 *
	 * _.eq('a', Object('a'));
	 * // => false
	 *
	 * _.eq(NaN, NaN);
	 * // => true
	 */
	function eq(value, other) {
	  return value === other || (value !== value && other !== other);
	}

	module.exports = eq;


/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(40);

	/**
	 * Gets the stack value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf Stack
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function stackGet(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocGet(array, key) : data.map.get(key);
	}

	module.exports = stackGet;


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(37);

	/**
	 * Gets the associative array value for `key`.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function assocGet(array, key) {
	  var index = assocIndexOf(array, key);
	  return index < 0 ? undefined : array[index][1];
	}

	module.exports = assocGet;


/***/ },
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(42);

	/**
	 * Checks if a stack value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf Stack
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function stackHas(key) {
	  var data = this.__data__,
	      array = data.array;

	  return array ? assocHas(array, key) : data.map.has(key);
	}

	module.exports = stackHas;


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(37);

	/**
	 * Checks if an associative array value for `key` exists.
	 *
	 * @private
	 * @param {Array} array The array to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function assocHas(array, key) {
	  return assocIndexOf(array, key) > -1;
	}

	module.exports = assocHas;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(44),
	    assocSet = __webpack_require__(64);

	/** Used as the size to enable large array optimizations. */
	var LARGE_ARRAY_SIZE = 200;

	/**
	 * Sets the stack `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf Stack
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the stack cache instance.
	 */
	function stackSet(key, value) {
	  var data = this.__data__,
	      array = data.array;

	  if (array) {
	    if (array.length < (LARGE_ARRAY_SIZE - 1)) {
	      assocSet(array, key, value);
	    } else {
	      data.array = null;
	      data.map = new MapCache(array);
	    }
	  }
	  var map = data.map;
	  if (map) {
	    map.set(key, value);
	  }
	  return this;
	}

	module.exports = stackSet;


/***/ },
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(45),
	    mapDelete = __webpack_require__(56),
	    mapGet = __webpack_require__(60),
	    mapHas = __webpack_require__(62),
	    mapSet = __webpack_require__(63);

	/**
	 * Creates a map cache object to store key-value pairs.
	 *
	 * @private
	 * @constructor
	 * @param {Array} [values] The values to cache.
	 */
	function MapCache(values) {
	  var index = -1,
	      length = values ? values.length : 0;

	  this.clear();
	  while (++index < length) {
	    var entry = values[index];
	    this.set(entry[0], entry[1]);
	  }
	}

	// Add methods to `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;

	module.exports = MapCache;


/***/ },
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(46),
	    Map = __webpack_require__(52);

	/**
	 * Removes all key-value entries from the map.
	 *
	 * @private
	 * @name clear
	 * @memberOf MapCache
	 */
	function mapClear() {
	  this.__data__ = {
	    'hash': new Hash,
	    'map': Map ? new Map : [],
	    'string': new Hash
	  };
	}

	module.exports = mapClear;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(47);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Creates a hash object.
	 *
	 * @private
	 * @constructor
	 * @returns {Object} Returns the new hash object.
	 */
	function Hash() {}

	// Avoid inheriting from `Object.prototype` when possible.
	Hash.prototype = nativeCreate ? nativeCreate(null) : objectProto;

	module.exports = Hash;


/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(48);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 48 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(49);

	/**
	 * Gets the native function at `key` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {string} key The key of the method to get.
	 * @returns {*} Returns the function if it's native, else `undefined`.
	 */
	function getNative(object, key) {
	  var value = object[key];
	  return isNative(value) ? value : undefined;
	}

	module.exports = getNative;


/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(8),
	    isHostObject = __webpack_require__(50),
	    isObject = __webpack_require__(5),
	    toSource = __webpack_require__(51);

	/**
	 * Used to match `RegExp`
	 * [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns).
	 */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari). */
	var reIsHostCtor = /^\[object .+?Constructor\]$/;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to detect if a method is native. */
	var reIsNative = RegExp('^' +
	  funcToString.call(hasOwnProperty).replace(reRegExpChar, '\\$&')
	  .replace(/hasOwnProperty|(function).*?(?=\\\()| for .+?(?=\\\])/g, '$1.*?') + '$'
	);

	/**
	 * Checks if `value` is a native function.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a native function,
	 *  else `false`.
	 * @example
	 *
	 * _.isNative(Array.prototype.push);
	 * // => true
	 *
	 * _.isNative(_);
	 * // => false
	 */
	function isNative(value) {
	  if (!isObject(value)) {
	    return false;
	  }
	  var pattern = (isFunction(value) || isHostObject(value)) ? reIsNative : reIsHostCtor;
	  return pattern.test(toSource(value));
	}

	module.exports = isNative;


/***/ },
/* 50 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	function isHostObject(value) {
	  // Many host objects are `Object` objects that can coerce to strings
	  // despite having improperly defined `toString` methods.
	  var result = false;
	  if (value != null && typeof value.toString != 'function') {
	    try {
	      result = !!(value + '');
	    } catch (e) {}
	  }
	  return result;
	}

	module.exports = isHostObject;


/***/ },
/* 51 */
/***/ function(module, exports) {

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Converts `func` to its source code.
	 *
	 * @private
	 * @param {Function} func The function to process.
	 * @returns {string} Returns the source code.
	 */
	function toSource(func) {
	  if (func != null) {
	    try {
	      return funcToString.call(func);
	    } catch (e) {}
	    try {
	      return (func + '');
	    } catch (e) {}
	  }
	  return '';
	}

	module.exports = toSource;


/***/ },
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(48),
	    root = __webpack_require__(53);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(55);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect free variable `global` from Node.js. */
	var freeGlobal = checkGlobal(freeExports && freeModule && typeof global == 'object' && global);

	/** Detect free variable `self`. */
	var freeSelf = checkGlobal(objectTypes[typeof self] && self);

	/** Detect free variable `window`. */
	var freeWindow = checkGlobal(objectTypes[typeof window] && window);

	/** Detect `this` as the global object. */
	var thisGlobal = checkGlobal(objectTypes[typeof this] && this);

	/**
	 * Used as a reference to the global object.
	 *
	 * The `this` value is used if it's the global object to avoid Greasemonkey's
	 * restricted `window` object, otherwise the `window` object is used.
	 */
	var root = freeGlobal ||
	  ((freeWindow !== (thisGlobal && thisGlobal.window)) && freeWindow) ||
	    freeSelf || thisGlobal || Function('return this')();

	module.exports = root;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)(module), (function() { return this; }())))

/***/ },
/* 54 */
/***/ function(module, exports) {

	module.exports = function(module) {
		if(!module.webpackPolyfill) {
			module.deprecate = function() {};
			module.paths = [];
			// module.parent = undefined by default
			module.children = [];
			module.webpackPolyfill = 1;
		}
		return module;
	}


/***/ },
/* 55 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a global object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {null|Object} Returns `value` if it's a global object, else `null`.
	 */
	function checkGlobal(value) {
	  return (value && value.Object === Object) ? value : null;
	}

	module.exports = checkGlobal;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(52),
	    assocDelete = __webpack_require__(36),
	    hashDelete = __webpack_require__(57),
	    isKeyable = __webpack_require__(59);

	/**
	 * Removes `key` and its value from the map.
	 *
	 * @private
	 * @name delete
	 * @memberOf MapCache
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function mapDelete(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashDelete(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map['delete'](key) : assocDelete(data.map, key);
	}

	module.exports = mapDelete;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(58);

	/**
	 * Removes `key` and its value from the hash.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to remove.
	 * @returns {boolean} Returns `true` if the entry was removed, else `false`.
	 */
	function hashDelete(hash, key) {
	  return hashHas(hash, key) && delete hash[key];
	}

	module.exports = hashDelete;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(47);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if a hash value for `key` exists.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function hashHas(hash, key) {
	  return nativeCreate ? hash[key] !== undefined : hasOwnProperty.call(hash, key);
	}

	module.exports = hashHas;


/***/ },
/* 59 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is suitable for use as unique object key.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is suitable, else `false`.
	 */
	function isKeyable(value) {
	  var type = typeof value;
	  return (type == 'string' || type == 'number' || type == 'symbol' || type == 'boolean')
	    ? (value !== '__proto__')
	    : (value === null);
	}

	module.exports = isKeyable;


/***/ },
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(52),
	    assocGet = __webpack_require__(40),
	    hashGet = __webpack_require__(61),
	    isKeyable = __webpack_require__(59);

	/**
	 * Gets the map value for `key`.
	 *
	 * @private
	 * @name get
	 * @memberOf MapCache
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function mapGet(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashGet(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.get(key) : assocGet(data.map, key);
	}

	module.exports = mapGet;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(47);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Gets the hash value for `key`.
	 *
	 * @private
	 * @param {Object} hash The hash to query.
	 * @param {string} key The key of the value to get.
	 * @returns {*} Returns the entry value.
	 */
	function hashGet(hash, key) {
	  if (nativeCreate) {
	    var result = hash[key];
	    return result === HASH_UNDEFINED ? undefined : result;
	  }
	  return hasOwnProperty.call(hash, key) ? hash[key] : undefined;
	}

	module.exports = hashGet;


/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(52),
	    assocHas = __webpack_require__(42),
	    hashHas = __webpack_require__(58),
	    isKeyable = __webpack_require__(59);

	/**
	 * Checks if a map value for `key` exists.
	 *
	 * @private
	 * @name has
	 * @memberOf MapCache
	 * @param {string} key The key of the entry to check.
	 * @returns {boolean} Returns `true` if an entry for `key` exists, else `false`.
	 */
	function mapHas(key) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    return hashHas(typeof key == 'string' ? data.string : data.hash, key);
	  }
	  return Map ? data.map.has(key) : assocHas(data.map, key);
	}

	module.exports = mapHas;


/***/ },
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(52),
	    assocSet = __webpack_require__(64),
	    hashSet = __webpack_require__(65),
	    isKeyable = __webpack_require__(59);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache instance.
	 */
	function mapSet(key, value) {
	  var data = this.__data__;
	  if (isKeyable(key)) {
	    hashSet(typeof key == 'string' ? data.string : data.hash, key, value);
	  } else if (Map) {
	    data.map.set(key, value);
	  } else {
	    assocSet(data.map, key, value);
	  }
	  return this;
	}

	module.exports = mapSet;


/***/ },
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(37);

	/**
	 * Sets the associative array `key` to `value`.
	 *
	 * @private
	 * @param {Array} array The array to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function assocSet(array, key, value) {
	  var index = assocIndexOf(array, key);
	  if (index < 0) {
	    array.push([key, value]);
	  } else {
	    array[index][1] = value;
	  }
	}

	module.exports = assocSet;


/***/ },
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(47);

	/** Used to stand-in for `undefined` hash values. */
	var HASH_UNDEFINED = '__lodash_hash_undefined__';

	/**
	 * Sets the hash `key` to `value`.
	 *
	 * @private
	 * @param {Object} hash The hash to modify.
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 */
	function hashSet(hash, key, value) {
	  hash[key] = (nativeCreate && value === undefined) ? HASH_UNDEFINED : value;
	}

	module.exports = hashSet;


/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(67),
	    isObject = __webpack_require__(5),
	    isObjectLike = __webpack_require__(10);

	/**
	 * The base implementation of `_.isEqual` which supports partial comparisons
	 * and tracks traversed objects.
	 *
	 * @private
	 * @param {*} value The value to compare.
	 * @param {*} other The other value to compare.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {boolean} [bitmask] The bitmask of comparison flags.
	 *  The bitmask may be composed of the following flags:
	 *     1 - Unordered comparison
	 *     2 - Partial comparison
	 * @param {Object} [stack] Tracks traversed `value` and `other` objects.
	 * @returns {boolean} Returns `true` if the values are equivalent, else `false`.
	 */
	function baseIsEqual(value, other, customizer, bitmask, stack) {
	  if (value === other) {
	    return true;
	  }
	  if (value == null || other == null || (!isObject(value) && !isObjectLike(other))) {
	    return value !== value && other !== other;
	  }
	  return baseIsEqualDeep(value, other, baseIsEqual, customizer, bitmask, stack);
	}

	module.exports = baseIsEqual;


/***/ },
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(33),
	    equalArrays = __webpack_require__(68),
	    equalByTag = __webpack_require__(70),
	    equalObjects = __webpack_require__(75),
	    getTag = __webpack_require__(92),
	    isArray = __webpack_require__(88),
	    isHostObject = __webpack_require__(50),
	    isTypedArray = __webpack_require__(97);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * A specialized version of `baseIsEqual` for arrays and objects which performs
	 * deep comparisons and tracks traversed objects enabling objects with circular
	 * references to be compared.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} [customizer] The function to customize comparisons.
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} [stack] Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function baseIsEqualDeep(object, other, equalFunc, customizer, bitmask, stack) {
	  var objIsArr = isArray(object),
	      othIsArr = isArray(other),
	      objTag = arrayTag,
	      othTag = arrayTag;

	  if (!objIsArr) {
	    objTag = getTag(object);
	    objTag = objTag == argsTag ? objectTag : objTag;
	  }
	  if (!othIsArr) {
	    othTag = getTag(other);
	    othTag = othTag == argsTag ? objectTag : othTag;
	  }
	  var objIsObj = objTag == objectTag && !isHostObject(object),
	      othIsObj = othTag == objectTag && !isHostObject(other),
	      isSameTag = objTag == othTag;

	  if (isSameTag && !objIsObj) {
	    stack || (stack = new Stack);
	    return (objIsArr || isTypedArray(object))
	      ? equalArrays(object, other, equalFunc, customizer, bitmask, stack)
	      : equalByTag(object, other, objTag, equalFunc, customizer, bitmask, stack);
	  }
	  if (!(bitmask & PARTIAL_COMPARE_FLAG)) {
	    var objIsWrapped = objIsObj && hasOwnProperty.call(object, '__wrapped__'),
	        othIsWrapped = othIsObj && hasOwnProperty.call(other, '__wrapped__');

	    if (objIsWrapped || othIsWrapped) {
	      var objUnwrapped = objIsWrapped ? object.value() : object,
	          othUnwrapped = othIsWrapped ? other.value() : other;

	      stack || (stack = new Stack);
	      return equalFunc(objUnwrapped, othUnwrapped, customizer, bitmask, stack);
	    }
	  }
	  if (!isSameTag) {
	    return false;
	  }
	  stack || (stack = new Stack);
	  return equalObjects(object, other, equalFunc, customizer, bitmask, stack);
	}

	module.exports = baseIsEqualDeep;


/***/ },
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(69);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for arrays with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Array} array The array to compare.
	 * @param {Array} other The other array to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `array` and `other` objects.
	 * @returns {boolean} Returns `true` if the arrays are equivalent, else `false`.
	 */
	function equalArrays(array, other, equalFunc, customizer, bitmask, stack) {
	  var index = -1,
	      isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      isUnordered = bitmask & UNORDERED_COMPARE_FLAG,
	      arrLength = array.length,
	      othLength = other.length;

	  if (arrLength != othLength && !(isPartial && othLength > arrLength)) {
	    return false;
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(array);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(array, other);

	  // Ignore non-index properties.
	  while (++index < arrLength) {
	    var arrValue = array[index],
	        othValue = other[index];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, arrValue, index, other, array, stack)
	        : customizer(arrValue, othValue, index, array, other, stack);
	    }
	    if (compared !== undefined) {
	      if (compared) {
	        continue;
	      }
	      result = false;
	      break;
	    }
	    // Recursively compare arrays (susceptible to call stack limits).
	    if (isUnordered) {
	      if (!arraySome(other, function(othValue) {
	            return arrValue === othValue ||
	              equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(
	          arrValue === othValue ||
	            equalFunc(arrValue, othValue, customizer, bitmask, stack)
	        )) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 69 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
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
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(71),
	    Uint8Array = __webpack_require__(72),
	    equalArrays = __webpack_require__(68),
	    mapToArray = __webpack_require__(73),
	    setToArray = __webpack_require__(74);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]';

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

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
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case dataViewTag:
	      if ((object.byteLength != other.byteLength) ||
	          (object.byteOffset != other.byteOffset)) {
	        return false;
	      }
	      object = object.buffer;
	      other = other.buffer;

	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and
	      // booleans to `1` or `0` treating invalid dates coerced to `NaN` as
	      // not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings, primitives and objects,
	      // as equal. See http://www.ecma-international.org/ecma-262/6.0/#sec-regexp.prototype.tostring
	      // for more details.
	      return object == (other + '');

	    case mapTag:
	      var convert = mapToArray;

	    case setTag:
	      var isPartial = bitmask & PARTIAL_COMPARE_FLAG;
	      convert || (convert = setToArray);

	      if (object.size != other.size && !isPartial) {
	        return false;
	      }
	      // Assume cyclic values are equal.
	      var stacked = stack.get(object);
	      if (stacked) {
	        return stacked == other;
	      }
	      bitmask |= UNORDERED_COMPARE_FLAG;
	      stack.set(object, other);

	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask, stack);

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(53);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(53);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 73 */
/***/ function(module, exports) {

	/**
	 * Converts `map` to an array.
	 *
	 * @private
	 * @param {Object} map The map to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function mapToArray(map) {
	  var index = -1,
	      result = Array(map.size);

	  map.forEach(function(value, key) {
	    result[++index] = [key, value];
	  });
	  return result;
	}

	module.exports = mapToArray;


/***/ },
/* 74 */
/***/ function(module, exports) {

	/**
	 * Converts `set` to an array.
	 *
	 * @private
	 * @param {Object} set The set to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function setToArray(set) {
	  var index = -1,
	      result = Array(set.size);

	  set.forEach(function(value) {
	    result[++index] = value;
	  });
	  return result;
	}

	module.exports = setToArray;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(76),
	    keys = __webpack_require__(78);

	/** Used to compose bitmasks for comparison styles. */
	var PARTIAL_COMPARE_FLAG = 2;

	/**
	 * A specialized version of `baseIsEqualDeep` for objects with support for
	 * partial deep comparisons.
	 *
	 * @private
	 * @param {Object} object The object to compare.
	 * @param {Object} other The other object to compare.
	 * @param {Function} equalFunc The function to determine equivalents of values.
	 * @param {Function} customizer The function to customize comparisons.
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual`
	 *  for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalObjects(object, other, equalFunc, customizer, bitmask, stack) {
	  var isPartial = bitmask & PARTIAL_COMPARE_FLAG,
	      objProps = keys(object),
	      objLength = objProps.length,
	      othProps = keys(other),
	      othLength = othProps.length;

	  if (objLength != othLength && !isPartial) {
	    return false;
	  }
	  var index = objLength;
	  while (index--) {
	    var key = objProps[index];
	    if (!(isPartial ? key in other : baseHas(other, key))) {
	      return false;
	    }
	  }
	  // Assume cyclic values are equal.
	  var stacked = stack.get(object);
	  if (stacked) {
	    return stacked == other;
	  }
	  var result = true;
	  stack.set(object, other);

	  var skipCtor = isPartial;
	  while (++index < objLength) {
	    key = objProps[index];
	    var objValue = object[key],
	        othValue = other[key];

	    if (customizer) {
	      var compared = isPartial
	        ? customizer(othValue, objValue, key, other, object, stack)
	        : customizer(objValue, othValue, key, object, other, stack);
	    }
	    // Recursively compare objects (susceptible to call stack limits).
	    if (!(compared === undefined
	          ? (objValue === othValue || equalFunc(objValue, othValue, customizer, bitmask, stack))
	          : compared
	        )) {
	      result = false;
	      break;
	    }
	    skipCtor || (skipCtor = key == 'constructor');
	  }
	  if (result && !skipCtor) {
	    var objCtor = object.constructor,
	        othCtor = other.constructor;

	    // Non `Object` object instances with different constructors are not equal.
	    if (objCtor != othCtor &&
	        ('constructor' in object && 'constructor' in other) &&
	        !(typeof objCtor == 'function' && objCtor instanceof objCtor &&
	          typeof othCtor == 'function' && othCtor instanceof othCtor)) {
	      result = false;
	    }
	  }
	  stack['delete'](object);
	  return result;
	}

	module.exports = equalObjects;


/***/ },
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(77);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * The base implementation of `_.has` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHas(object, key) {
	  // Avoid a bug in IE 10-11 where objects with a [[Prototype]] of `null`,
	  // that are composed entirely of index properties, return `false` for
	  // `hasOwnProperty` checks of them.
	  return hasOwnProperty.call(object, key) ||
	    (typeof object == 'object' && key in object && getPrototype(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 77 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeGetPrototype = Object.getPrototypeOf;

	/**
	 * Gets the `[[Prototype]]` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {null|Object} Returns the `[[Prototype]]`.
	 */
	function getPrototype(value) {
	  return nativeGetPrototype(Object(value));
	}

	module.exports = getPrototype;


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(76),
	    baseKeys = __webpack_require__(79),
	    indexKeys = __webpack_require__(80),
	    isArrayLike = __webpack_require__(84),
	    isIndex = __webpack_require__(90),
	    isPrototype = __webpack_require__(91);

	/**
	 * Creates an array of the own enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects. See the
	 * [ES spec](http://ecma-international.org/ecma-262/6.0/#sec-object.keys)
	 * for more details.
	 *
	 * @static
	 * @since 0.1.0
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
	function keys(object) {
	  var isProto = isPrototype(object);
	  if (!(isProto || isArrayLike(object))) {
	    return baseKeys(object);
	  }
	  var indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  for (var key in object) {
	    if (baseHas(object, key) &&
	        !(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(isProto && key == 'constructor')) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keys;


/***/ },
/* 79 */
/***/ function(module, exports) {

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeKeys = Object.keys;

	/**
	 * The base implementation of `_.keys` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeys(object) {
	  return nativeKeys(Object(object));
	}

	module.exports = baseKeys;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(81),
	    isArguments = __webpack_require__(82),
	    isArray = __webpack_require__(88),
	    isLength = __webpack_require__(87),
	    isString = __webpack_require__(89);

	/**
	 * Creates an array of index keys for `object` values of arrays,
	 * `arguments` objects, and strings, otherwise `null` is returned.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array|null} Returns index keys, else `null`.
	 */
	function indexKeys(object) {
	  var length = object ? object.length : undefined;
	  if (isLength(length) &&
	      (isArray(object) || isString(object) || isArguments(object))) {
	    return baseTimes(length, String);
	  }
	  return null;
	}

	module.exports = indexKeys;


/***/ },
/* 81 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.times` without support for iteratee shorthands
	 * or max array length checks.
	 *
	 * @private
	 * @param {number} n The number of times to invoke `iteratee`.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the array of results.
	 */
	function baseTimes(n, iteratee) {
	  var index = -1,
	      result = Array(n);

	  while (++index < n) {
	    result[index] = iteratee(index);
	  }
	  return result;
	}

	module.exports = baseTimes;


/***/ },
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(83);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * Checks if `value` is likely an `arguments` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArguments(function() { return arguments; }());
	 * // => true
	 *
	 * _.isArguments([1, 2, 3]);
	 * // => false
	 */
	function isArguments(value) {
	  // Safari 8.1 incorrectly makes `arguments.callee` enumerable in strict mode.
	  return isArrayLikeObject(value) && hasOwnProperty.call(value, 'callee') &&
	    (!propertyIsEnumerable.call(value, 'callee') || objectToString.call(value) == argsTag);
	}

	module.exports = isArguments;


/***/ },
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(84),
	    isObjectLike = __webpack_require__(10);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object,
	 *  else `false`.
	 * @example
	 *
	 * _.isArrayLikeObject([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLikeObject(document.body.children);
	 * // => true
	 *
	 * _.isArrayLikeObject('abc');
	 * // => false
	 *
	 * _.isArrayLikeObject(_.noop);
	 * // => false
	 */
	function isArrayLikeObject(value) {
	  return isObjectLike(value) && isArrayLike(value);
	}

	module.exports = isArrayLikeObject;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(85),
	    isFunction = __webpack_require__(8),
	    isLength = __webpack_require__(87);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is array-like, else `false`.
	 * @example
	 *
	 * _.isArrayLike([1, 2, 3]);
	 * // => true
	 *
	 * _.isArrayLike(document.body.children);
	 * // => true
	 *
	 * _.isArrayLike('abc');
	 * // => true
	 *
	 * _.isArrayLike(_.noop);
	 * // => false
	 */
	function isArrayLike(value) {
	  return value != null && isLength(getLength(value)) && !isFunction(value);
	}

	module.exports = isArrayLike;


/***/ },
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(86);

	/**
	 * Gets the "length" property value of `object`.
	 *
	 * **Note:** This function is used to avoid a
	 * [JIT bug](https://bugs.webkit.org/show_bug.cgi?id=142792) that affects
	 * Safari on at least iOS 8.1-8.3 ARM64.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {*} Returns the "length" value.
	 */
	var getLength = baseProperty('length');

	module.exports = getLength;


/***/ },
/* 86 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : object[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 87 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length,
	 *  else `false`.
	 * @example
	 *
	 * _.isLength(3);
	 * // => true
	 *
	 * _.isLength(Number.MIN_VALUE);
	 * // => false
	 *
	 * _.isLength(Infinity);
	 * // => false
	 *
	 * _.isLength('3');
	 * // => false
	 */
	function isLength(value) {
	  return typeof value == 'number' &&
	    value > -1 && value % 1 == 0 && value <= MAX_SAFE_INTEGER;
	}

	module.exports = isLength;


/***/ },
/* 88 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isArray([1, 2, 3]);
	 * // => true
	 *
	 * _.isArray(document.body.children);
	 * // => false
	 *
	 * _.isArray('abc');
	 * // => false
	 *
	 * _.isArray(_.noop);
	 * // => false
	 */
	var isArray = Array.isArray;

	module.exports = isArray;


/***/ },
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(88),
	    isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `String` primitive or object.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isString('abc');
	 * // => true
	 *
	 * _.isString(1);
	 * // => false
	 */
	function isString(value) {
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 90 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/** Used to detect unsigned integer values. */
	var reIsUint = /^(?:0|[1-9]\d*)$/;

	/**
	 * Checks if `value` is a valid array-like index.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @param {number} [length=MAX_SAFE_INTEGER] The upper bounds of a valid index.
	 * @returns {boolean} Returns `true` if `value` is a valid index, else `false`.
	 */
	function isIndex(value, length) {
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return !!length &&
	    (typeof value == 'number' || reIsUint.test(value)) &&
	    (value > -1 && value % 1 == 0 && value < length);
	}

	module.exports = isIndex;


/***/ },
/* 91 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Checks if `value` is likely a prototype object.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a prototype, else `false`.
	 */
	function isPrototype(value) {
	  var Ctor = value && value.constructor,
	      proto = (typeof Ctor == 'function' && Ctor.prototype) || objectProto;

	  return value === proto;
	}

	module.exports = isPrototype;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var DataView = __webpack_require__(93),
	    Map = __webpack_require__(52),
	    Promise = __webpack_require__(94),
	    Set = __webpack_require__(95),
	    WeakMap = __webpack_require__(96),
	    toSource = __webpack_require__(51);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    promiseTag = '[object Promise]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	var dataViewTag = '[object DataView]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var dataViewCtorString = toSource(DataView),
	    mapCtorString = toSource(Map),
	    promiseCtorString = toSource(Promise),
	    setCtorString = toSource(Set),
	    weakMapCtorString = toSource(WeakMap);

	/**
	 * Gets the `toStringTag` of `value`.
	 *
	 * @private
	 * @param {*} value The value to query.
	 * @returns {string} Returns the `toStringTag`.
	 */
	function getTag(value) {
	  return objectToString.call(value);
	}

	// Fallback for data views, maps, sets, and weak maps in IE 11,
	// for data views in Edge, and promises in Node.js.
	if ((DataView && getTag(new DataView(new ArrayBuffer(1))) != dataViewTag) ||
	    (Map && getTag(new Map) != mapTag) ||
	    (Promise && getTag(Promise.resolve()) != promiseTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : undefined,
	        ctorString = Ctor ? toSource(Ctor) : undefined;

	    if (ctorString) {
	      switch (ctorString) {
	        case dataViewCtorString: return dataViewTag;
	        case mapCtorString: return mapTag;
	        case promiseCtorString: return promiseTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(48),
	    root = __webpack_require__(53);

	/* Built-in method references that are verified to be native. */
	var DataView = getNative(root, 'DataView');

	module.exports = DataView;


/***/ },
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(48),
	    root = __webpack_require__(53);

	/* Built-in method references that are verified to be native. */
	var Promise = getNative(root, 'Promise');

	module.exports = Promise;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(48),
	    root = __webpack_require__(53);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(48),
	    root = __webpack_require__(53);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(87),
	    isObjectLike = __webpack_require__(10);

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
	    dataViewTag = '[object DataView]',
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
	typedArrayTags[dataViewTag] = typedArrayTags[dateTag] =
	typedArrayTags[errorTag] = typedArrayTags[funcTag] =
	typedArrayTags[mapTag] = typedArrayTags[numberTag] =
	typedArrayTags[objectTag] = typedArrayTags[regexpTag] =
	typedArrayTags[setTag] = typedArrayTags[stringTag] =
	typedArrayTags[weakMapTag] = false;

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a typed array.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified,
	 *  else `false`.
	 * @example
	 *
	 * _.isTypedArray(new Uint8Array);
	 * // => true
	 *
	 * _.isTypedArray([]);
	 * // => false
	 */
	function isTypedArray(value) {
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(99),
	    toPairs = __webpack_require__(100);

	/**
	 * Gets the property names, values, and compare flags of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the match data of `object`.
	 */
	function getMatchData(object) {
	  var result = toPairs(object),
	      length = result.length;

	  while (length--) {
	    result[length][2] = isStrictComparable(result[length][1]);
	  }
	  return result;
	}

	module.exports = getMatchData;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);

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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(101),
	    keys = __webpack_require__(78);

	/**
	 * Creates an array of own enumerable string keyed-value pairs for `object`
	 * which can be consumed by `_.fromPairs`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @alias entries
	 * @category Object
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the new array of key-value pairs.
	 * @example
	 *
	 * function Foo() {
	 *   this.a = 1;
	 *   this.b = 2;
	 * }
	 *
	 * Foo.prototype.c = 3;
	 *
	 * _.toPairs(new Foo);
	 * // => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
	 */
	function toPairs(object) {
	  return baseToPairs(object, keys(object));
	}

	module.exports = toPairs;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(102);

	/**
	 * The base implementation of `_.toPairs` and `_.toPairsIn` which creates an array
	 * of key-value pairs for `object` corresponding to the property names of `props`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} props The property names to get values for.
	 * @returns {Object} Returns the new array of key-value pairs.
	 */
	function baseToPairs(object, props) {
	  return arrayMap(props, function(key) {
	    return [key, object[key]];
	  });
	}

	module.exports = baseToPairs;


/***/ },
/* 102 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.map` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Array} Returns the new mapped array.
	 */
	function arrayMap(array, iteratee) {
	  var index = -1,
	      length = array.length,
	      result = Array(length);

	  while (++index < length) {
	    result[index] = iteratee(array[index], index, array);
	  }
	  return result;
	}

	module.exports = arrayMap;


/***/ },
/* 103 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `matchesProperty` for source values suitable
	 * for strict equality comparisons, i.e. `===`.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function matchesStrictComparable(key, srcValue) {
	  return function(object) {
	    if (object == null) {
	      return false;
	    }
	    return object[key] === srcValue &&
	      (srcValue !== undefined || (key in Object(object)));
	  };
	}

	module.exports = matchesStrictComparable;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(66),
	    get = __webpack_require__(105),
	    hasIn = __webpack_require__(114),
	    isKey = __webpack_require__(112),
	    isStrictComparable = __webpack_require__(99),
	    matchesStrictComparable = __webpack_require__(103),
	    toKey = __webpack_require__(113);

	/** Used to compose bitmasks for comparison styles. */
	var UNORDERED_COMPARE_FLAG = 1,
	    PARTIAL_COMPARE_FLAG = 2;

	/**
	 * The base implementation of `_.matchesProperty` which doesn't clone `srcValue`.
	 *
	 * @private
	 * @param {string} path The path of the property to get.
	 * @param {*} srcValue The value to match.
	 * @returns {Function} Returns the new function.
	 */
	function baseMatchesProperty(path, srcValue) {
	  if (isKey(path) && isStrictComparable(srcValue)) {
	    return matchesStrictComparable(toKey(path), srcValue);
	  }
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(106);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined`, the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.7.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned for `undefined` resolved values.
	 * @returns {*} Returns the resolved value.
	 * @example
	 *
	 * var object = { 'a': [{ 'b': { 'c': 3 } }] };
	 *
	 * _.get(object, 'a[0].b.c');
	 * // => 3
	 *
	 * _.get(object, ['a', '0', 'b', 'c']);
	 * // => 3
	 *
	 * _.get(object, 'a.b.c', 'default');
	 * // => 'default'
	 */
	function get(object, path, defaultValue) {
	  var result = object == null ? undefined : baseGet(object, path);
	  return result === undefined ? defaultValue : result;
	}

	module.exports = get;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(107),
	    isKey = __webpack_require__(112),
	    toKey = __webpack_require__(113);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[toKey(path[index++])];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(88),
	    stringToPath = __webpack_require__(108);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function castPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = castPath;


/***/ },
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var memoize = __webpack_require__(109),
	    toString = __webpack_require__(110);

	/** Used to match property names within property paths. */
	var rePropName = /[^.[\]]+|\[(?:(-?\d+(?:\.\d+)?)|(["'])((?:(?!\2)[^\\]|\\.)*?)\2)\]/g;

	/** Used to match backslashes in property paths. */
	var reEscapeChar = /\\(\\)?/g;

	/**
	 * Converts `string` to a property path array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the property path array.
	 */
	var stringToPath = memoize(function(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	});

	module.exports = stringToPath;


/***/ },
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(44);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/**
	 * Creates a function that memoizes the result of `func`. If `resolver` is
	 * provided, it determines the cache key for storing the result based on the
	 * arguments provided to the memoized function. By default, the first argument
	 * provided to the memoized function is used as the map cache key. The `func`
	 * is invoked with the `this` binding of the memoized function.
	 *
	 * **Note:** The cache is exposed as the `cache` property on the memoized
	 * function. Its creation may be customized by replacing the `_.memoize.Cache`
	 * constructor with one whose instances implement the
	 * [`Map`](http://ecma-international.org/ecma-262/6.0/#sec-properties-of-the-map-prototype-object)
	 * method interface of `delete`, `get`, `has`, and `set`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Function
	 * @param {Function} func The function to have its output memoized.
	 * @param {Function} [resolver] The function to resolve the cache key.
	 * @returns {Function} Returns the new memoizing function.
	 * @example
	 *
	 * var object = { 'a': 1, 'b': 2 };
	 * var other = { 'c': 3, 'd': 4 };
	 *
	 * var values = _.memoize(_.values);
	 * values(object);
	 * // => [1, 2]
	 *
	 * values(other);
	 * // => [3, 4]
	 *
	 * object.a = 2;
	 * values(object);
	 * // => [1, 2]
	 *
	 * // Modify the result cache.
	 * values.cache.set(object, ['a', 'b']);
	 * values(object);
	 * // => ['a', 'b']
	 *
	 * // Replace `_.memoize.Cache`.
	 * _.memoize.Cache = WeakMap;
	 */
	function memoize(func, resolver) {
	  if (typeof func != 'function' || (resolver && typeof resolver != 'function')) {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  var memoized = function() {
	    var args = arguments,
	        key = resolver ? resolver.apply(this, args) : args[0],
	        cache = memoized.cache;

	    if (cache.has(key)) {
	      return cache.get(key);
	    }
	    var result = func.apply(this, args);
	    memoized.cache = cache.set(key, result);
	    return result;
	  };
	  memoized.cache = new (memoize.Cache || MapCache);
	  return memoized;
	}

	// Assign cache to `_.memoize`.
	memoize.Cache = MapCache;

	module.exports = memoize;


/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(111);

	/**
	 * Converts `value` to a string. An empty string is returned for `null`
	 * and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 * @example
	 *
	 * _.toString(null);
	 * // => ''
	 *
	 * _.toString(-0);
	 * // => '-0'
	 *
	 * _.toString([1, 2, 3]);
	 * // => '1,2,3'
	 */
	function toString(value) {
	  return value == null ? '' : baseToString(value);
	}

	module.exports = toString;


/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(71),
	    isSymbol = __webpack_require__(9);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * The base implementation of `_.toString` which doesn't convert nullish
	 * values to empty strings.
	 *
	 * @private
	 * @param {*} value The value to process.
	 * @returns {string} Returns the string.
	 */
	function baseToString(value) {
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = baseToString;


/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(88),
	    isSymbol = __webpack_require__(9);

	/** Used to match property names within property paths. */
	var reIsDeepProp = /\.|\[(?:[^[\]]*|(["'])(?:(?!\1)[^\\]|\\.)*?\1)\]/,
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
	  if (isArray(value)) {
	    return false;
	  }
	  var type = typeof value;
	  if (type == 'number' || type == 'symbol' || type == 'boolean' ||
	      value == null || isSymbol(value)) {
	    return true;
	  }
	  return reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	    (object != null && value in Object(object));
	}

	module.exports = isKey;


/***/ },
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var isSymbol = __webpack_require__(9);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/**
	 * Converts `value` to a string key if it's not a string or symbol.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {string|symbol} Returns the key.
	 */
	function toKey(value) {
	  if (typeof value == 'string' || isSymbol(value)) {
	    return value;
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toKey;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(115),
	    hasPath = __webpack_require__(116);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': 2 }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return object != null && hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 115 */
/***/ function(module, exports) {

	/**
	 * The base implementation of `_.hasIn` without support for deep paths.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} key The key to check.
	 * @returns {boolean} Returns `true` if `key` exists, else `false`.
	 */
	function baseHasIn(object, key) {
	  return key in Object(object);
	}

	module.exports = baseHasIn;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var castPath = __webpack_require__(107),
	    isArguments = __webpack_require__(82),
	    isArray = __webpack_require__(88),
	    isIndex = __webpack_require__(90),
	    isKey = __webpack_require__(112),
	    isLength = __webpack_require__(87),
	    isString = __webpack_require__(89),
	    toKey = __webpack_require__(113);

	/**
	 * Checks if `path` exists on `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @param {Function} hasFunc The function to check properties.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 */
	function hasPath(object, path, hasFunc) {
	  path = isKey(path, object) ? [path] : castPath(path);

	  var result,
	      index = -1,
	      length = path.length;

	  while (++index < length) {
	    var key = toKey(path[index]);
	    if (!(result = object != null && hasFunc(object, key))) {
	      break;
	    }
	    object = object[key];
	  }
	  if (result) {
	    return result;
	  }
	  var length = object ? object.length : 0;
	  return !!length && isLength(length) && isIndex(key, length) &&
	    (isArray(object) || isString(object) || isArguments(object));
	}

	module.exports = hasPath;


/***/ },
/* 117 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
	 * @since 0.1.0
	 * @memberOf _
	 * @category Util
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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(86),
	    basePropertyDeep = __webpack_require__(119),
	    isKey = __webpack_require__(112),
	    toKey = __webpack_require__(113);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var objects = [
	 *   { 'a': { 'b': 2 } },
	 *   { 'a': { 'b': 1 } }
	 * ];
	 *
	 * _.map(objects, _.property('a.b'));
	 * // => [2, 1]
	 *
	 * _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(toKey(path)) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(106);

	/**
	 * A specialized version of `baseProperty` which supports deep paths.
	 *
	 * @private
	 * @param {Array|string} path The path of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function basePropertyDeep(path) {
	  return function(object) {
	    return baseGet(object, path);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var getAllKeysIn = __webpack_require__(121);

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, predicate) {
	  var index = -1,
	      props = getAllKeysIn(object),
	      length = props.length,
	      result = {};

	  while (++index < length) {
	    var key = props[index],
	        value = object[key];

	    if (predicate(value, key)) {
	      result[key] = value;
	    }
	  }
	  return result;
	}

	module.exports = basePickBy;


/***/ },
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(122),
	    getSymbolsIn = __webpack_require__(124),
	    keysIn = __webpack_require__(126);

	/**
	 * Creates an array of own and inherited enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeysIn(object) {
	  return baseGetAllKeys(object, keysIn, getSymbolsIn);
	}

	module.exports = getAllKeysIn;


/***/ },
/* 122 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(123),
	    isArray = __webpack_require__(88);

	/**
	 * The base implementation of `getAllKeys` and `getAllKeysIn` which uses
	 * `keysFunc` and `symbolsFunc` to get the enumerable property names and
	 * symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Function} keysFunc The function to get the keys of `object`.
	 * @param {Function} symbolsFunc The function to get the symbols of `object`.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function baseGetAllKeys(object, keysFunc, symbolsFunc) {
	  var result = keysFunc(object);
	  return isArray(object)
	    ? result
	    : arrayPush(result, symbolsFunc(object));
	}

	module.exports = baseGetAllKeys;


/***/ },
/* 123 */
/***/ function(module, exports) {

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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(123),
	    getPrototype = __webpack_require__(77),
	    getSymbols = __webpack_require__(125);

	/** Built-in value references. */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own and inherited enumerable symbol properties
	 * of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbolsIn = !getOwnPropertySymbols ? getSymbols : function(object) {
	  var result = [];
	  while (object) {
	    arrayPush(result, getSymbols(object));
	    object = getPrototype(object);
	  }
	  return result;
	};

	module.exports = getSymbolsIn;


/***/ },
/* 125 */
/***/ function(module, exports) {

	/** Built-in value references. */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own enumerable symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	function getSymbols(object) {
	  // Coerce `object` to an object to avoid non-object errors in V8.
	  // See https://bugs.chromium.org/p/v8/issues/detail?id=3443 for more details.
	  return getOwnPropertySymbols(Object(object));
	}

	// Fallback for IE < 11.
	if (!getOwnPropertySymbols) {
	  getSymbols = function() {
	    return [];
	  };
	}

	module.exports = getSymbols;


/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(127),
	    indexKeys = __webpack_require__(80),
	    isIndex = __webpack_require__(90),
	    isPrototype = __webpack_require__(91);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Creates an array of the own and inherited enumerable property names of `object`.
	 *
	 * **Note:** Non-object values are coerced to objects.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
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
	  var index = -1,
	      isProto = isPrototype(object),
	      props = baseKeysIn(object),
	      propsLength = props.length,
	      indexes = indexKeys(object),
	      skipIndexes = !!indexes,
	      result = indexes || [],
	      length = result.length;

	  while (++index < propsLength) {
	    var key = props[index];
	    if (!(skipIndexes && (key == 'length' || isIndex(key, length))) &&
	        !(key == 'constructor' && (isProto || !hasOwnProperty.call(object, key)))) {
	      result.push(key);
	    }
	  }
	  return result;
	}

	module.exports = keysIn;


/***/ },
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(128),
	    iteratorToArray = __webpack_require__(129);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Built-in value references. */
	var enumerate = Reflect ? Reflect.enumerate : undefined,
	    propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/**
	 * The base implementation of `_.keysIn` which doesn't skip the constructor
	 * property of prototypes or treat sparse arrays as dense.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names.
	 */
	function baseKeysIn(object) {
	  object = object == null ? object : Object(object);

	  var result = [];
	  for (var key in object) {
	    result.push(key);
	  }
	  return result;
	}

	// Fallback for IE < 9 with es6-shim.
	if (enumerate && !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf')) {
	  baseKeysIn = function(object) {
	    return iteratorToArray(enumerate(object));
	  };
	}

	module.exports = baseKeysIn;


/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(53);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 129 */
/***/ function(module, exports) {

	/**
	 * Converts `iterator` to an array.
	 *
	 * @private
	 * @param {Object} iterator The iterator to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function iteratorToArray(iterator) {
	  var data,
	      result = [];

	  while (!(data = iterator.next()).done) {
	    result.push(data.value);
	  }
	  return result;
	}

	module.exports = iteratorToArray;


/***/ },
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(131),
	    baseCreate = __webpack_require__(132),
	    baseForOwn = __webpack_require__(133),
	    baseIteratee = __webpack_require__(30),
	    getPrototype = __webpack_require__(77),
	    isArray = __webpack_require__(88),
	    isFunction = __webpack_require__(8),
	    isObject = __webpack_require__(5),
	    isTypedArray = __webpack_require__(97);

	/**
	 * An alternative to `_.reduce`; this method transforms `object` to a new
	 * `accumulator` object which is the result of running each of its own
	 * enumerable string keyed properties thru `iteratee`, with each invocation
	 * potentially mutating the `accumulator` object. The iteratee is invoked
	 * with four arguments: (accumulator, value, key, object). Iteratee functions
	 * may exit iteration early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
	 * @since 1.3.0
	 * @category Object
	 * @param {Array|Object} object The object to iterate over.
	 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
	 * @param {*} [accumulator] The custom accumulator value.
	 * @returns {*} Returns the accumulated value.
	 * @example
	 *
	 * _.transform([2, 3, 4], function(result, n) {
	 *   result.push(n *= n);
	 *   return n % 2 == 0;
	 * }, []);
	 * // => [4, 9]
	 *
	 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
	 *   (result[value] || (result[value] = [])).push(key);
	 * }, {});
	 * // => { '1': ['a', 'c'], '2': ['b'] }
	 */
	function transform(object, iteratee, accumulator) {
	  var isArr = isArray(object) || isTypedArray(object);
	  iteratee = baseIteratee(iteratee, 4);

	  if (accumulator == null) {
	    if (isArr || isObject(object)) {
	      var Ctor = object.constructor;
	      if (isArr) {
	        accumulator = isArray(object) ? new Ctor : [];
	      } else {
	        accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
	      }
	    } else {
	      accumulator = {};
	    }
	  }
	  (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	    return iteratee(accumulator, value, index, object);
	  });
	  return accumulator;
	}

	module.exports = transform;


/***/ },
/* 131 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.forEach` for arrays without support for
	 * iteratee shorthands.
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
/* 132 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(5);

	/** Built-in value references. */
	var objectCreate = Object.create;

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	function baseCreate(proto) {
	  return isObject(proto) ? objectCreate(proto) : {};
	}

	module.exports = baseCreate;


/***/ },
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(134),
	    keys = __webpack_require__(78);

	/**
	 * The base implementation of `_.forOwn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForOwn(object, iteratee) {
	  return object && baseFor(object, iteratee, keys);
	}

	module.exports = baseForOwn;


/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(135);

	/**
	 * The base implementation of `baseForOwn` which iterates over `object`
	 * properties returned by `keysFunc` and invokes `iteratee` for each property.
	 * Iteratee functions may exit iteration early by explicitly returning `false`.
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
/* 135 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
	    var index = -1,
	        iterable = Object(object),
	        props = keysFunc(object),
	        length = props.length;

	    while (length--) {
	      var key = props[fromRight ? length : ++index];
	      if (iteratee(iterable[key], key, iterable) === false) {
	        break;
	      }
	    }
	    return object;
	  };
	}

	module.exports = createBaseFor;


/***/ },
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (tagName) {
	    var props = _xblocksCore.utils.propTypes(tagName);
	    var propTypes = {};
	    var prefix = tagName + '-';
	    var p;

	    for (p in props) {
	        if (props.hasOwnProperty(p) && p[0] !== '_') {
	            propTypes[prefix + p] = props[p];
	        }
	    }

	    return { propTypes: propTypes };
	};

	var _xblocksCore = __webpack_require__(17);

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactDom = __webpack_require__(138);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _xblocksCore.view.create({
	    displayName: 'xb-input_controller',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        'autoFocus': _react.PropTypes.bool,
	        'autocomplete': _react.PropTypes.oneOf(['on', 'off']),
	        'autosize': _react.PropTypes.bool,
	        'className': _react.PropTypes.string,
	        'cols': _react.PropTypes.string,
	        'disabled': _react.PropTypes.bool,
	        'isPlaceholderHint': _react.PropTypes.bool,
	        'multiline': _react.PropTypes.bool,
	        'name': _react.PropTypes.string,
	        'onChange': _react.PropTypes.func,
	        'onHintToggle': _react.PropTypes.func,
	        'placeholder': _react.PropTypes.string,
	        'readOnly': _react.PropTypes.bool,
	        'required': _react.PropTypes.bool,
	        'rows': _react.PropTypes.string,
	        'tabIndex': _react.PropTypes.string,
	        'value': _react.PropTypes.string
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
	        this.recalculateSize();
	        this.dispatchEventToggleHint(prevProps.value, this.props.value);
	    },

	    componentDidMount: function componentDidMount() {
	        this.recalculateSize();
	    },

	    dispatchEventToggleHint: function dispatchEventToggleHint(prevValue, nextValue) {
	        if (this.props.isPlaceholderHint) {
	            var hasPrevValue = Boolean(prevValue);
	            var hasNestValue = Boolean(nextValue);

	            if (hasPrevValue ^ hasNestValue) {
	                this.props.onHintToggle(hasPrevValue && !hasNestValue);
	            }
	        }
	    },

	    recalculateSize: function recalculateSize() {
	        if (!this.props.autosize) {
	            return;
	        }

	        var node = _reactDom2.default.findDOMNode(this);

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
/* 138 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_138__;

/***/ },
/* 139 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, text, getter, setter) {
	    var start = element.selectionStart;
	    var end = element.selectionEnd;
	    var scrollLeft = element.scrollLeft;
	    var scrollTop = element.scrollTop;
	    var pos = start + text.length;

	    getter(function (value) {
	        value = value.substr(0, start) + text + value.substr(end);

	        setter(value, function (callback) {
	            element.selectionStart = pos;
	            element.selectionEnd = pos;
	            element.scrollTop = scrollTop;
	            element.scrollLeft = scrollLeft;
	            callback();
	        });
	    });
	};

/***/ },
/* 140 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Focus element interface
	 *
	 * @example
	 * import { create } from 'xblocks-core';
	 * import mixinFocus from 'mixin/element/focus';
	 *
	 * create('xb-button', [
	 *     mixinFocus,
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
	 * @type {Object}
	 */
	exports.default = {
	    methods: {
	        focus: function focus() {
	            this.firstChild.focus();
	        },

	        blur: function blur() {
	            this.firstChild.blur();
	        }
	    }
	};

/***/ },
/* 141 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Value element interface.
	 * Уou can edit the value, for example in the input or textarea.
	 *
	 * @example
	 * import { create } from 'xblocks-core';
	 * import mixinInputValueState from 'mixin/element/inputValueState';
	 *
	 * create('xb-input', [
	 *     mixinInputValueState,
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
	 * @type {Object}
	 */
	exports.default = {
	    accessors: {

	        /**
	         * @prop {string} value
	         */
	        value: {
	            attribute: {
	                name: 'value'
	            },

	            get: function get() {
	                var component = this.xblock && this.xblock.getMountedComponent();

	                if (component && typeof component.state.value !== 'undefined') {
	                    return component.state.value;
	                }

	                return String(this.getAttribute('value') || this.defaultValue || '');
	            },

	            set: function set(value) {
	                var component = this.xblock && this.xblock.getMountedComponent();

	                if (component) {
	                    component.setState({ value: String(value) });
	                }
	            }
	        },

	        /**
	         * @prop {string} defaultValue
	         */
	        defaultValue: {
	            get: function get() {
	                return '';
	            }
	        }
	    }
	};

/***/ },
/* 142 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(143);

	__webpack_require__(144);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(150);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(151);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focus = __webpack_require__(140);

	var _focus2 = _interopRequireDefault(_focus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	exports.default = _context.xb.Button = (0, _xblocksCore.create)('xb-button', [_disabled2.default, _checked2.default, _inputValueProps2.default, _focus2.default, {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        defaultValue: {
	            get: function get() {
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
/* 143 */
1,
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(18);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _resetLastRadioChecked = __webpack_require__(145);

	var _resetLastRadioChecked2 = _interopRequireDefault(_resetLastRadioChecked);

	var _filterProps = __webpack_require__(28);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _exportPropTypes = __webpack_require__(136);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _content = __webpack_require__(146);

	var _content2 = _interopRequireDefault(_content);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * The template node xb-button
	 *
	 * @mixes React.addons.PureRenderMixin
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	exports.default = _context.xv.Button = _xblocksCore.view.register('xb-button', [_commonAttrs2.default, (0, _exportPropTypes2.default)('xb-ico'), {
	    displayName: 'xb-button',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        'autofocus': _react.PropTypes.bool,
	        'checked': _react.PropTypes.bool,
	        'for': _react.PropTypes.string,
	        'form': _react.PropTypes.string,
	        'href': _react.PropTypes.string,
	        'multiple': _react.PropTypes.bool,
	        'name': _react.PropTypes.string,
	        'required': _react.PropTypes.bool,
	        'size': _react.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
	        'target': _react.PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
	        'theme': _react.PropTypes.oneOf(['action', 'dark', 'normal', 'clear', 'dark-pseudo', 'pseudo']),
	        'type': _react.PropTypes.oneOf(['label', 'inline', 'link', 'file', 'button', 'submit', 'checkbox', 'radio']),
	        'value': _react.PropTypes.string
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
	            checked: this.props.checked,
	            focused: false
	        };
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            checked: Boolean(nextProps.checked)
	        });
	    },

	    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	        if (nextProps.type === 'radio' && nextState.checked) {
	            (0, _resetLastRadioChecked2.default)(this.container(), nextProps.name);
	        }
	    },

	    componentWillMount: function componentWillMount() {
	        if (this.props.type === 'radio' && this.state.checked) {
	            (0, _resetLastRadioChecked2.default)(this.container(), this.props.name);
	        }
	    },

	    _onChange: function _onChange(event) {
	        this.container().checked = event.target.checked;
	    },

	    _onFocus: function _onFocus() {
	        this.setState({ focused: true });
	    },

	    _onBlur: function _onBlur() {
	        this.setState({ focused: false });
	    },

	    render: function render() {
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-button': true,
	            '_disabled': this.props.disabled,
	            '_focused': this.state.focused
	        }, '_theme-' + this.props.theme + '_size-' + this.props.size, true));

	        var icoProps = (0, _filterProps2.default)(/^xb-ico-/, this.props);
	        var tabIndex = this.props.disabled ? '-1' : this.props.tabindex;
	        var type = this.props.type;
	        var content = React.createElement(
	            _content2.default,
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
	                    autoFocus: this.props.autofocus,
	                    checked: this.state.checked,
	                    className: '_controller',
	                    disabled: this.props.disabled,
	                    form: this.props.form,
	                    name: this.props.name,
	                    onBlur: this._onBlur,
	                    onChange: this._onChange,
	                    onFocus: this._onFocus,
	                    readOnly: true,
	                    required: this.props.required,
	                    tabIndex: tabIndex,
	                    type: type,
	                    value: this.props.value }));

	                children.push(content);
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
/* 145 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, name) {
	    name = String(name);
	    var lastCheckedElement = CHECKED_CACHE[name];

	    if (lastCheckedElement && lastCheckedElement !== element) {
	        lastCheckedElement.checked = false;
	    }

	    CHECKED_CACHE[name] = element;
	};

	var CHECKED_CACHE = {};

	/**
	 * FIXME don't work cloneNode
	 * @param {HTMLElement} element
	 * @param {string} name
	 */

/***/ },
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _isEmpty = __webpack_require__(147);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _xblocksCore.view.create({
	    displayName: 'xb-button_content',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        ico: _react.PropTypes.object
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            ico: {}
	        };
	    },

	    render: function render() {
	        var children = [];

	        if (this.props.children) {
	            children.push(React.createElement(
	                'span',
	                { className: '_text',
	                    key: 'text',
	                    'data-xb-content': this.props._uid },
	                this.props.children
	            ));
	        }

	        if (!(0, _isEmpty2.default)(this.props.ico) && this.props.ico.type) {
	            if (!this.props.ico.float || this.props.ico.float === 'left') {
	                children.unshift(React.createElement('xb-ico', _extends({}, this.props.ico, { className: '_before', key: 'ico' })));
	            } else if (this.props.ico.float === 'right') {
	                children.push(React.createElement('xb-ico', _extends({}, this.props.ico, { className: '_after', key: 'ico' })));
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	var getTag = __webpack_require__(92),
	    isArguments = __webpack_require__(82),
	    isArray = __webpack_require__(88),
	    isArrayLike = __webpack_require__(84),
	    isBuffer = __webpack_require__(148),
	    isFunction = __webpack_require__(8),
	    isObjectLike = __webpack_require__(10),
	    isString = __webpack_require__(89),
	    keys = __webpack_require__(78);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    setTag = '[object Set]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Checks if `value` is an empty object, collection, map, or set.
	 *
	 * Objects are considered empty if they have no own enumerable string keyed
	 * properties.
	 *
	 * Array-like values such as `arguments` objects, arrays, buffers, strings, or
	 * jQuery-like collections are considered empty if they have a `length` of `0`.
	 * Similarly, maps and sets are considered empty if they have a `size` of `0`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.1.0
	 * @category Lang
	 * @param {*} value The value to check.
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
	  if (isArrayLike(value) &&
	      (isArray(value) || isString(value) || isFunction(value.splice) ||
	        isArguments(value) || isBuffer(value))) {
	    return !value.length;
	  }
	  if (isObjectLike(value)) {
	    var tag = getTag(value);
	    if (tag == mapTag || tag == setTag) {
	      return !value.size;
	    }
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return !(nonEnumShadows && keys(value).length);
	}

	module.exports = isEmpty;


/***/ },
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var constant = __webpack_require__(149),
	    root = __webpack_require__(53);

	/** Used to determine if values are of the language type `Object`. */
	var objectTypes = {
	  'function': true,
	  'object': true
	};

	/** Detect free variable `exports`. */
	var freeExports = (objectTypes[typeof exports] && exports && !exports.nodeType)
	  ? exports
	  : undefined;

	/** Detect free variable `module`. */
	var freeModule = (objectTypes[typeof module] && module && !module.nodeType)
	  ? module
	  : undefined;

	/** Detect the popular CommonJS extension `module.exports`. */
	var moduleExports = (freeModule && freeModule.exports === freeExports)
	  ? freeExports
	  : undefined;

	/** Built-in value references. */
	var Buffer = moduleExports ? root.Buffer : undefined;

	/**
	 * Checks if `value` is a buffer.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.3.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a buffer, else `false`.
	 * @example
	 *
	 * _.isBuffer(new Buffer(2));
	 * // => true
	 *
	 * _.isBuffer(new Uint8Array(2));
	 * // => false
	 */
	var isBuffer = !Buffer ? constant(false) : function(value) {
	  return value instanceof Buffer;
	};

	module.exports = isBuffer;

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(54)(module)))

/***/ },
/* 149 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.4.0
	 * @category Util
	 * @param {*} value The value to return from the new function.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var object = { 'user': 'fred' };
	 * var getter = _.constant(object);
	 *
	 * getter() === object;
	 * // => true
	 */
	function constant(value) {
	  return function() {
	    return value;
	  };
	}

	module.exports = constant;


/***/ },
/* 150 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Checked element interface
	 *
	 * <xb-checkbox name="a" checked>checkbox</xb-checkbox>
	 * <xb-radio name="b" checked>radio 1</xb-radio> <xb-radio name="b">radio 2</xb-radio>
	 * <xb-button name="c" type="checkbox" checked>button checkbox</xb-button>
	 * <xb-button name="d" type="radio" checked>button radio 1</xb-button> <xb-button name="d" type="radio">button radio 2</xb-button>
	 *
	 * @example
	 * import { create } from 'xblocks-core';
	 * import mixinChecked from 'mixin/element/checked';
	 *
	 * create('xb-checkbox', [
	 *     mixinChecked,
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
	 * @type {Object}
	 */
	exports.default = {
	    accessors: {
	        checked: {
	            attribute: {
	                boolean: true
	            }
	        }
	    }
	};

/***/ },
/* 151 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	/**
	 * Value element interface.
	 * The value can be changed only through the attribute.
	 *
	 * @example
	 * import { create } from 'xblocks-core';
	 * import mixinInputValueProps from 'mixin/element/inputValueProps';
	 *
	 * create('xb-checkbox', [
	 *     mixinInputValueProps,
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
	 * @type {Object}
	 */
	exports.default = {
	    accessors: {

	        /**
	         * @prop {string} value
	         */
	        value: {
	            attribute: {
	                name: 'value'
	            },

	            get: function get() {
	                return String(this.getAttribute('value') || this.defaultValue || '');
	            }
	        },

	        /**
	         * @prop {string} defaultValue
	         */
	        defaultValue: {
	            get: function get() {
	                return '';
	            }
	        }
	    }
	};

/***/ },
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(153);

	__webpack_require__(154);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * xb-link html element
	 *
	 * @class xb.Link
	 * @memberof xb
	 * @augments HTMLAnchorElement
	 * @mixes xblocks.mixin.eDisabled
	 */
	exports.default = _context.xb.Link = (0, _xblocksCore.create)('xb-link', [_disabled2.default, {
	    prototype: Object.create(HTMLAnchorElement.prototype)
	}]);

/***/ },
/* 153 */
1,
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(18);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * The template node xb-link
	 *
	 * @class xv.Link
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.Link = _xblocksCore.view.register('xb-link', [_commonAttrs2.default, {
	    displayName: 'xb-link',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        href: _react.PropTypes.string,
	        name: _react.PropTypes.string,
	        target: _react.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
	        theme: _react.PropTypes.oneOf(['normal', 'outer', 'pseudo', 'empty']).isRequired
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            disabled: false,
	            tabindex: '1',
	            target: '_self',
	            theme: 'normal'
	        };
	    },

	    render: function render() {
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-link': true,
	            '_disabled': this.props.disabled
	        }, '_theme-' + this.props.theme, true));

	        var tabIndex = this.props.disabled ? '-1' : this.props.tabindex;

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
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(156);

	__webpack_require__(157);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(150);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(151);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focus = __webpack_require__(140);

	var _focus2 = _interopRequireDefault(_focus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	exports.default = _context.xb.Checkbox = (0, _xblocksCore.create)('xb-checkbox', [_disabled2.default, _checked2.default, _inputValueProps2.default, _focus2.default, {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        defaultValue: {
	            get: function get() {
	                return 'on';
	            }
	        }
	    }
	}]);

/***/ },
/* 156 */
1,
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(18);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * The template node xb-checkbox
	 *
	 * @class xv.Checkbox
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.Checkbox = _xblocksCore.view.register('xb-checkbox', [_commonAttrs2.default, {
	    displayName: 'xb-checkbox',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        autofocus: _react.PropTypes.bool,
	        checked: _react.PropTypes.bool,
	        for: _react.PropTypes.string,
	        form: _react.PropTypes.string,
	        name: _react.PropTypes.string,
	        required: _react.PropTypes.bool,
	        size: _react.PropTypes.oneOf(['m', 'l']),
	        value: _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            autofocus: false,
	            checked: false,
	            children: '',
	            disabled: false,
	            required: false,
	            size: 'm',
	            tabindex: '0',
	            value: 'on'
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.checked
	        };
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            checked: nextProps.checked
	        });
	    },

	    _onChange: function _onChange(event) {
	        this.setState({
	            checked: event.target.checked
	        });
	    },

	    render: function render() {
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-checkbox': true,
	            '_disabled': this.props.disabled
	        }, '_size-' + this.props.size, true));

	        var tabIndex = this.props.disabled ? '-1' : this.props.tabindex;

	        return React.createElement(
	            'label',
	            { className: classes,
	                title: this.props.title,
	                htmlFor: this.props['for'] },
	            React.createElement('input', {
	                autoFocus: this.props.autofocus,
	                checked: this.state.checked,
	                className: '_controller',
	                disabled: this.props.disabled,
	                form: this.props.form,
	                name: this.props.name,
	                onChange: this._onChange,
	                readOnly: true,
	                required: this.props.required,
	                tabIndex: tabIndex,
	                type: 'checkbox',
	                value: this.props.value }),
	            React.createElement(
	                'span',
	                { className: '_view' },
	                React.createElement(
	                    'span',
	                    { className: '_icon' },
	                    String.fromCharCode(160)
	                )
	            ),
	            React.createElement(
	                'span',
	                { className: '_label', 'data-xb-content': this.props._uid },
	                this.props.children
	            )
	        );
	    }
	}]);

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(159);

	__webpack_require__(160);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(150);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(151);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focus = __webpack_require__(140);

	var _focus2 = _interopRequireDefault(_focus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
	exports.default = _context.xb.Radio = (0, _xblocksCore.create)('xb-radio', [_disabled2.default, _checked2.default, _inputValueProps2.default, _focus2.default, {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        defaultValue: {
	            get: function get() {
	                return 'on';
	            }
	        }
	    }
	}]);

/***/ },
/* 159 */
1,
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(18);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _resetLastRadioChecked = __webpack_require__(145);

	var _resetLastRadioChecked2 = _interopRequireDefault(_resetLastRadioChecked);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * The template node xb-radio
	 *
	 * @class xv.Radio
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.Radio = _xblocksCore.view.register('xb-radio', [_commonAttrs2.default, {
	    displayName: 'xb-radio',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        autofocus: _react.PropTypes.bool,
	        checked: _react.PropTypes.bool,
	        for: _react.PropTypes.string,
	        form: _react.PropTypes.string,
	        name: _react.PropTypes.string,
	        required: _react.PropTypes.bool,
	        size: _react.PropTypes.oneOf(['m', 'l']),
	        value: _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            autofocus: false,
	            checked: false,
	            children: '',
	            disabled: false,
	            required: false,
	            size: 'm',
	            tabindex: '0',
	            value: 'on'
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            checked: this.props.checked
	        };
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        this.setState({
	            checked: Boolean(nextProps.checked)
	        });
	    },

	    componentWillUpdate: function componentWillUpdate(nextProps, nextState) {
	        if (nextState.checked) {
	            (0, _resetLastRadioChecked2.default)(this.container(), nextProps.name);
	        }
	    },

	    componentWillMount: function componentWillMount() {
	        if (this.state.checked) {
	            (0, _resetLastRadioChecked2.default)(this.container(), this.props.name);
	        }
	    },

	    _onChange: function _onChange(event) {
	        this.container().checked = event.target.checked;
	    },

	    render: function render() {
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-radio': true,
	            '_disabled': this.props.disabled
	        }, '_size-' + this.props.size, true));

	        var tabIndex = this.props.disabled ? '-1' : this.props.tabindex;

	        return React.createElement(
	            'label',
	            { className: classes,
	                title: this.props.title,
	                htmlFor: this.props['for'] },
	            React.createElement('input', {
	                autoFocus: this.props.autofocus,
	                checked: this.state.checked,
	                className: '_controller',
	                disabled: this.props.disabled,
	                form: this.props.form,
	                name: this.props.name,
	                onChange: this._onChange,
	                readOnly: true,
	                required: this.props.required,
	                tabIndex: tabIndex,
	                type: 'radio',
	                value: this.props.value }),
	            React.createElement(
	                'span',
	                { className: '_view' },
	                React.createElement(
	                    'span',
	                    { className: '_icon' },
	                    String.fromCharCode(160)
	                )
	            ),
	            React.createElement(
	                'span',
	                { className: '_label', 'data-xb-content': this.props._uid },
	                this.props.children
	            )
	        );
	    }
	}]);

/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(162);

	__webpack_require__(163);

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(17);

	var _tether = __webpack_require__(164);

	var _tether2 = _interopRequireDefault(_tether);

	var _tetherDefaultOptions = __webpack_require__(165);

	var _tetherDefaultOptions2 = _interopRequireDefault(_tetherDefaultOptions);

	var _assign = __webpack_require__(166);

	var _assign2 = _interopRequireDefault(_assign);

	var _src = __webpack_require__(174);

	var _src2 = _interopRequireDefault(_src);

	var _focus = __webpack_require__(140);

	var _focus2 = _interopRequireDefault(_focus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var POPUP_COMMON = {
	    onOpen: function onOpen() {
	        this.focus();
	        _xblocksCore.event.dispatch(this, 'xb-open');
	    },

	    onClose: function onClose() {
	        this.blur();
	        _xblocksCore.event.dispatch(this, 'xb-close');
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
	            var params = POPUP_COMMON.tetherAttrsAlign[attrName];
	            if (!params) {
	                continue;
	            }

	            var optionName = params[0];
	            var checker = params[1] || POPUP_COMMON.checkDefaultAttr;
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
	     * Union rules attributes
	     * @type {Object}
	     */
	    tetherAttrsAlign: {
	        'attachment': ['attachment'],
	        'target-attachment': ['targetAttachment'],
	        'target-offset': ['targetOffset'],
	        'offset': ['offset'],
	        'target': ['target', function (value) {
	            return value && (typeof value === 'string' || value instanceof _context2.default.HTMLElement);
	        }],
	        'target-parent': [function (options, value) {
	            options.target = value;
	        }, function (value) {
	            return value && value instanceof _context2.default.HTMLElement;
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
	 * @class xb.Popup
	 * @augments HTMLElement
	 * @memberof xb
	 * @mixes .mixin.eFocus
	 */
	exports.default = _context.xb.Popup = (0, _xblocksCore.create)('xb-popup', [_focus2.default, {
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
	            get: _tetherDefaultOptions2.default
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

	                var tetherAttrs = _xblocksCore.dom.attrs.get(this, {
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

	                POPUP_COMMON.fillOptionsFromAttrs(this._options, tetherAttrs);

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
	                    this._tether = new _tether2.default(this.options);
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
	            (0, _assign2.default)(this.options, nextOptions);

	            var tether = this.tether;
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

	            if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object') {
	                this.setOptions(options);
	            }

	            _xblocksCore.event.dispatch(this, 'xb-before-open');

	            tether.enable(true);
	            tether.target._xbpopup = this;

	            // FireFox does not set the focus without delay
	            _src2.default.setImmediate(POPUP_COMMON.onOpen.bind(this));

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

	            _xblocksCore.event.dispatch(this, 'xb-before-close');

	            tether.target._xbpopup = undefined;
	            tether.disable();
	            tether.clearCache();

	            // FireFox does not fire a blur event
	            _src2.default.setImmediate(POPUP_COMMON.onClose.bind(this));

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
/* 162 */
1,
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactDom = __webpack_require__(138);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames2 = __webpack_require__(18);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * The template node xb-popup
	 *
	 * @class xv.Popup
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.Popup = _xblocksCore.view.register('xb-popup', [_commonAttrs2.default, {
	    displayName: 'xb-popup',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        close: _react.PropTypes.bool,
	        theme: _react.PropTypes.oneOf(['blank', 'error', 'island', 'modal', 'normal'])
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            close: false,
	            theme: 'normal'
	        };
	    },

	    onClickClose: function onClickClose() {
	        _xblocksCore.event.dispatch(_reactDom2.default.findDOMNode(this), 'jsx-click-close', { bubbles: true, cancelable: true });
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
	            children.unshift(React.createElement('a', { key: 'close', className: '_close', onClick: this.onClickClose }));
	        }

	        children.push(this.template('xb-popup-buttons', {
	            'key': 'buttons',
	            'className': '_buttons'
	        }));

	        var classes = (0, _classnames3.default)(_defineProperty({
	            '_popup': true
	        }, '_theme-' + this.props.theme, Boolean(this.props.theme)));

	        return React.createElement(
	            'div',
	            { className: classes, tabIndex: '0' },
	            children
	        );
	    }
	}]);

/***/ },
/* 164 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_164__;

/***/ },
/* 165 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return {
	        attachment: 'middle center',
	        classes: {
	            element: this.xtagName
	        },
	        classPrefix: this.xtagName,
	        element: this,
	        enabled: false,
	        optimizations: {
	            gpu: true
	        },
	        target: this.ownerDocument.body,
	        targetAttachment: 'middle center',
	        targetModifier: 'visible'
	    };
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(167),
	    copyObject = __webpack_require__(168),
	    createAssigner = __webpack_require__(169),
	    isArrayLike = __webpack_require__(84),
	    isPrototype = __webpack_require__(91),
	    keys = __webpack_require__(78);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns own enumerable string keyed properties of source objects to the
	 * destination object. Source objects are applied from left to right.
	 * Subsequent sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @since 0.10.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
	 * @see _.assignIn
	 * @example
	 *
	 * function Foo() {
	 *   this.c = 3;
	 * }
	 *
	 * function Bar() {
	 *   this.e = 5;
	 * }
	 *
	 * Foo.prototype.d = 4;
	 * Bar.prototype.f = 6;
	 *
	 * _.assign({ 'a': 1 }, new Foo, new Bar);
	 * // => { 'a': 1, 'c': 3, 'e': 5 }
	 */
	var assign = createAssigner(function(object, source) {
	  if (nonEnumShadows || isPrototype(source) || isArrayLike(source)) {
	    copyObject(source, keys(source), object);
	    return;
	  }
	  for (var key in source) {
	    if (hasOwnProperty.call(source, key)) {
	      assignValue(object, key, source[key]);
	    }
	  }
	});

	module.exports = assign;


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(38);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Assigns `value` to `key` of `object` if the existing value is not equivalent
	 * using [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * for equality comparisons.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignValue(object, key, value) {
	  var objValue = object[key];
	  if (!(hasOwnProperty.call(object, key) && eq(objValue, value)) ||
	      (value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignValue;


/***/ },
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(167);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property identifiers to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object, customizer) {
	  object || (object = {});

	  var index = -1,
	      length = props.length;

	  while (++index < length) {
	    var key = props[index];

	    var newValue = customizer
	      ? customizer(object[key], source[key], key, object, source)
	      : source[key];

	    assignValue(object, key, newValue);
	  }
	  return object;
	}

	module.exports = copyObject;


/***/ },
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(170),
	    rest = __webpack_require__(171);

	/**
	 * Creates a function like `_.assign`.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return rest(function(object, sources) {
	    var index = -1,
	        length = sources.length,
	        customizer = length > 1 ? sources[length - 1] : undefined,
	        guard = length > 2 ? sources[2] : undefined;

	    customizer = typeof customizer == 'function'
	      ? (length--, customizer)
	      : undefined;

	    if (guard && isIterateeCall(sources[0], sources[1], guard)) {
	      customizer = length < 3 ? undefined : customizer;
	      length = 1;
	    }
	    object = Object(object);
	    while (++index < length) {
	      var source = sources[index];
	      if (source) {
	        assigner(object, source, index, customizer);
	      }
	    }
	    return object;
	  });
	}

	module.exports = createAssigner;


/***/ },
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(38),
	    isArrayLike = __webpack_require__(84),
	    isIndex = __webpack_require__(90),
	    isObject = __webpack_require__(5);

	/**
	 * Checks if the given arguments are from an iteratee call.
	 *
	 * @private
	 * @param {*} value The potential iteratee value argument.
	 * @param {*} index The potential iteratee index or key argument.
	 * @param {*} object The potential iteratee object argument.
	 * @returns {boolean} Returns `true` if the arguments are from an iteratee call,
	 *  else `false`.
	 */
	function isIterateeCall(value, index, object) {
	  if (!isObject(object)) {
	    return false;
	  }
	  var type = typeof index;
	  if (type == 'number'
	        ? (isArrayLike(object) && isIndex(index, object.length))
	        : (type == 'string' && index in object)
	      ) {
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(172),
	    toInteger = __webpack_require__(173);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as
	 * an array.
	 *
	 * **Note:** This method is based on the
	 * [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Function
	 * @param {Function} func The function to apply a rest parameter to.
	 * @param {number} [start=func.length-1] The start position of the rest parameter.
	 * @returns {Function} Returns the new function.
	 * @example
	 *
	 * var say = _.rest(function(what, names) {
	 *   return what + ' ' + _.initial(names).join(', ') +
	 *     (_.size(names) > 1 ? ', & ' : '') + _.last(names);
	 * });
	 *
	 * say('hello', 'fred', 'barney', 'pebbles');
	 * // => 'hello fred, barney, & pebbles'
	 */
	function rest(func, start) {
	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  start = nativeMax(start === undefined ? (func.length - 1) : toInteger(start), 0);
	  return function() {
	    var args = arguments,
	        index = -1,
	        length = nativeMax(args.length - start, 0),
	        array = Array(length);

	    while (++index < length) {
	      array[index] = args[start + index];
	    }
	    switch (start) {
	      case 0: return func.call(this, array);
	      case 1: return func.call(this, args[0], array);
	      case 2: return func.call(this, args[0], args[1], array);
	    }
	    var otherArgs = Array(start + 1);
	    index = -1;
	    while (++index < start) {
	      otherArgs[index] = args[index];
	    }
	    otherArgs[start] = array;
	    return apply(func, this, otherArgs);
	  };
	}

	module.exports = rest;


/***/ },
/* 172 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {Array} args The arguments to invoke `func` with.
	 * @returns {*} Returns the result of `func`.
	 */
	function apply(func, thisArg, args) {
	  var length = args.length;
	  switch (length) {
	    case 0: return func.call(thisArg);
	    case 1: return func.call(thisArg, args[0]);
	    case 2: return func.call(thisArg, args[0], args[1]);
	    case 3: return func.call(thisArg, args[0], args[1], args[2]);
	  }
	  return func.apply(thisArg, args);
	}

	module.exports = apply;


/***/ },
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(7);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on
	 * [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category Lang
	 * @param {*} value The value to convert.
	 * @returns {number} Returns the converted integer.
	 * @example
	 *
	 * _.toInteger(3);
	 * // => 3
	 *
	 * _.toInteger(Number.MIN_VALUE);
	 * // => 0
	 *
	 * _.toInteger(Infinity);
	 * // => 1.7976931348623157e+308
	 *
	 * _.toInteger('3');
	 * // => 3
	 */
	function toInteger(value) {
	  if (!value) {
	    return value === 0 ? value : 0;
	  }
	  value = toNumber(value);
	  if (value === INFINITY || value === -INFINITY) {
	    var sign = (value < 0 ? -1 : 1);
	    return sign * MAX_INTEGER;
	  }
	  var remainder = value % 1;
	  return value === value ? (remainder ? value - remainder : value) : 0;
	}

	module.exports = toInteger;


/***/ },
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);
	var useNative = __webpack_require__(176);
	var Timer = __webpack_require__(177);
	var setTimeoutPolifill = __webpack_require__(178);
	var polifills = [
	    __webpack_require__(179),
	    __webpack_require__(180),
	    __webpack_require__(181),
	    __webpack_require__(182),
	    __webpack_require__(183)
	];
	var setImmediate;
	var clearImmediate;

	if (useNative()) {
	    setImmediate = context.setImmediate ||
	        context.msSetImmediate ||
	        usePolifill(polifills, setTimeoutPolifill);

	    clearImmediate = context.clearImmediate ||
	        context.msClearImmediate ||
	        Timer.clear;

	} else {
	    setImmediate = setTimeoutPolifill.init();
	    clearImmediate = Timer.clear;
	}

	exports.setImmediate = setImmediate;
	exports.clearImmediate = clearImmediate;

	exports.msSetImmediate = setImmediate;
	exports.msClearImmediate = clearImmediate;

	function usePolifill(polifills, def) {
	    for (var i = 0; i < polifills.length; i++) {
	        var polifill = polifills[ i ];
	        if (polifill.canUse()) {
	            return polifill.init();
	        }
	    }

	    return def.init();
	}


/***/ },
/* 175 */
/***/ function(module, exports) {

	/*jshint -W067*/
	'use strict';

	module.exports = (function() {
	    return this || (1, eval)('this');
	})();


/***/ },
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	var context = __webpack_require__(175);

	// @see http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/
	module.exports = function() {
	    return !(context.navigator && /Trident|Edge/.test(context.navigator.userAgent));
	};


/***/ },
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);

	var nextId = 1;
	var tasks = {};
	var lock = false;

	function wrap(handler) {
	    var args = Array.prototype.slice.call(arguments, 1);

	    return function() {
	        handler.apply(undefined, args);
	    };
	}

	function create(args) {
	    tasks[ nextId ] = wrap.apply(undefined, args);
	    return nextId++;
	}

	function clear(handleId) {
	    delete tasks[ handleId ];
	}

	function run(handleId) {
	    if (lock) {
	        context.setTimeout( wrap( run, handleId ), 0 );

	    } else {
	        var task = tasks[ handleId ];

	        if (task) {
	            lock = true;

	            try {
	                task();

	            } finally {
	                clear( handleId );
	                lock = false;
	            }
	        }
	    }
	}

	exports.run = run;
	exports.wrap = wrap;
	exports.create = create;
	exports.clear = clear;


/***/ },
/* 178 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);
	var Timer = __webpack_require__(177);

	exports.init = function() {
	    var polifill = function() {
	        var handleId = Timer.create(arguments);
	        context.setTimeout( Timer.wrap( Timer.run, handleId ), 0 );
	        return handleId;
	    };
	    polifill.usePolifill = 'setTimeout';
	    return polifill;
	};

	exports.canUse = function() {
	    return true;
	};


/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);
	var Timer = __webpack_require__(177);

	exports.init = function() {
	    var polifill = function() {
	        var handleId = Timer.create(arguments);
	        context.process.nextTick( Timer.wrap( Timer.run, handleId ) );
	        return handleId;
	    };
	    polifill.usePolifill = 'nextTick';
	    return polifill;
	};

	// Don't get fooled by e.g. browserify environments.
	// For Node.js before 0.9
	exports.canUse = function() {
	    return (Object.prototype.toString.call(context.process) === '[object process]');
	};


/***/ },
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);
	var Timer = __webpack_require__(177);

	exports.init = function() {
	    var messagePrefix = 'setImmediate$' + Math.random() + '$';

	    var onGlobalMessage = function(event) {
	        if (event.source === context &&
	            typeof(event.data) === 'string' &&
	            event.data.indexOf(messagePrefix) === 0) {

	            Timer.run(Number(event.data.slice(messagePrefix.length)));
	        }
	    };

	    if (context.addEventListener) {
	        context.addEventListener('message', onGlobalMessage, false);

	    } else {
	        context.attachEvent('onmessage', onGlobalMessage);
	    }

	    var polifill = function() {
	        var handleId = Timer.create(arguments);
	        context.postMessage(messagePrefix + handleId, '*');
	        return handleId;
	    };
	    polifill.usePolifill = 'postMessage';
	    return polifill;
	};

	// For non-IE10 modern browsers
	exports.canUse = function() {
	    if (context.importScripts || !context.postMessage) {
	        return false;
	    }

	    var asynch = true;
	    var oldOnMessage = context.onmessage;
	    context.onmessage = function() {
	        asynch = false;
	    };

	    context.postMessage('', '*');
	    context.onmessage = oldOnMessage;
	    return asynch;
	};


/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);
	var Timer = __webpack_require__(177);

	exports.init = function() {
	    var channel = new context.MessageChannel();

	    channel.port1.onmessage = function(event) {
	        Timer.run(Number(event.data));
	    };

	    var polifill = function() {
	        var handleId = Timer.create(arguments);
	        channel.port2.postMessage(handleId);
	        return handleId;
	    };
	    polifill.usePolifill = 'messageChannel';
	    return polifill;
	};

	// For web workers, where supported
	exports.canUse = function() {
	    return Boolean(context.MessageChannel);
	};


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);
	var Timer = __webpack_require__(177);

	exports.init = function() {
	    var html = context.document.documentElement;
	    var polifill = function() {
	        var handleId = Timer.create(arguments);
	        var script = context.document.createElement('script');

	        script.onreadystatechange = function() {
	            Timer.run(handleId);
	            script.onreadystatechange = null;
	            html.removeChild(script);
	            script = null;
	        };

	        html.appendChild(script);
	        return handleId;
	    };

	    polifill.usePolifill = 'readyStateChange';
	    return polifill;
	};

	// For IE 6–8
	exports.canUse = function() {
	    return (context.document && ('onreadystatechange' in context.document.createElement('script')));
	};


/***/ },
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(175);
	var Timer = __webpack_require__(177);

	exports.init = function() {
	    var polifill = function() {
	        var handleId = Timer.create(arguments);
	        var img = new context.Image();
	        img.onload = img.onerror = Timer.wrap( Timer.run, handleId );
	        img.src = '';

	        return handleId;
	    };
	    polifill.usePolifill = 'image';
	    return polifill;
	};

	exports.canUse = function() {
	    return Boolean(context.window && context.Image);
	};


/***/ },
/* 184 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(185);

	__webpack_require__(186);

	__webpack_require__(198);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _lazyFocus = __webpack_require__(203);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _tetherDefaultOptions2 = __webpack_require__(165);

	var _tetherDefaultOptions3 = _interopRequireDefault(_tetherDefaultOptions2);

	var _popup = __webpack_require__(161);

	var _popup2 = _interopRequireDefault(_popup);

	var _TableNavigator = __webpack_require__(204);

	var _TableNavigator2 = _interopRequireDefault(_TableNavigator);

	var _getParentMenu = __webpack_require__(238);

	var _getParentMenu2 = _interopRequireDefault(_getParentMenu);

	var _src = __webpack_require__(174);

	var _src2 = _interopRequireDefault(_src);

	var _menu = __webpack_require__(239);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var forEach = Array.prototype.forEach;

	var MENU_COMMON = {

	    /**
	     * @param {xb.Menuitem} target
	     * @this global
	     */
	    closeSubmenu: function closeSubmenu(target) {
	        if (target._xbpopup) {
	            target._xbpopup.close();
	        }
	    },

	    /**
	     * The default setting for the menu
	     * @returns {Object}
	     * @this xb.Menu
	     */
	    tetherDefaultOptions: function tetherDefaultOptions() {
	        var options = _tetherDefaultOptions3.default.call(this);

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
	 * @mixes xblocks.mixin.menu
	 */
	exports.default = _context.xb.Menu = (0, _xblocksCore.create)('xb-menu', [_menu2.default, {
	    prototype: Object.create(_popup2.default.prototype || new _popup2.default()),

	    events: {
	        'xb-before-open': function xbBeforeOpen() {
	            this.style.visibility = 'hidden';
	        },

	        'xb-open': function xbOpen() {
	            this._xbFocus = new _TableNavigator2.default(this, {
	                rowLoop: true,
	                colLoop: true
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
	                (0, _lazyFocus2.default)(parentMenu);
	            }
	        },

	        'blur': function blur() {
	            if (!this.hasOpenSubmenu) {
	                this.close();
	                // event.relatedTarget is null in firefox
	                _src2.default.setImmediate(this._closeUpFocus.bind(this));
	            }
	        }
	    },

	    /**
	     * @lends xb.Menu.prototype
	     */
	    accessors: {

	        /**
	         * @readonly
	         * @prop {Object} default options
	         */
	        defaultOptions: {
	            get: MENU_COMMON.tetherDefaultOptions
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu} [parentMenu] menu-ancestor
	         */
	        parentMenu: {
	            get: function get() {
	                return this.tether.target.menuInstance;
	            }
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu} [firstParentMenu] the first menu ancestor
	         */
	        firstParentMenu: {
	            get: function get() {
	                var parentMenu = this.parentMenu;

	                if (parentMenu) {
	                    return parentMenu.firstParentMenu || parentMenu;
	                }

	                return this;
	            }
	        }
	    },

	    methods: {
	        _closeAllSubmenu: function _closeAllSubmenu() {
	            forEach.call(this.querySelectorAll('.xb-menu-target.xb-menu-enabled'), MENU_COMMON.closeSubmenu);
	        },

	        _afterOpen: function _afterOpen() {
	            this.position();
	            this.style.visibility = 'visible';
	            // the focus is not put on the invisible element
	            // put again
	            (0, _lazyFocus2.default)(this);
	        },

	        _closeUpFocus: function _closeUpFocus() {
	            var focusMenu = (0, _getParentMenu2.default)(this.ownerDocument.activeElement);
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

/***/ },
/* 185 */
1,
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _menu = __webpack_require__(187);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The template node xb-menu
	 *
	 * @class xv.Menu
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes xblocks.mixin.vMenu
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.Menu = _xblocksCore.view.register('xb-menu', [_commonAttrs2.default, _menu2.default, {
	    displayName: 'xb-menu',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        size: _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            size: ''
	        };
	    },

	    afterOpen: function afterOpen(callback) {
	        this._updateMaxHeight(this.props.size, callback);
	    }
	}]);

/***/ },
/* 187 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classnames = __webpack_require__(18);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _xblocksCore = __webpack_require__(17);

	var _throttle = __webpack_require__(11);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _throttleAnimationFrame = __webpack_require__(188);

	var _throttleAnimationFrame2 = _interopRequireDefault(_throttleAnimationFrame);

	var _requestAnimationFrame = __webpack_require__(189);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Common interface for views xb-menu and xb-menu-inline
	 *
	 * @type {Object}
	 */
	exports.default = {
	    getInitialState: function getInitialState() {
	        return {
	            maxHeight: 0,
	            isShowScrollTop: false,
	            isShowScrollBottom: false
	        };
	    },

	    componentWillMount: function componentWillMount() {
	        this._enterTopFrame = 0;
	        this._enterBottomFrame = 0;
	        this._lockScroll = false;
	        this._onScroll = (0, _throttleAnimationFrame2.default)(this._onScroll);
	        this._onScrollThrottle = (0, _throttle2.default)(this._onScrollThrottle, 500, {
	            leading: true,
	            trailing: false
	        });
	    },

	    componentWillReceiveProps: function componentWillReceiveProps(nextProps) {
	        if (nextProps.size !== this.props.size) {
	            this._updateMaxHeight(nextProps.size);
	        }
	    },

	    _updateMaxHeight: function _updateMaxHeight(size, callback) {
	        size = Number(size);
	        var maxHeight = 0;

	        if (size > 0) {
	            var contentNode = this._contentNode;
	            var element = contentNode.children[size - 1];

	            if (element) {
	                var rectContent = contentNode.getBoundingClientRect();
	                var rectElement = element.getBoundingClientRect();
	                maxHeight = rectElement.top + rectElement.height + contentNode.scrollTop - rectContent.top;
	            }
	        }

	        this.setState({ maxHeight: maxHeight }, this._redrawScrollNavigator.bind(this, callback));
	    },

	    _redrawScrollNavigator: function _redrawScrollNavigator(callback) {
	        var target = this._contentNode;
	        var safeArea = 5;
	        var height = Math.max(target.scrollHeight, target.clientHeight);
	        var isShowScrollTop = target.scrollTop > safeArea;
	        var isShowScrollBottom = target.scrollTop + target.clientHeight < height - safeArea;

	        this.setState({ isShowScrollTop: isShowScrollTop, isShowScrollBottom: isShowScrollBottom }, this._redrawScrollNavigatorSuccess.bind(this, callback));
	    },

	    _redrawScrollNavigatorSuccess: function _redrawScrollNavigatorSuccess(callback) {
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

	    _onWheel: function _onWheel(event) {
	        var content = this._contentNode;
	        var delta = event.deltaY;
	        var scrollTop = content.scrollTop;
	        var offsetHeight = content.offsetHeight;
	        var scrollHeight = content.scrollHeight;

	        if (delta < 0 && scrollTop === 0 || delta > 0 && scrollTop + offsetHeight >= scrollHeight || offsetHeight === scrollHeight) {

	            event.preventDefault();
	            event.nativeEvent.stopImmediatePropagation();
	        }
	    },

	    _onScroll: function _onScroll() {
	        if (this._lockScroll) {
	            return;
	        }

	        this._lockScroll = true;
	        this._onScrollThrottle();
	        this._redrawScrollNavigator(this._onScrollSuccess);
	    },

	    _onScrollSuccess: function _onScrollSuccess() {
	        this._lockScroll = false;
	    },

	    _onScrollThrottle: function _onScrollThrottle() {
	        _xblocksCore.event.dispatch(this._contentNode, 'jsx-scroll-throttle', { bubbles: true, cancelable: true });
	    },

	    _animationScrollTop: function _animationScrollTop() {
	        this._contentNode.scrollTop--;
	        this._enterTopFrame = (0, _requestAnimationFrame.requestAnimationFrame)(this._animationScrollTop);
	    },

	    _onMouseEnterTop: function _onMouseEnterTop() {
	        this._onMouseLeaveTop();
	        this._animationScrollTop();
	    },

	    _onMouseLeaveTop: function _onMouseLeaveTop() {
	        if (this._enterTopFrame) {
	            (0, _requestAnimationFrame.cancelAnimationFrame)(this._enterTopFrame);
	            this._enterTopFrame = 0;
	        }
	    },

	    _animationScrollBottom: function _animationScrollBottom() {
	        this._contentNode.scrollTop++;
	        this._enterBottomFrame = (0, _requestAnimationFrame.requestAnimationFrame)(this._animationScrollBottom);
	    },

	    _onMouseEnterBottom: function _onMouseEnterBottom() {
	        this._onMouseLeaveBottom();
	        this._animationScrollBottom();
	    },

	    _onMouseLeaveBottom: function _onMouseLeaveBottom() {
	        if (this._enterBottomFrame) {
	            (0, _requestAnimationFrame.cancelAnimationFrame)(this._enterBottomFrame);
	            this._enterBottomFrame = 0;
	        }
	    },

	    /**
	     * @param {xb.Menuitem} menuitem
	     */
	    scrollIntoItem: function scrollIntoItem(menuitem) {
	        var content = this._contentNode;
	        var rectContent = content.getBoundingClientRect();
	        var rectMenuitem = menuitem.getBoundingClientRect();

	        if (rectMenuitem.top < rectContent.bottom && rectMenuitem.bottom > rectContent.top) {
	            return;
	        }

	        var offset = 0;

	        if (rectMenuitem.top >= rectContent.bottom) {
	            offset = rectMenuitem.bottom - rectContent.bottom;
	        } else if (rectMenuitem.bottom <= rectContent.top) {
	            offset = rectMenuitem.top - rectContent.top;
	        }

	        content.scrollTop = content.scrollTop + offset;
	    },

	    render: function render() {
	        var _this = this;

	        var classes = (0, _classnames2.default)({
	            '_popup': true
	        });

	        var scrollTopStyle = {
	            'display': this.state.isShowScrollTop ? 'block' : 'none'
	        };

	        var scrollBottomStyle = {
	            'display': this.state.isShowScrollBottom ? 'block' : 'none'
	        };

	        var contentStyle = {
	            'maxHeight': this.state.maxHeight ? this.state.maxHeight + 'px' : 'none'
	        };

	        return React.createElement(
	            'div',
	            { className: classes, tabIndex: '0' },
	            React.createElement('div', { style: scrollTopStyle,
	                className: '_popup-scroll-top',
	                onMouseEnter: this._onMouseEnterTop,
	                onMouseLeave: this._onMouseLeaveTop }),
	            React.createElement('div', { ref: function ref(_ref) {
	                    return _this._contentNode = _ref;
	                },
	                style: contentStyle,
	                className: '_popup-content',
	                onScroll: this._onScroll,
	                onWheel: this._onWheel,
	                'data-xb-content': this.props._uid,
	                dangerouslySetInnerHTML: { __html: this.props.children.trim() } }),
	            React.createElement('div', { style: scrollBottomStyle,
	                className: '_popup-scroll-bottom',
	                onMouseEnter: this._onMouseEnterBottom,
	                onMouseLeave: this._onMouseLeaveBottom })
	        );
	    }
	};

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (callback, context) {
	    var throttle = 0;
	    var animationCallback = function animationCallback() {
	        throttle = 0;
	    };

	    return function () {
	        if (throttle) {
	            return;
	        }

	        throttle = (0, _requestAnimationFrame.requestAnimationFrame)(animationCallback);

	        callback.apply(context || this, arguments);
	    };
	};

	var _requestAnimationFrame = __webpack_require__(189);

/***/ },
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = undefined;

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	var _vendor = __webpack_require__(190);

	var _vendor2 = _interopRequireDefault(_vendor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var lastTime = 0;

	var requestAnimationFrame = exports.requestAnimationFrame = _context2.default.requestAnimationFrame = (0, _vendor2.default)('requestAnimationFrame') || function (callback) {
	    var currTime = Date.now();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = _context2.default.setTimeout(function () {
	        callback(currTime + timeToCall);
	    }, timeToCall);
	    lastTime = currTime + timeToCall;
	    return id;
	};

	var cancelAnimationFrame = exports.cancelAnimationFrame = _context2.default.cancelAnimationFrame = (0, _vendor2.default)('cancelAnimationFrame') || (0, _vendor2.default)('cancelRequestAnimationFrame') || function (id) {
	    _context2.default.clearTimeout(id);
	};

/***/ },
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (name, context) {
	    context = context || _context2.default;

	    if (context[name]) {
	        return context[name];
	    }

	    name = (0, _capitalize2.default)(name);

	    var vendor;
	    var x = 0;
	    for (; x < 4; ++x) {
	        vendor = VENDORS[x];
	        if (context[vendor + name]) {
	            return context[vendor + name];
	        }
	    }
	};

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	var _capitalize = __webpack_require__(191);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VENDORS = ['ms', 'moz', 'webkit', 'o'];

	/**
	 * @param {string} name
	 * @param {Object} [context]
	 * @returns {*}
	 */

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(110),
	    upperFirst = __webpack_require__(192);

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('FRED');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  return upperFirst(toString(string).toLowerCase());
	}

	module.exports = capitalize;


/***/ },
/* 192 */
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(193);

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
	 * @since 4.0.0
	 * @category String
	 * @param {string} [string=''] The string to convert.
	 * @returns {string} Returns the converted string.
	 * @example
	 *
	 * _.upperFirst('fred');
	 * // => 'Fred'
	 *
	 * _.upperFirst('FRED');
	 * // => 'FRED'
	 */
	var upperFirst = createCaseFirst('toUpperCase');

	module.exports = upperFirst;


/***/ },
/* 193 */
/***/ function(module, exports, __webpack_require__) {

	var castSlice = __webpack_require__(194),
	    reHasComplexSymbol = __webpack_require__(196),
	    stringToArray = __webpack_require__(197),
	    toString = __webpack_require__(110);

	/**
	 * Creates a function like `_.lowerFirst`.
	 *
	 * @private
	 * @param {string} methodName The name of the `String` case method to use.
	 * @returns {Function} Returns the new function.
	 */
	function createCaseFirst(methodName) {
	  return function(string) {
	    string = toString(string);

	    var strSymbols = reHasComplexSymbol.test(string)
	      ? stringToArray(string)
	      : undefined;

	    var chr = strSymbols
	      ? strSymbols[0]
	      : string.charAt(0);

	    var trailing = strSymbols
	      ? castSlice(strSymbols, 1).join('')
	      : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	module.exports = createCaseFirst;


/***/ },
/* 194 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(195);

	/**
	 * Casts `array` to a slice if it's needed.
	 *
	 * @private
	 * @param {Array} array The array to inspect.
	 * @param {number} start The start position.
	 * @param {number} [end=array.length] The end position.
	 * @returns {Array} Returns the cast slice.
	 */
	function castSlice(array, start, end) {
	  var length = array.length;
	  end = end === undefined ? length : end;
	  return (!start && end >= length) ? array : baseSlice(array, start, end);
	}

	module.exports = castSlice;


/***/ },
/* 195 */
/***/ function(module, exports) {

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

	  if (start < 0) {
	    start = -start > length ? 0 : (length + start);
	  }
	  end = end > length ? length : end;
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
/* 196 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

	module.exports = reHasComplexSymbol;


/***/ },
/* 197 */
/***/ function(module, exports) {

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsAstral = '[' + rsAstralRange + ']',
	    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
	    rsFitz = '\\ud83c[\\udffb-\\udfff]',
	    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
	    rsNonAstral = '[^' + rsAstralRange + ']',
	    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
	    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
	    rsZWJ = '\\u200d';

	/** Used to compose unicode regexes. */
	var reOptMod = rsModifier + '?',
	    rsOptVar = '[' + rsVarRange + ']?',
	    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
	    rsSeq = rsOptVar + reOptMod + rsOptJoin,
	    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

	/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
	var reComplexSymbol = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

	/**
	 * Converts `string` to an array.
	 *
	 * @private
	 * @param {string} string The string to convert.
	 * @returns {Array} Returns the converted array.
	 */
	function stringToArray(string) {
	  return string.match(reComplexSymbol);
	}

	module.exports = stringToArray;


/***/ },
/* 198 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	var _delegate = __webpack_require__(199);

	var _delegate2 = _interopRequireDefault(_delegate);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	_context2.default.document.addEventListener('contextmenu', (0, _delegate2.default)('[contextmenu]', function (event) {
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
	        target: targetElement,
	        attachment: 'top left',
	        targetAttachment: 'bottom left',
	        targetModifier: undefined,
	        optimizations: {
	            moveElement: false
	        },
	        constraints: [{
	            to: 'scrollParent',
	            attachment: 'element'
	        }, {
	            to: 'window',
	            attachment: 'element'
	        }]
	    });
	}), false);

/***/ },
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (selector, callback) {

	    return function (event) {
	        (0, _wrap2.default)(event);

	        var match = (0, _delegateMatch2.default)(selector, event.target);

	        if (!match) {
	            return;
	        }

	        event.delegateElement = match;

	        callback.call(match, event);
	    };
	};

	var _delegateMatch = __webpack_require__(200);

	var _delegateMatch2 = _interopRequireDefault(_delegateMatch);

	var _wrap = __webpack_require__(202);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (selector, target) {
	    if (!target || !target.tagName) {
	        return;
	    }

	    var match;

	    if ((0, _matchesSelector2.default)(target, selector)) {
	        match = target;
	    } else if ((0, _matchesSelector2.default)(target, selector + ' *')) {
	        var parent = target.parentNode;

	        while (parent) {
	            if ((0, _matchesSelector2.default)(parent, selector)) {
	                match = parent;
	                break;
	            }

	            parent = parent.parentNode;
	        }
	    }

	    return match;
	};

	var _matchesSelector = __webpack_require__(201);

	var _matchesSelector2 = _interopRequireDefault(_matchesSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, selector) {
	    return element.nodeType === 1 ? matches.call(element, selector) : false;
	};

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	var _vendor = __webpack_require__(190);

	var _vendor2 = _interopRequireDefault(_vendor);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var indexOf = Array.prototype.indexOf;
	var proto = _context2.default.Element.prototype;
	var matches = proto.matches || (0, _vendor2.default)('matchesSelector', proto) || function (selector) {
	    return indexOf.call((this.parentNode || this.ownerDocument).querySelectorAll(selector), this) !== -1;
	};

	/**
	 * @function xblocks.dom.matchesSelector
	 * @param   {[type]} element  [description]
	 * @param   {[type]} selector [description]
	 * @returns {boolean}
	 */

/***/ },
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (event) {
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

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var doc = _context2.default.document;
	var html = doc.documentElement;
	var hop = Object.prototype.hasOwnProperty;
	var clickWhich = {
	    1: 'left',
	    2: 'center',
	    3: 'right'
	};

	/**
	 * @param {Event} event
	 * @returns {Event}
	 */

/***/ },
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (node) {
	  _context2.default.setTimeout(node.focus.bind(node), 0);
	};

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _xblocksCore = __webpack_require__(17);

	var _delegate = __webpack_require__(199);

	var _delegate2 = _interopRequireDefault(_delegate);

	var _filterClick = __webpack_require__(205);

	var _filterClick2 = _interopRequireDefault(_filterClick);

	var _filterMouse = __webpack_require__(206);

	var _filterMouse2 = _interopRequireDefault(_filterMouse);

	var _matchesSelector = __webpack_require__(201);

	var _matchesSelector2 = _interopRequireDefault(_matchesSelector);

	var _eachAfter = __webpack_require__(207);

	var _eachAfter2 = _interopRequireDefault(_eachAfter);

	var _eachBefore = __webpack_require__(210);

	var _eachBefore2 = _interopRequireDefault(_eachBefore);

	var _index = __webpack_require__(212);

	var _index2 = _interopRequireDefault(_index);

	var _merge = __webpack_require__(213);

	var _merge2 = _interopRequireDefault(_merge);

	var _throttle = __webpack_require__(11);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var pop = Array.prototype.pop;
	var slice = Array.prototype.slice;
	var EVENT_BLUR = 'xb-blur';
	var EVENT_FOCUS = 'xb-focus';

	var TableNavigator = function () {
	    function TableNavigator(node, options) {
	        _classCallCheck(this, TableNavigator);

	        this._options = (0, _merge2.default)({
	            col: 'xb-menu:not([disabled])',
	            row: 'xb-menuitem:not([disabled])',
	            colLoop: false,
	            rowLoop: false
	        }, options);

	        this._node = node;
	        this._item = undefined;
	        this._originalEvent = undefined;

	        this._onKeydown = this._onKeydown.bind(this);
	        this._onMouseover = (0, _delegate2.default)(this._options.row, this._onMouseover.bind(this));
	        this._onMouseout = (0, _delegate2.default)(this._options.row, this._onMouseout.bind(this));
	        this._onMousemove = (0, _throttle2.default)((0, _delegate2.default)(this._options.row, this._onMouseAction.bind(this)));
	        this._onClick = (0, _filterClick2.default)('left', (0, _delegate2.default)(this._options.row, this._onMouseAction.bind(this)));

	        this._bind();
	    }

	    _createClass(TableNavigator, [{
	        key: 'destroy',
	        value: function destroy() {
	            this._unbind();
	            this._node = undefined;
	            this._originalEvent = undefined;
	            this.blurItem();
	        }
	    }, {
	        key: 'getItem',
	        value: function getItem() {
	            return this._item;
	        }
	    }, {
	        key: 'blurItem',
	        value: function blurItem() {
	            if (this._item) {
	                var item = this._item;
	                this._item = undefined;
	                _xblocksCore.event.dispatch(item, EVENT_BLUR);
	            }
	        }
	    }, {
	        key: '_bind',
	        value: function _bind() {
	            this._node.addEventListener('keydown', this._onKeydown, false);
	            this._node.addEventListener('click', this._onClick, false);
	            this._node.addEventListener('mouseover', this._onMouseover, false);
	            this._node.addEventListener('mouseout', this._onMouseout, false);
	            this._node.addEventListener('mousemove', this._onMousemove, false);
	        }
	    }, {
	        key: '_unbind',
	        value: function _unbind() {
	            this._node.removeEventListener('keydown', this._onKeydown, false);
	            this._node.removeEventListener('click', this._onClick, false);
	            this._node.removeEventListener('mouseover', this._onMouseover, false);
	            this._node.removeEventListener('mouseout', this._onMouseout, false);
	            this._node.removeEventListener('mousemove', this._onMousemove, false);
	        }
	    }, {
	        key: '_col',
	        value: function _col(item) {
	            if (!item) {
	                return;
	            }

	            var col = item;
	            while (col = col.parentNode) {
	                if ((0, _matchesSelector2.default)(col, this._options.col)) {
	                    return col;
	                }

	                if (col === this._node) {
	                    break;
	                }
	            }
	        }
	    }, {
	        key: '_colFirst',
	        value: function _colFirst() {
	            return this._node.querySelector(this._options.col) || this._node;
	        }
	    }, {
	        key: '_colLast',
	        value: function _colLast() {
	            return pop.call(slice.call(this._node.querySelectorAll(this._options.col))) || this._node;
	        }
	    }, {
	        key: '_colMatchIterate',
	        value: function _colMatchIterate(data, element) {
	            if ((0, _matchesSelector2.default)(element, this._options.col)) {
	                data.col = element;
	                return false;
	            }
	        }
	    }, {
	        key: '_colNext',
	        value: function _colNext(col) {
	            var data = {};
	            (0, _eachAfter2.default)(col, this._colMatchIterate.bind(this, data), this._node, false);
	            return data.col;
	        }
	    }, {
	        key: '_colPrev',
	        value: function _colPrev(col) {
	            var data = {};
	            (0, _eachBefore2.default)(col, this._colMatchIterate.bind(this, data), this._node, false);
	            return data.col;
	        }
	    }, {
	        key: '_rowFirst',
	        value: function _rowFirst(col) {
	            return col.querySelector(this._options.row);
	        }
	    }, {
	        key: '_rowLast',
	        value: function _rowLast(col) {
	            return pop.call(slice.call(col.querySelectorAll(this._options.row)));
	        }
	    }, {
	        key: '_rowMatchIterate',
	        value: function _rowMatchIterate(data, element) {
	            if ((0, _matchesSelector2.default)(element, this._options.row)) {
	                data.row = element;
	                return false;
	            }
	        }
	    }, {
	        key: '_rowNext',
	        value: function _rowNext(row) {
	            var data = {};
	            (0, _eachAfter2.default)(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
	            return data.row;
	        }
	    }, {
	        key: '_rowPrev',
	        value: function _rowPrev(row) {
	            var data = {};
	            (0, _eachBefore2.default)(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
	            return data.row;
	        }
	    }, {
	        key: '_rowIndex',
	        value: function _rowIndex(row) {
	            return (0, _index2.default)(this._options.row, row, this._col(row));
	        }
	    }, {
	        key: '_rowByIndex',
	        value: function _rowByIndex(col, idx) {
	            return col.querySelectorAll(this._options.row)[idx];
	        }
	    }, {
	        key: '_focus',
	        value: function _focus(element) {
	            if (element === this._item) {
	                return;
	            }

	            if (this._item) {
	                _xblocksCore.event.dispatch(this._item, EVENT_BLUR, {
	                    detail: { originalEvent: this._originalEvent }
	                });
	            }

	            this._item = element;
	            _xblocksCore.event.dispatch(this._item, EVENT_FOCUS, {
	                detail: { originalEvent: this._originalEvent }
	            });
	        }
	    }, {
	        key: '_onKeydown',
	        value: function _onKeydown(event) {
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
	        }
	    }, {
	        key: '_onMouseAction',
	        value: function _onMouseAction(event) {
	            if (!this._item || this._item !== event.delegateElement) {
	                this._originalEvent = event;
	                this._focus(event.delegateElement);
	            }
	        }
	    }, {
	        key: '_onMouseover',
	        value: function _onMouseover(event) {
	            (0, _filterMouse2.default)(event.delegateElement, event, this._onMouseAction.bind(this));
	        }
	    }, {
	        key: '_onMouseout',
	        value: function _onMouseout(event) {
	            (0, _filterMouse2.default)(event.delegateElement, event, this._onMouseAction.bind(this));
	        }
	    }, {
	        key: '_onArrowLeft',
	        value: function _onArrowLeft() {
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
	        }
	    }, {
	        key: '_onArrowRight',
	        value: function _onArrowRight() {
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
	        }
	    }, {
	        key: '_onArrowUp',
	        value: function _onArrowUp() {
	            if (!this._item) {
	                this._focus(this._rowFirst(this._colFirst()));
	            } else {
	                var row = this._rowPrev(this._item);

	                if (!row) {
	                    var col = void 0;

	                    if (this._options.rowLoop) {
	                        col = this._col(this._item);
	                    } else {
	                        col = this._colPrev(this._col(this._item)) || this._colLast();
	                    }

	                    row = this._rowLast(col);
	                }

	                this._focus(row);
	            }
	        }
	    }, {
	        key: '_onArrowDown',
	        value: function _onArrowDown() {
	            if (!this._item) {
	                this._focus(this._rowFirst(this._colFirst()));
	            } else {
	                var row = this._rowNext(this._item);

	                if (!row) {
	                    var col = void 0;

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
	    }]);

	    return TableNavigator;
	}();

	exports.default = TableNavigator;

/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (which, callback) {
	    which = Array.isArray(which) ? which : [which];

	    return function (event) {
	        if (event.type !== 'click') {
	            return;
	        }

	        (0, _wrap2.default)(event);

	        if (which.indexOf(event.whichStr) !== -1) {
	            callback.call(this, event);
	        }
	    };
	};

	var _wrap = __webpack_require__(202);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 206 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, event, callback) {
	    (0, _wrap2.default)(event);

	    var toElement = event.relatedTarget;

	    while (toElement && toElement !== element) {
	        toElement = toElement.parentNode;
	    }

	    if (toElement === element) {
	        return;
	    }

	    return callback.call(element, event);
	};

	var _wrap = __webpack_require__(202);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 207 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (node, callback, context, inner) {
	    inner = typeof inner === 'undefined' ? true : Boolean(inner);
	    var next;
	    var cbcall;

	    do {
	        if (context && !(0, _isParent2.default)(context, node)) {
	            return;
	        }

	        next = node;

	        while (next = next.nextSibling) {
	            cbcall = inner ? (0, _eachInnerFollowing2.default)(next, callback) : callback && callback(next);

	            if (typeof cbcall !== 'undefined' && !cbcall) {
	                return false;
	            }
	        }
	    } while (node = node.parentNode);
	};

	var _isParent = __webpack_require__(208);

	var _isParent2 = _interopRequireDefault(_isParent);

	var _eachInnerFollowing = __webpack_require__(209);

	var _eachInnerFollowing2 = _interopRequireDefault(_eachInnerFollowing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var html = _context2.default.document.documentElement;

	/**
	 * @function xblocks.dom.isParent
	 * @param {HTMLElement} container
	 * @param {HTMLElement} element
	 * @returns {boolean}
	 */

	exports.default = function () {

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
	}();

/***/ },
/* 209 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (node, callback) {
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
/* 210 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (node, callback, context, inner) {
	    inner = typeof inner === 'undefined' ? true : Boolean(inner);
	    var prev;
	    var cbcall;

	    do {
	        if (context && !(0, _isParent2.default)(context, node)) {
	            return;
	        }

	        prev = node;

	        while (prev = prev.previousSibling) {
	            cbcall = inner ? (0, _eachInnerPrevious2.default)(prev, callback) : callback && callback(prev);

	            if (typeof cbcall !== 'undefined' && !cbcall) {
	                return false;
	            }
	        }
	    } while (node = node.parentNode);
	};

	var _isParent = __webpack_require__(208);

	var _isParent2 = _interopRequireDefault(_isParent);

	var _eachInnerPrevious = __webpack_require__(211);

	var _eachInnerPrevious2 = _interopRequireDefault(_eachInnerPrevious);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 211 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (node, callback) {
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
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (selector, element, context) {
	  context = context || _context2.default.document;
	  return indexOf.call(context.querySelectorAll(selector), element);
	};

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var indexOf = Array.prototype.indexOf;

	/**
	 * @function xblocks.dom.index
	 * @param   {[type]} selector [description]
	 * @param   {[type]} element  [description]
	 * @param   {[type]} context  [description]
	 * @returns {[type]}          [description]
	 */

/***/ },
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(214),
	    createAssigner = __webpack_require__(169);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable string keyed properties of source objects into the
	 * destination object. Source properties that resolve to `undefined` are
	 * skipped if a destination value exists. Array and plain object properties
	 * are merged recursively.Other objects and value types are overridden by
	 * assignment. Source objects are applied from left to right. Subsequent
	 * sources overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.5.0
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
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
	 */
	var merge = createAssigner(function(object, source, srcIndex) {
	  baseMerge(object, source, srcIndex);
	});

	module.exports = merge;


/***/ },
/* 214 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(33),
	    arrayEach = __webpack_require__(131),
	    assignMergeValue = __webpack_require__(215),
	    baseMergeDeep = __webpack_require__(216),
	    isArray = __webpack_require__(88),
	    isObject = __webpack_require__(5),
	    isTypedArray = __webpack_require__(97),
	    keysIn = __webpack_require__(126);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  if (!(isArray(source) || isTypedArray(source))) {
	    var props = keysIn(source);
	  }
	  arrayEach(props || source, function(srcValue, key) {
	    if (props) {
	      key = srcValue;
	      srcValue = source[key];
	    }
	    if (isObject(srcValue)) {
	      stack || (stack = new Stack);
	      baseMergeDeep(object, source, key, srcIndex, baseMerge, customizer, stack);
	    }
	    else {
	      var newValue = customizer
	        ? customizer(object[key], srcValue, (key + ''), object, source, stack)
	        : undefined;

	      if (newValue === undefined) {
	        newValue = srcValue;
	      }
	      assignMergeValue(object, key, newValue);
	    }
	  });
	}

	module.exports = baseMerge;


/***/ },
/* 215 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(38);

	/**
	 * This function is like `assignValue` except that it doesn't assign
	 * `undefined` values.
	 *
	 * @private
	 * @param {Object} object The object to modify.
	 * @param {string} key The key of the property to assign.
	 * @param {*} value The value to assign.
	 */
	function assignMergeValue(object, key, value) {
	  if ((value !== undefined && !eq(object[key], value)) ||
	      (typeof key == 'number' && value === undefined && !(key in object))) {
	    object[key] = value;
	  }
	}

	module.exports = assignMergeValue;


/***/ },
/* 216 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(215),
	    baseClone = __webpack_require__(217),
	    copyArray = __webpack_require__(220),
	    isArguments = __webpack_require__(82),
	    isArray = __webpack_require__(88),
	    isArrayLikeObject = __webpack_require__(83),
	    isFunction = __webpack_require__(8),
	    isObject = __webpack_require__(5),
	    isPlainObject = __webpack_require__(236),
	    isTypedArray = __webpack_require__(97),
	    toPlainObject = __webpack_require__(237);

	/**
	 * A specialized version of `baseMerge` for arrays and objects which performs
	 * deep merges and tracks traversed objects enabling objects with circular
	 * references to be merged.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {string} key The key of the value to merge.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} mergeFunc The function to merge values.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {Object} [stack] Tracks traversed source values and their merged
	 *  counterparts.
	 */
	function baseMergeDeep(object, source, key, srcIndex, mergeFunc, customizer, stack) {
	  var objValue = object[key],
	      srcValue = source[key],
	      stacked = stack.get(srcValue);

	  if (stacked) {
	    assignMergeValue(object, key, stacked);
	    return;
	  }
	  var newValue = customizer
	    ? customizer(objValue, srcValue, (key + ''), object, source, stack)
	    : undefined;

	  var isCommon = newValue === undefined;

	  if (isCommon) {
	    newValue = srcValue;
	    if (isArray(srcValue) || isTypedArray(srcValue)) {
	      if (isArray(objValue)) {
	        newValue = objValue;
	      }
	      else if (isArrayLikeObject(objValue)) {
	        newValue = copyArray(objValue);
	      }
	      else {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, true);
	      }
	      else {
	        newValue = objValue;
	      }
	    }
	    else {
	      isCommon = false;
	    }
	  }
	  stack.set(srcValue, newValue);

	  if (isCommon) {
	    // Recursively merge objects and arrays (susceptible to call stack limits).
	    mergeFunc(newValue, srcValue, srcIndex, customizer, stack);
	  }
	  stack['delete'](srcValue);
	  assignMergeValue(object, key, newValue);
	}

	module.exports = baseMergeDeep;


/***/ },
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(33),
	    arrayEach = __webpack_require__(131),
	    assignValue = __webpack_require__(167),
	    baseAssign = __webpack_require__(218),
	    cloneBuffer = __webpack_require__(219),
	    copyArray = __webpack_require__(220),
	    copySymbols = __webpack_require__(221),
	    getAllKeys = __webpack_require__(222),
	    getTag = __webpack_require__(92),
	    initCloneArray = __webpack_require__(223),
	    initCloneByTag = __webpack_require__(224),
	    initCloneObject = __webpack_require__(235),
	    isArray = __webpack_require__(88),
	    isBuffer = __webpack_require__(148),
	    isHostObject = __webpack_require__(50),
	    isObject = __webpack_require__(5),
	    keys = __webpack_require__(78);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]',
	    arrayTag = '[object Array]',
	    boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    errorTag = '[object Error]',
	    funcTag = '[object Function]',
	    genTag = '[object GeneratorFunction]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    objectTag = '[object Object]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]',
	    weakMapTag = '[object WeakMap]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/** Used to identify `toStringTag` values supported by `_.clone`. */
	var cloneableTags = {};
	cloneableTags[argsTag] = cloneableTags[arrayTag] =
	cloneableTags[arrayBufferTag] = cloneableTags[dataViewTag] =
	cloneableTags[boolTag] = cloneableTags[dateTag] =
	cloneableTags[float32Tag] = cloneableTags[float64Tag] =
	cloneableTags[int8Tag] = cloneableTags[int16Tag] =
	cloneableTags[int32Tag] = cloneableTags[mapTag] =
	cloneableTags[numberTag] = cloneableTags[objectTag] =
	cloneableTags[regexpTag] = cloneableTags[setTag] =
	cloneableTags[stringTag] = cloneableTags[symbolTag] =
	cloneableTags[uint8Tag] = cloneableTags[uint8ClampedTag] =
	cloneableTags[uint16Tag] = cloneableTags[uint32Tag] = true;
	cloneableTags[errorTag] = cloneableTags[funcTag] =
	cloneableTags[weakMapTag] = false;

	/**
	 * The base implementation of `_.clone` and `_.cloneDeep` which tracks
	 * traversed objects.
	 *
	 * @private
	 * @param {*} value The value to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @param {boolean} [isFull] Specify a clone including symbols.
	 * @param {Function} [customizer] The function to customize cloning.
	 * @param {string} [key] The key of `value`.
	 * @param {Object} [object] The parent object of `value`.
	 * @param {Object} [stack] Tracks traversed objects and their clone counterparts.
	 * @returns {*} Returns the cloned value.
	 */
	function baseClone(value, isDeep, isFull, customizer, key, object, stack) {
	  var result;
	  if (customizer) {
	    result = object ? customizer(value, key, object, stack) : customizer(value);
	  }
	  if (result !== undefined) {
	    return result;
	  }
	  if (!isObject(value)) {
	    return value;
	  }
	  var isArr = isArray(value);
	  if (isArr) {
	    result = initCloneArray(value);
	    if (!isDeep) {
	      return copyArray(value, result);
	    }
	  } else {
	    var tag = getTag(value),
	        isFunc = tag == funcTag || tag == genTag;

	    if (isBuffer(value)) {
	      return cloneBuffer(value, isDeep);
	    }
	    if (tag == objectTag || tag == argsTag || (isFunc && !object)) {
	      if (isHostObject(value)) {
	        return object ? value : {};
	      }
	      result = initCloneObject(isFunc ? {} : value);
	      if (!isDeep) {
	        return copySymbols(value, baseAssign(result, value));
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, baseClone, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  if (!isArr) {
	    var props = isFull ? getAllKeys(value) : keys(value);
	  }
	  // Recursively populate clone (susceptible to call stack limits).
	  arrayEach(props || value, function(subValue, key) {
	    if (props) {
	      key = subValue;
	      subValue = value[key];
	    }
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return result;
	}

	module.exports = baseClone;


/***/ },
/* 218 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(168),
	    keys = __webpack_require__(78);

	/**
	 * The base implementation of `_.assign` without support for multiple sources
	 * or `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return object && copyObject(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 219 */
/***/ function(module, exports) {

	/**
	 * Creates a clone of  `buffer`.
	 *
	 * @private
	 * @param {Buffer} buffer The buffer to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Buffer} Returns the cloned buffer.
	 */
	function cloneBuffer(buffer, isDeep) {
	  if (isDeep) {
	    return buffer.slice();
	  }
	  var result = new buffer.constructor(buffer.length);
	  buffer.copy(result);
	  return result;
	}

	module.exports = cloneBuffer;


/***/ },
/* 220 */
/***/ function(module, exports) {

	/**
	 * Copies the values of `source` to `array`.
	 *
	 * @private
	 * @param {Array} source The array to copy values from.
	 * @param {Array} [array=[]] The array to copy values to.
	 * @returns {Array} Returns `array`.
	 */
	function copyArray(source, array) {
	  var index = -1,
	      length = source.length;

	  array || (array = Array(length));
	  while (++index < length) {
	    array[index] = source[index];
	  }
	  return array;
	}

	module.exports = copyArray;


/***/ },
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(168),
	    getSymbols = __webpack_require__(125);

	/**
	 * Copies own symbol properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy symbols from.
	 * @param {Object} [object={}] The object to copy symbols to.
	 * @returns {Object} Returns `object`.
	 */
	function copySymbols(source, object) {
	  return copyObject(source, getSymbols(source), object);
	}

	module.exports = copySymbols;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	var baseGetAllKeys = __webpack_require__(122),
	    getSymbols = __webpack_require__(125),
	    keys = __webpack_require__(78);

	/**
	 * Creates an array of own enumerable property names and symbols of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of property names and symbols.
	 */
	function getAllKeys(object) {
	  return baseGetAllKeys(object, keys, getSymbols);
	}

	module.exports = getAllKeys;


/***/ },
/* 223 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Initializes an array clone.
	 *
	 * @private
	 * @param {Array} array The array to clone.
	 * @returns {Array} Returns the initialized clone.
	 */
	function initCloneArray(array) {
	  var length = array.length,
	      result = array.constructor(length);

	  // Add properties assigned by `RegExp#exec`.
	  if (length && typeof array[0] == 'string' && hasOwnProperty.call(array, 'index')) {
	    result.index = array.index;
	    result.input = array.input;
	  }
	  return result;
	}

	module.exports = initCloneArray;


/***/ },
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(225),
	    cloneDataView = __webpack_require__(226),
	    cloneMap = __webpack_require__(227),
	    cloneRegExp = __webpack_require__(230),
	    cloneSet = __webpack_require__(231),
	    cloneSymbol = __webpack_require__(233),
	    cloneTypedArray = __webpack_require__(234);

	/** `Object#toString` result references. */
	var boolTag = '[object Boolean]',
	    dateTag = '[object Date]',
	    mapTag = '[object Map]',
	    numberTag = '[object Number]',
	    regexpTag = '[object RegExp]',
	    setTag = '[object Set]',
	    stringTag = '[object String]',
	    symbolTag = '[object Symbol]';

	var arrayBufferTag = '[object ArrayBuffer]',
	    dataViewTag = '[object DataView]',
	    float32Tag = '[object Float32Array]',
	    float64Tag = '[object Float64Array]',
	    int8Tag = '[object Int8Array]',
	    int16Tag = '[object Int16Array]',
	    int32Tag = '[object Int32Array]',
	    uint8Tag = '[object Uint8Array]',
	    uint8ClampedTag = '[object Uint8ClampedArray]',
	    uint16Tag = '[object Uint16Array]',
	    uint32Tag = '[object Uint32Array]';

	/**
	 * Initializes an object clone based on its `toStringTag`.
	 *
	 * **Note:** This function only supports cloning values with tags of
	 * `Boolean`, `Date`, `Error`, `Number`, `RegExp`, or `String`.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @param {string} tag The `toStringTag` of the object to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, cloneFunc, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case dataViewTag:
	      return cloneDataView(object, isDeep);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object, isDeep, cloneFunc);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object, isDeep, cloneFunc);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(72);

	/**
	 * Creates a clone of `arrayBuffer`.
	 *
	 * @private
	 * @param {ArrayBuffer} arrayBuffer The array buffer to clone.
	 * @returns {ArrayBuffer} Returns the cloned array buffer.
	 */
	function cloneArrayBuffer(arrayBuffer) {
	  var result = new arrayBuffer.constructor(arrayBuffer.byteLength);
	  new Uint8Array(result).set(new Uint8Array(arrayBuffer));
	  return result;
	}

	module.exports = cloneArrayBuffer;


/***/ },
/* 226 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(225);

	/**
	 * Creates a clone of `dataView`.
	 *
	 * @private
	 * @param {Object} dataView The data view to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned data view.
	 */
	function cloneDataView(dataView, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(dataView.buffer) : dataView.buffer;
	  return new dataView.constructor(buffer, dataView.byteOffset, dataView.byteLength);
	}

	module.exports = cloneDataView;


/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(228),
	    arrayReduce = __webpack_require__(229),
	    mapToArray = __webpack_require__(73);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(mapToArray(map), true) : mapToArray(map);
	  return arrayReduce(array, addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 228 */
/***/ function(module, exports) {

	/**
	 * Adds the key-value `pair` to `map`.
	 *
	 * @private
	 * @param {Object} map The map to modify.
	 * @param {Array} pair The key-value pair to add.
	 * @returns {Object} Returns `map`.
	 */
	function addMapEntry(map, pair) {
	  // Don't return `Map#set` because it doesn't return the map instance in IE 11.
	  map.set(pair[0], pair[1]);
	  return map;
	}

	module.exports = addMapEntry;


/***/ },
/* 229 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as
	 *  the initial value.
	 * @returns {*} Returns the accumulated value.
	 */
	function arrayReduce(array, iteratee, accumulator, initAccum) {
	  var index = -1,
	      length = array.length;

	  if (initAccum && length) {
	    accumulator = array[++index];
	  }
	  while (++index < length) {
	    accumulator = iteratee(accumulator, array[index], index, array);
	  }
	  return accumulator;
	}

	module.exports = arrayReduce;


/***/ },
/* 230 */
/***/ function(module, exports) {

	/** Used to match `RegExp` flags from their coerced string values. */
	var reFlags = /\w*$/;

	/**
	 * Creates a clone of `regexp`.
	 *
	 * @private
	 * @param {Object} regexp The regexp to clone.
	 * @returns {Object} Returns the cloned regexp.
	 */
	function cloneRegExp(regexp) {
	  var result = new regexp.constructor(regexp.source, reFlags.exec(regexp));
	  result.lastIndex = regexp.lastIndex;
	  return result;
	}

	module.exports = cloneRegExp;


/***/ },
/* 231 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(232),
	    arrayReduce = __webpack_require__(229),
	    setToArray = __webpack_require__(74);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @param {Function} cloneFunc The function to clone values.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set, isDeep, cloneFunc) {
	  var array = isDeep ? cloneFunc(setToArray(set), true) : setToArray(set);
	  return arrayReduce(array, addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 232 */
/***/ function(module, exports) {

	/**
	 * Adds `value` to `set`.
	 *
	 * @private
	 * @param {Object} set The set to modify.
	 * @param {*} value The value to add.
	 * @returns {Object} Returns `set`.
	 */
	function addSetEntry(set, value) {
	  set.add(value);
	  return set;
	}

	module.exports = addSetEntry;


/***/ },
/* 233 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(71);

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolValueOf = symbolProto ? symbolProto.valueOf : undefined;

	/**
	 * Creates a clone of the `symbol` object.
	 *
	 * @private
	 * @param {Object} symbol The symbol object to clone.
	 * @returns {Object} Returns the cloned symbol object.
	 */
	function cloneSymbol(symbol) {
	  return symbolValueOf ? Object(symbolValueOf.call(symbol)) : {};
	}

	module.exports = cloneSymbol;


/***/ },
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(225);

	/**
	 * Creates a clone of `typedArray`.
	 *
	 * @private
	 * @param {Object} typedArray The typed array to clone.
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the cloned typed array.
	 */
	function cloneTypedArray(typedArray, isDeep) {
	  var buffer = isDeep ? cloneArrayBuffer(typedArray.buffer) : typedArray.buffer;
	  return new typedArray.constructor(buffer, typedArray.byteOffset, typedArray.length);
	}

	module.exports = cloneTypedArray;


/***/ },
/* 235 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(132),
	    getPrototype = __webpack_require__(77),
	    isPrototype = __webpack_require__(91);

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototype(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	var getPrototype = __webpack_require__(77),
	    isHostObject = __webpack_require__(50),
	    isObjectLike = __webpack_require__(10);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the
	 * [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
	 *
	 * @static
	 * @memberOf _
	 * @since 0.8.0
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a plain object,
	 *  else `false`.
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
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototype(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = hasOwnProperty.call(proto, 'constructor') && proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 237 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(168),
	    keysIn = __webpack_require__(126);

	/**
	 * Converts `value` to a plain object flattening inherited enumerable string
	 * keyed properties of `value` to own properties of the plain object.
	 *
	 * @static
	 * @memberOf _
	 * @since 3.0.0
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
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 238 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (node) {
	    var parent = node;

	    while (parent) {
	        if (parent.xtagName === MENU_TAG || parent.xtagName === MENU_INLINE_TAG) {
	            return parent;
	        }

	        parent = parent.parentNode;
	    }

	    return null;
	};

	var MENU_TAG = 'xb-menu';
	var MENU_INLINE_TAG = 'xb-menu-inline';

	/**
	 * @param {HTMLElement} node
	 * @returns {HTMLElement|null}
	 */

/***/ },
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lazyFocus = __webpack_require__(203);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _isParent = __webpack_require__(208);

	var _isParent2 = _interopRequireDefault(_isParent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Common interface for elements xb-menu and xb-menu-inline.
	 *
	 * @prop {boolean} hasOpenSubmenu The menu contains the open submenu
	 * @type {Object}
	 */
	exports.default = {
	    events: {

	        /**
	         * Оpen the submenu
	         * @this xb.Menuitem
	         */
	        'click:delegate(xb-menuitem:not([disabled]))': function clickDelegateXbMenuitemNotDisabled() {
	            if (this.submenuInstance) {
	                this.submenuInstance.open();
	            }
	        },

	        /**
	         * Оpen the submenu
	         * @this xb.Menu
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
	         * @this xb.Menu
	         */
	        'jsx-scroll-throttle': function jsxScrollThrottle(event) {
	            // close all submenu
	            event.stopImmediatePropagation();
	            (0, _lazyFocus2.default)(this);
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
	            if (!(0, _isParent2.default)(this, menuitem)) {
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
/* 240 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(241);

	__webpack_require__(242);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	var _lazyFocus = __webpack_require__(203);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _TableNavigator = __webpack_require__(204);

	var _TableNavigator2 = _interopRequireDefault(_TableNavigator);

	var _noop = __webpack_require__(243);

	var _noop2 = _interopRequireDefault(_noop);

	var _menu = __webpack_require__(239);

	var _menu2 = _interopRequireDefault(_menu);

	var _focus = __webpack_require__(140);

	var _focus2 = _interopRequireDefault(_focus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MENU_COMMON = {
	    init: function init() {
	        if (this._xbFocus) {
	            this._xbFocus.destroy();
	        }

	        this._xbFocus = new _TableNavigator2.default(this, {
	            col: 'xb-menu-inline:not([disabled])',
	            rowLoop: true,
	            colLoop: true
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
	exports.default = _context.xb.MenuInline = (0, _xblocksCore.create)('xb-menu-inline', [_focus2.default, _menu2.default, {
	    prototype: Object.create(HTMLElement.prototype),

	    events: {
	        'xb-created': MENU_COMMON.init,

	        'xb-repaint': MENU_COMMON.init,

	        blur: function blur() {
	            if (!this.hasOpenSubmenu) {
	                this._xbFocus.blurItem();
	            }
	        }
	    },

	    methods: {
	        open: _noop2.default,

	        close: function close() {
	            // FireFox does not fire a blur event
	            (0, _lazyFocus2.default)(this);
	        }
	    }
	}]);

/***/ },
/* 241 */
1,
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _menu = __webpack_require__(187);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The template node xb-menu-inline
	 *
	 * @class xv.MenuInline
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes xblocks.mixin.vMenu
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.MenuInline = _xblocksCore.view.register('xb-menu-inline', [_commonAttrs2.default, _menu2.default, {
	    displayName: 'xb-menu-inline',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        size: _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            size: ''
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        this._updateMaxHeight(this.props.size);
	    }
	}]);

/***/ },
/* 243 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
	 * @since 2.3.0
	 * @category Util
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


/***/ },
/* 244 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(245);

	__webpack_require__(246);

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(17);

	var _lazyFocus = __webpack_require__(203);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _getParentMenu = __webpack_require__(238);

	var _getParentMenu2 = _interopRequireDefault(_getParentMenu);

	var _merge = __webpack_require__(213);

	var _merge2 = _interopRequireDefault(_merge);

	var _removeChild = __webpack_require__(247);

	var _removeChild2 = _interopRequireDefault(_removeChild);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _inputValueProps = __webpack_require__(151);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var MENUITEM_COMMON = {
	    submenuAttrs: {
	        'attachment': 'top left',
	        'target-attachment': 'top right',
	        'target-modifier': 'initial',
	        'constraints': encodeURIComponent(JSON.stringify([{
	            'to': 'window',
	            'attachment': 'element together'
	        }]))
	    },

	    submenu: function () {
	        var timerOpenSubmenu = 0;

	        return {

	            /**
	             * @param {xb.Menu} [submenu]
	             * @this context
	             */
	            open: function open(submenu) {
	                if (submenu && !timerOpenSubmenu) {
	                    timerOpenSubmenu = _context2.default.setTimeout(submenu.open.bind(submenu), 200);
	                }
	            },

	            /**
	             * @this context
	             */
	            cancel: function cancel() {
	                if (timerOpenSubmenu) {
	                    _context2.default.clearTimeout(timerOpenSubmenu);
	                    timerOpenSubmenu = 0;
	                }
	            },

	            /**
	             * @this xb.Menuitem
	             */
	            remove: function remove() {
	                if (this._submenuInstance) {
	                    var submenu = this._submenuInstance;
	                    this._submenuInstance = undefined;

	                    MENUITEM_COMMON.submenu.cancel();
	                    submenu.close();
	                    (0, _removeChild2.default)(submenu);
	                }
	            }
	        };
	    }()
	};

	/**
	 * xb-menuitem html element
	 *
	 * @class xb.Menuitem
	 * @memberof xb
	 * @augments HTMLElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eInputValueProps
	 * @listens xblocks.utils:TableNavigator~event:xb-focus
	 * @listens xblocks.utils:TableNavigator~event:xb-blur
	 * @listens xblocks.Element~event:xb-repaint
	 * @listens xblocks.Element~event:xb-created
	 * @listens xblocks.Element~event:xb-destroy
	 */
	exports.default = _context.xb.Menuitem = (0, _xblocksCore.create)('xb-menuitem', [_disabled2.default, _inputValueProps2.default, {
	    prototype: Object.create(HTMLElement.prototype),

	    events: {
	        /**
	         * @callback
	         */
	        'xb-created': function xbCreated() {
	            MENUITEM_COMMON.submenu.remove.call(this);
	            this.submenu = Boolean(this.content.trim());
	        },

	        /**
	         * @callback
	         */
	        'xb-repaint': MENUITEM_COMMON.submenu.remove,

	        /**
	         * @callback
	         */
	        'xb-destroy': MENUITEM_COMMON.submenu.remove,

	        /**
	         * @callback
	         */
	        'xb-blur': function xbBlur() {
	            this.focused = false;

	            MENUITEM_COMMON.submenu.cancel();

	            var submenu = this.submenuInstance;
	            if (submenu && submenu.opened) {
	                // to close the submenu and return focus
	                (0, _lazyFocus2.default)(this.menuInstance);
	            }
	        },

	        /**
	         * @callback
	         * @param {Event} event
	         */
	        'xb-focus': function xbFocus(event) {
	            this.focused = true;

	            // scroll menu only keyboard events
	            if (event.detail.originalEvent.type === 'keydown') {
	                this.menuInstance.scrollIntoItem(this);

	                // open the submenu only event-mouse
	            } else {
	                    MENUITEM_COMMON.submenu.open(this.submenuInstance);
	                }
	        }
	    },

	    /**
	     * @lends xb.Menuitem.prototype
	     */
	    accessors: {
	        /**
	         * @prop {boolean} [focused=false] Item in focus
	         */
	        focused: {
	            attribute: {
	                boolean: true
	            }
	        },

	        /**
	         * @prop {boolean} [selected=false] Item is selected
	         */
	        selected: {
	            attribute: {
	                boolean: true
	            }
	        },

	        /**
	         * @prop {boolean} [submenu=false] Item has a submenu
	         */
	        submenu: {
	            attribute: {
	                boolean: true
	            }
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
	         */
	        menuInstance: {
	            get: function get() {
	                if (this._menuInstance || this._menuInstance === null) {
	                    return this._menuInstance;
	                }

	                this._menuInstance = (0, _getParentMenu2.default)(this);

	                return this._menuInstance;
	            }
	        },

	        /**
	         * @readonly
	         * @prop {xb.Menu|null} submenuInstance Submenu instance
	         */
	        submenuInstance: {
	            get: function get() {
	                if (this._submenuInstance || this._submenuInstance === null) {
	                    return this._submenuInstance;
	                }

	                this._submenuInstance = null;

	                if (this.submenu) {
	                    var targetClassName = '_menuitem-target-' + this.xuid;
	                    var menu = this.ownerDocument.createElement('xb-menu');
	                    var parentConstraints = this.menuInstance.getAttribute('constraints');
	                    var attrs = (0, _merge2.default)({ 'target': '.' + targetClassName }, MENUITEM_COMMON.submenuAttrs);

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
/* 245 */
1,
/* 246 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _reactAddonsPureRenderMixin = __webpack_require__(19);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(18);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _exportPropTypes = __webpack_require__(136);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _filterProps = __webpack_require__(28);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _isEmpty = __webpack_require__(147);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The template node xb-menuitem
	 *
	 * @class xv.Menuitem
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	exports.default = _context.xv.Menuitem = _xblocksCore.view.register('xb-menuitem', [_commonAttrs2.default, (0, _exportPropTypes2.default)('xb-ico'), {
	    displayName: 'xb-menuitem',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        'focused': _react.PropTypes.bool,
	        'ico': _react.PropTypes.object,
	        'label': _react.PropTypes.string.isRequired,
	        'selected': _react.PropTypes.bool,
	        'submenu': _react.PropTypes.bool
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
	        var classes = (0, _classnames2.default)({
	            'xb-menuitem': true,
	            '_disabled': this.props.disabled,
	            '_focused': this.props.focused,
	            '_selected': this.props.selected,
	            '_submenu': this.props.submenu
	        });

	        var children = [React.createElement(
	            'span',
	            { className: '_label', key: 'label' },
	            this.props.label
	        )];

	        var icoProps = (0, _filterProps2.default)(/^xb-ico-/, this.props);

	        if (!(0, _isEmpty2.default)(icoProps) && icoProps.type) {
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
/* 247 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element) {
	    if (element.parentNode) {
	        return element.parentNode.removeChild(element);
	    }
	};

/***/ },
/* 248 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(249);

	__webpack_require__(250);

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	/**
	 * xb-menuseparator html element
	 *
	 * @class xb.Menuseparator
	 * @memberof xb
	 * @augments HTMLElement
	 */
	exports.default = _context.xb.Menuseparator = (0, _xblocksCore.create)('xb-menuseparator', [{
	    prototype: Object.create(HTMLElement.prototype)
	}]);

/***/ },
/* 249 */
1,
/* 250 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _xblocksCore = __webpack_require__(17);

	/**
	 * The template node xb-menuseparator
	 *
	 * @class xv.Menuseparator
	 * @memberof xv
	 */
	exports.default = _context.xv.Menuseparator = _xblocksCore.view.register('xb-menuseparator', {
	    displayName: 'xb-menuseparator',

	    render: function render() {
	        return React.createElement('div', { className: 'xb-menuseparator' });
	    }
	});

/***/ },
/* 251 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(252);

	__webpack_require__(253);

	var _context = __webpack_require__(15);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(17);

	var _disabled = __webpack_require__(24);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _SpeechRecognition = __webpack_require__(254);

	var _SpeechRecognition2 = _interopRequireDefault(_SpeechRecognition);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SR_EVENTS = {
	    end: 1,
	    error: 1,
	    result: 1,
	    start: 1
	};

	var SR_LANG_DEFAULT = 'en-US';

	/**
	 * xb-speech-recognition html element
	 *
	 * @class xb.SpeechRecognition
	 * @augments HTMLElement
	 * @memberof xb
	 * @mixes xblocks.mixin.eDisabled
	 * @listens xblocks.Element~event:xb-created
	 * @listens xblocks.Element~event:xb-update
	 * @listens xblocks.Element~event:xb-destroy
	 */
	exports.default = _context.xb.SpeechRecognition = (0, _xblocksCore.create)('xb-speech-recognition', [_disabled2.default, {
	    prototype: Object.create(HTMLElement.prototype),

	    events: {
	        'xb-created': function xbCreated() {
	            this.xbSpeechRecognition = new _SpeechRecognition2.default({
	                lang: this.lang || _context2.default.navigator && _context2.default.navigator.language || SR_LANG_DEFAULT,
	                continuous: this.continuous,
	                interimResults: this.interimResults
	            });

	            var passEventToTarget = this._passEventToTarget.bind(this);
	            for (var eventName in SR_EVENTS) {
	                this.xbSpeechRecognition.on(eventName, passEventToTarget);
	            }

	            this.xbSpeechRecognition.toggle(this.active);
	        },

	        'xb-update': function xbUpdate() {
	            this.xbSpeechRecognition.toggle(this.active);
	        },

	        'xb-destroy': function xbDestroy() {
	            this.xbSpeechRecognition.removeAllListeners();
	            this.xbSpeechRecognition.abort();
	            this.xbSpeechRecognition = undefined;
	        },

	        'click': function click() {
	            this.active = !this.active;
	        }
	    },

	    /**
	     * @lends xb.SpeechRecognition.prototype
	     */
	    accessors: {
	        active: {
	            attribute: {
	                boolean: true
	            }
	        },

	        lang: {
	            attribute: {
	                name: 'lang'
	            }
	        },

	        continuous: {
	            attribute: {
	                boolean: true
	            }
	        },

	        interimResults: {
	            attribute: {
	                boolean: true,
	                name: 'interim-results'
	            }
	        },

	        target: {
	            attribute: {
	                name: 'target'
	            }
	        }
	    },

	    methods: {
	        _passEventToTarget: function _passEventToTarget(event) {
	            var target = this.target;
	            var targetType = typeof target === 'undefined' ? 'undefined' : _typeof(target);
	            var targetEvent = new _xblocksCore.event.Custom('xb-speech-recognition-' + event.type, {
	                bubbles: false,
	                cancelable: false,
	                detail: event.detail
	            });

	            if (targetType === 'function') {
	                target(targetEvent);
	            } else {
	                if (targetType === 'string') {
	                    target = this.ownerDocument.querySelector(target);
	                }

	                if (target instanceof HTMLElement) {
	                    target.dispatchEvent(targetEvent);
	                }
	            }
	        }
	    }
	}]);

/***/ },
/* 252 */
1,
/* 253 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(15);

	var _react = __webpack_require__(16);

	var _xblocksCore = __webpack_require__(17);

	var _classnames = __webpack_require__(18);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(23);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The template node xb-speech-recognition
	 *
	 * @class xv.SpeechRecognition
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	exports.default = _context.xv.SpeechRecognition = _xblocksCore.view.register('xb-speech-recognition', [_commonAttrs2.default, {
	    displayName: 'xb-speech-recognition',

	    propTypes: {
	        active: _react.PropTypes.bool
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            active: false,
	            disabled: false
	        };
	    },

	    render: function render() {
	        var classes = (0, _classnames2.default)({
	            'xb-speech-recognition': true,
	            '_active': this.props.active,
	            '_disabled': this.props.disabled
	        });

	        var props = {
	            'class': classes,
	            'type': this.props.active ? 'mic-on' : 'mic-off'
	        };

	        return React.createElement('xb-ico', props);
	    }
	}]);

/***/ },
/* 254 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _vendor = __webpack_require__(190);

	var _vendor2 = _interopRequireDefault(_vendor);

	var _events = __webpack_require__(255);

	var _events2 = _interopRequireDefault(_events);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SR = (0, _vendor2.default)('SpeechRecognition');

	var ENGINE_EVENTS = {
	    onend: function onend(event) {
	        event.detail = { final: this._transcript };
	        this.emit('end', event);
	    },

	    onerror: function onerror(event) {
	        this.emit('error', event);
	    },

	    onresult: function onresult(event) {
	        var transcript = '';

	        for (var i = event.resultIndex; i < event.results.length; ++i) {
	            var result = event.results[i];

	            if (result.isFinal) {
	                this._transcript += result[0].transcript;
	            } else {
	                transcript += result[0].transcript;
	            }
	        }

	        event.detail = { final: this._transcript };

	        if (this._params.interimResults) {
	            event.detail.interim = transcript;
	        }

	        this.emit('result', event);
	    },

	    onstart: function onstart(event) {
	        this.emit('start', event);
	    }
	};

	/**
	 *
	 * @param {Object} params
	 * @param {string} [params.lang=en-US] язык, который будет распозноваться
	 * @param {boolean} [params.continuous=false] продолжать распознование при остановке диктовки
	 * @param {boolean} [params.interimResults=false] выводить промежуточные не откорректированные результаты
	 */

	var SpeechRecognition = function (_EventEmitter) {
	    _inherits(SpeechRecognition, _EventEmitter);

	    function SpeechRecognition(params) {
	        _classCallCheck(this, SpeechRecognition);

	        var _this = _possibleConstructorReturn(this, Object.getPrototypeOf(SpeechRecognition).call(this));

	        _this._params = {};
	        _this._started = false;
	        _this._engine = new SR();
	        _this._applyParams(params, {
	            continuous: false,
	            interimResults: false,
	            lang: 'en-US',
	            maxAlternatives: 1
	        });

	        for (var eventName in ENGINE_EVENTS) {
	            _this._engine[eventName] = ENGINE_EVENTS[eventName].bind(_this);
	        }
	        return _this;
	    }

	    _createClass(SpeechRecognition, [{
	        key: 'toggle',
	        value: function toggle(state, params) {
	            if (state) {
	                this.start(params);
	            } else {
	                this.stop();
	            }
	        }
	    }, {
	        key: 'start',
	        value: function start(params) {
	            if (this._started) {
	                return;
	            }

	            this._started = true;
	            this._transcript = '';
	            this._applyParams(params);
	            this._engine.start();
	        }
	    }, {
	        key: 'stop',
	        value: function stop() {
	            if (!this._started) {
	                return;
	            }

	            this._started = false;
	            this._engine.stop();
	        }
	    }, {
	        key: 'abort',
	        value: function abort() {
	            if (!this._started) {
	                return;
	            }

	            this._started = false;
	            this._engine.abort();
	        }
	    }, {
	        key: '_applyParams',
	        value: function _applyParams(params, defaultParams) {
	            Object.assign(this._params, defaultParams, params);

	            for (var param in this._params) {
	                this._engine[param] = this._params[param];
	            }
	        }
	    }]);

	    return SpeechRecognition;
	}(_events2.default);

	exports.default = SpeechRecognition;

/***/ },
/* 255 */
/***/ function(module, exports) {

	// Copyright Joyent, Inc. and other Node contributors.
	//
	// Permission is hereby granted, free of charge, to any person obtaining a
	// copy of this software and associated documentation files (the
	// "Software"), to deal in the Software without restriction, including
	// without limitation the rights to use, copy, modify, merge, publish,
	// distribute, sublicense, and/or sell copies of the Software, and to permit
	// persons to whom the Software is furnished to do so, subject to the
	// following conditions:
	//
	// The above copyright notice and this permission notice shall be included
	// in all copies or substantial portions of the Software.
	//
	// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
	// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
	// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
	// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
	// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
	// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
	// USE OR OTHER DEALINGS IN THE SOFTWARE.

	function EventEmitter() {
	  this._events = this._events || {};
	  this._maxListeners = this._maxListeners || undefined;
	}
	module.exports = EventEmitter;

	// Backwards-compat with node 0.10.x
	EventEmitter.EventEmitter = EventEmitter;

	EventEmitter.prototype._events = undefined;
	EventEmitter.prototype._maxListeners = undefined;

	// By default EventEmitters will print a warning if more than 10 listeners are
	// added to it. This is a useful default which helps finding memory leaks.
	EventEmitter.defaultMaxListeners = 10;

	// Obviously not all Emitters should be limited to 10. This function allows
	// that to be increased. Set to zero for unlimited.
	EventEmitter.prototype.setMaxListeners = function(n) {
	  if (!isNumber(n) || n < 0 || isNaN(n))
	    throw TypeError('n must be a positive number');
	  this._maxListeners = n;
	  return this;
	};

	EventEmitter.prototype.emit = function(type) {
	  var er, handler, len, args, i, listeners;

	  if (!this._events)
	    this._events = {};

	  // If there is no 'error' event listener then throw.
	  if (type === 'error') {
	    if (!this._events.error ||
	        (isObject(this._events.error) && !this._events.error.length)) {
	      er = arguments[1];
	      if (er instanceof Error) {
	        throw er; // Unhandled 'error' event
	      }
	      throw TypeError('Uncaught, unspecified "error" event.');
	    }
	  }

	  handler = this._events[type];

	  if (isUndefined(handler))
	    return false;

	  if (isFunction(handler)) {
	    switch (arguments.length) {
	      // fast cases
	      case 1:
	        handler.call(this);
	        break;
	      case 2:
	        handler.call(this, arguments[1]);
	        break;
	      case 3:
	        handler.call(this, arguments[1], arguments[2]);
	        break;
	      // slower
	      default:
	        args = Array.prototype.slice.call(arguments, 1);
	        handler.apply(this, args);
	    }
	  } else if (isObject(handler)) {
	    args = Array.prototype.slice.call(arguments, 1);
	    listeners = handler.slice();
	    len = listeners.length;
	    for (i = 0; i < len; i++)
	      listeners[i].apply(this, args);
	  }

	  return true;
	};

	EventEmitter.prototype.addListener = function(type, listener) {
	  var m;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events)
	    this._events = {};

	  // To avoid recursion in the case that type === "newListener"! Before
	  // adding it to the listeners, first emit "newListener".
	  if (this._events.newListener)
	    this.emit('newListener', type,
	              isFunction(listener.listener) ?
	              listener.listener : listener);

	  if (!this._events[type])
	    // Optimize the case of one listener. Don't need the extra array object.
	    this._events[type] = listener;
	  else if (isObject(this._events[type]))
	    // If we've already got an array, just append.
	    this._events[type].push(listener);
	  else
	    // Adding the second element, need to change to array.
	    this._events[type] = [this._events[type], listener];

	  // Check for listener leak
	  if (isObject(this._events[type]) && !this._events[type].warned) {
	    if (!isUndefined(this._maxListeners)) {
	      m = this._maxListeners;
	    } else {
	      m = EventEmitter.defaultMaxListeners;
	    }

	    if (m && m > 0 && this._events[type].length > m) {
	      this._events[type].warned = true;
	      console.error('(node) warning: possible EventEmitter memory ' +
	                    'leak detected. %d listeners added. ' +
	                    'Use emitter.setMaxListeners() to increase limit.',
	                    this._events[type].length);
	      if (typeof console.trace === 'function') {
	        // not supported in IE 10
	        console.trace();
	      }
	    }
	  }

	  return this;
	};

	EventEmitter.prototype.on = EventEmitter.prototype.addListener;

	EventEmitter.prototype.once = function(type, listener) {
	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  var fired = false;

	  function g() {
	    this.removeListener(type, g);

	    if (!fired) {
	      fired = true;
	      listener.apply(this, arguments);
	    }
	  }

	  g.listener = listener;
	  this.on(type, g);

	  return this;
	};

	// emits a 'removeListener' event iff the listener was removed
	EventEmitter.prototype.removeListener = function(type, listener) {
	  var list, position, length, i;

	  if (!isFunction(listener))
	    throw TypeError('listener must be a function');

	  if (!this._events || !this._events[type])
	    return this;

	  list = this._events[type];
	  length = list.length;
	  position = -1;

	  if (list === listener ||
	      (isFunction(list.listener) && list.listener === listener)) {
	    delete this._events[type];
	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);

	  } else if (isObject(list)) {
	    for (i = length; i-- > 0;) {
	      if (list[i] === listener ||
	          (list[i].listener && list[i].listener === listener)) {
	        position = i;
	        break;
	      }
	    }

	    if (position < 0)
	      return this;

	    if (list.length === 1) {
	      list.length = 0;
	      delete this._events[type];
	    } else {
	      list.splice(position, 1);
	    }

	    if (this._events.removeListener)
	      this.emit('removeListener', type, listener);
	  }

	  return this;
	};

	EventEmitter.prototype.removeAllListeners = function(type) {
	  var key, listeners;

	  if (!this._events)
	    return this;

	  // not listening for removeListener, no need to emit
	  if (!this._events.removeListener) {
	    if (arguments.length === 0)
	      this._events = {};
	    else if (this._events[type])
	      delete this._events[type];
	    return this;
	  }

	  // emit removeListener for all listeners on all events
	  if (arguments.length === 0) {
	    for (key in this._events) {
	      if (key === 'removeListener') continue;
	      this.removeAllListeners(key);
	    }
	    this.removeAllListeners('removeListener');
	    this._events = {};
	    return this;
	  }

	  listeners = this._events[type];

	  if (isFunction(listeners)) {
	    this.removeListener(type, listeners);
	  } else if (listeners) {
	    // LIFO order
	    while (listeners.length)
	      this.removeListener(type, listeners[listeners.length - 1]);
	  }
	  delete this._events[type];

	  return this;
	};

	EventEmitter.prototype.listeners = function(type) {
	  var ret;
	  if (!this._events || !this._events[type])
	    ret = [];
	  else if (isFunction(this._events[type]))
	    ret = [this._events[type]];
	  else
	    ret = this._events[type].slice();
	  return ret;
	};

	EventEmitter.prototype.listenerCount = function(type) {
	  if (this._events) {
	    var evlistener = this._events[type];

	    if (isFunction(evlistener))
	      return 1;
	    else if (evlistener)
	      return evlistener.length;
	  }
	  return 0;
	};

	EventEmitter.listenerCount = function(emitter, type) {
	  return emitter.listenerCount(type);
	};

	function isFunction(arg) {
	  return typeof arg === 'function';
	}

	function isNumber(arg) {
	  return typeof arg === 'number';
	}

	function isObject(arg) {
	  return typeof arg === 'object' && arg !== null;
	}

	function isUndefined(arg) {
	  return arg === void 0;
	}


/***/ }
/******/ ])))
});
;