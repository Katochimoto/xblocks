import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample10 from './sample10.txt';
import sample11 from './sample11.txt';
import sample12 from './sample12.txt';
import sample13 from './sample13.txt';
import sample14 from './sample14.txt';
import sample15 from './sample15.txt';
import sample16 from './sample16.txt';
import sample17 from './sample17.txt';
import sample18 from './sample18.txt';
import sample19 from './sample19.txt';
import sample20 from './sample20.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="input"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.input" />
                </h2>

                <FormattedHTMLMessage id="examples.input_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample20 }} />
                    <Code className="panel-body" value={sample20} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample19 }} />
                    <Code className="panel-body" value={sample19} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample17 }} />
                    <Code className="panel-body" value={sample17} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample16 }} />
                    <Code className="panel-body" value={sample16} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample15 }} />
                    <Code className="panel-body" value={sample15} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample14 }} />
                    <Code className="panel-body" value={sample14} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample13 }} />
                    <Code className="panel-body" value={sample13} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample12 }} />
                    <Code className="panel-body" value={sample12} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample11 }} />
                    <Code className="panel-body" value={sample11} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample10 }} />
                    <Code className="panel-body" value={sample10} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample18 }} />
                    <Code className="panel-body" value={sample18} />
                </div>

                <Link to="/controls/input">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
