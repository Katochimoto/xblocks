import _ from 'lodash';
import { PropTypes } from 'react';
import { view } from 'xblocks-core';
import PureRenderMixin from 'react-addons-pure-render-mixin';

export default view.create({
    displayName: 'xb-button_content',

    mixins: [ PureRenderMixin ],

    propTypes: {
        ico: PropTypes.object
    },

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

        if (!_.isEmpty(this.props.ico) && this.props.ico.type) {
            if (!this.props.ico.float || this.props.ico.float === 'left') {
                children.unshift(
                    <xb-ico {...this.props.ico} class="_before" key="ico" />
                );

            } else if (this.props.ico.float === 'right') {
                children.push(
                    <xb-ico {...this.props.ico} class="_after" key="ico" />
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
