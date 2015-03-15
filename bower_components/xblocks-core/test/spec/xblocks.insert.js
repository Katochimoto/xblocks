/* global describe, it, expect, xblocks, beforeEach, afterEach, vow */
/* jshint strict: false */

describe('xblocks - Вставка в DOM ->', function() {

    xblocks.view.register('x-element-insert', {
        propTypes: {
            'bool-attr': React.PropTypes.bool,
            'number-attr': React.PropTypes.number
        },

        render: function() {
            return React.DOM.div({});
        }
    });

    xblocks.create('x-element-insert');


    beforeEach(function() {
        this.xElement = document.createElement('x-element-insert');
    });

    afterEach(function() {
        if (this.xElement.parentNode) {
            this.xElement.parentNode.removeChild(this.xElement);
        }
    });

    it('Инициализация xblocks выполняется после вставки в DOM', function() {
        var that = this;

        return new vow.Promise(function(resolve) {
            that.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                expect(this.xblock).to.be.a(xblocks.element);
                expect(this.mounted).to.be(true);
                expect(this.xinserted).to.be(true);
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });

    it('событие xb-created срабатывает для группы элементов на window', function() {
        var that = this;

        return new vow.Promise(function(resolve) {
            window.addEventListener('xb-created', function _onXbCreated(event) {
                window.removeEventListener('xb-created', _onXbCreated, false);

                expect(event.detail.records).to.be.a('array');
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });

});
