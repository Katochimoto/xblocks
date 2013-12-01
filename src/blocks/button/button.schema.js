tv4.addSchema('http://xblocks.ru/xb-button', {
    "type":"object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Button",
    "description": "Button params",
    "id": "http://xblocks.ru/xb-button",
    "required":true,
    "properties":{
        "attrs": {
            "type":"object",
            "id": "http://xblocks.ru/xb-button/attrs",
            "required":true,
            "properties":{
                "class": {
                    "type":"string",
                    "description": "Class of the button",
                    "id": "http://xblocks.ru/xb-button/attrs/class",
                    "required":false
                },
                "disabled": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-button/attrs/disabled",
                    "required":false
                },
                "checked": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-button/attrs/checked",
                    "required":false
                },
                "href": {
                    "type":"string",
                    "description": "Href of the button",
                    "id": "http://xblocks.ru/xb-button/attrs/href",
                    "required":false
                },
                "id": {
                    "type":"string",
                    "description": "The unique identifier for a DOM",
                    "id": "http://xblocks.ru/xb-button/attrs/id",
                    "required":false
                },
                "multiple": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-button/attrs/multiple",
                    "required":false
                },
                "name": {
                    "type":"string",
                    "description": "Name of the button",
                    "id": "http://xblocks.ru/xb-button/attrs/name",
                    "required":false
                },
                "target": {
                    "type":"string",
                    "description": "Target of the button",
                    "id": "http://xblocks.ru/xb-button/attrs/target",
                    "required":false
                },
                "type": {
                    "id": "http://xblocks.ru/xb-button/attrs/type",
                    "required":false,
                    "enum": ["button", "file", "submit"]
                },
                "flying": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-button/attrs/flying",
                    "required":false
                },
                "ico": { "$ref": "http://xblocks.ru/xb-ico" },
                "size": { "$ref": "http://xblocks.ru/xb-attrs-size" },
                "theme": { "$ref": "http://xblocks.ru/xb-attrs-theme" }
            }
        },
        "content": {
            "type":["string"],
            "id": "http://xblocks.ru/xb-button/content",
            "required":true
        }
    }
});
