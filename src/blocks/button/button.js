(function(xtag, xblocks) {
    'use strict';

    (function(schema) {
        tv4 && tv4.addSchema('http://xblocks.ru/xb-button', schema);
    })(
        /* borschik:include:schema.json */
    );

    var STYLE_SRC = '../src/blocks/button/styl/_button.css';
    //borschik.link('styl/_button.css')

    xtag.register('xb-button', {
        lifecycle: {
            created: function() {
                xblocks.elementUpdate(this, STYLE_SRC);
            },
            inserted: function() {

            },
            removed: function() {

            },
            attributeChanged: function() {
                xblocks.elementUpdate(this, STYLE_SRC);
            }
        },

        events: {
            click: function(event) {
                if (this.hasAttribute('disabled')) {
                    event.preventDefault();
                    event.stopPropagation();
                }
            }
        }
    });

})(xtag, xblocks);

