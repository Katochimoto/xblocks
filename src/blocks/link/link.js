(function(xtag, xblocks) {
    'use strict';

    xtag.register('xb-link', {
        lifecycle: {
            created: function() {
                this.xblock = xblocks.element.create(this, {
                    schema: 'http://xblocks.ru/xb-link'
                });

                xblocks.log('[link]', 'created', this.xblock);
                xblocks.log.time('[link] created');

                this.xblock.update();

                xblocks.log.timeEnd('[link] created');
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
                        'type': 'normal'
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

