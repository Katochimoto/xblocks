/* global xblocks, React, Tether, xv */
/* jshint strict: false */

/**
 * The template node xb-speech-recognition
 *
 * @class xv.SpeechRecognition
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
xv.SpeechRecognition = xblocks.view.register('xb-speech-recognition', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-speech-recognition',

        'propTypes': {
            'active': React.PropTypes.bool
        },

        'getDefaultProps': function() {
            return {
                'active':   false,
                'disabled': false
            };
        },

        /* jshint ignore:start */
        'render': function() {
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
        /* jshint ignore:end */
    }
]);
