/* global xblocks, React */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.view = {};

var _viewComponentsFactory = {};

var _viewCommon = {

    /**
     * Required attributes
     *
     * @memberOf ReactElement.prototype
     * @type {object}
     */
    'propTypes': {
        '_uid':         React.PropTypes.node,
        '_container':   React.PropTypes.any,  // Bad way ;(
        'children':     React.PropTypes.node,
        'xb-static':    React.PropTypes.bool
    },

    /**
     * Create node by template
     *
     * @memberOf ReactElement.prototype
     * @param {string} ref template name
     * @param {object} [props] the attributes of a node
     * @returns {?ReactElement}
     */
    'template': function(ref, props) {
        var xtmpl = this.props._container && this.props._container.xtmpl;

        if (typeof(xtmpl) === 'object' && xtmpl !== null && xtmpl.hasOwnProperty(ref)) {
            props = props || {};
            props.dangerouslySetInnerHTML = {
                '__html': this._templatePrepare(xtmpl[ ref ])
            };

            return React.createElement('div', props);
        }

        return null;
    },

    /**
     * Get the node associated with the view
     * @returns {HTMLElement}
     */
    'container': function() {
        return this.props._container;
    }
};

var _viewCommonUser = {
    '_templatePrepare': function(tmplString) {
        return tmplString;
    }
};

/**
 * Create class view node
 *
 * @example
 * var XBButtonContent = xblocks.view.create({
 *     'displayName': 'XBButtonContent',
 *     'render': function() {
 *         return (
 *             &lt;span {...this.props}&gt;{this.props.children}&lt;/span&gt;
 *         );
 *     }
 * });
 *
 * xblocks.view.register('xb-button', {
 *     'displayName': 'xb-button',
 *     'render': function() {
 *         return (
 *             &lt;button&gt;
 *                 &lt;XBButtonContent {...this.props} /&gt;
 *             &lt;/button&gt;
 *         );
 *     }
 * });
 *
 * @see http://facebook.github.io/react/docs/component-specs.html
 * @param {object|array} component settings view creation
 * @returns {function}
 */
xblocks.view.create = function(component) {
    component = Array.isArray(component) ? component : [ component ];
    component.unshift(true, {}, _viewCommonUser);
    component.push(_viewCommon);

    return React.createClass(xblocks.utils.merge.apply({}, component));
};

/**
 * Registration of a new node
 *
 * @example
 * xblocks.view.register('xb-button', {
 *     'displayName': 'xb-button',
 *     'render': function() {
 *         return (
 *             &lt;button {...this.props}&gt;{this.props.children}&lt;/button&gt;
 *         );
 *     }
 * });
 *
 * @see http://facebook.github.io/react/docs/component-specs.html
 * @param {string} blockName the name of the new node
 * @param {object|array} component settings view creation
 * @returns {function}
 */
xblocks.view.register = function(blockName, component) {
    if (React.DOM.hasOwnProperty(blockName)) {
        throw 'Specified item "' + blockName + '" is already defined';
    }

    React.DOM[ blockName ] = xblocks.view.create(component);
    _viewComponentsFactory[ blockName ] = React.createFactory( React.DOM[ blockName ] );
    return React.DOM[ blockName ];
};

/**
 * Get class view node
 *
 * @param {string} blockName the name of the new node
 * @returns {function}
 */
xblocks.view.get = function(blockName) {
    return React.DOM[ blockName ];
};

/**
 * Get factory view node
 *
 * @param {string} blockName the name of the new node
 * @returns {function}
 */
xblocks.view.getFactory = function(blockName) {
    return _viewComponentsFactory[ blockName ];
};
