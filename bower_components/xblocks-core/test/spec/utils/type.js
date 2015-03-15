/* global describe, it, expect, xblocks, beforeEach */
/* jshint strict: false */

describe('xblocks.utils.type ->', function() {
    beforeEach(function() {
        this.util = xblocks.utils.type;
    });

    [
        [ '', 'string' ],
        [ true, 'boolean' ],
        [ 1, 'integer' ],
        [ 1.1, 'float' ],
        [ ({}), 'object' ],
        [ (function() {}), 'function' ],
        [ null, 'null' ],
        [ undefined, 'undefined' ],
        [ NaN, 'NaN' ],
        [ /123/, 'regexp' ],
        /* jshint -W053 */
        [ (new String('')), 'string' ],
        /* jshint -W010 */
        [ (new Object()), 'object' ],
        [ (new RegExp('123')), 'regexp' ],
        /* jshint -W054 */
        [ (new Function('')), 'function' ],
        [ (new Date()), 'date' ],
        [ Math, 'math' ]
    ].forEach(function(params) {
            it('Должен вернуть строку с типом: ' + JSON.stringify(params), function() {
                expect(this.util(params[0])).to.be(params[1]);
            });
        });
});
