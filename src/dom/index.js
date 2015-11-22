import globalContext from 'context';
var indexOf = Array.prototype.indexOf;

/**
 * @function xblocks.dom.index
 * @param   {[type]} selector [description]
 * @param   {[type]} element  [description]
 * @param   {[type]} context  [description]
 * @returns {[type]}          [description]
 */
export default function (selector, element, context) {
    context = context || globalContext.document;
    return indexOf.call(context.querySelectorAll(selector), element);
}
