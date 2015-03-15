/* global xblocks, React */
/* jshint strict: false */

/**
 * Common attributes
 *
 * @memberOf xblocks.mixin
 * @type {object}
 * @prop {object} propTypes
 * @prop {string} propTypes.accesskey
 * @prop {string} propTypes.contextmenu
 * @prop {enum} propTypes.dir
 * @prop {boolean} propTypes.hidden
 * @prop {boolean} propTypes.spellcheck
 * @prop {string} propTypes.tabindex
 * @prop {string} propTypes.title
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
