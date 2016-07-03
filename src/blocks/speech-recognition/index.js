import './style';
import './index.jsx';

import context from 'context';
import { xb } from 'context';
import { create, event as xevent } from 'xblocks-core';
import mixinElementDisabled from 'mixin/element/disabled';
import SpeechRecognition from 'utils/SpeechRecognition';

const SR_EVENTS = {
    end: 1,
    error: 1,
    result: 1,
    start: 1
};

const SR_LANG_DEFAULT = 'en-US';

/**
 * xb-speech-recognition html element
 *
 * @class xb.SpeechRecognition
 * @augments HTMLElement
 * @memberof xb
 * @mixes xblocks.mixin.eDisabled
 * @listens xblocks.Element~event:xb-created
 * @listens xblocks.Element~event:xb-update
 * @listens xblocks.Element~event:xb-destroy
 */
export default xb.SpeechRecognition = create('xb-speech-recognition', [
    mixinElementDisabled,

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': function () {
                this.xbSpeechRecognition = new SpeechRecognition({
                    lang: this.lang || (context.navigator && context.navigator.language) || SR_LANG_DEFAULT,
                    continuous: this.continuous,
                    interimResults: this.interimResults
                });

                var passEventToTarget = this._passEventToTarget.bind(this);
                for (var eventName in SR_EVENTS) {
                    this.xbSpeechRecognition.on(eventName, passEventToTarget);
                }

                this.xbSpeechRecognition.toggle(this.active);
            },

            'xb-update': function () {
                this.xbSpeechRecognition.toggle(this.active);
            },

            'xb-destroy': function () {
                this.xbSpeechRecognition.removeAllListeners();
                this.xbSpeechRecognition.abort();
                this.xbSpeechRecognition = undefined;
            },

            'click': function () {
                this.active = !this.active;
            }
        },

        /**
         * @lends xb.SpeechRecognition.prototype
         */
        accessors: {
            active: {
                attribute: {
                    boolean: true
                }
            },

            lang: {
                attribute: {
                    name: 'lang'
                }
            },

            continuous: {
                attribute: {
                    boolean: true
                }
            },

            interimResults: {
                attribute: {
                    boolean: true,
                    name: 'interim-results'
                }
            },

            target: {
                attribute: {
                    name: 'target'
                }
            }
        },

        methods: {
            _passEventToTarget: function (event) {
                var target = this.target;
                var targetType = typeof target;
                var targetEvent = new xevent.Custom('xb-speech-recognition-' + event.type, {
                    bubbles: false,
                    cancelable: false,
                    detail: event.detail
                });

                if (targetType === 'function') {
                    target(targetEvent);

                } else {
                    if (targetType === 'string') {
                        target = this.ownerDocument.querySelector(target);
                    }

                    if (target instanceof HTMLElement) {
                        target.dispatchEvent(targetEvent);
                    }
                }
            }
        }
    }
]);
