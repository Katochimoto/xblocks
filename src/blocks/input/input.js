(function(xblocks) {
    'use strict';

    /*! borschik:include:field.autosize.js */

    var XBField = xblocks.create('xb-field', {

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
    });

    XBField.attrs = {
        get: function() {
            return {
                type: 'text',
                size: 'm',
                rows: 1,
                value: this.value
            };
        }
    };

    XBField.value = {
        get: function() {
            return this.xblock.controller && this.xblock.controller.value;
        },

        set: function(value) {
            if (this.xblock.controller) {
                this.xblock.controller.value = value;
            }
        }
    };

    XBField.on('create', function() {
        this.xblock.on('click:delegate(.js-reset)', function(/* event */) {
            this.lock(true);
            this.controller.value = '';
            this.autosizeUpdate(0);
            this.lock(false);
            return true;
        });

        this.xblock.on('input:delegate(input,textarea)', function() {
            this.autosizeUpdate();
        });
    });

    XBField.on('update', function() {
        this.removeAttribute('value');
        this.xblock.controller = this.xblock.root().querySelector('input,textarea');
        // авторесайз поля по содержимому
        this.xblock.autosizeInit();
    });

    XBField.register();

}(xblocks));

