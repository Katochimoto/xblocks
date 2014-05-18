/** @jsx React.DOM */
(function(xblocks, React) {

    var XBButtonContent = xblocks.view.create({
        propTypes: {
            '_uid': React.PropTypes.string,

            'content': React.PropTypes.renderable,
            'ico': React.PropTypes.object
        },

        statics: {
            mapIcoProps: function(props) {
                var regIcoProp = /^xb-ico-/;
                return xblocks.mapObject(props, function(name, descr) {
                    return {
                        'name': name.replace(regIcoProp, ''),
                        'descr': descr
                    };
                });
            }
        },

        getDefaultProps: function() {
            return {
                '_uid': '',
                'content': String.fromCharCode(160),
                'ico': {}
            };
        },

        shouldComponentUpdate: function(nextProps) {
            return !xblocks.equals(nextProps, this.props);
        },

        render: function() {
            var icoProps = XBButtonContent.mapIcoProps(this.props.ico);

            var children = [
                <span key="content" data-xb-content={this.props._uid}>{this.props.content}</span>
            ];

            if (!xblocks.isEmptyObject(icoProps) && icoProps.type) {
                icoProps.key = 'ico';
                var icoView = xblocks.view.get('xb-ico')(icoProps);

                if (!icoProps.float || icoProps.float === 'left') {
                    children.unshift(<span key="sep">&nbsp;</span>);
                    children.unshift(icoView);

                } else if (icoProps.float === 'right') {
                    children.push(<span key="sep">&nbsp;</span>);
                    children.push(icoView);
                }
            }

            return (
                <span className="xb-button__text">
                    {children}
                </span>
            );
        }
    });

    var XBButton = xblocks.view.register('xb-button', {
        displayName: 'xb-button',

        propTypes: {
            '_uid': React.PropTypes.string,

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

        statics: {
            filterIcoProps: function(props) {
                var regIcoProp = /^xb-ico-/;
                return xblocks.filterObject(props, function(name) {
                    return regIcoProp.test(name);
                });
            }
        },

        getDefaultProps: function() {
            return {
                '_uid': '',
                'size': 'm',
                'theme': 'normal',
                'type': 'button',
                'children': String.fromCharCode(160)
            };
        },

        render: function() {
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

            classes = React.addons.classSet(classes);

            var icoProps = XBButton.filterIcoProps(this.props);

            if (this.props.href) {
                return (
                    <a className={classes}
                        href={this.props.href}
                        name={this.props.name}
                        target={this.props.target}
                        autoFocus={this.props.autofocus}>

                        <XBButtonContent _uid={this.props._uid} ico={icoProps} content={this.props.children} />
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
                        <XBButtonContent _uid={this.props._uid} ico={icoProps} content={this.props.children} />
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

                        <XBButtonContent _uid={this.props._uid} ico={icoProps} content={this.props.children} />
                    </button>
                );
            }
        }
    });

}(xblocks, React));
