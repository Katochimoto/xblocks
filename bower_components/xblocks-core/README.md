# xblocks-core [![Build Status][build]][build-link] [![NPM version][version]][version-link]
[build]: https://travis-ci.org/Katochimoto/xblocks-core.png?branch=master
[build-link]: https://travis-ci.org/Katochimoto/xblocks-core
[version]: https://badge.fury.io/js/xblocks-core.png
[version-link]: http://badge.fury.io/js/xblocks-core


HTML core custom elements

##Dependencies

- [React.js](https://github.com/facebook/react)
- [X-Tag core](https://github.com/x-tag/core)
- [es5-shim](https://github.com/es-shims/es5-shim)

##Example
```js
// define jsx view
xblocks.view.register('xb-ico', {
    displayName: 'xb-ico',

    propTypes: {
        'id': React.PropTypes.string,
        'class': React.PropTypes.string,
        'alt': React.PropTypes.string,
        'size': React.PropTypes.oneOf(['s', 'm', 'l', 'xl']),
        'type': React.PropTypes.oneOf(['remove', 'notification', 'check', 'dropdown']),
        'active': React.PropTypes.bool,
        'disabled': React.PropTypes.bool
    },

    getDefaultProps: function() {
        return {
            'size': 'm',
            'children': String.fromCharCode(160)
        };
    },

    render: function() {
        var classes = {
            'xb-ico': true,
            '_active': this.props.active,
            '_disabled': this.props.disabled
        };

        if (this.props.type) {
            classes['_type-' + this.props.type] = true;
        }

        if (this.props.size) {
            classes['_size-' + this.props.size] = true;
        }

        classes = React.addons.classSet(classes);

        return (
            <span className={classes}
                data-xb-content={this.props._uid}>{this.props.children}</span>
        );
    }
});
```

```js
// define element
xblocks.create('xb-ico');
```

```html
<!-- element usage -->
<xb-ico type="notification">8</xb-ico>
```


##Install

```
npm install xblocks-core
```
```
bower install xblocks-core
```
