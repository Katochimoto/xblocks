/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBSelect = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-popup',

        propTypes: {
            'close': React.PropTypes.bool,
            'popup-title': React.PropTypes.renderable,
            'children': React.PropTypes.renderable,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank' ])
        },

        getDefaultProps: function() {
            return {
                'theme': 'normal'
            };
        },

        render: function() {
            var children = [
                <div className="_content"
                    key="content"
                    data-xb-content={this.props._uid}
                    dangerouslySetInnerHTML={{__html: this.props.children}} />
            ];

            if (this.props['popup-title']) {
                children.unshift(
                    <div key="title" className="_title">{this.props['popup-title']}</div>
                );
            }

            if (this.props.close) {
                children.unshift(
                    <a key="close" className="_close"></a>
                );
            }

            var classes = {
                '_popup': true
            };

            if (this.props.theme) {
                classes['_theme-' + this.props.theme] = true;
            }

            classes = React.addons.classSet(classes);

            return (
                <div className={classes}>{children}</div>
            );
        }
    }
]);
