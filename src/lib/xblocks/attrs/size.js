(function(tv4, schema) {
    tv4 && tv4.addSchema('http://xblocks.ru/xb-attrs-size', schema);
})(tv4, {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Type size",
    "description": "Type size params",
    "id": "http://xblocks.ru/xb-attrs-size",
    "enum": ["s", "m", "l"],
    "required":false
});
