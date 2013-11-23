(function(tv4, schema) {
    tv4 && tv4.addSchema('http://xblocks.ru/xb-attrs-theme', schema);
})(tv4, {
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Type theme",
    "description": "Type theme params",
    "id": "http://xblocks.ru/xb-attrs-theme",
    "enum": ["normal", "action", "dark", "pseudo"],
    "required":false
});
