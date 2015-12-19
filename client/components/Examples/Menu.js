import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';
import sample3 from './sample3.txt';
import sample4 from './sample4.txt';
import sample5 from './sample5.txt';
import sample6 from './sample6.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <a className="anchor" data-hash="menu"></a>
                <h2 className="sub-header">
                    Menu
                </h2>

                To display menu, use the tag
                <InlineCode value="<xb-menu>" />
                .

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample6 }} />
                    <Code className="panel-body" value={sample6} />
                </div>

                Specify the size menu:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample5 }} />
                    <Code className="panel-body" value={sample5} />
                </div>

                Icons in menu items:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample4 }} />
                    <Code className="panel-body" value={sample4} />
                </div>

                Show menu for the target object:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample3 }} />
                    <Code className="panel-body" value={sample3} />
                </div>

                Context menu:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample2 }} />
                    <Code className="panel-body" value={sample2} />
                </div>

                Inline menu:

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample1 }} />
                    <Code className="panel-body" value={sample1} />
                </div>

                <a href="#/controls/menu">
                    See more info about menu.
                </a>
            </div>
        );
    }
});
