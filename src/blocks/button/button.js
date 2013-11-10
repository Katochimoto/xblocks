(function(xtag, xblocks) {
    'use strict';

    (function(schema) {
        tv4 && tv4.addSchema('http://xblocks.ru/xb-button', schema);
    })(
        /* borschik:include:schema.json */
    );



    xtag.register('xb-button', {
        lifecycle: {
            created: function() {
                this.observer.on();

                xblocks.elementUpdate(this);
            },
            inserted: function() {
            },
            removed: function() {
                this.observer.remove();
            },
            attributeChanged: function() {
                xblocks.elementUpdate(this);
            }
        },

        accessors: {
            defaultAttrs: {
                get: function() {
                    return {
                        'xb-theme': 'normal',
                        'xb-size': 'm'
                    };
                }
            },

            styleSource: {
                get: function() {
                    return '../src/blocks/button/styl/_button.css';
                    //borschik.link('styl/_button.css')
                }
            },

            value: {
                get: function() {
                    return xblocks.elementHTML(this);
                },
                set: function(value) {
                    return xblocks.elementHTML(this, value);
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

