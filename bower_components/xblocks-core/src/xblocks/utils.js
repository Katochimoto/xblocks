/* global xblocks */
/* jshint strict: false */

/**
 * @namespace
 */
xblocks.utils = xblocks.utils || {};

xblocks.utils.REG_TYPE_EXTRACT = /\s([a-zA-Z]+)/;
xblocks.utils.REG_PRISTINE = /^[\$_a-z][\$\w]*$/i;

xblocks.utils.SELECTOR_TMPL = 'script[type="text/x-template"][ref],template[ref]';
xblocks.utils.SELECTOR_CONTENT = 'script[type="text/x-template"]:not([ref]),template:not([ref])';

/*! borschik:include:utils/log.js */
/*! borschik:include:utils/seq.js */
/*! borschik:include:utils/type.js */
/*! borschik:include:utils/isPlainObject.js */
/*! borschik:include:utils/pristine.js */
/*! borschik:include:utils/merge.js */
/*! borschik:include:utils/lazy.js */
/*! borschik:include:utils/equals.js */
/*! borschik:include:utils/propTypes.js */
/*! borschik:include:utils/tmpl.js */
