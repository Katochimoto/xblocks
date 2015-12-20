import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample1 from './sample1.txt';

const types = [
    'attention',
    'close',
    'check',
    'download',
    'download-white',
    'dropdown',
    'eye',
    'link',
    'link-white',
    'mail',
    'notification',
    'odnoklassniki',
    'pause',
    'people',
    'play',
    'print',
    'remove',
    'services',
    'settings',
    'three-dots',
    'trash',
    'trash-white',
    'twitter',
    'help',
    'upload',
    'upload-white',
    'vk'
];

export default React.createClass({
    render: function () {
        const attrs = [
            {
                'name': 'active',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.ico__attrs_active" />
            },
            {
                'name': 'disabled',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.ico__attrs_disabled" />
            },
            {
                'name': 'size',
                'type': 'string',
                'def': 's',
                'descr': <FormattedHTMLMessage id="controls.ico__attrs_size" />
            },
            {
                'name': 'value',
                'type': 'string',
                'def': '&nbsp;',
                'descr': <FormattedHTMLMessage id="controls.ico__attrs_value" />
            },
            {
                'name': 'type',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.ico__attrs_type" values={{ types: types.map((item) => `<code>${item}</code>`) }} />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="ico"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.ico__title" /></h2>

                <p><FormattedHTMLMessage id="controls.ico__descr_p1" /></p>
                <p><FormattedHTMLMessage id="controls.ico__descr_p2" /></p>
                <p><FormattedHTMLMessage id="controls.ico__descr_p3" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code>
                    <xb-ico type="notification">test</xb-ico>
                </Code>

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample1 }} />
                    <Code className="panel-body" value={sample1} />
                </div>

                <Link to="/examples/ico">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
