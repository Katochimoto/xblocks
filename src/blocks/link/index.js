import './index.styl';
import './index.jsx';
import { xb } from 'context';
import xblocks from 'xblocks';

/**
 * xb-link html element
 *
 * @class xb.Link
 * @memberof xb
 * @augments HTMLAnchorElement
 * @mixes xblocks.mixin.eDisabled
 */
xb.Link = xblocks.create('xb-link', [
    require('mixin/element/disabled'),

    {
        prototype: Object.create(HTMLAnchorElement.prototype)
    }
]);

export default xb.Link;
