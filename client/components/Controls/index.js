import React from 'react';

import Ico from './Ico';
import Link from './Link';

export default React.createClass({
    displayName: 'Controls',

    render: function () {
        return (
            <div>
                <h1 className="page-header">
                    Controls
                </h1>

                <Ico />
                <Link />

                <h2 className="sub-header anchor" data-hash="popup">
                    Popup
                </h2>
                <p>&nbsp;</p>

                <h2 className="sub-header anchor" data-hash="menu">
                    Menu
                </h2>
            </div>
        );
    }
});
