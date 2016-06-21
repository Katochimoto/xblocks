import _ from 'lodash';
import xtag from 'xtag';

/**
 * @example
 * "scroll:debounce(100,true,false)": function () {}
 *
 * @type {Object}
 */
xtag.pseudos.debounce = {
    onCompiled: function (listener, pseudo) {
        var len = pseudo.arguments.length;
        var wait = Number(pseudo.arguments[0]);
        var leading = true;
        var trailing = false;

        if (len > 1) {
            leading = (pseudo.arguments[1] === 'true');
        }

        if (len > 2) {
            trailing = (pseudo.arguments[2] === 'true');
        }

        return _.debounce(listener, wait, {
            leading: leading,
            trailing: trailing
        });
    }
};

/**
 * @example
 * "scroll:throttle(100,true,false)": function () {}
 *
 * @type {Object}
 */
xtag.pseudos.throttle = {
    onCompiled: function (listener, pseudo) {
        var len = pseudo.arguments.length;
        var wait = Number(pseudo.arguments[0]);
        var leading = true;
        var trailing = false;

        if (len > 1) {
            leading = (pseudo.arguments[1] === 'true');
        }

        if (len > 2) {
            trailing = (pseudo.arguments[2] === 'true');
        }

        return _.throttle(listener, wait, {
            leading: leading,
            trailing: trailing
        });
    }
};
