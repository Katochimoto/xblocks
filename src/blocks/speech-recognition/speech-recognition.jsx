import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
import classnames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-speech-recognition
 *
 * @class xv.SpeechRecognition
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
xv.SpeechRecognition = xblocks.view.register('xb-speech-recognition', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-speech-recognition',

        // @if NODE_ENV='development'
        propTypes: {
            'active': PropTypes.bool
        },
        // @endif

        getDefaultProps: function () {
            return {
                'active':   false,
                'disabled': false
            };
        },

        render: function () {
            var classes = {
                'xb-speech-recognition': true,
                '_active': this.props.active,
                '_disabled': this.props.disabled
            };

            classes = classNames(classes);

            return (
                <xb-ico className={classes} type={this.props.active ? 'mic-on' : 'mic-off'} />
            );
        }
    }
]);

export default xv.SpeechRecognition;
