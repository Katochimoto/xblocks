import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

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
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/input">
                    Input
                </h2>

                To display input, use the tag
                <InlineCode value="<xb-input>" />
                .

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

                <a href="#/controls/input">
                    See more info about input.
                </a>
            </div>
        );
    }
});
