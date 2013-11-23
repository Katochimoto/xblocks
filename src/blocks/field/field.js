(function(xtag, xblocks, Modernizr, tv4) {
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
                this.__xb = xblocks.element.create(this, {
                    schema: SCHEMA_REL,
                    defaultAttrs: {
                        type: 'text',
                        size: 'm',
                        rows: 1
                    }
                });

                xblocks.log('[field]', 'created', this.__xb);
                xblocks.log.time('[field] created');



                this.__xb.on('update', function() {
                    element.__lock = true;
                    element.removeAttribute('value');
                    element.__controller = xblocks.rootElement(element).querySelector('input,textarea');
                    element.__lock = false;
                });

                this.__xb.on('click', function(event) {
                    if (this.isLock() || !xblocks.attrs.isEmpty(that, 'disabled')) {
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
                });

                this.__xb.update();





                /*xblocks.elementUpdate(this, onupdate);

                var that = this;
                this.__events = xtag.addEvents(xblocks.rootElement(this), {
                    'click': function(event) {
                        if (that.__lock || !xblocks.attrs.isEmpty(that, 'disabled')) {
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
                });*/

                xblocks.log.timeEnd('[field] created');
            },


            inserted: function() {
                this.__xb.trigger('inserted');
            },

            removed: function() {
                this.__xb.trigger('removed');
            },

            attributeChanged: function(attrName, oldValue, newValue) {
                this.__xb.trigger('attributeChanged', attrName, oldValue, newValue);
            }
        },

        accessors: {
            value: {
                get: function() {
                    return this.__controller && this.__controller.value;
                },
                set: function(value) {
                    this.__controller.value = value;
                }
            }
        },

        methods: {

            validate: function() {

            }

        }
    });

})(xtag, xblocks, Modernizr, tv4);

