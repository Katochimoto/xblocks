import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample22 from './sample22.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="checkbox"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.checkbox" />
                </h2>

                <FormattedHTMLMessage id="examples.checkbox_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample22 }} />
                    <Code className="panel-body" value={sample22} />
                </div>

                <Link to="/controls/checkbox">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
