/** @jsx React.DOM */
/* global xblocks, React, global */
/* jshint strict: false */
/* jshint -W098 */

var XBMenuViewCommon = {
    getInitialState: function() {
        return {
            'maxHeight': 0,
            'isShowScrollTop': false,
            'isShowScrollBottom': false
        };
    },

    componentWillMount: function() {
        this._enterTopFrame = 0;
        this._enterBottomFrame = 0;
        this._lockScroll = false;
        this._onScroll = xblocks.utils.throttleAnimationFrame(this._onScroll);
        this._onScrollThrottle = xblocks.utils.throttle(this._onScrollThrottle, 500, {
            'leading': true,
            'trailing': false
        });
    },

    componentWillReceiveProps: function(nextProps) {
        if (nextProps.size !== this.props.size) {
            this._updateMaxHeight(nextProps.size);
        }
    },

    _updateMaxHeight: function(size, callback) {
        size = Number(size);
        var maxHeight = 0;

        if (size > 0) {
            var contentNode = this.refs.content.getDOMNode();
            var element = contentNode.children[ size - 1 ];

            if (element) {
                var rectContent = contentNode.getBoundingClientRect();
                var rectElement = element.getBoundingClientRect();
                maxHeight = rectElement.top + rectElement.height + contentNode.scrollTop - rectContent.top;
            }
        }

        this.setState({
            'maxHeight': maxHeight
        }, this._redrawScrollNavigator.bind(this, callback));
    },

    _redrawScrollNavigator: function(callback) {
        var target = this.refs.content.getDOMNode();
        var safeArea = 5;
        var height = Math.max(target.scrollHeight, target.clientHeight);
        var isShowScrollTop = (target.scrollTop > safeArea);
        var isShowScrollBottom = (target.scrollTop + target.clientHeight < height - safeArea);

        this.setState({
            'isShowScrollTop': isShowScrollTop,
            'isShowScrollBottom': isShowScrollBottom
        }, this._redrawScrollNavigatorSuccess.bind(this, callback));
    },

    _redrawScrollNavigatorSuccess: function(callback) {
        if (!this.state.isShowScrollTop) {
            this._onMouseLeaveTop();
        }

        if (!this.state.isShowScrollBottom) {
            this._onMouseLeaveBottom();
        }

        if (callback) {
            callback.call(this);
        }
    },

    _onScroll: function(event) {
        if (this._lockScroll) {
            return;
        }

        this._lockScroll = true;
        this._onScrollThrottle();
        this._redrawScrollNavigator(this._onScrollSuccess);
    },

    _onScrollSuccess: function() {
        this._lockScroll = false;
    },

    _onScrollThrottle: function() {
        xblocks.event.dispatch(
            this.refs.content.getDOMNode(),
            'jsx-scroll-throttle',
            { 'bubbles': true, 'cancelable': true }
        );
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

        var contentStyle = {
            'maxHeight': (this.state.maxHeight ? this.state.maxHeight + 'px' : 'none')
        };

        return (
            <div className={classes} tabIndex="0">
                <div style={scrollTopStyle}
                    className="_popup-scroll-top"
                    onMouseEnter={this._onMouseEnterTop}
                    onMouseLeave={this._onMouseLeaveTop} />
                <div ref="content"
                    style={contentStyle}
                    className="_popup-content"
                    onScroll={this._onScroll}
                    data-xb-content={this.props._uid}
                    dangerouslySetInnerHTML={{ __html: this.props.children.trim() }} />
                <div style={scrollBottomStyle}
                    className="_popup-scroll-bottom"
                    onMouseEnter={this._onMouseEnterBottom}
                    onMouseLeave={this._onMouseLeaveBottom} />
            </div>
        );
    }
};

var XBMenu = xblocks.view.register('xb-menu', [
    xblocks.mixin.vCommonAttrs,
    XBMenuViewCommon,

    {
        'displayName': 'xb-menu',

        'mixins': [ React.addons.PureRenderMixin ],

        'propTypes': {
            'type': React.PropTypes.oneOf([ 'context', 'toolbar', 'list' ]),
            'size': React.PropTypes.string
        },

        getDefaultProps: function() {
            return {
                'type': 'list',
                'size': ''
            };
        },

        afterOpen: function(callback) {
            this._updateMaxHeight(this.props.size, callback);
        }
    }
]);
