import context from 'context';
import vendor from 'utils/vendor';

const indexOf = Array.prototype.indexOf;
const proto = context.Element.prototype;
const matches = proto.matches ||
    vendor('matchesSelector', proto) ||
    function (selector) {
        return (indexOf.call((this.parentNode || this.ownerDocument).querySelectorAll(selector), this) !== -1);
    };

/**
 * @function xblocks.dom.matchesSelector
 * @param   {[type]} element  [description]
 * @param   {[type]} selector [description]
 * @returns {boolean}
 */
export default function (element, selector) {
    return (element.nodeType === 1 ? matches.call(element, selector) : false);
}
