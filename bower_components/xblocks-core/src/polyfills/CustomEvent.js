/* global CustomEventCommon */
/* jshint -W067 */
/**
 * strange commit, checks CustomEvent only in IE
 * https://github.com/webcomponents/webcomponentsjs/commit/8d6a38aa6e3d03ff54a41db9e9725401bbc1446c
 */
(function(global) {
    'use strict';

    if (typeof(global.CustomEvent) === 'function') {
        return;
    }

    global.CustomEvent = (function() {
        /*! borschik:include:CustomEventCommon.js */
        return CustomEventCommon;
    }());

}(function() {
    return this || (1, eval)('this');
}()));
