import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample29 from './sample29.txt';
import sample30 from './sample30.txt';
import sample31 from './sample31.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/link">
                    Link
                </h2>

                To display link, use the tag
                <InlineCode code="<xb-link>" />
                .

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample31 }} />
                    <Code className="panel-body">
                        {sample31}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample30 }} />
                    <Code className="panel-body">
                        {sample30}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample29 }} />
                    <Code className="panel-body">
                        {sample29}
                    </Code>
                </div>

                <a href="#/controls/link">
                    See more info about links.
                </a>
            </div>
        );
    }
});
