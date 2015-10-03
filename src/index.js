require('./polyfills/requestAnimationFrame');
require('./xtag');

exports.xv = {
    'Button': require('./blocks/button/index.jsx'),
};

exports.xb = {
    'Button': require('./blocks/button'),
    'Checkbox': require('./blocks/checkbox'),
    'Ico': require('./blocks/ico'),
    'Link': require('./blocks/link'),
    'Menuseparator': require('./blocks/menuseparator'),
    'Radio': require('./blocks/radio'),
    'Input': require('./blocks/input'),
    'Popup': require('./blocks/popup'),
    'Menuitem': require('./blocks/menuitem'),
    'Menu': require('./blocks/menu'),
    'MenuInline': require('./blocks/menu-inline'),
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
