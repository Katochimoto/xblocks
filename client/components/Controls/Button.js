import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';
import Attrs from 'ui/Attrs';

import sample4 from './sample4.txt';
import sample5 from './sample5.txt';

const themes = [
    'action',
    'dark',
    'flying',
    'normal',
    'promo',
    'pseudo-inverted',
    'pseudo'
];

const types = [
    'label',
    'inline',
    'link',
    'file',
    'button',
    'submit',
    'checkbox',
    'radio'
];

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
                'name': 'href',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.button__attrs_href" />
            },
            {
                'name': 'multiple',
                'type': 'boolean',
                'def': 'false',
                'descr': <FormattedHTMLMessage id="controls.button__attrs_multiple" />
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
                'descr': <FormattedHTMLMessage id="controls.button__attrs_size" />
            },
            {
                'name': 'target',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls.button__attrs_target" />
            },
            {
                'name': 'theme',
                'type': 'string',
                'def': 'normal',
                'descr': <FormattedHTMLMessage id="controls.button__attrs_theme" values={{ themes: themes.map((item) => `<code>${item}</code>`) }} />
            },
            {
                'name': 'type',
                'type': 'string',
                'def': 'button',
                'descr': <FormattedHTMLMessage id="controls.button__attrs_type" values={{ types: types.map((item) => `<code>${item}</code>`) }} />
            },
            {
                'name': 'value',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_value" />
            },
            {
                'name': 'xb-ico-float',
                'type': 'string',
                'def': 'left',
                'descr': <FormattedHTMLMessage id="controls._attrs_xb-ico-float" />
            },
            {
                'name': 'xb-ico-[...]',
                'type': 'string',
                'descr': <FormattedHTMLMessage id="controls._attrs_xb-ico" />
            }
        ];

        return (
            <div>
                <a className="anchor" data-hash="button"></a>
                <h2 className="sub-header"><FormattedMessage id="controls.button__title" /></h2>

                <p><FormattedHTMLMessage id="controls.button__descr_p1" /></p>
                <p><FormattedHTMLMessage id="controls.button__descr_p2" /></p>

                <h3><FormattedMessage id="controls._syntax" /></h3>
                <Code value={sample4} />

                <Attrs title="controls._attrs" value={attrs} />

                <h3><FormattedMessage id="controls._example" /></h3>
                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample5 }} />
                    <Code className="panel-body" value={sample5} />
                </div>

                <Link to="/examples/button">
                    <FormattedMessage id="controls._more_example" />
                </Link>
            </div>
        );
    }
});
