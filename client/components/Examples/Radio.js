import React from 'react';
import { Link } from 'react-router';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample21 from './sample21.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <a className="anchor" data-hash="radio"></a>
                <h2 className="sub-header">
                    Radio
                </h2>

                To display radio, use the tag
                <InlineCode value="<xb-radio>" />
                .

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample21 }} />
                    <Code className="panel-body" value={sample21} />
                </div>

                <Link to="/controls/radio">See more info about radio.</Link>
            </div>
        );
    }
});
