import { xv } from 'context';
import { view } from 'xblocks-core';

/**
 * The template node xb-menuseparator
 *
 * @class xv.Menuseparator
 * @memberof xv
 */
export default xv.Menuseparator = view.register('xb-menuseparator', {
    displayName: 'xb-menuseparator',

    render: function () {
        return (
            <div className="xb-menuseparator"></div>
        );
    }
});
