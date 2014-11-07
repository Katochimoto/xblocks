/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

/* jshint -W098 */
var XBPopup = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-popup',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'close': React.PropTypes.bool,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank' ])
        },

        getDefaultProps: function() {
            return {
                'close': false,
                'theme': 'normal'
            };
        },

        render: function() {
            var children = [
                React.DOM.div({
                    'key': 'content',
                    'className': '_content',
                    'data-xb-content': this.props._uid,
                    'dangerouslySetInnerHTML': {
                        '__html': this.props.children
                    }
                })
            ];

            children.unshift(this.template('xb-popup-title', {
                'key': 'title',
                'className': '_title'
            }));

            if (this.props.close) {
                children.unshift(
                    React.DOM.a({
                        'key': 'close',
                        'className': '_close'
                    })
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
                'tabIndex': '0',
                'className': React.addons.classSet(classes)
            };

            return React.DOM.div(props, children);
        }
    }
]);
