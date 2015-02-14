/** @jsx React.DOM */
/* global xblocks, React, XBMenuViewCommon */
/* jshint strict: false */
/* jshint -W098 */
var XBMenuInline = xblocks.view.register('xb-menu-inline', [
    xblocks.mixin.vCommonAttrs,
    XBMenuViewCommon,

    {
        'displayName': 'xb-menu-inline',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'size': React.PropTypes.string
        },

        getDefaultProps: function() {
            return {
                'size': ''
            };
        },

        componentDidMount: function() {
            this._updateMaxHeight(this.props.size);
        }
    }
]);
