import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample16 from './sample16.txt';
import sample17 from './sample17.txt';

export default React.createClass({
    render() {
        const attrs = [
            {
                'name': 'multiple',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.select__attrs_multiple" />
            },
            {
                'name': 'value',
                'type': 'string',
                'def': '',
                'descr': <FormattedHTMLMessage id="controls.select__attrs_value" />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="select"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.select__title" /></h2>

                <p><FormattedHTMLMessage id="controls.select__descr_p1" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample16} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample17 }} />
                    <Code className="panel-body" value={sample17} />
                </div>

                <Link to="/examples/select">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
