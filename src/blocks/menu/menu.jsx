/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBMenu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menu',

        propTypes: {
            'close': React.PropTypes.bool,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank', 'menu' ])
        },

        mixins: [ React.addons.PureRenderMixin ],

        getDefaultProps: function() {
            return {
                'close': false,
                'theme': 'normal'
            };
        },

        render: function() {
            var content = this.props.children;
            var level = 0;
            var constraints = encodeURIComponent(JSON.stringify([{
                'to': 'window',
                'attachment': 'together none'
            }]));
            var popupOpenTag = '<xb-popup theme="menu" constraints="' + constraints + '" attachment="top left" target-attachment="top right" target-parent optimizations-gpu>'

            content = content.replace(/<(\/)?ul[^>]*>/ig, function(str, isClose) {
                if (isClose) {
                    level--;
                }

                if (level !== 0) {
                    if (isClose) {
                        str = str + '</xb-popup>';
                    } else {
                        str = popupOpenTag + str;
                    }
                }

                if (!isClose) {
                    level++;
                }

                return str;
            });

            var children = [
                <div className="_content"
                    key="content"
                    data-xb-content={this.props._uid}
                    dangerouslySetInnerHTML={{__html: content}} />
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
                'className': React.addons.classSet(classes),
                'tabIndex': '0',
                'onMouseOver': function(event) {
                    console.log('onMouseOver', event.target);
                },
                'onMouseOut': function(event) {
                    console.log('onMouseOut', event.target);
                },
                'onClick': function(event) {
                    console.log('onClick', event.target);
                },
                'onKeyDown': function(event) {
                    console.log('onKeyDown', event.target);
                },
                'onFocus': function(event) {
                    console.log('onFocus', event.target);
                },
                'onBlur': function(event) {
                    console.log('onBlur', event.target);
                }
            };

            return React.DOM.div(props, children);
        }
    }
]);
