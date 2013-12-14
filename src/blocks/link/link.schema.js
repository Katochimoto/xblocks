tv4.addSchema('http://xblocks.ru/xb-link', {
    "type":"object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Link",
    "description": "Link params",
    "id": "http://xblocks.ru/xb-link",
    "required":true,
    "properties":{
        "attrs": {
            "type":"object",
            "id": "http://xblocks.ru/xb-link/attrs",
            "required":true,
            "properties":{
                "class": {
                    "type":"string",
                    "description": "Class of the link",
                    "id": "http://xblocks.ru/xb-link/attrs/class",
                    "required":false
                },
                "disabled": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-link/attrs/disabled",
                    "required":false
                },
                "href": {
                    "type":"string",
                    "description": "Href of the link",
                    "id": "http://xblocks.ru/xb-link/attrs/href",
                    "required":false
                },
                "id": {
                    "type":"string",
                    "description": "The unique identifier for a DOM",
                    "id": "http://xblocks.ru/xb-link/attrs/id",
                    "required":false
                },
                "name": {
                    "type":"string",
                    "description": "Name of the link",
                    "id": "http://xblocks.ru/xb-link/attrs/name",
                    "required":false
                },
                "type": {
                    "description": "Type of the link",
                    "id": "http://xblocks.ru/xb-link/attrs/type",
                    "required":false,
                    "enum": ["normal", "outer", "pseudo", "input"]
                },
                "target": { "$ref": "http://xblocks.ru/xb-attrs-target" }
            }
        },
        "content": {
            "type":["string"],
            "id": "http://xblocks.ru/xb-link/content",
            "required":true
        }
    }
});
