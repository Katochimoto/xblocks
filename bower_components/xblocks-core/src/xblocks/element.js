/* global xblocks, global */
/* jshint strict: false */

var _elementStatic = {
    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @protected
     */
    checkNodeChange: function(record) {
        return (record.type === 'childList');
    },

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @protected
     */
    checkAttributesChange: function(record) {
        return (record.type === 'attributes');
    },

    /**
     * @param {MutationRecord} record
     * @returns {boolean}
     * @protected
     */
    filterAttributesRemove: function(record) {
        return (record.type === 'attributes' && !this._node.hasAttribute(record.attributeName));
    },

    /**
     * @param {MutationRecord} record
     * @returns {string}
     * @protected
     */
    mapAttributesName: function(record) {
        return record.attributeName;
    },

    /**
     * @param {array} records
     * @protected
     */
    globalInitEvent: function(records) {
        xblocks.event.dispatch(global, 'xb-created', { detail: { records: records } });
    },

    /**
     * @param {array} records
     * @protected
     */
    globalRepaintEvent: function(records) {
        xblocks.event.dispatch(global, 'xb-repaint', { detail: { records: records } });
    }

    /**
     * @param {array} records
     * @protected
     */
    //globalUpdateEvent: function(records) {
    //    xblocks.event.dispatch(global, 'xb-update', { detail: { records: records } });
    //}
};

/**
 * Xblock element constructor
 * @param {HTMLElement} node the node of a custom element
 * @constructor
 */
xblocks.element = function(node) {
    node.xblock = this;
    this._node = node;
    this._init(node.state, node.content, this._callbackInit);
};

/**
 * Xblock element factory
 *
 * @param {HTMLElement} node the node of a custom element
 * @returns {xblocks.element}
 */
xblocks.element.create = function(node) {
    return new xblocks.element(node);
};

/**
 * The node of a custom element
 *
 * @type {HTMLElement}
 * @protected
 */
xblocks.element.prototype._node = null;

/**
 * React component
 *
 * @type {Constructor}
 * @protected
 */
xblocks.element.prototype._component = null;

/**
 * Instance MutationObserver
 *
 * @type {MutationObserver}
 * @protected
 */
xblocks.element.prototype._observer = null;

/**
 * Unmounts a component and removes it from the DOM
 * @fires xblocks.element~event:xb-destroy
 */
xblocks.element.prototype.destroy = function() {
    xblocks.react.unmountComponentAtNode(this._node);
    this.unmount();
    xblocks.event.dispatch(this._node, 'xb-destroy', { 'bubbles': false, 'cancelable': false });
};

/**
 * Unmounts a component
 */
xblocks.element.prototype.unmount = function() {
    if (this._observer) {
        this._observer.disconnect();
    }

    if (this.isMounted()) {
        this._component.unmountComponent();
    }

    this._component = null;
};

/**
 * Update react view
 * @param {object} [props] added attributes
 * @param {array} [removeProps] remote attributes
 * @param {function} [callback] the callback function
 */
xblocks.element.prototype.update = function(props, removeProps, callback) {
    if (!this.isMounted()) {
        return;
    }

    var nextProps = this._node.state;
    var action = 'setProps';

    if (typeof(props) === 'object') {
        var prop;
        for (prop in props) {
            if (props.hasOwnProperty(prop)) {
                nextProps[ prop ] = props[ prop ];
            }
        }
    }

    // merge of new and current properties
    // and the exclusion of remote properties
    if (Array.isArray(removeProps) && removeProps.length) {
        action = 'replaceProps';
        nextProps = xblocks.utils.merge(true, {}, this.getMountedProps(), nextProps);

        var l = removeProps.length;
        while (l--) {
            if (nextProps.hasOwnProperty(removeProps[ l ])) {
                delete nextProps[ removeProps[ l ] ];
            }
        }
    }

    if (nextProps.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
        this.repaint(callback);

    } else {
        xblocks.dom.attrs.typeConversion(nextProps, this._node.xprops);
        this._component[ action ](nextProps, this._callbackUpdate.bind(this, callback));
    }
};

/**
 * Redrawing react view
 * @param {function} [callback] the callback function
 */
xblocks.element.prototype.repaint = function(callback) {
    var children = this._node.content;
    var props = this._node.state;
    var mprops = this.getMountedProps() || {};
    var prop;

    for (prop in mprops) {
        if (mprops.hasOwnProperty(prop)) {
            props[ prop ] = mprops[ prop ];
        }
    }

    this.destroy();
    this._init(props, children, this._callbackRepaint.bind(this, callback));
};

/**
 * Returns true if the component is rendered into the DOM, false otherwise
 * @see http://facebook.github.io/react/docs/component-api.html#ismounted
 * @returns {boolean}
 */
xblocks.element.prototype.isMounted = function() {
    return Boolean(this._component && this._component.isMounted());
};

/**
 * Installing a new content react component
 * @param {string} content
 */
xblocks.element.prototype.setMountedContent = function(content) {
    if (this.isMounted()) {
        this.update({ 'children': content });
    }
};

/**
 * Receiving the content components react
 * @returns {?string}
 */
xblocks.element.prototype.getMountedContent = function() {
    if (this.isMounted()) {
        return this._component.props.children;
    }
};

/**
 * Get components react
 * @returns {?ReactCompositeComponent.createClass.Constructor}
 */
xblocks.element.prototype.getMountedComponent = function() {
    if (this.isMounted()) {
        return this._component;
    }
};

/**
 * Gets the attributes of the components
 * @returns {?object}
 */
xblocks.element.prototype.getMountedProps = function() {
    return this.isMounted() ? this._component.props : null;
};

/**
 * @param {object} [props]
 * @param {string} [children]
 * @param {function} [callback] the callback function
 * @protected
 */
xblocks.element.prototype._init = function(props, children, callback) {
    if (this.isMounted()) {
        return;
    }

    props._uid = this._node.xuid;
    props._container = this._node;
    xblocks.dom.attrs.typeConversion(props, this._node.xprops);

    var proxyConstructor = xblocks.view.getFactory(this._node.xtagName)(props, children);

    if (props.hasOwnProperty(xblocks.dom.attrs.XB_ATTRS.STATIC)) {
        this.unmount();
        xblocks.utils.log.time(this._node, 'react_render');
        this._node.innerHTML = React.renderToStaticMarkup(proxyConstructor);
        xblocks.utils.log.time(this._node, 'react_render');
        this._node.upgrade();

        if (callback) {
            callback.call(this);
        }

    } else {
        xblocks.utils.log.time(this._node, 'react_render');
        var that = this;
        this._component = xblocks.react.render(
            proxyConstructor,
            this._node,
            function() {
                xblocks.utils.log.time(that._node, 'react_render');
                that._component = this;
                that._callbackRender(callback);
            }
        );
    }
};

/**
 * @protected
 * @fires xblocks.element~event:xb-created
 */
xblocks.element.prototype._callbackInit = function() {
    xblocks.event.dispatch(this._node, 'xb-created');
    xblocks.utils.lazy(_elementStatic.globalInitEvent, this._node);
    xblocks.utils.log.time(this._node, 'xb_init');
};

/**
 * @param {function} [callback] the callback function
 * @protected
 * @fires xblocks.element~event:xb-repaint
 */
xblocks.element.prototype._callbackRepaint = function(callback) {
    xblocks.event.dispatch(this._node, 'xb-repaint');
    xblocks.utils.lazy(_elementStatic.globalRepaintEvent, this._node);

    if (callback) {
        callback.call(this);
    }
};

/**
 * @param {function} [callback] the callback function
 * @protected
 */
xblocks.element.prototype._callbackRender = function(callback) {
    this._node.upgrade();

    if (!this._observer) {
        this._observer = new global.MutationObserver(this._callbackMutation.bind(this));
    }

    this._observer.observe(this._node, {
        'attributes': true,
        'childList': true,
        'characterData': true,
        'subtree': false,
        'attributeOldValue': false,
        'characterDataOldValue': false,
        'attributeFilter': Object.keys(this._node.xprops)
    });

    if (callback) {
        callback.call(this);
    }
};

/**
 * @param {MutationRecord[]} records
 * @protected
 */
xblocks.element.prototype._callbackMutation = function(records) {
    if (!this.isMounted()) {
        return;
    }

    // full repaint
    if (records.some(_elementStatic.checkNodeChange)) {
        this.repaint();

    } else if (records.some(_elementStatic.checkAttributesChange)) {

        var removeAttrs = records
            .filter(_elementStatic.filterAttributesRemove, this)
            .map(_elementStatic.mapAttributesName);

        this.update(null, removeAttrs);
    }
};

/**
 * @param {function} [callback] the callback function
 * @protected
 * @fires xblocks.element~event:xb-update
 */
xblocks.element.prototype._callbackUpdate = function(callback) {
    this._node.upgrade();

    xblocks.event.dispatch(this._node, 'xb-update');
    //xblocks.utils.lazy(_elementStatic.globalUpdateEvent, this._node);

    if (callback) {
        callback.call(this);
    }
};


/**
 * Created event
 * @event xblocks.element~event:xb-created
 * @type {xblocks.event.Custom}
 */

/**
 * Destroy event
 * @event xblocks.element~event:xb-destroy
 * @type {xblocks.event.Custom}
 */

/**
 * Updated event
 * @event xblocks.element~event:xb-update
 * @type {xblocks.event.Custom}
 */

/**
 * Repaint event
 * @event xblocks.element~event:xb-repaint
 * @type {xblocks.event.Custom}
 */
