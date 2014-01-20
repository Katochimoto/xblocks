tv4.addSchema('http://xblocks.ru/xb-select', {
    "type":"object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Select",
    "description": "Select params",
    "id": "http://xblocks.ru/xb-select",
    "required":true,
    "properties":{
        "attrs": {
            "type":"object",
            "id": "http://xblocks.ru/xb-select/attrs",
            "required":true,
            "properties":{
                "class": {
                    "type":"string",
                    "description": "Class of the select",
                    "id": "http://xblocks.ru/xb-select/attrs/class",
                    "required":false
                },
                "disabled": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-select/attrs/disabled",
                    "required":false
                },
                "id": {
                    "type":"string",
                    "description": "The unique identifier for a DOM",
                    "id": "http://xblocks.ru/xb-select/attrs/id",
                    "required":false
                },
                "name": {
                    "type":"string",
                    "description": "Name of the select",
                    "id": "http://xblocks.ru/xb-select/attrs/name",
                    "required":false
                }
            }
        },
        "content": {
            "type":["string"],
            "id": "http://xblocks.ru/xb-select/content",
            "required":true
        }
    }
});
