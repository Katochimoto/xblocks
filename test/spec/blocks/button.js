import vow, { Promise } from 'Vow';

xdescribe('xb-button ->', function () {

    beforeEach(function () {
        this.xElement = document.createElement('xb-button');
    });

    afterEach(function () {
        if (this.xElement.parentNode) {
            this.xElement.parentNode.removeChild(this.xElement);
        }
    });

    describe('checkbox ->', function () {

        beforeEach(function () {
            this.xElement.setAttribute('type', 'checkbox');
        });

        it('checked можно указать через атрибут', function () {
            var that = this;
            this.xElement.setAttribute('checked', 'true');

            return new Promise(function (resolve) {
                that.xElement.addEventListener('xb-created', function _onXbCreated() {
                    that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                    expect(this.checked).to.be.ok();
                    resolve();
                }, false);

                document.body.appendChild(that.xElement);
            });
        });

        it('checked можно указать через свойство', function () {
            var that = this;
            this.xElement.checked = true;

            return new Promise(function (resolve) {
                that.xElement.addEventListener('xb-created', function _onXbCreated() {
                    that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                    expect(this.hasAttribute('checked')).to.be.ok();
                    resolve();
                }, false);

                document.body.appendChild(that.xElement);
            });
        });

        it('checked можно изменить через свойство', function () {
            var that = this;
            this.xElement.checked = true;

            return new Promise(function (resolve) {
                that.xElement.addEventListener('xb-created', function _onXbCreated() {
                    that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                    expect(this.hasAttribute('checked')).to.be.ok();

                    that.xElement.addEventListener('xb-update', function _onXbUpdate() {
                        that.xElement.removeEventListener('xb-update', _onXbUpdate, false);

                        expect(this.hasAttribute('checked')).not.to.be.ok();
                        resolve();
                    }, false);

                    this.checked = false;

                }, false);

                document.body.appendChild(that.xElement);
            });
        });

        it('checked можно изменить через атрибут', function () {
            var that = this;
            this.xElement.setAttribute('checked', 'true');

            return new Promise(function (resolve) {
                that.xElement.addEventListener('xb-created', function _onXbCreated() {
                    that.xElement.removeEventListener('xb-created', _onXbCreated, false);

                    expect(this.checked).to.be.ok();

                    that.xElement.addEventListener('xb-update', function _onXbUpdate() {
                        that.xElement.removeEventListener('xb-update', _onXbUpdate, false);

                        expect(this.checked).not.to.be.ok();
                        resolve();
                    }, false);

                    this.removeAttribute('checked');

                }, false);

                document.body.appendChild(that.xElement);
            });
        });

    });

    describe('radio ->', function () {

        beforeEach(function () {
            this.xElement.setAttribute('type', 'radio');
            this.xElement.setAttribute('name', 'test');

            this.xElement2 = document.createElement('xb-button');
            this.xElement2.setAttribute('type', 'radio');
            this.xElement2.setAttribute('name', 'test');
        });

        afterEach(function () {
            if (this.xElement2.parentNode) {
                this.xElement2.parentNode.removeChild(this.xElement2);
            }
        });

        it('при установке свойства checked, оно должно сниматься с предыдущего одноименного элемента', function () {
            var that = this;
            var defer1 = vow.defer();
            var defer2 = vow.defer();

            this.xElement.addEventListener('xb-created', function _onXbCreated() {
                that.xElement.removeEventListener('xb-created', _onXbCreated, false);
                defer1.resolve();
            }, false);

            this.xElement2.addEventListener('xb-created', function _onXbCreated2() {
                that.xElement2.removeEventListener('xb-created', _onXbCreated2, false);
                defer2.resolve();
            }, false);

            document.body.appendChild(that.xElement);
            document.body.appendChild(that.xElement2);

            return new Promise(function (resolve) {
                vow.all([ defer1.promise(), defer2.promise() ]).then(function () {

                    that.xElement.addEventListener('xb-update', function _onXbUpdate() {
                        that.xElement.removeEventListener('xb-update', _onXbUpdate, false);

                        expect(that.xElement.checked).to.be.ok();
                        expect(that.xElement2.checked).not.to.be.ok();

                        that.xElement2.addEventListener('xb-update', function _onXbUpdate2() {
                            that.xElement2.removeEventListener('xb-update', _onXbUpdate2, false);

                            expect(that.xElement2.checked).to.be.ok();
                            expect(that.xElement.checked).not.to.be.ok();

                            resolve();
                        }, false);

                        that.xElement2.checked = true;

                    }, false);

                    that.xElement.checked = true;
                });
            });
        });

    });
});
