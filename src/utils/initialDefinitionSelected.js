import _ from 'lodash';
import { dom } from 'xblocks-core';
import context from 'context';
import ConstantMenuitem from 'constants/menuitem';

/**
 * [description]
 * @param   {[type]}  element           [description]
 * @param   {Boolean} isSelectedDefault [description]
 * @returns {[type]}                    [description]
 */
export default function (element, isSelectedDefault) {
    let root = dom.contentNode(element);
    if (root instanceof context.HTMLTemplateElement) {
        root = root.content;
    }

    const items = element.multiple ?
        _.toArray(root.querySelectorAll('xb-menuitem[selected]')) :
        _.castArray(root.querySelector('xb-menuitem[selected]'));

    const selectedItems = _(items)
        .chain()
        .compact()
        .tap(function (array) {
            if (isSelectedDefault && !array.length) {
                array.push(root.querySelector('xb-menuitem'));
            }
        })
        .compact()
        .reduce(initialSelectIteratee, {})
        .value();

    // сброс выделения элементов, которые не попали в список выбранных
    // актуально в случае multiple=false
    _.forEach(root.querySelectorAll(`xb-menuitem[selected]:not([${ConstantMenuitem.SELECTED_ATTR}])`), removeAttrSelectIterate);

    return selectedItems;
}

function initialSelectIteratee(result, node) {
    const uid = _.uniqueId('selected');
    node.setAttribute(ConstantMenuitem.SELECTED_ATTR, uid);
    result[ uid ] = node;
    return result;
}

function removeAttrSelectIterate(node) {
    node.removeAttribute('selected');
}
