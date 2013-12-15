tv4.addSchema('http://xblocks.ru/xb-ico', {
    "type":"object",
    "$schema": "http://json-schema.org/draft-04/schema#",
    "title": "Ico",
    "description": "Ico params",
    "id": "http://xblocks.ru/xb-ico",
    "required":true,
    "properties":{
        "attrs": {
            "type":"object",
            "id": "http://xblocks.ru/xb-ico/attrs",
            "required":true,
            "properties":{
                "class": {
                    "type":"string",
                    "description": "Class of the ico",
                    "id": "http://xblocks.ru/xb-ico/attrs/class",
                    "required":false
                },
                "id": {
                    "type":"string",
                    "description": "The unique identifier for a DOM",
                    "id": "http://xblocks.ru/xb-ico/attrs/id",
                    "required":false
                },
                "alt": {
                    "type":"string",
                    "id": "http://xblocks.ru/xb-ico/attrs/alt",
                    "required":false
                },
                "active": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-ico/attrs/active",
                    "required":false
                },
                "type": {
                    "description": "Type of the link",
                    "id": "http://xblocks.ru/xb-ico/attrs/ico",
                    "required":false,
                    "enum": ["remove", "notification", "check", "dropdown"]
                },
                "float": {
                    "description": "Type of the link",
                    "id": "http://xblocks.ru/xb-ico/attrs/float",
                    "required":false,
                    "enum": ["left", "right"]
                },
                "disabled": {
                    "type":"boolean",
                    "id": "http://xblocks.ru/xb-ico/attrs/disabled",
                    "required":false
                }
            }
        }
    }
});
