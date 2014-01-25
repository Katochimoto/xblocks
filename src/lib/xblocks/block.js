(function(xtag, xblocks) {
    'use strict';

    xblocks.create = function(blockName, protoElement) {
        return new XBlock(blockName, protoElement);
    };


    function XBlock(blockName, protoElement) {
        this._name = blockName;
        this._schema = 'http://xblocks.ru/' + blockName;
        this._events = {};
        this._proto = protoElement || {};
    }

    var proto = XBlock.prototype;

    proto.on = function(name, callback) {
        this.off(name, callback);
        this._events[name] = this._events[name] || [];
        this._events[name].push(callback);
        return this;
    };

    proto.off = function(name, callback) {
        if (!name && !callback) {
            this._events = {};

        } else if (name && !callback) {
            this._events[name] = [];

        } else if (name && callback) {
            this._events[name] = this._events[name] || [];
            this._events[name].splice(this._events[name].indexOf(callback), 1);
        }

        return this;
    };

    /**
     *
     * @param name
     * @param context
     * @param [args]
     */
    proto.trigger = function(name, context, args) {
        if (this._events[name]) {
            args = args || [];
            for (var i = 0; i < this._events[name].length; i++) {
                this._events[name][i].apply(context, args);
            }
        }
        return this;
    };

    proto.register = function() {
        var that = this;
        var accessors = {};
        var methods = {};

        for (var prop in this) {
            if (!this.hasOwnProperty(prop)) {
                continue;
            }

            if (prop.indexOf('_') === 0) {
                continue;
            }

            if (typeof(this[prop]) === 'object' &&
                (typeof(this[prop].get) === 'function' || typeof(this[prop].set) === 'function')) {

                accessors[prop] = this[prop];
                continue;
            }

            if (typeof(this[prop]) === 'function') {
                methods[prop] = this[prop];
            }
        }

        xtag.register(this._name, {
            lifecycle: {
                created: function() {
                    this.xblock = xblocks.element.create(this, {
                        schema: that._schema
                    }, that._proto);

                    that.trigger('create', this);

                    xblocks.log('[' + that._name + ']', 'created', this.xblock);
                    xblocks.log.time('[' + that._name + '] created');

                    this.xblock.on('update', function() {
                        this.lock(true);
                        that.trigger('update', this.node);
                        this.lock(false);
                    });

                    this.xblock.update();

                    xblocks.log.timeEnd('[' + that._name + '] created');
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

            accessors: accessors,

            methods: methods,

            events: {
                click: function(event) {
                    if (this.hasAttribute('disabled')) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
            }
        });
    };

}(xtag, xblocks));
