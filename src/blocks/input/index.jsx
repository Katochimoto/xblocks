var xv = require('context').xv;
var xblocks = require('xblocks');
var React = require('react');
var classnames = require('classnames');
var filterProps = require('utils/filterProps');
var Controller = require('./controller.jsx');

/**
 * The template node xb-input
 *
 * @class xv.Input
 * @memberof xv
 * @mixes React.addons.PureRenderMixin
 * @mixes xblocks.mixin.vCommonAttrs
 */
xv.Input = xblocks.view.register('xb-input', [
    require('mixin/view/commonAttrs'),
    require('utils/exportPropTypes')('xb-link'),

    {
        displayName: 'xb-input',

        mixins: [ React.addons.PureRenderMixin ],

        // @if NODE_ENV='development'
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
        // @endif

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
            this.refs.controller.dispatchEventToggleHint('', this.props.value);
        },

        /**
         * Remember current value in state
         * @param {Event} event
         * @private
         */
        onChange: function (event) {
            this.setState({
                'value': event.target.value
            });
        },

        /**
         * Show or hide placeholder
         * @param {boolean} toggle
         * @private
         */
        onHintToggle: function (toggle) {
            this.refs.placeholder.style.visibility = (toggle ? 'inherit' : 'hidden');
        },

        /**
         * Click reset button
         * @private
         */
        onClickReset: function () {
            this.setState({
                'value': ''
            });
        },

        /**
         * Check show complex input
         * @returns {boolean}
         * @private
         */
        isComplex: function () {
            return Boolean(
                this.props.postfix ||
                this.props.prefix ||
                this.props.reset ||
                this.props.autosize ||
                this.props['xb-link'] ||
                this.props.placeholder
            );
        },

        render: function () {
            var isComplex = this.isComplex();
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
                'onChange':     this.onChange,
                'onHintToggle': this.onHintToggle,
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
                        <span key="reset" className="_reset" onClick={this.onClickReset}></span>
                    );
                }

                children.push(
                    <span key="content" className="_content">
                        <Controller {...controllerProps}
                            isPlaceholderHint={isPlaceholderHint} />
                        <span key="view" className="_view"></span>
                    </span>
                );

                return (
                    <label className={classes}>{children}</label>
                );

            } else {

                return (
                    <Controller {...controllerProps}
                        className={classes}
                        isPlaceholderHint={isPlaceholderHint} />
                );
            }
        }
    }
]);

module.exports = xv.Input;
