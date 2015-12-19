import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample23 from './sample23.txt';
import sample24 from './sample24.txt';
import sample25 from './sample25.txt';
import sample26 from './sample26.txt';
import sample27 from './sample27.txt';
import sample28 from './sample28.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/button">
                    Button
                </h2>

                To display buttons, use the tag
                <InlineCode value="<xb-button>" />
                .

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample28 }} />
                    <Code className="panel-body" value={sample28} />
                </div>

                Buttons can be of the following types:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample27 }} />
                    <Code className="panel-body" value={sample27} />
                </div>

                For the button you can specify the icon:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample26 }} />
                    <Code className="panel-body" value={sample26} />
                </div>

                Button checkbox:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample25 }} />
                    <Code className="panel-body" value={sample25} />
                </div>

                Button radio:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample24 }} />
                    <Code className="panel-body" value={sample24} />
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample23 }} />
                    <Code className="panel-body" value={sample23} />
                </div>

                <a href="#/controls/button">
                    See more info about buttons.
                </a>
            </div>
        );
    }
});
