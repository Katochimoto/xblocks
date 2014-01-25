

<!-- Start src/lib/xblocks/attrs.js -->

## attrs

@module xblocks.attrs

## SEPARATOR

@type {string} разделитель названия атрибута

## ATTR_COMPLEX_VALUE

@type {string} значение атрибута в комплексном представлении

## plain(obj)

Конструктор плоского представления атрибутов

### Examples:

    xblocks.attrs.plain({ &#39;name&#39;: &#39;test&#39;, &#39;class&#39;: &#39;test&#39; })

### Params: 

* **Object** *obj* объект атрибутов элемента

### Return:

* **AttrsPlain** 

## complex(obj)

Конструктор комплексного представления атрибутов

### Params: 

* **Object** *obj* объект атрибутов элемента

### Return:

* **AttrsComplex** 

## toPlainObject(element)

Выделение атрибутов элемента в плоском представлении

### Params: 

* **HTMLElement** *element* элемент

### Return:

* **AttrsPlain** 

## toComplexObject(element)

Выделение атрибутов элемента в комплексном представлении

### Params: 

* **HTMLElement** *element* элемент

### Return:

* **AttrsComplex** 

## toSchemaObject(element)

Выделение атрибутов элемента в представлении, пригодном для проверки со схемой

### Params: 

* **HTMLElement** *element* элемент

### Return:

* **Object** 

## isEmpty(element, attrName)

Проверка наличия определенного атрибута

### Params: 

* **HTMLElement** *element* элемент

* **String** *attrName* название атрибута

### Return:

* **Boolean** true, если атрибут указан и его значение определено

<!-- End src/lib/xblocks/attrs.js -->

