(function(Modernizr) {


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

})(Modernizr);
