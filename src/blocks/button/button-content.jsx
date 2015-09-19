'use strict';

var React = require('react');
var view = require('xblocks/view');
var equals = require('xblocks/utils/equals');
var merge = require('xblocks/utils/merge');
var isEmptyObject = require('xblocks/utils/isEmptyObject');

module.exports = view.create({
    displayName: 'xb-button_content',

    propTypes: {
        'ico': React.PropTypes.object
    },

    getDefaultProps: function() {
        return {
            'ico': {}
        };
    },

    shouldComponentUpdate: function(nextProps) {
        return !equals(nextProps, this.props);
    },

    render: function() {
        var icoProps = merge({}, this.props.ico);
        var children = [
            <span className="_content-content"
                key="content"
                data-xb-content={this.props._uid}>{this.props.children}</span>
        ];

        if (!isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(<xb-ico {...icoProps}/>);

            } else if (icoProps.float === 'right') {
                children.push(<xb-ico {...icoProps}/>);
            }
        }

        return (
            <span className="_content">{children}</span>
        );
    }
});
