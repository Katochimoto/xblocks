(function(tv4, schema) {
    tv4 && tv4.addSchema('http://xblocks.ru/xb-attrs-target', schema);
})(tv4, {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Type target",
    "description": "Type target params",
    "id": "http://xblocks.ru/xb-attrs-target",
    "enum": ["_blank", "_parent", "_self", "_top"],
    "required":false
});
