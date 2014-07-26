/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBPopup = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-popup',

        propTypes: {
            'close': React.PropTypes.bool,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank' ])
        },

        mixins: [ React.addons.PureRenderMixin ],

        getDefaultProps: function() {
            return {
                'close': false,
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

            children.unshift(this.template('xb-popup-title', {
                'key': 'title',
                'className': '_title'
            }));

            if (this.props.close) {
                children.unshift(
                    <a key="close" className="_close"></a>
                );
            }

            children.push(this.template('xb-popup-buttons', {
                'key': 'buttons',
                'className': '_buttons'
            }));

            var classes = {
                '_popup': true
            };

            if (this.props.theme) {
                classes['_theme-' + this.props.theme] = true;
            }

            var props = {
                'className': React.addons.classSet(classes)
            };

            return React.DOM.div(props, children);
        }
    }
]);
