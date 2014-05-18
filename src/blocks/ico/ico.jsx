/** @jsx React.DOM */
(function(xblocks, React) {

xblocks.view.register('xb-ico', {
    displayName: 'xb-ico',

    propTypes: {
        '_uid': React.PropTypes.string,

        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'alt': React.PropTypes.string,
        'value': React.PropTypes.string,
        'children': React.PropTypes.renderable,
        'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
        'type': React.PropTypes.oneOf(['remove', 'notification', 'check', 'dropdown']).isRequired,
        'active': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            '_uid': '',
            'size': 'm',
            'children': String.fromCharCode(160)
        };
    },

    render: function() {
        var classes = {
            'xb-ico': true,
            'xb-ico_active': this.props.active,
            'is-disabled': this.props.disabled
        };

        if (this.props.type) {
            classes['xb-ico_type_' + this.props.type] = true;
        }

        if (this.props.size) {
            classes['xb-ico_size_' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        var content = this.props.value || this.props.children;

        return (
            <span className={classes} data-xb-content={this.props._uid}>{content}</span>
        );
    }
});

}(xblocks, React));
