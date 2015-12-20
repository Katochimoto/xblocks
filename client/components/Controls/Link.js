import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample2 from './sample2.txt';
import sample3 from './sample3.txt';

const themes = [
    'normal',
    'outer',
    'pseudo',
    'empty'
];

export default React.createClass({
    render: function () {
        const attrs = [
            {
                'name': 'href',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.link__attrs_href" />
            },
            {
                'name': 'name',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.link__attrs_name" />
            },
            {
                'name': 'target',
                'type': 'string',
                'def': '_self',
                'descr': <FormattedHTMLMessage id="controls.link__attrs_target" />
            },
            {
                'name': 'theme',
                'type': 'string',
                'def': 'normal',
                'descr': <FormattedHTMLMessage id="controls.link__attrs_theme" values={{ themes: themes.map((item) => `<code>${item}</code>`) }} />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="link"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.link__title" /></h2>

                <p><FormattedHTMLMessage id="controls.link__descr_p1" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample2} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample3 }} />
                    <Code className="panel-body" value={sample3} />
                </div>

                <Link to="/examples/link">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
