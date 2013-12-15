(function(xtag, xblocks) {
    'use strict';

    /* borschik:include:field.autosize.js */

    /**
     *
     * @type {Object}
     */
    var xbfield = {
        /**
         * @type {Autosize|Null}
         * @private
         */
        _autosize: null,

        /**
         * @method autosizeInit
         */
        autosizeInit: function() {
            if (this.attrs.autosize && !this._autosize) {
                this._autosize = new Autosize(this.controller);

            } else if (this.attrs.autosize && this._autosize) {
                this._autosize.setController(this.controller);

            } else if (!this.attrs.autosize && this._autosize) {
                this._autosize = null;
                delete this._autosize;
            }
        },

        /**
         * @method autosizeUpdate
         * @param {Number} [value]
         */
        autosizeUpdate: function(value) {
            if (this._autosize) {
                this._autosize.update(value);
            }
        }
    };

    xtag.register('xb-field', {
        lifecycle: {
            created: function() {
                this.xblock = xblocks.element.create(this, {
                    schema: 'http://xblocks.ru/xb-field'
                }, xbfield);

                xblocks.log('[field]', 'created', this.xblock);
                xblocks.log.time('[field] created');

                this.xblock.on('update', function() {
                    this.lock(true);
                    this.node.removeAttribute('value');
                    this.controller = this.root().querySelector('input,textarea');

                    requirejs([ 'type/' + this.attrs.type ], function(number) {

                    });

                    // авторесайз поля по содержимому
                    this.autosizeInit();

                    this.lock(false);
                });

                this.xblock.on('click:delegate(.js-reset)', function(event) {
                    this.lock(true);
                    this.controller.value = '';
                    this.autosizeUpdate(0);
                    this.lock(false);
                    return true;
                });

                this.xblock.on('input:delegate(input,textarea)', function() {
                    this.autosizeUpdate();
                });

                this.xblock.on('inserted', function() {
                    //xblocks.types.number(this).init();
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

