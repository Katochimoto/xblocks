/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBMenu = xblocks.view.register('xb-menuitem', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menuitem',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'label': React.PropTypes.string
        },

        render: function() {
            var children = [];
            var props = {};

            if (this.props.label) {
                children.push(
                    <a key="label">{this.props.label}</a>
                );
            }

            if (this.props.children) {
                children.push(
                    <div className="_content"
                        key="content"
                        data-xb-content={this.props._uid}
                        dangerouslySetInnerHTML={{__html: this.props.children}} />
                );
            }

            return React.DOM.div(props, children);
        }
    }
]);

var XBMenu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-menu',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'type': React.PropTypes.oneOf([ 'context', 'toolbar', 'list' ])
        },

        getDefaultProps: function() {
            return {
                'type': 'list'
            };
        },

        render: function() {
            var children = [];

            if (this.props.children) {
                children.push(
                    <div className="_content"
                        key="content"
                        data-xb-content={this.props._uid}
                        dangerouslySetInnerHTML={{__html: this.props.children}} />
                );
            }



            var classes = {
                '_popup': true
            };

            var props = {
                'className': React.addons.classSet(classes)
                /*
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
                */
            };

            return React.DOM.div(props, children);
        }
    }
]);
