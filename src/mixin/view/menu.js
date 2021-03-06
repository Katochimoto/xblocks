import _ from 'lodash';
import classnames from 'classnames';
import { event as xevent } from 'xblocks-core';
import throttleAnimationFrame from 'utils/throttleAnimationFrame';
import { cancelAnimationFrame, requestAnimationFrame } from 'polyfills/requestAnimationFrame';

/**
 * Common interface for views xb-menu and xb-menu-inline
 * @param {string} tagName
 * @returns {Object}
 */
export default function (tagName) {
    return {
        getInitialState: function () {
            return {
                maxHeight: 0,
                isShowScrollTop: false,
                isShowScrollBottom: false
            };
        },

        componentWillMount: function () {
            this._enterTopFrame = 0;
            this._enterBottomFrame = 0;
            this._lockScroll = false;
            this._onScroll = throttleAnimationFrame(this._onScroll);
            this._onScrollThrottle = _.throttle(this._onScrollThrottle, 500, {
                leading: true,
                trailing: false
            });
        },

        componentWillReceiveProps: function (nextProps) {
            if (nextProps.size !== this.props.size) {
                this._updateMaxHeight(nextProps.size);
            }
        },

        _updateMaxHeight: function (size, callback) {
            size = Number(size);
            let maxHeight = 0;

            if (size > 0) {
                let contentNode = this._content;
                let element = contentNode.children[ size - 1 ];

                if (element) {
                    let rectContent = contentNode.getBoundingClientRect();
                    let rectElement = element.getBoundingClientRect();
                    maxHeight = rectElement.top + rectElement.height + contentNode.scrollTop - rectContent.top;
                }
            }

            this.setState({ maxHeight }, this._redrawScrollNavigator.bind(this, callback));
        },

        _redrawScrollNavigator: function (callback) {
            const target = this._content;
            const safeArea = 5;
            const height = Math.max(target.scrollHeight, target.clientHeight);
            const isShowScrollTop = (target.scrollTop > safeArea);
            const isShowScrollBottom = (target.scrollTop + target.clientHeight < height - safeArea);

            this.setState({ isShowScrollTop, isShowScrollBottom }, this._redrawScrollNavigatorSuccess.bind(this, callback));
        },

        _redrawScrollNavigatorSuccess: function (callback) {
            if (!this.state.isShowScrollTop) {
                this._onMouseLeaveTop();
            }

            if (!this.state.isShowScrollBottom) {
                this._onMouseLeaveBottom();
            }

            if (_.isFunction(callback)) {
                callback();
            }
        },

        _onWheel: function (event) {
            const content = this._content;
            const delta = event.deltaY;
            const scrollTop = content.scrollTop;
            const offsetHeight = content.offsetHeight;
            const scrollHeight = content.scrollHeight;

            if (delta < 0 && scrollTop === 0 ||
                delta > 0 && scrollTop + offsetHeight >= scrollHeight ||
                offsetHeight === scrollHeight) {

                event.preventDefault();
                event.nativeEvent.stopImmediatePropagation();
            }
        },

        _onScroll: function () {
            if (this._lockScroll) {
                return;
            }

            this._lockScroll = true;
            this._onScrollThrottle();
            this._redrawScrollNavigator(this._onScrollSuccess);
        },

        _onScrollSuccess: function () {
            this._lockScroll = false;
        },

        _onScrollThrottle: function () {
            xevent.dispatch(
                this._content,
                'jsx-scroll-throttle',
                { bubbles: true, cancelable: true }
            );
        },

        _animationScrollTop: function () {
            this._content.scrollTop--;
            this._enterTopFrame = requestAnimationFrame(this._animationScrollTop);
        },

        _onMouseEnterTop: function () {
            this._onMouseLeaveTop();
            this._animationScrollTop();
        },

        _onMouseLeaveTop: function () {
            if (this._enterTopFrame) {
                cancelAnimationFrame(this._enterTopFrame);
                this._enterTopFrame = 0;
            }
        },

        _animationScrollBottom: function () {
            this._content.scrollTop++;
            this._enterBottomFrame = requestAnimationFrame(this._animationScrollBottom);
        },

        _onMouseEnterBottom: function () {
            this._onMouseLeaveBottom();
            this._animationScrollBottom();
        },

        _onMouseLeaveBottom: function () {
            if (this._enterBottomFrame) {
                cancelAnimationFrame(this._enterBottomFrame);
                this._enterBottomFrame = 0;
            }
        },

        /**
         * @param {xb.Menuitem} menuitem
         */
        scrollIntoItem: function (menuitem) {
            const content = this._content;
            const rectContent = content.getBoundingClientRect();
            const rectMenuitem = menuitem.getBoundingClientRect();

            if (rectMenuitem.top < rectContent.bottom && rectMenuitem.bottom > rectContent.top) {
                return;
            }

            let offset = 0;

            if (rectMenuitem.top >= rectContent.bottom) {
                offset = rectMenuitem.bottom - rectContent.bottom;

            } else if (rectMenuitem.bottom <= rectContent.top) {
                offset = rectMenuitem.top - rectContent.top;
            }

            content.scrollTop = content.scrollTop + offset;
        },

        render: function () {
            const classes = classnames({
                [ tagName ]: true
            });

            const scrollTopStyle = {
                'display': (this.state.isShowScrollTop ? 'block' : 'none')
            };

            const scrollBottomStyle = {
                'display': (this.state.isShowScrollBottom ? 'block' : 'none')
            };

            const contentStyle = {
                'maxHeight': (this.state.maxHeight ? this.state.maxHeight + 'px' : 'none')
            };

            return (
                <div className={classes}>
                    <div style={scrollTopStyle}
                        className="_scroll-top"
                        onMouseEnter={this._onMouseEnterTop}
                        onMouseLeave={this._onMouseLeaveTop} />

                    <div ref={(ref) => this._content = ref}
                        style={contentStyle}
                        className="_content"
                        onScroll={this._onScroll}
                        onWheel={this._onWheel}>

                        {this.context.content(<div/>)}
                    </div>

                    <div style={scrollBottomStyle}
                        className="_scroll-bottom"
                        onMouseEnter={this._onMouseEnterBottom}
                        onMouseLeave={this._onMouseLeaveBottom} />
                </div>
            );
        }
    };
}
