/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBSelect = xblocks.view.register('xb-select', {
    displayName: 'xb-select',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'tabindex': React.PropTypes.string,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'disabled': false,
            'tabindex': '1'
        };
    },

    render: function() {
        var classes = {
            'xb-select': true,
            '_disabled': this.props.disabled
        };

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        return (
            <span className={classes}>
                <input className="_controller" />
                <XBButton type="inline"></XBButton>
                <span className="_xb-select-dropdown"></span>
            </span>
        );
    }
});

