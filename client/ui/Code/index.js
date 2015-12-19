import _ from 'lodash';
import React from 'react';

export default React.createClass({
    displayName: 'Code',

    getDefaultProps: function () {
        return {
            lang: 'html'
        };
    },

    render: function () {
        var code = _.unescape(this.props.value);
        code = code.trim().replace(/<br\/>/g, '\n');

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
