(function(xtag, xblocks, React) {
    /** @namespace xblocks */

    /**
     * @namespace xblocks.element
     * @memberOf xblocks
     * @type {Object}
     */
    xblocks.element = {};

    /**
     * @param {HTMLElement} node
     * @return {XBElement}
     */
    xblocks.element.create = function(node) {
        return new XBElement(node);
    };


    /**
     * @param {HTMLElement} node
     * @constructor
     */
    function XBElement(node) {
        this._name = node.tagName.toLowerCase();
        this._schema = 'http://xblocks.ru/' + this._name;
        this._node = node;
        this._observer = new MutationObserver(_.bind(this._onMutationObserver, this));
        this._component = null;
        this._onMutationObserverInit = _.debounce(this._onInit, 1);

        this._init(this._onInit);
    }

    /**
     * @this {React.Constructor}
     * @param {XBElement} xbelement
     * @private
     */
    XBElement.prototype._onMutationObserverInit = _.noop;

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._checkMutation = function(record) {
        return record.type === 'childList' && record.target === this._node;
    };

    /**
     * @this {React.Constructor}
     * @param {XBElement} xbelement
     * @private
     */
    XBElement.prototype._onInit = function(xbelement) {
        xbelement._observer.observe(xbelement._node, {
            childList: true,
            characterData: true,
            subtree: true
        });
    };

    /**
     * @param {MutationRecord[]} records
     * @private
     */
    XBElement.prototype._onMutationObserver = function(records) {
        if (records.some(this._checkMutation, this) && this._component.isMounted()) {
            this.destroy();
            this._init(this._onMutationObserverInit);
        }
    };

    /**
     * @param {Function} [callback]
     * @private
     */
    XBElement.prototype._init = function(callback) {
        callback = _.partial(callback  || _.noop, this);

        if (!this._component || !this._component.isMounted()) {

            this._component = React.renderComponent(
                xblocks.view.get(this._name)({ element: this._node }),
                this._node,
                callback
            );

        } else if (this._component.isMounted()) {
            callback.call(this._component);
        }
    };

    XBElement.prototype.destroy = function() {
        if (this._observer) {
            this._observer.disconnect();
        }

        if (this._component && this._component.isMounted()) {
            try {
                React.unmountComponentAtNode(this._node);
                this._component.unmountComponent();
            } catch (e) {
            }
        }
    };

    /**
     * @param {Object} state
     */
    XBElement.prototype.update = function(state) {
        state = _.isPlainObject(state) ? state : {};
        this._init(function() {
            console.log(this, arguments);
            this.setState(state);
        });
    };


    /*

    XBElement.prototype.update = function() {
        xblocks.log('XBElement->update', this);
        xblocks.log.time('XBElement->update');

        this.lock(true);

        this.attrs = Object.merge(
            xblocks.attrs.plain({}),
            this.node.attrs || {},
            xblocks.attrs.toPlainObject(this.node)
        );

        var complexAttrs = this.attrs.toComplex();
        if (!Modernizr.createshadowroot) {
            complexAttrs.setValue(this.getHtml());
        }

        if (tv4 && this.schema) {
            var schema = tv4.getSchema(this.schema);

            if (schema) {
                var check = tv4.validateResult(complexAttrs.toSchema(), schema);

                if (!check.valid) {
                    throw check.error;
                }
            }
        }


        // формируются только атрибуты первой вложенности toSchema(1)
        // этого достаточно для описания псевдо-элементов, вложенных в текущий
        var tmplData = complexAttrs.toSchema(1);
        tmplData['__contentClass'] = this.getContentClass();

        var html = yr.run(this.module, tmplData, 'template');
        var template = xtag.createFragment(html);
        var root = this.root();

        xtag.innerHTML(root, '');
        root.appendChild(template.cloneNode(true));

        this.lock(false);

        xblocks.log.timeEnd('XBElement->update');

        this.trigger('update');
    };

    proto.setHtml = function(html) {
        this.node.innerHTML = html;

        if (!Modernizr.createshadowroot) {
            this.update();
        }
    };

    proto.getHtml = function() {
        var node = this.getContentNode();


        return node.innerHTML;
    };



    proto.root = function() {
        var root;

        if (Modernizr.createshadowroot) {
            root = this.node.shadowRoot;
            if (!root) {
                root = this.node.createShadowRoot();
                root.resetStyleInheritance = true;
                root.applyAuthorStyles = true;
            }

        } else {
            root = this.node;
        }

        return root;
    };

    proto.getContentClass = function() {
        return this.module + '-content';
    };

    proto.getContentNode = function() {
        var content;
        if (!Modernizr.createshadowroot) {
            content = this.node.querySelector('.' + this.getContentClass());
        }

        return content || this.node;
    };


    */






}(xtag, xblocks, React));
