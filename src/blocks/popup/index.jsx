import { xv } from 'context';
import { PropTypes } from 'react';
import xblocks from 'xblocks';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import ReactDOM from 'react-dom';
import classnames from 'classnames';
import mixinViewCommonAttrs from 'mixin/view/commonAttrs';

/**
 * The template node xb-popup
 *
 * @class xv.Popup
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Popup = xblocks.view.register('xb-popup', [
    mixinViewCommonAttrs,

    {
        displayName: 'xb-popup',

        mixins: [ PureRenderMixin ],

        // @if NODE_ENV='development'
        propTypes: {
            'close': PropTypes.bool,
            'theme': PropTypes.oneOf([
                'blank',
                'error',
                'island',
                'modal',
                'normal'
            ])
        },
        // @endif

        getDefaultProps: function () {
            return {
                'close': false,
                'theme': 'normal'
            };
        },

        onClickClose: function () {
            xblocks.event.dispatch(
                ReactDOM.findDOMNode(this),
                'jsx-click-close',
                { 'bubbles': true, 'cancelable': true }
            );
        },

        render: function () {
            var children = [
                <div key="content"
                    className="_content"
                    data-xb-content={this.props._uid}
                    dangerouslySetInnerHTML={{ __html: this.props.children }}></div>
            ];

            children.unshift(this.template('xb-popup-title', {
                'key': 'title',
                'className': '_title'
            }));

            if (this.props.close) {
                children.unshift(
                    <a key="close" className="_close" onClick={this.onClickClose} />
                );
            }

            children.push(this.template('xb-popup-buttons', {
                'key': 'buttons',
                'className': '_buttons'
            }));

            var classes = {
                '_popup': true
            };

            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            classes = classnames(classes);

            return (
                <div className={classes} tabIndex="0">
                    {children}
                </div>
            );
        }
    }
]);

export default xv.Popup;
