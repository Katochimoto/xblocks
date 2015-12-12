import React from 'react';
import Code from 'ui/Code';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/button">
                    "Button"
                </h2>

                "To display buttons, use the tag "
                <code>
                    "<xb-button>"
                </code>
                "."

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-button theme="normal">normal</xb-button>
                        " "
                        <div style="background-color:#000;display: inline-block;padding: 5px;">
                            <xb-button theme="pseudo-inverted">pseudo-inverted</xb-button>
                        </div>
                        " "
                        <xb-button theme="action">action</xb-button>
                        " "
                        <xb-button theme="pseudo">pseudo</xb-button>
                        " "
                        <xb-button theme="dark">dark</xb-button>
                        " "
                        <xb-button theme="promo">promo</xb-button>
                        " "
                        <xb-button theme="flying">flying</xb-button>
                    </div>
                    <Code className="panel-body">
                        {sample28}
                    </Code>
                </div>

                "Buttons can be of the following types:"

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-button type="label">label</xb-button>
                        " "
                        <xb-button type="inline">inline</xb-button>
                        " "
                        <xb-button type="link">link</xb-button>
                        " "
                        <xb-button type="file">file</xb-button>
                        " "
                        <xb-button type="button">button</xb-button>
                        " "
                        <xb-button type="submit">submit</xb-button>
                        " "
                        <xb-button type="checkbox">checkbox</xb-button>
                        " "
                        <xb-button type="radio">radio</xb-button>
                    </div>
                    <Code className="panel-body">
                        {sample27}
                    </Code>
                </div>

                "For the button you can specify the icon:"

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-button xb-ico-float="left" xb-ico-type="help">button</xb-button>
                        " "
                        <xb-button xb-ico-float="right" xb-ico-type="download">button</xb-button>
                    </div>
                    <Code className="panel-body">
                        {sample26}
                    </Code>
                </div>

                "Button checkbox:"

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-button type="checkbox" name="bt1" value="1">checkbox 1</xb-button>
                        " "
                        <xb-button type="checkbox" name="bt2" value="2" checked="checked">checkbox 2</xb-button>
                    </div>
                    <Code className="panel-body">
                        {sample25}
                    </Code>
                </div>

                "Button radio:"

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-button type="radio" name="bt3" value="1">radio 1</xb-button>
                        " "
                        <xb-button type="radio" name="bt3" value="2" checked="checked">radio 2</xb-button>
                    </div>
                    <Code className="panel-body">
                        {sample24}
                    </Code>
                </div>

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <xb-button disabled="disabled">disabled</xb-button>
                    </div>
                    <Code className="panel-body">
                        {sample23}
                    </Code>
                </div>

                <a href="#/controls/button">
                    "See more info about buttons."
                </a>
            </div>
        );
    }
});
