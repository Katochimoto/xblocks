/** @jsx React.DOM */
(function(xblocks, React) {

    xblocks.view.register('xb-button', React.createClass({
        displayName: 'xb-button',

        propTypes: {
            'id': React.PropTypes.string,
            'class': React.PropTypes.string,
            'href': React.PropTypes.string,
            'name': React.PropTypes.string,
            'children': React.PropTypes.renderable,
            'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
            'type': React.PropTypes.oneOf(['button', 'file', 'submit']),
            'target': React.PropTypes.oneOf(['_blank', '_self', '_parent', '_top']),
            'theme': React.PropTypes.oneOf(['normal', 'action', 'dark', 'pseudo', 'promo']),
            'disabled': React.PropTypes.bool,
            'checked': React.PropTypes.bool,
            'multiple': React.PropTypes.bool,
            'flying': React.PropTypes.bool
        },

        getDefaultProps: function() {
            return {
                'size': 'm',
                'theme': 'normal'
            };
        },

        render: function() {
            var cx = React.addons.classSet;
            var classes = {
                'xb-button': true,
                'is-disabled': this.props.disabled,
                'xb-button_flying': this.props.flying,
                'xb-button_checked': this.props.checked
            };

            if (this.props.theme) {
                classes['xb-button_theme_' + this.props.theme] = true;
            }

            if (this.props.size) {
                classes['xb-button_size_' + this.props.size] = true;
            }

            classes = cx(classes);

            var children = this.props.children || ' ';

            // name={this.props.name} disabled={this.props.disabled ? 'disabled' : ''}

            if (this.props.href) {
                return (
                    <a className={classes}>
                        <span className="xb-button__text _content">{children}</span>
                    </a>
                );

            } else if (this.props.type === 'file') {
                return (
                    <label className="xb-button xb-button_type_attach">
                        <span className="nb-file-intruder">
                            <span className="nb-file-intruder__inner">
                                <input className="nb-file-intruder__input" type="file"></input>
                                <span className="nb-file-intruder__focus"></span>
                            </span>
                        </span>
                        <span className="xb-button__text">{children}</span>
                    </label>
                );

            } else {
                return (
                    <button className={classes}>
                        <span className="xb-button__text _content">{children}</span>
                    </button>
                );
            }
        }
    }));

}(xblocks, React));
