/* global xblocks, React */
/* jshint strict: false */

/**
 * @memberOf xblocks.mixin
 * @name vCommonAttrs
 * @type {Object}
 */
xblocks.mixin.vCommonAttrs = {
    'propTypes': {
        'accesskey':    React.PropTypes.string,
        'contextmenu':  React.PropTypes.string,
        'dir':          React.PropTypes.oneOf([ 'ltr', 'rtl' ]),
        'hidden':       React.PropTypes.bool,
        'spellcheck':   React.PropTypes.bool,
        'tabindex':     React.PropTypes.string,
        'title':        React.PropTypes.string
    }
};
