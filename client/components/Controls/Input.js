import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample6 from './sample6.txt';
import sample7 from './sample7.txt';

export default React.createClass({
    render() {
        const attrs = [
            {
                'name': 'autocomplete',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_autocomplete" />
            },
            {
                'name': 'autofocus',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls._attrs_autofocus" />
            },
            {
                'name': 'autosize',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_autosize" />
            },
            {
                'name': 'cols',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_cols" />
            },
            {
                'name': 'ghost',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_ghost" />
            },
            {
                'name': 'multiline',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_multiline" />
            },
            {
                'name': 'name',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_name" />
            },
            {
                'name': 'placeholder',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_placeholder" />
            },
            {
                'name': 'postfix',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_postfix" />
            },
            {
                'name': 'prefix',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_prefix" />
            },
            {
                'name': 'readonly',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls._attrs_readonly" />
            },
            {
                'name': 'required',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls._attrs_required" />
            },
            {
                'name': 'reset',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_reset" />
            },
            {
                'name': 'rows',
                'type': 'string',
                'def': '4',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_rows" />
            },
            {
                'name': 'size',
                'type': 'string',
                'def': 'm',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_size" />
            },
            {
                'name': 'value',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_value" />
            },
            {
                'name': 'xb-link',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.input__attrs_xb-link" />
            },
            {
                'name': 'xb-link-[...]',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_xb-link" />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="input"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.input__title" /></h2>

                <p><FormattedHTMLMessage id="controls.input__descr_p1" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample6} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample7 }} />
                    <Code className="panel-body" value={sample7} />
                </div>

                <Link to="/examples/input">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
