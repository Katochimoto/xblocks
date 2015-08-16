//jscs:disable
/* global xblocks, xb */
/* jshint strict: false */
//jscs:enable

/*! borschik:include:speech-recognition.jsx.js */

/**
 * xb-speech-recognition html element
 *
 * @class xb.SpeechRecognition
 * @augments HTMLElement
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @listens xblocks.Element~event:xb-created
 * @listens xblocks.Element~event:xb-update
 */
xb.SpeechRecognition = xblocks.create('xb-speech-recognition', [
    xblocks.mixin.eDisabled,

    {
        'prototype': Object.create(HTMLElement.prototype),

        'events': {
            'xb-created': function() {
                this._xbRecognition = new xblocks.utils.SpeechRecognition();

                if (this.state.active) {
                    this._xbRecognition.start();
                }

                console.log('>> created', this.state.active);
            },

            'xb-update': function() {
                if (this.state.active) {
                    this._xbRecognition.start();

                } else {
                    this._xbRecognition.stop();
                }

                console.log('>> update', this.state.active);
            },

            'click': function() {
                this.active = !this.active;
            }
        },

        /**
         * @lends xb.SpeechRecognition.prototype
         */
        'accessors': {
            'active': {
                'attribute': {
                    'boolean': true
                }
            }
        }
    }
]);
