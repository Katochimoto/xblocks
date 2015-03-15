/* global describe, it, expect, xblocks, beforeEach */
/* jshint strict: false */

describe('xblocks.utils.merge ->', function() {
    beforeEach(function() {
        this.util = xblocks.utils.merge;
    });

    it('Должен вернуть объединенный объект', function() {
        var obj = { test1: 1 };
        this.util(obj, { test2: 2 });
        expect(obj).to.be.eql({ test1: 1, test2: 2 });
    });

    it('Должен вернуть объединенный объект, без учета вложенности', function() {
        var obj = { test1: { test2: 2 } };
        this.util(obj, { test1: 1 }, { test2: 2 });
        expect(obj).to.be.eql({ test1: 1, test2: 2 });
    });

    it('Если первый аргумент true, должен вернуть объединенный объект, с учетом вложенности', function() {
        var obj = { test1: { test2: 2 } };
        this.util(true, obj, { test1: { test3: 3 } }, { test4: 4 });
        expect(obj).to.be.eql({ test1: { test2: 2, test3: 3 }, test4: 4 });
    });

    it('При мерже массивов должен сохранятся тип Array', function() {
        var obj = { test1: [ { test2: 2 }, { test3: 3 } ] };
        this.util(true, obj, { test1: [ { test4: 4 } ] });
        expect(obj).to.be.eql({ test1: [ { test2: 2, test4: 4 }, { test3: 3 } ] });
    });

    it('Если первый аргумент не указан, то создается новый объект', function() {
        var obj = this.util(null, { a: 1 }, { b: 2 });
        expect(obj).to.be.eql({ a: 1, b: 2 });
    });

    it('Если первый аргумент boolean а второй аргумент не указан, то создается новый объект', function() {
        var obj = this.util(true, null, { a: { b: 2 } }, { a: { c: 3 } });
        expect(obj).to.be.eql({ a: { b: 2, c: 3 } });
    });
});
