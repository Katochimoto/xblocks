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
            this._enterTopFrame = 0;
            this._enterBottomFrame = 0;
            this._lockRedrawScrollNavigator = false;
            this._onScroll = xblocks.utils.throttleAnimationFrame(this._onScroll);
        },

        _redrawScrollNavigator: function(target) {
            if (this._lockRedrawScrollNavigator) {
                return;
            }

            this._lockRedrawScrollNavigator = true;

            var safeArea = 0;
            var height = Math.max(target.scrollHeight, target.clientHeight);
            var isShowScrollTop = (target.scrollTop > safeArea);
            var isShowScrollBottom = (target.scrollTop + target.clientHeight < height - safeArea);

            this.setState({
                'isShowScrollTop': isShowScrollTop,
                'isShowScrollBottom': isShowScrollBottom
            }, this._redrawScrollNavigatorSuccess);
        },

        _redrawScrollNavigatorSuccess: function() {
            this._lockRedrawScrollNavigator = false;

            if (!this.state.isShowScrollTop) {
                this._onMouseLeaveTop();
            }

            if (!this.state.isShowScrollBottom) {
                this._onMouseLeaveBottom();
            }
        },

        _onScroll: function(event) {
            this._redrawScrollNavigator(event.target);
        },

        _animationScrollTop: function() {
            this.refs.content.getDOMNode().scrollTop--;
            this._enterTopFrame = global.requestAnimationFrame(this._animationScrollTop);
        },

        _onMouseEnterTop: function() {
            this._onMouseLeaveTop();
            this._animationScrollTop();
        },

        _onMouseLeaveTop: function() {
            if (this._enterTopFrame) {
                global.cancelAnimationFrame(this._enterTopFrame);
                this._enterTopFrame = 0;
            }
        },

        _animationScrollBottom: function() {
            this.refs.content.getDOMNode().scrollTop++;
            this._enterBottomFrame = global.requestAnimationFrame(this._animationScrollBottom);
        },

        _onMouseEnterBottom: function() {
            this._onMouseLeaveBottom();
            this._animationScrollBottom();
        },

        _onMouseLeaveBottom: function() {
            if (this._enterBottomFrame) {
                global.cancelAnimationFrame(this._enterBottomFrame);
                this._enterBottomFrame = 0;
            }
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
                    <div style={scrollTopStyle}
                        className="_popup-scroll-top"
                        onMouseEnter={this._onMouseEnterTop}
                        onMouseLeave={this._onMouseLeaveTop} />
                    <div ref="content"
                        className="_popup-content"
                        onScroll={this._onScroll}
                        data-xb-content={this.props._uid}
                        dangerouslySetInnerHTML={{ __html: this.props.children }} />
                    <div style={scrollBottomStyle}
                        className="_popup-scroll-bottom"
                        onMouseEnter={this._onMouseEnterBottom}
                        onMouseLeave={this._onMouseLeaveBottom} />
                </div>
            );
        }
    }
]);
