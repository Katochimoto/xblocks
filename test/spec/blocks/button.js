if (typeof require == 'function') {
    /*jshint -W020 */
    //strftime = require('../../strftime');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('button', function() {

    it('по умолчанию текущая дата', function() {
        var data = {
            content: 'nop',
            attrs: {
                name: 'te"st'
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
                //'prefix': 'qwe',
                //'value': 'asd'
                //'multiline': true,
                'label': 'qwe',
                'label-href': 'http://ya.ru',
                'label-target': '_blank',
                'label-ico-qwe': '_blank',
                'label-ico-asd': '_blank',
                'type': 'number'
                //'postfix': 'qwe'
            }
        };

        var div;
        /*
        div = document.createElement('div');
        div.innerHTML = yr.run('xb-button', data, 'xb-button');
        document.getElementById('mocha').appendChild(div.firstChild);
        */

        div = document.createElement('div');
        div.innerHTML = yr.run('xb-field', dataInput, 'xb-field');
        document.getElementById('mocha').appendChild(div.firstChild);

        //console.log(div.firstChild, mocha);
    });


});
