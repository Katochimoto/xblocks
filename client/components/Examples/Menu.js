import React from 'react';
import Code from 'ui/Code';
import InlineCode from 'ui/InlineCode';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';
import sample3 from './sample3.txt';
import sample4 from './sample4.txt';
import sample5 from './sample5.txt';
import sample6 from './sample6.txt';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h2 className="sub-header anchor" data-hash="examples/menu">
                    Menu
                </h2>

                To display menu, use the tag
                <InlineCode code="<xb-menu>" />
                .

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <div dangerouslySetInnerHTML={{ __html: sample6 }} />
                        <a href="#" className="popup-open label label-primary" data-popup-id="menu1">show menu</a>
                    </div>
                    <Code className="panel-body">
                        {sample6}
                    </Code>
                </div>

                Specify the size menu:

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <div dangerouslySetInnerHTML={{ __html: sample5 }} />
                        <a href="#" className="popup-open label label-primary" data-popup-id="menu2">show menu</a>
                    </div>
                    <Code className="panel-body">
                        {sample5}
                    </Code>
                </div>

                Icons in menu items:

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <div dangerouslySetInnerHTML={{ __html: sample4 }} />
                        <a href="#" className="popup-open label label-primary" data-popup-id="menu3">show menu</a>
                    </div>
                    <Code className="panel-body">
                        {sample4}
                    </Code>
                </div>

                Show menu for the target object:

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <a id="targetMenu4" href="#" className="popup-open label label-primary" data-popup-id="menu4">
                            show menu for the target object
                        </a>
                        <div dangerouslySetInnerHTML={{ __html: sample3 }} />
                    </div>
                    <Code className="panel-body">
                        {sample3}
                    </Code>
                </div>

                Context menu:

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <div dangerouslySetInnerHTML={{ __html: sample2 }} />
                        <div contextmenu="menu5" className="alert alert-info" role="alert" style="-webkit-user-select:none;user-select:none;">
                            right click to display the context menu
                        </div>
                    </div>
                    <Code className="panel-body">
                        {sample2}
                    </Code>
                </div>

                Inline menu:

                <div className="panel panel-example">
                    <div className="panel-heading">
                        <div dangerouslySetInnerHTML={{ __html: sample1 }} />
                    </div>
                    <Code className="panel-body">
                        {sample1}
                    </Code>
                </div>

                <a href="#/controls/menu">
                    See more info about menu.
                </a>
            </div>
        );
    }
});
