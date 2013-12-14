(function(xtag, xblocks) {
    'use strict';

    xtag.register('xb-ico', {
        lifecycle: {
            created: function() {
                this.xblock = xblocks.element.create(this, {
                    schema: 'http://xblocks.ru/xb-ico'
                });

                xblocks.log('[ico]', 'created', this.xblock);
                xblocks.log.time('[ico] created');

                this.xblock.update();

                xblocks.log.timeEnd('[ico] created');
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

