String.toLocaleString({
    'ru': {

        '%Controls__syntax': 'Синтаксис',
        '%Controls__attrs': 'Атрибуты',
        '%Controls__example': 'Пример',
        '%Controls__more_example': 'Больше примеров.',

        '%Controls__attrs_autocomplete': 'Включает или отключает автозаполнение. Возможные значения: <code>on</code>, <code>off</code>.',
        '%Controls__attrs_autofocus': 'Устанавливает фокус в поле формы.',
        '%Controls__attrs_checked': 'Предварительно активированный переключатель или флажок.',
        '%Controls__attrs_form': 'Связывает поле с формой по её идентификатору.',
        '%Controls__attrs_for': 'Идентификатор элемента, с которым следует установить связь.',
        '%Controls__attrs_name': 'Имя поля, предназначено для того, чтобы обработчик формы мог его идентифицировать.',
        '%Controls__attrs_readonly': 'Устанавливает, что поле не может изменяться пользователем.',
        '%Controls__attrs_required': 'Обязательное для заполнения поле.',
        '%Controls__attrs_value': 'Значение элемента.',
        '%Controls__attrs_placeholder': 'Замещающийся текст.',
        '%Controls__attrs_xb-link': 'Наследование атрибутов <code>&lt;xb-link&gt;</code> через префикс <code>xb-link</code>.',
        '%Controls__attrs_xb-ico': 'Наследование атрибутов <code>&lt;xb-ico&gt;</code> через префикс <code>xb-ico</code>.',
        '%Controls__attrs_xb-ico-float': 'Расположение иконки. Возможные значения: <code>left</code>, <code>right</code>.',

        '%Controls_ico__title': 'Ico',
        '%Controls_ico__descr_p1': 'Тег <code>&lt;xb-ico&gt;</code> позволяет создавать элемент интерфейса в виде иконки.',
        '%Controls_ico__descr_p2': 'Набор иконок заранее определен. Выбор нужной иконки осуществляется указанием атрибута <code>type</code>.',
        '%Controls_ico__descr_p3': 'Для большинства иконок закрывающийся тег не требуется, в отличии от иконки с типом <code>notification</code>. Текст внутри тега либо значение атрибута <code>value</code> являются сообщением.',
        '%Controls_ico__syntax_example': 'текст сообщения',
        '%Controls_ico__attrs_active': 'Позволяет использовать иконку как управляющий элемент. При наведении на иконку появится \'лапка\' и изменится цвет.',
        '%Controls_ico__attrs_disabled': 'Иконка станет серой и перестанет реагировать на события мыши.',
        '%Controls_ico__attrs_size': 'Размер иконки. Возможные значения: <code>s</code>, <code>m</code>.',
        '%Controls_ico__attrs_value': 'Содержимое иконки. Актуально для типа <code>notification</code>.',
        '%Controls_ico__attrs_type': 'Тип иконки. Возможные значения:',

        '%Controls_link__title': 'Link',
        '%Controls_link__descr_p1': 'Тег <code>&lt;xb-link&gt;</code> предназначен для создания ссылок. В зависимости от присутствия атрибутов <code>name</code> или <code>href</code> тег <code>&lt;xb-link&gt;</code> устанавливает ссылку или якорь.',
        '%Controls_link__attrs_href': 'Задает адрес документа, на который следует перейти.',
        '%Controls_link__attrs_name': 'Устанавливает имя якоря внутри документа.',
        '%Controls_link__attrs_target': 'Имя окна или фрейма, куда браузер будет загружать документ.',
        '%Controls_link__attrs_theme': 'Тема оформления. Возможные значения:',

        '%Controls_button__title': 'Button',
        '%Controls_button__descr_p1': 'Тег <code>&lt;xb-button&gt;</code> предназначен для создания кнопок.',
        '%Controls_button__descr_p2': 'В зависимости от атрибута <code>type</code> кнопка может быть ссылкой или переключателем.',
        '%Controls_button__attrs_href': 'Задает адрес документа, на который следует перейти. Для типа <code>link</code>.',
        '%Controls_button__attrs_multiple': 'Позволяет загрузить несколько файлов одновременно. Для типа <code>file</code>.',
        '%Controls_button__attrs_size': 'Размер кнопки. Возможные значения: <code>s</code>, <code>m</code>, <code>l</code>, <code>xl</code>.',
        '%Controls_button__attrs_target': 'Имя окна или фрейма, куда браузер будет загружать документ. Для типа <code>link</code>.',
        '%Controls_button__attrs_theme': 'Тема оформления. Возможные значения:',
        '%Controls_button__attrs_type': 'Тип кнопки. Возможные значения:',

        '%Controls_checkbox__title': 'Checkbox',
        '%Controls_checkbox__descr_p1': 'Тег <code>&lt;xb-checkbox&gt;</code> предназначен для создания флажка.',
        '%Controls_checkbox__attrs_size': 'Размер флажка. Возможные значения: <code>s</code>, <code>m</code>.',

        '%Controls_radio__title': 'Radio',
        '%Controls_radio__descr_p1': 'Тег <code>&lt;xb-radio&gt;</code> предназначен для создания переключателя.',

        '%Controls_input__title': 'Input',
        '%Controls_input__descr_p1': 'Тег <code>&lt;xb-input&gt;</code> предназначен для создания поля ввода.',
        '%Controls_input__attrs_autosize': 'Изменять размер поля по содержимому.',
        '%Controls_input__attrs_cols': 'Ширина поля в символах.',
        '%Controls_input__attrs_ghost': 'Показывать границы поля при наведении курсора.',
        '%Controls_input__attrs_multiline': 'Многострочный ввод текста.',
        '%Controls_input__attrs_postfix': 'Текст после области ввода.',
        '%Controls_input__attrs_prefix': 'Текст перед областью ввода.',
        '%Controls_input__attrs_reset': 'Выводит кнопку сброса содержимого поля.',
        '%Controls_input__attrs_rows': 'Высота поля в строках текста.',
        '%Controls_input__attrs_size': 'Размер поля ввода. Возможные значения: <code>s</code>, <code>m</code>, <code>l</code>, <code>xl</code>.',
        '%Controls_input__attrs_xb-link': 'Название ссылки.'
    },

    'en': {

    }
});
