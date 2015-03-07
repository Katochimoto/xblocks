/** @jsx React.DOM */
/* global xblocks, React, xv */
/* jshint strict: false */

/**
 * The template node xb-popup
 *
 * @class xv.Popup
 * @memberof xv
 * @mixes xblocks.mixin.vCommonAttrs
 * @mixes React.addons.PureRenderMixin
 */
xv.Popup = xblocks.view.register('xb-popup', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-popup',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'close': React.PropTypes.bool,
            'theme': React.PropTypes.oneOf([ 'normal', 'modal', 'island', 'error', 'blank' ])
        },

        'getDefaultProps': function() {
            return {
                'close': false,
                'theme': 'normal'
            };
        },

        '_onClickClose': function() {
            xblocks.event.dispatch(
                React.findDOMNode(this),
                'jsx-click-close',
                { 'bubbles': true, 'cancelable': true }
            );
        },

        /* jshint ignore:start */
        'render': function() {
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
                    <a key="close" className="_close" onClick={this._onClickClose} />
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

            classes = classNames(classes);

            return (
                <div className={classes} tabIndex="0">{children}</div>
            );
        }
        /* jshint ignore:end */
    }
]);
