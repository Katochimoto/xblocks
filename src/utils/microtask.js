import context from 'context';
import vendor from 'utils/vendor';

let iterations = 0;
const callbacks = [];
const twiddle = context.document.createTextNode('');
const Mutation = vendor('MutationObserver') || context.JsMutationObserver;

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
