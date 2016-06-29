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
        const children = [];

        children.push(
            <span className="_text" key="text">
                {this.context.content()}
            </span>
        );

        if (!_.isEmpty(this.props.ico) && this.props.ico.type) {
            const float = this.props.ico.float;

            if (!float || float === 'left') {
                children.unshift(
                    <xb-ico {...this.props.ico} class="_before" key="ico" />
                );

            } else if (float === 'right') {
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
