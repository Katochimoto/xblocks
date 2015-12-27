import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample23 from './sample23.txt';
import sample24 from './sample24.txt';
import sample25 from './sample25.txt';
import sample26 from './sample26.txt';
import sample27 from './sample27.txt';
import sample28 from './sample28.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="button"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.button" />
                </h2>

                <FormattedHTMLMessage id="examples.button_tag" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample28 }} />
                    <Code className="panel-body" value={sample28} />
                </div>

                <FormattedMessage id="examples.button_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample27 }} />
                    <Code className="panel-body" value={sample27} />
                </div>

                <FormattedMessage id="examples.button_descr1" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample26 }} />
                    <Code className="panel-body" value={sample26} />
                </div>

                <FormattedMessage id="examples.button_descr2" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample25 }} />
                    <Code className="panel-body" value={sample25} />
                </div>

                <FormattedMessage id="examples.button_descr3" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample24 }} />
                    <Code className="panel-body" value={sample24} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample23 }} />
                    <Code className="panel-body" value={sample23} />
                </div>

                <Link to="/controls/button">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
