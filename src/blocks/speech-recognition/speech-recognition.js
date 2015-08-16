//jscs:disable
/* global xblocks, xb */
/* jshint strict: false */
//jscs:enable

/*! borschik:include:speech-recognition.jsx.js */

/**
 * xb-speech-recognition html element
 *
 * in the development
 *
 * @class xb.SpeechRecognition
 * @augments HTMLElement
 * @memberof xb
 */
xb.SpeechRecognition = xblocks.create('xb-speech-recognition', [
    {
        'prototype': Object.create(HTMLElement.prototype)
    }
]);
