(function(xtag, xblocks, Modernizr, tv4, yr) {
    'use strict';

    /** @namespace xblocks */

    /**
     * @namespace xblocks.element
     * @memberOf xblocks
     * @type {Object}
     */
    xblocks.element = {};

    /**
     * @function create
     * @memberOf xblocks.element
     * @param {HTMLElement} node
     * @param {Object} [params]
     * @param {Object} [proto]
     * @return {XBElement}
     */
    xblocks.element.create = function(node, params, proto) {
        proto = proto || {};
        return Object.merge(new XBElement(node, params), proto);
    };


    /**
     *
     * @param {HTMLElement} node
     * @param {Object} params
     * @param {String} [params.schema]
     * @param {Object} [params.attrs]
     * @constructor
     */
    function XBElement(node, params) {

        /**
         *
         * @type {AttrsPlain}
         */
        this.attrs = {};
        /**
         *
         * @type {HTMLElement}
         */
        this.node = node;
        /**
         *
         * @type {HTMLElement|null}
         */
        this.controller = null;
        /**
         *
         * @type {String}
         */
        this.module = node.tagName.toLowerCase();
        /**
         *
         * @type {String}
         */
        this.schema = params.schema;
        /**
         *
         * @type {Object}
         */
        this.events = {};
        /**
         *
         * @type {boolean}
         * @private
         */
        this._lock = false;




        this.observeStart();

        this.on('inserted', function(/*event*/) {
            xblocks.log('XBElement->inserted', this);
        });

        this.on('removed', function(/*event*/) {
            xblocks.log('XBElement->removed', this);

            this.off();
            this.observeStop();

            delete this.controller;
            delete this.observer;
        });

        this.on('attributeChanged', function(/*event*/) {
            xblocks.log('XBElement->attributeChanged', this);
            this.update();
        });

        this.on('mutation', function(/*event*/) {
            xblocks.log('XBElement->mutation', this);
            this.update();
        });
    }

    var proto = XBElement.prototype;

    /**
     * @method isLock
     * @return {Boolean}
     */
    proto.isLock = function() {
        return this._lock;
    };

    /**
     * @method lock
     * @param {Boolean} isLock
     */
    proto.lock = function(isLock) {
        this._lock = !!isLock;

        if (this._lock) {
            this.observeStop();

        } else {
            this.observeStart();
        }
    };

    /**
     * @method on
     * @param {String} name
     * @param {Function} callback
     * @return {Object}
     */
    proto.on = function(name, callback) {
        var cb;
        var that = this;

        if (name === 'click') {
            cb = function(event) {
                if (!xblocks.attrs.isEmpty(that.node, 'disabled')) {
                    event.preventDefault();
                    event.stopPropagation();
                    return false;
                }

                return callback.call(that, event);
            };

        } else {
            cb = function(event) {
                return callback.call(that, event);
            };
        }

        var event = xtag.addEvent(this.root(), name, cb);
        this.events[name] = this.events[name] || [];
        this.events[name].push(event);
        return event;
    };

    /**
     * @method off
     * @param {String} [name]
     * @param {Object} [event]
     */
    proto.off = function(name, event) {
        var l;
        var type;

        if (!name && !event) {
            this.events = {};
            for (type in this.events) {
                if (this.events.hasOwnProperty(type)) {
                    l = this.events[type].length;
                    while (l--) {
                        xtag.removeEvent(this.root(), this.events[type][l]);
                    }
                }
            }

        } else if (name && !event) {
            this.events[name] = [];
            l = this.events[name].length;
            while (l--) {
                xtag.removeEvent(this.root(), this.events[name][l]);
            }

        } else if (name && event) {
            this.events[name].splice(this.events[name].indexOf(event), 1);
            xtag.removeEvent(this.root(), event);
        }
    };

    /**
     * @method trigger
     * @param {String} name
     * @param {*} [data]
     */
    proto.trigger = function(name, data) {
        if (this.isLock()) {
            return;
        }

        xtag.fireEvent(this.root(), name, {
            detail: {
                params: data
            }
        });
    };

    /**
     * @method observeStart
     */
    proto.observeStart = function() {
        xblocks.log.time('XBElement->observeStart');
        
        if (!Modernizr.createshadowroot && !this.observer) {
            var that = this;
            this.observer = new MutationObserver(function() {
                that.trigger('mutation');
            });
        }

        if (this.observer) {
            this.observer.disconnect();
            this.observer.observe(this.node, { childList: true, subtree: true, characterData: true });
        }
        
        xblocks.log.timeEnd('XBElement->observeStart');
    };

    /**
     * @method observeStop
     */
    proto.observeStop = function() {
        xblocks.log.time('XBElement->observeStop');
        
        if (this.observer) {
            this.observer.disconnect();
        }
        
        xblocks.log.timeEnd('XBElement->observeStop');
    };

    /**
     * @method update
     */
    proto.update = function() {
        xblocks.log('XBElement->update', this);
        xblocks.log.time('XBElement->update');

        this.lock(true);

        this.attrs = Object.merge(
            xblocks.attrs.plain({}),
            this.node.attrs || {},
            xblocks.attrs.toPlainObject(this.node)
        );

        var complexAttrs = this.attrs.toComplex();
        if (!Modernizr.createshadowroot) {
            complexAttrs.setValue(this.getHtml());
        }

        if (tv4 && this.schema) {
            var schema = tv4.getSchema(this.schema);

            if (schema) {
                var check = tv4.validateResult(complexAttrs.toSchema(), schema);

                if (!check.valid) {
                    throw check.error;
                }
            }
        }


        // формируются только атрибуты первой вложенности toSchema(1)
        // этого достаточно для описания псевдо-элементов, вложенных в текущий
        var tmplData = complexAttrs.toSchema(1);
        tmplData['__contentClass'] = this.getContentClass();

        var html = yr.run(this.module, tmplData, 'template');
        var template = xtag.createFragment(html);
        var root = this.root();

        xtag.innerHTML(root, '');
        root.appendChild(template.cloneNode(true));

        this.lock(false);

        xblocks.log.timeEnd('XBElement->update');

        this.trigger('update');
    };

    proto.setHtml = function(html) {
        this.node.innerHTML = html;

        if (!Modernizr.createshadowroot) {
            this.update();
        }
    };

    proto.getHtml = function() {
        var node = this.getContentNode();
        /*var tmpl = node.querySelector('template');

        if (tmpl) {
            node = document.createElement('div');
            node.appendChild(tmpl.content.cloneNode(true));
        }*/

        return node.innerHTML;
    };



    /**
     * @method root
     * @return {HTMLElement|DocumentFragment}
     */
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

    proto.getContentClass = function() {
        return this.module + '-content';
    };

    proto.getContentNode = function() {
        var content;
        if (!Modernizr.createshadowroot) {
            content = this.node.querySelector('.' + this.getContentClass());
        }

        return content || this.node;
    };








}(xtag, xblocks, Modernizr, tv4, yr));
