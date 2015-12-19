import React from 'react';
import Code from 'ui/Code';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';
import sample3 from './sample3.txt';
import sample4 from './sample4.txt';
// import sample5 from './sample5.txt';

export default React.createClass({
    displayName: 'GettingStarted',

    render: function () {
        return (
            <div>
                <h1 className="page-header">
                    Getting started
                </h1>

                <p className="lead">
                    An overview of Xblocks, how to download and use, basic templates, and more.
                </p>

                <h2 className="sub-header anchor" data-hash="quickstart">
                    Quick Start
                </h2>

                <ol>
                    <li>
                        <a href="#/getting-started/download">Download library</a>
                    </li>
                    <li>
                        Include the CSS on your head page:
                        <Code value={sample2} />
                    </li>
                    <li>
                        Include the JS on your head page:
                        <Code value={sample3} />
                    </li>
                    <li>
                        Test connection required dependencies:
                        <Code value={sample4} />
                    </li>
                    <li>
                        Further work requires no initialization.
                    </li>
                </ol>

                <h2 className="sub-header anchor" data-hash="download">
                    Download
                </h2>

                <small>
                    Currently {VERSION}
                </small>

                <h3>
                    Install with CDN
                </h3>

                <p>
                    You can install Xblocks using
                    <a href="https://cdnjs.com/" target="_blank">
                        CDN
                    </a>
                    :
                </p>

                <Code value="$ bower install xblocks" />

                <h3>
                    Install with Bower
                </h3>

                <p>
                    You can also install Xblocks using
                    <a href="http://bower.io/" target="_blank">
                        Bower
                    </a>
                    :
                </p>

                <Code value="$ bower i xblocks-core xblocks" />

                <h3>
                    Install with npm
                </h3>

                <p>
                    You can also install Xblocks using
                    <a href="https://www.npmjs.com/" target="_blank">
                        npm
                    </a>
                    :
                </p>

                <Code value="$ npm i xblocks-core xblocks" />

                <h2 className="sub-header anchor" data-hash="templates">
                    Templates
                </h2>

                <p>
                    This template does not utilize CDNs.
                </p>

                <Code value={sample1} />
            </div>
        );
    }
});
