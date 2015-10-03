require('./polyfills/requestAnimationFrame');
require('./xtag');

require('./blocks/input');
require('./blocks/button');

exports.xv = {
    'Calendar': '',
    'Checkbox': require('./blocks/checkbox/index.jsx'),
    'Ico': require('./blocks/ico/index.jsx'),
    'Link': require('./blocks/link/index.jsx'),
    'Menu': require('./blocks/menu/index.jsx'),
    'MenuInline': require('./blocks/menu-inline/index.jsx'),
    'Menuitem': require('./blocks/menuitem/index.jsx'),
    'Menuseparator': require('./blocks/menuseparator/index.jsx'),
    'Popup': require('./blocks/popup/index.jsx'),
    'Radio': require('./blocks/radio/index.jsx'),
    'Select': '',
    'SpeechRecognition': ''
};

exports.xb = {
    'Calendar': '',
    'Checkbox': require('./blocks/checkbox'),
    'Ico': require('./blocks/ico'),
    'Link': require('./blocks/link'),
    'Menu': require('./blocks/menu'),
    'MenuInline': require('./blocks/menu-inline'),
    'Menuitem': require('./blocks/menuitem'),
    'Menuseparator': require('./blocks/menuseparator'),
    'Popup': require('./blocks/popup'),
    'Radio': require('./blocks/radio'),
    'Select': '',
    'SpeechRecognition': ''
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
