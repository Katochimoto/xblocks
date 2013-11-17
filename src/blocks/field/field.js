(function(xtag, xblocks) {
    'use strict';

    var SCHEMA_REL = 'http://xblocks.ru/xb-field';

    (function(schema) {
        tv4 && tv4.addSchema(SCHEMA_REL, schema);
    })(
        /* borschik:include:schema.json */
    );

    xtag.register('xb-field', {
        lifecycle: {
            created: function() {
                this.observer.on();
                xblocks.elementUpdate(this);

                this.__lock = true;
                this.removeAttribute('value');
                this.__lock = false;

                var that = this;
                this.__events = xtag.addEvents(xblocks.rootElement(this), {
                    'click': function(event) {
                        if (that.__lock || !xblocks.isEmptyAttr(that, 'disabled')) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }

                        if (xtag.hasClass(event.target, 'js-reset')) {
                            that.__lock = true;
                            xtag.query(this, 'input,textarea').forEach(function(elem) {
                                elem.value = '';
                            });
                            that.__lock = false;
                        }

                        return true;
                    }

                    /*'keydown:delegate(input,textarea)': function() {
                        if (that.__lock || !xblocks.isEmptyAttr(that, 'disabled')) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }

                        that.__lock = true;
                        that.setAttribute('value', this.value);
                        that.value = this.value;
                        that.__lock = false;
                        return true;
                    },

                    'keyup:delegate(input,textarea)': function() {
                        if (that.__lock || !xblocks.isEmptyAttr(that, 'disabled')) {
                            event.preventDefault();
                            event.stopPropagation();
                            return false;
                        }

                        that.__lock = true;
                        that.setAttribute('value', this.value);
                        that.value = this.value;
                        that.__lock = false;
                        return true;
                    }*/
                });
            },

            inserted: function() {},

            removed: function() {
                this.observer.remove();
                xtag.removeEvents(xblocks.rootElement(this), this.__events);
                delete this.__events;
            },

            attributeChanged: function() {
                if (this.__lock) {
                    return;
                }

                xblocks.log('attributeChanged', this);
                xblocks.elementUpdate(this);
            }
        },

        accessors: {
            schema: {
                get: function() {
                    return SCHEMA_REL;
                }
            },

            defaultAttrs: {
                get: function() {
                    return {
                        'type': 'text',
                        'size': 'm',
                        'value': this.value
                    };
                }
            },

            styleSource: {
                get: function() {
                    return borschik.link('@field.css');
                }
            },

            value: {
                get: function() {
                    var value;
                    var root = xblocks.rootElement(this);

                    if (root) {
                        xtag.query(root, 'input,textarea').forEach(function(elem) {
                            value = elem.value;
                        });
                    }

                    return value;
                },
                set: function(value) {
                    this.__lock = true;
                    var root = xblocks.rootElement(this);

                    if (root) {
                        xtag.query(root, 'input,textarea').forEach(function(elem) {
                            elem.value = value;
                        });
                    }

                    this.__lock = false;
                }
            },

            observer: {
                get: function() {
                    var that = this;
                    var observer;

                    if (!Modernizr.createshadowroot) {
                        observer = that.__observer || (that.__observer = new MutationObserver(function() {
                            xblocks.elementUpdate(that);
                        }));
                    }

                    return {
                        on: function() {
                            observer && observer.observe(that, {
                                childList: true,
                                subtree: true,
                                characterData: true
                            });
                        },

                        off: function() {
                            observer && observer.disconnect();
                        },

                        remove: function() {
                            observer && observer.disconnect();
                            delete that.__observer;
                        }
                    };
                }
            }
        },

        methods: {

        }
    });

})(xtag, xblocks);

