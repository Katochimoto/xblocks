import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample38 from './sample38.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="select"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.select" />
                </h2>

                <FormattedHTMLMessage id="examples.select_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample38 }} />
                    <Code className="panel-body" value={sample38} />
                </div>

                <Link to="/controls/select">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
