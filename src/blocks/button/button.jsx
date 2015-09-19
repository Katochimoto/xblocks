'use strict';

var React = require('react');
var classnames = require('classnames');
var view = require('xblocks/view');
var ButtonContent = require('./button-content.jsx');

/**
 * The template node xb-button
 *
 * @mixes React.addons.PureRenderMixin
 * @mixes xblocks.mixin.vCommonAttrs
 */
module.exports = view.register('xb-button', [
    xblocks.mixin.vCommonAttrs,
    xblocks.utils.exportPropTypes('xb-ico'),

    {
        displayName: 'xb-button',

        mixins: [ React.addons.PureRenderMixin ],

        propTypes: {
            'autofocus':    React.PropTypes.bool,
            'checked':      React.PropTypes.bool,
            'for':          React.PropTypes.string,
            'form':         React.PropTypes.string,
            'href':         React.PropTypes.string,
            'multiple':     React.PropTypes.bool,
            'name':         React.PropTypes.string,
            'required':     React.PropTypes.bool,
            'size':         React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'target':       React.PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
            'theme':        React.PropTypes.oneOf([ 'action', 'dark', 'flying', 'normal', 'promo', 'pseudo-inverted', 'pseudo' ]),
            'type':         React.PropTypes.oneOf([ 'label', 'inline', 'link', 'file', 'button', 'submit', 'checkbox', 'radio' ]),
            'value':        React.PropTypes.string
        },

        getDefaultProps: function() {
            return {
                'autofocus':    false,
                'checked':      false,
                'children':     String.fromCharCode(160),
                'disabled':     false,
                'multiple':     false,
                'required':     false,
                'size':         'm',
                'tabindex':     '0',
                'theme':        'normal',
                'type':         'button'
            };
        },

        getInitialState: function() {
            return {
                'checked': this.props.checked
            };
        },

        componentWillReceiveProps: function(nextProps) {
            this.setState({
                'checked': Boolean(nextProps.checked)
            });
        },

        componentWillUpdate: function(nextProps, nextState) {
            if (nextProps.type === 'radio' && nextState.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), nextProps.name);
            }
        },

        componentWillMount: function() {
            if (this.props.type === 'radio' && this.state.checked) {
                xblocks.utils.resetLastRadioChecked(this.container(), this.props.name);
            }
        },

        _onChange: function(event) {
            this.container().checked = event.target.checked;
        },

        render: function() {
            var classes = {
                'xb-button': true,
                '_disabled': this.props.disabled
            };

            if (this.props.theme) {
                classes[ '_theme-' + this.props.theme ] = true;
            }

            if (this.props.size) {
                classes[ '_size-' + this.props.size ] = true;
            }

            classes = classnames(classes);

            var icoProps = xblocks.utils.filterIcoProps(this.props);
            var tabIndex = this.props.tabindex;
            var type = this.props.type;

            if (this.props.disabled) {
                tabIndex = '-1';
            }

            var content = (
                <ButtonContent key="content" _uid={this.props._uid} ico={icoProps}>
                    {this.props.children}
                </ButtonContent>
            );

            if (type === 'link') {
                return (
                    <a className={classes}
                        href={this.props.href}
                        name={this.props.name}
                        target={this.props.target}
                        title={this.props.title}
                        tabIndex={tabIndex}>

                        {content}
                    </a>
                );

            } else if (type === 'file') {
                return (
                    <label className={classes}>
                        <span className="_xb-file-intruder">
                            <span className="_xb-file-intruder-inner">
                                <input className="_xb-file-intruder-input"
                                    type="file"
                                    name={this.props.name}
                                    title={this.props.title}
                                    disabled={this.props.disabled}
                                    multiple={this.props.multiple}
                                    autoFocus={this.props.autofocus}
                                    form={this.props.form}
                                    tabIndex={tabIndex}/>

                                <span className="_xb-file-intruder-focus" />
                            </span>
                        </span>
                        {content}
                    </label>
                );

            } else if (type === 'label' || type === 'checkbox' || type === 'radio') {
                var children = [];

                if (type === 'checkbox' || type === 'radio') {
                    children.push(
                        <input key="checkControl"
                            type={type}
                            className="_xb-check_controller"
                            name={this.props.name}
                            value={this.props.value}
                            form={this.props.form}
                            disabled={this.props.disabled}
                            defaultChecked={this.props.checked}
                            checked={this.state.checked}
                            autoFocus={this.props.autofocus}
                            readOnly={true}
                            onChange={this._onChange}
                            required={this.props.required}
                            tabIndex={tabIndex}/>
                    );

                    var buttonProps = xblocks.utils.merge({}, this.props, {
                        'key': 'content',
                        'type': 'inline',
                        'tabindex': null
                    });

                    children.push(
                        <xv.Button {...buttonProps} />
                    );

                    classes = classnames({
                        'xb-button': true,
                        '_theme-check': true,
                        '_disabled': this.props.disabled
                    });

                } else {
                    children.push(
                        <span key="file-intruder" className="_xb-file-intruder">
                            <span className="_xb-file-intruder-inner">
                                <input className="_xb-file-intruder-input"
                                    type="button"
                                    form={this.props.form}
                                    disabled={this.props.disabled}
                                    autoFocus={this.props.autofocus}
                                    tabIndex={tabIndex}/>

                                <span className="_xb-file-intruder-focus" />
                            </span>
                        </span>
                    );

                    children.push(content);
                }

                return (
                    <label className={classes} htmlFor={this.props['for']} title={this.props.title}>
                        {children}
                    </label>
                );

            } else if (type === 'inline') {
                return (
                    <span className={classes} tabIndex={tabIndex}>
                        {content}
                    </span>
                );

            } else {
                return (
                    <button className={classes}
                        type={type}
                        form={this.props.form}
                        title={this.props.title}
                        name={this.props.name}
                        value={this.props.value}
                        tabIndex={tabIndex}
                        disabled={this.props.disabled}
                        autoFocus={this.props.autofocus}>

                        {content}
                    </button>
                );
            }
        }
    }
]);
