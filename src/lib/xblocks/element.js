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
     *
     * @param {HTMLElement} node
     * @constructor
     */
    function XBElement(node) {

        /**
         * @type {String}
         */
        this.name = node.tagName.toLowerCase();

        /**
         * @type {String}
         */
        this.schema = 'http://xblocks.ru/' + this.name;

        var view = xblocks.view.get(this.name);
        var component;

        init();

        /*var observerParams = { childList: true, characterData: true, subtree: true };
        var observer = new MutationObserver(function(r) {
            if (component.isMounted()) {
                destroy();
                init(_.debounce(function() {
                    observer.observe(node, observerParams);
                }, 1));
            }
        });

        observer.observe(node, observerParams);*/

        this.init = init;
        this.update = update;
        this.destroy = destroy;


        function init(callback) {
            if (!component || !component.isMounted()) {
                component = React.renderComponent(view({ element: node }), node, callback);

            } else if (component.isMounted()) {
                callback && callback.call(component);
            }
        }

        function destroy() {
            //observer.disconnect();
            if (component.isMounted()) {
                try {
                    React.unmountComponentAtNode(node);
                    component.unmountComponent();
                } catch (e) {
                }
            }
        }

        function update(state) {
            init(function() {
                this.setState(state);
            });
        }
    }


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
