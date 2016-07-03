(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory(require("lodash"), require("xtag"), require("react"), require("xblocks-core"), require("react-dom"), require("tether"));
	else if(typeof define === 'function' && define.amd)
		define(["lodash", "xtag", "react", "xblocks-core", "react-dom", "tether"], factory);
	else if(typeof exports === 'object')
		exports["xblocks"] = factory(require("lodash"), require("xtag"), require("react"), require("xblocks-core"), require("react-dom"), require("tether"));
	else
		root["xblocks"] = factory(root["_"], root["xtag"], root["React"], root["xblocks-core"], root["ReactDOM"], root["Tether"]);
})(this, function(__WEBPACK_EXTERNAL_MODULE_3__, __WEBPACK_EXTERNAL_MODULE_4__, __WEBPACK_EXTERNAL_MODULE_8__, __WEBPACK_EXTERNAL_MODULE_10__, __WEBPACK_EXTERNAL_MODULE_43__, __WEBPACK_EXTERNAL_MODULE_73__) {
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

	__webpack_require__(5);

	__webpack_require__(18);

	__webpack_require__(47);

	__webpack_require__(58);

	__webpack_require__(62);

	__webpack_require__(66);

	__webpack_require__(70);

	__webpack_require__(86);

	__webpack_require__(114);

	__webpack_require__(119);

	__webpack_require__(123);

	__webpack_require__(126);

	__webpack_require__(131);

/***/ },
/* 1 */
/***/ function(module, exports) {

	// removed by extract-text-webpack-plugin

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _xtag = __webpack_require__(4);

	var _xtag2 = _interopRequireDefault(_xtag);

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

	        return _lodash2.default.debounce(listener, wait, {
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

	        return _lodash2.default.throttle(listener, wait, {
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
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_4__;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(6);

	__webpack_require__(7);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _disabled = __webpack_require__(17);

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
/* 6 */
1,
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(16);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 8 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_8__;

/***/ },
/* 9 */
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
/* 10 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_10__;

/***/ },
/* 11 */
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
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	module.exports = __webpack_require__(13);

/***/ },
/* 13 */
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

	var shallowCompare = __webpack_require__(14);

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
	 *
	 * See https://facebook.github.io/react/docs/pure-render-mixin.html
	 */
	var ReactComponentWithPureRenderMixin = {
	  shouldComponentUpdate: function (nextProps, nextState) {
	    return shallowCompare(this, nextProps, nextState);
	  }
	};

	module.exports = ReactComponentWithPureRenderMixin;

/***/ },
/* 14 */
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

	var shallowEqual = __webpack_require__(15);

	/**
	 * Does a shallow comparison for props and state.
	 * See ReactComponentWithPureRenderMixin
	 * See also https://facebook.github.io/react/docs/shallow-compare.html
	 */
	function shallowCompare(instance, nextProps, nextState) {
	  return !shallowEqual(instance.props, nextProps) || !shallowEqual(instance.state, nextState);
	}

	module.exports = shallowCompare;

/***/ },
/* 15 */
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
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _react = __webpack_require__(8);

	exports.default = {
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
	     * @prop {string} propTypes.data-xb-tabindex
	     * @prop {string} propTypes.title
	     */
	    propTypes: {
	        'accesskey': _react.PropTypes.string,
	        'contextmenu': _react.PropTypes.string,
	        'data-xb-tabindex': numberString,
	        'dir': _react.PropTypes.oneOf(['ltr', 'rtl']),
	        'disabled': _react.PropTypes.bool,
	        'hidden': _react.PropTypes.bool,
	        'spellcheck': _react.PropTypes.bool,
	        'title': _react.PropTypes.string
	    },

	    /**
	     * @returns {string}
	     */
	    getTabIndex: function getTabIndex() {
	        return this.props.disabled ? '-1' : this.props['data-xb-tabindex'];
	    }
	};


	function numberString(props, propName, componentName) {
	    if (props.hasOwnProperty(propName) && !/^(\-?[0-9])?[0-9]*$/.test(props[propName])) {
	        return new Error('Invalid prop "' + propName + '" supplied to "' + componentName + '". Validation failed.');
	    }
	}

/***/ },
/* 17 */
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
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(19);

	__webpack_require__(20);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _replaceTextSelection = __webpack_require__(44);

	var _replaceTextSelection2 = _interopRequireDefault(_replaceTextSelection);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _focusComponent = __webpack_require__(45);

	var _focusComponent2 = _interopRequireDefault(_focusComponent);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * xb-input html element
	 *
	 * @class xb.Input
	 * @memberof xb
	 * @augments HTMLInputElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eFocus
	 */
	exports.default = _context.xb.Input = (0, _xblocksCore.create)('xb-input', [_disabled2.default, _focusComponent2.default, {
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
	    },

	    accessors: {
	        componentStyle: {
	            get: function get() {
	                return _defineProperty({}, this.xtagName, __webpack_require__(46));
	            }
	        },

	        isShadowSupported: {
	            get: _lodash2.default.stubFalse
	        },

	        /**
	         * @prop {string} value
	         */
	        value: {
	            attribute: {
	                name: 'value'
	            },

	            get: function get() {
	                return String(_lodash2.default.get(this, _input2.default.VALUE, this.getAttribute('value') || this.defaultValue || ''));
	            },

	            set: function set(value) {
	                var component = this.getComponent();

	                if (component) {
	                    component.setState({ value: String(value) });
	                }
	            }
	        },

	        /**
	         * @prop {string} defaultValue
	         */
	        defaultValue: {
	            get: _lodash2.default.constant('')
	        }
	    }
	}]);

/***/ },
/* 19 */
1,
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(16);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _filterProps = __webpack_require__(21);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _exportPropTypes = __webpack_require__(22);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _input = __webpack_require__(23);

	var _input2 = _interopRequireDefault(_input);

	var _controller = __webpack_require__(42);

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

	    /**
	     * @prop {string} [name]
	     * @prop {string} [type=text] text|number|date|datetime|email|month|range|search|tel|time|url|week|color
	     * @prop {string} [size=m] s|m|l|xl
	     * @prop {string} [autoComplete] on|off
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
	     */
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
	        'size': _react.PropTypes.oneOf(['s', 'm', 'l', 'xl']).isRequired,
	        'type': _react.PropTypes.oneOf(['text', 'number', 'date', 'datetime', 'email', 'month', 'range', 'search', 'tel', 'time', 'url', 'week', 'color', 'wysiwyg']).isRequired,
	        'value': _react.PropTypes.string,
	        'xb-link': _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'autosize': false,
	            'data-xb-tabindex': '0',
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
	            value: this.props.value
	        };
	    },

	    componentDidMount: function componentDidMount() {
	        // check show or hide placeholder after mount element
	        this._controller.dispatchEventToggleHint('', this.props.value);
	    },

	    componentDidUpdate: function componentDidUpdate() {
	        this.context.container[_input2.default.VALUE] = this.state.value;
	    },

	    /**
	     * Remember current value in state
	     * @param {Event} event
	     * @private
	     */
	    onChange: function onChange(event) {
	        this.setState({ value: event.target.value });
	    },

	    /**
	     * Show or hide placeholder
	     * @param {boolean} toggle
	     * @private
	     */
	    onHintToggle: function onHintToggle(toggle) {
	        this._placeholder.style.visibility = toggle ? 'inherit' : 'hidden';
	    },

	    /**
	     * Click reset button
	     * @private
	     */
	    onClickReset: function onClickReset() {
	        this.setState({ value: '' });
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
	        var _this = this;

	        var isComplex = this.isComplex();
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-input': true,
	            '_disabled': this.props.disabled,
	            '_autosize': this.props.autosize,
	            '_ghost': this.props.ghost
	        }, '_' + (isComplex ? 'complex' : 'simple') + '_size-' + this.props.size, true));

	        var controllerProps = {
	            'autoFocus': this.props.autofocus,
	            'autoComplete': this.props.autocomplete,
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
	            'ref': function ref(_ref) {
	                return _this._controller = _ref;
	            },
	            'required': this.props.required,
	            'rows': this.props.rows,
	            'tabIndex': this.getTabIndex(),
	            'value': this.state.value
	        };

	        if (isComplex) {
	            var children = [];

	            if (this.props['xb-link']) {
	                var linkProps = (0, _filterProps2.default)(/^xb-link-/, this.props);

	                children.push(React.createElement(
	                    'xb-link',
	                    _extends({}, linkProps, { theme: 'empty', key: 'label' }),
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

	            var placeholder = this.props.placeholder ? React.createElement(
	                'span',
	                { ref: function ref(_ref2) {
	                        return _this._placeholder = _ref2;
	                    }, key: 'placeholder', className: '_hint' },
	                React.createElement(
	                    'span',
	                    { className: '_hint-inner' },
	                    this.props.placeholder
	                )
	            ) : null;

	            children.push(React.createElement(
	                'span',
	                { key: 'content', className: '_content' },
	                placeholder,
	                React.createElement(_controller2.default, _extends({}, controllerProps, { isPlaceholderHint: Boolean(placeholder) })),
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

	            return React.createElement(_controller2.default, _extends({}, controllerProps, { className: classes, isPlaceholderHint: false }));
	        }
	    }
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (reg, props) {
	    props = _lodash2.default.pickBy(props, function (name, key) {
	        return reg.test(key);
	    });
	    return _lodash2.default.transform(props, function (result, value, key) {
	        result[key.replace(reg, '')] = value;
	    }, {});
	};

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 22 */
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

	var _xblocksCore = __webpack_require__(10);

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _es6Symbol = __webpack_require__(24);

	var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    VALUE: (0, _es6Symbol2.default)('input-value')
	};

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(25)() ? Symbol : __webpack_require__(26);


/***/ },
/* 25 */
/***/ function(module, exports) {

	'use strict';

	var validTypes = { object: true, symbol: true };

	module.exports = function () {
		var symbol;
		if (typeof Symbol !== 'function') return false;
		symbol = Symbol('test symbol');
		try { String(symbol); } catch (e) { return false; }

		// Return 'true' also for polyfills
		if (!validTypes[typeof Symbol.iterator]) return false;
		if (!validTypes[typeof Symbol.toPrimitive]) return false;
		if (!validTypes[typeof Symbol.toStringTag]) return false;

		return true;
	};


/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	// ES2015 Symbol polyfill for environments that do not support it (or partially support it)

	'use strict';

	var d              = __webpack_require__(27)
	  , validateSymbol = __webpack_require__(40)

	  , create = Object.create, defineProperties = Object.defineProperties
	  , defineProperty = Object.defineProperty, objPrototype = Object.prototype
	  , NativeSymbol, SymbolPolyfill, HiddenSymbol, globalSymbols = create(null)
	  , isNativeSafe;

	if (typeof Symbol === 'function') {
		NativeSymbol = Symbol;
		try {
			String(NativeSymbol());
			isNativeSafe = true;
		} catch (ignore) {}
	}

	var generateName = (function () {
		var created = create(null);
		return function (desc) {
			var postfix = 0, name, ie11BugWorkaround;
			while (created[desc + (postfix || '')]) ++postfix;
			desc += (postfix || '');
			created[desc] = true;
			name = '@@' + desc;
			defineProperty(objPrototype, name, d.gs(null, function (value) {
				// For IE11 issue see:
				// https://connect.microsoft.com/IE/feedbackdetail/view/1928508/
				//    ie11-broken-getters-on-dom-objects
				// https://github.com/medikoo/es6-symbol/issues/12
				if (ie11BugWorkaround) return;
				ie11BugWorkaround = true;
				defineProperty(this, name, d(value));
				ie11BugWorkaround = false;
			}));
			return name;
		};
	}());

	// Internal constructor (not one exposed) for creating Symbol instances.
	// This one is used to ensure that `someSymbol instanceof Symbol` always return false
	HiddenSymbol = function Symbol(description) {
		if (this instanceof HiddenSymbol) throw new TypeError('TypeError: Symbol is not a constructor');
		return SymbolPolyfill(description);
	};

	// Exposed `Symbol` constructor
	// (returns instances of HiddenSymbol)
	module.exports = SymbolPolyfill = function Symbol(description) {
		var symbol;
		if (this instanceof Symbol) throw new TypeError('TypeError: Symbol is not a constructor');
		if (isNativeSafe) return NativeSymbol(description);
		symbol = create(HiddenSymbol.prototype);
		description = (description === undefined ? '' : String(description));
		return defineProperties(symbol, {
			__description__: d('', description),
			__name__: d('', generateName(description))
		});
	};
	defineProperties(SymbolPolyfill, {
		for: d(function (key) {
			if (globalSymbols[key]) return globalSymbols[key];
			return (globalSymbols[key] = SymbolPolyfill(String(key)));
		}),
		keyFor: d(function (s) {
			var key;
			validateSymbol(s);
			for (key in globalSymbols) if (globalSymbols[key] === s) return key;
		}),

		// If there's native implementation of given symbol, let's fallback to it
		// to ensure proper interoperability with other native functions e.g. Array.from
		hasInstance: d('', (NativeSymbol && NativeSymbol.hasInstance) || SymbolPolyfill('hasInstance')),
		isConcatSpreadable: d('', (NativeSymbol && NativeSymbol.isConcatSpreadable) ||
			SymbolPolyfill('isConcatSpreadable')),
		iterator: d('', (NativeSymbol && NativeSymbol.iterator) || SymbolPolyfill('iterator')),
		match: d('', (NativeSymbol && NativeSymbol.match) || SymbolPolyfill('match')),
		replace: d('', (NativeSymbol && NativeSymbol.replace) || SymbolPolyfill('replace')),
		search: d('', (NativeSymbol && NativeSymbol.search) || SymbolPolyfill('search')),
		species: d('', (NativeSymbol && NativeSymbol.species) || SymbolPolyfill('species')),
		split: d('', (NativeSymbol && NativeSymbol.split) || SymbolPolyfill('split')),
		toPrimitive: d('', (NativeSymbol && NativeSymbol.toPrimitive) || SymbolPolyfill('toPrimitive')),
		toStringTag: d('', (NativeSymbol && NativeSymbol.toStringTag) || SymbolPolyfill('toStringTag')),
		unscopables: d('', (NativeSymbol && NativeSymbol.unscopables) || SymbolPolyfill('unscopables'))
	});

	// Internal tweaks for real symbol producer
	defineProperties(HiddenSymbol.prototype, {
		constructor: d(SymbolPolyfill),
		toString: d('', function () { return this.__name__; })
	});

	// Proper implementation of methods exposed on Symbol.prototype
	// They won't be accessible on produced symbol instances as they derive from HiddenSymbol.prototype
	defineProperties(SymbolPolyfill.prototype, {
		toString: d(function () { return 'Symbol (' + validateSymbol(this).__description__ + ')'; }),
		valueOf: d(function () { return validateSymbol(this); })
	});
	defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toPrimitive, d('', function () {
		var symbol = validateSymbol(this);
		if (typeof symbol === 'symbol') return symbol;
		return symbol.toString();
	}));
	defineProperty(SymbolPolyfill.prototype, SymbolPolyfill.toStringTag, d('c', 'Symbol'));

	// Proper implementaton of toPrimitive and toStringTag for returned symbol instances
	defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toStringTag,
		d('c', SymbolPolyfill.prototype[SymbolPolyfill.toStringTag]));

	// Note: It's important to define `toPrimitive` as last one, as some implementations
	// implement `toPrimitive` natively without implementing `toStringTag` (or other specified symbols)
	// And that may invoke error in definition flow:
	// See: https://github.com/medikoo/es6-symbol/issues/13#issuecomment-164146149
	defineProperty(HiddenSymbol.prototype, SymbolPolyfill.toPrimitive,
		d('c', SymbolPolyfill.prototype[SymbolPolyfill.toPrimitive]));


/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var assign        = __webpack_require__(28)
	  , normalizeOpts = __webpack_require__(35)
	  , isCallable    = __webpack_require__(36)
	  , contains      = __webpack_require__(37)

	  , d;

	d = module.exports = function (dscr, value/*, options*/) {
		var c, e, w, options, desc;
		if ((arguments.length < 2) || (typeof dscr !== 'string')) {
			options = value;
			value = dscr;
			dscr = null;
		} else {
			options = arguments[2];
		}
		if (dscr == null) {
			c = w = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
			w = contains.call(dscr, 'w');
		}

		desc = { value: value, configurable: c, enumerable: e, writable: w };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};

	d.gs = function (dscr, get, set/*, options*/) {
		var c, e, options, desc;
		if (typeof dscr !== 'string') {
			options = set;
			set = get;
			get = dscr;
			dscr = null;
		} else {
			options = arguments[3];
		}
		if (get == null) {
			get = undefined;
		} else if (!isCallable(get)) {
			options = get;
			get = set = undefined;
		} else if (set == null) {
			set = undefined;
		} else if (!isCallable(set)) {
			options = set;
			set = undefined;
		}
		if (dscr == null) {
			c = true;
			e = false;
		} else {
			c = contains.call(dscr, 'c');
			e = contains.call(dscr, 'e');
		}

		desc = { get: get, set: set, configurable: c, enumerable: e };
		return !options ? desc : assign(normalizeOpts(options), desc);
	};


/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(29)()
		? Object.assign
		: __webpack_require__(30);


/***/ },
/* 29 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		var assign = Object.assign, obj;
		if (typeof assign !== 'function') return false;
		obj = { foo: 'raz' };
		assign(obj, { bar: 'dwa' }, { trzy: 'trzy' });
		return (obj.foo + obj.bar + obj.trzy) === 'razdwatrzy';
	};


/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var keys  = __webpack_require__(31)
	  , value = __webpack_require__(34)

	  , max = Math.max;

	module.exports = function (dest, src/*, …srcn*/) {
		var error, i, l = max(arguments.length, 2), assign;
		dest = Object(value(dest));
		assign = function (key) {
			try { dest[key] = src[key]; } catch (e) {
				if (!error) error = e;
			}
		};
		for (i = 1; i < l; ++i) {
			src = arguments[i];
			keys(src).forEach(assign);
		}
		if (error !== undefined) throw error;
		return dest;
	};


/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(32)()
		? Object.keys
		: __webpack_require__(33);


/***/ },
/* 32 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function () {
		try {
			Object.keys('primitive');
			return true;
		} catch (e) { return false; }
	};


/***/ },
/* 33 */
/***/ function(module, exports) {

	'use strict';

	var keys = Object.keys;

	module.exports = function (object) {
		return keys(object == null ? object : Object(object));
	};


/***/ },
/* 34 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (value) {
		if (value == null) throw new TypeError("Cannot use null or undefined");
		return value;
	};


/***/ },
/* 35 */
/***/ function(module, exports) {

	'use strict';

	var forEach = Array.prototype.forEach, create = Object.create;

	var process = function (src, obj) {
		var key;
		for (key in src) obj[key] = src[key];
	};

	module.exports = function (options/*, …options*/) {
		var result = create(null);
		forEach.call(arguments, function (options) {
			if (options == null) return;
			process(Object(options), result);
		});
		return result;
	};


/***/ },
/* 36 */
/***/ function(module, exports) {

	// Deprecated

	'use strict';

	module.exports = function (obj) { return typeof obj === 'function'; };


/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	module.exports = __webpack_require__(38)()
		? String.prototype.contains
		: __webpack_require__(39);


/***/ },
/* 38 */
/***/ function(module, exports) {

	'use strict';

	var str = 'razdwatrzy';

	module.exports = function () {
		if (typeof str.contains !== 'function') return false;
		return ((str.contains('dwa') === true) && (str.contains('foo') === false));
	};


/***/ },
/* 39 */
/***/ function(module, exports) {

	'use strict';

	var indexOf = String.prototype.indexOf;

	module.exports = function (searchString/*, position*/) {
		return indexOf.call(this, searchString, arguments[1]) > -1;
	};


/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var isSymbol = __webpack_require__(41);

	module.exports = function (value) {
		if (!isSymbol(value)) throw new TypeError(value + " is not a symbol");
		return value;
	};


/***/ },
/* 41 */
/***/ function(module, exports) {

	'use strict';

	module.exports = function (x) {
		if (!x) return false;
		if (typeof x === 'symbol') return true;
		if (!x.constructor) return false;
		if (x.constructor.name !== 'Symbol') return false;
		return (x[x.constructor.toStringTag] === 'Symbol');
	};


/***/ },
/* 42 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = _xblocksCore.view.create({
	    displayName: 'xb-input_controller',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        'autoFocus': _react.PropTypes.bool,
	        'autoComplete': _react.PropTypes.oneOf(['on', 'off']),
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
	        var props = {
	            'autoFocus': this.props.autoFocus,
	            'autoComplete': this.props.autoComplete,
	            'className': this.props.className,
	            'disabled': this.props.disabled,
	            'name': this.props.name,
	            'onChange': this.props.onChange,
	            'placeholder': this.props.placeholder || '', // macos inserts placeholder default
	            'readOnly': this.props.readOnly,
	            'required': this.props.required,
	            'tabIndex': this.props.tabIndex,
	            'value': this.props.value
	        };

	        if (this.props.multiline) {
	            return React.createElement('textarea', _extends({}, props, { rows: this.props.rows, cols: this.props.cols }));
	        } else {
	            return React.createElement('input', _extends({}, props, { type: 'text' }));
	        }
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 43 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_43__;

/***/ },
/* 44 */
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
/* 45 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Focus element interface
	 *
	 * @example
	 * import { create } from 'xblocks-core';
	 * import mixinFocus from 'mixin/element/focusComponent';
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
	            _lodash2.default.invoke(_reactDom2.default.findDOMNode(this.getComponent()), 'focus');
	        },

	        blur: function blur() {
	            _lodash2.default.invoke(_reactDom2.default.findDOMNode(this.getComponent()), 'blur');
	        }
	    }
	};

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = ".xb-input._simple_size-s,\n.xb-input._simple_size-m,\n.xb-input._simple_size-l,\n.xb-input._simple_size-xl,\n.xb-input._complex_size-s,\n.xb-input._complex_size-s > ._content > ._controller,\n.xb-input._complex_size-m,\n.xb-input._complex_size-m > ._content > ._controller,\n.xb-input._complex_size-l,\n.xb-input._complex_size-l > ._content > ._controller,\n.xb-input._complex_size-xl,\n.xb-input._complex_size-xl > ._content > ._controller {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: transparent;\n  font: inherit;\n  -webkit-appearance: none;\n}\n.xb-input._simple_size-s::-ms-clear,\n.xb-input._simple_size-m::-ms-clear,\n.xb-input._simple_size-l::-ms-clear,\n.xb-input._simple_size-xl::-ms-clear,\n.xb-input._complex_size-s::-ms-clear,\n.xb-input._complex_size-s > ._content > ._controller::-ms-clear,\n.xb-input._complex_size-m::-ms-clear,\n.xb-input._complex_size-m > ._content > ._controller::-ms-clear,\n.xb-input._complex_size-l::-ms-clear,\n.xb-input._complex_size-l > ._content > ._controller::-ms-clear,\n.xb-input._complex_size-xl::-ms-clear,\n.xb-input._complex_size-xl > ._content > ._controller::-ms-clear {\n  display: none;\n}\n.xb-input._simple_size-s:focus,\n.xb-input._simple_size-m:focus,\n.xb-input._simple_size-l:focus,\n.xb-input._simple_size-xl:focus,\n.xb-input._complex_size-s:focus,\n.xb-input._complex_size-s > ._content > ._controller:focus,\n.xb-input._complex_size-m:focus,\n.xb-input._complex_size-m > ._content > ._controller:focus,\n.xb-input._complex_size-l:focus,\n.xb-input._complex_size-l > ._content > ._controller:focus,\n.xb-input._complex_size-xl:focus,\n.xb-input._complex_size-xl > ._content > ._controller:focus {\n  outline: none;\n}\n.xb-input._complex_size-s > ._reset,\n.xb-input._complex_size-m > ._reset,\n.xb-input._complex_size-l > ._reset,\n.xb-input._complex_size-xl > ._reset {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  vertical-align: middle;\n  margin-top: -0.2em;\n  background: 50% no-repeat;\n}\n.xb-input._complex_size-s > ._reset,\n.xb-input._complex_size-m > ._reset,\n.xb-input._complex_size-l > ._reset,\n.xb-input._complex_size-xl > ._reset {\n  width: 14px;\n  height: 14px;\n}\n.xb-input._complex_size-s > ._reset:before,\n.xb-input._complex_size-m > ._reset:before,\n.xb-input._complex_size-l > ._reset:before,\n.xb-input._complex_size-xl > ._reset:before,\n.xb-input._complex_size-s > ._reset:after,\n.xb-input._complex_size-m > ._reset:after,\n.xb-input._complex_size-l > ._reset:after,\n.xb-input._complex_size-xl > ._reset:after {\n  content: \"\";\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  width: 20px;\n  border-top: 1px solid;\n  margin-left: -10px;\n  -webkit-transform: translateY(-0.5px) rotate(45deg);\n  -moz-transform: translateY(-0.5px) rotate(45deg);\n    -o-transform: translateY(-0.5px) rotate(45deg);\n       transform: translateY(-0.5px) rotate(45deg);\n}\n.xb-input._complex_size-s > ._reset:after,\n.xb-input._complex_size-m > ._reset:after,\n.xb-input._complex_size-l > ._reset:after,\n.xb-input._complex_size-xl > ._reset:after {\n  -webkit-transform: translateY(-0.5px) rotate(-45deg);\n  -moz-transform: translateY(-0.5px) rotate(-45deg);\n    -o-transform: translateY(-0.5px) rotate(-45deg);\n       transform: translateY(-0.5px) rotate(-45deg);\n}\n.xb-input._complex_size-s > ._reset,\n.xb-input._complex_size-m > ._reset,\n.xb-input._complex_size-l > ._reset,\n.xb-input._complex_size-xl > ._reset {\n  cursor: pointer;\n  opacity: 0.25;\n}\n.xb-input._complex_size-s > ._reset:hover,\n.xb-input._complex_size-m > ._reset:hover,\n.xb-input._complex_size-l > ._reset:hover,\n.xb-input._complex_size-xl > ._reset:hover {\n  opacity: 1;\n}\ninput.xb-input {\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n}\n.xb-input._ghost:not(:focus):not(:hover) {\n  border: none;\n  background: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.xb-input._ghost:not(:focus):not(:hover) > ._content > ._controller:not(:focus) + ._view {\n  border: none;\n  background: none;\n  -webkit-box-shadow: none;\n          box-shadow: none;\n}\n.xb-input._simple_size-s {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 3px 6px;\n  min-height: 24px;\n}\n.xb-input._simple_size-s,\n.xb-input._simple_size-m,\n.xb-input._simple_size-l,\n.xb-input._simple_size-xl,\n.xb-input._complex_size-s,\n.xb-input._complex_size-s > ._content > ._controller,\n.xb-input._complex_size-m,\n.xb-input._complex_size-m > ._content > ._controller,\n.xb-input._complex_size-l,\n.xb-input._complex_size-l > ._content > ._controller,\n.xb-input._complex_size-xl,\n.xb-input._complex_size-xl > ._content > ._controller {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  max-width: 100%;\n  cursor: text;\n  vertical-align: baseline;\n}\n.xb-input._simple_size-s {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\ntextarea.xb-input._simple_size-s {\n  vertical-align: top;\n}\n.xb-input._simple_size-s:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._simple_size-m {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 5px 8px;\n  min-height: 28px;\n}\n.xb-input._simple_size-m {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\ntextarea.xb-input._simple_size-m {\n  vertical-align: top;\n}\n.xb-input._simple_size-m:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._simple_size-l {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n  font-size: 15px;\n  line-height: 20px;\n  padding: 5px 10px;\n  min-height: 32px;\n}\n.xb-input._simple_size-l {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\ntextarea.xb-input._simple_size-l {\n  vertical-align: top;\n}\n.xb-input._simple_size-l:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._simple_size-xl {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  z-index: 1;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n  font-size: 18px;\n  line-height: 26px;\n  padding: 4px 12px;\n  min-height: 36px;\n}\n.xb-input._simple_size-xl {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\ntextarea.xb-input._simple_size-xl {\n  vertical-align: top;\n}\n.xb-input._simple_size-xl:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._complex_size-s {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 3px 6px;\n  min-height: 22px;\n}\n.xb-input._complex_size-s._autosize {\n  width: auto !important;\n}\n.xb-input._complex_size-s > xb-link {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  cursor: pointer;\n  padding: 0 6px;\n  margin-left: -6px;\n}\n.xb-input._complex_size-s > xb-link,\n.xb-input._complex_size-s > ._left,\n.xb-input._complex_size-m > xb-link,\n.xb-input._complex_size-m > ._left,\n.xb-input._complex_size-l > xb-link,\n.xb-input._complex_size-l > ._left,\n.xb-input._complex_size-xl > xb-link,\n.xb-input._complex_size-xl > ._left {\n  position: relative;\n  z-index: 9;\n  float: left;\n}\n.xb-input._complex_size-s > xb-link > .xb-link {\n  outline: 0;\n}\n.xb-input._complex_size-s {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.xb-input._complex_size-s > ._content > ._controller {\n  width: 400px;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  resize: none;\n}\ntextarea.xb-input._complex_size-s > ._content > ._controller {\n  vertical-align: top;\n}\n.xb-input._complex_size-s > ._content > ._controller {\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n}\n.xb-input._complex_size-s > ._content > textarea._controller {\n  resize: none;\n  display: block;\n}\n.xb-input._complex_size-s > ._content > ._view {\n  z-index: 1;\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n}\n.xb-input._complex_size-s :focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._complex_size-s > ._content > ._hint {\n  position: relative;\n  display: block;\n  height: 0;\n  color: rgba(0,0,0,0.5);\n}\n.xb-input._complex_size-s > ._content > ._hint > ._hint-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 13px;\n  line-height: 16px;\n  pointer-events: none;\n  z-index: 9;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.xb-input._complex_size-s > ._content > ._hint > ._hint-ghost {\n  visibility: hidden;\n}\n.xb-input._complex_size-s > ._left {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 6px;\n  margin-left: -6px;\n}\n.xb-input._complex_size-s > ._right {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 6px;\n  margin-right: -6px;\n}\n.xb-input._complex_size-s > ._right,\n.xb-input._complex_size-s > ._reset,\n.xb-input._complex_size-m > ._right,\n.xb-input._complex_size-m > ._reset,\n.xb-input._complex_size-l > ._right,\n.xb-input._complex_size-l > ._reset,\n.xb-input._complex_size-xl > ._right,\n.xb-input._complex_size-xl > ._reset {\n  -webkit-order: 1;\n  -webkit-box-ordinal-group: 2;\n     -moz-box-ordinal-group: 2;\n          order: 1;\n  position: relative;\n  z-index: 9;\n  float: right;\n}\n.xb-input._complex_size-s > ._content,\n.xb-input._complex_size-m > ._content,\n.xb-input._complex_size-l > ._content,\n.xb-input._complex_size-xl > ._content {\n  -webkit-flex-grow: 1;\n  -webkit-box-flex: 1;\n     -moz-box-flex: 1;\n          flex-grow: 1;\n  display: block;\n  overflow: hidden;\n  height: 100%;\n}\n.xb-input._complex_size-s > ._reset {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 3px 6px;\n  min-height: 22px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: -3px;\n  margin-bottom: -3px;\n  margin-right: -6px;\n  color: #000;\n  width: 23px;\n}\n.xb-input._complex_size-s > ._reset:before,\n.xb-input._complex_size-s > ._reset:after {\n  width: 14px;\n  margin-left: -7px;\n}\n.xb-input._complex_size-m {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 5px 8px;\n  min-height: 26px;\n}\n.xb-input._complex_size-m._autosize {\n  width: auto !important;\n}\n.xb-input._complex_size-m > xb-link {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  cursor: pointer;\n  padding: 0 8px;\n  margin-left: -8px;\n}\n.xb-input._complex_size-m > xb-link > .xb-link {\n  outline: 0;\n}\n.xb-input._complex_size-m {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.xb-input._complex_size-m > ._content > ._controller {\n  width: 400px;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  resize: none;\n}\ntextarea.xb-input._complex_size-m > ._content > ._controller {\n  vertical-align: top;\n}\n.xb-input._complex_size-m > ._content > ._controller {\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n}\n.xb-input._complex_size-m > ._content > textarea._controller {\n  resize: none;\n  display: block;\n}\n.xb-input._complex_size-m > ._content > ._view {\n  z-index: 1;\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n}\n.xb-input._complex_size-m :focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._complex_size-m > ._content > ._hint {\n  position: relative;\n  display: block;\n  height: 0;\n  color: rgba(0,0,0,0.5);\n}\n.xb-input._complex_size-m > ._content > ._hint > ._hint-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 13px;\n  line-height: 16px;\n  pointer-events: none;\n  z-index: 9;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.xb-input._complex_size-m > ._content > ._hint > ._hint-ghost {\n  visibility: hidden;\n}\n.xb-input._complex_size-m > ._left {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 8px;\n  margin-left: -8px;\n}\n.xb-input._complex_size-m > ._right {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 8px;\n  margin-right: -8px;\n}\n.xb-input._complex_size-m > ._reset {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  font-size: 13px;\n  line-height: 16px;\n  padding: 5px 8px;\n  min-height: 26px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: -5px;\n  margin-bottom: -5px;\n  margin-right: -8px;\n  color: #000;\n  width: 26px;\n}\n.xb-input._complex_size-m > ._reset:before,\n.xb-input._complex_size-m > ._reset:after {\n  width: 14px;\n  margin-left: -7px;\n}\n.xb-input._complex_size-l {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 15px;\n  line-height: 20px;\n  padding: 5px 10px;\n  min-height: 30px;\n}\n.xb-input._complex_size-l._autosize {\n  width: auto !important;\n}\n.xb-input._complex_size-l > xb-link {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  cursor: pointer;\n  padding: 0 10px;\n  margin-left: -10px;\n}\n.xb-input._complex_size-l > xb-link > .xb-link {\n  outline: 0;\n}\n.xb-input._complex_size-l {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.xb-input._complex_size-l > ._content > ._controller {\n  width: 400px;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  resize: none;\n}\ntextarea.xb-input._complex_size-l > ._content > ._controller {\n  vertical-align: top;\n}\n.xb-input._complex_size-l > ._content > ._controller {\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n}\n.xb-input._complex_size-l > ._content > textarea._controller {\n  resize: none;\n  display: block;\n}\n.xb-input._complex_size-l > ._content > ._view {\n  z-index: 1;\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n}\n.xb-input._complex_size-l :focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._complex_size-l > ._content > ._hint {\n  position: relative;\n  display: block;\n  height: 0;\n  color: rgba(0,0,0,0.5);\n}\n.xb-input._complex_size-l > ._content > ._hint > ._hint-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 15px;\n  line-height: 20px;\n  pointer-events: none;\n  z-index: 9;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.xb-input._complex_size-l > ._content > ._hint > ._hint-ghost {\n  visibility: hidden;\n}\n.xb-input._complex_size-l > ._left {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 10px;\n  margin-left: -10px;\n}\n.xb-input._complex_size-l > ._right {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 10px;\n  margin-right: -10px;\n}\n.xb-input._complex_size-l > ._reset {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  font-size: 15px;\n  line-height: 20px;\n  padding: 5px 10px;\n  min-height: 30px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: -5px;\n  margin-bottom: -5px;\n  margin-right: -10px;\n  color: #000;\n  width: 35px;\n}\n.xb-input._complex_size-xl {\n  position: relative;\n  font-family: Arial, sans-serif;\n  width: 400px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  font-size: 18px;\n  line-height: 26px;\n  padding: 4px 12px;\n  min-height: 34px;\n}\n.xb-input._complex_size-xl._autosize {\n  width: auto !important;\n}\n.xb-input._complex_size-xl > xb-link {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  cursor: pointer;\n  padding: 0 12px;\n  margin-left: -12px;\n}\n.xb-input._complex_size-xl > xb-link > .xb-link {\n  outline: 0;\n}\n.xb-input._complex_size-xl {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n}\n.xb-input._complex_size-xl > ._content > ._controller {\n  width: 400px;\n  z-index: 9;\n  width: 100%;\n  height: 100%;\n  resize: none;\n}\ntextarea.xb-input._complex_size-xl > ._content > ._controller {\n  vertical-align: top;\n}\n.xb-input._complex_size-xl > ._content > ._controller {\n  -webkit-appearance: textfield;\n     -moz-appearance: textfield;\n          appearance: textfield;\n}\n.xb-input._complex_size-xl > ._content > textarea._controller {\n  resize: none;\n  display: block;\n}\n.xb-input._complex_size-xl > ._content > ._view {\n  z-index: 1;\n  position: absolute;\n  top: -1px;\n  right: -1px;\n  bottom: -1px;\n  left: -1px;\n  color: #000;\n  border: 1px solid rgba(0,0,0,0.2);\n  background: -webkit-linear-gradient(#fff, #fff);\n  background: -webkit-gradient(linear, left top, left bottom, from(#fff), to(#fff));\n  background: -moz-linear-gradient(#fff, #fff);\n  background: -o-linear-gradient(#fff, #fff);\n  background: linear-gradient(#fff, #fff);\n  background-clip: padding-box;\n  background-size: 16px 16px;\n}\n.xb-input._complex_size-xl :focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-input._complex_size-xl > ._content > ._hint {\n  position: relative;\n  display: block;\n  height: 0;\n  color: rgba(0,0,0,0.5);\n}\n.xb-input._complex_size-xl > ._content > ._hint > ._hint-inner {\n  position: absolute;\n  top: 0;\n  left: 0;\n  font-size: 18px;\n  line-height: 26px;\n  pointer-events: none;\n  z-index: 9;\n  max-width: 100%;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.xb-input._complex_size-xl > ._content > ._hint > ._hint-ghost {\n  visibility: hidden;\n}\n.xb-input._complex_size-xl > ._left {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 12px;\n  margin-left: -12px;\n}\n.xb-input._complex_size-xl > ._right {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  height: auto;\n  padding: 0 12px;\n  margin-right: -12px;\n}\n.xb-input._complex_size-xl > ._reset {\n  margin: 0 0 0 0;\n  padding: 0 0 0 0;\n  font-size: 18px;\n  line-height: 26px;\n  padding: 4px 12px;\n  min-height: 34px;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  margin-top: -4px;\n  margin-bottom: -4px;\n  margin-right: -12px;\n  color: #000;\n  width: 38px;\n}\n.xb-input._disabled {\n  cursor: default !important;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.xb-input._disabled .xb-input._disabled {\n  opacity: 1;\n}\n"

/***/ },
/* 47 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(48);

	__webpack_require__(49);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(52);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(53);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focusComponent = __webpack_require__(45);

	var _focusComponent2 = _interopRequireDefault(_focusComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * xb-button html element
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
	exports.default = _context.xb.Button = (0, _xblocksCore.create)('xb-button', [_disabled2.default, _checked2.default, _inputValueProps2.default, _focusComponent2.default, {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        componentStyle: {
	            get: function get() {
	                var type = this.attrs.type;
	                var styles = _defineProperty({}, this.xtagName, __webpack_require__(54));

	                switch (type) {
	                    case 'file':
	                    case 'label':
	                        styles[this.xtagName + '_' + type] = __webpack_require__(55)("./_" + type + '.styl');
	                        break;
	                }

	                return styles;
	            }
	        },

	        isShadowSupported: {
	            get: _lodash2.default.stubFalse
	        },

	        defaultValue: {
	            get: function get() {
	                var type = this.attrs.type;

	                switch (type) {
	                    case 'checkbox':
	                    case 'radio':
	                        return 'on';
	                }

	                return '';
	            }
	        }
	    }
	}]);

/***/ },
/* 48 */
1,
/* 49 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _resetLastRadioChecked = __webpack_require__(50);

	var _resetLastRadioChecked2 = _interopRequireDefault(_resetLastRadioChecked);

	var _filterProps = __webpack_require__(21);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	var _exportPropTypes = __webpack_require__(22);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _commonAttrs = __webpack_require__(16);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _content = __webpack_require__(51);

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

	    /**
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
	     */
	    propTypes: {
	        'autofocus': _react.PropTypes.bool,
	        'checked': _react.PropTypes.bool,
	        'for': _react.PropTypes.string,
	        'form': _react.PropTypes.string,
	        'href': _react.PropTypes.string,
	        'multiple': _react.PropTypes.bool,
	        'name': _react.PropTypes.string,
	        'required': _react.PropTypes.bool,
	        'size': _react.PropTypes.oneOf(['s', 'm', 'l', 'xl']).isRequired,
	        'target': _react.PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
	        'theme': _react.PropTypes.oneOf(['action', 'dark', 'normal', 'clear', 'dark-pseudo', 'pseudo']).isRequired,
	        'type': _react.PropTypes.oneOf(['label', 'inline', 'link', 'file', 'button', 'submit', 'checkbox', 'radio']).isRequired,
	        'value': _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'checked': false,
	            'data-xb-tabindex': '0',
	            'disabled': false,
	            'multiple': false,
	            'required': false,
	            'size': 'm',
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
	            (0, _resetLastRadioChecked2.default)(this.context.container, nextProps.name);
	        }
	    },

	    componentWillMount: function componentWillMount() {
	        if (this.props.type === 'radio' && this.state.checked) {
	            (0, _resetLastRadioChecked2.default)(this.context.container, this.props.name);
	        }
	    },

	    handleChange: function handleChange(event) {
	        this.context.container.checked = event.target.checked;
	    },

	    handleFocus: function handleFocus() {
	        this.setState({ focused: true });
	    },

	    handleBlur: function handleBlur() {
	        this.setState({ focused: false });
	    },

	    render: function render() {
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-button': true,
	            '_disabled': this.props.disabled,
	            '_focused': this.state.focused
	        }, '_theme-' + this.props.theme + '_size-' + this.props.size, true));

	        var tabIndex = this.getTabIndex();
	        var icoProps = (0, _filterProps2.default)(/^xb-ico-/, this.props);
	        var type = this.props.type;
	        var content = React.createElement(_content2.default, { key: 'content', ico: icoProps });

	        if (type === 'link') {
	            return React.createElement(
	                'a',
	                { className: classes,
	                    href: this.props.href,
	                    name: this.props.name,
	                    tabIndex: tabIndex,
	                    target: this.props.target,
	                    title: this.props.title },
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
	                            onBlur: this.handleBlur,
	                            onFocus: this.handleFocus,
	                            form: this.props.form,
	                            tabIndex: tabIndex })
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
	                    readOnly: true,
	                    required: this.props.required,
	                    onBlur: this.handleBlur,
	                    onFocus: this.handleFocus,
	                    onChange: this.handleChange,
	                    type: type,
	                    value: this.props.value,
	                    tabIndex: tabIndex }));
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
	                            onBlur: this.handleBlur,
	                            onFocus: this.handleFocus,
	                            tabIndex: tabIndex })
	                    )
	                ));
	            }

	            children.push(content);

	            return React.createElement(
	                'label',
	                { className: classes,
	                    htmlFor: this.props['for'],
	                    title: this.props.title },
	                children
	            );
	        } else if (type === 'inline') {
	            return React.createElement(
	                'span',
	                { className: classes,
	                    tabIndex: tabIndex,
	                    title: this.props.title },
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 50 */
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
/* 51 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

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
	        var classes = (0, _classnames2.default)({
	            '_content': true,
	            '_empty': this.context.isEmptyContent()
	        });

	        var children = [React.createElement(
	            'span',
	            { className: '_text', key: 'text' },
	            this.context.content()
	        )];

	        if (!_lodash2.default.isEmpty(this.props.ico) && this.props.ico.type) {
	            var float = this.props.ico.float;

	            if (!float || float === 'left') {
	                children.unshift(React.createElement('xb-ico', _extends({}, this.props.ico, { 'class': '_ico _before', key: 'ico' })));
	            } else if (float === 'right') {
	                children.push(React.createElement('xb-ico', _extends({}, this.props.ico, { 'class': '_ico _after', key: 'ico' })));
	            }
	        }

	        return React.createElement(
	            'span',
	            { className: classes },
	            children
	        );
	    }
	});
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 52 */
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
/* 53 */
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
/* 54 */
/***/ function(module, exports) {

	module.exports = ".xb-button._theme-normal_size-s,\n.xb-button._theme-normal_size-m,\n.xb-button._theme-normal_size-l,\n.xb-button._theme-normal_size-xl,\n.xb-button._theme-action_size-s,\n.xb-button._theme-action_size-m,\n.xb-button._theme-action_size-l,\n.xb-button._theme-action_size-xl,\n.xb-button._theme-pseudo_size-s,\n.xb-button._theme-pseudo_size-m,\n.xb-button._theme-pseudo_size-l,\n.xb-button._theme-pseudo_size-xl,\n.xb-button._theme-dark_size-s,\n.xb-button._theme-dark_size-m,\n.xb-button._theme-dark_size-l,\n.xb-button._theme-dark_size-xl,\n.xb-button._theme-dark-pseudo_size-s,\n.xb-button._theme-dark-pseudo_size-m,\n.xb-button._theme-dark-pseudo_size-l,\n.xb-button._theme-dark-pseudo_size-xl,\n.xb-button._theme-clear_size-s,\n.xb-button._theme-clear_size-m,\n.xb-button._theme-clear_size-l,\n.xb-button._theme-clear_size-xl {\n  padding: 0;\n  margin: 0;\n  border: none;\n  background: transparent;\n  -moz-appearance: none;\n  font: inherit;\n}\n.xb-button._theme-normal_size-s::-moz-focus-inner,\n.xb-button._theme-normal_size-m::-moz-focus-inner,\n.xb-button._theme-normal_size-l::-moz-focus-inner,\n.xb-button._theme-normal_size-xl::-moz-focus-inner,\n.xb-button._theme-action_size-s::-moz-focus-inner,\n.xb-button._theme-action_size-m::-moz-focus-inner,\n.xb-button._theme-action_size-l::-moz-focus-inner,\n.xb-button._theme-action_size-xl::-moz-focus-inner,\n.xb-button._theme-pseudo_size-s::-moz-focus-inner,\n.xb-button._theme-pseudo_size-m::-moz-focus-inner,\n.xb-button._theme-pseudo_size-l::-moz-focus-inner,\n.xb-button._theme-pseudo_size-xl::-moz-focus-inner,\n.xb-button._theme-dark_size-s::-moz-focus-inner,\n.xb-button._theme-dark_size-m::-moz-focus-inner,\n.xb-button._theme-dark_size-l::-moz-focus-inner,\n.xb-button._theme-dark_size-xl::-moz-focus-inner,\n.xb-button._theme-dark-pseudo_size-s::-moz-focus-inner,\n.xb-button._theme-dark-pseudo_size-m::-moz-focus-inner,\n.xb-button._theme-dark-pseudo_size-l::-moz-focus-inner,\n.xb-button._theme-dark-pseudo_size-xl::-moz-focus-inner,\n.xb-button._theme-clear_size-s::-moz-focus-inner,\n.xb-button._theme-clear_size-m::-moz-focus-inner,\n.xb-button._theme-clear_size-l::-moz-focus-inner,\n.xb-button._theme-clear_size-xl::-moz-focus-inner {\n  padding: 0;\n  border: none;\n}\na.xb-button {\n  text-decoration: none;\n}\n.xb-button {\n  font-weight: inherit;\n  width: 100%;\n}\n.xb-button > ._content {\n  width: 100%;\n}\n.xb-button > ._content > ._ico {\n  line-height: inherit;\n}\n.xb-button > ._content._empty > ._ico {\n  margin-right: -5px !important;\n  margin-left: -5px !important;\n}\n.xb-button > ._controller {\n  position: absolute !important;\n  clip: rect(1px,1px,1px,1px) !important;\n}\n.xb-button > ._controller:checked + ._content {\n  border-color: rgba(153,122,0,0.5);\n  -webkit-box-shadow: inset 0 90px #ffeba0;\n          box-shadow: inset 0 90px #ffeba0;\n}\n.xb-button._theme-normal_size-s {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  border-color: rgba(0,0,0,0.2);\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n}\n.xb-button._theme-normal_size-s,\n.xb-button._theme-normal_size-m,\n.xb-button._theme-normal_size-l,\n.xb-button._theme-normal_size-xl,\n.xb-button._theme-action_size-s,\n.xb-button._theme-action_size-m,\n.xb-button._theme-action_size-l,\n.xb-button._theme-action_size-xl,\n.xb-button._theme-pseudo_size-s,\n.xb-button._theme-pseudo_size-m,\n.xb-button._theme-pseudo_size-l,\n.xb-button._theme-pseudo_size-xl,\n.xb-button._theme-dark_size-s,\n.xb-button._theme-dark_size-m,\n.xb-button._theme-dark_size-l,\n.xb-button._theme-dark_size-xl,\n.xb-button._theme-dark-pseudo_size-s,\n.xb-button._theme-dark-pseudo_size-m,\n.xb-button._theme-dark-pseudo_size-l,\n.xb-button._theme-dark-pseudo_size-xl,\n.xb-button._theme-clear_size-s,\n.xb-button._theme-clear_size-m,\n.xb-button._theme-clear_size-l,\n.xb-button._theme-clear_size-xl {\n  display: inline-block;\n  vertical-align: baseline;\n  white-space: nowrap;\n  text-decoration: none;\n  position: relative;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  max-width: 100%;\n  cursor: pointer;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n}\n.xb-button._theme-normal_size-s > ._content {\n  background: #fff;\n}\n.xb-button._theme-normal_size-s:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-normal_size-s:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-normal_size-s:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-normal_size-s:active ._content {\n  background: #f6f5f3;\n}\n.xb-button._theme-normal_size-s > ._content,\n.xb-button._theme-normal_size-m > ._content,\n.xb-button._theme-normal_size-l > ._content,\n.xb-button._theme-normal_size-xl > ._content,\n.xb-button._theme-action_size-s > ._content,\n.xb-button._theme-action_size-m > ._content,\n.xb-button._theme-action_size-l > ._content,\n.xb-button._theme-action_size-xl > ._content,\n.xb-button._theme-pseudo_size-s > ._content,\n.xb-button._theme-pseudo_size-m > ._content,\n.xb-button._theme-pseudo_size-l > ._content,\n.xb-button._theme-pseudo_size-xl > ._content,\n.xb-button._theme-dark_size-s > ._content,\n.xb-button._theme-dark_size-m > ._content,\n.xb-button._theme-dark_size-l > ._content,\n.xb-button._theme-dark_size-xl > ._content,\n.xb-button._theme-dark-pseudo_size-s > ._content,\n.xb-button._theme-dark-pseudo_size-m > ._content,\n.xb-button._theme-dark-pseudo_size-l > ._content,\n.xb-button._theme-dark-pseudo_size-xl > ._content,\n.xb-button._theme-clear_size-s > ._content,\n.xb-button._theme-clear_size-m > ._content,\n.xb-button._theme-clear_size-l > ._content,\n.xb-button._theme-clear_size-xl > ._content {\n  position: relative;\n  display: block;\n  display: -webkit-inline-flex;\n  display: -webkit-inline-box;\n  display: -moz-inline-box;\n  display: inline-flex;\n  -webkit-box-sizing: border-box;\n     -moz-box-sizing: border-box;\n          box-sizing: border-box;\n  width: 100%;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n}\n.xb-button._theme-normal_size-s > ._content:before,\n.xb-button._theme-normal_size-m > ._content:before,\n.xb-button._theme-normal_size-l > ._content:before,\n.xb-button._theme-normal_size-xl > ._content:before,\n.xb-button._theme-action_size-s > ._content:before,\n.xb-button._theme-action_size-m > ._content:before,\n.xb-button._theme-action_size-l > ._content:before,\n.xb-button._theme-action_size-xl > ._content:before,\n.xb-button._theme-pseudo_size-s > ._content:before,\n.xb-button._theme-pseudo_size-m > ._content:before,\n.xb-button._theme-pseudo_size-l > ._content:before,\n.xb-button._theme-pseudo_size-xl > ._content:before,\n.xb-button._theme-dark_size-s > ._content:before,\n.xb-button._theme-dark_size-m > ._content:before,\n.xb-button._theme-dark_size-l > ._content:before,\n.xb-button._theme-dark_size-xl > ._content:before,\n.xb-button._theme-dark-pseudo_size-s > ._content:before,\n.xb-button._theme-dark-pseudo_size-m > ._content:before,\n.xb-button._theme-dark-pseudo_size-l > ._content:before,\n.xb-button._theme-dark-pseudo_size-xl > ._content:before,\n.xb-button._theme-clear_size-s > ._content:before,\n.xb-button._theme-clear_size-m > ._content:before,\n.xb-button._theme-clear_size-l > ._content:before,\n.xb-button._theme-clear_size-xl > ._content:before {\n  float: left;\n  content: \"\\a0\";\n  width: 0;\n  min-width: 0;\n}\n.xb-button._theme-normal_size-s > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-normal_size-s > ._content > ._text,\n.xb-button._theme-normal_size-m > ._content > ._text,\n.xb-button._theme-normal_size-l > ._content > ._text,\n.xb-button._theme-normal_size-xl > ._content > ._text,\n.xb-button._theme-action_size-s > ._content > ._text,\n.xb-button._theme-action_size-m > ._content > ._text,\n.xb-button._theme-action_size-l > ._content > ._text,\n.xb-button._theme-action_size-xl > ._content > ._text,\n.xb-button._theme-pseudo_size-s > ._content > ._text,\n.xb-button._theme-pseudo_size-m > ._content > ._text,\n.xb-button._theme-pseudo_size-l > ._content > ._text,\n.xb-button._theme-pseudo_size-xl > ._content > ._text,\n.xb-button._theme-dark_size-s > ._content > ._text,\n.xb-button._theme-dark_size-m > ._content > ._text,\n.xb-button._theme-dark_size-l > ._content > ._text,\n.xb-button._theme-dark_size-xl > ._content > ._text,\n.xb-button._theme-dark-pseudo_size-s > ._content > ._text,\n.xb-button._theme-dark-pseudo_size-m > ._content > ._text,\n.xb-button._theme-dark-pseudo_size-l > ._content > ._text,\n.xb-button._theme-dark-pseudo_size-xl > ._content > ._text,\n.xb-button._theme-clear_size-s > ._content > ._text,\n.xb-button._theme-clear_size-m > ._content > ._text,\n.xb-button._theme-clear_size-l > ._content > ._text,\n.xb-button._theme-clear_size-xl > ._content > ._text {\n  display: block;\n  -webkit-flex-shrink: 1;\n  flex-shrink: 1;\n  -webkit-flex-basis: 100%;\n  flex-basis: 100%;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  min-width: 0;\n}\n_:-ms-input-placeholder,\n:root .xb-button._theme-normal_size-s > ._content > ._text,\n:root .xb-button._theme-normal_size-m > ._content > ._text,\n:root .xb-button._theme-normal_size-l > ._content > ._text,\n:root .xb-button._theme-normal_size-xl > ._content > ._text,\n:root .xb-button._theme-action_size-s > ._content > ._text,\n:root .xb-button._theme-action_size-m > ._content > ._text,\n:root .xb-button._theme-action_size-l > ._content > ._text,\n:root .xb-button._theme-action_size-xl > ._content > ._text,\n:root .xb-button._theme-pseudo_size-s > ._content > ._text,\n:root .xb-button._theme-pseudo_size-m > ._content > ._text,\n:root .xb-button._theme-pseudo_size-l > ._content > ._text,\n:root .xb-button._theme-pseudo_size-xl > ._content > ._text,\n:root .xb-button._theme-dark_size-s > ._content > ._text,\n:root .xb-button._theme-dark_size-m > ._content > ._text,\n:root .xb-button._theme-dark_size-l > ._content > ._text,\n:root .xb-button._theme-dark_size-xl > ._content > ._text,\n:root .xb-button._theme-dark-pseudo_size-s > ._content > ._text,\n:root .xb-button._theme-dark-pseudo_size-m > ._content > ._text,\n:root .xb-button._theme-dark-pseudo_size-l > ._content > ._text,\n:root .xb-button._theme-dark-pseudo_size-xl > ._content > ._text,\n:root .xb-button._theme-clear_size-s > ._content > ._text,\n:root .xb-button._theme-clear_size-m > ._content > ._text,\n:root .xb-button._theme-clear_size-l > ._content > ._text,\n:root .xb-button._theme-clear_size-xl > ._content > ._text {\n  flex-basis: auto;\n  width: 100%;\n}\n.xb-button._theme-normal_size-s > ._content > ._before,\n.xb-button._theme-normal_size-m > ._content > ._before,\n.xb-button._theme-normal_size-l > ._content > ._before,\n.xb-button._theme-normal_size-xl > ._content > ._before,\n.xb-button._theme-action_size-s > ._content > ._before,\n.xb-button._theme-action_size-m > ._content > ._before,\n.xb-button._theme-action_size-l > ._content > ._before,\n.xb-button._theme-action_size-xl > ._content > ._before,\n.xb-button._theme-pseudo_size-s > ._content > ._before,\n.xb-button._theme-pseudo_size-m > ._content > ._before,\n.xb-button._theme-pseudo_size-l > ._content > ._before,\n.xb-button._theme-pseudo_size-xl > ._content > ._before,\n.xb-button._theme-dark_size-s > ._content > ._before,\n.xb-button._theme-dark_size-m > ._content > ._before,\n.xb-button._theme-dark_size-l > ._content > ._before,\n.xb-button._theme-dark_size-xl > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-s > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-m > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-l > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-xl > ._content > ._before,\n.xb-button._theme-clear_size-s > ._content > ._before,\n.xb-button._theme-clear_size-m > ._content > ._before,\n.xb-button._theme-clear_size-l > ._content > ._before,\n.xb-button._theme-clear_size-xl > ._content > ._before {\n  float: left;\n  -webkit-align-self: center;\n  align-self: center;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.xb-button._theme-normal_size-s > ._content > ._before,\n.xb-button._theme-action_size-s > ._content > ._before,\n.xb-button._theme-pseudo_size-s > ._content > ._before,\n.xb-button._theme-dark_size-s > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-s > ._content > ._before,\n.xb-button._theme-clear_size-s > ._content > ._before {\n  margin-right: 7px;\n  margin-left: -2px;\n}\n.xb-button._theme-normal_size-s > ._content > ._before:only-child,\n.xb-button._theme-action_size-s > ._content > ._before:only-child,\n.xb-button._theme-pseudo_size-s > ._content > ._before:only-child,\n.xb-button._theme-dark_size-s > ._content > ._before:only-child,\n.xb-button._theme-dark-pseudo_size-s > ._content > ._before:only-child,\n.xb-button._theme-clear_size-s > ._content > ._before:only-child {\n  margin-right: -2px;\n}\n.xb-button._theme-normal_size-s > ._content > ._after,\n.xb-button._theme-normal_size-m > ._content > ._after,\n.xb-button._theme-normal_size-l > ._content > ._after,\n.xb-button._theme-normal_size-xl > ._content > ._after,\n.xb-button._theme-action_size-s > ._content > ._after,\n.xb-button._theme-action_size-m > ._content > ._after,\n.xb-button._theme-action_size-l > ._content > ._after,\n.xb-button._theme-action_size-xl > ._content > ._after,\n.xb-button._theme-pseudo_size-s > ._content > ._after,\n.xb-button._theme-pseudo_size-m > ._content > ._after,\n.xb-button._theme-pseudo_size-l > ._content > ._after,\n.xb-button._theme-pseudo_size-xl > ._content > ._after,\n.xb-button._theme-dark_size-s > ._content > ._after,\n.xb-button._theme-dark_size-m > ._content > ._after,\n.xb-button._theme-dark_size-l > ._content > ._after,\n.xb-button._theme-dark_size-xl > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-s > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-m > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-l > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-xl > ._content > ._after,\n.xb-button._theme-clear_size-s > ._content > ._after,\n.xb-button._theme-clear_size-m > ._content > ._after,\n.xb-button._theme-clear_size-l > ._content > ._after,\n.xb-button._theme-clear_size-xl > ._content > ._after {\n  -webkit-order: 1;\n  -webkit-box-ordinal-group: 2;\n     -moz-box-ordinal-group: 2;\n          order: 1;\n  float: right;\n  -webkit-align-self: center;\n  align-self: center;\n  -webkit-flex-shrink: 0;\n  flex-shrink: 0;\n}\n.xb-button._theme-normal_size-s > ._content > ._after,\n.xb-button._theme-action_size-s > ._content > ._after,\n.xb-button._theme-pseudo_size-s > ._content > ._after,\n.xb-button._theme-dark_size-s > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-s > ._content > ._after,\n.xb-button._theme-clear_size-s > ._content > ._after {\n  margin-left: 7px;\n  margin-right: -2px;\n}\n.xb-button._theme-normal_size-s > ._content > ._after:only-child,\n.xb-button._theme-action_size-s > ._content > ._after:only-child,\n.xb-button._theme-pseudo_size-s > ._content > ._after:only-child,\n.xb-button._theme-dark_size-s > ._content > ._after:only-child,\n.xb-button._theme-dark-pseudo_size-s > ._content > ._after:only-child,\n.xb-button._theme-clear_size-s > ._content > ._after:only-child {\n  margin-left: -2px;\n}\n.xb-button._theme-normal_size-s > ._content {\n  padding: 0 9px;\n  line-height: 22px;\n  font-size: 13px;\n}\n.xb-button._theme-normal_size-m {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  border-color: rgba(0,0,0,0.2);\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n}\n.xb-button._theme-normal_size-m > ._content {\n  background: #fff;\n}\n.xb-button._theme-normal_size-m:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-normal_size-m:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-normal_size-m:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-normal_size-m:active ._content {\n  background: #f6f5f3;\n}\n.xb-button._theme-normal_size-m > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-normal_size-m > ._content > ._before,\n.xb-button._theme-action_size-m > ._content > ._before,\n.xb-button._theme-pseudo_size-m > ._content > ._before,\n.xb-button._theme-dark_size-m > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-m > ._content > ._before,\n.xb-button._theme-clear_size-m > ._content > ._before {\n  margin-right: 8px;\n  margin-left: -4px;\n}\n.xb-button._theme-normal_size-m > ._content > ._before:only-child,\n.xb-button._theme-action_size-m > ._content > ._before:only-child,\n.xb-button._theme-pseudo_size-m > ._content > ._before:only-child,\n.xb-button._theme-dark_size-m > ._content > ._before:only-child,\n.xb-button._theme-dark-pseudo_size-m > ._content > ._before:only-child,\n.xb-button._theme-clear_size-m > ._content > ._before:only-child {\n  margin-right: -4px;\n}\n.xb-button._theme-normal_size-m > ._content > ._after,\n.xb-button._theme-action_size-m > ._content > ._after,\n.xb-button._theme-pseudo_size-m > ._content > ._after,\n.xb-button._theme-dark_size-m > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-m > ._content > ._after,\n.xb-button._theme-clear_size-m > ._content > ._after {\n  margin-left: 8px;\n  margin-right: -4px;\n}\n.xb-button._theme-normal_size-m > ._content > ._after:only-child,\n.xb-button._theme-action_size-m > ._content > ._after:only-child,\n.xb-button._theme-pseudo_size-m > ._content > ._after:only-child,\n.xb-button._theme-dark_size-m > ._content > ._after:only-child,\n.xb-button._theme-dark-pseudo_size-m > ._content > ._after:only-child,\n.xb-button._theme-clear_size-m > ._content > ._after:only-child {\n  margin-left: -4px;\n}\n.xb-button._theme-normal_size-m > ._content {\n  padding: 0 12px;\n  line-height: 26px;\n  font-size: 13px;\n}\n.xb-button._theme-normal_size-l {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  border-color: rgba(0,0,0,0.2);\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n}\n.xb-button._theme-normal_size-l > ._content {\n  background: #fff;\n}\n.xb-button._theme-normal_size-l:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-normal_size-l:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-normal_size-l:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-normal_size-l:active ._content {\n  background: #f6f5f3;\n}\n.xb-button._theme-normal_size-l > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-normal_size-l > ._content > ._before,\n.xb-button._theme-action_size-l > ._content > ._before,\n.xb-button._theme-pseudo_size-l > ._content > ._before,\n.xb-button._theme-dark_size-l > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-l > ._content > ._before,\n.xb-button._theme-clear_size-l > ._content > ._before {\n  margin-right: 9px;\n  margin-left: -5px;\n}\n.xb-button._theme-normal_size-l > ._content > ._before:only-child,\n.xb-button._theme-action_size-l > ._content > ._before:only-child,\n.xb-button._theme-pseudo_size-l > ._content > ._before:only-child,\n.xb-button._theme-dark_size-l > ._content > ._before:only-child,\n.xb-button._theme-dark-pseudo_size-l > ._content > ._before:only-child,\n.xb-button._theme-clear_size-l > ._content > ._before:only-child {\n  margin-right: -5px;\n}\n.xb-button._theme-normal_size-l > ._content > ._after,\n.xb-button._theme-action_size-l > ._content > ._after,\n.xb-button._theme-pseudo_size-l > ._content > ._after,\n.xb-button._theme-dark_size-l > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-l > ._content > ._after,\n.xb-button._theme-clear_size-l > ._content > ._after {\n  margin-left: 9px;\n  margin-right: -5px;\n}\n.xb-button._theme-normal_size-l > ._content > ._after:only-child,\n.xb-button._theme-action_size-l > ._content > ._after:only-child,\n.xb-button._theme-pseudo_size-l > ._content > ._after:only-child,\n.xb-button._theme-dark_size-l > ._content > ._after:only-child,\n.xb-button._theme-dark-pseudo_size-l > ._content > ._after:only-child,\n.xb-button._theme-clear_size-l > ._content > ._after:only-child {\n  margin-left: -5px;\n}\n.xb-button._theme-normal_size-l > ._content {\n  padding: 0 14px;\n  line-height: 30px;\n  font-size: 15px;\n}\n.xb-button._theme-normal_size-xl {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  border-color: rgba(0,0,0,0.2);\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n}\n.xb-button._theme-normal_size-xl > ._content {\n  background: #fff;\n}\n.xb-button._theme-normal_size-xl:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-normal_size-xl:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-normal_size-xl:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-normal_size-xl:active ._content {\n  background: #f6f5f3;\n}\n.xb-button._theme-normal_size-xl > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-normal_size-xl > ._content > ._before,\n.xb-button._theme-action_size-xl > ._content > ._before,\n.xb-button._theme-pseudo_size-xl > ._content > ._before,\n.xb-button._theme-dark_size-xl > ._content > ._before,\n.xb-button._theme-dark-pseudo_size-xl > ._content > ._before,\n.xb-button._theme-clear_size-xl > ._content > ._before {\n  margin-right: 11px;\n  margin-left: -6px;\n}\n.xb-button._theme-normal_size-xl > ._content > ._before:only-child,\n.xb-button._theme-action_size-xl > ._content > ._before:only-child,\n.xb-button._theme-pseudo_size-xl > ._content > ._before:only-child,\n.xb-button._theme-dark_size-xl > ._content > ._before:only-child,\n.xb-button._theme-dark-pseudo_size-xl > ._content > ._before:only-child,\n.xb-button._theme-clear_size-xl > ._content > ._before:only-child {\n  margin-right: -6px;\n}\n.xb-button._theme-normal_size-xl > ._content > ._after,\n.xb-button._theme-action_size-xl > ._content > ._after,\n.xb-button._theme-pseudo_size-xl > ._content > ._after,\n.xb-button._theme-dark_size-xl > ._content > ._after,\n.xb-button._theme-dark-pseudo_size-xl > ._content > ._after,\n.xb-button._theme-clear_size-xl > ._content > ._after {\n  margin-left: 11px;\n  margin-right: -6px;\n}\n.xb-button._theme-normal_size-xl > ._content > ._after:only-child,\n.xb-button._theme-action_size-xl > ._content > ._after:only-child,\n.xb-button._theme-pseudo_size-xl > ._content > ._after:only-child,\n.xb-button._theme-dark_size-xl > ._content > ._after:only-child,\n.xb-button._theme-dark-pseudo_size-xl > ._content > ._after:only-child,\n.xb-button._theme-clear_size-xl > ._content > ._after:only-child {\n  margin-left: -6px;\n}\n.xb-button._theme-normal_size-xl > ._content {\n  padding: 0 17px;\n  line-height: 36px;\n  font-size: 18px;\n}\n.xb-button._theme-action_size-s {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(191,153,0,0.8);\n}\n.xb-button._theme-action_size-s:hover {\n  border-color: rgba(159,127,0,0.8);\n}\n.xb-button._theme-action_size-s:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-action_size-s:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-action_size-s:active ._content {\n  background: #fc0;\n}\n.xb-button._theme-action_size-s > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-action_size-s > ._content {\n  background: #ffdb4d;\n}\n.xb-button._theme-action_size-s > ._content {\n  padding: 0 9px;\n  line-height: 22px;\n  font-size: 13px;\n}\n.xb-button._theme-action_size-m {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(191,153,0,0.8);\n}\n.xb-button._theme-action_size-m:hover {\n  border-color: rgba(159,127,0,0.8);\n}\n.xb-button._theme-action_size-m:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-action_size-m:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-action_size-m:active ._content {\n  background: #fc0;\n}\n.xb-button._theme-action_size-m > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-action_size-m > ._content {\n  background: #ffdb4d;\n}\n.xb-button._theme-action_size-m > ._content {\n  padding: 0 12px;\n  line-height: 26px;\n  font-size: 13px;\n}\n.xb-button._theme-action_size-l {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(191,153,0,0.8);\n}\n.xb-button._theme-action_size-l:hover {\n  border-color: rgba(159,127,0,0.8);\n}\n.xb-button._theme-action_size-l:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-action_size-l:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-action_size-l:active ._content {\n  background: #fc0;\n}\n.xb-button._theme-action_size-l > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-action_size-l > ._content {\n  background: #ffdb4d;\n}\n.xb-button._theme-action_size-l > ._content {\n  padding: 0 14px;\n  line-height: 30px;\n  font-size: 15px;\n}\n.xb-button._theme-action_size-xl {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(191,153,0,0.8);\n}\n.xb-button._theme-action_size-xl:hover {\n  border-color: rgba(159,127,0,0.8);\n}\n.xb-button._theme-action_size-xl:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-action_size-xl:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-action_size-xl:active ._content {\n  background: #fc0;\n}\n.xb-button._theme-action_size-xl > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-action_size-xl > ._content {\n  background: #ffdb4d;\n}\n.xb-button._theme-action_size-xl > ._content {\n  padding: 0 17px;\n  line-height: 36px;\n  font-size: 18px;\n}\n.xb-button._theme-pseudo_size-s {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(0,0,0,0.2);\n}\n.xb-button._theme-pseudo_size-s:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-pseudo_size-s:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-pseudo_size-s:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-pseudo_size-s:active ._content {\n  background: rgba(0,0,0,0.05);\n}\n.xb-button._theme-pseudo_size-s > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-pseudo_size-s > ._content {\n  padding: 0 9px;\n  line-height: 22px;\n  font-size: 13px;\n}\n.xb-button._theme-pseudo_size-m {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(0,0,0,0.2);\n}\n.xb-button._theme-pseudo_size-m:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-pseudo_size-m:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-pseudo_size-m:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-pseudo_size-m:active ._content {\n  background: rgba(0,0,0,0.05);\n}\n.xb-button._theme-pseudo_size-m > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-pseudo_size-m > ._content {\n  padding: 0 12px;\n  line-height: 26px;\n  font-size: 13px;\n}\n.xb-button._theme-pseudo_size-l {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(0,0,0,0.2);\n}\n.xb-button._theme-pseudo_size-l:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-pseudo_size-l:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-pseudo_size-l:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-pseudo_size-l:active ._content {\n  background: rgba(0,0,0,0.05);\n}\n.xb-button._theme-pseudo_size-l > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-pseudo_size-l > ._content {\n  padding: 0 14px;\n  line-height: 30px;\n  font-size: 15px;\n}\n.xb-button._theme-pseudo_size-xl {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(0,0,0,0.2);\n}\n.xb-button._theme-pseudo_size-xl:hover {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-button._theme-pseudo_size-xl:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-pseudo_size-xl:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-pseudo_size-xl:active ._content {\n  background: rgba(0,0,0,0.05);\n}\n.xb-button._theme-pseudo_size-xl > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-pseudo_size-xl > ._content {\n  padding: 0 17px;\n  line-height: 36px;\n  font-size: 18px;\n}\n.xb-button._theme-dark_size-s {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark_size-s:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark_size-s:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark_size-s:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark_size-s:active ._content {\n  background: #111;\n}\n.xb-button._theme-dark_size-s > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark_size-s > ._content {\n  background: #000;\n}\n.xb-button._theme-dark_size-s > ._content {\n  padding: 0 9px;\n  line-height: 22px;\n  font-size: 13px;\n}\n.xb-button._theme-dark_size-m {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark_size-m:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark_size-m:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark_size-m:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark_size-m:active ._content {\n  background: #111;\n}\n.xb-button._theme-dark_size-m > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark_size-m > ._content {\n  background: #000;\n}\n.xb-button._theme-dark_size-m > ._content {\n  padding: 0 12px;\n  line-height: 26px;\n  font-size: 13px;\n}\n.xb-button._theme-dark_size-l {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark_size-l:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark_size-l:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark_size-l:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark_size-l:active ._content {\n  background: #111;\n}\n.xb-button._theme-dark_size-l > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark_size-l > ._content {\n  background: #000;\n}\n.xb-button._theme-dark_size-l > ._content {\n  padding: 0 14px;\n  line-height: 30px;\n  font-size: 15px;\n}\n.xb-button._theme-dark_size-xl {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark_size-xl:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark_size-xl:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark_size-xl:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark_size-xl:active ._content {\n  background: #111;\n}\n.xb-button._theme-dark_size-xl > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark_size-xl > ._content {\n  background: #000;\n}\n.xb-button._theme-dark_size-xl > ._content {\n  padding: 0 17px;\n  line-height: 36px;\n  font-size: 18px;\n}\n.xb-button._theme-dark-pseudo_size-s {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark-pseudo_size-s:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark-pseudo_size-s:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark-pseudo_size-s:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark-pseudo_size-s:active ._content {\n  background: rgba(255,255,255,0.1);\n}\n.xb-button._theme-dark-pseudo_size-s > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark-pseudo_size-s > ._content {\n  padding: 0 9px;\n  line-height: 22px;\n  font-size: 13px;\n}\n.xb-button._theme-dark-pseudo_size-m {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark-pseudo_size-m:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark-pseudo_size-m:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark-pseudo_size-m:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark-pseudo_size-m:active ._content {\n  background: rgba(255,255,255,0.1);\n}\n.xb-button._theme-dark-pseudo_size-m > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark-pseudo_size-m > ._content {\n  padding: 0 12px;\n  line-height: 26px;\n  font-size: 13px;\n}\n.xb-button._theme-dark-pseudo_size-l {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark-pseudo_size-l:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark-pseudo_size-l:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark-pseudo_size-l:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark-pseudo_size-l:active ._content {\n  background: rgba(255,255,255,0.1);\n}\n.xb-button._theme-dark-pseudo_size-l > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark-pseudo_size-l > ._content {\n  padding: 0 14px;\n  line-height: 30px;\n  font-size: 15px;\n}\n.xb-button._theme-dark-pseudo_size-xl {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #fff;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: rgba(255,255,255,0.35);\n}\n.xb-button._theme-dark-pseudo_size-xl:hover {\n  border-color: rgba(255,255,255,0.55);\n}\n.xb-button._theme-dark-pseudo_size-xl:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-dark-pseudo_size-xl:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-dark-pseudo_size-xl:active ._content {\n  background: rgba(255,255,255,0.1);\n}\n.xb-button._theme-dark-pseudo_size-xl > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-dark-pseudo_size-xl > ._content {\n  padding: 0 17px;\n  line-height: 36px;\n  font-size: 18px;\n}\n.xb-button._theme-clear_size-s {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: transparent;\n}\n.xb-button._theme-clear_size-s:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-clear_size-s:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-clear_size-s > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-clear_size-s > ._content {\n  padding: 0 9px;\n  line-height: 22px;\n  font-size: 13px;\n}\n.xb-button._theme-clear_size-m {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: transparent;\n}\n.xb-button._theme-clear_size-m:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-clear_size-m:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-clear_size-m > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-clear_size-m > ._content {\n  padding: 0 12px;\n  line-height: 26px;\n  font-size: 13px;\n}\n.xb-button._theme-clear_size-l {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: transparent;\n}\n.xb-button._theme-clear_size-l:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-clear_size-l:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-clear_size-l > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-clear_size-l > ._content {\n  padding: 0 14px;\n  line-height: 30px;\n  font-size: 15px;\n}\n.xb-button._theme-clear_size-xl {\n  z-index: 1;\n  border: 1px solid;\n  font-family: Arial, sans-serif;\n  color: #000;\n  line-height: 0;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  text-align: center;\n  -webkit-justify-content: center;\n  -webkit-box-pack: center;\n     -moz-box-pack: center;\n          justify-content: center;\n  border-color: transparent;\n}\n.xb-button._theme-clear_size-xl:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._theme-clear_size-xl:focus ._content {\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._theme-clear_size-xl > ._content {\n  -webkit-border-radius: 2px;\n          border-radius: 2px;\n}\n.xb-button._theme-clear_size-xl > ._content {\n  padding: 0 17px;\n  line-height: 36px;\n  font-size: 18px;\n}\n.xb-button._focused {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-button._focused:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-button._disabled {\n  cursor: default !important;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.xb-button._disabled .xb-button._disabled {\n  opacity: 1;\n}\n"

/***/ },
/* 55 */
/***/ function(module, exports, __webpack_require__) {

	var map = {
		"./_file.styl": 56,
		"./_label.styl": 57
	};
	function webpackContext(req) {
		return __webpack_require__(webpackContextResolve(req));
	};
	function webpackContextResolve(req) {
		return map[req] || (function() { throw new Error("Cannot find module '" + req + "'.") }());
	};
	webpackContext.keys = function webpackContextKeys() {
		return Object.keys(map);
	};
	webpackContext.resolve = webpackContextResolve;
	module.exports = webpackContext;
	webpackContext.id = 55;


/***/ },
/* 56 */
/***/ function(module, exports) {

	module.exports = "._xb-file-intruder {\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  z-index: 11;\n}\n._xb-file-intruder-inner {\n  float: right;\n  text-align: right;\n  overflow: hidden;\n  width: 100%;\n  height: 100%;\n}\n._xb-file-intruder-input {\n  position: relative;\n  z-index: 11;\n  display: inline-block;\n  vertical-align: 0;\n  padding: 0;\n  margin: -5em 0 0 -400px;\n  width: 500px;\n  cursor: pointer;\n  font-size: 80px;\n  opacity: 0;\n}\n._xb-file-intruder-input[type=\"button\"] {\n  margin: 0;\n  width: 100%;\n  height: 100%;\n  font-size: inherit;\n}\n._xb-file-intruder-input[type=\"file\"] {\n  z-index: 0;\n}\n"

/***/ },
/* 57 */
56,
/* 58 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(59);

	__webpack_require__(60);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _focusComponent = __webpack_require__(45);

	var _focusComponent2 = _interopRequireDefault(_focusComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * xb-link html element
	 *
	 * @class xb.Link
	 * @memberof xb
	 * @augments HTMLAnchorElement
	 * @mixes xblocks.mixin.eDisabled
	 */
	exports.default = _context.xb.Link = (0, _xblocksCore.create)('xb-link', [_disabled2.default, _focusComponent2.default, {
	    prototype: Object.create(HTMLAnchorElement.prototype),

	    /**
	     * @lends xb.Link.prototype
	     */
	    accessors: {
	        componentStyle: {
	            get: function get() {
	                return _defineProperty({}, this.xtagName, __webpack_require__(61));
	            }
	        },

	        isShadowSupported: {
	            get: function get() {
	                return true;
	            }
	        }
	    }
	}]);

/***/ },
/* 59 */
1,
/* 60 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _commonAttrs = __webpack_require__(16);

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
	        'href': _react.PropTypes.string,
	        'name': _react.PropTypes.string,
	        'rel': _react.PropTypes.string,
	        'target': _react.PropTypes.oneOf(['_self', '_blank', '_parent', '_top']).isRequired,
	        'theme': _react.PropTypes.oneOf(['normal', 'outer', 'pseudo', 'empty']).isRequired
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'data-xb-tabindex': '0',
	            'disabled': false,
	            'rel': 'noopener noreferrer',
	            'target': '_self',
	            'theme': 'normal'
	        };
	    },

	    render: function render() {
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-link': true,
	            '_disabled': this.props.disabled
	        }, '_theme-' + this.props.theme, true));

	        return React.createElement(
	            'a',
	            { name: this.props.name,
	                href: this.props.href,
	                target: this.props.target,
	                tabIndex: this.getTabIndex(),
	                className: classes,
	                rel: this.props.rel },
	            this.context.content()
	        );
	    }
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 61 */
/***/ function(module, exports) {

	module.exports = ".xb-link._theme-normal {\n  cursor: pointer;\n  color: #22c;\n  text-decoration: underline;\n}\n.xb-link._theme-normal:hover {\n  color: #d00;\n}\n.xb-link._theme-outer {\n  cursor: pointer;\n  color: #070;\n  text-decoration: underline;\n}\n.xb-link._theme-outer:hover {\n  color: #d00;\n}\n.xb-link._theme-pseudo {\n  cursor: pointer;\n  color: #22c;\n  text-decoration: none;\n  text-decoration: none;\n  border-bottom: 1px dotted;\n}\n.xb-link._theme-pseudo:hover {\n  color: #d00;\n}\n"

/***/ },
/* 62 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(63);

	__webpack_require__(64);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(52);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(53);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focusComponent = __webpack_require__(45);

	var _focusComponent2 = _interopRequireDefault(_focusComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * xb-checkbox html element
	 *
	 * @class xb.Checkbox
	 * @memberof xb
	 * @augments HTMLInputElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eChecked
	 * @mixes xblocks.mixin.eInputValueProps
	 * @mixes xblocks.mixin.eFocus
	 */
	exports.default = _context.xb.Checkbox = (0, _xblocksCore.create)('xb-checkbox', [_disabled2.default, _checked2.default, _inputValueProps2.default, _focusComponent2.default, {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        componentStyle: {
	            get: function get() {
	                return _defineProperty({}, this.xtagName, __webpack_require__(65));
	            }
	        },

	        isShadowSupported: {
	            get: _lodash2.default.stubTrue
	        },

	        defaultValue: {
	            get: _lodash2.default.constant('on')
	        }
	    }
	}]);

/***/ },
/* 63 */
1,
/* 64 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _commonAttrs = __webpack_require__(16);

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

	    /**
	     * @prop {string} [size=m] size, possible values: s|m
	     * @prop {string} [value=on]
	     * @prop {string} [name]
	     * @prop {string} [form]
	     * @prop {string} [for]
	     * @prop {boolean} [autofocus=false]
	     * @prop {boolean} [disabled=false]
	     * @prop {boolean} [checked=false]
	     * @prop {boolean} [required=false]
	     */
	    propTypes: {
	        'autofocus': _react.PropTypes.bool,
	        'checked': _react.PropTypes.bool,
	        'for': _react.PropTypes.string,
	        'form': _react.PropTypes.string,
	        'name': _react.PropTypes.string,
	        'required': _react.PropTypes.bool,
	        'size': _react.PropTypes.oneOf(['m', 'l']).isRequired,
	        'value': _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'checked': false,
	            'disabled': false,
	            'required': false,
	            'size': 'm',
	            'data-xb-tabindex': '0',
	            'value': 'on'
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
	                tabIndex: this.getTabIndex(),
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
	                { className: '_label' },
	                this.context.content()
	            )
	        );
	    }
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 65 */
/***/ function(module, exports) {

	module.exports = ".xb-checkbox {\n  font-weight: inherit;\n}\n.xb-checkbox._size-m {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  cursor: pointer;\n  vertical-align: baseline;\n}\n.xb-checkbox._size-m > ._view {\n  border-color: rgba(0,0,0,0.2);\n  -webkit-box-shadow: inset 0 90px #fff;\n          box-shadow: inset 0 90px #fff;\n}\n.xb-checkbox._size-m > ._view {\n  width: 12px;\n  height: 12px;\n}\n.xb-checkbox._size-m:hover > ._view {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-checkbox._size-m > input:focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-checkbox._size-m > input:focus + ._view:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-checkbox._size-m > input:active + ._view {\n  -webkit-box-shadow: inset 0 90px #f6f5f3;\n          box-shadow: inset 0 90px #f6f5f3;\n}\n.xb-checkbox._size-m > input:checked + ._view {\n  border-color: rgba(153,122,0,0.5);\n  -webkit-box-shadow: inset 0 90px #ffeba0;\n          box-shadow: inset 0 90px #ffeba0;\n}\n.xb-checkbox._size-m > input:checked + ._view > ._icon {\n  visibility: inherit;\n}\n.xb-checkbox._size-m > ._view {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  border-width: 1px;\n  border-style: solid;\n  margin-top: -3px;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n}\n.xb-checkbox._size-m > ._view > ._icon {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-right: 2px solid;\n  border-bottom: 2px solid;\n  color: #000;\n  -webkit-transform: scale(0.85) rotate(47deg) skewX(12deg);\n  -moz-transform: scale(0.85) rotate(47deg) skewX(12deg);\n    -o-transform: scale(0.85) rotate(47deg) skewX(12deg);\n       transform: scale(0.85) rotate(47deg) skewX(12deg);\n  visibility: hidden;\n}\n.xb-checkbox._size-m > ._view > ._icon {\n  margin: -10px 0 0 4px;\n  width: 7px;\n  height: 17px;\n}\n.xb-checkbox._size-m > ._label {\n  font-size: 13px;\n  line-height: 24px;\n}\n.xb-checkbox._size-m > ._view + ._label {\n  padding-left: 5px;\n}\n.xb-checkbox._size-m > ._controller,\n.xb-checkbox._size-l > ._controller {\n  position: absolute !important;\n  clip: rect(1px,1px,1px,1px) !important;\n}\n.xb-checkbox._size-l {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  cursor: pointer;\n  vertical-align: baseline;\n}\n.xb-checkbox._size-l > ._view {\n  border-color: rgba(0,0,0,0.2);\n  -webkit-box-shadow: inset 0 90px #fff;\n          box-shadow: inset 0 90px #fff;\n}\n.xb-checkbox._size-l:hover > ._view {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-checkbox._size-l > input:focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-checkbox._size-l > input:focus + ._view:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-checkbox._size-l > input:active + ._view {\n  -webkit-box-shadow: inset 0 90px #f6f5f3;\n          box-shadow: inset 0 90px #f6f5f3;\n}\n.xb-checkbox._size-l > input:checked + ._view {\n  border-color: rgba(153,122,0,0.5);\n  -webkit-box-shadow: inset 0 90px #ffeba0;\n          box-shadow: inset 0 90px #ffeba0;\n}\n.xb-checkbox._size-l > input:checked + ._view > ._icon {\n  visibility: inherit;\n}\n.xb-checkbox._size-l > ._view {\n  width: 15px;\n  height: 15px;\n}\n.xb-checkbox._size-l > ._view {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  border-width: 1px;\n  border-style: solid;\n  margin-top: -3px;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n}\n.xb-checkbox._size-l > ._view > ._icon {\n  content: '';\n  position: absolute;\n  top: 0;\n  left: 0;\n  border-right: 2px solid;\n  border-bottom: 2px solid;\n  color: #000;\n  -webkit-transform: scale(0.85) rotate(47deg) skewX(12deg);\n  -moz-transform: scale(0.85) rotate(47deg) skewX(12deg);\n    -o-transform: scale(0.85) rotate(47deg) skewX(12deg);\n       transform: scale(0.85) rotate(47deg) skewX(12deg);\n  visibility: hidden;\n}\n.xb-checkbox._size-l > ._view > ._icon {\n  margin: -9px 0 0 5px;\n  width: 7px;\n  height: 18px;\n}\n.xb-checkbox._size-l > ._label {\n  font-size: 15px;\n  line-height: 30px;\n}\n.xb-checkbox._size-l > ._view + ._label {\n  padding-left: 7px;\n}\n.xb-checkbox._disabled {\n  cursor: default !important;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.xb-checkbox._disabled .xb-checkbox._disabled {\n  opacity: 1;\n}\n"

/***/ },
/* 66 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(67);

	__webpack_require__(68);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _checked = __webpack_require__(52);

	var _checked2 = _interopRequireDefault(_checked);

	var _inputValueProps = __webpack_require__(53);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _focusComponent = __webpack_require__(45);

	var _focusComponent2 = _interopRequireDefault(_focusComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * xb-radio html element
	 *
	 * @class xb.Radio
	 * @memberof xb
	 * @augments HTMLInputElement
	 * @mixes xblocks.mixin.eDisabled
	 * @mixes xblocks.mixin.eChecked
	 * @mixes xblocks.mixin.eInputValueProps
	 * @mixes xblocks.mixin.eFocus
	 */
	exports.default = _context.xb.Radio = (0, _xblocksCore.create)('xb-radio', [_disabled2.default, _checked2.default, _inputValueProps2.default, _focusComponent2.default, {
	    prototype: Object.create(HTMLInputElement.prototype),

	    accessors: {
	        componentStyle: {
	            get: function get() {
	                return _defineProperty({}, this.xtagName, __webpack_require__(69));
	            }
	        },

	        isShadowSupported: {
	            get: _lodash2.default.stubTrue
	        },

	        defaultValue: {
	            get: _lodash2.default.constant('on')
	        }
	    }
	}]);

/***/ },
/* 67 */
1,
/* 68 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _resetLastRadioChecked = __webpack_require__(50);

	var _resetLastRadioChecked2 = _interopRequireDefault(_resetLastRadioChecked);

	var _commonAttrs = __webpack_require__(16);

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

	    /**
	     * @prop {string} [size=m] size, possible values: s|m
	     * @prop {string} [value=on]
	     * @prop {string} [name]
	     * @prop {string} [form]
	     * @prop {string} [for]
	     * @prop {boolean} [autofocus=false]
	     * @prop {boolean} [disabled=false]
	     * @prop {boolean} [checked=false]
	     * @prop {boolean} [required=false]
	     */
	    propTypes: {
	        'autofocus': _react.PropTypes.bool,
	        'checked': _react.PropTypes.bool,
	        'for': _react.PropTypes.string,
	        'form': _react.PropTypes.string,
	        'name': _react.PropTypes.string,
	        'required': _react.PropTypes.bool,
	        'size': _react.PropTypes.oneOf(['m', 'l']).isRequired,
	        'value': _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'checked': false,
	            'disabled': false,
	            'required': false,
	            'size': 'm',
	            'data-xb-tabindex': '0',
	            'value': 'on'
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
	            (0, _resetLastRadioChecked2.default)(this.context.container, nextProps.name);
	        }
	    },

	    componentWillMount: function componentWillMount() {
	        if (this.state.checked) {
	            (0, _resetLastRadioChecked2.default)(this.context.container, this.props.name);
	        }
	    },

	    _onChange: function _onChange(event) {
	        this.context.container.checked = event.target.checked;
	    },

	    render: function render() {
	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-radio': true,
	            '_disabled': this.props.disabled
	        }, '_size-' + this.props.size, true));

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
	                tabIndex: this.getTabIndex(),
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
	                { className: '_label' },
	                this.context.content()
	            )
	        );
	    }
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 69 */
/***/ function(module, exports) {

	module.exports = ".xb-radio {\n  font-weight: inherit;\n}\n.xb-radio._size-m {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  cursor: pointer;\n  vertical-align: baseline;\n}\n.xb-radio._size-m > ._view {\n  border-color: rgba(0,0,0,0.2);\n  -webkit-box-shadow: inset 0 90px #fff;\n          box-shadow: inset 0 90px #fff;\n}\n.xb-radio._size-m > ._view {\n  width: 12px;\n  height: 12px;\n}\n.xb-radio._size-m:hover > ._view {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-radio._size-m > input:focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-radio._size-m > input:focus + ._view:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-radio._size-m > input:active + ._view {\n  -webkit-box-shadow: inset 0 90px #f6f5f3;\n          box-shadow: inset 0 90px #f6f5f3;\n}\n.xb-radio._size-m > input:checked + ._view {\n  border-color: rgba(153,122,0,0.5);\n  -webkit-box-shadow: inset 0 90px #ffeba0;\n          box-shadow: inset 0 90px #ffeba0;\n}\n.xb-radio._size-m > input:checked + ._view > ._icon {\n  visibility: inherit;\n}\n.xb-radio._size-m > ._view {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  border-width: 1px;\n  border-style: solid;\n  margin-top: -3px;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  -webkit-border-radius: 999px;\n          border-radius: 999px;\n}\n.xb-radio._size-m > ._view > ._icon {\n  content: '';\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n}\n.xb-radio._size-m > ._view > ._icon {\n  width: 6px;\n  height: 6px;\n  margin: 3px;\n}\n.xb-radio._size-m > ._label {\n  font-size: 13px;\n  line-height: 24px;\n}\n.xb-radio._size-m > ._view + ._label {\n  padding-left: 5px;\n}\n.xb-radio._size-m > ._controller,\n.xb-radio._size-l > ._controller {\n  position: absolute !important;\n  clip: rect(1px,1px,1px,1px) !important;\n}\n.xb-radio._size-l {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  cursor: pointer;\n  vertical-align: baseline;\n}\n.xb-radio._size-l > ._view {\n  border-color: rgba(0,0,0,0.2);\n  -webkit-box-shadow: inset 0 90px #fff;\n          box-shadow: inset 0 90px #fff;\n}\n.xb-radio._size-l:hover > ._view {\n  border-color: rgba(0,0,0,0.4);\n}\n.xb-radio._size-l > input:focus + ._view {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-radio._size-l > input:focus + ._view:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-radio._size-l > input:active + ._view {\n  -webkit-box-shadow: inset 0 90px #f6f5f3;\n          box-shadow: inset 0 90px #f6f5f3;\n}\n.xb-radio._size-l > input:checked + ._view {\n  border-color: rgba(153,122,0,0.5);\n  -webkit-box-shadow: inset 0 90px #ffeba0;\n          box-shadow: inset 0 90px #ffeba0;\n}\n.xb-radio._size-l > input:checked + ._view > ._icon {\n  visibility: inherit;\n}\n.xb-radio._size-l > ._view {\n  width: 15px;\n  height: 15px;\n}\n.xb-radio._size-l > ._view {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  vertical-align: middle;\n  border-width: 1px;\n  border-style: solid;\n  margin-top: -3px;\n  -webkit-border-radius: 3px;\n          border-radius: 3px;\n  -webkit-border-radius: 999px;\n          border-radius: 999px;\n}\n.xb-radio._size-l > ._view > ._icon {\n  content: '';\n  visibility: hidden;\n  position: absolute;\n  top: 0;\n  left: 0;\n  background: #000;\n  -webkit-border-radius: 50%;\n          border-radius: 50%;\n}\n.xb-radio._size-l > ._view > ._icon {\n  width: 14px;\n  height: 14px;\n  -webkit-transform: scale(0.5) translate(1px, 1px);\n  -moz-transform: scale(0.5) translate(1px, 1px);\n    -o-transform: scale(0.5) translate(1px, 1px);\n       transform: scale(0.5) translate(1px, 1px);\n}\n.xb-radio._size-l > ._label {\n  font-size: 15px;\n  line-height: 30px;\n}\n.xb-radio._size-l > ._view + ._label {\n  padding-left: 7px;\n}\n.xb-radio._disabled {\n  cursor: default !important;\n  opacity: 0.6;\n  pointer-events: none;\n}\n.xb-radio._disabled .xb-radio._disabled {\n  opacity: 1;\n}\n"

/***/ },
/* 70 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(71);

	__webpack_require__(72);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(10);

	var _tether = __webpack_require__(73);

	var _tether2 = _interopRequireDefault(_tether);

	var _popupDefaultOptions = __webpack_require__(74);

	var _popupDefaultOptions2 = _interopRequireDefault(_popupDefaultOptions);

	var _src = __webpack_require__(75);

	var _src2 = _interopRequireDefault(_src);

	var _popup = __webpack_require__(85);

	var _popup2 = _interopRequireDefault(_popup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Union rules attributes
	 * @type {Object}
	 * @constant
	 */
	var ATTRS_ALIGN = {
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
	};

	/**
	 * xb-popup html element
	 *
	 * @class xb.Popup
	 * @augments HTMLElement
	 * @memberof xb
	 */
	exports.default = _context.xb.Popup = (0, _xblocksCore.create)('xb-popup', [{
	    prototype: Object.create(HTMLElement.prototype),

	    lifecycle: {
	        created: function created() {
	            this.setAttribute('tabindex', '0');
	        }
	    },

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
	         * @prop {Object} popupDefaultOptions default options
	         * @readonly
	         */
	        popupDefaultOptions: {
	            get: _popupDefaultOptions2.default
	        },

	        /**
	         * @prop {Object} popupOptions the display options window
	         * @see http://tether.io/#options
	         * @readonly
	         */
	        popupOptions: {
	            get: function get() {
	                if (this[_popup2.default.OPTIONS]) {
	                    return this[_popup2.default.OPTIONS];
	                }

	                var popupOptions = this[_popup2.default.OPTIONS] = this.popupDefaultOptions;

	                var attrs = _xblocksCore.dom.attrs.get(this, {
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

	                if (attrs['target-parent']) {
	                    attrs['target-parent'] = this.parentNode;
	                }

	                fillOptionsFromAttrs(popupOptions, attrs);

	                return popupOptions;
	            }
	        },

	        /**
	         * @readonly
	         * @prop {Tether} core Tether the window object
	         */
	        core: {
	            get: function get() {
	                if (!this[_popup2.default.CORE]) {
	                    this[_popup2.default.CORE] = new _tether2.default(this.popupOptions);
	                }

	                return this[_popup2.default.CORE];
	            }
	        },

	        /**
	         * @readonly
	         * @prop {boolean} opened window is open
	         */
	        opened: {
	            get: function get() {
	                return this.core.enabled;
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
	            _lodash2.default.assign(this.popupOptions, nextOptions);

	            var core = this.core;
	            core.setOptions(this.popupOptions, false);

	            if (core.enabled) {
	                core.position();
	            }
	        },

	        /**
	         * Open the window
	         * @memberOf xb.Popup.prototype
	         * @param {object} popupOptions new settings
	         * @returns {boolean}
	         */
	        open: function open(popupOptions) {
	            var _this = this;

	            var core = this.core;

	            if (core.enabled) {
	                return false;
	            }

	            if (_lodash2.default.isPlainObject(popupOptions)) {
	                this.setOptions(popupOptions);
	            }

	            _xblocksCore.event.dispatch(this, 'xb-before-open');

	            core.enable(true);
	            core.target[_popup2.default.POPUP] = this;

	            // FireFox does not set the focus without delay
	            _src2.default.setImmediate(function () {
	                _this.focus();
	                _xblocksCore.event.dispatch(_this, 'xb-open');
	            });

	            return true;
	        },

	        /**
	         * Close the window
	         * @memberOf xb.Popup.prototype
	         * @returns {boolean}
	         */
	        close: function close() {
	            var _this2 = this;

	            var core = this.core;

	            if (!core.enabled) {
	                return false;
	            }

	            _xblocksCore.event.dispatch(this, 'xb-before-close');

	            core.target[_popup2.default.POPUP] = undefined;
	            core.disable();
	            core.clearCache();

	            // FireFox does not fire a blur event
	            _src2.default.setImmediate(function () {
	                _this2.blur();
	                _xblocksCore.event.dispatch(_this2, 'xb-close');
	            });

	            return true;
	        },

	        /**
	         * Recalculate the location
	         * @memberOf xb.Popup.prototype
	         * @returns {boolean}
	         */
	        position: function position() {
	            this.core.position();
	            return true;
	        }
	    }
	}]);

	/**
	 * Check valid value for attribute by default
	 * @param {*} value value for attribute
	 * @returns {boolean}
	 * @private
	 */

	function checkDefaultAttr(value) {
	    return typeof value !== 'undefined';
	}

	/**
	 * Association of attributes and options
	 * @param {Object} popupOptions popup options
	 * @param {Object} attrs attributes of element
	 * @private
	 */
	function fillOptionsFromAttrs(popupOptions, attrs) {
	    for (var attrName in attrs) {
	        var params = ATTRS_ALIGN[attrName];
	        if (!params) {
	            continue;
	        }

	        var optionName = params[0];
	        var checker = params[1] || checkDefaultAttr;
	        var value = attrs[attrName];

	        if (checker(value)) {
	            if (_lodash2.default.isFunction(optionName)) {
	                optionName(popupOptions, value);
	            } else {
	                popupOptions[optionName] = value;
	            }
	        }
	    }
	}

/***/ },
/* 71 */
1,
/* 72 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _reactDom = __webpack_require__(43);

	var _reactDom2 = _interopRequireDefault(_reactDom);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _commonAttrs = __webpack_require__(16);

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

	        children.unshift(this.context.template('xb-popup-title', React.createElement('div', { key: 'title', className: '_title' })));

	        if (this.props.close) {
	            children.unshift(React.createElement('a', { key: 'close', className: '_close', onClick: this.onClickClose }));
	        }

	        children.push(this.context.template('xb-popup-buttons', React.createElement('div', { key: 'buttons', className: '_buttons' })));

	        var classes = (0, _classnames3.default)(_defineProperty({
	            'xb-popup': true
	        }, '_theme-' + this.props.theme, Boolean(this.props.theme)));

	        return React.createElement(
	            'div',
	            { className: classes, tabIndex: '0' },
	            children
	        );
	    }
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 73 */
/***/ function(module, exports) {

	module.exports = __WEBPACK_EXTERNAL_MODULE_73__;

/***/ },
/* 74 */
/***/ function(module, exports) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function () {
	    return {
	        attachment: 'middle center',
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
/* 75 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);
	var useNative = __webpack_require__(77);
	var Timer = __webpack_require__(78);
	var setTimeoutPolifill = __webpack_require__(79);
	var polifills = [
	    __webpack_require__(80),
	    __webpack_require__(81),
	    __webpack_require__(82),
	    __webpack_require__(83),
	    __webpack_require__(84)
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
/* 76 */
/***/ function(module, exports) {

	/*jshint -W067*/
	'use strict';

	module.exports = (function() {
	    return this || (1, eval)('this');
	})();


/***/ },
/* 77 */
/***/ function(module, exports, __webpack_require__) {

	var context = __webpack_require__(76);

	// @see http://codeforhire.com/2013/09/21/setimmediate-and-messagechannel-broken-on-internet-explorer-10/
	module.exports = function() {
	    return !(context.navigator && /Trident|Edge/.test(context.navigator.userAgent));
	};


/***/ },
/* 78 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);

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
/* 79 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);
	var Timer = __webpack_require__(78);

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
/* 80 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);
	var Timer = __webpack_require__(78);

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
/* 81 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);
	var Timer = __webpack_require__(78);

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
/* 82 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);
	var Timer = __webpack_require__(78);

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
/* 83 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);
	var Timer = __webpack_require__(78);

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
/* 84 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var context = __webpack_require__(76);
	var Timer = __webpack_require__(78);

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
/* 85 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _es6Symbol = __webpack_require__(24);

	var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    OPTIONS: (0, _es6Symbol2.default)('popup-options'),
	    CORE: (0, _es6Symbol2.default)('popup-core'),
	    POPUP: (0, _es6Symbol2.default)('popup-popup')
	};

/***/ },
/* 86 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(87);

	__webpack_require__(88);

	__webpack_require__(93);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _lazyFocus = __webpack_require__(98);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _popupDefaultOptions = __webpack_require__(74);

	var _popupDefaultOptions2 = _interopRequireDefault(_popupDefaultOptions);

	var _TableNavigator = __webpack_require__(99);

	var _TableNavigator2 = _interopRequireDefault(_TableNavigator);

	var _getParentMenu = __webpack_require__(108);

	var _getParentMenu2 = _interopRequireDefault(_getParentMenu);

	var _src = __webpack_require__(75);

	var _src2 = _interopRequireDefault(_src);

	var _menu = __webpack_require__(109);

	var _menu2 = _interopRequireDefault(_menu);

	var _menu3 = __webpack_require__(112);

	var _menu4 = _interopRequireDefault(_menu3);

	var _popup = __webpack_require__(85);

	var _popup2 = _interopRequireDefault(_popup);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * xb-menu html element
	 *
	 * @class xb.Menu
	 * @augments xb.Popup
	 * @memberof xb
	 * @mixes xblocks.mixin.menu
	 */
	exports.default = _context.xb.Menu = (0, _xblocksCore.create)('xb-menu', [_menu2.default, {
	    prototype: Object.create(document.createElement('xb-popup').constructor).prototype,

	    events: {
	        'xb-before-open': function xbBeforeOpen() {
	            this.style.visibility = 'hidden';
	        },

	        'xb-open': function xbOpen() {
	            this[_menu4.default.TABLE] = new _TableNavigator2.default(this, {
	                rowLoop: true,
	                colLoop: true
	            });

	            var component = this.getComponent();

	            if (component) {
	                component.afterOpen(this._afterOpen.bind(this));
	            } else {
	                this._afterOpen();
	            }
	        },

	        'xb-close': function xbClose() {
	            var table = this[_menu4.default.TABLE];

	            if (table) {
	                this[_menu4.default.TABLE] = undefined;
	                table.destroy();
	            }

	            this._closeAllSubmenu();
	        },

	        'keydown:keypass(27)': function keydownKeypass27() {
	            this.close();
	            _lodash2.default.invoke(this, 'parentMenu.focus');
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
	        componentStyle: {
	            get: function get() {
	                return _defineProperty({}, this.xtagName, __webpack_require__(113));
	            }
	        },

	        isShadowSupported: {
	            get: function get() {
	                return true;
	            }
	        },

	        /**
	         * @prop {Object} default setting for the menu
	         * @readonly
	         */
	        popupDefaultOptions: {
	            get: function get() {
	                var popupOptions = _popupDefaultOptions2.default.call(this);

	                popupOptions.constraints = [{
	                    'to': 'scrollParent',
	                    'attachment': 'element'
	                }, {
	                    'to': 'window',
	                    'attachment': 'element'
	                }];

	                return popupOptions;
	            }
	        }
	    },

	    methods: {
	        _closeAllSubmenu: function _closeAllSubmenu() {
	            _lodash2.default.forEach(this.querySelectorAll('.xb-menu-target.xb-menu-enabled'), this._closeSubmenu);
	        },

	        /**
	         * @param {xb.Menuitem} target
	         */
	        _closeSubmenu: function _closeSubmenu(target) {
	            _lodash2.default.invoke(target, [_popup2.default.POPUP, 'close']);
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
/* 87 */
1,
/* 88 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(16);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _menu = __webpack_require__(89);

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
	exports.default = _context.xv.Menu = _xblocksCore.view.register('xb-menu', [_commonAttrs2.default, (0, _menu2.default)('xb-menu'), {
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
/* 89 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (tagName) {
	    return {
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
	            this._onScrollThrottle = _lodash2.default.throttle(this._onScrollThrottle, 500, {
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
	                var contentNode = this._content;
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
	            var target = this._content;
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

	            if (_lodash2.default.isFunction(callback)) {
	                callback();
	            }
	        },

	        _onWheel: function _onWheel(event) {
	            var content = this._content;
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
	            _xblocksCore.event.dispatch(this._content, 'jsx-scroll-throttle', { bubbles: true, cancelable: true });
	        },

	        _animationScrollTop: function _animationScrollTop() {
	            this._content.scrollTop--;
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
	            this._content.scrollTop++;
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
	            var content = this._content;
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

	            var classes = (0, _classnames3.default)(_defineProperty({}, tagName, true));

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
	                { className: classes },
	                React.createElement('div', { style: scrollTopStyle,
	                    className: '_scroll-top',
	                    onMouseEnter: this._onMouseEnterTop,
	                    onMouseLeave: this._onMouseLeaveTop }),
	                React.createElement(
	                    'div',
	                    { ref: function ref(_ref) {
	                            return _this._content = _ref;
	                        },
	                        style: contentStyle,
	                        className: '_content',
	                        onScroll: this._onScroll,
	                        onWheel: this._onWheel },
	                    this.context.content(React.createElement('div', null))
	                ),
	                React.createElement('div', { style: scrollBottomStyle,
	                    className: '_scroll-bottom',
	                    onMouseEnter: this._onMouseEnterBottom,
	                    onMouseLeave: this._onMouseLeaveBottom })
	            );
	        }
	    };
	};

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _classnames2 = __webpack_require__(11);

	var _classnames3 = _interopRequireDefault(_classnames2);

	var _xblocksCore = __webpack_require__(10);

	var _throttleAnimationFrame = __webpack_require__(90);

	var _throttleAnimationFrame2 = _interopRequireDefault(_throttleAnimationFrame);

	var _requestAnimationFrame = __webpack_require__(91);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	/**
	 * Common interface for views xb-menu and xb-menu-inline
	 * @param {string} tagName
	 * @returns {Object}
	 */
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 90 */
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

	var _requestAnimationFrame = __webpack_require__(91);

/***/ },
/* 91 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});
	exports.cancelAnimationFrame = exports.requestAnimationFrame = undefined;

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	var _vendor = __webpack_require__(92);

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
/* 92 */
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

	    name = _lodash2.default.capitalize(name);

	    var vendor;
	    var x = 0;
	    for (; x < 4; ++x) {
	        vendor = VENDORS[x];
	        if (context[vendor + name]) {
	            return context[vendor + name];
	        }
	    }
	};

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var VENDORS = ['ms', 'moz', 'webkit', 'o'];

	/**
	 * @param {string} name
	 * @param {Object} [context]
	 * @returns {*}
	 */

/***/ },
/* 93 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	var _delegate = __webpack_require__(94);

	var _delegate2 = _interopRequireDefault(_delegate);

	var _popup = __webpack_require__(85);

	var _popup2 = _interopRequireDefault(_popup);

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
	        if (targetElement[_popup2.default.POPUP]) {
	            targetElement[_popup2.default.POPUP].close();
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
/* 94 */
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

	var _delegateMatch = __webpack_require__(95);

	var _delegateMatch2 = _interopRequireDefault(_delegateMatch);

	var _wrap = __webpack_require__(97);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 95 */
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

	var _matchesSelector = __webpack_require__(96);

	var _matchesSelector2 = _interopRequireDefault(_matchesSelector);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 96 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, selector) {
	    return element.nodeType === 1 ? matches.call(element, selector) : false;
	};

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	var _vendor = __webpack_require__(92);

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
/* 97 */
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

	var _context = __webpack_require__(9);

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
/* 98 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (node) {
	  _context2.default.setTimeout(node.focus.bind(node), 0);
	};

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 99 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _xblocksCore = __webpack_require__(10);

	var _delegate = __webpack_require__(94);

	var _delegate2 = _interopRequireDefault(_delegate);

	var _filterClick = __webpack_require__(100);

	var _filterClick2 = _interopRequireDefault(_filterClick);

	var _filterMouse = __webpack_require__(101);

	var _filterMouse2 = _interopRequireDefault(_filterMouse);

	var _matchesSelector = __webpack_require__(96);

	var _matchesSelector2 = _interopRequireDefault(_matchesSelector);

	var _eachAfter = __webpack_require__(102);

	var _eachAfter2 = _interopRequireDefault(_eachAfter);

	var _eachBefore = __webpack_require__(105);

	var _eachBefore2 = _interopRequireDefault(_eachBefore);

	var _index = __webpack_require__(107);

	var _index2 = _interopRequireDefault(_index);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	var pop = Array.prototype.pop;
	var slice = Array.prototype.slice;
	var EVENT_BLUR = 'xb-blur';
	var EVENT_FOCUS = 'xb-focus';

	var TableNavigator = function () {
	    function TableNavigator(node, options) {
	        _classCallCheck(this, TableNavigator);

	        this._options = _lodash2.default.merge({
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
	        this._onMousemove = _lodash2.default.throttle((0, _delegate2.default)(this._options.row, this._onMouseAction.bind(this)));
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
/* 100 */
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

	var _wrap = __webpack_require__(97);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 101 */
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

	var _wrap = __webpack_require__(97);

	var _wrap2 = _interopRequireDefault(_wrap);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 102 */
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

	var _isParent = __webpack_require__(103);

	var _isParent2 = _interopRequireDefault(_isParent);

	var _eachInnerFollowing = __webpack_require__(104);

	var _eachInnerFollowing2 = _interopRequireDefault(_eachInnerFollowing);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 103 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

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
/* 104 */
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
/* 105 */
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

	var _isParent = __webpack_require__(103);

	var _isParent2 = _interopRequireDefault(_isParent);

	var _eachInnerPrevious = __webpack_require__(106);

	var _eachInnerPrevious2 = _interopRequireDefault(_eachInnerPrevious);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

/***/ },
/* 106 */
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
/* 107 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	exports.default = function (selector, element, context) {
	  context = context || _context2.default.document;
	  return indexOf.call(context.querySelectorAll(selector), element);
	};

	var _context = __webpack_require__(9);

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
/* 108 */
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
/* 109 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _xblocksCore = __webpack_require__(10);

	var _lazyFocus = __webpack_require__(98);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _initialDefinitionSelected = __webpack_require__(110);

	var _initialDefinitionSelected2 = _interopRequireDefault(_initialDefinitionSelected);

	var _isParent = __webpack_require__(103);

	var _isParent2 = _interopRequireDefault(_isParent);

	var _menu = __webpack_require__(112);

	var _menu2 = _interopRequireDefault(_menu);

	var _menuitem = __webpack_require__(111);

	var _menuitem2 = _interopRequireDefault(_menuitem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * Common interface for elements xb-menu and xb-menu-inline.
	 */
	exports.default = {
	    lifecycle: {
	        created: function created() {
	            if (this.selectable) {
	                this[_menu2.default.SELECTED] = (0, _initialDefinitionSelected2.default)(this);
	            }
	        }
	    },

	    events: {
	        /**
	         * Оpen the submenu or menu item is selected
	         * @this xb.Menuitem
	         */
	        'click:delegate(xb-menuitem:not([disabled]))': function clickDelegateXbMenuitemNotDisabled() {
	            if (this.submenuInstance) {
	                this.submenuInstance.open();
	            } else if (this.menuInstance) {
	                this.menuInstance.menuitemSelect();
	            }
	        },

	        /**
	         * Оpen the submenu
	         * @this xb.Menu
	         */
	        'keydown:keypass(13,39)': function keydownKeypass1339() {
	            var item = this[_menu2.default.TABLE].getItem();

	            if (item && item.submenuInstance) {
	                item.submenuInstance.open();
	            }
	        },

	        /**
	         * The menu item is selected
	         * @this xb.Menu
	         */
	        'keydown:keypass(32)': function keydownKeypass32() {
	            this.menuitemSelect();
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
	        },

	        selectable: {
	            attribute: {
	                boolean: true
	            }
	        },

	        multiple: {
	            attribute: {
	                boolean: true
	            }
	        },

	        /**
	         * @prop {boolean} autoclose closing the menu after selecting
	         */
	        autoclose: {
	            attribute: {
	                boolean: true
	            }
	        },

	        /**
	         * @prop {xb.Menu|null} parentMenu menu-ancestor
	         * @readonly
	         */
	        parentMenu: {
	            get: function get() {
	                var parentMenu = _lodash2.default.get(this, 'core.target.menuInstance', null);
	                return parentMenu === this ? null : parentMenu;
	            }
	        },

	        /**
	         * @prop {xb.Menu} [firstParentMenu] the first menu ancestor
	         * @readonly
	         */
	        firstParentMenu: {
	            get: function get() {
	                var parentMenu = this.parentMenu;

	                if (parentMenu) {
	                    return parentMenu.firstParentMenu || parentMenu;
	                }

	                return this;
	            }
	        },

	        /**
	         * @prop {string[]} value the values of the selected menu item
	         * @readonly
	         */
	        value: {
	            get: function get() {
	                return _lodash2.default.map(this.firstParentMenu[_menu2.default.SELECTED], 'value');
	            }
	        },

	        /**
	         * @prop {HTMLElement[]} selectedItems selected menu items
	         * @readonly
	         */
	        selectedItems: {
	            get: function get() {
	                return _lodash2.default.values(this.firstParentMenu[_menu2.default.SELECTED]);
	            }
	        },

	        /**
	         * @prop {Object[]} selectedObjects the data of selected items
	         * @readonly
	         */
	        selectedObjects: {
	            get: function get() {
	                return _lodash2.default.map(this.firstParentMenu[_menu2.default.SELECTED], function (item) {
	                    return {
	                        label: item.getAttribute('label'),
	                        value: item.value
	                    };
	                });
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

	            var component = this.getComponent();

	            if (component) {
	                component.scrollIntoItem(menuitem);
	            }
	        },

	        menuitemSelect: function menuitemSelect() {
	            var _this = this;

	            if (!this.selectable) {
	                return;
	            }

	            var selectedAttr = _menuitem2.default.SELECTED_ATTR;
	            var item = this[_menu2.default.TABLE].getItem();
	            var selected = !item.selected;
	            var uid = item.getAttribute(selectedAttr) || _lodash2.default.uniqueId('selected');
	            var firstParentMenu = this.firstParentMenu;

	            // сброс выбранных пунктов, если не мультиселект и текущий пункт будет выбран
	            if (!this.multiple && selected) {
	                (0, _lodash2.default)(firstParentMenu[_menu2.default.SELECTED]).chain().keys().join('"],xb-menuitem[' + selectedAttr + '="').thru(function (value) {
	                    return _this.ownerDocument.querySelectorAll('xb-menuitem[' + selectedAttr + '="' + value + '"]');
	                }).forEach(function (node) {
	                    node.selected = false;
	                    node.removeAttribute(selectedAttr);
	                }).value();

	                firstParentMenu[_menu2.default.SELECTED] = {};
	            }

	            if (selected) {
	                item.selected = true;
	                item.setAttribute(selectedAttr, uid);
	                _lodash2.default.set(firstParentMenu, [_menu2.default.SELECTED, uid], item);
	            } else {
	                item.selected = false;
	                item.removeAttribute(selectedAttr);
	                _lodash2.default.unset(firstParentMenu, [_menu2.default.SELECTED, uid]);
	            }

	            if (this.autoclose) {
	                firstParentMenu.close();
	            }

	            _xblocksCore.event.dispatch(firstParentMenu, 'change', { detail: { item: item } });
	        }
	    }
	};

/***/ },
/* 110 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (element, isSelectedDefault) {
	    var root = _xblocksCore.dom.contentNode(element);
	    if (root instanceof _context2.default.HTMLTemplateElement) {
	        root = root.content;
	    }

	    var items = element.multiple ? _lodash2.default.toArray(root.querySelectorAll('xb-menuitem[selected]')) : _lodash2.default.castArray(root.querySelector('xb-menuitem[selected]'));

	    var selectedItems = (0, _lodash2.default)(items).chain().compact().tap(function (array) {
	        if (isSelectedDefault && !array.length) {
	            array.push(root.querySelector('xb-menuitem'));
	        }
	    }).compact().reduce(initialSelectIteratee, {}).value();

	    // сброс выделения элементов, которые не попали в список выбранных
	    // актуально в случае multiple=false
	    _lodash2.default.forEach(root.querySelectorAll('xb-menuitem[selected]:not([' + _menuitem2.default.SELECTED_ATTR + '])'), removeAttrSelectIterate);

	    return selectedItems;
	};

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _xblocksCore = __webpack_require__(10);

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	var _menuitem = __webpack_require__(111);

	var _menuitem2 = _interopRequireDefault(_menuitem);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function initialSelectIteratee(result, node) {
	    var uid = _lodash2.default.uniqueId('selected');
	    node.setAttribute(_menuitem2.default.SELECTED_ATTR, uid);
	    result[uid] = node;
	    return result;
	}

	function removeAttrSelectIterate(node) {
	    node.removeAttribute('selected');
	}

/***/ },
/* 111 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _es6Symbol = __webpack_require__(24);

	var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    FOCUSED: (0, _es6Symbol2.default)('menuitem-focused'),
	    MENU: (0, _es6Symbol2.default)('menuitem-menu'),
	    SUBMENU: (0, _es6Symbol2.default)('menuitem-submenu'),
	    SUBMENU_TIMER: (0, _es6Symbol2.default)('menuitem-submenu-timer'),
	    SELECTED_ATTR: 'data-xb-selected'
	};

/***/ },
/* 112 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _es6Symbol = __webpack_require__(24);

	var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    TABLE: (0, _es6Symbol2.default)('menu-table'),
	    SELECTED: (0, _es6Symbol2.default)('menu-selected')
	};

/***/ },
/* 113 */
/***/ function(module, exports) {

	module.exports = ".xb-menu {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  vertical-align: top;\n  padding: 5px 0;\n  font-size: 15px;\n  line-height: 28px;\n  position: relative;\n  overflow: hidden;\n  padding: 0;\n  background-color: #fff;\n  -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.15);\n          box-shadow: 0 0 0 1px rgba(0,0,0,0.15);\n  touch-action: none;\n  -webkit-touch-callout: none;\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n.xb-menu:before,\n.xb-menu:after {\n  margin: 0;\n  display: none;\n}\n.xb-menu > ._content {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  tap-highlight-color: rgba(0,0,0,0);\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n       transform: translateZ(0);\n  margin-right: -15px;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .xb-menu > ._content {\n    margin-right: auto !important;\n  }\n  .xb-menu > ._content::-webkit-scrollbar {\n    width: 0 !important;\n  }\n}\n.xb-menu > ._content > xb-menuitem:first-child {\n  margin-top: 5px;\n}\n.xb-menu > ._content > xb-menuitem:last-child {\n  margin-bottom: 5px;\n}\n.xb-menu > ._scroll-top {\n  height: 8px;\n  position: absolute;\n  background-color: #fff;\n  left: 0;\n  top: 0;\n  width: 100%;\n  display: none;\n  z-index: 2;\n  cursor: n-resize;\n}\n.xb-menu > ._scroll-top:after {\n  content: \"\";\n  position: absolute;\n  border: 4px solid transparent;\n  border-bottom: 4px solid rgba(0,0,0,0.3);\n  clear: both;\n  margin-left: -4px;\n  left: 50%;\n  top: -2px;\n}\n.xb-menu > ._scroll-bottom {\n  height: 8px;\n  position: absolute;\n  background-color: #fff;\n  left: 0;\n  bottom: 0;\n  cursor: s-resize;\n  width: 100%;\n  display: none;\n  z-index: 2;\n}\n.xb-menu > ._scroll-bottom:after {\n  content: \"\";\n  position: absolute;\n  border: 4px solid transparent;\n  border-top: 4px solid rgba(0,0,0,0.3);\n  top: 2px;\n  clear: both;\n  margin-left: -4px;\n  left: 50%;\n}\n"

/***/ },
/* 114 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(115);

	__webpack_require__(116);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _lazyFocus = __webpack_require__(98);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _TableNavigator = __webpack_require__(99);

	var _TableNavigator2 = _interopRequireDefault(_TableNavigator);

	var _menu = __webpack_require__(109);

	var _menu2 = _interopRequireDefault(_menu);

	var _focus = __webpack_require__(117);

	var _focus2 = _interopRequireDefault(_focus);

	var _menu3 = __webpack_require__(112);

	var _menu4 = _interopRequireDefault(_menu3);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
	        'xb-created': function xbCreated() {
	            this[_menu4.default.TABLE] = new _TableNavigator2.default(this, {
	                col: 'xb-menu-inline:not([disabled])',
	                rowLoop: true,
	                colLoop: true
	            });
	        },

	        'xb-destroy': function xbDestroy() {
	            var table = this[_menu4.default.TABLE];
	            if (table) {
	                this[_menu4.default.TABLE] = undefined;
	                table.destroy();
	            }
	        },

	        'blur': function blur() {
	            if (!this.hasOpenSubmenu) {
	                this[_menu4.default.TABLE].blurItem();
	            }
	        }
	    },

	    /**
	     * @lends xb.MenuInline.prototype
	     */
	    accessors: {
	        componentStyle: {
	            get: function get() {
	                return _defineProperty({}, this.xtagName, __webpack_require__(118));
	            }
	        },

	        isShadowSupported: {
	            get: function get() {
	                return true;
	            }
	        }
	    },

	    methods: {
	        open: _lodash2.default.noop,

	        close: function close() {
	            // FireFox does not fire a blur event
	            (0, _lazyFocus2.default)(this);
	        }
	    }
	}]);

/***/ },
/* 115 */
1,
/* 116 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(16);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _menu = __webpack_require__(89);

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
	exports.default = _context.xv.MenuInline = _xblocksCore.view.register('xb-menu-inline', [_commonAttrs2.default, (0, _menu2.default)('xb-menu-inline'), {
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
/* 117 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _es6Symbol = __webpack_require__(24);

	var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var TABINDEX = (0, _es6Symbol2.default)('xblocks-tabindex');

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
	    lifecycle: {
	        created: function created() {
	            var tabindex = this.getAttribute('tabindex');
	            var disabled = this.hasAttribute('disabled');

	            this[TABINDEX] = null;

	            if (tabindex === null && !disabled) {
	                this.setAttribute('tabindex', '0');
	            } else if (tabindex && disabled) {
	                this[TABINDEX] = tabindex;
	                this.setAttribute('tabindex', '-1');
	            }
	        },

	        attributeChanged: function attributeChanged(attrName, oldValue, newValue) {
	            if (attrName === 'disabled') {
	                if (newValue === null) {
	                    this.setAttribute('tabindex', this[TABINDEX] !== null ? this[TABINDEX] : '0');
	                } else {
	                    this[TABINDEX] = this.getAttribute('tabindex');
	                    this.setAttribute('tabindex', '-1');
	                }
	            } else if (attrName === 'tabindex') {
	                this[TABINDEX] = newValue;
	            }
	        }
	    },

	    events: {
	        'focus': function focus() {
	            _lodash2.default.invoke(this.getComponent(), 'setState', { focused: true });
	        },

	        'blur': function blur() {
	            _lodash2.default.invoke(this.getComponent(), 'setState', { focused: false });
	        }
	    }
	};

/***/ },
/* 118 */
/***/ function(module, exports) {

	module.exports = ".xb-menu-inline {\n  position: relative;\n  display: inline-block;\n  vertical-align: top;\n  vertical-align: top;\n  padding: 5px 0;\n  font-size: 15px;\n  line-height: 28px;\n  overflow: hidden;\n  padding: 0;\n  -webkit-box-shadow: 0 0 0 1px rgba(0,0,0,0.1);\n          box-shadow: 0 0 0 1px rgba(0,0,0,0.1);\n  touch-action: none;\n  -webkit-touch-callout: none;\n  touch-callout: none;\n  -webkit-user-select: none;\n  -moz-user-select: none;\n  -ms-user-select: none;\n  user-select: none;\n  -webkit-text-size-adjust: none;\n  text-size-adjust: none;\n}\n.xb-menu-inline:before,\n.xb-menu-inline:after {\n  margin: 0;\n  display: none;\n}\n.xb-menu-inline > ._content {\n  overflow-y: scroll;\n  overflow-x: hidden;\n  tap-highlight-color: rgba(0,0,0,0);\n  -webkit-transform: translateZ(0);\n  -moz-transform: translateZ(0);\n       transform: translateZ(0);\n  margin-right: -15px;\n}\n@media screen and (-webkit-min-device-pixel-ratio: 0) {\n  .xb-menu-inline > ._content {\n    margin-right: auto !important;\n  }\n  .xb-menu-inline > ._content::-webkit-scrollbar {\n    width: 0 !important;\n  }\n}\n.xb-menu-inline > ._content > xb-menuitem:first-child {\n  margin-top: 5px;\n}\n.xb-menu-inline > ._content > xb-menuitem:last-child {\n  margin-bottom: 5px;\n}\n.xb-menu-inline > ._scroll-top {\n  height: 8px;\n  position: absolute;\n  background-color: #fff;\n  left: 0;\n  top: 0;\n  width: 100%;\n  display: none;\n  z-index: 2;\n  cursor: n-resize;\n}\n.xb-menu-inline > ._scroll-top:after {\n  content: \"\";\n  position: absolute;\n  border: 4px solid transparent;\n  border-bottom: 4px solid rgba(0,0,0,0.3);\n  clear: both;\n  margin-left: -4px;\n  left: 50%;\n  top: -2px;\n}\n.xb-menu-inline > ._scroll-bottom {\n  height: 8px;\n  position: absolute;\n  background-color: #fff;\n  left: 0;\n  bottom: 0;\n  cursor: s-resize;\n  width: 100%;\n  display: none;\n  z-index: 2;\n}\n.xb-menu-inline > ._scroll-bottom:after {\n  content: \"\";\n  position: absolute;\n  border: 4px solid transparent;\n  border-top: 4px solid rgba(0,0,0,0.3);\n  top: 2px;\n  clear: both;\n  margin-left: -4px;\n  left: 50%;\n}\n"

/***/ },
/* 119 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(120);

	__webpack_require__(121);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(10);

	var _lazyFocus = __webpack_require__(98);

	var _lazyFocus2 = _interopRequireDefault(_lazyFocus);

	var _getParentMenu = __webpack_require__(108);

	var _getParentMenu2 = _interopRequireDefault(_getParentMenu);

	var _removeChild = __webpack_require__(122);

	var _removeChild2 = _interopRequireDefault(_removeChild);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _inputValueProps = __webpack_require__(53);

	var _inputValueProps2 = _interopRequireDefault(_inputValueProps);

	var _menuitem = __webpack_require__(111);

	var _menuitem2 = _interopRequireDefault(_menuitem);

	var _menu = __webpack_require__(112);

	var _menu2 = _interopRequireDefault(_menu);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var SUBMENU_ATTRS = {
	    'attachment': 'top left',
	    'target-attachment': 'top right',
	    'target-modifier': 'initial',
	    'constraints': encodeURIComponent(JSON.stringify([{
	        'to': 'window',
	        'attachment': 'element together'
	    }]))
	};

	/**
	 * xb-menuitem html element
	 *
	 * @class xb.Menuitem
	 * @memberof xb
	 * @augments HTMLElement
	 * @mixes mixin/element/disabled
	 * @mixes mixin/element/inputValueProps
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
	            this._submenuRemove();
	            this._updateSelection();
	        },

	        /**
	         * @callback
	         */
	        'xb-destroy': function xbDestroy() {
	            this._submenuRemove();
	        },

	        /**
	         * @callback
	         */
	        'xb-blur': function xbBlur() {
	            this.focused = false;
	            this._submenuCancel();

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
	                    this._submenuOpen();
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
	            get: function get() {
	                return Boolean(this[_menuitem2.default.FOCUSED]);
	            },

	            set: function set(value) {
	                this[_menuitem2.default.FOCUSED] = Boolean(value);
	            }
	        },

	        /**
	         * @prop {boolean} [selected=false] Item is selected
	         */
	        selected: {
	            attribute: {
	                boolean: true
	            },

	            set: function set(value) {
	                if (value && this.submenu) {
	                    this.selected = false;
	                }
	            }
	        },

	        /**
	         * @prop {boolean} [submenu=false] Item has a submenu
	         * @readonly
	         */
	        submenu: {
	            get: function get() {
	                return Boolean(this.content);
	            }
	        },

	        /**
	         * @prop {xb.Menu|xb.MenuInline|null} menuInstance Menu instance
	         * @readonly
	         */
	        menuInstance: {
	            get: function get() {
	                var menu = this[_menuitem2.default.MENU];

	                if (!menu && menu !== null) {
	                    menu = this[_menuitem2.default.MENU] = (0, _getParentMenu2.default)(this);
	                }

	                return menu;
	            }
	        },

	        /**
	         * @prop {xb.Menu|xb.MenuInline|null} menuInstance First menu instance
	         * @readonly
	         */
	        firstMenuInstance: {
	            get: function get() {
	                return _lodash2.default.get(this, 'menuInstance.firstParentMenu');
	            }
	        },

	        /**
	         * @prop {xb.Menu|null} submenuInstance Submenu instance
	         * @readonly
	         */
	        submenuInstance: {
	            get: function get() {
	                var submenu = this[_menuitem2.default.SUBMENU];

	                if (!submenu && submenu !== null) {
	                    submenu = this[_menuitem2.default.SUBMENU] = this.submenu ? this._submenuCreate() : null;
	                }

	                return submenu;
	            }
	        }
	    },

	    methods: {
	        /**
	         * @private
	         */
	        _submenuOpen: function _submenuOpen() {
	            if (this[_menuitem2.default.SUBMENU_TIMER]) {
	                return;
	            }

	            var submenu = this.submenuInstance;
	            if (!submenu) {
	                return;
	            }

	            this[_menuitem2.default.SUBMENU_TIMER] = _context2.default.setTimeout(submenu.open.bind(submenu), 200);
	        },

	        /**
	         * @private
	         */
	        _submenuCancel: function _submenuCancel() {
	            var timer = this[_menuitem2.default.SUBMENU_TIMER];
	            if (timer) {
	                _context2.default.clearTimeout(timer);
	                this[_menuitem2.default.SUBMENU_TIMER] = 0;
	            }
	        },

	        /**
	         * @private
	         */
	        _submenuRemove: function _submenuRemove() {
	            var submenu = this[_menuitem2.default.SUBMENU];
	            if (!submenu) {
	                return;
	            }

	            this[_menuitem2.default.SUBMENU] = undefined;
	            this._submenuCancel();

	            submenu.close();
	            (0, _removeChild2.default)(submenu);
	        },

	        /**
	         * @returns {xb.Menu}
	         * @private
	         */
	        _submenuCreate: function _submenuCreate() {
	            var parentMenu = this.menuInstance;

	            // для подменю необходимо наследовать набор ограничений т.к. по умолчанию ограничением является вьюпорт
	            // меню может быть открыто в блоке со скролом,
	            // в этом случае ограничением для подменю будет блок со скролом
	            var parentAttrs = {
	                constraints: parentMenu.getAttribute('constraints'),
	                autoclose: parentMenu.hasAttribute('autoclose') && 'autoclose',
	                multiple: parentMenu.hasAttribute('multiple') && 'multiple',
	                selectable: parentMenu.hasAttribute('selectable') && 'selectable'
	            };

	            var targetClassName = '_menuitem-target-' + this.xuid;
	            var menu = this.ownerDocument.createElement('xb-menu');
	            var attrs = _lodash2.default.merge({ target: '.' + targetClassName }, SUBMENU_ATTRS);

	            for (var attrName in parentAttrs) {
	                if (parentAttrs[attrName]) {
	                    attrs[attrName] = parentAttrs[attrName];
	                }
	            }

	            for (var _attrName in attrs) {
	                menu.setAttribute(_attrName, attrs[_attrName]);
	            }

	            menu.innerHTML = this.content;
	            menu.addEventListener('xb-destroy', this._submenuRemove.bind(this), false);

	            this.classList.add(targetClassName);

	            return this.ownerDocument.body.appendChild(menu);
	        },

	        /**
	         * @private
	         */
	        _updateSelection: function _updateSelection() {
	            if (!this.parentNode) {
	                return;
	            }

	            var uid = this.getAttribute(_menuitem2.default.SELECTED_ATTR);
	            if (!uid) {
	                return;
	            }

	            var menu = this.firstMenuInstance;
	            if (!menu) {
	                return;
	            }

	            var selected = _lodash2.default.has(menu, [_menu2.default.SELECTED, uid]);
	            this.selected = selected;

	            if (!selected) {
	                this.removeAttribute(_menuitem2.default.SELECTED_ATTR);
	            }
	        }
	    }
	}]);

/***/ },
/* 120 */
1,
/* 121 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(16);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	var _exportPropTypes = __webpack_require__(22);

	var _exportPropTypes2 = _interopRequireDefault(_exportPropTypes);

	var _filterProps = __webpack_require__(21);

	var _filterProps2 = _interopRequireDefault(_filterProps);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	var REG_PROPS_ICO = /^xb-ico-/;

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

	        var icoProps = (0, _filterProps2.default)(REG_PROPS_ICO, this.props);

	        if (!_lodash2.default.isEmpty(icoProps) && icoProps.type) {
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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 122 */
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
/* 123 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(124);

	__webpack_require__(125);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

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
/* 124 */
1,
/* 125 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 126 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol ? "symbol" : typeof obj; };

	__webpack_require__(127);

	__webpack_require__(128);

	var _context = __webpack_require__(9);

	var _context2 = _interopRequireDefault(_context);

	var _xblocksCore = __webpack_require__(10);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _SpeechRecognition = __webpack_require__(129);

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
/* 127 */
1,
/* 128 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _commonAttrs = __webpack_require__(16);

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
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 129 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _vendor = __webpack_require__(92);

	var _vendor2 = _interopRequireDefault(_vendor);

	var _events = __webpack_require__(130);

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
/* 130 */
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


/***/ },
/* 131 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	__webpack_require__(132);

	__webpack_require__(133);

	var _lodash = __webpack_require__(3);

	var _lodash2 = _interopRequireDefault(_lodash);

	var _context = __webpack_require__(9);

	var _xblocksCore = __webpack_require__(10);

	var _menu = __webpack_require__(112);

	var _menu2 = _interopRequireDefault(_menu);

	var _select = __webpack_require__(134);

	var _select2 = _interopRequireDefault(_select);

	var _initialDefinitionSelected = __webpack_require__(110);

	var _initialDefinitionSelected2 = _interopRequireDefault(_initialDefinitionSelected);

	var _removeChild = __webpack_require__(122);

	var _removeChild2 = _interopRequireDefault(_removeChild);

	var _disabled = __webpack_require__(17);

	var _disabled2 = _interopRequireDefault(_disabled);

	var _focusComponent = __webpack_require__(45);

	var _focusComponent2 = _interopRequireDefault(_focusComponent);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

	var MENU_ATTRS = {
	    'attachment': 'top left',
	    'target-attachment': 'bottom left',
	    'target-modifier': 'initial',
	    'constraints': encodeURIComponent(JSON.stringify([{
	        'to': 'window',
	        'attachment': 'element together'
	    }]))
	};

	/**
	 * xb-select html element
	 *
	 * @class xb.Select
	 * @memberof xb
	 * @augments HTMLElement
	 */
	exports.default = _context.xb.Select = (0, _xblocksCore.create)('xb-select', [_disabled2.default, _focusComponent2.default, {
	    prototype: Object.create(HTMLElement.prototype),

	    lifecycle: {
	        created: function created() {
	            this[_select2.default.SELECTED] = (0, _initialDefinitionSelected2.default)(this, true);
	        }
	    },

	    events: {
	        'xb-destroy': function xbDestroy() {
	            this._menuRemove();
	            this[_select2.default.SELECTED] = {};
	        },

	        'xb-update': function xbUpdate() {
	            this._menuRemove();
	        },

	        'click': function click() {
	            this.selectMenuInstance.open();
	        },

	        'keydown:keypass(32)': function keydownKeypass32() {
	            this.selectMenuInstance.open();
	        },

	        'change': function change() {
	            this.getComponent().setState({ selected: this.selectedObjects });
	        }
	    },

	    /**
	     * @lends xb.Select.prototype
	     */
	    accessors: {
	        componentStyle: {
	            get: function get() {
	                return _defineProperty({}, this.xtagName, __webpack_require__(135));
	            }
	        },

	        /**
	         * @prop {xb.Menu} selectMenuInstance Menu instance
	         * @readonly
	         */
	        selectMenuInstance: {
	            get: function get() {
	                var menu = this[_select2.default.MENU];

	                if (!menu) {
	                    menu = this[_select2.default.MENU] = this._menuCreate();
	                }

	                return menu;
	            }
	        },

	        multiple: {
	            attribute: {
	                boolean: true
	            }
	        },

	        /**
	         * @prop {string[]} value the values of the selected item
	         * @readonly
	         */
	        value: {
	            get: function get() {
	                // если меню ещё не открывалось
	                // вызывать selectMenuInstance не нужно, чтобы не создавать меню без необходимости
	                if (!this[_select2.default.MENU]) {
	                    return _lodash2.default.map(this[_select2.default.SELECTED], 'value');
	                }

	                return this.selectMenuInstance.value;
	            }
	        },

	        /**
	         * @prop {HTMLElement[]} selectedItems the selected item
	         * @readonly
	         */
	        selectedItems: {
	            get: function get() {
	                // если меню ещё не открывалось
	                // вызывать selectMenuInstance не нужно, чтобы не создавать меню без необходимости
	                if (!this[_select2.default.MENU]) {
	                    return _lodash2.default.values(this[_select2.default.SELECTED]);
	                }

	                return this.selectMenuInstance.selectedItems;
	            }
	        },

	        /**
	         * @prop {Object[]} selectedObjects the selected item
	         * @readonly
	         */
	        selectedObjects: {
	            get: function get() {
	                // если меню ещё не открывалось
	                // вызывать selectMenuInstance не нужно, чтобы не создавать меню без необходимости
	                if (!this[_select2.default.MENU]) {
	                    return _lodash2.default.map(this[_select2.default.SELECTED], function (item) {
	                        return {
	                            label: item.getAttribute('label'),
	                            value: item.value
	                        };
	                    });
	                }

	                return this.selectMenuInstance.selectedObjects;
	            }
	        }
	    },

	    methods: {
	        /**
	         * @private
	         */
	        _menuRemove: function _menuRemove() {
	            var menu = this[_select2.default.MENU];
	            if (!menu) {
	                return;
	            }

	            this[_select2.default.MENU] = undefined;
	            menu.close();
	            (0, _removeChild2.default)(menu);
	        },

	        /**
	         * @returns {xb.Menu}
	         * @private
	         */
	        _menuCreate: function _menuCreate() {
	            var targetClassName = '_select-target-' + this.xuid;
	            var menu = this.ownerDocument.createElement('xb-menu');
	            var attrs = _lodash2.default.merge({ target: '.' + targetClassName }, MENU_ATTRS);
	            var size = Number(this.getAttribute('size') || 0);

	            if (size) {
	                attrs.size = size;
	            }

	            for (var attrName in attrs) {
	                menu.setAttribute(attrName, attrs[attrName]);
	            }

	            menu[_menu2.default.SELECTED] = this[_select2.default.SELECTED];

	            menu.selectable = true;
	            menu.multiple = this.multiple;
	            menu.autoclose = !this.multiple;
	            menu.innerHTML = this.content;
	            menu.addEventListener('xb-destroy', this._menuRemove.bind(this), false);

	            _xblocksCore.event.forwardingEvents('change', menu, this);

	            this.classList.add(targetClassName);

	            return this.ownerDocument.body.appendChild(menu);
	        }
	    }
	}]);

/***/ },
/* 132 */
1,
/* 133 */
/***/ function(module, exports, __webpack_require__) {

	/* WEBPACK VAR INJECTION */(function(React) {'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _context = __webpack_require__(9);

	var _react = __webpack_require__(8);

	var _xblocksCore = __webpack_require__(10);

	var _classnames = __webpack_require__(11);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactAddonsPureRenderMixin = __webpack_require__(12);

	var _reactAddonsPureRenderMixin2 = _interopRequireDefault(_reactAddonsPureRenderMixin);

	var _commonAttrs = __webpack_require__(16);

	var _commonAttrs2 = _interopRequireDefault(_commonAttrs);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	/**
	 * The template node xb-select
	 *
	 * @class xv.Select
	 * @memberof xv
	 * @mixes xblocks.mixin.vCommonAttrs
	 */
	exports.default = _context.xv.Select = _xblocksCore.view.register('xb-select', [_commonAttrs2.default, {
	    displayName: 'xb-select',

	    mixins: [_reactAddonsPureRenderMixin2.default],

	    propTypes: {
	        'autofocus': _react.PropTypes.bool,
	        'form': _react.PropTypes.string,
	        'name': _react.PropTypes.string,
	        'required': _react.PropTypes.bool,
	        'theme': _react.PropTypes.string
	    },

	    getDefaultProps: function getDefaultProps() {
	        return {
	            'autofocus': false,
	            'data-xb-tabindex': '0',
	            'disabled': false,
	            'required': false
	        };
	    },

	    getInitialState: function getInitialState() {
	        return {
	            'selected': []
	        };
	    },

	    componentWillMount: function componentWillMount() {
	        this.setState({
	            'selected': this.context.container.selectedObjects
	        });
	    },

	    render: function render() {
	        var classes = (0, _classnames2.default)({
	            'xb-select': true,
	            '_disabled': this.props.disabled
	        });

	        var attrs = {
	            'autofocus': this.props.autofocus || undefined,
	            'disabled': this.props.disabled || undefined,
	            'form': this.props.form,
	            'name': this.props.name,
	            'required': this.props.required || undefined,
	            'data-xb-tabindex': '-1',
	            'theme': this.props.theme,
	            'title': this.props.title,
	            'type': 'inline',
	            'xb-ico-float': 'right',
	            'xb-ico-type': 'dropdown'
	        };

	        var label = this.state.selected.map(function (item, key) {
	            return (key && ', ' || '') + item.label;
	        }).join('');

	        return React.createElement(
	            'div',
	            { className: classes, tabIndex: this.getTabIndex() },
	            React.createElement(
	                'xb-button',
	                attrs,
	                label
	            )
	        );
	    }
	}]);
	/* WEBPACK VAR INJECTION */}.call(exports, __webpack_require__(8)))

/***/ },
/* 134 */
/***/ function(module, exports, __webpack_require__) {

	'use strict';

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	var _es6Symbol = __webpack_require__(24);

	var _es6Symbol2 = _interopRequireDefault(_es6Symbol);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	exports.default = {
	    MENU: (0, _es6Symbol2.default)('select-menu'),
	    SELECTED: (0, _es6Symbol2.default)('select-selected')
	};

/***/ },
/* 135 */
/***/ function(module, exports) {

	module.exports = ".xb-select {\n  font-weight: inherit;\n  position: relative;\n  cursor: pointer;\n}\n.xb-select:focus {\n  z-index: 2;\n  border-color: rgba(178,142,0,0.6);\n  outline: none;\n}\n.xb-select:focus:before {\n  content: \"\";\n  position: absolute;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  -webkit-border-radius: inherit;\n          border-radius: inherit;\n  -webkit-box-shadow: 0 0 10px #fc0;\n          box-shadow: 0 0 10px #fc0;\n}\n.xb-select:focus:before {\n  z-index: 2;\n}\n.xb-select > xb-button {\n  width: 100%;\n  pointer-events: none;\n}\n"

/***/ }
/******/ ])))
});
;