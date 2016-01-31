import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample21 from './sample21.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="radio"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.radio" />
                </h2>

                <FormattedHTMLMessage id="examples.radio_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample21 }} />
                    <Code className="panel-body" value={sample21} />
                </div>

                <Link to="/controls/radio">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
