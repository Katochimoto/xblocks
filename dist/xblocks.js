(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("xtag"), require("xblocks"), require("React"), require("ReactDOM"), require("Tether"));
	else if(typeof define === 'function' && define.amd)
		define(["xtag", "xblocks", "React", "ReactDOM", "Tether"], factory);
	else if(typeof exports === 'object')
		exports["xblocks"] = factory(require("xtag"), require("xblocks"), require("React"), require("ReactDOM"), require("Tether"));
	else
		root["xblocks"] = factory(root["xtag"], root["xblocks"], root["React"], root["ReactDOM"], root["Tether"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_2__, __WEBPACK_EXTERNAL_MODULE_44__, __WEBPACK_EXTERNAL_MODULE_45__, __WEBPACK_EXTERNAL_MODULE_119__, __WEBPACK_EXTERNAL_MODULE_149__) {
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

	__webpack_require__(12);
	__webpack_require__(49);
	__webpack_require__(124);
	__webpack_require__(133);
	__webpack_require__(137);
	__webpack_require__(141);
	__webpack_require__(145);
	__webpack_require__(151);
	__webpack_require__(177);
	__webpack_require__(182);
	__webpack_require__(186);

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
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xtag = __webpack_require__(2);
	var debounce = __webpack_require__(3);
	var throttle = __webpack_require__(11);

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
/* 2 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_2__;

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isObject = __webpack_require__(4),
	    now = __webpack_require__(5);

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
	 * Object.observe(models, function(changes) {
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
/* 4 */
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
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6);

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
	 * _.defer(function(stamp) {
	 *   console.log(_.now() - stamp);
	 * }, _.now());
	 * // => logs the number of milliseconds it took for the deferred function to be invoked
	 */
	var now = nativeNow || function() {
	  return new Date().getTime();
	};

	module.exports = now;


/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	var isNative = __webpack_require__(7);

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
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	var isFunction = __webpack_require__(8),
	    isHostObject = __webpack_require__(9),
	    isObjectLike = __webpack_require__(10);

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
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);

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
/* 9 */
/***/ function(module, exports) {

	/**
	 * Checks if `value` is a host object in IE < 9.
	 *
	 * @private
	 * @param {*} value The value to check.
	 * @returns {boolean} Returns `true` if `value` is a host object, else `false`.
	 */
	var isHostObject = (function() {
	  try {
	    Object({ 'toString': 0 } + '');
	  } catch(e) {
	    return function() { return false; };
	  }
	  return function(value) {
	    // IE < 9 presents many host objects as `Object` objects that can coerce
	    // to strings despite having improperly defined `toString` methods.
	    return typeof value.toString != 'function' && typeof (value + '') == 'string';
	  };
	}());

	module.exports = isHostObject;


/***/ },
/* 10 */
/***/ function(module, exports) {

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
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var debounce = __webpack_require__(3),
	    isObject = __webpack_require__(4);

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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(13);
	__webpack_require__(42);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);

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
	xb.Ico = xblocks.create('xb-ico', [__webpack_require__(48), {
	    accessors: {
	        active: {
	            attribute: {
	                boolean: true
	            }
	        }
	    }
	}]);

	module.exports = xb.Ico;

/***/ },
/* 13 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var classnames = __webpack_require__(46);

	/**
	 * The template node xb-ico
	 *
	 * @class xv.Ico
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.Ico = xblocks.view.register('xb-ico', [__webpack_require__(47), {
	    displayName: 'xb-ico',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
	    propTypes: {
	        'active': React.PropTypes.bool,
	        'size': React.PropTypes.oneOf(['s', 'm']),
	        'value': React.PropTypes.string,
	        'type': React.PropTypes.oneOf(['attention', 'check', 'close', 'download', 'download-white', 'dropdown', 'eye', 'help', 'link', 'link-white', 'mail', 'mic-off', 'mic-on', 'notification', 'odnoklassniki', 'pause', 'people', 'play', 'print', 'remove', 'services', 'settings', 'three-dots', 'trash', 'trash-white', 'twitter', 'upload', 'upload-white', 'vk'])
	    },
	    // @endif

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

	module.exports = xv.Ico;

/***/ },
/* 43 */
/***/ function(module, exports) {

	'use strict';

	var context = (function () {
	    return this || (1, eval)('this');
	})();

	context.xv = {};
	context.xb = {};

	module.exports = context;

/***/ },
/* 44 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_44__;

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_45__;

/***/ },
/* 46 */
/***/ function(module, exports, __webpack_require__) {

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
/* 47 */
/***/ function(module, exports) {

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
	"use strict";

	module.exports = {};

/***/ },
/* 48 */
/***/ function(module, exports) {

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
	"use strict";

	module.exports = {
	    accessors: {
	        disabled: {
	            attribute: {
	                boolean: true
	            }
	        }
	    }
	};

/***/ },
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(50);
	__webpack_require__(52);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);
	var replaceTextSelection = __webpack_require__(121);

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
	xb.Input = xblocks.create('xb-input', [__webpack_require__(48), __webpack_require__(122), __webpack_require__(123), {
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

	                    replaceTextSelection(input, event.detail.interim, function (callback) {
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

	module.exports = xb.Input;

/***/ },
/* 50 */
13,
/* 51 */,
/* 52 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var classnames = __webpack_require__(46);
	var filterProps = __webpack_require__(53);
	var Controller = __webpack_require__(118);

	/**
	 * The template node xb-input
	 *
	 * @class xv.Input
	 * @memberof xv
	 * @mixes React.addons.PureRenderMixin
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	xv.Input = xblocks.view.register('xb-input', [__webpack_require__(47), __webpack_require__(120)('xb-link'), {
	    displayName: 'xb-input',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
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
	    // @endif

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
	                children.push(React.createElement('span', { key: 'reset', className: '_reset', onClick: this.onClickReset }));
	            }

	            children.push(React.createElement(
	                'span',
	                { key: 'content', className: '_content' },
	                React.createElement(Controller, _extends({}, controllerProps, {
	                    isPlaceholderHint: isPlaceholderHint })),
	                React.createElement('span', { key: 'view', className: '_view' })
	            ));

	            return React.createElement(
	                'label',
	                { className: classes },
	                children
	            );
	        } else {

	            return React.createElement(Controller, _extends({}, controllerProps, {
	                className: classes,
	                isPlaceholderHint: isPlaceholderHint }));
	        }
	    }
	}]);

	module.exports = xv.Input;

/***/ },
/* 53 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _object = __webpack_require__(54);

	var pickIterator = function pickIterator(value, key) {
	    return this.test(key);
	};

	var transformIterator = function transformIterator(result, value, key) {
	    result[key.replace(this, '')] = value;
	};

	module.exports = function (reg, props) {
	    return (0, _object.transform)((0, _object.pick)(props, pickIterator, reg), transformIterator, {}, reg);
	};

/***/ },
/* 54 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = {
	  'assign': __webpack_require__(55),
	  'extend': __webpack_require__(78),
	  'keys': __webpack_require__(57),
	  'keysIn': __webpack_require__(69),
	  'merge': __webpack_require__(79),
	  'pairs': __webpack_require__(89),
	  'pick': __webpack_require__(90),
	  'transform': __webpack_require__(95)
	};


/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var assignWith = __webpack_require__(56),
	    baseAssign = __webpack_require__(71),
	    createAssigner = __webpack_require__(73);

	/**
	 * Assigns own enumerable properties of source object(s) to the destination
	 * object. Subsequent sources overwrite property assignments of previous sources.
	 * If `customizer` is provided it's invoked to produce the assigned values.
	 * The `customizer` is bound to `thisArg` and invoked with five arguments:
	 * (objectValue, sourceValue, key, object, source).
	 *
	 * **Note:** This method mutates `object` and is based on
	 * [`Object.assign`](http://ecma-international.org/ecma-262/6.0/#sec-object.assign).
	 *
	 * @static
	 * @memberOf _
	 * @alias extend
	 * @category Object
	 * @param {Object} object The destination object.
	 * @param {...Object} [sources] The source objects.
	 * @param {Function} [customizer] The function to customize assigned values.
	 * @param {*} [thisArg] The `this` binding of `customizer`.
	 * @returns {Object} Returns `object`.
	 * @example
	 *
	 * _.assign({ 'user': 'barney' }, { 'age': 40 }, { 'user': 'fred' });
	 * // => { 'user': 'fred', 'age': 40 }
	 *
	 * // using a customizer callback
	 * var defaults = _.partialRight(_.assign, function(value, other) {
	 *   return _.isUndefined(value) ? other : value;
	 * });
	 *
	 * defaults({ 'user': 'barney' }, { 'age': 36 }, { 'user': 'fred' });
	 * // => { 'user': 'barney', 'age': 36 }
	 */
	var assign = createAssigner(function(object, source, customizer) {
	  return customizer
	    ? assignWith(object, source, customizer)
	    : baseAssign(object, source);
	});

	module.exports = assign;


/***/ },
/* 56 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(57);

	/**
	 * A specialized version of `_.assign` for customizing assigned values without
	 * support for argument juggling, multiple sources, and `this` binding `customizer`
	 * functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @param {Function} customizer The function to customize assigned values.
	 * @returns {Object} Returns `object`.
	 */
	function assignWith(object, source, customizer) {
	  var index = -1,
	      props = keys(source),
	      length = props.length;

	  while (++index < length) {
	    var key = props[index],
	        value = object[key],
	        result = customizer(value, source[key], key, object, source);

	    if ((result === result ? (result !== value) : (value === value)) ||
	        (value === undefined && !(key in object))) {
	      object[key] = result;
	    }
	  }
	  return object;
	}

	module.exports = assignWith;


/***/ },
/* 57 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6),
	    isArrayLike = __webpack_require__(58),
	    isObject = __webpack_require__(4),
	    shimKeys = __webpack_require__(65),
	    support = __webpack_require__(63);

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
	var keys = !nativeKeys ? shimKeys : function(object) {
	  var Ctor = object == null ? undefined : object.constructor;
	  if ((typeof Ctor == 'function' && Ctor.prototype === object) ||
	      (typeof object == 'function' ? support.enumPrototypes : isArrayLike(object))) {
	    return shimKeys(object);
	  }
	  return isObject(object) ? nativeKeys(object) : [];
	};

	module.exports = keys;


/***/ },
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	var getLength = __webpack_require__(59),
	    isLength = __webpack_require__(64);

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
/* 59 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(60);

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
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(61);

	/**
	 * The base implementation of `_.property` without support for deep paths.
	 *
	 * @private
	 * @param {string} key The key of the property to get.
	 * @returns {Function} Returns the new function.
	 */
	function baseProperty(key) {
	  return function(object) {
	    return object == null ? undefined : toObject(object)[key];
	  };
	}

	module.exports = baseProperty;


/***/ },
/* 61 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4),
	    isString = __webpack_require__(62),
	    support = __webpack_require__(63);

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
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	var isObjectLike = __webpack_require__(10);

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
/* 63 */
/***/ function(module, exports) {

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

	(function(x) {
	  var Ctor = function() { this.x = x; },
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
/* 64 */
/***/ function(module, exports) {

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
/* 65 */
/***/ function(module, exports, __webpack_require__) {

	var isArguments = __webpack_require__(66),
	    isArray = __webpack_require__(67),
	    isIndex = __webpack_require__(68),
	    isLength = __webpack_require__(64),
	    isString = __webpack_require__(62),
	    keysIn = __webpack_require__(69);

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
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(58),
	    isObjectLike = __webpack_require__(10);

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
	 * _.isArguments(function() { return arguments; }());
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
/* 67 */
/***/ function(module, exports, __webpack_require__) {

	var getNative = __webpack_require__(6),
	    isLength = __webpack_require__(64),
	    isObjectLike = __webpack_require__(10);

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
	 * _.isArray(function() { return arguments; }());
	 * // => false
	 */
	var isArray = nativeIsArray || function(value) {
	  return isObjectLike(value) && isLength(value.length) && objToString.call(value) == arrayTag;
	};

	module.exports = isArray;


/***/ },
/* 68 */
/***/ function(module, exports) {

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
/* 69 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(70),
	    isArguments = __webpack_require__(66),
	    isArray = __webpack_require__(67),
	    isFunction = __webpack_require__(8),
	    isIndex = __webpack_require__(68),
	    isLength = __webpack_require__(64),
	    isObject = __webpack_require__(4),
	    isString = __webpack_require__(62),
	    support = __webpack_require__(63);

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

	arrayEach(shadowProps, function(key) {
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
/* 70 */
/***/ function(module, exports) {

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
/* 71 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(72),
	    keys = __webpack_require__(57);

	/**
	 * The base implementation of `_.assign` without support for argument juggling,
	 * multiple sources, and `customizer` functions.
	 *
	 * @private
	 * @param {Object} object The destination object.
	 * @param {Object} source The source object.
	 * @returns {Object} Returns `object`.
	 */
	function baseAssign(object, source) {
	  return source == null
	    ? object
	    : baseCopy(source, keys(source), object);
	}

	module.exports = baseAssign;


/***/ },
/* 72 */
/***/ function(module, exports) {

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
/* 73 */
/***/ function(module, exports, __webpack_require__) {

	var bindCallback = __webpack_require__(74),
	    isIterateeCall = __webpack_require__(76),
	    restParam = __webpack_require__(77);

	/**
	 * Creates a `_.assign`, `_.defaults`, or `_.merge` function.
	 *
	 * @private
	 * @param {Function} assigner The function to assign values.
	 * @returns {Function} Returns the new assigner function.
	 */
	function createAssigner(assigner) {
	  return restParam(function(object, sources) {
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
/* 74 */
/***/ function(module, exports, __webpack_require__) {

	var identity = __webpack_require__(75);

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
	    case 1: return function(value) {
	      return func.call(thisArg, value);
	    };
	    case 3: return function(value, index, collection) {
	      return func.call(thisArg, value, index, collection);
	    };
	    case 4: return function(accumulator, value, index, collection) {
	      return func.call(thisArg, accumulator, value, index, collection);
	    };
	    case 5: return function(value, other, key, object, source) {
	      return func.call(thisArg, value, other, key, object, source);
	    };
	  }
	  return function() {
	    return func.apply(thisArg, arguments);
	  };
	}

	module.exports = bindCallback;


/***/ },
/* 75 */
/***/ function(module, exports) {

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
/* 76 */
/***/ function(module, exports, __webpack_require__) {

	var isArrayLike = __webpack_require__(58),
	    isIndex = __webpack_require__(68),
	    isObject = __webpack_require__(4);

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
/* 77 */
/***/ function(module, exports) {

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
	 * var say = _.restParam(function(what, names) {
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
	  return function() {
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
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(55);


/***/ },
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseMerge = __webpack_require__(80),
	    createAssigner = __webpack_require__(73);

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
	 * _.merge(object, other, function(a, b) {
	 *   if (_.isArray(a)) {
	 *     return a.concat(b);
	 *   }
	 * });
	 * // => { 'fruits': ['apple', 'banana'], 'vegetables': ['beet', 'carrot'] }
	 */
	var merge = createAssigner(baseMerge);

	module.exports = merge;


/***/ },
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	var arrayEach = __webpack_require__(70),
	    baseMergeDeep = __webpack_require__(81),
	    isArray = __webpack_require__(67),
	    isArrayLike = __webpack_require__(58),
	    isObject = __webpack_require__(4),
	    isObjectLike = __webpack_require__(10),
	    isTypedArray = __webpack_require__(87),
	    keys = __webpack_require__(57);

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

	  arrayEach(props || source, function(srcValue, key) {
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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	var arrayCopy = __webpack_require__(82),
	    isArguments = __webpack_require__(66),
	    isArray = __webpack_require__(67),
	    isArrayLike = __webpack_require__(58),
	    isPlainObject = __webpack_require__(83),
	    isTypedArray = __webpack_require__(87),
	    toPlainObject = __webpack_require__(88);

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
/* 82 */
/***/ function(module, exports) {

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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(84),
	    isArguments = __webpack_require__(66),
	    isHostObject = __webpack_require__(9),
	    isObjectLike = __webpack_require__(10),
	    support = __webpack_require__(63);

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
	    baseForIn(value, function(subValue, key, object) {
	      result = hasOwnProperty.call(object, key);
	      return false;
	    });
	    return result !== false;
	  }
	  // In most environments an object's own properties are iterated before
	  // its inherited properties. If the last iterated property is an object's
	  // own property then there are no inherited enumerable properties.
	  baseForIn(value, function(subValue, key) {
	    result = key;
	  });
	  return result === undefined || hasOwnProperty.call(value, result);
	}

	module.exports = isPlainObject;


/***/ },
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(85),
	    keysIn = __webpack_require__(69);

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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	var createBaseFor = __webpack_require__(86);

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
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(61);

	/**
	 * Creates a base function for `_.forIn` or `_.forInRight`.
	 *
	 * @private
	 * @param {boolean} [fromRight] Specify iterating from right to left.
	 * @returns {Function} Returns the new base function.
	 */
	function createBaseFor(fromRight) {
	  return function(object, iteratee, keysFunc) {
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
/* 87 */
/***/ function(module, exports, __webpack_require__) {

	var isLength = __webpack_require__(64),
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
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	var baseCopy = __webpack_require__(72),
	    keysIn = __webpack_require__(69);

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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(57),
	    toObject = __webpack_require__(61);

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
/* 90 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseFlatten = __webpack_require__(91),
	    bindCallback = __webpack_require__(74),
	    pickByArray = __webpack_require__(93),
	    pickByCallback = __webpack_require__(94),
	    restParam = __webpack_require__(77);

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
	var pick = restParam(function(object, props) {
	  if (object == null) {
	    return {};
	  }
	  return typeof props[0] == 'function'
	    ? pickByCallback(object, bindCallback(props[0], props[1], 3))
	    : pickByArray(object, baseFlatten(props));
	});

	module.exports = pick;


/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	var arrayPush = __webpack_require__(92),
	    isArguments = __webpack_require__(66),
	    isArray = __webpack_require__(67),
	    isArrayLike = __webpack_require__(58),
	    isObjectLike = __webpack_require__(10);

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
/* 92 */
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
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(61);

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
/* 94 */
/***/ function(module, exports, __webpack_require__) {

	var baseForIn = __webpack_require__(84);

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
	  baseForIn(object, function(value, key, object) {
	    if (predicate(value, key, object)) {
	      result[key] = value;
	    }
	  });
	  return result;
	}

	module.exports = pickByCallback;


/***/ },
/* 95 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var arrayEach = __webpack_require__(70),
	    baseCallback = __webpack_require__(96),
	    baseCreate = __webpack_require__(116),
	    baseForOwn = __webpack_require__(117),
	    isArray = __webpack_require__(67),
	    isFunction = __webpack_require__(8),
	    isObject = __webpack_require__(4),
	    isTypedArray = __webpack_require__(87);

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
	 * _.transform([2, 3, 4], function(result, n) {
	 *   result.push(n *= n);
	 *   return n % 2 == 0;
	 * });
	 * // => [4, 9]
	 *
	 * _.transform({ 'a': 1, 'b': 2 }, function(result, n, key) {
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
	  (isArr ? arrayEach : baseForOwn)(object, function(value, index, object) {
	    return iteratee(accumulator, value, index, object);
	  });
	  return accumulator;
	}

	module.exports = transform;


/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	var baseMatches = __webpack_require__(97),
	    baseMatchesProperty = __webpack_require__(107),
	    bindCallback = __webpack_require__(74),
	    identity = __webpack_require__(75),
	    property = __webpack_require__(114);

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
/* 97 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsMatch = __webpack_require__(98),
	    getMatchData = __webpack_require__(105),
	    toObject = __webpack_require__(61);

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

	    return function(object) {
	      if (object == null) {
	        return false;
	      }
	      object = toObject(object);
	      return object[key] === value && (value !== undefined || (key in object));
	    };
	  }
	  return function(object) {
	    return baseIsMatch(object, matchData);
	  };
	}

	module.exports = baseMatches;


/***/ },
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqual = __webpack_require__(99),
	    toObject = __webpack_require__(61);

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
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	var baseIsEqualDeep = __webpack_require__(100),
	    isObject = __webpack_require__(4),
	    isObjectLike = __webpack_require__(10);

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
/* 100 */
/***/ function(module, exports, __webpack_require__) {

	var equalArrays = __webpack_require__(101),
	    equalByTag = __webpack_require__(103),
	    equalObjects = __webpack_require__(104),
	    isArray = __webpack_require__(67),
	    isHostObject = __webpack_require__(9),
	    isTypedArray = __webpack_require__(87);

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
/* 101 */
/***/ function(module, exports, __webpack_require__) {

	var arraySome = __webpack_require__(102);

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
	      if (!arraySome(other, function(othValue) {
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
/* 102 */
/***/ function(module, exports) {

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
/* 103 */
/***/ function(module, exports) {

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
/* 104 */
/***/ function(module, exports, __webpack_require__) {

	var keys = __webpack_require__(57);

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
/* 105 */
/***/ function(module, exports, __webpack_require__) {

	var isStrictComparable = __webpack_require__(106),
	    pairs = __webpack_require__(89);

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
/* 106 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);

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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(108),
	    baseIsEqual = __webpack_require__(99),
	    baseSlice = __webpack_require__(109),
	    isArray = __webpack_require__(67),
	    isKey = __webpack_require__(110),
	    isStrictComparable = __webpack_require__(106),
	    last = __webpack_require__(111),
	    toObject = __webpack_require__(61),
	    toPath = __webpack_require__(112);

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
	  return function(object) {
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
/* 108 */
/***/ function(module, exports, __webpack_require__) {

	var toObject = __webpack_require__(61);

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
/* 109 */
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
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	var isArray = __webpack_require__(67),
	    toObject = __webpack_require__(61);

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
/* 111 */
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
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	var baseToString = __webpack_require__(113),
	    isArray = __webpack_require__(67);

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
	  baseToString(value).replace(rePropName, function(match, number, quote, string) {
	    result.push(quote ? string.replace(reEscapeChar, '$1') : (number || match));
	  });
	  return result;
	}

	module.exports = toPath;


/***/ },
/* 113 */
/***/ function(module, exports) {

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
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	var baseProperty = __webpack_require__(60),
	    basePropertyDeep = __webpack_require__(115),
	    isKey = __webpack_require__(110);

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
/* 115 */
/***/ function(module, exports, __webpack_require__) {

	var baseGet = __webpack_require__(108),
	    toPath = __webpack_require__(112);

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
	  return function(object) {
	    return baseGet(object, path, pathKey);
	  };
	}

	module.exports = basePropertyDeep;


/***/ },
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	var isObject = __webpack_require__(4);

	/**
	 * The base implementation of `_.create` without support for assigning
	 * properties to the created object.
	 *
	 * @private
	 * @param {Object} prototype The object to inherit from.
	 * @returns {Object} Returns the new object.
	 */
	var baseCreate = (function() {
	  function object() {}
	  return function(prototype) {
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	var baseFor = __webpack_require__(85),
	    keys = __webpack_require__(57);

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
/* 118 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var ReactDOM = __webpack_require__(119);

	module.exports = xblocks.view.create({
	    displayName: 'xb-input_controller',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
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
	    // @endif

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

	        var node = ReactDOM.findDOMNode(this);

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
/* 119 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_119__;

/***/ },
/* 120 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

	var _xblocks = __webpack_require__(44);

	var _xblocks2 = _interopRequireDefault(_xblocks);

	module.exports = function (tagName) {
	    var props = _xblocks2['default'].utils.propTypes(tagName);
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
/* 121 */
/***/ function(module, exports) {

	/**
	 * Replacing selected text
	 * @function xblocks.dom.replaceTextSelection
	 * @param {HTMLElement} element
	 * @param {string} text
	 * @param {function} getter
	 * @param {function} setter
	 */
	"use strict";

	module.exports = function (element, text, getter, setter) {
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
/* 122 */
/***/ function(module, exports) {

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
/* 123 */
/***/ function(module, exports) {

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
	"use strict";

	module.exports = {
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
/* 124 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(125);
	__webpack_require__(127);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);

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
	xb.Button = xblocks.create('xb-button', [__webpack_require__(48), __webpack_require__(131), __webpack_require__(132), __webpack_require__(123), {
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

	module.exports = xb.Button;

/***/ },
/* 125 */
13,
/* 126 */,
/* 127 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var classnames = __webpack_require__(46);
	var resetLastRadioChecked = __webpack_require__(128);
	var filterProps = __webpack_require__(53);
	var Content = __webpack_require__(129);

	/**
	 * The template node xb-button
	 *
	 * @mixes React.addons.PureRenderMixin
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	xv.Button = xblocks.view.register('xb-button', [__webpack_require__(47), __webpack_require__(120)('xb-ico'), {
	    displayName: 'xb-button',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
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
	    // @endif

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
	            Content,
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

	module.exports = xv.Button;

/***/ },
/* 128 */
/***/ function(module, exports) {

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
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var isEmpty = __webpack_require__(130);

	module.exports = xblocks.view.create({
	    displayName: 'xb-button_content',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
	    propTypes: {
	        'ico': React.PropTypes.object
	    },
	    // @endif

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
/* 130 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var isArguments = __webpack_require__(66),
	    isArray = __webpack_require__(67),
	    isArrayLike = __webpack_require__(58),
	    isFunction = __webpack_require__(8),
	    isObjectLike = __webpack_require__(10),
	    isString = __webpack_require__(62),
	    keys = __webpack_require__(57);

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
/* 131 */
/***/ function(module, exports) {

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
	"use strict";

	module.exports = {
	    accessors: {
	        checked: {
	            attribute: {
	                boolean: true
	            }
	        }
	    }
	};

/***/ },
/* 132 */
/***/ function(module, exports) {

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
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(134);
	__webpack_require__(136);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);

	/**
	 * xb-link html element
	 *
	 * @class xb.Link
	 * @memberof xb
	 * @augments HTMLAnchorElement
	 * @mixes xblocks.mixin.eDisabled
	 */
	xb.Link = xblocks.create('xb-link', [__webpack_require__(48), {
	    prototype: Object.create(HTMLAnchorElement.prototype)
	}]);

	module.exports = xb.Link;

/***/ },
/* 134 */
13,
/* 135 */,
/* 136 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var classnames = __webpack_require__(46);

	/**
	 * The template node xb-link
	 *
	 * @class xv.Link
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.Link = xblocks.view.register('xb-link', [__webpack_require__(47), {
	    displayName: 'xb-link',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
	    propTypes: {
	        'href': React.PropTypes.string,
	        'name': React.PropTypes.string,
	        'target': React.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']),
	        'theme': React.PropTypes.oneOf(['normal', 'outer', 'pseudo', 'empty'])
	    },
	    // @endif

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

	module.exports = xv.Link;

/***/ },
/* 137 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(138);
	__webpack_require__(140);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);

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
	xb.Checkbox = xblocks.create('xb-checkbox', [__webpack_require__(48), __webpack_require__(131), __webpack_require__(132), __webpack_require__(123), {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        defaultValue: {
	            get: function get() {
	                return 'on';
	            }
	        }
	    }
	}]);

	module.exports = xb.Checkbox;

/***/ },
/* 138 */
13,
/* 139 */,
/* 140 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var classnames = __webpack_require__(46);

	/**
	 * The template node xb-checkbox
	 *
	 * @class xv.Checkbox
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.Checkbox = xblocks.view.register('xb-checkbox', [__webpack_require__(47), {
	    displayName: 'xb-checkbox',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
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
	    // @endif

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
	            React.createElement('input', { autoFocus: this.props.autofocus,
	                checked: this.state.checked,
	                className: '_xb-check_controller',
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

	module.exports = xv.Checkbox;

/***/ },
/* 141 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(142);
	__webpack_require__(144);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);

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
	xb.Radio = xblocks.create('xb-radio', [__webpack_require__(48), __webpack_require__(131), __webpack_require__(132), __webpack_require__(123), {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        defaultValue: {
	            get: function get() {
	                return 'on';
	            }
	        }
	    }
	}]);

	module.exports = xb.Radio;

/***/ },
/* 142 */
13,
/* 143 */,
/* 144 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var classnames = __webpack_require__(46);
	var resetLastRadioChecked = __webpack_require__(128);

	/**
	 * The template node xb-radio
	 *
	 * @class xv.Radio
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.Radio = xblocks.view.register('xb-radio', [__webpack_require__(47), {
	    displayName: 'xb-radio',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
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
	    // @endif

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
	            React.createElement('input', {
	                autoFocus: this.props.autofocus,
	                checked: this.state.checked,
	                className: '_xb-check_controller',
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

	module.exports = xv.Radio;

/***/ },
/* 145 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(146);
	__webpack_require__(148);

	var xb = __webpack_require__(43).xb;
	var Tether = __webpack_require__(149);
	var context = __webpack_require__(43);
	var xblocks = __webpack_require__(44);
	var tetherDefaultOptions = __webpack_require__(150);
	var assign = __webpack_require__(55);

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
	xb.Popup = xblocks.create('xb-popup', [__webpack_require__(123), {
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
	            get: tetherDefaultOptions
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
	            assign(this.options, nextOptions);

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

	module.exports = xb.Popup;

/***/ },
/* 146 */
13,
/* 147 */,
/* 148 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var ReactDOM = __webpack_require__(119);
	var classnames = __webpack_require__(46);

	/**
	 * The template node xb-popup
	 *
	 * @class xv.Popup
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.Popup = xblocks.view.register('xb-popup', [__webpack_require__(47), {
	    displayName: 'xb-popup',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
	    propTypes: {
	        'close': React.PropTypes.bool,
	        'theme': React.PropTypes.oneOf(['blank', 'error', 'island', 'modal', 'normal'])
	    },
	    // @endif

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'close': false,
	            'theme': 'normal'
	        };
	    },

	    onClickClose: function onClickClose() {
	        xblocks.event.dispatch(ReactDOM.findDOMNode(this), 'jsx-click-close', { 'bubbles': true, 'cancelable': true });
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

	        classes = classnames(classes);

	        return React.createElement(
	            'div',
	            { className: classes, tabIndex: '0' },
	            children
	        );
	    }
	}]);

	module.exports = xv.Popup;

/***/ },
/* 149 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_149__;

/***/ },
/* 150 */
/***/ function(module, exports) {

	/**
	 * The default setting for the popup
	 * @returns {Object}
	 * @this {xb.Popup}
	 */
	'use strict';

	module.exports = function () {
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
/* 151 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(global) {'use strict';

	__webpack_require__(152);
	__webpack_require__(154);
	__webpack_require__(160);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);
	var lazyFocus = __webpack_require__(165);
	var _tetherDefaultOptions = __webpack_require__(150);
	var Popup = __webpack_require__(145);
	var Table = __webpack_require__(166);
	var getParentMenu = __webpack_require__(175);

	var forEach = Array.prototype.forEach;

	var menuCommon = {

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
	        var options = _tetherDefaultOptions.call(this);
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
	xb.Menu = xblocks.create('xb-menu', [__webpack_require__(176), {
	    prototype: Object.create(Popup.prototype || new Popup()),

	    events: {
	        'xb-before-open': function xbBeforeOpen() {
	            this.style.visibility = 'hidden';
	        },

	        'xb-open': function xbOpen() {
	            this._xbFocus = new Table(this, {
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
	            lazyFocus(this);
	        },

	        _closeUpFocus: function _closeUpFocus() {
	            var focusMenu = getParentMenu(this.ownerDocument.activeElement);
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

	module.exports = xb.Menu;
	/* WEBPACK VAR INJECTION */}.call(exports, (function() { return this; }())))

/***/ },
/* 152 */
13,
/* 153 */,
/* 154 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);

	/**
	 * The template node xb-menu
	 *
	 * @class xv.Menu
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes xblocks.mixin.vMenu
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.Menu = xblocks.view.register('xb-menu', [__webpack_require__(47), __webpack_require__(155), {
	    displayName: 'xb-menu',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
	    propTypes: {
	        'size': React.PropTypes.string
	    },
	    // @endif

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'size': ''
	        };
	    },

	    afterOpen: function afterOpen(callback) {
	        this._updateMaxHeight(this.props.size, callback);
	    }
	}]);

	module.exports = xv.Menu;

/***/ },
/* 155 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var classnames = __webpack_require__(46);
	var xblocks = __webpack_require__(44);
	var throttle = __webpack_require__(11);
	var throttleAnimationFrame = __webpack_require__(156);
	var animationFrame = __webpack_require__(157);

	/**
	 * Common interface for views xb-menu and xb-menu-inline
	 *
	 * @memberOf xblocks.mixin
	 * @type {object}
	 */
	module.exports = {
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
	        this._onScroll = throttleAnimationFrame(this._onScroll);
	        this._onScrollThrottle = throttle(this._onScrollThrottle, 500, {
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
	        xblocks.event.dispatch(this.refs.content, 'jsx-scroll-throttle', { 'bubbles': true, 'cancelable': true });
	    },

	    _animationScrollTop: function _animationScrollTop() {
	        this.refs.content.scrollTop--;
	        this._enterTopFrame = animationFrame.requestAnimationFrame(this._animationScrollTop);
	    },

	    _onMouseEnterTop: function _onMouseEnterTop() {
	        this._onMouseLeaveTop();
	        this._animationScrollTop();
	    },

	    _onMouseLeaveTop: function _onMouseLeaveTop() {
	        if (this._enterTopFrame) {
	            animationFrame.cancelAnimationFrame(this._enterTopFrame);
	            this._enterTopFrame = 0;
	        }
	    },

	    _animationScrollBottom: function _animationScrollBottom() {
	        this.refs.content.scrollTop++;
	        this._enterBottomFrame = animationFrame.requestAnimationFrame(this._animationScrollBottom);
	    },

	    _onMouseEnterBottom: function _onMouseEnterBottom() {
	        this._onMouseLeaveBottom();
	        this._animationScrollBottom();
	    },

	    _onMouseLeaveBottom: function _onMouseLeaveBottom() {
	        if (this._enterBottomFrame) {
	            animationFrame.cancelAnimationFrame(this._enterBottomFrame);
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

	        classes = classnames(classes);

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
/* 156 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var animationFrame = __webpack_require__(157);

	/**
	 * @function xblocks.utils.throttleAnimationFrame
	 * @param   {Function} callback [description]
	 * @param   {[type]}   context  [description]
	 * @returns {[type]}            [description]
	 */
	module.exports = function (callback, context) {
	    var throttle = 0;
	    var animationCallback = function animationCallback() {
	        throttle = 0;
	    };

	    return function () {
	        if (throttle) {
	            return;
	        }

	        throttle = animationFrame.requestAnimationFrame(animationCallback);

	        callback.apply(context || this, arguments);
	    };
	};

/***/ },
/* 157 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(43);
	var vendor = __webpack_require__(158);
	var lastTime = 0;

	context.requestAnimationFrame = vendor('requestAnimationFrame') || function (callback) {
	    var currTime = Date.now();
	    var timeToCall = Math.max(0, 16 - (currTime - lastTime));
	    var id = context.setTimeout(function () {
	        callback(currTime + timeToCall);
	    }, timeToCall);
	    lastTime = currTime + timeToCall;
	    return id;
	};

	context.cancelAnimationFrame = vendor('cancelAnimationFrame') || vendor('cancelRequestAnimationFrame') || function (id) {
	    context.clearTimeout(id);
	};

	module.exports = {
	    'requestAnimationFrame': context.requestAnimationFrame,
	    'cancelAnimationFrame': context.cancelAnimationFrame
	};

/***/ },
/* 158 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var globalContext = __webpack_require__(43);
	var capitalize = __webpack_require__(159);
	var vendors = ['ms', 'moz', 'webkit', 'o'];

	module.exports = function (name, context) {
	    context = context || globalContext;

	    if (context[name]) {
	        return context[name];
	    }

	    name = capitalize(name);

	    var vendor;
	    var x = 0;
	    for (; x < 4; ++x) {
	        vendor = vendors[x];
	        if (context[vendor + name]) {
	            return context[vendor + name];
	        }
	    }
	};

/***/ },
/* 159 */
/***/ function(module, exports, __webpack_require__) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
	 * Copyright 2012-2015 The Dojo Foundation <http://dojofoundation.org/>
	 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
	 * Copyright 2009-2015 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
	 * Available under MIT license <https://lodash.com/license>
	 */
	var baseToString = __webpack_require__(113);

	/**
	 * Capitalizes the first character of `string`.
	 *
	 * @static
	 * @memberOf _
	 * @category String
	 * @param {string} [string=''] The string to capitalize.
	 * @returns {string} Returns the capitalized string.
	 * @example
	 *
	 * _.capitalize('fred');
	 * // => 'Fred'
	 */
	function capitalize(string) {
	  string = baseToString(string);
	  return string && (string.charAt(0).toUpperCase() + string.slice(1));
	}

	module.exports = capitalize;


/***/ },
/* 160 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(43);
	var delegate = __webpack_require__(161);

	context.document.addEventListener('contextmenu', delegate('[contextmenu]', function (event) {
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
/* 161 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var delegateMatch = __webpack_require__(162);
	var wrap = __webpack_require__(164);

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
/* 162 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var matchesSelector = __webpack_require__(163);

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
/* 163 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(43);
	var vendor = __webpack_require__(158);
	var indexOf = Array.prototype.indexOf;
	var proto = context.Element.prototype;
	var matches = proto.matches || vendor('matchesSelector', proto) || function (selector) {
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
/* 164 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(43);
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
/* 165 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(43);

	/**
	 * @function xblocks.utils.lazyFocus
	 * @param   {[type]} node [description]
	 * @returns {[type]}      [description]
	 */
	module.exports = function (node) {
	  context.setTimeout(node.focus.bind(node), 0);
	};

/***/ },
/* 166 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xblocks = __webpack_require__(44);
	var delegate = __webpack_require__(161);
	var filterClick = __webpack_require__(167);
	var filterMouse = __webpack_require__(168);
	var matchesSelector = __webpack_require__(163);
	var eachAfter = __webpack_require__(169);
	var eachBefore = __webpack_require__(172);
	var index = __webpack_require__(174);
	var merge = __webpack_require__(79);
	var throttle = __webpack_require__(11);
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
/* 167 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var wrap = __webpack_require__(164);

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
/* 168 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var wrap = __webpack_require__(164);

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
/* 169 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isParent = __webpack_require__(170);
	var eachInnerFollowing = __webpack_require__(171);

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
/* 170 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(43);
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
/* 171 */
/***/ function(module, exports) {

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
/* 172 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isParent = __webpack_require__(170);
	var eachInnerPrevious = __webpack_require__(173);

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
/* 173 */
/***/ function(module, exports) {

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
/* 174 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var globalContext = __webpack_require__(43);
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
/* 175 */
/***/ function(module, exports) {

	/**
	 * @param {HTMLElement} node
	 * @returns {HTMLElement|null}
	 */
	'use strict';

	module.exports = function (node) {
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
/* 176 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var lazyFocus = __webpack_require__(165);
	var isParent = __webpack_require__(170);

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
	            if (!isParent(this, menuitem)) {
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
/* 177 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(178);
	__webpack_require__(180);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);
	var lazyFocus = __webpack_require__(165);
	var Table = __webpack_require__(166);
	var noop = __webpack_require__(181);

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
	xb.MenuInline = xblocks.create('xb-menu-inline', [__webpack_require__(123), __webpack_require__(176), {
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

	module.exports = xb.MenuInline;

/***/ },
/* 178 */
13,
/* 179 */,
/* 180 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);

	/**
	 * The template node xb-menu-inline
	 *
	 * @class xv.MenuInline
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes xblocks.mixin.vMenu
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.MenuInline = xblocks.view.register('xb-menu-inline', [__webpack_require__(47), __webpack_require__(155), {
	    displayName: 'xb-menu-inline',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
	    propTypes: {
	        'size': React.PropTypes.string
	    },
	    // @endif

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'size': ''
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        this._updateMaxHeight(this.props.size);
	    }
	}]);

	module.exports = xv.MenuInline;

/***/ },
/* 181 */
/***/ function(module, exports) {

	/**
	 * lodash 3.10.1 (Custom Build) <https://lodash.com/>
	 * Build: `lodash exports="umd" include="debounce,throttle,merge,isEmpty,pick,transform,noop,capitalize,assign" modularize -o lodash`
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


/***/ },
/* 182 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(183);
	__webpack_require__(185);

	var xb = __webpack_require__(43).xb;
	var context = __webpack_require__(43);
	var xblocks = __webpack_require__(44);
	var lazyFocus = __webpack_require__(165);
	var getParentMenu = __webpack_require__(175);
	var merge = __webpack_require__(79);

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
	                    var submenu = this._submenuInstance;
	                    this._submenuInstance = undefined;

	                    menuitemCommon.submenu.cancel();
	                    submenu.close();
	                    xblocks.dom.removeChild(submenu);
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
	xb.Menuitem = xblocks.create('xb-menuitem', [__webpack_require__(48), __webpack_require__(132), {
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
	                lazyFocus(this.menuInstance);
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

	                this._menuInstance = getParentMenu(this);

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
	                    var attrs = merge({ 'target': '.' + targetClassName }, menuitemCommon.submenuAttrs);

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

	module.exports = xb.Menuitem;

/***/ },
/* 183 */
13,
/* 184 */,
/* 185 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);
	var React = __webpack_require__(45);
	var classnames = __webpack_require__(46);
	var filterProps = __webpack_require__(53);
	var isEmpty = __webpack_require__(130);

	/**
	 * The template node xb-menuitem
	 *
	 * @class xv.Menuitem
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 * @mixes React.addons.PureRenderMixin
	 */
	xv.Menuitem = xblocks.view.register('xb-menuitem', [__webpack_require__(47), __webpack_require__(120)('xb-ico'), {
	    displayName: 'xb-menuitem',

	    mixins: [React.addons.PureRenderMixin],

	    // @ifdef DEBUG
	    propTypes: {
	        'focused': React.PropTypes.bool,
	        'ico': React.PropTypes.object,
	        'label': React.PropTypes.string.isRequired,
	        'selected': React.PropTypes.bool,
	        'submenu': React.PropTypes.bool
	    },
	    // @endif

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

	module.exports = xv.Menuitem;

/***/ },
/* 186 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	__webpack_require__(187);
	__webpack_require__(189);

	var xb = __webpack_require__(43).xb;
	var xblocks = __webpack_require__(44);

	/**
	 * xb-menuseparator html element
	 *
	 * @class xb.Menuseparator
	 * @memberof xb
	 * @augments HTMLElement
	 */
	xb.Menuseparator = xblocks.create('xb-menuseparator', [{
	    prototype: Object.create(HTMLElement.prototype)
	}]);

	module.exports = xb.Menuseparator;

/***/ },
/* 187 */
13,
/* 188 */,
/* 189 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var xv = __webpack_require__(43).xv;
	var xblocks = __webpack_require__(44);

	/**
	 * The template node xb-menuseparator
	 *
	 * @class xv.Menuseparator
	 * @memberof xv
	 */
	xv.Menuseparator = xblocks.view.register('xb-menuseparator', {
	    displayName: 'xb-menuseparator',

	    render: function render() {
	        return React.createElement('div', { className: 'xb-menuseparator' });
	    }
	});

	module.exports = xv.Menuseparator;

/***/ }
/******/ ])))
});
;