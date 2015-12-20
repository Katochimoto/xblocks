import React from 'react';
import { FormattedMessage } from 'react-intl';
import InlineCode from 'ui/InlineCode';

export default React.createClass({
    render: function () {
        return (
            <div>
                <h3>
                    <FormattedMessage id={this.props.title} />
                </h3>
                <table className="table table-hover">
                    <tbody>
                        {this.props.value.map((item, idx) => {
                            return (
                                <tr key={idx}>
                                    <td className="text-info" nowrap="nowrap">
                                        {item.name}
                                    </td>
                                    <td>
                                        {item.type}
                                    </td>
                                    <td>
                                        <InlineCode value={item.def} />
                                    </td>
                                    <td>
                                        {item.descr}
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
});
