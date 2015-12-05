import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
import classNames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-speech-recognition
 *
 * @class xv.SpeechRecognition
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
export default xv.SpeechRecognition = xblocks.view.register('xb-speech-recognition', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-speech-recognition',

        // @if NODE_ENV='development'
        propTypes: {
            active: PropTypes.bool
        },
        // @endif

        getDefaultProps: function () {
            return {
                active:   false,
                disabled: false
            };
        },

        render: function () {
            var classes = classNames({
                'xb-speech-recognition': true,
                '_active': this.props.active,
                '_disabled': this.props.disabled
            });

            var props = {
                'class': classes,
                'type': this.props.active ? 'mic-on' : 'mic-off'
            };

            return (
                <xb-ico {...props} />
            );
        }
    }
]);
