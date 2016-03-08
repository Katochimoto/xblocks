import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample14 from './sample14.txt';
import sample15 from './sample15.txt';

export default React.createClass({
    render() {
        const attrs = [
            {
                'name': 'size',
                'type': 'number',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_size" />
            },
            {
                'name': 'attachment',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_attachment" />
            },
            {
                'name': 'constraints',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_constraints" />
            },
            {
                'name': 'offset',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_offset" />
            },
            {
                'name': 'optimizations-gpu',
                'type': 'string',
                'def': 'true',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_optimizations-gpu" />
            },
            {
                'name': 'target-attachment',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_target-attachment" />
            },
            {
                'name': 'target-modifier',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_target-modifier" />
            },
            {
                'name': 'target-offset',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_target-offset" />
            },
            {
                'name': 'target-parent',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_target-parent" />
            },
            {
                'name': 'target',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.menu__attrs_target" />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="menu"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.menu__title" /></h2>

                <p><FormattedHTMLMessage id="controls.menu__descr_p1" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample14} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample15 }} />
                    <Code className="panel-body" value={sample15} />
                </div>

                <Link to="/examples/menu">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
