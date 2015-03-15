/* global describe, it, expect, xblocks, beforeEach, afterEach, vow */
/* jshint strict: false */

describe('xblocks.view', function() {

    describe('.template ->', function() {

        xblocks.view.register('x-element-view-template', {
            render: function() {
                return React.DOM.div({}, this.template('test'));
            }
        });

        xblocks.create('x-element-view-template');

        beforeEach(function() {
            this.xElement = document.createElement('x-element-view-template');
        });

        afterEach(function() {
            if (this.xElement.parentNode) {
                this.xElement.parentNode.removeChild(this.xElement);
            }
        });

        it('шаблоны в теге script доступны во вьюхе через функцию template', function() {
            var that = this;

            this.xElement.innerHTML = '<script type="text/x-template" ref="test"><div class="test">test</div></script>';

            return new vow.Promise(function(resolve) {
                that.xElement.addEventListener('xb-created', function _onXbCreated() {
                    that.xElement.removeEventListener('xb-created', _onXbCreated, false);
                    expect(this.querySelector('.test')).not.to.be(null);
                    resolve();
                }, false);

                document.body.appendChild(that.xElement);
            });
        });

    });
});
