var xblocks = require('xblocks');
var React = require('react');
var isEmpty = require('_/lang/isEmpty');

module.exports = xblocks.view.create({
    displayName: 'xb-button_content',

    mixins: [ React.addons.PureRenderMixin ],

    // @ifdef DEBUG
    propTypes: {
        'ico': React.PropTypes.object
    },
    // @endif

    getDefaultProps: function () {
        return {
            'ico': {}
        };
    },

    render: function () {
        var children = [
            <span className="_content-content"
                key="content"
                data-xb-content={this.props._uid}>{this.props.children}</span>
        ];

        if (!isEmpty(this.props.ico) && this.props.ico.type) {
            if (!this.props.ico.float || this.props.ico.float === 'left') {
                children.unshift(<xb-ico {...this.props.ico} key="ico" />);

            } else if (this.props.ico.float === 'right') {
                children.push(<xb-ico {...this.props.ico} key="ico" />);
            }
        }

        return (
            <span className="_content">{children}</span>
        );
    }
});
