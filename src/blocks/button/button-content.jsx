/** @jsx React.DOM */

var XBButtonContent = xblocks.view.create({
    displayName: 'XBButtonContent',

    propTypes: {
        'ico': React.PropTypes.object,
        'content': React.PropTypes.renderable
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
            'ico': {},
            'content': String.fromCharCode(160)
        };
    },

    shouldComponentUpdate: function(nextProps) {
        return !xblocks.utils.equals(nextProps, this.props);
    },

    render: function() {
        var icoProps = XBButtonContent.mapIcoProps(this.props.ico);
        var classes = {
            '_content-inner': Boolean(this.props.content)
        };

        classes = React.addons.classSet(classes);

        var children = [
            <span className={classes} key="content" data-xb-content={this.props._uid}>{this.props.content}</span>
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