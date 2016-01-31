import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';
import sample3 from './sample3.txt';
import sample4 from './sample4.txt';

export default React.createClass({
    displayName: 'GettingStarted',

    render() {
        return (
            <div>
                <h1 className="page-header"><FormattedMessage id="menu.getting_started" /></h1>
                <p className="lead"><FormattedMessage id="getting_started.descr0" /></p>

                <h2 className="sub-header anchor" data-hash="quickstart">
                    <FormattedMessage id="menu.quickstart" />
                </h2>

                <ol>
                    <li>
                        <Link to="/getting-started/download">
                            <FormattedMessage id="getting_started.download" />
                        </Link>
                    </li>
                    <li>
                        <FormattedMessage id="getting_started.css" />
                        <Code value={sample2} />
                    </li>
                    <li>
                        <FormattedMessage id="getting_started.js" />
                        <Code value={sample3} />
                    </li>
                    <li>
                        <FormattedMessage id="getting_started.dependencies" />
                        <Code value={sample4} />
                    </li>
                    <li>
                        <FormattedMessage id="getting_started.descr1" />
                    </li>
                </ol>

                <h2 className="sub-header anchor" data-hash="download">
                    <FormattedMessage id="menu.download" />
                </h2>

                <small>
                    <FormattedMessage id="getting_started.version" values={{ version: VERSION }} />
                </small>

                <h3><FormattedMessage id="getting_started.install_cdn" /></h3>
                <p><FormattedHTMLMessage id="getting_started.install_cdn_descr" /></p>

                <Code value="$ bower install xblocks" />

                <h3><FormattedMessage id="getting_started.install_bower" /></h3>
                <p><FormattedHTMLMessage id="getting_started.install_bower_descr" /></p>

                <Code value="$ bower i xblocks-core xblocks" />

                <h3><FormattedMessage id="getting_started.install_npm" /></h3>
                <p><FormattedHTMLMessage id="getting_started.install_npm_descr" /></p>

                <Code value="$ npm i xblocks-core xblocks" />

                <h2 className="sub-header anchor" data-hash="templates">
                    <FormattedMessage id="menu.templates" />
                </h2>

                <p><FormattedMessage id="getting_started.descr2" /></p>

                <Code value={sample1} />
            </div>
        );
    }
});
