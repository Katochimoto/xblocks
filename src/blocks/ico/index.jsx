var xv = require('context').xv;
var xblocks = require('xblocks');
var React = require('react');
var classnames = require('classnames');

/**
 * The template node xb-ico
 *
 * @class xv.Ico
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Ico = xblocks.view.register('xb-ico', [
    require('mixin/view/commonAttrs'),

    {
        displayName: 'xb-ico',

        mixins: [ React.addons.PureRenderMixin ],

        // @ifdef DEBUG
        propTypes: {
            'active':   React.PropTypes.bool,
            'size':     React.PropTypes.oneOf([ 's', 'm' ]),
            'value':    React.PropTypes.string,
            'type':     React.PropTypes.oneOf([
                'attention',
                'check',
                'close',
                'download',
                'download-white',
                'dropdown',
                'eye',
                'help',
                'link',
                'link-white',
                'mail',
                'mic-off',
                'mic-on',
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
                'upload',
                'upload-white',
                'vk'
            ])
        },
        // @endif

        getDefaultProps: function () {
            return {
                'active':   false,
                'children': String.fromCharCode(160),
                'disabled': false,
                'size':     's'
            };
        },

        render: function () {
            var classes = {
                'xb-ico':    true,
                '_active':   this.props.active,
                '_disabled': this.props.disabled
            };

            if (this.props.type) {
                classes[ '_type-' + this.props.type ] = true;
            }

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classnames(classes);

            var content = this.props.value || this.props.children;

            return (
                <span className={classes} data-xb-content={this.props._uid}>
                    {content}
                </span>
            );
        }
    }
]);

module.exports = xv.Ico;
