var xv = require('context').xv;
var xblocks = require('xblocks');
var React = require('react');
var classnames = require('classnames');

/**
 * The template node xb-speech-recognition
 *
 * @class xv.SpeechRecognition
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 */
xv.SpeechRecognition = xblocks.view.register('xb-speech-recognition', [
    require('mixin/view/commonAttrs'),

    {
        displayName: 'xb-speech-recognition',

        // @ifdef DEBUG
        propTypes: {
            'active': React.PropTypes.bool
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

module.exports = xv.SpeechRecognition;
