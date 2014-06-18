/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

xblocks.view.register('xb-link', {
    displayName: 'xb-link',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'href': React.PropTypes.string,
        'name': React.PropTypes.string,
        'target': React.PropTypes.oneOf([ '_self', '_blank', '_parent', '_top' ]),
        'type': React.PropTypes.oneOf([ 'normal', 'outer', 'pseudo', 'input' ])
    },

    render: function() {
        var classes = {
            'xb-link': true,
            '_disabled': this.props.disabled
        };

        if (this.props.type) {
            classes['_type-' + this.props.type] = true;
        }

        classes = React.addons.classSet(classes);

        var content = this.props.value || this.props.children;

        return (
            <a id={this.props.id}
                name={this.props.name}
                href={this.props.href}
                target={this.props.target}
                className={classes}
                data-xb-content={this.props._uid}>{content}</a>
        );
    }
});
