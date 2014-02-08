describe('Кнопка', function() {

    beforeEach(function() {
        this.el = document.createElement('xb-button');
    });

    afterEach(function() {
        delete this.el;
    });

    it('должна создаваться с помошью createElement', function() {
        expect(this.el.nodeName).to.eql('XB-BUTTON');
    });

    it('название кнопки можно указать через innerHTML', function() {
        this.el.innerHTML = 'test';
        expect(this.el.value).to.eql('test');
    });

    it('название кнопки можно указать через innerHTML в виде html', function() {
        this.el.innerHTML = '<p>test</p>';
        expect(this.el.value).to.eql('<p>test</p>');
    });

    it('название кнопки можно указать через свойство value', function() {
        this.el.value = 'test';
        expect(this.el.innerText).to.eql('test');
    });

    it('название кнопки можно получить через свойство value', function() {
        this.el.value = 'test';
        expect(this.el.value).to.eql('test');
    });

    it('через свойство value можно указать html', function() {
        this.el.value = '<p>test</p>';
        expect(this.el.value).to.eql('<p>test</p>');
    });

    it('свойство attrs содержит объект атрибутов по умолчанию', function() {
        expect(this.el.attrs).to.eql({ theme: 'normal', size: 'm' });
    });
});
