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
        this._node = node;
        this._component = null;

        var name = node.tagName.toLowerCase();

        var init = function() {
            this._component = React.renderComponent(
                xblocks.view.get(name)(this.getProps()),
                this._node,
                this._observerBind.bind(this)
            );
        }.bind(this);

        var observerInit = _.debounce(init, 1);

        this._observer = new MutationObserver(function(records) {
            if (records.some(this._checkMutation, this) && this._isMountedComponent()) {
                this.destroy();
                observerInit();
            }
        }.bind(this));

        init();
    }

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
     * @param {Object} props
     */
    XBElement.prototype.update = function(props) {
        if (!this._isMountedComponent()) {
            return;
        }

        props = _.isPlainObject(props) ? props : {};
        props = _.extend(this.getProps(), props);

        this._component.setProps(props);
    };

    /**
     * @returns {Object}
     */
    XBElement.prototype.getProps = function() {
        return xblocks.dom.attrs.toPlainObject(this._node).toObject();
    };

    XBElement.prototype._isMountedComponent = function() {
        return (this._component && this._component.isMounted());
    };

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._checkMutation = function(record) {
        return (record.type === 'childList' && record.target === this._node);
    };

    XBElement.prototype._observerBind = function() {
        this._observer.disconnect();
        this._observer.observe(this._node, {
            childList: true,
            characterData: true,
            subtree: true
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
