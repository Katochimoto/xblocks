if (typeof require == 'function') {
    /*jshint -W020 */
    //strftime = require('../../strftime');
    /*jshint -W020 */
    //expect = require('expect.js');
}

describe('button', function() {

    it('по умолчанию текущая дата', function() {
        var data = {
            content: 'nop',
            attrs: {
                name: 'te"st',
                'size': 'xl',
                href: '#',
                theme: 'promo',
                type: 'file',
                'ico-type': 'remove',
                'ico-float': 'right'
            }
        };

        var dataInput = {
            content: 'nop',
            attrs: {
                name: 'te"st',
                'size': 'm',
                //'theme': 'pseudo',
                //'checked': true,
                //'flying': true,
                //'disabled': true,
                'reset': true,
                //'prefix': 'Prefix',
                //'value': 'asd'
                //'multiline': true,
                //'label': 'Label',
                //'label-href': 'http://ya.ru',
                //'label-target': '_blank',
                //'label-ico-qwe': '_blank',
                //'label-ico-asd': '_blank',
                //'type': 'number',
                //'autosize': true,
                //multiline: true
                //'postfix': 'Postfix',
                //readonly: true
            }
        };

        var div;

        div = document.createElement('div');
        div.innerHTML = yr.run('xb-button', data, 'xb-button');
        document.getElementById('mocha').appendChild(div.firstChild);


        div = document.createElement('div');
        div.innerHTML = yr.run('xb-field', dataInput, 'xb-field');
        document.getElementById('mocha').appendChild(div.firstChild);


        div = document.createElement('div');
        div.innerHTML = yr.run('xb-link', {
            content: 'normal'
        }, 'xb-link');
        document.getElementById('mocha').appendChild(div.firstChild);

        div = document.createElement('div');
        div.innerHTML = yr.run('xb-link', {
            content: 'outer',
            attrs: {
                type: 'outer'            }
        }, 'xb-link');
        document.getElementById('mocha').appendChild(div.firstChild);

        div = document.createElement('div');
        div.innerHTML = yr.run('xb-link', {
            content: 'pseudo',
            attrs: {
                type: 'pseudo'
            }
        }, 'xb-link');
        document.getElementById('mocha').appendChild(div.firstChild);


        div = document.createElement('div');
        div.innerHTML = yr.run('xb-ico', {
            attrs: {
                type: 'dropdown',
                active: false,
                class: 'asd'
            }
        }, 'xb-ico');
        document.getElementById('mocha').appendChild(div.firstChild);

        //console.log(div.firstChild, mocha);
    });


});
