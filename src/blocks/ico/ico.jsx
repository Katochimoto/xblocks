/** @jsx React.DOM */
(function(xblocks, React) {

xblocks.view.register('xb-ico', React.createClass({
    displayName: 'xb-ico',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'alt': React.PropTypes.string,
        'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
        'type': React.PropTypes.oneOf(['remove', 'notification', 'check', 'dropdown']),
        'active': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm'
        };
    },

    render: function() {
        var cx = React.addons.classSet;
        var classes = {
            'xb-ico': true,
            'xb-ico_active': this.props.active,
            'is-disabled': this.props.disabled,
            '_content': true
        };

        if (this.props.type) {
            classes['xb-ico_type_' + this.props.type] = true;
        }

        if (this.props.size) {
            classes['xb-ico_size_' + this.props.size] = true;
        }

        classes = cx(classes);

        var value = this.props.value || ' ';

        return (
            <span className={classes}>{value}</span>
        );
    }
}));

}(xblocks, React));
