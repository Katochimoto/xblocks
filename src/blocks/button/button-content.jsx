/** @jsx React.DOM */
/* global React, xv */
/* jshint strict: false */

xv.ButtonContent = xblocks.view.create({
    'displayName': 'xb-button_content',

    'propTypes': {
        'ico': React.PropTypes.object
    },

    'getDefaultProps': function() {
        return {
            'ico': {}
        };
    },

    'shouldComponentUpdate': function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    /* jshint ignore:start */
    'render': function() {
        var icoProps = xblocks.utils.merge({}, this.props.ico);
        var children = [
            <span className="_content-content"
                key="content"
                data-xb-content={this.props._uid}>{this.props.children}</span>
        ];

        if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(<xv.Ico {...icoProps}/>);

            } else if (icoProps.float === 'right') {
                children.push(<xv.Ico {...icoProps}/>);
            }
        }

        return (
            <span className="_content">{children}</span>
        );
    }
    /* jshint ignore:end */
});
