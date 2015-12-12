import React from 'react';
import Code from 'ui/Code';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/checkbox">
                    "Checkbox"
                </h2>

                "To display checkbox, use the tag "
                <code>
                    "<xb-checkbox>"
                </code>
                "."

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-checkbox name="cb1" value="1" checked="checked">checkbox 1</xb-checkbox>
                        " "
                        <xb-checkbox name="cb2" value="2">checkbox 2</xb-checkbox>
                        " "
                        <xb-checkbox name="cb3" value="3" disabled="disabled">checkbox 3</xb-checkbox>
                    </div>
                    <Code className="panel-body">
                        {sample22}
                    </Code>
                </div>

                <a href="#/controls/checkbox">
                    "See more info about checkbox."
                </a>
            </div>
        );
    }
});
