/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

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
            var classes = {
                '_popup': true
            };

            classes = React.addons.classSet(classes);

            /*
            var props = {
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
            */

            return (
                <div className={classes}
                    tabIndex="0"
                    data-xb-content={this.props._uid}
                    dangerouslySetInnerHTML={{__html: this.props.children}} />
            );
        }
    }
]);
