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
xb.Menuseparator = xblocks.create('xb-menuseparator', [
    {
        prototype: Object.create(HTMLElement.prototype)
    }
]);

export default xb.Menuseparator;
