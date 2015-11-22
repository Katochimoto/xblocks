import './index.styl';
import './index.jsx';

import context from 'context';
import { xb } from 'context';
import xblocks from 'xblocks';

var _xbSpeechRecognition = {
    'events': {
        'end': 1,
        'error': 1,
        'result': 1,
        'start': 1
    }
};

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
xb.SpeechRecognition = xblocks.create('xb-speech-recognition', [
    require('mixin/element/disabled'),

    {
        prototype: Object.create(HTMLElement.prototype),

        events: {
            'xb-created': function () {
                this._xbRecognition = new xblocks.utils.SpeechRecognition({
                    'lang': this.lang || (context.navigator && context.navigator.language) || 'en-US',
                    'continuous': this.continuous,
                    'interimResults': this.interimResults
                });

                for (var eventName in _xbSpeechRecognition.events) {
                    this._xbRecognition.addEventListener(eventName, this._sendEventToTarget, this);
                }

                this._xbRecognition.toggle(this.state.active);
            },

            'xb-update': function () {
                this._xbRecognition.toggle(this.state.active);
            },

            'xb-destroy': function () {
                for (var eventName in _xbSpeechRecognition.events) {
                    this._xbRecognition.removeEventListener(eventName, this._sendEventToTarget);
                }

                this._xbRecognition.abort();
                this._xbRecognition = undefined;
            },

            'click': function () {
                this.active = !this.active;
            }
        },

        /**
         * @lends xb.SpeechRecognition.prototype
         */
        accessors: {
            'active': {
                'attribute': {
                    'boolean': true
                }
            },

            'lang': {
                'attribute': {
                    'name': 'lang'
                }
            },

            'continuous': {
                'attribute': {
                    'boolean': true
                }
            },

            'interimResults': {
                'attribute': {
                    'boolean': true,
                    'name': 'interim-results'
                }
            },

            'target': {
                'attribute': {
                    'name': 'target'
                }
            }
        },

        methods: {
            '_sendEventToTarget': function (event) {
                var target = this.target;
                var type = typeof target;
                var targetEvent = new xblocks.event.Custom('xb-speech-recognition-' + event.type, {
                    'bubbles': false,
                    'cancelable': false,
                    'detail': event.detail
                });

                if (type === 'function') {
                    target(targetEvent);

                } else {
                    if (type === 'string') {
                        target = context.document.querySelector(target);
                    }

                    if (target instanceof HTMLElement) {
                        target.dispatchEvent(targetEvent);
                    }
                }
            }
        }
    }
]);

export default xb.SpeechRecognition;
