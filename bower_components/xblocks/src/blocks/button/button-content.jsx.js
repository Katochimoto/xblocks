/** @jsx React.DOM */
/* jshint strict: false */

var XBButtonContent = xblocks.view.create({
    displayName: 'XBButtonContent',

    propTypes: {
        'ico': React.PropTypes.object
    },

    getDefaultProps: function() {
        return {
            'ico': {}
        };
    },

    shouldComponentUpdate: function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    render: function() {
        var icoProps = xblocks.utils.merge({}, this.props.ico);
        var children = [
            React.createElement("span", {className: "_content-content", 
                key: "content", 
                "data-xb-content": this.props._uid}, this.props.children)
        ];

        if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(React.createElement(XBIco, React.__spread({},  icoProps)));

            } else if (icoProps.float === 'right') {
                children.push(React.createElement(XBIco, React.__spread({},  icoProps)));
            }
        }

        return (
            React.createElement("span", {className: "_content"}, children)
        );
    }
});
