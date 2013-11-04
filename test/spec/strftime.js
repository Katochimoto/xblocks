if (typeof require == 'function') {
    /*jshint -W020 */
    strftime = require('../../strftime');
    /*jshint -W020 */
    expect = require('expect.js');
}

describe('strftime', function() {
    it('по умолчанию текущая дата', function() {
        var d = new Date();
        expect(Number(strftime('%-d'))).to.be(d.getDate());
    });

    it('дату можно указать в виде объекта Date', function() {
        expect(strftime('%d', new Date(2013, 6, 3))).to.be('03');
    });

    it('дату можно указать в виде числа timestamp с миллисек.', function() {
        var d = new Date(2013, 6, 3);
        expect(strftime('%d', d.getTime())).to.be('03');
    });

    it('если дата указана неправильно, должно вернуть null', function() {
        expect(strftime('%d', new Date('hfgjshfghjdg'))).to.be(null);
    });



    it('%a - сокращенное название дня недели, в соответствии с настройками локали с заглавной буквы', function() {
        expect(strftime('%a', new Date(2013, 6, 3))).to.be('Wed');
    });

    it('%A - полное название дня недели, в соответствии с настройками локали с заглавной буквы', function() {
        expect(strftime('%A', new Date(2013, 6, 3))).to.be('Wednesday');
    });

    it('%b - аббревиатура названия месяца, в соответствии с настройками локали с заглавной буквы', function() {
        expect(strftime('%b', new Date(2013, 6, 3))).to.be('Jul');
    });

    it('%h - аббревиатура названия месяца, в соответствии с настройками локали (псевдоним %b)', function() {
        expect(strftime('%h', new Date(2013, 6, 3))).to.be('Jul');
    });

    it('%B - полное название месяца, в соответствии с настройками локали с заглавной буквы', function() {
        expect(strftime('%B', new Date(2013, 6, 3))).to.be('July');
    });

    it('%f - аббревиатура названия месяца с точкой, в соответствии с настройками локали с заглавной буквы', function() {
        expect(strftime('%f', new Date(2013, 6, 3))).to.be('Jul.');
    });

    it('%v - [позавтчера|вчера|сегодня|завтра|послезавтра] или число в формате "%d %B", если человеческое определение не подходит', function() {
        expect(strftime('%v')).to.be('Today');
    });


    it('%c - предпочитаемое отображение даты и времени, в зависимости от текущей локали (на данный момент формат общий "%Y-%m-%d %H:%M:%S")', function() {
        expect(strftime('%c', new Date(2013, 6, 3, 12, 12, 12))).to.be('2013-07-03 12:12:12');
    });

    it('%C - двухзначный порядковый номер столетия с ведущим нулем (год, деленный на 100, усеченный до целого)', function() {
        expect(strftime('%C', new Date(2013, 6, 3))).to.be('20');
    });

    it('%d - двухзначное представление дня месяца с ведущим нулем', function() {
        expect(strftime('%d', new Date(2013, 6, 3))).to.be('03');
    });

    it('%D - дата в формате MM/DD/YY', function() {
        expect(strftime('%D', new Date(2013, 6, 3))).to.be('07/03/13');
    });

    it('%e - день месяца, с ведущим пробелом, если он состоит из одной цифры', function() {
        expect(strftime('%e', new Date(2013, 6, 3))).to.be(' 3');
    });

    it('%F - дата в формате YYYY-MM-DD', function() {
        expect(strftime('%F', new Date(2013, 6, 3))).to.be('2013-07-03');
    });

    it('%g - двухзначный номер года в соответствии со стандартом ISO-8601:1988', function() {
        expect(strftime('%g', new Date(2013, 6, 3))).to.be('13');
    });

    it('%G - полная четырехзначная версия %g', function() {
        expect(strftime('%G', new Date(2013, 6, 3))).to.be('2013');
    });

    it('%H - двухзначный номер часа в 24-часовом формате с ведущим нулем', function() {
        expect(strftime('%H', new Date(2013, 6, 3, 20))).to.be('20');
    });

    it('%I - двухзначный номер часа в 12-часовом формате с ведущим нулем', function() {
        expect(strftime('%I', new Date(2013, 6, 3, 6))).to.be('06');
    });

    it('%j - трехзначный номер дня в году с ведущими нулями', function() {
        expect(strftime('%j', new Date(2013, 2, 3))).to.be('061');
    });

    it('%m - двухзначный порядковый номер месяца с ведущим нулем', function() {
        expect(strftime('%m', new Date(2013, 6, 3))).to.be('07');
    });

    it('%M - двухзначный номер минуты с ведущим нулем', function() {
        expect(strftime('%M', new Date(2013, 6, 3, 12, 6))).to.be('06');
    });

    it('%n - перенос строки', function() {
        expect(strftime('%n')).to.be("\n");
    });

    it('%p - "AM" или "PM" в верхнем регистре, в зависимости от указанного времени и локали', function() {
        expect(strftime('%p', new Date(2013, 6, 3, 12, 6))).to.be('PM');
    });

    it('%P - "am" или "pm" в нижнем регистре, в зависимости от указанного времени и локали', function() {
        expect(strftime('%P', new Date(2013, 6, 3, 12, 6))).to.be('pm');
    });

    it('%r - время в 12 часовом формате - 02:55:02 PM', function() {
        expect(strftime('%r', new Date(2013, 6, 3, 12, 6, 6))).to.be('12:06:06 PM');
    });

    it('%R - время в 24 часовом формате HH:MM', function() {
        expect(strftime('%R', new Date(2013, 6, 3, 20, 6, 6))).to.be('20:06');
    });

    it('%S - двухзначный номер секунды с ведущим нулем', function() {
        expect(strftime('%S', new Date(2013, 6, 3, 20, 6, 6))).to.be('06');
    });

    it('%t - табуляция', function() {
        expect(strftime('%t')).to.be("\t");
    });

    it('%T - ISO 8601 формат времени HH:MM:SS', function() {
        expect(strftime('%T', new Date(2013, 6, 3, 20, 6, 6))).to.be('20:06:06');
    });

    it('%w - день недели, с вс - 0', function() {
        expect(strftime('%w', new Date(2013, 6, 3))).to.be('3');
    });

    it('%x - предпочитаемое отображение даты, без времени, в зависимости от локали, на данный момент формат фиксированный "%m/%d/%y"', function() {
        expect(strftime('%x', new Date(2013, 6, 3))).to.be('07/03/13');
    });

    it('%X - предпочитаемое отображение времени в зависимости от локали, без даты, на данный момент формат фиксированный "%H:%M:%S"', function() {
        expect(strftime('%X', new Date(2013, 6, 3, 12, 12, 12))).to.be('12:12:12');
    });

    it('%y - последние 2 цифры года с ведущим нулем', function() {
        expect(strftime('%y', new Date(2009, 6, 3))).to.be('09');
    });

    it('%Y - год', function() {
        expect(strftime('%Y', new Date(2013, 6, 3))).to.be('2013');
    });

    it('%u - порядковый номер дня недели согласно стандарту ISO-8601 (с 1 - пн. по 7 - вс.)', function() {
        expect(strftime('%u', new Date(2013, 6, 7))).to.be('7');
    });

    it('%l - час в 12-часовом формате, с пробелом перед одиночной цифрой', function() {
        expect(strftime('%l', new Date(2013, 6, 7, 6, 6, 6))).to.be(' 6');
    });

    it('%z - смещение временной зоны относительно UTC (пример -0500)', function() {
        expect(strftime('%z', new Date('Wed Jul 03 2013 13:15:43 GMT+0400 (MSK)'))).to.be('+0400');
    });

    it('%Z - аббревиатура временной зоны относительно UTC', function() {
        expect(strftime('%Z', new Date('Wed Jul 03 2013 13:15:43 GMT+0400 (MSK)'))).to.be('MSK');
    });

    it('%s - метка времени Эпохи Unix (аналог getTime() без миллисек.)', function() {
        var d = new Date();
        expect(parseInt(strftime('%s', d), 10)).to.be(parseInt(d.getTime() / 1000, 10));
    });


    it('%Date_iso - ISO 8601 формат даты и времени: %Y-%m-%dT%H:%M:%S', function() {
        expect(strftime('%Date_iso', new Date(2013, 6, 3, 12, 12, 12))).to.be('2013-07-03T12:12:12');
    });

    it('%Date_dBY_year_in_HM - зависимый отт локали вывод времени в формате: 4 ноября 2013 года в 7:04', function() {
        expect(strftime('%Date_dBY_year_in_HM', new Date(2013, 6, 3, 12, 12, 12))).to.be('july 3, 2013 at 12:12');
    });

    it('%Date_dBY_year - зависимый отт локали вывод времени в формате: 4 ноября 2013 года ', function() {
        expect(strftime('%Date_dBY_year', new Date(2013, 6, 3))).to.be('july 3, 2013');
    });

    it('%Date_dBY - зависимый отт локали вывод времени в формате: 4 ноября 2013', function() {
        expect(strftime('%Date_dBY', new Date(2013, 6, 3))).to.be('july 3, 2013');
    });

    it('%Date_dBA - зависимый отт локали вывод времени в формате: 4 ноября, Среда', function() {
        expect(strftime('%Date_dBA', new Date(2013, 6, 3))).to.be('july 3, Wednesday');
    });

    it('%Date_AdBY - зависимый отт локали вывод времени в формате: Среда, 4 ноября 2013', function() {
        expect(strftime('%Date_AdBY', new Date(2013, 6, 3))).to.be('Wednesday, july 3, 2013');
    });

    it('%Date_df_in_HM - зависимый отт локали вывод времени в формате: 4 ноя. в 12:36', function() {
        expect(strftime('%Date_df_in_HM', new Date(2013, 6, 3, 12, 12))).to.be('jul., 3 at 12:12');
    });

    it('%Date_dfY - зависимый отт локали вывод времени в формате: 4 ноя. 2013', function() {
        expect(strftime('%Date_dfY', new Date(2013, 6, 3))).to.be('3 jul. 2013');
    });

    it('%Date_dB_in_HM - зависимый отт локали вывод времени в формате: 11 ноября в 12:36', function() {
        expect(strftime('%Date_dB_in_HM', new Date(2013, 6, 3, 12, 12))).to.be('july 3 at 12:12');
    });

    it('%Date_dmY__dot - вывод времени в формате: 04.05.2013', function() {
        expect(strftime('%Date_dmY__dot', new Date(2013, 6, 3))).to.be('03.07.2013');
    });

    it('%Date_df - зависимый отт локали вывод времени в формате: 21 окт.', function() {
        expect(strftime('%Date_df', new Date(2013, 6, 3))).to.be('3 jul.');
    });

    it('%Date_FT - вывод времени в формате: 2013-07-01 12:43:01', function() {
        expect(strftime('%Date_FT', new Date(2013, 6, 3, 12, 12, 12))).to.be('2013-07-03 12:12:12');
    });

    it('%Date_dmY__minus - вывод времени в формате: 01-07-2013', function() {
        expect(strftime('%Date_dmY__minus', new Date(2013, 6, 3))).to.be('03-07-2013');
    });

    it('"0" модификатор должен подставлять ведущий ноль для флагов %C, %d, %e, %g, %H, %I, %j, %m, %M, %S, %V, %W, %y, %l', function() {
        var d = new Date(709, 1, 1, 6, 6, 6);
        var data = [
            strftime('%0C', d),
            strftime('%0d', d),
            strftime('%0e', d),
            strftime('%0g', d),
            strftime('%0H', d),
            strftime('%0I', d),
            strftime('%0j', d),
            strftime('%0m', d),
            strftime('%0M', d),
            strftime('%0S', d),
            strftime('%0V', d),
            strftime('%0W', d),
            strftime('%0y', d),
            strftime('%0l', d)
        ];

        expect(data).to.be.eql(['07', '01', '01', '09', '06', '06', '031', '02', '06', '06', '05', '05', '09', '06']);
    });

    it('"_" модификатор должен подставлять ведущий пробел для флагов %C, %d, %e, %g, %H, %I, %j, %m, %M, %S, %V, %W, %y, %l', function() {
        var d = new Date(709, 1, 1, 6, 6, 6);
        var data = [
            strftime('%_C', d),
            strftime('%_d', d),
            strftime('%_e', d),
            strftime('%_g', d),
            strftime('%_H', d),
            strftime('%_I', d),
            strftime('%_j', d),
            strftime('%_m', d),
            strftime('%_M', d),
            strftime('%_S', d),
            strftime('%_V', d),
            strftime('%_W', d),
            strftime('%_y', d),
            strftime('%_l', d)
        ];

        expect(data).to.be.eql([' 7', ' 1', ' 1', ' 9', ' 6', ' 6', ' 31', ' 2', ' 6', ' 6', ' 5', ' 5', ' 9', ' 6']);
    });

    it('"-" модификатор должен удалять ведущий пробел или ноль для флагов %C, %d, %e, %g, %H, %I, %j, %m, %M, %S, %V, %W, %y, %l', function() {
        var d = new Date(709, 1, 1, 6, 6, 6);
        var data = [
            strftime('%-C', d),
            strftime('%-d', d),
            strftime('%-e', d),
            strftime('%-g', d),
            strftime('%-H', d),
            strftime('%-I', d),
            strftime('%-j', d),
            strftime('%-m', d),
            strftime('%-M', d),
            strftime('%-S', d),
            strftime('%-V', d),
            strftime('%-W', d),
            strftime('%-y', d),
            strftime('%-l', d)
        ];

        expect(data).to.be.eql(['7', '1', '1', '9', '6', '6', '31', '2', '6', '6', '5', '5', '9', '6']);
    });

    it('"^" модификатор должен переводить значения флагов %a, %A, %b, %h, %B, %f, %v в верхний регистр', function() {
        var d = new Date(2013, 6, 3);
        var data = [
            strftime('%^a', d),
            strftime('%^A', d),
            strftime('%^b', d),
            strftime('%^h', d),
            strftime('%^B', d),
            strftime('%^f', d),
            strftime('%^v')
        ];

        expect(data).to.be.eql(['WED', 'WEDNESDAY', 'JUL', 'JUL', 'JULY', 'JUL.', 'TODAY']);
    });

    it('"#" модификатор должен переводить значения флагов %a, %A, %b, %h, %B, %f, %v в нижний регистр', function() {
        var d = new Date(2013, 6, 3);
        var data = [
            strftime('%#a', d),
            strftime('%#A', d),
            strftime('%#b', d),
            strftime('%#h', d),
            strftime('%#B', d),
            strftime('%#f', d),
            strftime('%#v')
        ];

        expect(data).to.be.eql(['wed', 'wednesday', 'jul', 'jul', 'july', 'jul.', 'today']);
    });

    it('"~" модификатор должен переводить значения флагов %b, %h, %B, %f в родительный падеж', function() {
        var d = new Date(2013, 4, 8);
        var data = [
            strftime('%~b', d),
            strftime('%~h', d),
            strftime('%~B', d),
            strftime('%~f', d)
        ];

        expect(data).to.be.eql(['May', 'May', 'May', 'May']);
    });

    it('"!" модификатор должен переводить значения флагов %b, %h, %B, %f в именительный падеж', function() {
        var d = new Date(2013, 4, 8);
        var data = [
            strftime('%!b', d),
            strftime('%!h', d),
            strftime('%!B', d),
            strftime('%!f', d)
        ];

        expect(data).to.be.eql(['May', 'May', 'May', 'May']);
    });

    it('[!,~] и [^,#] модификаторы допустимо использовать одновременно', function() {
        var d = new Date(2013, 4, 8);
        var data = [
            strftime('%#~b', d),
            strftime('%#~h', d),
            strftime('%#~B', d),
            strftime('%#~f', d)
        ];

        expect(data).to.be.eql(['may', 'may', 'may', 'may']);
    });
});
