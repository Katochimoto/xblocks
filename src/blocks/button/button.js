(function(xtag, xblocks) {
    'use strict';

    xtag.register('xb-button', {
        lifecycle: {
            created: function() {
                this.xblock = xblocks.element.create(this, {
                    schema: 'http://xblocks.ru/xb-button'
                });

                xblocks.log('[button]', 'created', this.xblock);
                xblocks.log.time('[button] created');

                this.xblock.on('update', function() {
                    this.lock(true);
                    this.node.removeAttribute('value');
                    this.lock(false);
                });

                this.xblock.update();

                xblocks.log.timeEnd('[button] created');
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
                        'theme': 'normal',
                        'size': 'm'
                    };
                }
            },

            value: {
                get: function() {
                    return this.xblock.html();
                },
                set: function(value) {
                    this.xblock.html(value);
                }
            }
        },

        events: {
            click: function(event) {
                if (this.hasAttribute('disabled')) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        },

        methods: {

        }
    });

})(xtag, xblocks);

