import context from 'context';
import vendor from 'utils/vendor';

var iterations = 0;
var callbacks = [];
var twiddle = context.document.createTextNode('');
var Mutation = vendor('MutationObserver') || context.JsMutationObserver;

(new Mutation(function () {
    while (callbacks.length) {
        callbacks.shift()();
    }

})).observe(twiddle, {
    'characterData': true
});

/**
 * @param {function} callback
 */
export default function (callback) {
    twiddle.textContent = iterations++;
    callbacks.push(callback);
}
