(function(xtag, xblocks, Modernizr, tv4, yr) {
    'use strict';

    xblocks = xblocks || {};
    xblocks.element = {};

    xblocks.element.create = function(node, params) {
        return new XBElement(node, params);
    };




    function XBElement(node, params) {
        this.node = node;
        this.module = node.tagName.toLowerCase();
        this.schema = params.schema;
        this.defaultAttrs = params.defaultAttrs;

        this.observeStart();

        this.on('inserted', function(/*event*/) {
            xblocks.log('[field]', 'inserted', this);
        });

        this.on('removed', function(/*event*/) {
            /*xblocks.log('[field]', 'removed', this);
             this.observer.remove();
             xtag.removeEvents(xblocks.rootElement(this), this.__events);
             delete this.__events;
             delete this.__controller;*/
        });

        this.on('attributeChanged', function(/*attrName, oldValue, newValue*/) {
            if (this.__lock) {
                xblocks.log('[field]', 'attributeChanged', 'lock', arguments);
                return;
            }

            xblocks.log('[field]', 'attributeChanged', this, arguments);
            this.update();
        });
    }

    var proto = XBElement.prototype;

    proto.isLock = function() {

    };

    proto.on = function() {

    };

    proto.off = function() {

    };

    proto.trigger = function() {

    };

    proto.remove = function() {

    };

    proto.observeStart = function() {
        if (!Modernizr.createshadowroot && !this._observer) {
            var that = this;
            this._observer = new MutationObserver(function() {
                xblocks.log('XBElement->mutation', that);
                that.update();
            });
        }

        if (this._observer) {
            this._observer.disconnect();
            this._observer.observe(this.node, { childList: true, subtree: true, characterData: true });
        }
    };

    proto.observeStop = function() {
        if (this._observer) {
            this._observer.disconnect();
        }
    };

    proto.update = function() {
        xblocks.log('XBElement->update', this);
        xblocks.log.time('XBElement->update');

        this.observeStop();

        var plainAttrs = xblocks.attrs.toPlainObject(this.node);
        Object.merge(plainAttrs, this.defaultAttrs || {});

        var complexAttrs = plainAttrs.toComplex();
        if (!Modernizr.createshadowroot) {
            complexAttrs.setValue(this.html());
        }

        var schemaAttrs = complexAttrs.toSchema();

        if (tv4 && this.schema) {
            var schema = tv4.getSchema(this.schema);
            var check = tv4.validateResult(schemaAttrs, schema);

            if (!check.valid) {
                throw check.error;
            }
        }

        var html = yr.run(this.module, schemaAttrs, 'template');
        var template = xtag.createFragment(html);
        var root = this.root();

        xtag.innerHTML(root, '');
        root.appendChild(template.cloneNode(true));

        this.observeStart();

        xblocks.log.timeEnd('XBElement->update');

        //if (onupdate) {
        //    onupdate(this.node);
        //}
    };

    proto.html = function(html) {
        if (typeof html !== 'undefined') {
            this.node.innerHTML = html;

            if (!Modernizr.createshadowroot) {
                this.update();
            }
        }

        var content;
        if (!Modernizr.createshadowroot) {
            content = this.node.querySelector('content');
        }

        return content && content.innerHTML || this.node.innerHTML;
    };

    proto.root = function() {
        var root;

        if (Modernizr.createshadowroot) {
            root = this.node.shadowRoot;
            if (!root) {
                root = this.node.createShadowRoot();
                root.resetStyleInheritance = true;
                root.applyAuthorStyles = true;
            }

        } else {
            root = this.node;
        }

        return root;
    };








})(xtag, xblocks, Modernizr, tv4, yr);
