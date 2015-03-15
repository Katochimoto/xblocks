/* global describe, it, expect, xblocks, beforeEach, afterEach */
/* jshint strict: false */

describe('xblocks - работа с атрибутами ->', function() {

    xblocks.view.register('x-element', {
        propTypes: {
            'bool-attr': React.PropTypes.bool,
            'number-attr': React.PropTypes.number
        },

        render: function() {
            return React.DOM.div({});
        }
    });

    xblocks.create('x-element');

    beforeEach(function() {
        this.xElement = document.createElement('x-element');
    });

    afterEach(function() {
        delete this.xElement;
    });

    it('при добавлении атрибута, он должен быть доступен при вызове getAttribute', function() {
        this.xElement.setAttribute('test', '123');
        expect(this.xElement.getAttribute('test')).to.be('123');
    });

    it('при добавлении атрибута, он должен быть доступен в свойстве attrs', function() {
        this.xElement.setAttribute('test', '123');
        expect(this.xElement.attrs['test']).to.be('123');
    });

    it('при добавлении атрибута, он должен быть доступен в свойстве state', function() {
        this.xElement.setAttribute('test', '123');
        expect(this.xElement.state['test']).to.be('123');
    });


    describe('приведение к типу boolean атрибутов ->', function() {
        xblocks.dom.attrs.ARRTS_BOOLEAN.forEach(function(attrName) {
            it.call(this, attrName + 'checked - state: строка "true" приводится к true', function() {
                this.xElement.setAttribute(attrName, 'true');
                expect(this.xElement.state[attrName]).to.be(true);
            });

            it.call(this, attrName + ' - state: строка "false" приводится к false', function() {
                this.xElement.setAttribute(attrName, 'false');
                expect(this.xElement.state[attrName]).to.be(false);
            });

            it.call(this, attrName + ' - state: пустая строка приводится к true', function() {
                this.xElement.setAttribute(attrName, '');
                expect(this.xElement.state[attrName]).to.be(true);
            });

            it.call(this, attrName + ' - state: значение, равное названию, приводится к true', function() {
                this.xElement.setAttribute(attrName, attrName);
                expect(this.xElement.state[attrName]).to.be(true);
            });

            it.call(this, attrName + ' - attrs: строка "true" не изменяет значения', function() {
                this.xElement.setAttribute(attrName, 'true');
                expect(this.xElement.attrs[attrName]).to.be('true');
            });

            it.call(this, attrName + ' - attrs: строка "false" не изменяет значения', function() {
                this.xElement.setAttribute(attrName, 'false');
                expect(this.xElement.attrs[attrName]).to.be('false');
            });

            it.call(this, attrName + ' - attrs: пустая строка не изменяет значения', function() {
                this.xElement.setAttribute(attrName, '');
                expect(this.xElement.attrs[attrName]).to.be('');
            });

            it.call(this, attrName + ' - attrs: значение, равное названию, не изменяет значения', function() {
                this.xElement.setAttribute(attrName, attrName);
                expect(this.xElement.attrs[attrName]).to.be(attrName);
            });
        }, this);
    });

    describe('атрибуты приводятся к типу, указанному в объекте propTypes вида ->', function() {
        it('значение "true" приводится к true в state и не меняется в attrs', function() {
            this.xElement.setAttribute('bool-attr', 'true');
            expect(this.xElement.getAttribute('bool-attr')).to.be('true');
            expect(this.xElement.attrs['bool-attr']).to.be('true');
            expect(this.xElement.state['bool-attr']).to.be(true);
        });

        it('значение "false" приводится к false в state и не меняется в attrs', function() {
            this.xElement.setAttribute('bool-attr', 'false');
            expect(this.xElement.getAttribute('bool-attr')).to.be('false');
            expect(this.xElement.attrs['bool-attr']).to.be('false');
            expect(this.xElement.state['bool-attr']).to.be(false);
        });

        it('пустая строка приводится к true в state и не меняется в attrs', function() {
            this.xElement.setAttribute('bool-attr', '');
            expect(this.xElement.getAttribute('bool-attr')).to.be('');
            expect(this.xElement.attrs['bool-attr']).to.be('');
            expect(this.xElement.state['bool-attr']).to.be(true);
        });

        it('значение, равное названию, приводится к true в state и не меняется в attrs', function() {
            this.xElement.setAttribute('bool-attr', 'bool-attr');
            expect(this.xElement.getAttribute('bool-attr')).to.be('bool-attr');
            expect(this.xElement.attrs['bool-attr']).to.be('bool-attr');
            expect(this.xElement.state['bool-attr']).to.be(true);
        });

        it('значение "on" или любое зругое, приводится к false в state и не меняется в attrs', function() {
            this.xElement.setAttribute('bool-attr', 'on');
            expect(this.xElement.getAttribute('bool-attr')).to.be('on');
            expect(this.xElement.attrs['bool-attr']).to.be('on');
            expect(this.xElement.state['bool-attr']).to.be(false);
        });

        it('числовое значение приводится к числу в state и остаетя строкой в attrs', function() {
            this.xElement.setAttribute('number-attr', '100500');
            expect(this.xElement.getAttribute('number-attr')).to.be('100500');
            expect(this.xElement.attrs['number-attr']).to.be('100500');
            expect(this.xElement.state['number-attr']).to.be(100500);
        });

        it('числовое значение приводится к числу в state и остаетя строкой в attrs (отрицательное значение)', function() {
            this.xElement.setAttribute('number-attr', '-100500');
            expect(this.xElement.getAttribute('number-attr')).to.be('-100500');
            expect(this.xElement.attrs['number-attr']).to.be('-100500');
            expect(this.xElement.state['number-attr']).to.be(-100500);
        });

        it('числовое значение приводится к числу в state и остаетя строкой в attrs (дробное значение)', function() {
            this.xElement.setAttribute('number-attr', '100.500');
            expect(this.xElement.getAttribute('number-attr')).to.be('100.500');
            expect(this.xElement.attrs['number-attr']).to.be('100.500');
            expect(this.xElement.state['number-attr']).to.be(100.5);
        });
    });

});
