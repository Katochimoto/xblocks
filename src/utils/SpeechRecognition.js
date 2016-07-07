import vendor from 'utils/vendor';
import EventEmitter from 'events';

const SR = vendor('SpeechRecognition');

const ENGINE_EVENTS = {
    onend: function (event) {
        event.detail = { final: this._transcript };
        this.emit('end', event);
    },

    onerror: function (event) {
        this.emit('error', event);
    },

    onresult: function (event) {
        var transcript = '';

        for (var i = event.resultIndex; i < event.results.length; ++i) {
            var result = event.results[ i ];

            if (result.isFinal) {
                this._transcript += result[0].transcript;

            } else {
                transcript += result[0].transcript;
            }
        }

        event.detail = { final: this._transcript };

        if (this._params.interimResults) {
            event.detail.interim = transcript;
        }

        this.emit('result', event);
    },

    onstart: function (event) {
        this.emit('start', event);
    }
};

/**
 *
 * @param {Object} params
 * @param {string} [params.lang=en-US] язык, который будет распозноваться
 * @param {boolean} [params.continuous=false] продолжать распознование при остановке диктовки
 * @param {boolean} [params.interimResults=false] выводить промежуточные не откорректированные результаты
 */
export default class SpeechRecognition extends EventEmitter {
    constructor(params) {
        super();

        this._params = {};
        this._started = false;
        this._engine = new SR();
        this._applyParams(params, {
            continuous: false,
            interimResults: false,
            lang: 'en-US',
            maxAlternatives: 1
        });

        for (var eventName in ENGINE_EVENTS) {
            this._engine[ eventName ] = ENGINE_EVENTS[ eventName ].bind(this);
        }
    }

    toggle(state, params) {
        if (state) {
            this.start(params);

        } else {
            this.stop();
        }
    }

    start(params) {
        if (this._started) {
            return;
        }

        this._started = true;
        this._transcript = '';
        this._applyParams(params);
        this._engine.start();
    }

    stop() {
        if (!this._started) {
            return;
        }

        this._started = false;
        this._engine.stop();
    }

    abort() {
        if (!this._started) {
            return;
        }

        this._started = false;
        this._engine.abort();
    }

    _applyParams(params, defaultParams) {
        Object.assign(this._params, defaultParams, params);

        for (const param in this._params) {
            this._engine[ param ] = this._params[ param ];
        }
    }
}
