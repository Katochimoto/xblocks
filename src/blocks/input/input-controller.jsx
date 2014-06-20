/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

var XBInputController = xblocks.view.create({
    displayName: 'XBInputController',

    propTypes: {
        'class': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,
        'autofocus': React.PropTypes.bool,
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ])
    },

    shouldComponentUpdate: function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    render: function() {
        var props = xblocks.utils.merge({}, this.props);
        props = xblocks.utils.compact(props);
        props = xblocks.utils.normalizeAttrsName(props);

        if (props.disabled) {
            props.tabIndex = '-1';
        }

        var element;

        if (props.multiline) {
            element = 'textarea';
            delete props.autocomplete;

        } else {
            element = 'input';
            props.type = 'text';
            delete props.rows;
            delete props.cols;
        }

        return (
            React.DOM[element](props)
        );
    }
});
