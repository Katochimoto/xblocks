(function(xtag, xblocks, React) {

    /**
     * @module xblocks.element
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
                xblocks.view.get(name)(this._getNodeProps()),
                this._node,
                this._observerBind.bind(this)
            );
        }.bind(this);

        var observerInit = _.debounce(init, 1);

        this._observer = new MutationObserver(function(records) {
            if (records.some(this._checkParentMutation, this) && this._isMountedComponent()) {
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
     * @param {object} props
     */
    XBElement.prototype.update = function(props) {
        if (!this._isMountedComponent()) {
            return;
        }

        props = _.isPlainObject(props) ? props : {};
        props = _.extend(this._getNodeProps(), props);

        this._component.setProps(props);
    };

    /**
     * @returns {object}
     */
    XBElement.prototype._getNodeProps = function() {
        return xblocks.dom.attrs.toObject(this._node);
    };

    /**
     *
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._isMountedComponent = function() {
        return (this._component && this._component.isMounted());
    };

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @private
     */
    XBElement.prototype._checkParentMutation = function(record) {
        return (record.type === 'childList' && record.target === this._node);
    };

    /**
     * @private
     */
    XBElement.prototype._observerBind = function() {
        this._observer.disconnect();
        this._observer.observe(this._node, {
            childList: true,
            characterData: true,
            subtree: true
        });
    };

}(xtag, xblocks, React));
