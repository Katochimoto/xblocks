import React from 'react';
import Code from 'ui/Code';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/input">
                    "Input"
                </h2>

                "To display input, use the tag "
                <code>
                    "<xb-input>"
                </code>
                "."

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input value="simple input"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample20}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input placeholder="placeholder"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample19}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input value="multiline" multiline="multiline"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample18}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input prefix="prefix"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample17}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input postfix="postfix"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample16}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input autosize="autosize" value="autosize"></xb-input>
                        <p></p>
                        <xb-input autosize="autosize" multiline="multiline" value="autosize"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample15}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input readonly="readonly" value="readonly"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample14}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input disabled="disabled" value="disabled"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample13}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input reset="reset" value="reset"></xb-input>
                        <p></p>
                        <xb-input reset="reset" multiline="multiline" value="reset"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample12}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input ghost="ghost" value="ghost"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample11}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-input xb-link="link" xb-link-href="http://ya.ru" xb-link-target="_blank"></xb-input>
                    </div>
                    <Code className="panel-body">
                        {sample10}
                    </Code>
                </div>

                <a href="#/controls/input">
                    "See more info about input."
                </a>
            </div>
        );
    }
});
