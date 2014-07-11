/** @jsx React.DOM */
/* global xblocks, global, React */
/* jshint strict: false */

var XBSelect = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        displayName: 'xb-popup',

        propTypes: {
            'children': React.PropTypes.renderable
        },

        render: function() {
            return (
                <div data-xb-content={this.props._uid}
                    dangerouslySetInnerHTML={{__html: this.props.children}} />
            );
        }
    }
]);
