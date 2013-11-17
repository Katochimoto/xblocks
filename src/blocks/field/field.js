(function(xtag, xblocks) {
    'use strict';

    var SCHEMA_REL = 'http://xblocks.ru/xb-field';

    (function(schema) {
        tv4 && tv4.addSchema(SCHEMA_REL, schema);
    })(
        /* borschik:include:schema.json */
    );

    function onupdate(element) {
        element.__lock = true;
        element.removeAttribute('value');
        element.__controller = xblocks.rootElement(element).querySelector('input,textarea');
        element.__lock = false;
    }

    xtag.register('xb-field', {
        lifecycle: {
            created: function() {
                xblocks.log('created', this);

                this.observer.on();
                xblocks.elementUpdate(this, onupdate);

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
                            that.__controller.value = '';
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

            inserted: function() {
                xblocks.log('inserted', this);
            },

            removed: function() {
                xblocks.log('removed', this);
                this.observer.remove();
                xtag.removeEvents(xblocks.rootElement(this), this.__events);
                delete this.__events;
                delete this.__controller;
            },

            attributeChanged: function() {
                if (this.__lock) {
                    xblocks.log('attributeChanged', 'lock', arguments);
                    return;
                }

                xblocks.log('attributeChanged', this, arguments);
                xblocks.elementUpdate(this, onupdate);
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
                        'rows': 1,
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
                    return this.__controller && this.__controller.value;
                },
                set: function(value) {
                    this.__controller.value = value;
                }
            },

            observer: {
                get: function() {
                    var that = this;
                    var observer;

                    if (!Modernizr.createshadowroot) {
                        observer = that.__observer || (that.__observer = new MutationObserver(function() {
                            xblocks.log('mutation', that);
                            xblocks.elementUpdate(that, onupdate);
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

