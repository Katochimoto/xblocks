/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

/*! borschik:include:input-controller.jsx.js */

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
        'type': React.PropTypes.oneOf([
            'text', 'number', 'date', 'datetime', 'email', 'month',
            'range', 'search', 'tel', 'time', 'url', 'week', 'color'
        ]),
        'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
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
            'type': 'text',
            'size': 'm'
        };
    },

    _isComplex: function() {
        return this.props.postfix || this.props.prefix || this.props.reset || this.props.label || this.props.autosize;
    },

    render: function() {
        var props = xblocks.utils.merge({}, this.props);
        var isComplex = this._isComplex();
        var classes = {
            'xb-input': true,
            '_disabled': props.disabled,
            '_autosize': props.autosize
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

            if (props.label) {
                children.push(xblocks.view.get('xb-link')({
                    'type': 'input',
                    'key': 'label'
                }));
            }

            if (props.prefix) {
                children.push(
                    <span key="prefix" className="_left">{props.prefix}</span>
                );
            }

            if (props.postfix) {
                children.push(
                    <span key="postfix" className="_right">{props.postfix}</span>
                );
            }

            if (props.reset) {
                children.push(xblocks.view.get('xb-ico')({
                    'class': '_reset',
                    'type': 'remove',
                    'active': true,
                    'key': 'reset'
                }));
            }

            var controllerProps = xblocks.utils.merge({}, props);
            controllerProps['class'] = '_controller';
            controllerProps['key'] = 'controller';

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
                <label className={classes}>{children}</label>
            );

        } else {
            props['class'] = classes;

            return (
                XBInputController(props)
            );
        }
    }
});
