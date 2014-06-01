/** @jsx React.DOM */

var XBButtonContent = xblocks.view.create({
    displayName: 'XBButtonContent',

    propTypes: {
        'ico': React.PropTypes.object
    },

    statics: {
        mapIcoProps: function(props) {
            var regIcoProp = /^xb-ico-/;
            return xblocks.utils.mapObject(props, function(name, descr) {
                return {
                    'name': name.replace(regIcoProp, ''),
                    'descr': descr
                };
            });
        }
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
        var icoProps = XBButtonContent.mapIcoProps(this.props.ico);
        var children = [
            <span className="_content-content" key="content" data-xb-content={this.props._uid}>{this.props.children}</span>
        ];

        if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
            icoProps.key = 'ico';
            var icoView = xblocks.view.get('xb-ico')(icoProps);

            if (!icoProps.float || icoProps.float === 'left') {
                children.unshift(icoView);

            } else if (icoProps.float === 'right') {
                children.push(icoView);
            }
        }

        return (
            <span className="_content">
                {children}
            </span>
        );
    }
});