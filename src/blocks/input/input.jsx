/** @jsx React.DOM */
/* global xblocks, React */
/* jshint strict: false */

var XBInputController = xblocks.view.create({
    displayName: 'XBInputController',

    render: function() {
        var classes;
        var content;


        if (this.props.multiline) {
            content = this.props.value || this.props.children;

            classes = React.addons.classSet(classes);

            return (
                <textarea className={classes}
                disabled={this.props.disabled ? 'disabled' : undefined}
                tabIndex={tabIndex}
                name={this.props.name}
                rows={this.props.rows}
                cols={this.props.cols}
                autoFocus={this.props.autofocus}>{content}</textarea>
                );

        } else {

            classes = React.addons.classSet(classes);

            return (
                <input className={classes}
                disabled={this.props.disabled ? 'disabled' : undefined}
                tabIndex={tabIndex}
                name={this.props.name}
                type="text"
                value={this.props.value}
                autoFocus={this.props.autofocus}/>
                );
        }
    }
});

xblocks.view.register('xb-input', {
    displayName: 'xb-input',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'name': React.PropTypes.string,
        'disabled': React.PropTypes.bool,
        'autosize': React.PropTypes.bool,
        'multiline': React.PropTypes.bool,
        'required': React.PropTypes.bool,
        'readonly': React.PropTypes.bool,
        'reset': React.PropTypes.bool,
        'autofocus': React.PropTypes.bool,
        'type': React.PropTypes.oneOf([
            'text', 'number', 'date', 'datetime', 'email', 'month',
            'range', 'search', 'tel', 'time', 'url', 'week', 'color'
        ]),
        'size': React.PropTypes.oneOf([ 's', 'm', 'l', 'xl' ]),
        'rows': React.PropTypes.string,
        'cols': React.PropTypes.string,
        'placeholder': React.PropTypes.string,
        'value': React.PropTypes.string,
        'prefix': React.PropTypes.string,
        'postfix': React.PropTypes.string,
        'tabindex': React.PropTypes.string
    },

    getDefaultProps: function() {
        return {
            'type': 'text'
        };
    },

    render: function() {
        var classes = {
            'xb-input': true,
            '_disabled': this.props.disabled,
            '_autosize': this.props.autosize
        };

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        if (this.props.postfix || this.props.prefix || this.props.reset || this.props.label || this.props.autosize) {
            classes._complex = true;
            classes = React.addons.classSet(classes);

            var children = [];

            if (this.props.label) {
                children.push(xblocks.view.get('xb-link')({
                    'type': 'input',
                    'key': 'label'
                }));
            }

            if (this.props.prefix) {
                children.push(<span key="prefix" className="_left">{this.props.prefix}</span>);
            }

            if (this.props.postfix) {
                children.push(<span key="postfix" className="_right">{this.props.postfix}</span>);
            }

            if (this.props.reset) {
                children.push(xblocks.view.get('xb-ico')({
                    'class': '_reset',
                    'type': 'remove',
                    'active': 'active',
                    'key': 'reset'
                }));
            }

            children.push(
                <span key="content" className="_content">
                    <XBInputController></XBInputController>
                    <span className="_view">&nbsp;</span>
                </span>
            );

            return (
                <label className={classes}>{children}</label>
            );

        } else {
            classes._simple = true;
            classes = React.addons.classSet(classes);

            return (
                <XBInputController className={classes}></XBInputController>
            );
        }
    }
});
