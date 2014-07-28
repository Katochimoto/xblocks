(function(global, undefined) {
    'use strict';

    var Tether = global.Tether;

    var React = global.React;

    /**
     * HTML custom elements
     * @namespace xblocks
     * @version 0.2.4
     */
    var xblocks = global.xblocks;


    xblocks.utils.REG_PROPS_PREFIX_LINK = /^xb-link-/;
    xblocks.utils.REG_PROPS_PREFIX_ICO = /^xb-ico-/;

    xblocks.utils.exportPropTypes = function(tagName) {
        var props = xblocks.utils.propTypes(tagName);
        var exportProps = {};
        var prefix = tagName + '-';

        for (var p in props) {
            if (props.hasOwnProperty(p) && p[0] !== '_') {
                exportProps[prefix + p] = props[p];
            }
        }

        return {
            'propTypes': exportProps
        };
    };

    xblocks.utils.filterPropsPrefixLink = function(name) {
        return xblocks.utils.REG_PROPS_PREFIX_LINK.test(name);
    };

    xblocks.utils.mapPropsPrefixLink = function(name, descr) {
        return {
            'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_LINK, ''),
            'descr': descr
        };
    };

    xblocks.utils.filterPropsPrefixIco = function(name) {
        return xblocks.utils.REG_PROPS_PREFIX_ICO.test(name);
    };

    xblocks.utils.mapPropsPrefixIco = function(name, descr) {
        return {
            'name': name.replace(xblocks.utils.REG_PROPS_PREFIX_ICO, ''),
            'descr': descr
        };
    };

    xblocks.utils.compact = function(data) {
        for (var prop in data) {
            if (data.hasOwnProperty(prop)) {
                if (!data[prop]) {
                    delete data[prop];
                }
            }
        }

        return data;
    };

    xblocks.utils.toAttrsName = function(name) {
        switch (name) {
            case 'class':
                return 'className';
            case 'tabindex':
                return 'tabIndex';
            case 'autofocus':
                return 'autoFocus';
            case 'checked':
                return 'defaultChecked';
            case 'readonly':
                return 'readOnly';
            case 'for':
                return 'htmlFor';
            default:
                return name;
        }
    };

    xblocks.utils.normalizeAttrsName = function(data) {
        var attrs = {};
        Object.keys(data).forEach(function(key) {
            attrs[xblocks.utils.toAttrsName(key)] = data[key];
        });
        return attrs;
    };

    /**
     * @memberOf xblocks
     * @namespace xblocks.mixin
     */
    xblocks.mixin = {};

    /*! borschik:include:mixin/eDisabled.js */
    /*! borschik:include:mixin/eChecked.js */
    /*! borschik:include:mixin/eInputValueState.js */
    /*! borschik:include:mixin/eInputValueProps.js */
    /*! borschik:include:mixin/eFocus.js */

    /*! borschik:include:mixin/vChecked.js */
    /*! borschik:include:mixin/vCommonAttrs.js */

    /*! borschik:include:blocks/ico/ico.js */
    /*! borschik:include:blocks/link/link.js */
    /*! borschik:include:blocks/button/button.js */
    /*! borschik:include:blocks/input/input.js */
    /*! borschik:include:blocks/checkbox/checkbox.js */
    /*! borschik:include:blocks/radio/radio.js */
    /*! borschik:include:blocks/popup/popup.js */
    /*! borschik:include:blocks/menu/menu.js */
    /*! borschik:include:blocks/select/select.js */

}(function() {
    return this || (1, eval)('this');
}()));
