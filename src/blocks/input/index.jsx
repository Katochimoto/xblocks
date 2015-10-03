var xblocks = require('xblocks');
var React = require('react');
var classnames = require('classnames');

var InputController = require('./_controller.jsx');

/**
 * The template node xb-input
 *
 * @class xv.Input
 * @memberof xv
 * @mixes React.addons.PureRenderMixin
 * @mixes xblocks.mixin.vCommonAttrs
 */
module.exports = xblocks.view.register('xb-input', [
    require('mixin/view/commonAttrs'),
    require('utils/exportPropTypes')('xb-link'),

    {
        displayName: 'xb-input',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'autocomplete': React.PropTypes.oneOf([ 'on', 'off' ]),
            'autofocus':    React.PropTypes.bool,
            'autosize':     React.PropTypes.bool,
            'cols':         React.PropTypes.string,
            'ghost':        React.PropTypes.bool,
            'multiline':    React.PropTypes.bool,
            'name':         React.PropTypes.string,
            'placeholder':  React.PropTypes.string,
            'postfix':      React.PropTypes.string,
            'prefix':       React.PropTypes.string,
            'readonly':     React.PropTypes.bool,
            'required':     React.PropTypes.bool,
            'reset':        React.PropTypes.bool,
            'rows':         React.PropTypes.string,
            'size':         React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'type':         React.PropTypes.oneOf([ 'text', 'number', 'date', 'datetime', 'email', 'month', 'range', 'search', 'tel', 'time', 'url', 'week', 'color', 'wysiwyg' ]),
            'value':        React.PropTypes.string,
            'xb-link':      React.PropTypes.string
        },

        getDefaultProps: function () {
            return {
                'autofocus':    false,
                'autosize':     false,
                'disabled':     false,
                'ghost':        false,
                'multiline':    false,
                'readonly':     false,
                'required':     false,
                'reset':        false,
                'rows':         '4',
                'size':         'm',
                'type':         'text',
                'value':        undefined
            };
        },

        getInitialState: function () {
            return {
                'value': this.props.value
            };
        },

        componentDidMount: function () {
            // check show or hide placeholder after mount element
            this.refs.controller._dispatchEventToggleHint('', this.props.value);
        },

        /**
         * Remember current value in state
         * @param {Event} event
         * @private
         */
        _onChange: function (event) {
            this.setState({
                'value': event.target.value
            });
        },

        /**
         * Show or hide placeholder
         * @param {boolean} toggle
         * @private
         */
        _onHintToggle: function (toggle) {
            React.findDOMNode(this.refs.placeholder).style.visibility = (toggle ? 'inherit' : 'hidden');
        },

        /**
         * Check show complex input
         * @returns {boolean}
         * @private
         */
        _isComplex: function () {
            return Boolean(
                this.props.postfix ||
                this.props.prefix ||
                this.props.reset ||
                this.props.autosize ||
                this.props['xb-link'] ||
                this.props.placeholder
            );
        },

        /**
         * Click reset button
         * @private
         */
        _onClickReset: function () {
            this.setState({
                'value': ''
            });
        },

        render: function () {
            var isComplex = this._isComplex();
            var classes = {
                'xb-input':     true,
                '_disabled':    this.props.disabled,
                '_autosize':    this.props.autosize,
                '_ghost':       this.props.ghost,
                '_complex':     isComplex,
                '_simple':      !isComplex
            };

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classnames(classes);

            var isPlaceholderHint = false;
            var controllerProps = {
                'autoFocus':    this.props.autofocus,
                'autocomplete': this.props.autocomplete,
                'autosize':     this.props.autosize,
                'className':    '_controller',
                'cols':         this.props.cols,
                'disabled':     this.props.disabled,
                'key':          'controller',
                'multiline':    this.props.multiline,
                'name':         this.props.name,
                'onChange':     this._onChange,
                'onHintToggle': this._onHintToggle,
                'readOnly':     this.props.readonly,
                'ref':          'controller',
                'required':     this.props.required,
                'rows':         this.props.rows,
                'tabIndex':     this.props.tabindex,
                'value':        this.state.value
            };

            if (isComplex) {
                var children = [];

                if (this.props.placeholder) {
                    isPlaceholderHint = true;

                    children.push(
                        <span ref="placeholder" key="placeholder" className="_hint">
                            <span className="_hint-inner">{this.props.placeholder}</span>
                        </span>
                    );
                }

                if (this.props['xb-link']) {
                    var linkProps = filterProps(/^xb-link-/, this.props);
                    linkProps['theme'] = 'empty';
                    linkProps['key'] = 'label';

                    children.push(
                        <xb-link {...linkProps}>{this.props['xb-link']}</xb-link>
                    );
                }

                if (this.props.prefix) {
                    children.push(
                        <span key="prefix" className="_left">{this.props.prefix}</span>
                    );
                }

                if (this.props.postfix) {
                    children.push(
                        <span key="postfix" className="_right">{this.props.postfix}</span>
                    );
                }

                if (this.props.reset) {
                    children.push(
                        <span key="reset" className="_reset" onClick={this._onClickReset}></span>
                    );
                }

                children.push(
                    <span key="content" className="_content">
                        <InputController {...controllerProps} isPlaceholderHint={isPlaceholderHint} />
                        <span key="view" className="_view"></span>
                    </span>
                );

                return (
                    <label className={classes}>{children}</label>
                );

            } else {

                return (
                    <InputController {...controllerProps} className={classes} isPlaceholderHint={isPlaceholderHint} />
                );
            }
        }
    }
]);
