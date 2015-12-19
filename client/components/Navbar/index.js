import React from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default React.createClass({
    displayName: 'Navbar',

    mixins: [ PureRenderMixin ],

    render: function () {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="container-fluid">
                    <div className="navbar-header">
                        <button type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#navbar"
                            aria-expanded="false"
                            aria-controls="navbar">

                            <span className="sr-only">Toggle navigation</span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                            <span className="icon-bar"></span>
                        </button>
                        <a className="navbar-brand" href={HOMEPAGE}>
                            Xblocks
                            <em className="small"> {VERSION}</em>
                        </a>
                    </div>
                    <div id="navbar" className="navbar-collapse collapse">
                        <ul className="nav navbar-nav navbar-right">
                            <li><a href="../jsdoc">JSDoc</a></li>
                            <li><a href="https://github.com/Katochimoto/xblocks">GitHub</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
});
