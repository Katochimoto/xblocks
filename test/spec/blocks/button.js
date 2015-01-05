describe('xb-button ->', function() {

    beforeEach(function() {
        this.xElement = document.createElement('xb-button');
    });

    afterEach(function() {
        if (this.xElement.parentNode) {
            this.xElement.parentNode.removeChild(this.xElement);
        }
    });

    it('checked можно указать через атрибут', function() {
        var that = this;

        this.xElement.setAttribute('type', 'checkbox');
        this.xElement.setAttribute('checked', 'true');

        return new vow.Promise(function(resolve) {
            that.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                expect(this.checked).to.be.ok();
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });

    it('checked можно указать через свойство', function() {
        var that = this;

        this.xElement.setAttribute('type', 'checkbox');
        this.xElement.checked = true;

        return new vow.Promise(function(resolve) {
            that.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                expect(this.hasAttribute('checked')).to.be.ok();
                resolve();
            }, false);

            document.body.appendChild(that.xElement);
        });
    });
});
