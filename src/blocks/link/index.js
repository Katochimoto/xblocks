import './index.styl';
import './index.jsx';
import { xb } from 'context';
import xblocks from 'xblocks';
import mixinDisabled from 'mixin/element/disabled';

/**
 * xb-link html element
 *
 * @class xb.Link
 * @memberof xb
 * @augments HTMLAnchorElement
 * @mixes xblocks.mixin.eDisabled
 */
xb.Link = xblocks.create('xb-link', [
    mixinDisabled,

    {
        prototype: Object.create(HTMLAnchorElement.prototype)
    }
]);

export default xb.Link;
