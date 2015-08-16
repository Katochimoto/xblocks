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

        },

        'getDefaultProps': function() {
            return {
                'disabled':  false
            };
        },

        /* jshint ignore:start */
        'render': function() {
            var classes = {
                'xb-speech-recognition': true,
                '_disabled': this.props.disabled
            };

            classes = classNames(classes);

            return (
                <div className={classes}></div>
            );
        }
        /* jshint ignore:end */
    }
]);
