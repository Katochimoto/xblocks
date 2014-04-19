/** @jsx React.DOM */
(function(xblocks, React) {

    var XBButtonContent = React.createClass({
        getDefaultProps: function() {
            return { 'content': ' ' };
        },

        shouldComponentUpdate: function(nextProps) {
            return (nextProps.content !== this.props.content);
        },

        render: function() {
            var XBIco = xblocks.view.get('xb-ico');

            return (
                <span className="xb-button__text">
                    <span className="_content">{this.props.content}</span>
                    <XBIco type="remove" />
                </span>
            );
        }
    });

    xblocks.view.register('xb-button', {
        displayName: 'xb-button',

        propTypes: {
            'id': React.PropTypes.string,
            'class': React.PropTypes.string,
            'children': React.PropTypes.renderable,
            'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
            'theme': React.PropTypes.oneOf(['normal', 'action', 'dark', 'pseudo', 'promo']),
            'checked': React.PropTypes.bool,
            'flying': React.PropTypes.bool,

            'type': React.PropTypes.oneOf(['button', 'file', 'submit']),
            'target': React.PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
            'value': React.PropTypes.string,
            'href': React.PropTypes.string,
            'name': React.PropTypes.string,
            'form': React.PropTypes.string,
            'multiple': React.PropTypes.bool,
            'autofocus': React.PropTypes.bool,
            'disabled': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'size': 'm',
                'theme': 'normal',
                'type': 'button'
            };
        },

        render: function() {
            var cx = React.addons.classSet;
            var classes = {
                'xb-button': true,
                'is-disabled': this.props.disabled,
                'xb-button_flying': this.props.flying,
                'xb-button_checked': this.props.checked,
                'xb-button_type_attach': (this.props.type === 'file')
            };

            if (this.props.theme) {
                classes['xb-button_theme_' + this.props.theme] = true;
            }

            if (this.props.size) {
                classes['xb-button_size_' + this.props.size] = true;
            }

            classes = cx(classes);

            if (this.props.href) {
                return (
                    <a className={classes}
                        href={this.props.href}
                        name={this.props.name}
                        target={this.props.target}
                        autoFocus={this.props.autofocus}>

                        <XBButtonContent content={this.props.children} />
                    </a>
                );

            } else if (this.props.type === 'file') {
                return (
                    <label className={classes}
                        autoFocus={this.props.autofocus}>

                        <span className="nb-file-intruder">
                            <span className="nb-file-intruder__inner">
                                <input className="nb-file-intruder__input"
                                    type="file"
                                    name={this.props.name}
                                    disabled={this.props.disabled ? 'disabled' : ''}
                                    multiple={this.props.multiple ? 'multiple' : ''} />

                                <span className="nb-file-intruder__focus" />
                            </span>
                        </span>
                        <XBButtonContent content={this.props.children} />
                    </label>
                );

            } else {
                return (
                    <button className={classes}
                        type={this.props.type}
                        form={this.props.form}
                        name={this.props.name}
                        value={this.props.value}
                        disabled={this.props.disabled ? 'disabled' : ''}
                        autoFocus={this.props.autofocus}>

                        <XBButtonContent content={this.props.children} />
                    </button>
                );
            }
        }
    });

}(xblocks, React));
