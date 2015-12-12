import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample32 from './sample32.txt';
import sample33 from './sample33.txt';
import sample34 from './sample34.txt';
import sample35 from './sample35.txt';
import sample36 from './sample36.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/icons">
                    Ico
                </h2>

                To display icons, use the tag
                <InlineCode code="<xb-ico>" />
                .

                <p></p>
                <div className="row">
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><xb-ico size="s" type="help"></xb-ico> help</li>
                            <li><xb-ico size="s" type="attention"></xb-ico> attention</li>
                            <li><xb-ico size="s" type="close"></xb-ico> close</li>
                            <li><xb-ico size="s" type="check"></xb-ico> check</li>
                            <li><xb-ico size="s" type="download"></xb-ico> download</li>
                            <li><span style={{ backgroundColor: '#000' }}><xb-ico size="s" type="download-white"></xb-ico></span> download-white</li>
                            <li><xb-ico size="s" type="twitter"></xb-ico> twitter</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><xb-ico size="s" type="three-dots"></xb-ico> three-dots</li>
                            <li><xb-ico size="s" type="dropdown"></xb-ico> dropdown</li>
                            <li><xb-ico size="s" type="eye"></xb-ico> eye</li>
                            <li><xb-ico size="s" type="link"></xb-ico> link</li>
                            <li><span style={{ backgroundColor: '#000' }}><xb-ico size="s" type="link-white"></xb-ico></span> link-white</li>
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
                            <li><span style={{ backgroundColor: '#000' }}><xb-ico size="s" type="trash-white"></xb-ico></span> trash-white</li>
                        </ul>
                    </div>
                    <div className="col-md-3">
                        <ul className="list-unstyled">
                            <li><xb-ico size="s" type="print"></xb-ico> print</li>
                            <li><xb-ico size="s" type="remove"></xb-ico> remove</li>
                            <li><xb-ico size="s" type="services"></xb-ico> services</li>
                            <li><xb-ico size="s" type="settings"></xb-ico> settings</li>
                            <li><xb-ico size="s" type="upload"></xb-ico> upload</li>
                            <li><span style={{ backgroundColor: '#000' }}><xb-ico size="s" type="upload-white"></xb-ico></span> upload-white</li>
                        </ul>
                    </div>
                </div>
                <p></p>

                Specify
                <InlineCode code='size="s"' />
                to display a small icon.

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample36 }} />
                    <Code className="panel-body">
                        {sample36}
                    </Code>
                </div>

                Specify
                <InlineCode code='size="m"' />
                to display a big icon.

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample35 }} />
                    <Code className="panel-body">
                        {sample35}
                    </Code>
                </div>

                Icon "notification" may contain the value.

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample34 }} />
                    <Code className="panel-body">
                        {sample34}
                    </Code>
                </div>

                The icon can be active.

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample33 }} />
                    <Code className="panel-body">
                        {sample33}
                    </Code>
                </div>

                The icon may not be available.

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample32 }} />
                    <Code className="panel-body">
                        {sample32}
                    </Code>
                </div>

                <a href="#/controls/ico">
                    See more info about icons.
                </a>
            </div>
        );
    }
});
