import context from 'context';
var iterations = 0;
var callbacks = [];
var twiddle = context.document.createTextNode('');
var Mutation = context.MutationObserver || context.JsMutationObserver;

(new Mutation(function () {
    while (callbacks.length) {
        callbacks.shift()();
    }

})).observe(twiddle, {
    'characterData': true
});

/**
 * @function xblocks.utils.microtask
 * @param {function} callback
 */
export default function (callback) {
    twiddle.textContent = iterations++;
    callbacks.push(callback);
}
