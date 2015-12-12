import React from 'react';
import Code from 'ui/Code';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';
import sample3 from './sample3.txt';
import sample4 from './sample4.txt';

export default React.createClass({
    displayName: 'GettingStarted',

    render: function () {
        return (
            <div>
                <h1 className="page-header anchor" data-hash="getting-started">
                    Getting started
                </h1>

                <p className="lead">
                    An overview of Xblocks, how to download and use, basic templates, and more.
                </p>

                <h2 className="sub-header anchor" data-hash="getting-started/quickstart">
                    Quick Start
                </h2>

                <ol>
                    <li>
                        <a href="#/getting-started/download">Download library</a>
                    </li>
                    <li>
                        Include the CSS on your head page:
                        <Code>
                            {sample2}
                        </Code>
                    </li>
                    <li>
                        Include the JS on your head page:
                        <Code>
                            {sample3}
                        </Code>
                    </li>
                    <li>
                        Test connection required dependencies:
                        <Code>
                            {sample4}
                        </Code>
                    </li>
                    <li>
                        Further work requires no initialization.
                    </li>
                </ol>

                <h2 className="sub-header anchor" data-hash="getting-started/download">
                    Download
                </h2>

                <small>
                    Currently

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

                <Code>
                    $ bower install xblocks
                </Code>

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

                <Code>
                    $ bower install xblocks
                </Code>

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

                <Code>
                    $ npm install xblocks
                </Code>

                <h2 className="sub-header anchor" data-hash="getting-started/templates">
                    Templates
                </h2>

                <p>
                    This template does not utilize CDNs.
                </p>

                <Code>
                    {sample1}
                </Code>
            </div>
        );
    }
});
