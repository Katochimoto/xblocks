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
                this.observer.on();
                xblocks.elementUpdate(this, STYLE_SRC);
            },
            inserted: function() {
            },
            removed: function() {
                this.observer.remove();
            },
            attributeChanged: function() {
                xblocks.elementUpdate(this, STYLE_SRC);
            }
        },

        accessors: {
            value: {
                get: function() {
                    return xblocks.elementHTML(this);
                },
                set: function(value) {
                    xblocks.elementHTML(this, value);

                    if (!Modernizr.createshadowroot) {
                        xblocks.elementUpdate(this, STYLE_SRC);
                    }
                }
            },

            observer: {
                get: function() {
                    var that = this;
                    var observer;

                    if (!Modernizr.createshadowroot) {
                        observer = this.__observer || (this.__observer = new MutationObserver(function() {
                            xblocks.elementUpdate(that, STYLE_SRC);
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

