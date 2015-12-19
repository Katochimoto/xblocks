import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample22 from './sample22.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <a className="anchor" data-hash="checkbox"></a>
                <h2 className="sub-header">
                    Checkbox
                </h2>

                To display checkbox, use the tag
                <InlineCode value="<xb-checkbox>" />
                .

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample22 }} />
                    <Code className="panel-body" value={sample22} />
                </div>

                <a href="#/controls/checkbox">
                    See more info about checkbox.
                </a>
            </div>
        );
    }
});
