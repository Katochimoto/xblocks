/* global describe, it, expect, xblocks, beforeEach */
/* jshint strict: false */

describe('xblocks.utils.pristine ->', function() {
    beforeEach(function() {
        this.util = xblocks.utils.pristine;
    });

    it('Должна вернуть true, если глобальный объект не переопределен', function() {
        expect(this.util('setTimeout')).to.be.ok();
    });

    it('Должна вернуть false, если глобальный объект переопределен', function() {
        this.sinon.stub(window, 'setTimeout');
        expect(this.util('setTimeout')).to.not.ok();
        window.setTimeout.restore();
    });

    it('Должна вернуть false, если название не указано', function() {
        expect(this.util()).to.not.ok();
    });

    it('Должна вернуть false, если глобальная функция не найдена', function() {
        expect(this.util('undefined_function')).to.not.ok();
    });

    it('Должна вернуть false, если в названии недопустимые символы', function() {
        window['name-function'] = function() {};
        expect(this.util('name-function')).to.not.ok();
        delete window['name-function'];
    });

    it('Должна вернуть false, если тип не функция и не объект', function() {
        window['nameFunction1'] = true;
        expect(this.util('nameFunction1')).to.not.ok();
        delete window['nameFunction1'];
    });

    it('Должна вернуть false, если тип функция но valueOf не определено или возвращает не название', function() {
        window['nameFunction2'] = function() {};
        window['nameFunction2'].valueOf = function() { return 'blabla'; };
        window['nameFunction2'].toString = function() { return 'function nameFunction2(){[native code]}'; };
        expect(this.util('nameFunction2')).to.not.ok();
        delete window['nameFunction2'];
    });
});
