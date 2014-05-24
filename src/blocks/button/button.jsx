/** @jsx React.DOM */
(function(xblocks, React) {

    var XBButtonContent = xblocks.view.create({
        displayName: 'XBButtonContent',

        propTypes: {
            '_uid': React.PropTypes.string,

            'content': React.PropTypes.renderable,
            'ico': React.PropTypes.object
        },

        statics: {
            mapIcoProps: function(props) {
                var regIcoProp = /^xb-ico-/;
                return xblocks.utils.mapObject(props, function(name, descr) {
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
            return !xblocks.utils.equals(nextProps, this.props);
        },

        render: function() {
            var icoProps = XBButtonContent.mapIcoProps(this.props.ico);

            var children = [
                <span key="content" data-xb-content={this.props._uid}>{this.props.content}</span>
            ];

            if (!xblocks.utils.isEmptyObject(icoProps) && icoProps.type) {
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
                <span className="_content">
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
            'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
            'theme': React.PropTypes.oneOf([
                'normal',
                'action',
                'dark',
                'pseudo',
                'promo',
                'flying',
                'pseudo-inverted'
            ]),
            'checked': React.PropTypes.bool,

            'type': React.PropTypes.oneOf([ 'button', 'file', 'submit', 'label', 'span' ]),
            'target': React.PropTypes.oneOf([ '_blank', '_self', '_parent', '_top' ]),
            'value': React.PropTypes.string,
            'href': React.PropTypes.string,
            'name': React.PropTypes.string,
            'title': React.PropTypes.string,
            'form': React.PropTypes.string,
            'for': React.PropTypes.string,
            'multiple': React.PropTypes.bool,
            'autofocus': React.PropTypes.bool,
            'disabled': React.PropTypes.bool
        },

        statics: {
            filterIcoProps: function(props) {
                var regIcoProp = /^xb-ico-/;
                return xblocks.utils.filterObject(props, function(name) {
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
                '_disabled': this.props.disabled,
                '_checked': this.props.checked
            };

            if (this.props.theme) {
                classes['_theme-' + this.props.theme] = true;
            }

            if (this.props.size) {
                classes['_size-' + this.props.size] = true;
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

                        <span className="_file-intruder">
                            <span className="_file-intruder-inner">
                                <input className="_file-intruder-input"
                                    type="file"
                                    name={this.props.name}
                                    title={this.props.title}
                                    disabled={this.props.disabled ? 'disabled' : ''}
                                    multiple={this.props.multiple ? 'multiple' : ''} />

                                <span className="_file-intruder-focus" />
                            </span>
                        </span>
                        <XBButtonContent _uid={this.props._uid} ico={icoProps} content={this.props.children} />
                    </label>
                );

            } else if (this.props.type === 'label') {
                return (
                    <label className={classes}
                        form={this.props.form}
                        for={this.props.for}
                        autoFocus={this.props.autofocus}>

                        <XBButtonContent _uid={this.props._uid} ico={icoProps} content={this.props.children} />
                    </label>
                );

            } else if (this.props.type === 'span') {
                return (
                    <span className={classes}>
                        <XBButtonContent _uid={this.props._uid} ico={icoProps} content={this.props.children} />
                    </span>
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
