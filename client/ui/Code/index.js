import _ from 'lodash';
import React from 'react';
import ReactDOMServer from 'react-dom/server';

export default React.createClass({
    displayName: 'Code',

    getDefaultProps: function () {
        return {
            lang: 'html'
        };
    },

    render: function () {
        var value = this.props.value;
        if (!value) {
            value = ReactDOMServer.renderToStaticMarkup(
                <div>{this.props.children}</div>
            );
        }

        var code = _.unescape(value);
        code = code.trim()
            .replace(/^<div>/m, '')
            .replace(/<\/div>$/m, '')
            .replace(/<br\/>/g, '\n');

        return (
            <div className={this.props.className}>
                <pre>
                    <code className={'language-' + this.props.lang}>
                        {code}
                    </code>
                </pre>
            </div>
        );
    }
});
