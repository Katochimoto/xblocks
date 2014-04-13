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
        var blockName = this._name;

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

        xtag.register(blockName, {
            lifecycle: {
                created: function() {
                    this.xblock = xblocks.element.create(this);
                },

                inserted: function() {
                    this.xblock.init();
                },

                removed: function() {
                    this.xblock.destroy();
                },

                attributeChanged: function(attrName, oldValue, newValue) {
                    var state = {};
                    state[attrName] = xblocks.dom.attrs.getRealValue(attrName, newValue);
                    this.xblock.update(state);
                }
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
