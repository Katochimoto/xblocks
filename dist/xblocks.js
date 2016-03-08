(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xtag"), require("react"), require("xblocks-core"), require("react-dom"), require("tether"));
	else if(typeof define === 'function' && define.amd)
		define(["xtag", "react", "xblocks-core", "react-dom", "tether"], factory);
	else if(typeof exports === 'object')
		exports["xblocks"] = factory(require("xtag"), require("react"), require("xblocks-core"), require("react-dom"), require("tether"));
	else
		root["xblocks"] = factory(root["xtag"], root["React"], root["xblocks-core"], root["ReactDOM"], root["Tether"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_14__, __WEBPACK_EXTERNAL_MODULE_15__, __WEBPACK_EXTERNAL_MODULE_129__, __WEBPACK_EXTERNAL_MODULE_153__) {
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

	__webpack_require__(10);

	__webpack_require__(23);

	__webpack_require__(133);

	__webpack_require__(141);

	__webpack_require__(144);

	__webpack_require__(147);

	__webpack_require__(150);

	__webpack_require__(174);

	__webpack_require__(228);

	__webpack_require__(232);

	__webpack_require__(236);

	__webpack_require__(239);

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

	var _throttle = __webpack_require__(9);

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
	var nativeMax = Math.max;

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
	  var args,
	      maxTimeoutId,
	      result,
	      stamp,
	      thisArg,
	      timeoutId,
	      trailingCall,
	      lastCalled = 0,
	      leading = false,
	      maxWait = false,
	      trailing = true;

	  if (typeof func != 'function') {
	    throw new TypeError(FUNC_ERROR_TEXT);
	  }
	  wait = toNumber(wait) || 0;
	  if (isObject(options)) {
	    leading = !!options.leading;
	    maxWait = 'maxWait' in options && nativeMax(toNumber(options.maxWait) || 0, wait);
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
	    args = maxTimeoutId = thisArg = timeoutId = trailingCall = undefined;
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

	  function flush() {
	    if ((timeoutId && trailingCall) || (maxTimeoutId && trailing)) {
	      result = func.apply(thisArg, args);
	    }
	    cancel();
	    return result;
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
	      if (!lastCalled && !maxTimeoutId && !leading) {
	        lastCalled = stamp;
	      }
	      var remaining = maxWait - (stamp - lastCalled);

	      var isCalled = (remaining <= 0 || remaining > maxWait) &&
	        (leading || maxTimeoutId);

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
	  debounced.flush = flush;
	  return debounced;
	}

	module.exports = debounce;


/***/ },
/* 5 */
/***/ function(module, exports) {

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
	 * @type {Function}
	 * @category Date
	 * @returns {number} Returns the timestamp.
	 * @example
	 *
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = Date.now;

	module.exports = now;


/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(8),
	    isObject = __webpack_require__(5);

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
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	  // in Safari 8 which returns 'object' for typed array and weak map constructors,
	  // and PhantomJS 1.9 which returns 'function' for `NodeList` instances.
	  var tag = isObject(value) ? objectToString.call(value) : '';
	  return tag == funcTag || tag == genTag;
	}

	module.exports = isFunction;


/***/ },
/* 9 */
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
	 * **Note:** If `leading` and `trailing` options are `true`, `func` is invoked
	 * on the trailing edge of the timeout only if the throttled function is
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
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(11);

	__webpack_require__(12);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _disabled = __webpack_require__(22);

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
/* 11 */
1,
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(21);

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

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'active': false,
	            'disabled': false,
	            'size': 's'
	        };
	    },

	    render: function render() {
	        var _classes;

	        var classes = (_classes = {
	            'xb-ico': true,
	            '_active': this.props.active,
	            '_disabled': this.props.disabled
	        }, _defineProperty(_classes, '_type-' + this.props.type, true), _defineProperty(_classes, '_size-' + this.props.size, true), _classes);

	        classes = (0, _classnames2.default)(classes);

	        var content = this.props.value || this.props.children || String.fromCharCode(160);

	        return React.createElement(
	            'span',
	            { className: classes, 'data-xb-content': this.props._uid },
	            content
	        );
	    }
	}]);

/***/ },
/* 13 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	var context = function () {
	    return this || (1, eval)('this');
	}();

	var xv = exports.xv = context.xv = {};
	var xb = exports.xb = context.xb = {};
	exports.default = context;

/***/ },
/* 14 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_14__;

/***/ },
/* 15 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_15__;

/***/ },
/* 16 */
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
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(18);

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule ReactComponentWithPureRenderMixin
	 */

	'use strict';

	var shallowCompare = __webpack_require__(19);

	/**
	 * If your React component's render function is "pure", e.g. it will render the
	 * same result given the same props and state, provide this Mixin for a
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
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	* @providesModule shallowCompare
	*/

	'use strict';

	var shallowEqual = __webpack_require__(20);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 20 */
/***/ function(module, exports) {

	/**
	 * Copyright 2013-2015, Facebook, Inc.
	 * All rights reserved.
	 *
	 * This source code is licensed under the BSD-style license found in the
	 * LICENSE file in the root directory of this source tree. An additional grant
	 * of patent rights can be found in the PATENTS file in the same directory.
	 *
	 * @providesModule shallowEqual
	 * @typechecks
	 * 
	 */

	'use strict';

	var hasOwnProperty = Object.prototype.hasOwnProperty;

	/**
	 * Performs equality by iterating through keys on an object and returning false
	 * when any key has values which are not strictly equal between the arguments.
	 * Returns true when the values of all keys are strictly equal.
	 */
	function shallowEqual(objA, objB) {
	  if (objA === objB) {
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
	  var bHasOwnProperty = hasOwnProperty.bind(objB);
	  for (var i = 0; i < keysA.length; i++) {
	    if (!bHasOwnProperty(keysA[i]) || objA[keysA[i]] !== objB[keysA[i]]) {
	      return false;
	    }
	  }

	  return true;
	}

	module.exports = shallowEqual;

/***/ },
/* 21 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

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
	exports.default = {};

/***/ },
/* 22 */
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
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(24);

	__webpack_require__(25);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _replaceTextSelection = __webpack_require__(130);

	var _replaceTextSelection2 = _interopRequireDefault(_replaceTextSelection);

	var _disabled = __webpack_require__(22);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _focus = __webpack_require__(131);

	var _focus2 = _interopRequireDefault(_focus);

	var _inputValueState = __webpack_require__(132);

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
/* 24 */
1,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(21);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _filterProps = __webpack_require__(26);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _exportPropTypes = __webpack_require__(127);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _controller = __webpack_require__(128);

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
/* 26 */
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

	var _pickBy = __webpack_require__(27);

	var _pickBy2 = _interopRequireDefault(_pickBy);

	var _transform = __webpack_require__(123);

	var _transform2 = _interopRequireDefault(_transform);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	var baseIteratee = __webpack_require__(28),
	    basePickBy = __webpack_require__(115);

	/**
	 * Creates an object composed of the `object` properties `predicate` returns
	 * truthy for. The predicate is invoked with two arguments: (value, key).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The source object.
	 * @param {Function|Object|string} [predicate=_.identity] The function invoked per property.
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
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(29),
	    baseMatchesProperty = __webpack_require__(98),
	    identity = __webpack_require__(112),
	    isArray = __webpack_require__(85),
	    property = __webpack_require__(113);

	/**
	 * The base implementation of `_.iteratee`.
	 *
	 * @private
	 * @param {*} [value=_.identity] The value to convert to an iteratee.
	 * @returns {Function} Returns the iteratee.
	 */
	function baseIteratee(value) {
	  var type = typeof value;
	  if (type == 'function') {
	    return value;
	  }
	  if (value == null) {
	    return identity;
	  }
	  if (type == 'object') {
	    return isArray(value)
	      ? baseMatchesProperty(value[0], value[1])
	      : baseMatches(value);
	  }
	  return property(value);
	}

	module.exports = baseIteratee;


/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(30),
	    getMatchData = __webpack_require__(93);

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
	    var key = matchData[0][0],
	        value = matchData[0][1];

	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      return object[key] === value &&
	        (value !== undefined || (key in Object(object)));
	    };
	  }
	  return function(object) {
	    return object === source || baseIsMatch(object, source, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(31),
	    baseIsEqual = __webpack_require__(64);

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
	      var stack = new Stack,
	          result = customizer ? customizer(objValue, srcValue, key, object, source, stack) : undefined;

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
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	var stackClear = __webpack_require__(32),
	    stackDelete = __webpack_require__(33),
	    stackGet = __webpack_require__(37),
	    stackHas = __webpack_require__(39),
	    stackSet = __webpack_require__(41);

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

	// Add functions to the `Stack` cache.
	Stack.prototype.clear = stackClear;
	Stack.prototype['delete'] = stackDelete;
	Stack.prototype.get = stackGet;
	Stack.prototype.has = stackHas;
	Stack.prototype.set = stackSet;

	module.exports = Stack;


/***/ },
/* 32 */
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
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	var assocDelete = __webpack_require__(34);

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
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

	/** Used for built-in method references. */
	var arrayProto = Array.prototype;

	/** Built-in value references. */
	var splice = arrayProto.splice;

	/**
	 * Removes `key` and its value from the associative array.
	 *
	 * @private
	 * @param {Array} array The array to query.
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
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(36);

	/**
	 * Gets the index at which the first occurrence of `key` is found in `array`
	 * of key-value pairs.
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
/* 36 */
/***/ function(module, exports) {

	/**
	 * Performs a [`SameValueZero`](http://ecma-international.org/ecma-262/6.0/#sec-samevaluezero)
	 * comparison between two values to determine if they are equivalent.
	 *
	 * @static
	 * @memberOf _
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
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	var assocGet = __webpack_require__(38);

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
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

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
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	var assocHas = __webpack_require__(40);

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
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

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
/* 41 */
/***/ function(module, exports, __webpack_require__) {

	var MapCache = __webpack_require__(42),
	    assocSet = __webpack_require__(62);

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
	 * @returns {Object} Returns the stack cache object.
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
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	var mapClear = __webpack_require__(43),
	    mapDelete = __webpack_require__(54),
	    mapGet = __webpack_require__(58),
	    mapHas = __webpack_require__(60),
	    mapSet = __webpack_require__(61);

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

	// Add functions to the `MapCache`.
	MapCache.prototype.clear = mapClear;
	MapCache.prototype['delete'] = mapDelete;
	MapCache.prototype.get = mapGet;
	MapCache.prototype.has = mapHas;
	MapCache.prototype.set = mapSet;

	module.exports = MapCache;


/***/ },
/* 43 */
/***/ function(module, exports, __webpack_require__) {

	var Hash = __webpack_require__(44),
	    Map = __webpack_require__(50);

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
/* 44 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(45);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Creates an hash object.
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46);

	/* Built-in method references that are verified to be native. */
	var nativeCreate = getNative(Object, 'create');

	module.exports = nativeCreate;


/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(47);

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
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(8),
	    isHostObject = __webpack_require__(48),
	    isObjectLike = __webpack_require__(49);

	/** Used to match `RegExp` [syntax characters](http://ecma-international.org/ecma-262/6.0/#sec-patterns). */
	var reRegExpChar = /[\\^$.*+?()[\]{}|]/g;

	/** Used to detect host constructors (Safari > 5). */
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
	    return reIsNative.test(funcToString.call(value));
	  }
	  return isObjectLike(value) &&
	    (isHostObject(value) ? reIsNative : reIsHostCtor).test(value);
	}

	module.exports = isNative;


/***/ },
/* 48 */
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
/* 49 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is object-like. A value is object-like if it's not `null`
	 * and has a `typeof` result of "object".
	 *
	 * @static
	 * @memberOf _
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
/* 50 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(51);

	/* Built-in method references that are verified to be native. */
	var Map = getNative(root, 'Map');

	module.exports = Map;


/***/ },
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module, global) {var checkGlobal = __webpack_require__(53);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)(module), (function() { return this; }())))

/***/ },
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(50),
	    assocDelete = __webpack_require__(34),
	    hashDelete = __webpack_require__(55),
	    isKeyable = __webpack_require__(57);

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
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var hashHas = __webpack_require__(56);

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
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(45);

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
/* 57 */
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
	  return type == 'number' || type == 'boolean' ||
	    (type == 'string' && value != '__proto__') || value == null;
	}

	module.exports = isKeyable;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(50),
	    assocGet = __webpack_require__(38),
	    hashGet = __webpack_require__(59),
	    isKeyable = __webpack_require__(57);

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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(45);

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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(50),
	    assocHas = __webpack_require__(40),
	    hashHas = __webpack_require__(56),
	    isKeyable = __webpack_require__(57);

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
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(50),
	    assocSet = __webpack_require__(62),
	    hashSet = __webpack_require__(63),
	    isKeyable = __webpack_require__(57);

	/**
	 * Sets the map `key` to `value`.
	 *
	 * @private
	 * @name set
	 * @memberOf MapCache
	 * @param {string} key The key of the value to set.
	 * @param {*} value The value to set.
	 * @returns {Object} Returns the map cache object.
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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var assocIndexOf = __webpack_require__(35);

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
/* 63 */
/***/ function(module, exports, __webpack_require__) {

	var nativeCreate = __webpack_require__(45);

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
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(65),
	    isObject = __webpack_require__(5),
	    isObjectLike = __webpack_require__(49);

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(31),
	    equalArrays = __webpack_require__(66),
	    equalByTag = __webpack_require__(68),
	    equalObjects = __webpack_require__(73),
	    getTag = __webpack_require__(89),
	    isArray = __webpack_require__(85),
	    isHostObject = __webpack_require__(48),
	    isTypedArray = __webpack_require__(92);

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
	 * @param {number} [bitmask] The bitmask of comparison flags. See `baseIsEqual` for more details.
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
	      stack || (stack = new Stack);
	      return equalFunc(objIsWrapped ? object.value() : object, othIsWrapped ? other.value() : other, customizer, bitmask, stack);
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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(67);

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
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual` for more details.
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
	            return arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack);
	          })) {
	        result = false;
	        break;
	      }
	    } else if (!(arrValue === othValue || equalFunc(arrValue, othValue, customizer, bitmask, stack))) {
	      result = false;
	      break;
	    }
	  }
	  stack['delete'](array);
	  return result;
	}

	module.exports = equalArrays;


/***/ },
/* 67 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.some` for arrays without support for iteratee
	 * shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} predicate The function invoked per iteration.
	 * @returns {boolean} Returns `true` if any element passes the predicate check, else `false`.
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
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(69),
	    Uint8Array = __webpack_require__(70),
	    equalArrays = __webpack_require__(66),
	    mapToArray = __webpack_require__(71),
	    setToArray = __webpack_require__(72);

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

	var arrayBufferTag = '[object ArrayBuffer]';

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
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual` for more details.
	 * @param {Object} stack Tracks traversed `object` and `other` objects.
	 * @returns {boolean} Returns `true` if the objects are equivalent, else `false`.
	 */
	function equalByTag(object, other, tag, equalFunc, customizer, bitmask, stack) {
	  switch (tag) {
	    case arrayBufferTag:
	      if ((object.byteLength != other.byteLength) ||
	          !equalFunc(new Uint8Array(object), new Uint8Array(other))) {
	        return false;
	      }
	      return true;

	    case boolTag:
	    case dateTag:
	      // Coerce dates and booleans to numbers, dates to milliseconds and booleans
	      // to `1` or `0` treating invalid dates coerced to `NaN` as not equal.
	      return +object == +other;

	    case errorTag:
	      return object.name == other.name && object.message == other.message;

	    case numberTag:
	      // Treat `NaN` vs. `NaN` as equal.
	      return (object != +object) ? other != +other : object == +other;

	    case regexpTag:
	    case stringTag:
	      // Coerce regexes to strings and treat strings primitives and string
	      // objects as equal. See https://es5.github.io/#x15.10.6.4 for more details.
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
	      // Recursively compare objects (susceptible to call stack limits).
	      return equalArrays(convert(object), convert(other), equalFunc, customizer, bitmask | UNORDERED_COMPARE_FLAG, stack.set(object, other));

	    case symbolTag:
	      if (symbolValueOf) {
	        return symbolValueOf.call(object) == symbolValueOf.call(other);
	      }
	  }
	  return false;
	}

	module.exports = equalByTag;


/***/ },
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(51);

	/** Built-in value references. */
	var Symbol = root.Symbol;

	module.exports = Symbol;


/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(51);

	/** Built-in value references. */
	var Uint8Array = root.Uint8Array;

	module.exports = Uint8Array;


/***/ },
/* 71 */
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
/* 72 */
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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(74),
	    keys = __webpack_require__(75);

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
	 * @param {number} bitmask The bitmask of comparison flags. See `baseIsEqual` for more details.
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
/* 74 */
/***/ function(module, exports) {

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

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
	    (typeof object == 'object' && key in object && getPrototypeOf(object) === null);
	}

	module.exports = baseHas;


/***/ },
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	var baseHas = __webpack_require__(74),
	    baseKeys = __webpack_require__(76),
	    indexKeys = __webpack_require__(77),
	    isArrayLike = __webpack_require__(81),
	    isIndex = __webpack_require__(87),
	    isPrototype = __webpack_require__(88);

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
/* 76 */
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
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var baseTimes = __webpack_require__(78),
	    isArguments = __webpack_require__(79),
	    isArray = __webpack_require__(85),
	    isLength = __webpack_require__(84),
	    isString = __webpack_require__(86);

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
/* 78 */
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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLikeObject = __webpack_require__(80);

	/** `Object#toString` result references. */
	var argsTag = '[object Arguments]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
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
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(81),
	    isObjectLike = __webpack_require__(49);

	/**
	 * This method is like `_.isArrayLike` except that it also checks if `value`
	 * is an object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is an array-like object, else `false`.
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(82),
	    isFunction = __webpack_require__(8),
	    isLength = __webpack_require__(84);

	/**
	 * Checks if `value` is array-like. A value is considered array-like if it's
	 * not a function and has a `value.length` that's an integer greater than or
	 * equal to `0` and less than or equal to `Number.MAX_SAFE_INTEGER`.
	 *
	 * @static
	 * @memberOf _
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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(83);

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
/* 83 */
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
/* 84 */
/***/ function(module, exports) {

	/** Used as references for various `Number` constants. */
	var MAX_SAFE_INTEGER = 9007199254740991;

	/**
	 * Checks if `value` is a valid array-like length.
	 *
	 * **Note:** This function is loosely based on [`ToLength`](http://ecma-international.org/ecma-262/6.0/#sec-tolength).
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a valid length, else `false`.
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
/* 85 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is classified as an `Array` object.
	 *
	 * @static
	 * @memberOf _
	 * @type {Function}
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(85),
	    isObjectLike = __webpack_require__(49);

	/** `Object#toString` result references. */
	var stringTag = '[object String]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	  return typeof value == 'string' ||
	    (!isArray(value) && isObjectLike(value) && objectToString.call(value) == stringTag);
	}

	module.exports = isString;


/***/ },
/* 87 */
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
	  value = (typeof value == 'number' || reIsUint.test(value)) ? +value : -1;
	  length = length == null ? MAX_SAFE_INTEGER : length;
	  return value > -1 && value % 1 == 0 && value < length;
	}

	module.exports = isIndex;


/***/ },
/* 88 */
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var Map = __webpack_require__(50),
	    Set = __webpack_require__(90),
	    WeakMap = __webpack_require__(91);

	/** `Object#toString` result references. */
	var mapTag = '[object Map]',
	    objectTag = '[object Object]',
	    setTag = '[object Set]',
	    weakMapTag = '[object WeakMap]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Used to detect maps, sets, and weakmaps. */
	var mapCtorString = Map ? funcToString.call(Map) : '',
	    setCtorString = Set ? funcToString.call(Set) : '',
	    weakMapCtorString = WeakMap ? funcToString.call(WeakMap) : '';

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

	// Fallback for IE 11 providing `toStringTag` values for maps, sets, and weakmaps.
	if ((Map && getTag(new Map) != mapTag) ||
	    (Set && getTag(new Set) != setTag) ||
	    (WeakMap && getTag(new WeakMap) != weakMapTag)) {
	  getTag = function(value) {
	    var result = objectToString.call(value),
	        Ctor = result == objectTag ? value.constructor : null,
	        ctorString = typeof Ctor == 'function' ? funcToString.call(Ctor) : '';

	    if (ctorString) {
	      switch (ctorString) {
	        case mapCtorString: return mapTag;
	        case setCtorString: return setTag;
	        case weakMapCtorString: return weakMapTag;
	      }
	    }
	    return result;
	  };
	}

	module.exports = getTag;


/***/ },
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(51);

	/* Built-in method references that are verified to be native. */
	var Set = getNative(root, 'Set');

	module.exports = Set;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(46),
	    root = __webpack_require__(51);

	/* Built-in method references that are verified to be native. */
	var WeakMap = getNative(root, 'WeakMap');

	module.exports = WeakMap;


/***/ },
/* 92 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(84),
	    isObjectLike = __webpack_require__(49);

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

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

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
	  return isObjectLike(value) &&
	    isLength(value.length) && !!typedArrayTags[objectToString.call(value)];
	}

	module.exports = isTypedArray;


/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(94),
	    toPairs = __webpack_require__(95);

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
/* 94 */
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
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	var baseToPairs = __webpack_require__(96),
	    keys = __webpack_require__(75);

	/**
	 * Creates an array of own enumerable key-value pairs for `object` which
	 * can be consumed by `_.fromPairs`.
	 *
	 * @static
	 * @memberOf _
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
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var arrayMap = __webpack_require__(97);

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
/* 97 */
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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(64),
	    get = __webpack_require__(99),
	    hasIn = __webpack_require__(106);

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
	  return function(object) {
	    var objValue = get(object, path);
	    return (objValue === undefined && objValue === srcValue)
	      ? hasIn(object, path)
	      : baseIsEqual(srcValue, objValue, undefined, UNORDERED_COMPARE_FLAG | PARTIAL_COMPARE_FLAG);
	  };
	}

	module.exports = baseMatchesProperty;


/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(100);

	/**
	 * Gets the value at `path` of `object`. If the resolved value is
	 * `undefined` the `defaultValue` is used in its place.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @param {*} [defaultValue] The value returned if the resolved value is `undefined`.
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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(101),
	    isKey = __webpack_require__(105);

	/**
	 * The base implementation of `_.get` without support for default values.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path of the property to get.
	 * @returns {*} Returns the resolved value.
	 */
	function baseGet(object, path) {
	  path = isKey(path, object) ? [path + ''] : baseCastPath(path);

	  var index = 0,
	      length = path.length;

	  while (object != null && index < length) {
	    object = object[path[index++]];
	  }
	  return (index && index == length) ? object : undefined;
	}

	module.exports = baseGet;


/***/ },
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(85),
	    stringToPath = __webpack_require__(102);

	/**
	 * Casts `value` to a path array if it's not one.
	 *
	 * @private
	 * @param {*} value The value to inspect.
	 * @returns {Array} Returns the cast property path array.
	 */
	function baseCastPath(value) {
	  return isArray(value) ? value : stringToPath(value);
	}

	module.exports = baseCastPath;


/***/ },
/* 102 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(103);

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
	function stringToPath(string) {
	  var result = [];
	  toString(string).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = stringToPath;


/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(69),
	    isSymbol = __webpack_require__(104);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0;

	/** Used to convert symbols to primitives and strings. */
	var symbolProto = Symbol ? Symbol.prototype : undefined,
	    symbolToString = symbolProto ? symbolProto.toString : undefined;

	/**
	 * Converts `value` to a string if it's not one. An empty string is returned
	 * for `null` and `undefined` values. The sign of `-0` is preserved.
	 *
	 * @static
	 * @memberOf _
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
	  // Exit early for strings to avoid a performance hit in some environments.
	  if (typeof value == 'string') {
	    return value;
	  }
	  if (value == null) {
	    return '';
	  }
	  if (isSymbol(value)) {
	    return symbolToString ? symbolToString.call(value) : '';
	  }
	  var result = (value + '');
	  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
	}

	module.exports = toString;


/***/ },
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(49);

	/** `Object#toString` result references. */
	var symbolTag = '[object Symbol]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/**
	 * Checks if `value` is classified as a `Symbol` primitive or object.
	 *
	 * @static
	 * @memberOf _
	 * @category Lang
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is correctly classified, else `false`.
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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(85);

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
	  if (typeof value == 'number') {
	    return true;
	  }
	  return !isArray(value) &&
	    (reIsPlainProp.test(value) || !reIsDeepProp.test(value) ||
	      (object != null && value in Object(object)));
	}

	module.exports = isKey;


/***/ },
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var baseHasIn = __webpack_require__(107),
	    hasPath = __webpack_require__(108);

	/**
	 * Checks if `path` is a direct or inherited property of `object`.
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The object to query.
	 * @param {Array|string} path The path to check.
	 * @returns {boolean} Returns `true` if `path` exists, else `false`.
	 * @example
	 *
	 * var object = _.create({ 'a': _.create({ 'b': _.create({ 'c': 3 }) }) });
	 *
	 * _.hasIn(object, 'a');
	 * // => true
	 *
	 * _.hasIn(object, 'a.b.c');
	 * // => true
	 *
	 * _.hasIn(object, ['a', 'b', 'c']);
	 * // => true
	 *
	 * _.hasIn(object, 'b');
	 * // => false
	 */
	function hasIn(object, path) {
	  return hasPath(object, path, baseHasIn);
	}

	module.exports = hasIn;


/***/ },
/* 107 */
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var baseCastPath = __webpack_require__(101),
	    isArguments = __webpack_require__(79),
	    isArray = __webpack_require__(85),
	    isIndex = __webpack_require__(87),
	    isKey = __webpack_require__(105),
	    isLength = __webpack_require__(84),
	    isString = __webpack_require__(86),
	    last = __webpack_require__(109),
	    parent = __webpack_require__(110);

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
	  if (object == null) {
	    return false;
	  }
	  var result = hasFunc(object, path);
	  if (!result && !isKey(path)) {
	    path = baseCastPath(path);
	    object = parent(object, path);
	    if (object != null) {
	      path = last(path);
	      result = hasFunc(object, path);
	    }
	  }
	  var length = object ? object.length : undefined;
	  return result || (
	    !!length && isLength(length) && isIndex(path, length) &&
	    (isArray(object) || isString(object) || isArguments(object))
	  );
	}

	module.exports = hasPath;


/***/ },
/* 109 */
/***/ function(module, exports) {

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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var baseSlice = __webpack_require__(111),
	    get = __webpack_require__(99);

	/**
	 * Gets the parent value at `path` of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @param {Array} path The path to get the parent value of.
	 * @returns {*} Returns the parent value.
	 */
	function parent(object, path) {
	  return path.length == 1 ? object : get(object, baseSlice(path, 0, -1));
	}

	module.exports = parent;


/***/ },
/* 111 */
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
/* 112 */
/***/ function(module, exports) {

	/**
	 * This method returns the first argument given to it.
	 *
	 * @static
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
/* 113 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(83),
	    basePropertyDeep = __webpack_require__(114),
	    isKey = __webpack_require__(105);

	/**
	 * Creates a function that returns the value at `path` of a given object.
	 *
	 * @static
	 * @memberOf _
	 * @category Util
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
	 * _.map(_.sortBy(objects, _.property(['a', 'b', 'c'])), 'a.b.c');
	 * // => [1, 2]
	 */
	function property(path) {
	  return isKey(path) ? baseProperty(path) : basePropertyDeep(path);
	}

	module.exports = property;


/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(100);

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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(116);

	/**
	 * The base implementation of  `_.pickBy` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The source object.
	 * @param {Function} predicate The function invoked per property.
	 * @returns {Object} Returns the new object.
	 */
	function basePickBy(object, predicate) {
	  var result = {};
	  baseForIn(object, function(value, key) {
	    if (predicate(value, key)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}

	module.exports = basePickBy;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(117),
	    keysIn = __webpack_require__(119);

	/**
	 * The base implementation of `_.forIn` without support for iteratee shorthands.
	 *
	 * @private
	 * @param {Object} object The object to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @returns {Object} Returns `object`.
	 */
	function baseForIn(object, iteratee) {
	  return object == null ? object : baseFor(object, iteratee, keysIn);
	}

	module.exports = baseForIn;


/***/ },
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(118);

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
/* 118 */
/***/ function(module, exports) {

	/**
	 * Creates a base function for methods like `_.forIn`.
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
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	var baseKeysIn = __webpack_require__(120),
	    indexKeys = __webpack_require__(77),
	    isIndex = __webpack_require__(87),
	    isPrototype = __webpack_require__(88);

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
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	var Reflect = __webpack_require__(121),
	    iteratorToArray = __webpack_require__(122);

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
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	var root = __webpack_require__(51);

	/** Built-in value references. */
	var Reflect = root.Reflect;

	module.exports = Reflect;


/***/ },
/* 122 */
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(124),
	    baseCreate = __webpack_require__(125),
	    baseForOwn = __webpack_require__(126),
	    baseIteratee = __webpack_require__(28),
	    isArray = __webpack_require__(85),
	    isFunction = __webpack_require__(8),
	    isObject = __webpack_require__(5),
	    isTypedArray = __webpack_require__(92);

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * An alternative to `_.reduce`; this method transforms `object` to a new
	 * `accumulator` object which is the result of running each of its own enumerable
	 * properties through `iteratee`, with each invocation potentially mutating
	 * the `accumulator` object. The iteratee is invoked with four arguments:
	 * (accumulator, value, key, object). Iteratee functions may exit iteration
	 * early by explicitly returning `false`.
	 *
	 * @static
	 * @memberOf _
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
	        accumulator = isFunction(Ctor) ? baseCreate(getPrototypeOf(object)) : {};
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
/* 124 */
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
/* 125 */
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
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(117),
	    keys = __webpack_require__(75);

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
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (tagName) {
	    var props = _xblocksCore.utils.propTypes(tagName);
	    var exportProps = {};
	    var prefix = tagName + '-';
	    var p;

	    for (p in props) {
	        if (props.hasOwnProperty(p) && p[0] !== '_') {
	            exportProps[prefix + p] = props[p];
	        }
	    }

	    return {
	        propTypes: exportProps
	    };
	};

	var _xblocksCore = __webpack_require__(15);

/***/ },
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactDom = __webpack_require__(129);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _xblocksCore.view.create({
	    displayName: 'xb-input_controller',

	    mixins: [_reactAddonsPureRenderMixin2.default],

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
/* 129 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_129__;

/***/ },
/* 130 */
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
/* 131 */
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
/* 132 */
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
	                    component.setState({ 'value': String(value) });
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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(134);

	__webpack_require__(135);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _disabled = __webpack_require__(22);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(139);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(140);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focus = __webpack_require__(131);

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
/* 134 */
1,
/* 135 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _resetLastRadioChecked = __webpack_require__(136);

	var _resetLastRadioChecked2 = _interopRequireDefault(_resetLastRadioChecked);

	var _filterProps = __webpack_require__(26);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _exportPropTypes = __webpack_require__(127);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _commonAttrs = __webpack_require__(21);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _content = __webpack_require__(137);

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
	        var classes = _defineProperty({
	            'xb-button': true,
	            '_disabled': this.props.disabled,
	            '_focused': this.state.focused
	        }, '_theme-' + this.props.theme + '_size-' + this.props.size, true);

	        classes = (0, _classnames2.default)(classes);

	        var icoProps = (0, _filterProps2.default)(/^xb-ico-/, this.props);
	        var tabIndex = this.props.tabindex;
	        var type = this.props.type;

	        if (this.props.disabled) {
	            tabIndex = '-1';
	        }

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
	                    defaultChecked: this.props.checked,
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

	                /*
	                children.push(
	                    <xv.Button {...this.props} key="content" type="inline" tabindex="null" />
	                );
	                 classes = classnames({
	                    'xb-button': true,
	                    '_theme-check': true,
	                    '_disabled': this.props.disabled
	                });
	                */
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
/* 136 */
/***/ function(module, exports) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, name) {
	    name = String(name);
	    var lastCheckedElement = checkedCache[name];

	    if (lastCheckedElement && lastCheckedElement !== element) {
	        lastCheckedElement.checked = false;
	    }

	    checkedCache[name] = element;
	};

	var checkedCache = {};

	/**
	 * FIXME don't work cloneNode
	 * @param {HTMLElement} element
	 * @param {string} name
	 */

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _isEmpty = __webpack_require__(138);

	var _isEmpty2 = _interopRequireDefault(_isEmpty);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _xblocksCore.view.create({
	    displayName: 'xb-button_content',

	    mixins: [_reactAddonsPureRenderMixin2.default],

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
/* 138 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(79),
	    isArray = __webpack_require__(85),
	    isArrayLike = __webpack_require__(81),
	    isFunction = __webpack_require__(8),
	    isString = __webpack_require__(86);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/**
	 * Checks if `value` is an empty collection or object. A value is considered
	 * empty if it's an `arguments` object, array, string, or jQuery-like collection
	 * with a length of `0` or has no own enumerable properties.
	 *
	 * @static
	 * @memberOf _
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
	      (isArray(value) || isString(value) ||
	        isFunction(value.splice) || isArguments(value))) {
	    return !value.length;
	  }
	  for (var key in value) {
	    if (hasOwnProperty.call(value, key)) {
	      return false;
	    }
	  }
	  return true;
	}

	module.exports = isEmpty;


/***/ },
/* 139 */
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
/* 140 */
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
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(142);

	__webpack_require__(143);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _disabled = __webpack_require__(22);

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
/* 142 */
1,
/* 143 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(21);

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

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'disabled': false,
	            'tabindex': '1',
	            'target': '_self',
	            'theme': 'normal'
	        };
	    },

	    render: function render() {
	        var classes = _defineProperty({
	            'xb-link': true,
	            '_disabled': this.props.disabled
	        }, '_theme-' + this.props.theme, true);

	        classes = (0, _classnames2.default)(classes);

	        var tabIndex = this.props.tabindex;

	        if (this.props.disabled) {
	            tabIndex = '-1';
	        }

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
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(145);

	__webpack_require__(146);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _disabled = __webpack_require__(22);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(139);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(140);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focus = __webpack_require__(131);

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
/* 145 */
1,
/* 146 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(21);

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
	        var classes = _defineProperty({
	            'xb-checkbox': true,
	            '_disabled': this.props.disabled
	        }, '_size-' + this.props.size, true);

	        classes = (0, _classnames2.default)(classes);

	        var tabIndex = this.props.tabindex;

	        if (this.props.disabled) {
	            tabIndex = '-1';
	        }

	        return React.createElement(
	            'label',
	            { className: classes,
	                title: this.props.title,
	                htmlFor: this.props['for'] },
	            React.createElement('input', {
	                autoFocus: this.props.autofocus,
	                checked: this.state.checked,
	                className: '_controller',
	                defaultChecked: this.props.checked,
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
/* 147 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(148);

	__webpack_require__(149);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _disabled = __webpack_require__(22);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(139);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(140);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focus = __webpack_require__(131);

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
/* 148 */
1,
/* 149 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _resetLastRadioChecked = __webpack_require__(136);

	var _resetLastRadioChecked2 = _interopRequireDefault(_resetLastRadioChecked);

	var _commonAttrs = __webpack_require__(21);

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
	        var classes = _defineProperty({
	            'xb-radio': true,
	            '_disabled': this.props.disabled
	        }, '_size-' + this.props.size, true);

	        classes = (0, _classnames2.default)(classes);

	        var tabIndex = this.props.tabindex;

	        if (this.props.disabled) {
	            tabIndex = '-1';
	        }

	        return React.createElement(
	            'label',
	            { className: classes,
	                title: this.props.title,
	                htmlFor: this.props['for'] },
	            React.createElement('input', {
	                autoFocus: this.props.autofocus,
	                checked: this.state.checked,
	                className: '_controller',
	                defaultChecked: this.props.checked,
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
/* 150 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(151);

	__webpack_require__(152);

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	var _tether = __webpack_require__(153);

	var _tether2 = _interopRequireDefault(_tether);

	var _xblocksCore = __webpack_require__(15);

	var _tetherDefaultOptions = __webpack_require__(154);

	var _tetherDefaultOptions2 = _interopRequireDefault(_tetherDefaultOptions);

	var _assign = __webpack_require__(155);

	var _assign2 = _interopRequireDefault(_assign);

	var _src = __webpack_require__(164);

	var _src2 = _interopRequireDefault(_src);

	var _focus = __webpack_require__(131);

	var _focus2 = _interopRequireDefault(_focus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var popupCommon = {
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
	 * @constructor
	 * @augments HTMLElement
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
	            _src2.default.setImmediate(popupCommon.onOpen.bind(this));

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
	            _src2.default.setImmediate(popupCommon.onClose.bind(this));

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
/* 151 */
1,
/* 152 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactDom = __webpack_require__(129);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(21);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'close': false,
	            'theme': 'normal'
	        };
	    },

	    onClickClose: function onClickClose() {
	        _xblocksCore.event.dispatch(_reactDom2.default.findDOMNode(this), 'jsx-click-close', { 'bubbles': true, 'cancelable': true });
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

	        var classes = {
	            '_popup': true
	        };

	        if (this.props.theme) {
	            classes['_theme-' + this.props.theme] = true;
	        }

	        classes = (0, _classnames2.default)(classes);

	        return React.createElement(
	            'div',
	            { className: classes, tabIndex: '0' },
	            children
	        );
	    }
	}]);

/***/ },
/* 153 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_153__;

/***/ },
/* 154 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
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
	};

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(156),
	    copyObject = __webpack_require__(157),
	    createAssigner = __webpack_require__(159),
	    isArrayLike = __webpack_require__(81),
	    isPrototype = __webpack_require__(88),
	    keys = __webpack_require__(75);

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to check objects for own properties. */
	var hasOwnProperty = objectProto.hasOwnProperty;

	/** Built-in value references. */
	var propertyIsEnumerable = objectProto.propertyIsEnumerable;

	/** Detect if properties shadowing those on `Object.prototype` are non-enumerable. */
	var nonEnumShadows = !propertyIsEnumerable.call({ 'valueOf': 1 }, 'valueOf');

	/**
	 * Assigns own enumerable properties of source objects to the destination
	 * object. Source objects are applied from left to right. Subsequent sources
	 * overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object` and is loosely based on
	 * [`Object.assign`](https://mdn.io/Object/assign).
	 *
	 * @static
	 * @memberOf _
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @returns {Object} Returns `object`.
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
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(36);

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
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	var copyObjectWith = __webpack_require__(158);

	/**
	 * Copies properties of `source` to `object`.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @returns {Object} Returns `object`.
	 */
	function copyObject(source, props, object) {
	  return copyObjectWith(source, props, object);
	}

	module.exports = copyObject;


/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	var assignValue = __webpack_require__(156);

	/**
	 * This function is like `copyObject` except that it accepts a function to
	 * customize copied values.
	 *
	 * @private
	 * @param {Object} source The object to copy properties from.
	 * @param {Array} props The property names to copy.
	 * @param {Object} [object={}] The object to copy properties to.
	 * @param {Function} [customizer] The function to customize copied values.
	 * @returns {Object} Returns `object`.
	 */
	function copyObjectWith(source, props, object, customizer) {
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

	module.exports = copyObjectWith;


/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	var isIterateeCall = __webpack_require__(160),
	    rest = __webpack_require__(161);

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
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(36),
	    isArrayLike = __webpack_require__(81),
	    isIndex = __webpack_require__(87),
	    isObject = __webpack_require__(5);

	/**
	 * Checks if the given arguments are from an iteratee call.
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
	    return eq(object[index], value);
	  }
	  return false;
	}

	module.exports = isIterateeCall;


/***/ },
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	var apply = __webpack_require__(162),
	    toInteger = __webpack_require__(163);

	/** Used as the `TypeError` message for "Functions" methods. */
	var FUNC_ERROR_TEXT = 'Expected a function';

	/* Built-in method references for those with the same name as other `lodash` methods. */
	var nativeMax = Math.max;

	/**
	 * Creates a function that invokes `func` with the `this` binding of the
	 * created function and arguments from `start` and beyond provided as an array.
	 *
	 * **Note:** This method is based on the [rest parameter](https://mdn.io/rest_parameters).
	 *
	 * @static
	 * @memberOf _
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
/* 162 */
/***/ function(module, exports) {

	/**
	 * A faster alternative to `Function#apply`, this function invokes `func`
	 * with the `this` binding of `thisArg` and the arguments of `args`.
	 *
	 * @private
	 * @param {Function} func The function to invoke.
	 * @param {*} thisArg The `this` binding of `func`.
	 * @param {...*} args The arguments to invoke `func` with.
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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	var toNumber = __webpack_require__(7);

	/** Used as references for various `Number` constants. */
	var INFINITY = 1 / 0,
	    MAX_INTEGER = 1.7976931348623157e+308;

	/**
	 * Converts `value` to an integer.
	 *
	 * **Note:** This function is loosely based on [`ToInteger`](http://www.ecma-international.org/ecma-262/6.0/#sec-tointeger).
	 *
	 * @static
	 * @memberOf _
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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);
	var useNative = __webpack_require__(166);
	var Timer = __webpack_require__(167);
	var setTimeoutPolifill = __webpack_require__(168);
	var polifills = [
	    __webpack_require__(169),
	    __webpack_require__(170),
	    __webpack_require__(171),
	    __webpack_require__(172),
	    __webpack_require__(173)
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
/* 165 */
/***/ function(module, exports) {

	/*jshint -W067*/
	'use strict';

	module.exports = (function() {
	    return this || (1, eval)('this');
	})();


/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	var context = __webpack_require__(165);

	// @see http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/
	module.exports = function() {
	    return !(context.navigator && /Trident|Edge/.test(context.navigator.userAgent));
	};


/***/ },
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);

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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);
	var Timer = __webpack_require__(167);

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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);
	var Timer = __webpack_require__(167);

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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);
	var Timer = __webpack_require__(167);

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
/* 171 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);
	var Timer = __webpack_require__(167);

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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);
	var Timer = __webpack_require__(167);

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
/* 173 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(165);
	var Timer = __webpack_require__(167);

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
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(175);

	__webpack_require__(176);

	__webpack_require__(185);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _lazyFocus = __webpack_require__(190);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _tetherDefaultOptions2 = __webpack_require__(154);

	var _tetherDefaultOptions3 = _interopRequireDefault(_tetherDefaultOptions2);

	var _popup = __webpack_require__(150);

	var _popup2 = _interopRequireDefault(_popup);

	var _Table = __webpack_require__(191);

	var _Table2 = _interopRequireDefault(_Table);

	var _getParentMenu = __webpack_require__(226);

	var _getParentMenu2 = _interopRequireDefault(_getParentMenu);

	var _src = __webpack_require__(164);

	var _src2 = _interopRequireDefault(_src);

	var _menu = __webpack_require__(227);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var forEach = Array.prototype.forEach;

	var menuCommon = {

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
	            this._xbFocus = new _Table2.default(this, {
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
	            get: menuCommon.tetherDefaultOptions
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
	            forEach.call(this.querySelectorAll('.xb-menu-target.xb-menu-enabled'), menuCommon.closeSubmenu);
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
/* 175 */
1,
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(21);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _menu = __webpack_require__(177);

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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _xblocksCore = __webpack_require__(15);

	var _throttle = __webpack_require__(9);

	var _throttle2 = _interopRequireDefault(_throttle);

	var _throttleAnimationFrame = __webpack_require__(178);

	var _throttleAnimationFrame2 = _interopRequireDefault(_throttleAnimationFrame);

	var _requestAnimationFrame = __webpack_require__(179);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Common interface for views xb-menu and xb-menu-inline
	 *
	 * @type {Object}
	 */
	exports.default = {
	    getInitialState: function getInitialState() {
	        return {
	            'maxHeight': 0,
	            'isShowScrollTop': false,
	            'isShowScrollBottom': false
	        };
	    },

	    componentWillMount: function componentWillMount() {
	        this._enterTopFrame = 0;
	        this._enterBottomFrame = 0;
	        this._lockScroll = false;
	        this._onScroll = (0, _throttleAnimationFrame2.default)(this._onScroll);
	        this._onScrollThrottle = (0, _throttle2.default)(this._onScrollThrottle, 500, {
	            'leading': true,
	            'trailing': false
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
	            var contentNode = this.refs.content;
	            var element = contentNode.children[size - 1];

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

	    _redrawScrollNavigator: function _redrawScrollNavigator(callback) {
	        var target = this.refs.content;
	        var safeArea = 5;
	        var height = Math.max(target.scrollHeight, target.clientHeight);
	        var isShowScrollTop = target.scrollTop > safeArea;
	        var isShowScrollBottom = target.scrollTop + target.clientHeight < height - safeArea;

	        this.setState({
	            'isShowScrollTop': isShowScrollTop,
	            'isShowScrollBottom': isShowScrollBottom
	        }, this._redrawScrollNavigatorSuccess.bind(this, callback));
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
	        var content = this.refs.content;
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
	        _xblocksCore.event.dispatch(this.refs.content, 'jsx-scroll-throttle', { 'bubbles': true, 'cancelable': true });
	    },

	    _animationScrollTop: function _animationScrollTop() {
	        this.refs.content.scrollTop--;
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
	        this.refs.content.scrollTop++;
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
	        var content = this.refs.content;
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
	        var classes = {
	            '_popup': true
	        };

	        classes = (0, _classnames2.default)(classes);

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
	            React.createElement('div', { ref: 'content',
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
/* 178 */
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

	var _requestAnimationFrame = __webpack_require__(179);

/***/ },
/* 179 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = undefined;

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	var _vendor = __webpack_require__(180);

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
/* 180 */
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
	        vendor = vendors[x];
	        if (context[vendor + name]) {
	            return context[vendor + name];
	        }
	    }
	};

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	var _capitalize = __webpack_require__(181);

	var _capitalize2 = _interopRequireDefault(_capitalize);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var vendors = ['ms', 'moz', 'webkit', 'o'];

	/**
	 * @param {string} name
	 * @param {Object} [context]
	 * @returns {*}
	 */

/***/ },
/* 181 */
/***/ function(module, exports, __webpack_require__) {

	var toString = __webpack_require__(103),
	    upperFirst = __webpack_require__(182);

	/**
	 * Converts the first character of `string` to upper case and the remaining
	 * to lower case.
	 *
	 * @static
	 * @memberOf _
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
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	var createCaseFirst = __webpack_require__(183);

	/**
	 * Converts the first character of `string` to upper case.
	 *
	 * @static
	 * @memberOf _
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
/* 183 */
/***/ function(module, exports, __webpack_require__) {

	var stringToArray = __webpack_require__(184),
	    toString = __webpack_require__(103);

	/** Used to compose unicode character classes. */
	var rsAstralRange = '\\ud800-\\udfff',
	    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
	    rsComboSymbolsRange = '\\u20d0-\\u20f0',
	    rsVarRange = '\\ufe0e\\ufe0f';

	/** Used to compose unicode capture groups. */
	var rsZWJ = '\\u200d';

	/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
	var reHasComplexSymbol = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

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

	    var chr = strSymbols ? strSymbols[0] : string.charAt(0),
	        trailing = strSymbols ? strSymbols.slice(1).join('') : string.slice(1);

	    return chr[methodName]() + trailing;
	  };
	}

	module.exports = createCaseFirst;


/***/ },
/* 184 */
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
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	var _delegate = __webpack_require__(186);

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
/* 186 */
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

	var _delegateMatch = __webpack_require__(187);

	var _delegateMatch2 = _interopRequireDefault(_delegateMatch);

	var _wrap = __webpack_require__(189);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 187 */
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

	var _matchesSelector = __webpack_require__(188);

	var _matchesSelector2 = _interopRequireDefault(_matchesSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 188 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, selector) {
	    return element.nodeType === 1 ? matches.call(element, selector) : false;
	};

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	var _vendor = __webpack_require__(180);

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
/* 189 */
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

	var _context = __webpack_require__(13);

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
/* 190 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (node) {
	  _context2.default.setTimeout(node.focus.bind(node), 0);
	};

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 191 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _xblocksCore = __webpack_require__(15);

	var _delegate = __webpack_require__(186);

	var _delegate2 = _interopRequireDefault(_delegate);

	var _filterClick = __webpack_require__(192);

	var _filterClick2 = _interopRequireDefault(_filterClick);

	var _filterMouse = __webpack_require__(193);

	var _filterMouse2 = _interopRequireDefault(_filterMouse);

	var _matchesSelector = __webpack_require__(188);

	var _matchesSelector2 = _interopRequireDefault(_matchesSelector);

	var _eachAfter = __webpack_require__(194);

	var _eachAfter2 = _interopRequireDefault(_eachAfter);

	var _eachBefore = __webpack_require__(197);

	var _eachBefore2 = _interopRequireDefault(_eachBefore);

	var _index = __webpack_require__(199);

	var _index2 = _interopRequireDefault(_index);

	var _merge = __webpack_require__(200);

	var _merge2 = _interopRequireDefault(_merge);

	var _throttle = __webpack_require__(9);

	var _throttle2 = _interopRequireDefault(_throttle);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var pop = Array.prototype.pop;
	var slice = Array.prototype.slice;

	exports.default = Table;


	function Table(node, options) {
	    this._options = (0, _merge2.default)({
	        'col': 'xb-menu:not([disabled])',
	        'row': 'xb-menuitem:not([disabled])',
	        'colLoop': false,
	        'rowLoop': false
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
	            _xblocksCore.event.dispatch(item, this.EVENT_BLUR);
	        }
	    },

	    getItem: function getItem() {
	        return this._item;
	    },

	    blurItem: function blurItem() {
	        if (this._item) {
	            var item = this._item;
	            this._item = undefined;
	            _xblocksCore.event.dispatch(item, this.EVENT_BLUR);
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
	            if ((0, _matchesSelector2.default)(col, this._options.col)) {
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
	        if ((0, _matchesSelector2.default)(element, this._options.col)) {
	            data.col = element;
	            return false;
	        }
	    },

	    _colNext: function _colNext(col) {
	        var data = {};
	        (0, _eachAfter2.default)(col, this._colMatchIterate.bind(this, data), this._node, false);
	        return data.col;
	    },

	    _colPrev: function _colPrev(col) {
	        var data = {};
	        (0, _eachBefore2.default)(col, this._colMatchIterate.bind(this, data), this._node, false);
	        return data.col;
	    },

	    _rowFirst: function _rowFirst(col) {
	        return col.querySelector(this._options.row);
	    },

	    _rowLast: function _rowLast(col) {
	        return pop.call(slice.call(col.querySelectorAll(this._options.row)));
	    },

	    _rowMatchIterate: function _rowMatchIterate(data, element) {
	        if ((0, _matchesSelector2.default)(element, this._options.row)) {
	            data.row = element;
	            return false;
	        }
	    },

	    _rowNext: function _rowNext(row) {
	        var data = {};
	        (0, _eachAfter2.default)(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
	        return data.row;
	    },

	    _rowPrev: function _rowPrev(row) {
	        var data = {};
	        (0, _eachBefore2.default)(row, this._rowMatchIterate.bind(this, data), this._col(row), false);
	        return data.row;
	    },

	    _rowIndex: function _rowIndex(row) {
	        return (0, _index2.default)(this._options.row, row, this._col(row));
	    },

	    _rowByIndex: function _rowByIndex(col, idx) {
	        return col.querySelectorAll(this._options.row)[idx];
	    },

	    _focus: function _focus(element) {
	        if (element === this._item) {
	            return;
	        }

	        if (this._item) {
	            _xblocksCore.event.dispatch(this._item, this.EVENT_BLUR, {
	                'detail': { 'originalEvent': this._originalEvent }
	            });
	        }

	        this._item = element;
	        _xblocksCore.event.dispatch(this._item, this.EVENT_FOCUS, {
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
	        (0, _filterMouse2.default)(event.delegateElement, event, this._onMouseAction.bind(this));
	    },

	    _onMouseout: function _onMouseout(event) {
	        (0, _filterMouse2.default)(event.delegateElement, event, this._onMouseAction.bind(this));
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
/* 192 */
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

	var _wrap = __webpack_require__(189);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 193 */
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

	var _wrap = __webpack_require__(189);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 194 */
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

	var _isParent = __webpack_require__(195);

	var _isParent2 = _interopRequireDefault(_isParent);

	var _eachInnerFollowing = __webpack_require__(196);

	var _eachInnerFollowing2 = _interopRequireDefault(_eachInnerFollowing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 195 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

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
/* 196 */
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
/* 197 */
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

	var _isParent = __webpack_require__(195);

	var _isParent2 = _interopRequireDefault(_isParent);

	var _eachInnerPrevious = __webpack_require__(198);

	var _eachInnerPrevious2 = _interopRequireDefault(_eachInnerPrevious);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 198 */
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
/* 199 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (selector, element, context) {
	  context = context || _context2.default.document;
	  return indexOf.call(context.querySelectorAll(selector), element);
	};

	var _context = __webpack_require__(13);

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
/* 200 */
/***/ function(module, exports, __webpack_require__) {

	var baseMerge = __webpack_require__(201),
	    createAssigner = __webpack_require__(159);

	/**
	 * This method is like `_.assign` except that it recursively merges own and
	 * inherited enumerable properties of source objects into the destination
	 * object. Source properties that resolve to `undefined` are skipped if a
	 * destination value exists. Array and plain object properties are merged
	 * recursively.Other objects and value types are overridden by assignment.
	 * Source objects are applied from left to right. Subsequent sources
	 * overwrite property assignments of previous sources.
	 *
	 * **Note:** This method mutates `object`.
	 *
	 * @static
	 * @memberOf _
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
/* 201 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(31),
	    arrayEach = __webpack_require__(124),
	    assignMergeValue = __webpack_require__(202),
	    baseMergeDeep = __webpack_require__(203),
	    isArray = __webpack_require__(85),
	    isObject = __webpack_require__(5),
	    isTypedArray = __webpack_require__(92),
	    keysIn = __webpack_require__(119);

	/**
	 * The base implementation of `_.merge` without support for multiple sources.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {number} srcIndex The index of `source`.
	 * @param {Function} [customizer] The function to customize merged values.
	 * @param {Object} [stack] Tracks traversed source values and their merged counterparts.
	 */
	function baseMerge(object, source, srcIndex, customizer, stack) {
	  if (object === source) {
	    return;
	  }
	  var props = (isArray(source) || isTypedArray(source))
	    ? undefined
	    : keysIn(source);

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
/* 202 */
/***/ function(module, exports, __webpack_require__) {

	var eq = __webpack_require__(36);

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
/* 203 */
/***/ function(module, exports, __webpack_require__) {

	var assignMergeValue = __webpack_require__(202),
	    baseClone = __webpack_require__(204),
	    copyArray = __webpack_require__(207),
	    isArguments = __webpack_require__(79),
	    isArray = __webpack_require__(85),
	    isArrayLikeObject = __webpack_require__(80),
	    isFunction = __webpack_require__(8),
	    isObject = __webpack_require__(5),
	    isPlainObject = __webpack_require__(224),
	    isTypedArray = __webpack_require__(92),
	    toPlainObject = __webpack_require__(225);

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
	 * @param {Object} [stack] Tracks traversed source values and their merged counterparts.
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
	        newValue = baseClone(srcValue, !customizer);
	      }
	    }
	    else if (isPlainObject(srcValue) || isArguments(srcValue)) {
	      if (isArguments(objValue)) {
	        newValue = toPlainObject(objValue);
	      }
	      else if (!isObject(objValue) || (srcIndex && isFunction(objValue))) {
	        isCommon = false;
	        newValue = baseClone(srcValue, !customizer);
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
/* 204 */
/***/ function(module, exports, __webpack_require__) {

	var Stack = __webpack_require__(31),
	    arrayEach = __webpack_require__(124),
	    assignValue = __webpack_require__(156),
	    baseAssign = __webpack_require__(205),
	    baseForOwn = __webpack_require__(126),
	    cloneBuffer = __webpack_require__(206),
	    copyArray = __webpack_require__(207),
	    copySymbols = __webpack_require__(208),
	    getTag = __webpack_require__(89),
	    initCloneArray = __webpack_require__(210),
	    initCloneByTag = __webpack_require__(211),
	    initCloneObject = __webpack_require__(221),
	    isArray = __webpack_require__(85),
	    isBuffer = __webpack_require__(222),
	    isHostObject = __webpack_require__(48),
	    isObject = __webpack_require__(5);

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
	cloneableTags[arrayBufferTag] = cloneableTags[boolTag] =
	cloneableTags[dateTag] = cloneableTags[float32Tag] =
	cloneableTags[float64Tag] = cloneableTags[int8Tag] =
	cloneableTags[int16Tag] = cloneableTags[int32Tag] =
	cloneableTags[mapTag] = cloneableTags[numberTag] =
	cloneableTags[objectTag] = cloneableTags[regexpTag] =
	cloneableTags[setTag] = cloneableTags[stringTag] =
	cloneableTags[symbolTag] = cloneableTags[uint8Tag] =
	cloneableTags[uint8ClampedTag] = cloneableTags[uint16Tag] =
	cloneableTags[uint32Tag] = true;
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
	        result = baseAssign(result, value);
	        return isFull ? copySymbols(value, result) : result;
	      }
	    } else {
	      if (!cloneableTags[tag]) {
	        return object ? value : {};
	      }
	      result = initCloneByTag(value, tag, isDeep);
	    }
	  }
	  // Check for circular references and return its corresponding clone.
	  stack || (stack = new Stack);
	  var stacked = stack.get(value);
	  if (stacked) {
	    return stacked;
	  }
	  stack.set(value, result);

	  // Recursively populate clone (susceptible to call stack limits).
	  (isArr ? arrayEach : baseForOwn)(value, function(subValue, key) {
	    assignValue(result, key, baseClone(subValue, isDeep, isFull, customizer, key, value, stack));
	  });
	  return (isFull && !isArr) ? copySymbols(value, result) : result;
	}

	module.exports = baseClone;


/***/ },
/* 205 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(157),
	    keys = __webpack_require__(75);

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
/* 206 */
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
/* 207 */
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
/* 208 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(157),
	    getSymbols = __webpack_require__(209);

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
/* 209 */
/***/ function(module, exports) {

	/** Built-in value references. */
	var getOwnPropertySymbols = Object.getOwnPropertySymbols;

	/**
	 * Creates an array of the own symbol properties of `object`.
	 *
	 * @private
	 * @param {Object} object The object to query.
	 * @returns {Array} Returns the array of symbols.
	 */
	var getSymbols = getOwnPropertySymbols || function() {
	  return [];
	};

	module.exports = getSymbols;


/***/ },
/* 210 */
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
/* 211 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(212),
	    cloneMap = __webpack_require__(213),
	    cloneRegExp = __webpack_require__(216),
	    cloneSet = __webpack_require__(217),
	    cloneSymbol = __webpack_require__(219),
	    cloneTypedArray = __webpack_require__(220);

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
	 * @param {boolean} [isDeep] Specify a deep clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneByTag(object, tag, isDeep) {
	  var Ctor = object.constructor;
	  switch (tag) {
	    case arrayBufferTag:
	      return cloneArrayBuffer(object);

	    case boolTag:
	    case dateTag:
	      return new Ctor(+object);

	    case float32Tag: case float64Tag:
	    case int8Tag: case int16Tag: case int32Tag:
	    case uint8Tag: case uint8ClampedTag: case uint16Tag: case uint32Tag:
	      return cloneTypedArray(object, isDeep);

	    case mapTag:
	      return cloneMap(object);

	    case numberTag:
	    case stringTag:
	      return new Ctor(object);

	    case regexpTag:
	      return cloneRegExp(object);

	    case setTag:
	      return cloneSet(object);

	    case symbolTag:
	      return cloneSymbol(object);
	  }
	}

	module.exports = initCloneByTag;


/***/ },
/* 212 */
/***/ function(module, exports, __webpack_require__) {

	var Uint8Array = __webpack_require__(70);

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
/* 213 */
/***/ function(module, exports, __webpack_require__) {

	var addMapEntry = __webpack_require__(214),
	    arrayReduce = __webpack_require__(215),
	    mapToArray = __webpack_require__(71);

	/**
	 * Creates a clone of `map`.
	 *
	 * @private
	 * @param {Object} map The map to clone.
	 * @returns {Object} Returns the cloned map.
	 */
	function cloneMap(map) {
	  return arrayReduce(mapToArray(map), addMapEntry, new map.constructor);
	}

	module.exports = cloneMap;


/***/ },
/* 214 */
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
/* 215 */
/***/ function(module, exports) {

	/**
	 * A specialized version of `_.reduce` for arrays without support for
	 * iteratee shorthands.
	 *
	 * @private
	 * @param {Array} array The array to iterate over.
	 * @param {Function} iteratee The function invoked per iteration.
	 * @param {*} [accumulator] The initial value.
	 * @param {boolean} [initAccum] Specify using the first element of `array` as the initial value.
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
/* 216 */
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
/* 217 */
/***/ function(module, exports, __webpack_require__) {

	var addSetEntry = __webpack_require__(218),
	    arrayReduce = __webpack_require__(215),
	    setToArray = __webpack_require__(72);

	/**
	 * Creates a clone of `set`.
	 *
	 * @private
	 * @param {Object} set The set to clone.
	 * @returns {Object} Returns the cloned set.
	 */
	function cloneSet(set) {
	  return arrayReduce(setToArray(set), addSetEntry, new set.constructor);
	}

	module.exports = cloneSet;


/***/ },
/* 218 */
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
/* 219 */
/***/ function(module, exports, __webpack_require__) {

	var Symbol = __webpack_require__(69);

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
/* 220 */
/***/ function(module, exports, __webpack_require__) {

	var cloneArrayBuffer = __webpack_require__(212);

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
/* 221 */
/***/ function(module, exports, __webpack_require__) {

	var baseCreate = __webpack_require__(125),
	    isPrototype = __webpack_require__(88);

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Initializes an object clone.
	 *
	 * @private
	 * @param {Object} object The object to clone.
	 * @returns {Object} Returns the initialized clone.
	 */
	function initCloneObject(object) {
	  return (typeof object.constructor == 'function' && !isPrototype(object))
	    ? baseCreate(getPrototypeOf(object))
	    : {};
	}

	module.exports = initCloneObject;


/***/ },
/* 222 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(module) {var constant = __webpack_require__(223),
	    root = __webpack_require__(51);

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

	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(52)(module)))

/***/ },
/* 223 */
/***/ function(module, exports) {

	/**
	 * Creates a function that returns `value`.
	 *
	 * @static
	 * @memberOf _
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
/* 224 */
/***/ function(module, exports, __webpack_require__) {

	var isHostObject = __webpack_require__(48),
	    isObjectLike = __webpack_require__(49);

	/** `Object#toString` result references. */
	var objectTag = '[object Object]';

	/** Used for built-in method references. */
	var objectProto = Object.prototype;

	/** Used to resolve the decompiled source of functions. */
	var funcToString = Function.prototype.toString;

	/** Used to infer the `Object` constructor. */
	var objectCtorString = funcToString.call(Object);

	/**
	 * Used to resolve the [`toStringTag`](http://ecma-international.org/ecma-262/6.0/#sec-object.prototype.tostring)
	 * of values.
	 */
	var objectToString = objectProto.toString;

	/** Built-in value references. */
	var getPrototypeOf = Object.getPrototypeOf;

	/**
	 * Checks if `value` is a plain object, that is, an object created by the
	 * `Object` constructor or one with a `[[Prototype]]` of `null`.
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
	  if (!isObjectLike(value) ||
	      objectToString.call(value) != objectTag || isHostObject(value)) {
	    return false;
	  }
	  var proto = getPrototypeOf(value);
	  if (proto === null) {
	    return true;
	  }
	  var Ctor = proto.constructor;
	  return (typeof Ctor == 'function' &&
	    Ctor instanceof Ctor && funcToString.call(Ctor) == objectCtorString);
	}

	module.exports = isPlainObject;


/***/ },
/* 225 */
/***/ function(module, exports, __webpack_require__) {

	var copyObject = __webpack_require__(157),
	    keysIn = __webpack_require__(119);

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
	  return copyObject(value, keysIn(value));
	}

	module.exports = toPlainObject;


/***/ },
/* 226 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (node) {
	    var parent = node;

	    while (parent) {
	        if (parent.xtagName === 'xb-menu' || parent.xtagName === 'xb-menu-inline') {
	            return parent;
	        }

	        parent = parent.parentNode;
	    }

	    return null;
	};

/***/ },
/* 227 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lazyFocus = __webpack_require__(190);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _isParent = __webpack_require__(195);

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
/* 228 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(229);

	__webpack_require__(230);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

	var _lazyFocus = __webpack_require__(190);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _Table = __webpack_require__(191);

	var _Table2 = _interopRequireDefault(_Table);

	var _noop = __webpack_require__(231);

	var _noop2 = _interopRequireDefault(_noop);

	var _menu = __webpack_require__(227);

	var _menu2 = _interopRequireDefault(_menu);

	var _focus = __webpack_require__(131);

	var _focus2 = _interopRequireDefault(_focus);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var menuCommon = {
	    init: function init() {
	        if (this._xbFocus) {
	            this._xbFocus.destroy();
	        }

	        this._xbFocus = new _Table2.default(this, {
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
	exports.default = _context.xb.MenuInline = (0, _xblocksCore.create)('xb-menu-inline', [_focus2.default, _menu2.default, {
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
	        open: _noop2.default,

	        close: function close() {
	            // FireFox does not fire a blur event
	            (0, _lazyFocus2.default)(this);
	        }
	    }
	}]);

/***/ },
/* 229 */
1,
/* 230 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(21);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _menu = __webpack_require__(177);

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
/* 231 */
/***/ function(module, exports) {

	/**
	 * A no-operation function that returns `undefined` regardless of the
	 * arguments it receives.
	 *
	 * @static
	 * @memberOf _
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
/* 232 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(233);

	__webpack_require__(234);

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(15);

	var _lazyFocus = __webpack_require__(190);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _getParentMenu = __webpack_require__(226);

	var _getParentMenu2 = _interopRequireDefault(_getParentMenu);

	var _merge = __webpack_require__(200);

	var _merge2 = _interopRequireDefault(_merge);

	var _removeChild = __webpack_require__(235);

	var _removeChild2 = _interopRequireDefault(_removeChild);

	var _disabled = __webpack_require__(22);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _inputValueProps = __webpack_require__(140);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var menuitemCommon = {
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

	                    menuitemCommon.submenu.cancel();
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
	 * @listens xblocks.utils:Table~event:xb-focus
	 * @listens xblocks.utils:Table~event:xb-blur
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
	            menuitemCommon.submenu.remove.call(this);
	            this.submenu = Boolean(this.content.trim());
	        },

	        /**
	         * @callback
	         */
	        'xb-repaint': menuitemCommon.submenu.remove,

	        /**
	         * @callback
	         */
	        'xb-destroy': menuitemCommon.submenu.remove,

	        /**
	         * @callback
	         */
	        'xb-blur': function xbBlur() {
	            this.focused = false;

	            menuitemCommon.submenu.cancel();

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

	            // open the submenu only event-mouse
	            if (event.detail.originalEvent.type !== 'keydown') {
	                menuitemCommon.submenu.open(this.submenuInstance);

	                // scroll menu only keyboard events
	            } else {
	                    this.menuInstance.scrollIntoItem(this);
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
	                    var attrs = (0, _merge2.default)({ 'target': '.' + targetClassName }, menuitemCommon.submenuAttrs);

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
/* 233 */
1,
/* 234 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _reactAddonsPureRenderMixin = __webpack_require__(17);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(21);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _exportPropTypes = __webpack_require__(127);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _filterProps = __webpack_require__(26);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _isEmpty = __webpack_require__(138);

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

	        classes = (0, _classnames2.default)(classes);

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
/* 235 */
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
/* 236 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(237);

	__webpack_require__(238);

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

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
/* 237 */
1,
/* 238 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _xblocksCore = __webpack_require__(15);

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
/* 239 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(240);

	__webpack_require__(241);

	var _context = __webpack_require__(13);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(15);

	var _disabled = __webpack_require__(22);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _SpeechRecognition = __webpack_require__(242);

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
/* 240 */
1,
/* 241 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(13);

	var _react = __webpack_require__(14);

	var _xblocksCore = __webpack_require__(15);

	var _classnames = __webpack_require__(16);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(21);

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
/* 242 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _vendor = __webpack_require__(180);

	var _vendor2 = _interopRequireDefault(_vendor);

	var _events = __webpack_require__(243);

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
/* 243 */
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