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
                'size': 'm'
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
                //'reset': true,
                //'prefix': 'qwe',
                //'value': 'asd'
                //'multiline': true,
                /*'label': 'qwe',
                'label-href': 'http://ya.ru',
                'label-target': '_blank',
                'label-ico-qwe': '_blank',
                'label-ico-asd': '_blank',
                'type': 'number',*/
                //'autosize': true,
                //multiline: true
                //'postfix': 'qwe'
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
                type: 'remove',
                active: true
            }
        }, 'xb-ico');
        document.getElementById('mocha').appendChild(div.firstChild);

        //console.log(div.firstChild, mocha);
    });


});
