import React from 'react';

export default React.createClass({
    displayName: 'InlineCode',

    render: function () {
        return (
            <code>
                {this.props.code}
            </code>
        );
    }
});
