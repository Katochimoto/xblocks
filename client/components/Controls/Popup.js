import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample12 from './sample12.txt';
import sample13 from './sample13.txt';

const themes = [
    'blank',
    'error',
    'island',
    'modal',
    'normal'
];

export default React.createClass({
    render() {
        const attrs = [
            {
                'name': 'close',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_close" />
            },
            {
                'name': 'theme',
                'type': 'string',
                'def': 'normal',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_theme" values={{ themes: themes.map((item) => `<code>${item}</code>`) }} />
            },
            {
                'name': 'attachment',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_attachment" />
            },
            {
                'name': 'constraints',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_constraints" />
            },
            {
                'name': 'offset',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_offset" />
            },
            {
                'name': 'optimizations-gpu',
                'type': 'string',
                'def': 'true',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_optimizations-gpu" />
            },
            {
                'name': 'target-attachment',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_target-attachment" />
            },
            {
                'name': 'target-modifier',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_target-modifier" />
            },
            {
                'name': 'target-offset',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_target-offset" />
            },
            {
                'name': 'target-parent',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_target-parent" />
            },
            {
                'name': 'target',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.popup__attrs_target" />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="popup"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.popup__title" /></h2>

                <p><FormattedHTMLMessage id="controls.popup__descr_p1" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample12} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample13 }} />
                    <Code className="panel-body" value={sample13} />
                </div>

                <Link to="/examples/popup">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
