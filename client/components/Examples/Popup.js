import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample9 from './sample9.txt';
import sample8 from './sample8.txt';
import sample7 from './sample7.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/popup">
                    Popup
                </h2>

                To display popup, use the tag
                <InlineCode value="<xb-popup>" />
                .

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample9 }} />
                    <Code className="panel-body" value={sample9} />
                </div>

                Complex window:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample8 }} />
                    <Code className="panel-body" value={sample8} />
                </div>

                Themes:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample7 }} />
                    <Code className="panel-body" value={sample7} />
                </div>

                <a href="#/controls/popup">
                    See more info about popup.
                </a>
            </div>
        );
    }
});
