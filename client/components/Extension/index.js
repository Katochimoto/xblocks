import React from 'react';
import { FormattedMessage } from 'react-intl';

export default React.createClass({
    displayName: 'Extension',

    render() {
        return (
            <div>
                <h1 className="page-header"><FormattedMessage id="menu.extension" /></h1>
                <FormattedMessage id="getting_started.descr0" />
            </div>
        );
    }
});
