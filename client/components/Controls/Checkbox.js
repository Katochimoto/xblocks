import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample10 from './sample10.txt';
import sample11 from './sample11.txt';

export default React.createClass({
    render: function () {
        const attrs = [
            {
                'name': 'autofocus',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls._attrs_autofocus" />
            },
            {
                'name': 'checked',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls._attrs_checked" />
            },
            {
                'name': 'for',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_for" />
            },
            {
                'name': 'form',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_form" />
            },
            {
                'name': 'name',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_name" />
            },
            {
                'name': 'required',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls._attrs_required" />
            },
            {
                'name': 'size',
                'type': 'string',
                'def': 'm',
                'descr': <FormattedHTMLMessage id="controls.checkbox__attrs_size" />
            },
            {
                'name': 'value',
                'type': 'string',
                'def': 'on',
                'descr': <FormattedHTMLMessage id="controls._attrs_value" />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="checkbox"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.checkbox__title" /></h2>

                <p><FormattedHTMLMessage id="controls.checkbox__descr_p1" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample10} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample11 }} />
                    <Code className="panel-body" value={sample11} />
                </div>

                <Link to="/examples/checkbox">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
