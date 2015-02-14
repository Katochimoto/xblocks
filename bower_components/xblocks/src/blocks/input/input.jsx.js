/** @jsx React.DOM */
/* global xblocks, React, XBInputController */
/* jshint strict: false */

/*! borschik:include:input-controller.jsx.js */

// TODO "list" attribute
// TODO "pattern" attribute
// TODO "title" attribute

var XBInput = xblocks.view.register('xb-input', [
    xblocks.utils.exportPropTypes('xb-link'),

    {
        displayName: 'xb-input',

        propTypes: {
            'name':         React.PropTypes.string,
            'disabled':     React.PropTypes.bool,
            'autosize':     React.PropTypes.bool,
            'multiline':    React.PropTypes.bool,
            'required':     React.PropTypes.bool,
            'readonly':     React.PropTypes.bool,
            'reset':        React.PropTypes.bool,
            'autofocus':    React.PropTypes.bool,
            'ghost':        React.PropTypes.bool,
            'type':         React.PropTypes.oneOf([
                                'text', 'number', 'date', 'datetime', 'email', 'month',
                                'range', 'search', 'tel', 'time', 'url', 'week', 'color',
                                'wysiwyg'
                            ]),
            'size':         React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'rows':         React.PropTypes.string,
            'cols':         React.PropTypes.string,
            'placeholder':  React.PropTypes.string,
            'value':        React.PropTypes.string,
            'prefix':       React.PropTypes.string,
            'postfix':      React.PropTypes.string,
            'tabindex':     React.PropTypes.string,
            'xb-link':      React.PropTypes.string
        },

        statics: {
            filterLinkProps: function(props) {
                return xblocks.utils.mapObject(
                    xblocks.utils.filterObject(props, xblocks.utils.filterPropsPrefixLink),
                    xblocks.utils.mapPropsPrefixLink
                );
            }
        },

        shouldComponentUpdate: function(nextProps, nextState) {
            return Boolean(
                !xblocks.utils.equals(nextProps, this.props) ||
                !xblocks.utils.equals(nextState, this.state)
            );
        },

        getDefaultProps: function() {
            return {
                'value': undefined,
                'type': 'text',
                'size': 'm',
                'rows': '4',
                'disabled': false,
                'autosize': false,
                'multiline': false,
                'required': false,
                'readonly': false,
                'reset': false,
                'autofocus': false,
                'ghost': false
            };
        },

        getInitialState: function() {
            return {
                'value': this.props.value
            };
        },

        componentDidMount: function() {
            // check show or hide placeholder after mount element
            this.refs.controller._dispatchEventToggleHint('', this.props.value);
        },

        /**
         * Remember current value in state
         * @param {Event} event
         * @private
         */
        _onChange: function(event) {
            this.setState({
                'value': event.target.value
            });
        },

        /**
         * Show or hide placeholder
         * @param {boolean} toggle
         * @private
         */
        _onHintToggle: function(toggle) {
            this.refs.placeholder.getDOMNode().style.visibility = (toggle ? 'inherit' : 'hidden');
        },

        /**
         * Check show complex input
         * @returns {boolean}
         * @private
         */
        _isComplex: function() {
            return Boolean(
                this.props.postfix ||
                this.props.prefix ||
                this.props.reset ||
                this.props.autosize ||
                this.props['xb-link'] ||
                this.props.placeholder
            );
        },

        /**
         * Click reset button
         * @private
         */
        _onClickReset: function() {
            this.setState({
                'value': ''
            });
        },

        render: function() {
            var isComplex = this._isComplex();
            var classes = {
                'xb-input': true,
                '_disabled': Boolean(this.props.disabled),
                '_autosize': Boolean(this.props.autosize),
                '_ghost': Boolean(this.props.ghost),
                '_complex': isComplex,
                '_simple': !isComplex
            };

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = React.addons.classSet(classes);

            var isPlaceholderHint = false;
            var controllerProps = {
                'key': 'controller',
                'ref': 'controller',
                'className': '_controller',
                'value': this.state.value,
                'name': this.props.name,
                'disabled': this.props.disabled,
                'required': this.props.required,
                'readOnly': this.props.readonly,
                'multiline': this.props.multiline,
                'autoFocus': this.props.autofocus,
                'rows': this.props.rows,
                'cols': this.props.cols,
                'tabIndex': this.props.tabindex,
                'autocomplete': this.props.autocomplete,
                'autosize': this.props.autosize,
                'onChange': this._onChange,
                'onHintToggle': this._onHintToggle
            };

            if (isComplex) {
                var children = [];

                if (this.props.placeholder) {
                    isPlaceholderHint = true;

                    children.push(
                        React.createElement("span", {ref: "placeholder", key: "placeholder", className: "_hint"}, 
                            React.createElement("span", {className: "_hint-inner"}, this.props.placeholder)
                        )
                    );
                }

                if (this.props['xb-link']) {
                    var linkProps = XBInput.filterLinkProps(this.props);
                    linkProps['theme'] = 'input';
                    linkProps['key'] = 'label';

                    children.push(
                        React.createElement(XBLink, React.__spread({},  linkProps), this.props['xb-link'])
                    );
                }

                if (this.props.prefix) {
                    children.push(
                        React.createElement("span", {key: "prefix", className: "_left"}, this.props.prefix)
                    );
                }

                if (this.props.postfix) {
                    children.push(
                        React.createElement("span", {key: "postfix", className: "_right"}, this.props.postfix)
                    );
                }

                if (this.props.reset) {
                    children.push(
                        React.createElement("span", {key: "reset", className: "_reset", onClick: this._onClickReset})
                    );
                }

                children.push(
                    React.createElement("span", {key: "content", className: "_content"}, 
                        React.createElement(XBInputController, React.__spread({},  controllerProps, {isPlaceholderHint: isPlaceholderHint})), 
                        React.createElement("span", {key: "view", className: "_view"})
                    )
                );

                return (
                    React.createElement("label", {className: classes}, children)
                );

            } else {

                return (
                    React.createElement(XBInputController, React.__spread({},  controllerProps, {className: classes, isPlaceholderHint: isPlaceholderHint}))
                );
            }
        }
    }
]);
