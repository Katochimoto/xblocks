import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import Code from 'ui/Code';

export default React.createClass({
    displayName: 'Examples',

    mixins: [ PureRenderMixin ],

    render: function () {
        return (
            <div>
            <h1 className="page-header anchor" data-hash="examples">
                "Examples"
            </h1>

            <h2 className="sub-header anchor" data-hash="examples/icons">
                "Ico"
            </h2>

            "To display icons, use the tag "
            <code>
                "<xb-ico>"
            </code>
            "."

            <p></p>
            <div className="row">
                <div className="col-md-3">
                    <ul className="list-unstyled">
                        <li><xb-ico size="s" type="help"></xb-ico> help</li>
                        <li><xb-ico size="s" type="attention"></xb-ico> attention</li>
                        <li><xb-ico size="s" type="close"></xb-ico> close</li>
                        <li><xb-ico size="s" type="check"></xb-ico> check</li>
                        <li><xb-ico size="s" type="download"></xb-ico> download</li>
                        <li><span style="background-color:#000;"><xb-ico size="s" type="download-white"></xb-ico></span> download-white</li>
                        <li><xb-ico size="s" type="twitter"></xb-ico> twitter</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled">
                        <li><xb-ico size="s" type="three-dots"></xb-ico> three-dots</li>
                        <li><xb-ico size="s" type="dropdown"></xb-ico> dropdown</li>
                        <li><xb-ico size="s" type="eye"></xb-ico> eye</li>
                        <li><xb-ico size="s" type="link"></xb-ico> link</li>
                        <li><span style="background-color:#000;"><xb-ico size="s" type="link-white"></xb-ico></span> link-white</li>
                        <li><xb-ico size="s" type="vk"></xb-ico> vk</li>
                        <li><xb-ico size="s" type="play"></xb-ico> play</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled">
                        <li><xb-ico size="s" type="mail"></xb-ico> mail</li>
                        <li><xb-ico size="s" type="notification">test</xb-ico> notification</li>
                        <li><xb-ico size="s" type="odnoklassniki"></xb-ico> odnoklassniki</li>
                        <li><xb-ico size="s" type="pause"></xb-ico> pause</li>
                        <li><xb-ico size="s" type="people"></xb-ico> people</li>
                        <li><xb-ico size="s" type="trash"></xb-ico> trash</li>
                        <li><span style="background-color:#000;"><xb-ico size="s" type="trash-white"></xb-ico></span> trash-white</li>
                    </ul>
                </div>
                <div className="col-md-3">
                    <ul className="list-unstyled">
                        <li><xb-ico size="s" type="print"></xb-ico> print</li>
                        <li><xb-ico size="s" type="remove"></xb-ico> remove</li>
                        <li><xb-ico size="s" type="services"></xb-ico> services</li>
                        <li><xb-ico size="s" type="settings"></xb-ico> settings</li>
                        <li><xb-ico size="s" type="upload"></xb-ico> upload</li>
                        <li><span style="background-color:#000;"><xb-ico size="s" type="upload-white"></xb-ico></span> upload-white</li>
                    </ul>
                </div>
            </div>
            <p></p>

            "Specify "
            <code>
                "size=\"s\""
            </code>
            " to display a small icon."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-ico size="s" type="help"></xb-ico>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-ico size=\"s\" type=\"help\"></xb-ico>"
                        </code>
                    </pre>
                </div>
            </div>

            "Specify "
            <code>
                "size=\"m\""
            </code>
            " to display a big icon."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-ico size="m" type="print"></xb-ico>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-ico size=\"m\" type=\"print\"></xb-ico>"
                        </code>
                    </pre>
                </div>
            </div>

            "Icon \"notification\" may contain the value."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-ico type="notification" value="test"></xb-ico>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-ico type=\"notification\" value=\"test\"></xb-ico>"
                            <br/>
                            "<xb-ico type=\"notification\">test</xb-ico>"
                        </code>
                    </pre>
                </div>
            </div>

            "The icon can be active."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-ico type="remove" active="active"></xb-ico>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-ico type=\"remove\" active></xb-ico>"
                        </code>
                    </pre>
                </div>
            </div>

            "The icon may not be available."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-ico type="twitter" disabled="disabled"></xb-ico>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-ico type=\"twitter\" disabled></xb-ico>"
                        </code>
                    </pre>
                </div>
            </div>

            <a href="#/controls/ico">
                "See more info about icons."
            </a>

            <h2 className="sub-header anchor" data-hash="examples/link">
                "Link"
            </h2>

            "To display link, use the tag "
            <code>
                "<xb-link>"
            </code>
            "."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-link theme="normal">normal</xb-link><br/>
                    <xb-link theme="outer">outer</xb-link><br/>
                    <xb-link theme="pseudo">pseudo</xb-link>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-link theme=\"normal\">normal</xb-link>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-link href="https://ya.ru" target="_blank">ya.ru</xb-link>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-link href=\"https://ya.ru\" target=\"_blank\">ya.ru</xb-link>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-link disabled="disabled">disabled</xb-link>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-link disabled>disabled</xb-link>"
                        </code>
                    </pre>
                </div>
            </div>

            <a href="#/controls/link">
                "See more info about links."
            </a>

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
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-button theme=\"normal\">normal</xb-button>"
                        </code>
                    </pre>
                </div>
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
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-button type=\"label\">label</xb-button>"
                        </code>
                    </pre>
                </div>
            </div>

            "For the button you can specify the icon:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-button xb-ico-float="left" xb-ico-type="help">button</xb-button>
                    " "
                    <xb-button xb-ico-float="right" xb-ico-type="download">button</xb-button>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-button xb-ico-float=\"left\" xb-ico-type=\"help\">button</xb-button>"
                            <br/>
                            "<xb-button xb-ico-float=\"right\" xb-ico-type=\"download\">button</xb-button>"
                        </code>
                    </pre>
                </div>
            </div>

            "Button checkbox:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-button type="checkbox" name="bt1" value="1">checkbox 1</xb-button>
                    " "
                    <xb-button type="checkbox" name="bt2" value="2" checked="checked">checkbox 2</xb-button>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-button type=\"checkbox\" name=\"bt1\" value=\"1\">checkbox 1</xb-button>"
                            <br/>
                            "<xb-button type=\"checkbox\" name=\"bt2\" value=\"2\" checked>checkbox 2</xb-button>"
                        </code>
                    </pre>
                </div>
            </div>

            "Button radio:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-button type="radio" name="bt3" value="1">radio 1</xb-button>
                    " "
                    <xb-button type="radio" name="bt3" value="2" checked="checked">radio 2</xb-button>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-button type=\"radio\" name=\"bt3\" value=\"1\">radio 1</xb-button>"
                            <br/>
                            "<xb-button type=\"radio\" name=\"bt3\" value=\"2\" checked>radio 2</xb-button>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-button disabled="disabled">disabled</xb-button>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-button disabled>disabled</xb-button>"
                        </code>
                    </pre>
                </div>
            </div>

            <a href="#/controls/button">
                "See more info about buttons."
            </a>

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
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-checkbox name=\"cb1\" value=\"1\" checked>checkbox 1</xb-checkbox>"
                            <br/>
                            "<xb-checkbox name=\"cb2\" value=\"2\">checkbox 2</xb-checkbox>"
                            <br/>
                            "<xb-checkbox name=\"cb3\" value=\"3\" disabled>checkbox 3</xb-checkbox>"
                        </code>
                    </pre>
                </div>
            </div>

            <a href="#/controls/checkbox">
                "See more info about checkbox."
            </a>

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
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-radio name=\"radio\" value=\"1\" checked>radio 1</xb-radio>"
                            <br/>
                            "<xb-radio name=\"radio\" value=\"2\">radio 2</xb-radio>"
                            <br/>
                            "<xb-radio name=\"radio\" value=\"3\" disabled>radio 3</xb-radio>"
                        </code>
                    </pre>
                </div>
            </div>

            <a href="#/controls/radio">
                "See more info about radio."
            </a>

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
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input value=\"simple input\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input placeholder="placeholder"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input placeholder=\"placeholder\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input value="multiline" multiline="multiline"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input value=\"multiline\" multiline></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input prefix="prefix"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input prefix=\"prefix\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input postfix="postfix"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input postfix=\"postfix\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input autosize="autosize" value="autosize"></xb-input>
                    <p></p>
                    <xb-input autosize="autosize" multiline="multiline" value="autosize"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input autosize value=\"autosize\"></xb-input>"
                            <br/>
                            "<xb-input autosize multiline value=\"autosize\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input readonly="readonly" value="readonly"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input readonly value=\"readonly\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input disabled="disabled" value="disabled"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input disabled value=\"disabled\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input reset="reset" value="reset"></xb-input>
                    <p></p>
                    <xb-input reset="reset" multiline="multiline" value="reset"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input reset value=\"reset\"></xb-input>"
                            <br/>
                            "<xb-input reset multiline value=\"reset\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input ghost="ghost" value="ghost"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input ghost value=\"ghost\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-input xb-link="link" xb-link-href="http://ya.ru" xb-link-target="_blank"></xb-input>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-input xb-link=\"link\" xb-link-href=\"http://ya.ru\" xb-link-target=\"_blank\"></xb-input>"
                        </code>
                    </pre>
                </div>
            </div>

            <a href="#/controls/input">
                "See more info about input."
            </a>

            <h2 className="sub-header anchor" data-hash="examples/popup">
                "Popup"
            </h2>

            "To display popup, use the tag "
            <code>
                "<xb-popup>"
            </code>
            "."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-popup close="close" id="popup1">
                        "Popup body"
                    </xb-popup>
                    <a href="#" className="popup-open label label-primary" data-popup-id="popup1">show popup</a>
                </div>
                <div className="panel-body highlight">
                    <pre>
                        <code className="html">
                            "<xb-popup close>"
                            <br/>
                            "   Popup body"
                            <br/>
                            "</xb-popup>"
                        </code>
                    </pre>
                </div>
            </div>

            "Complex window:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-popup close="close" id="popup2">
                        <script type="text/x-template" ref="xb-popup-title">
                            "Title"
                        </script>

                        <script type="text/x-template">
                            "Body"
                        </script>

                        <script type="text/x-template" ref="xb-popup-buttons">
                            <xb-button>button</xb-button>
                        </script>
                    </xb-popup>
                    <a href="#" className="popup-open label label-primary" data-popup-id="popup2">show popup</a>
                </div>
                <Code className="panel-body">
                    {sample8}
                </Code>
            </div>

            "Themes:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-popup close="close" theme="modal" id="popup3">
                        "Popup body"
                    </xb-popup>
                    <xb-popup close="close" theme="island" id="popup4">
                        "Popup body"
                    </xb-popup>
                    <xb-popup close="close" theme="error" id="popup5">
                        "Popup body"
                    </xb-popup>
                    <xb-popup close="close" theme="blank" id="popup6">
                        "Popup body"
                    </xb-popup>

                    <a href="#" className="popup-open label label-primary" data-popup-id="popup3">modal</a>
                    " "
                    <a href="#" className="popup-open label label-primary" data-popup-id="popup4">island</a>
                    " "
                    <a href="#" className="popup-open label label-primary" data-popup-id="popup5">error</a>
                    " "
                    <a href="#" className="popup-open label label-primary" data-popup-id="popup6">blank</a>
                </div>
                <Code className="panel-body">
                    {sample7}
                </Code>
            </div>

            <a href="#/controls/popup">
                "See more info about popup."
            </a>

            <h2 className="sub-header anchor" data-hash="examples/menu">
                "Menu"
            </h2>

            "To display menu, use the tag "
            <code>
                "<xb-menu>"
            </code>
            "."

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-menu id="menu1">
                        <xb-menuitem label="label 1">
                            <xb-menuitem label="label 1.1"></xb-menuitem>
                            <xb-menuitem label="label 1.2"></xb-menuitem>
                            <xb-menuitem label="label 1.3">
                                <xb-menuitem label="label 1.3.1"></xb-menuitem>
                                <xb-menuitem label="label 1.3.2"></xb-menuitem>
                                <xb-menuitem label="label 1.3.3"></xb-menuitem>
                            </xb-menuitem>
                        </xb-menuitem>
                        <xb-menuitem label="label 2"></xb-menuitem>
                        <xb-menuitem label="label 3"></xb-menuitem>
                        <xb-menuseparator></xb-menuseparator>
                        <xb-menuitem label="label 4" disabled="disabled"></xb-menuitem>
                    </xb-menu>
                    <a href="#" className="popup-open label label-primary" data-popup-id="menu1">show menu</a>
                </div>
                <Code className="panel-body">
                    {sample6}
                </Code>
            </div>

            "Specify the size menu:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-menu id="menu2" size="5">
                        <xb-menuitem label="label 1"></xb-menuitem>
                        <xb-menuitem label="label 2"></xb-menuitem>
                        <xb-menuitem label="label 3"></xb-menuitem>
                        <xb-menuitem label="label 4"></xb-menuitem>
                        <xb-menuitem label="label 5"></xb-menuitem>
                        <xb-menuitem label="label 6"></xb-menuitem>
                        <xb-menuitem label="label 7"></xb-menuitem>
                        <xb-menuitem label="label 8"></xb-menuitem>
                    </xb-menu>
                    <a href="#" className="popup-open label label-primary" data-popup-id="menu2">show menu</a>
                </div>
                <Code className="panel-body">
                    {sample5}
                </Code>
            </div>

            "Icons in menu items:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-menu id="menu3">
                        <xb-menuitem label="label 1" xb-ico-type="twitter" xb-ico-float="left"></xb-menuitem>
                        <xb-menuitem label="label 2" xb-ico-type="vk" xb-ico-float="right"></xb-menuitem>
                    </xb-menu>
                    <a href="#" className="popup-open label label-primary" data-popup-id="menu3">show menu</a>
                </div>
                <Code className="panel-body">
                    {sample4}
                </Code>
            </div>

            "Show menu for the target object:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <a id="targetMenu4" href="#" className="popup-open label label-primary" data-popup-id="menu4">
                        "show menu for the target object"
                    </a>
                    <xb-menu id="menu4"
                        target="#targetMenu4"
                        attachment="top left"
                        target-attachment="bottom left"
                        target-modifier="initial">

                        <xb-menuitem label="label 1">
                            <xb-menuitem label="label 1.1"></xb-menuitem>
                            <xb-menuitem label="label 1.2"></xb-menuitem>
                            <xb-menuitem label="label 1.3">
                                <xb-menuitem label="label 1.3.1"></xb-menuitem>
                                <xb-menuitem label="label 1.3.2"></xb-menuitem>
                                <xb-menuitem label="label 1.3.3"></xb-menuitem>
                            </xb-menuitem>
                        </xb-menuitem>
                        <xb-menuitem label="label 2"></xb-menuitem>
                    </xb-menu>
                </div>
                <Code className="panel-body">
                    {sample3}
                </Code>
            </div>

            "Context menu:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-menu id="menu5">
                        <xb-menuitem label="label 1"></xb-menuitem>
                        <xb-menuitem label="label 2"></xb-menuitem>
                    </xb-menu>

                    <div contextmenu="menu5" className="alert alert-info" role="alert" style="-webkit-user-select:none;user-select:none;">
                        "right click to display the context menu"
                    </div>
                </div>
                <Code className="panel-body">
                    {sample2}
                </Code>
            </div>

            "Inline menu:"

            <div className="panel panel-example">
                <div className="panel-heading">
                    <xb-menu-inline>
                        <xb-menuitem label="label 1">
                            <xb-menuitem label="label 1.1"></xb-menuitem>
                            <xb-menuitem label="label 1.2"></xb-menuitem>
                            <xb-menuitem label="label 1.3">
                                <xb-menuitem label="label 1.3.1"></xb-menuitem>
                                <xb-menuitem label="label 1.3.2"></xb-menuitem>
                                <xb-menuitem label="label 1.3.3"></xb-menuitem>
                            </xb-menuitem>
                        </xb-menuitem>
                        <xb-menuitem label="label 2"></xb-menuitem>
                        <xb-menuitem label="label 3"></xb-menuitem>
                        <xb-menuseparator></xb-menuseparator>
                        <xb-menuitem label="label 4" disabled="disabled"></xb-menuitem>
                    </xb-menu-inline>
                </div>
                <Code className="panel-body">
                    {sample1}
                </Code>
            </div>

            <a href="#/controls/menu">
                "See more info about menu."
            </a>
            </div>
        );
    }
});
