import { PropTypes } from 'react';
import xcore from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import isEmpty from 'lodash/isEmpty';

export default xcore.view.create({
    displayName: 'xb-button_content',

    mixins: [ PureRenderMixin ],

    // @if NODE_ENV='development'
    propTypes: {
        ico: PropTypes.object
    },
    // @endif

    getDefaultProps: function () {
        return {
            ico: {}
        };
    },

    render: function () {
        var children = [];

        if (this.props.children) {
            children.push(
                <span className="_text"
                    key="text"
                    data-xb-content={this.props._uid}>

                    {this.props.children}
                </span>
            );
        }

        if (!isEmpty(this.props.ico) && this.props.ico.type) {
            if (!this.props.ico.float || this.props.ico.float === 'left') {
                children.unshift(
                    <xb-ico {...this.props.ico} className="_before" key="ico" />
                );

            } else if (this.props.ico.float === 'right') {
                children.push(
                    <xb-ico {...this.props.ico} className="_after" key="ico" />
                );
            }
        }

        return (
            <span className="_content">
                {children}
            </span>
        );
    }
});
