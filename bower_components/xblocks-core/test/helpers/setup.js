/* global afterEach, beforeEach, sinon */
(function() {

    function clearTestContext(context) {
        if (!context || typeof(context) !== 'object') {
            return;
        }

        for (var property in context) {
            if (context.hasOwnProperty(property)) {
                delete context[ property ];
            }
        }
    }

    beforeEach(function() {
        this.sinon = sinon.sandbox.create();
    });

    afterEach(function() {
        this.sinon.restore();
        clearTestContext(this);
    });

}());
