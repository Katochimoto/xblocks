import { xv } from 'context';
import xcore from 'xblocks-core';

/**
 * The template node xb-menuseparator
 *
 * @class xv.Menuseparator
 * @memberof xv
 */
export default xv.Menuseparator = xcore.view.register('xb-menuseparator', {
    displayName: 'xb-menuseparator',

    render: function () {
        return (
            <div className="xb-menuseparator"></div>
        );
    }
});
