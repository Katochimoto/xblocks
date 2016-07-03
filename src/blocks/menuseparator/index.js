import './style';
import './index.jsx';
import { xb } from 'context';
import { create } from 'xblocks-core';

/**
 * xb-menuseparator html element
 *
 * @class xb.Menuseparator
 * @memberof xb
 * @augments HTMLElement
 */
export default xb.Menuseparator = create('xb-menuseparator', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);
