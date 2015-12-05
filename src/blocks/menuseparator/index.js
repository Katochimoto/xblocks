import './index.styl';
import './index.jsx';
import { xb } from 'context';
import xblocks from 'xblocks';

/**
 * xb-menuseparator html element
 *
 * @class xb.Menuseparator
 * @memberof xb
 * @augments HTMLElement
 */
export default xb.Menuseparator = xblocks.create('xb-menuseparator', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);
