/* global describe, it, expect, xblocks, beforeEach, afterEach, vow */
/* jshint strict: false */

describe('xblocks - клонирование ->', function() {

    xblocks.view.register('x-element-clone', {
        render: function() {
            return React.DOM.div({});
        }
    });

    xblocks.create('x-element-clone');

    beforeEach(function() {
        this.xElement = document.createElement('x-element-clone');
    });

    afterEach(function() {
        if (this.xElement.parentNode) {
            this.xElement.parentNode.removeChild(this.xElement);
        }
    });

    it('Клонированный элемент не инициализирован 1', function() {
        var that = this;

        return new vow.Promise(function(resolve) {
            that.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                var cloneElement = this.cloneNode();

                expect(cloneElement.xblock).to.be(undefined);
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });

    it('Клонированный элемент не инициализирован 2', function() {
        var that = this;

        return new vow.Promise(function(resolve) {
            that.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                var cloneElement = this.cloneNode();

                expect(cloneElement.mounted).to.be(false);
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });

    it('Клонированный элемент не инициализирован 3', function() {
        var that = this;

        return new vow.Promise(function(resolve) {
            that.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                var cloneElement = this.cloneNode();

                expect(cloneElement.xinserted).to.be(false);
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });

    it('Клонированный элемент не инициализирован 4', function() {
        var that = this;

        return new vow.Promise(function(resolve) {
            that.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                var cloneElement = this.cloneNode();

                expect(cloneElement.content).to.be('');
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });

});
