'use strict';

var context = require('context');

context.xb = {
    'Button': require('./blocks/button')
};

/*
(function(global, undefined) {


    global.xb = {};
    global.xv = {};

    var Tether = global.Tether;

    var React = global.React;

    var xblocks = global.xblocks;

    var xb = global.xb;
    var xv = global.xv;

    var __doc = global.document;
    var __noop = function() {};
    var __forEach = Array.prototype.forEach;

}(function() {
    return this || (1, eval)('this');
}()));
*/
