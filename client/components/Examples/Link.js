import React from 'react';
import { Link } from 'react-router';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample29 from './sample29.txt';
import sample30 from './sample30.txt';
import sample31 from './sample31.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <a className="anchor" data-hash="link"></a>
                <h2 className="sub-header">
                    Link
                </h2>

                To display link, use the tag
                <InlineCode value="<xb-link>" />
                .

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

                <Link to="/controls/link">See more info about links.</Link>
            </div>
        );
    }
});
