/** @jsx React.DOM */
/* global xblocks, React, XBInputController */
/* jshint strict: false */

/*! borschik:include:input-controller.jsx.js */

// TODO "list" attribute
// TODO "pattern" attribute

xblocks.view.register('xb-input', {
    displayName: 'xb-input',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'autosize': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,
        'reset': React.PropTypes.bool,
        'autofocus': React.PropTypes.bool,
        'ghost': React.PropTypes.bool,
        'type': React.PropTypes.oneOf([
            'text', 'number', 'date', 'datetime', 'email', 'month',
            'range', 'search', 'tel', 'time', 'url', 'week', 'color'
        ]),
        'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'prefix': React.PropTypes.string,
        'postfix': React.PropTypes.string,
        'tabindex': React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            'value': '',
            'type': 'text',
            'size': 'm',
            'rows': '4'
        };
    },

    componentDidMount: function() {
        this.refs.controller.getDOMNode().addEventListener('_hint-toggle', this._hintToggle, false);
        this.refs.controller._dispatchEventToggleHint('', this.props.value);
    },

    componentWillUnmount: function() {
        this.refs.controller.getDOMNode().removeEventListener('_hint-toggle', this._hintToggle, false);
    },

    _hintToggle: function(event) {
        this.refs.placeholder.getDOMNode().style.visibility = event.detail.toggle ? 'inherit' : 'hidden';
    },

    _isComplex: function() {
        return (
            this.props.postfix ||
            this.props.prefix ||
            this.props.reset ||
            this.props.label ||
            this.props.autosize
        );
    },

    _resetClick: function() {
        this.refs.controller.setState({ 'value': '' });
    },

    render: function() {
        var props = xblocks.utils.merge({}, this.props);
        var isComplex = this._isComplex();
        var classes = {
            'xb-input': true,
            '_disabled': Boolean(props.disabled),
            '_autosize': Boolean(props.autosize),
            '_ghost': Boolean(props.ghost)
        };

        if (props.size) {
            classes['_size-' + props.size] = true;
        }

        if (isComplex) {
            classes._complex = true;
        } else {
            classes._simple = true;
        }

        classes = React.addons.classSet(classes);



        if (isComplex) {
            var children = [];

            if (props.placeholder) {
                children.push(
                    <span ref="placeholder" key="placeholder" className="_hint">
                        <span className="_hint-inner">{props.placeholder}</span>
                    </span>
                );
            }

            if (props.label) {
                children.push(xblocks.view.get('xb-link')({
                    'type': 'input',
                    'key': 'label'
                }));
            }

            if (props.prefix) {
                children.push(
                    React.DOM.span({ key: 'prefix', className: '_left' }, props.prefix)
                );
            }

            if (props.postfix) {
                children.push(
                    React.DOM.span({ key: 'postfix', className: '_right' }, props.postfix)
                );
            }

            if (props.reset) {
                children.push(
                    React.DOM.span({
                        key: 'reset',
                        className: '_reset',
                        onClick: this._resetClick
                    })
                );
            }

            var controllerProps = xblocks.utils.merge({}, props);
            controllerProps['class'] = '_controller';
            /* jshint -W069 */
            controllerProps['key'] = 'controller';
            controllerProps['ref'] = 'controller';
            delete controllerProps.placeholder;

            children.push(
                React.DOM.span({
                    'key': 'content',
                    'className': '_content'
                }, [
                    XBInputController(controllerProps),
                    React.DOM.span({ 'key': 'view', 'className': '_view' })
                ])
            );

            return (
                React.DOM.label({ className: classes }, children)
            );

        } else {
            props['class'] = classes;
            props['ref'] = 'controller';

            return (
                XBInputController(props)
            );
        }
    }
});
