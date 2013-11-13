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
                name: 'te"st',
                'xb-reset': true
            }
        };

        var div = document.createElement('div');
        div.innerHTML = yr.run('xb-button', data, 'xb-button');

        document.getElementById('mocha').appendChild(div.firstChild);

        div = document.createElement('div');
        div.innerHTML = yr.run('xb-field', data, 'xb-field');

        document.getElementById('mocha').appendChild(div.firstChild);

        //console.log(div.firstChild, mocha);
    });


});
