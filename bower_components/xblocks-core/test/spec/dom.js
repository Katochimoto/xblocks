/* global describe, it, expect, xblocks */
/* jshint strict: false */

describe('xblocks.dom', function() {
    describe('xblocks.dom.attrs', function() {
        describe('#toObject', function() {
            it('Должен вернуть объект атрибутов элемента', function() {
                var expectAttrs = {};

                var element = document.createElement('div');
                xblocks.dom.attrs.ARRTS_BOOLEAN.forEach(function(attrName) {
                    expectAttrs[ attrName ] = attrName;
                    element.setAttribute(attrName, attrName);
                });

                element.setAttribute('testboolean1', 'true');
                expectAttrs.testboolean1 = 'true';

                element.setAttribute('testboolean2', 'false');
                expectAttrs.testboolean2 = 'false';

                element.setAttribute('testattr', 'testValue');
                expectAttrs.testattr = 'testValue';

                expect(xblocks.dom.attrs.toObject(element)).to.be.eql(expectAttrs);
            });
        });
    });

});
