(function(Modernizr) {
    'use strict';

    /** @namespace Modernizr */

    /**
     * @property {boolean} createshadowroot поддержка возможности создания теневых узлов
     * @memberOf Modernizr
     */

    /**
     * @property {boolean} stylescoped поддержка области действия инлайн css
     * @memberOf Modernizr
     */

    Modernizr.addTest('createshadowroot', 'createShadowRoot' in document.createElement('div'));
    Modernizr.addTest('stylescoped', 'scoped' in document.createElement('style'));

})(Modernizr);
