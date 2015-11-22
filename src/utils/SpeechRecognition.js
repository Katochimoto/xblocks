import context from 'context';
import immediate from 'setimmediate2/src';

export default SpeechRecognition;

/**
 *
 * @param {Object} params
 * @param {string} params.lang язык, который будет распозноваться
 * @param {boolean} [params.continuous=false] продолжать распознование при остановке диктовки
 * @param {boolean} [params.interimResults=false] выводить промежуточные не откорректированные результаты
 */
function SpeechRecognition(params) {
    this._events = {};
    this._params = {};
    this._started = false;
    /* eslint new-cap:0 */
    this._engine = new context.webkitSpeechRecognition();
    this._applyParams(params, {
        'continuous': false,
        'interimResults': false,
        'lang': 'en-US',
        'maxAlternatives': 1
    });

    for (var eventName in this._engineEvents) {
        this._engine[ eventName ] = this._engineEvents[ eventName ].bind(this);
    }
}

SpeechRecognition.prototype = {
    _engineEvents: {
        onend: function (event) {
            event.detail = { 'final': this._transcript };
            this._trigger('end', event);
        },

        onerror: function (event) {
            this._trigger('error', event);
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

            event.detail = { 'final': this._transcript };

            if (this._params.interimResults) {
                event.detail.interim = transcript;
            }

            this._trigger('result', event);
        },

        onstart: function (event) {
            this._trigger('start', event);
        }
    },

    toggle: function (state, params) {
        if (state) {
            this.start(params);

        } else {
            this.stop();
        }
    },

    start: function (params) {
        if (this._started) {
            return;
        }

        this._started = true;
        this._transcript = '';
        this._applyParams(params);
        this._engine.start();
    },

    stop: function () {
        if (!this._started) {
            return;
        }

        this._started = false;
        this._engine.stop();
    },

    abort: function () {
        if (!this._started) {
            return;
        }

        this._started = false;
        this._engine.abort();
    },

    addEventListener: function (eventName, callback, ctx) {
        if (!this._events[ eventName ]) {
            this._events[ eventName ] = [];
        }

        this._events[ eventName ].push([ callback, ctx ]);
    },

    removeEventListener: function (eventName, callback) {
        if (!this._events[ eventName ]) {
            return;
        }

        if (callback) {
            this._events[ eventName ] = this._events[ eventName ].filter(this._filterEventsIterator, callback);

        } else {
            delete this._events[ eventName ];
        }
    },

    _filterEventsIterator: function (item) {
        return (item[ 0 ] !== this);
    },

    _applyParams: function (params, defaultParams) {
        Object.assign(this._params, defaultParams, params);

        for (var param in this._params) {
            this._engine[ param ] = this._params[ param ];
        }
    },

    _trigger: function (eventName, event) {
        if (!this._events[ eventName ]) {
            return;
        }

        immediate.setImmediate(this._triggerAsync.bind(this, this._events[ eventName ], event));
    },

    _triggerAsync: function (events, event) {
        var callback;
        var i = 0;

        for (; i < events.length; i++) {
            callback = events[ i ];
            callback[ 0 ].call(callback[ 1 ], event);
        }
    }
};
