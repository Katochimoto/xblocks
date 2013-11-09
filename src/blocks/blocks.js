(function() {
    'use strict';

    var xblocks = {};
    xblocks.version = '0.0.1';

    var namespace;

    if (typeof module !== 'undefined') {
        namespace = module.exports = xblocks;
    } else {
        namespace = (function() {
            return this || (1, eval)('this');
        }());
    }

    namespace.xblocks = xblocks;


    xblocks.attrs2obj = function(element, def) {
        var out = {};
        for (var i = 0, attrs = element.attributes, l = attrs.length; i < l; i++) {
            var attr = attrs.item(i);
            if (attr.nodeValue === 'true' || attr.nodeValue === 'false' || attr.nodeName === attr.nodeValue) {
                if (attr.nodeName === attr.nodeValue || attr.nodeValue === 'true') {
                    out[attr.nodeName] = true;

                } else {
                    out[attr.nodeName] = false;
                }

            } else {
                out[attr.nodeName] = attr.nodeValue;
            }
        }

        if (def) {
            for (var name in def) {
                if (!out.hasOwnProperty(name)) {
                    out[name] = def[name];
                }
            }
        }

        return out;
    };


    xblocks.elementHTML = function(element, html) {
        if (typeof html !== 'undefined') {
            element.innerHTML = html;
        }

        if (!Modernizr.createshadowroot) {
            var content = element.querySelector('content');
            return content && content.innerHTML || element.innerHTML;
        }

        return element.innerHTML;
    };


    xblocks.elementUpdate = function(element, style) {
        element.observer.off();

        var tagName = element.tagName.toLowerCase();
        var data = {
            attrs: xblocks.attrs2obj(element, {
                'xb-theme': 'normal',
                'xb-size': 'm'
            }),
            content: null
        };

        if (!Modernizr.createshadowroot) {
            data.content = xblocks.elementHTML(element);
        }

        if (tv4) {
            var schema = tv4.getSchema('http://xblocks.ru/' + tagName);
            var check = tv4.validateResult(data, schema);

            if (!check.valid) {
                throw check.error;
            }
        }

        var html = yr.run(tagName, data, 'template');
        var css = '@import url(' + style + ');';
        var template = xtag.createFragment(html);
        var eStyle = document.createElement('style');

        eStyle.setAttribute('type', 'text/css');
        eStyle.setAttribute('scoped', 'scoped');

        if (eStyle.styleSheet) {
            eStyle.styleSheet.cssText = css;

        } else {
            eStyle.appendChild(document.createTextNode(css));
        }

        template.insertBefore(eStyle, template.firstChild);


        var root;
        if (Modernizr.createshadowroot) {
            root = element.shadowRoot || element.createShadowRoot();
            root.resetStyleInheritance = false;
            root.applyAuthorStyles = false;

        } else {
            root = element;
        }

        var child;
        while (child = root.firstChild) {
            root.removeChild(child);
        }

        root.appendChild(template.cloneNode(true));

        element.observer.on();
    };


}());

