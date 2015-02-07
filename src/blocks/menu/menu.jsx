/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */
/* jshint -W098 */
var XBMenu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,

    {
        'displayName': 'xb-menu',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'type': React.PropTypes.oneOf([ 'context', 'toolbar', 'list' ])
        },

        getDefaultProps: function() {
            return {
                'type': 'list'
            };
        },

        getInitialState: function() {
            return {
                'isShowScrollTop': false,
                'isShowScrollBottom': false
            };
        },

        componentWillMount: function() {
            this._lockRedrawScrollNavigator = false;
            this._onScroll = xblocks.utils.throttleAnimationFrame(this._onScroll, this);
        },

        _redrawScrollNavigator: function(target) {
            if (this._lockRedrawScrollNavigator) {
                return;
            }

            this._lockRedrawScrollNavigator = true;

            var height = Math.max(target.scrollHeight, target.clientHeight);
            var isShowScrollTop = (target.scrollTop > 10);
            var isShowScrollBottom = (target.scrollTop + target.clientHeight < height - 10);

            this.setState({
                'isShowScrollTop': isShowScrollTop,
                'isShowScrollBottom': isShowScrollBottom
            }, this._redrawScrollNavigatorSuccess);
        },

        _redrawScrollNavigatorSuccess: function() {
            this._lockRedrawScrollNavigator = false;
        },

        _onScroll: function(event) {
            this._redrawScrollNavigator(event.target);
        },

        _onClickTop: function() {

        },

        _onMouseEnterTop: function() {

        },

        _onMouseLeaveTop: function() {

        },

        _onClickBottom: function() {

        },

        _onMouseEnterBottom: function() {

        },

        _onMouseLeaveBottom: function() {

        },

        render: function() {
            var classes = {
                '_popup': true
            };

            classes = React.addons.classSet(classes);

            var scrollTopStyle = {
                'display': (this.state.isShowScrollTop ? 'block' : 'none')
            };

            var scrollBottomStyle = {
                'display': (this.state.isShowScrollBottom ? 'block' : 'none')
            };

            return (
                <div className={classes} tabIndex="0">
                    <div ref="scrollTop"
                        style={scrollTopStyle}
                        className="_popup-scroll-top"
                        onClick={this._onClickTop}
                        onMouseEnter={this._onMouseEnterTop}
                        onMouseLeave={this._onMouseLeaveTop} />
                    <div ref="content"
                        className="_popup-content"
                        onScroll={this._onScroll}
                        data-xb-content={this.props._uid}
                        dangerouslySetInnerHTML={{ __html: this.props.children }} />
                    <div ref="scrollBottom"
                        style={scrollBottomStyle}
                        className="_popup-scroll-bottom"
                        onClick={this._onClickBottom}
                        onMouseEnter={this._onMouseEnterBottom}
                        onMouseLeave={this._onMouseLeaveBottom} />
                </div>
            );
        }
    }
]);
