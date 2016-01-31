import './index.styl';
import './index.jsx';
import { xb } from 'context';
import { create } from 'xblocks-core';
import mixinDisabled from 'mixin/element/disabled';

/**
 * xb-link html element
 *
 * @class xb.Link
 * @memberof xb
 * @augments HTMLAnchorElement
 * @mixes xblocks.mixin.eDisabled
 */
export default xb.Link = create('xb-link', [
    mixinDisabled,

    {
        prototype: Object.create(HTMLAnchorElement.prototype)
    }
]);
