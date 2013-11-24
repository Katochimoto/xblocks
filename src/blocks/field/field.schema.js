(function(tv4, schema) {
    tv4 && tv4.addSchema('http://xblocks.ru/xb-field', schema);
})(tv4, {
    "type":"object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Field",
    "description": "Field params",
    "id": "http://xblocks.ru/xb-field",
    "required":true,
    "properties":{
        "attrs": {
            "type":"object",
            "id": "http://xblocks.ru/xb-field/attrs",
            "required":true,
            "properties":{
                "class": {
                    "type":"string",
                    "description": "Class of the field",
                    "id": "http://xblocks.ru/xb-field/attrs/class",
                    "required":false
                },
                "disabled": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-field/attrs/disabled",
                    "required":false
                },
                "multiline": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-field/attrs/multiline",
                    "required":false
                },
                "id": {
                    "type":"string",
                    "description": "The unique identifier for a DOM",
                    "id": "http://xblocks.ru/xb-field/attrs/id",
                    "required":false
                },
                "name": {
                    "type":"string",
                    "description": "Name of the field",
                    "id": "http://xblocks.ru/xb-field/attrs/name",
                    "required":false
                },
                "type": {
                    "id": "http://xblocks.ru/xb-field/attrs/type",
                    "required":false,
                    "enum": ["text", "number", "date", "datetime", "email", "month", "range", "search", "tel", "time", "url", "week", "color"]
                },
                "size": { "$ref": "http://xblocks.ru/xb-attrs-size" },
                "theme": { "$ref": "http://xblocks.ru/xb-attrs-theme" },
                "rows": {
                    "id": "http://xblocks.ru/xb-field/attrs/rows",
                    "required":false,
                    "type": ["string", "number"]
                },
                "cols": {
                    "id": "http://xblocks.ru/xb-field/attrs/cols",
                    "required":false,
                    "type": ["string", "number"]
                },
                "placeholder": {
                    "id": "http://xblocks.ru/xb-field/attrs/placeholder",
                    "required":false,
                    "type": "string"
                },
                "required": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-field/attrs/required",
                    "required":false
                },
                "value": {
                    "id": "http://xblocks.ru/xb-field/attrs/value",
                    "required":false,
                    "type": "string"
                },



                "label": { "$ref": "http://xblocks.ru/xb-link" }
            }
        }
    }
});
