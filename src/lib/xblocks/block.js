(function(xtag, xblocks) {

    xblocks.create = function(blockName) {
        return new XBlock(blockName);
    };

    function XBlock(blockName) {
        this._name = blockName;
    }

    XBlock.prototype.register = function() {
        var accessors = {};
        var methods = {};

        for (var prop in this) {
            if (!this.hasOwnProperty(prop)) {
                continue;
            }

            if (prop.indexOf('_') === 0) {
                continue;
            }

            if (_.isPlainObject(this[prop]) && (_.isFunction(this[prop].get) || _.isFunction(this[prop].set))) {
                accessors[prop] = _.cloneDeep(this[prop]);
                continue;
            }

            if (_.isFunction(this[prop])) {
                methods[prop] = _.cloneDeep(this[prop]);
            }
        }

        xtag.register(this._name, {
            lifecycle: {
                created: function() {

                    this.xblock = xblocks.element.create(this);

                    /*var blockName = this.tagName.toLowerCase();
                    var component = xblocks.view.get(blockName);

                    React.renderComponent(component({}), this);*/

                    /*
                    this.xblock = xblocks.element.create(this, {
                        schema: that._schema
                    });

                    that.trigger('create', this);

                    this.xblock.on('update', function() {
                        this.lock(true);
                        that.trigger('update', this.node);
                        this.lock(false);
                    });

                    this.xblock.on('mutation', function() {
                        this.lock(true);
                        that.trigger('mutation', this.node);
                        this.lock(false);
                    });

                    this.xblock.update();
                    */
                }

                /*
                inserted: function() {
                    if (this.xblock.isLock()) {
                        return;
                    }

                    this.xblock.lock(true);
                    this.xblock.trigger('inserted');
                    that.trigger('inserted', this);
                    this.xblock.lock(false);
                },

                removed: function() {
                    if (this.xblock.isLock()) {
                        return;
                    }

                    this.xblock.lock(true);
                    this.xblock.trigger('removed');
                    that.trigger('removed', this);
                    this.xblock.lock(false);
                },

                attributeChanged: function(attrName, oldValue, newValue) {
                    if (this.xblock.isLock()) {
                        return;
                    }

                    this.xblock.lock(true);
                    this.xblock.trigger('attributeChanged', [ attrName, oldValue, newValue ]);
                    that.trigger('attributeChanged', this, [ attrName, oldValue, newValue ]);
                    this.xblock.lock(false);
                }
                */
            },

            accessors: accessors,

            methods: methods,

            events: {
                /*
                click: function(event) {
                    if (this.hasAttribute('disabled')) {
                        event.preventDefault();
                        event.stopPropagation();
                    }
                }
                */
            }
        });
    };

}(xtag, xblocks));
