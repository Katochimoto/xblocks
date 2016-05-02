import React from 'react';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';
import sample3 from './sample3.txt';
import sample4 from './sample4.txt';
import sample5 from './sample5.txt';
import sample6 from './sample6.txt';

export default React.createClass({
    displayName: 'Extension',

    render() {
        return (
            <div>
                <h1 className="page-header"><FormattedMessage id="menu.extension" /></h1>
                <FormattedHTMLMessage id="extension.descr0" />

                <Code lang="javascript" value={sample6} />

                <h2 className="sub-header anchor" data-hash="es6">
                    <FormattedMessage id="extension.es6" />
                </h2>
                <FormattedHTMLMessage id="extension.descr1" />

                <h3><FormattedMessage id="extension.es6__install_deep" /></h3>
                <Code lang="bash" value={sample1} />

                <h3><FormattedMessage id="extension.es6__configure" /></h3>
                <FormattedMessage id="extension.descr2" />
                <Code lang="json" value={sample2} />

                <h3><FormattedMessage id="extension.es6__example" /></h3>
                <Code lang="javascript" value={sample3} />

                <FormattedHTMLMessage id="extension.descr3" />
                <Code lang="html" value={sample4} />

                <p><FormattedHTMLMessage id="extension.descr4" /></p>
                <p><FormattedHTMLMessage id="extension.descr5" /></p>
                <p><FormattedHTMLMessage id="extension.descr6" /></p>

                <Code lang="javascript" value={sample5} />
            </div>
        );
    }
});
