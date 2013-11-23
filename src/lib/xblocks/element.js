(function(xtag, xblocks, Modernizr, tv4, yr) {
    'use strict';

    xblocks = xblocks || {};
    var el = xblocks.element = {};


    el.html = function(element, html) {
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

    el.update = function(element, onupdate) {
        xblocks.log('element update', element);
        element.observer && element.observer.off();

        var module = element.tagName.toLowerCase();
        var plainAttrs = xblocks.attrs.toPlainObject(element);
        Object.merge(plainAttrs, element.defaultAttrs || {});

        var complexAttrs = plainAttrs.toComplex();
        if (!Modernizr.createshadowroot) {
            complexAttrs.setValue(el.html(element));
        }

        var schemaAttrs = complexAttrs.toSchema();

        if (tv4 && element.schema) {
            var schema = tv4.getSchema(element.schema);
            var check = tv4.validateResult(schemaAttrs, schema);

            if (!check.valid) {
                throw check.error;
            }
        }

        var html = yr.run(module, schemaAttrs, 'template');
        var template = xtag.createFragment(html);
        var root;

        if (Modernizr.createshadowroot) {
            root = element.shadowRoot;
            if (!root) {
                root = element.createShadowRoot();
                root.resetStyleInheritance = true;
                root.applyAuthorStyles = true;
            }

        } else {
            root = element;
        }

        xtag.innerHTML(root, '');
        root.appendChild(template.cloneNode(true));

        element.observer && element.observer.on();

        if (onupdate) {
            onupdate(element);
        }
    };


})(xtag, xblocks, Modernizr, tv4, yr);
