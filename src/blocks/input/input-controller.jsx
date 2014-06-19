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
        'tabindex': React.PropTypes.string
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

        var element = 'input';

        if (props.multiline) {
            element = 'textarea';
        }

        return (
            React.DOM[element](props)
        );
    }
});
