import React from 'react';
import Code from 'ui/Code';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/radio">
                    "Radio"
                </h2>

                "To display radio, use the tag "
                <code>
                    "<xb-radio>"
                </code>
                "."

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-radio name="radio1" value="1" checked="checked">radio 1</xb-radio>
                        " "
                        <xb-radio name="radio1" value="2">radio 2</xb-radio>
                        " "
                        <xb-radio name="radio1" value="3" disabled="disabled">radio 3</xb-radio>
                    </div>
                    <Code className="panel-body">
                        {sample21}
                    </Code>
                </div>

                <a href="#/controls/radio">
                    "See more info about radio."
                </a>
            </div>
        );
    }
});
