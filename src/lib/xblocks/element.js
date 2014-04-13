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
        this._component = null;

        var observerInit = _.debounce(_.bind(this.init, this), 1);
        this._observer = new MutationObserver(_.bind(function(records) {
            if (records.some(this._checkMutation, this) && this._isMountedComponent()) {
                this.destroy();
                observerInit();
            }
        }, this));
    }

    XBElement.prototype._isMountedComponent = function() {
        return this._component && this._component.isMounted();
    };

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._checkMutation = function(record) {
        return record.type === 'childList' && record.target === this._node;
    };

    XBElement.prototype.init = function() {
        if (this._isMountedComponent()) {
            return;
        }

        this._component = React.renderComponent(
            xblocks.view.get(this._name)({ element: this._node }),
            this._node,
            _.bind(function() {
                this._observer.disconnect();
                this._observer.observe(this._node, {
                    childList: true,
                    characterData: true,
                    subtree: true
                });
            }, this)
        );
    };

    XBElement.prototype.destroy = function() {
        this._observer.disconnect();

        if (this._isMountedComponent()) {
            try {
                React.unmountComponentAtNode(this._node);
                this._component.unmountComponent();
                this._component = null;
            } catch (e) {
            }
        }
    };

    /**
     * @param {Object} state
     */
    XBElement.prototype.update = function(state) {
        if (!this._isMountedComponent()) {
            return;
        }

        state = _.isPlainObject(state) ? state : {};
        state = _.extend(this.getState(), state);

        /*var complexState = state.toComplex();

         if (tv4) {
         var schema = tv4.getSchema(this._schema);

         if (schema) {
         var check = tv4.validateResult(complexState.toSchema(), schema);
         if (!check.valid) {
         throw check.error;
         }
         }
         }

         return complexState.toSchema(1);
         */

        this._component.setState(state);
    };

    /**
     * @returns {Object}
     */
    XBElement.prototype.getState = function() {
        return _.extend(
            _.isPlainObject(this._node.state) ? this._node.state : {},
            xblocks.dom.attrs.toPlainObject(this._node).toObject(),
            (this._isMountedComponent() && _.isPlainObject(this._component.state)) ? this._component.state : {}
        );
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
