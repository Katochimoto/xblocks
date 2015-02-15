/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * @class xv.Ico
 * @memberof xv
 */
xv.Ico = xblocks.view.register('xb-ico', {
    'displayName': 'xb-ico',

    'propTypes': {
        'title':    React.PropTypes.string,
        'value':    React.PropTypes.string,
        'tabindex': React.PropTypes.string,
        'children': React.PropTypes.node,
        'size':     React.PropTypes.oneOf([ 's', 'm' ]),
        'type':     React.PropTypes.oneOf([
            'attention',
            'close',
            'check',
            'download',
            'download-white',
            'dropdown',
            'eye',
            'link',
            'link-white',
            'mail',
            'notification',
            'odnoklassniki',
            'pause',
            'people',
            'play',
            'print',
            'remove',
            'services',
            'settings',
            'three-dots',
            'trash',
            'trash-white',
            'twitter',
            'help',
            'upload',
            'upload-white',
            'vk'
        ]),
        'active':   React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    'getDefaultProps': function() {
        return {
            'size': 's',
            'children': String.fromCharCode(160)
        };
    },

    /* jshint ignore:start */
    'render': function() {
        var classes = {
            'xb-ico': true,
            '_active': this.props.active,
            '_disabled': this.props.disabled
        };

        if (this.props.type) {
            classes[ '_type-' + this.props.type ] = true;
        }

        if (this.props.size) {
            classes[ '_size-' + this.props.size ] = true;
        }

        classes = React.addons.classSet(classes);

        var tabIndex = this.props.tabindex;

        if (this.props.disabled) {
            tabIndex = '-1';
        }

        var content = this.props.value || this.props.children;

        return (
            <span className={classes}
                title={this.props.title}
                tabIndex={tabIndex}
                data-xb-content={this.props._uid}>{content}</span>
        );
    }
    /* jshint ignore:end */
});
