import { xv } from 'context';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import classnames from 'classnames';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-ico
 *
 * @class xv.Ico
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
export default xv.Ico = view.register('xb-ico', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-ico',

        mixins: [ PureRenderMixin ],

        propTypes: {
            'active':   PropTypes.bool,
            'size':     PropTypes.oneOf([ 's', 'm' ]),
            'value':    PropTypes.string,
            'type':     PropTypes.oneOf([
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

        getDefaultProps: function () {
            return {
                'active':   false,
                'disabled': false,
                'size':     's'
            };
        },

        render: function () {
            var classes = {
                'xb-ico':    true,
                '_active':   this.props.active,
                '_disabled': this.props.disabled,
                [ `_type-${this.props.type}` ]: true,
                [ `_size-${this.props.size}` ]: true
            };

            classes = classnames(classes);

            var content = this.props.value || this.props.children || String.fromCharCode(160);

            return (
                <span className={classes} data-xb-content={this.props._uid}>
                    {content}
                </span>
            );
        }
    }
]);
