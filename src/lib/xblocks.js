(function() {
    'use strict';

    var xblocks = {};

    var namespace;

    if (typeof module !== 'undefined') {
        namespace = module.exports = xblocks;
    } else {
        namespace = (function() {
            return this || (1, eval)('this');
        }());
    }

    namespace.xblocks = xblocks;


    xblocks.log = function() {
        var args = Array.prototype.slice.call(arguments);
        args.unshift('[xblocks]');
        //console.log.apply(console, args);
    };

    xblocks.log.time = function(name) {
        name = '[xblocks] ' + name;
        //console.time(name);
        //console.profile();
    };

    xblocks.log.timeEnd = function(name) {
        name = '[xblocks] ' + name;
        //console.profileEnd();
        //console.timeEnd(name);
    };


    var __options = {
        inlineStyle: Modernizr.stylescoped || Modernizr.createshadowroot
    };

    xblocks.option = function(name, value) {
        if (typeof value === 'undefined') {
            if (typeof name === 'string') {
                return __options[name];
            }

        } else {
            if (typeof name === 'string') {
                return __options[name] = value;
            }
        }

        return undefined;
    };

    xblocks.rootElement = function(element) {
        if (Modernizr.createshadowroot) {
            return element.shadowRoot;
        }

        return element;
    };


    xblocks.elementHTML = function(element, html) {
        if (typeof html !== 'undefined') {
            element.innerHTML = html;

            if (!Modernizr.createshadowroot) {
                xblocks.elementUpdate(element);
            }
        }

        var content;
        if (!Modernizr.createshadowroot) {
            content = element.querySelector('content');
        }

        return content && content.innerHTML || element.innerHTML;
    };



}());

