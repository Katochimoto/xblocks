import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample8 from './sample8.txt';
import sample9 from './sample9.txt';

export default React.createClass({
    render() {
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
                <a className="anchor" data-hash="radio"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.radio__title" /></h2>

                <p><FormattedHTMLMessage id="controls.radio__descr_p1" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample8} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample9 }} />
                    <Code className="panel-body" value={sample9} />
                </div>

                <Link to="/examples/radio">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
