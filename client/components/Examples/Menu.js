import React from 'react';
import { Link } from 'react-router';
import { FormattedMessage, FormattedHTMLMessage } from 'react-intl';
import Code from 'ui/Code';

import sample1 from './sample1.txt';
import sample2 from './sample2.txt';
import sample3 from './sample3.txt';
import sample4 from './sample4.txt';
import sample5 from './sample5.txt';
import sample6 from './sample6.txt';
import sample37 from './sample37.txt';

export default React.createClass({
    render() {
        return (
            <div>
                <a className="anchor" data-hash="menu"></a>
                <h2 className="sub-header">
                    <FormattedMessage id="menu.menu" />
                </h2>

                <FormattedHTMLMessage id="examples.menu_descr0" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample6 }} />
                    <Code className="panel-body" value={sample6} />
                </div>

                <FormattedMessage id="examples.menu_descr1" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample5 }} />
                    <Code className="panel-body" value={sample5} />
                </div>

                <FormattedMessage id="examples.menu_descr2" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample4 }} />
                    <Code className="panel-body" value={sample4} />
                </div>

                <FormattedMessage id="examples.menu_descr3" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample3 }} />
                    <Code className="panel-body" value={sample3} />
                </div>

                <FormattedMessage id="examples.menu_descr4" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample2 }} />
                    <Code className="panel-body" value={sample2} />
                </div>

                <FormattedMessage id="examples.menu_descr5" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample1 }} />
                    <Code className="panel-body" value={sample1} />
                </div>

                <FormattedMessage id="examples.menu_descr6" />

                <div className="panel panel-example">
                    <div className="panel-heading" dangerouslySetInnerHTML={{ __html: sample37 }} />
                    <Code className="panel-body" value={sample37} />
                </div>

                <Link to="/controls/menu">
                    <FormattedMessage id="examples.more" />
                </Link>
            </div>
        );
    }
});
