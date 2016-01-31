import React from 'react';

export default React.createClass({
    displayName: 'InlineCode',

    render: function () {
        if (!this.props.value) {
            return null;
        }

        return (
            <code>
                {this.props.value}
            </code>
        );
    }
});
