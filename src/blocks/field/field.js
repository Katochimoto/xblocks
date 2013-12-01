(function(xtag, xblocks) {
    'use strict';

    xtag.register('xb-field', {
        lifecycle: {
            created: function() {
                this.xblock = xblocks.element.create(this, {
                    schema: 'http://xblocks.ru/xb-field'
                });

                xblocks.log('[field]', 'created', this.xblock);
                xblocks.log.time('[field] created');

                this.xblock.on('update', function() {
                    this.lock(true);
                    this.node.removeAttribute('value');
                    this.controller = this.root().querySelector('input,textarea');
                    this.lock(false);
                });

                this.xblock.on('click', function(event) {
                    if (xtag.hasClass(event.target, 'js-reset')) {
                        this.lock(true);
                        this.controller.value = '';
                        this.lock(false);
                    }

                    return true;
                });

                this.xblock.update();

                xblocks.log.timeEnd('[field] created');
            },


            inserted: function() {
                this.xblock.trigger('inserted');
            },

            removed: function() {
                this.xblock.trigger('removed');
            },

            attributeChanged: function(attrName, oldValue, newValue) {
                this.xblock.trigger('attributeChanged', [ attrName, oldValue, newValue ]);
            }
        },

        accessors: {
            defaultAttrs: {
                get: function() {
                    return {
                        type: 'text',
                        size: 'm',
                        rows: 1,
                        value: this.value
                    };
                }
            },
            value: {
                get: function() {
                    return this.xblock.controller && this.xblock.controller.value;
                },

                set: function(value) {
                    if (this.xblock.controller) {
                        this.xblock.controller.value = value;
                    }
                }
            }
        },

        methods: {

            validate: function() {

            }

        }
    });

})(xtag, xblocks);

