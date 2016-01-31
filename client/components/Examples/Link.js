import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample29 from './sample29.txt';
import sample30 from './sample30.txt';
import sample31 from './sample31.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="link"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.link" />
                </h2>

                <FormattedHTMLMessage id="examples.link_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample31 }} />
                    <Code className="panel-body" value={sample31} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample30 }} />
                    <Code className="panel-body" value={sample30} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample29 }} />
                    <Code className="panel-body" value={sample29} />
                </div>

                <Link to="/controls/link">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
