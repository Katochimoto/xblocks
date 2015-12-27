import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample9 from './sample9.txt';
import sample8 from './sample8.txt';
import sample7 from './sample7.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="popup"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.popup" />
                </h2>

                <FormattedHTMLMessage id="examples.popup_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample9 }} />
                    <Code className="panel-body" value={sample9} />
                </div>

                <FormattedMessage id="examples.popup_descr1" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample8 }} />
                    <Code className="panel-body" value={sample8} />
                </div>

                <FormattedMessage id="examples.popup_descr2" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample7 }} />
                    <Code className="panel-body" value={sample7} />
                </div>

                <Link to="/controls/popup">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
