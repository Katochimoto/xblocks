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

                "ico": { "$ref": "http://xblocks.ru/xb-ico" },
            }
        },
        "content": {
            "type":["string"],
            "id": "http://xblocks.ru/xb-button/content",
            "required":true
        }
    }
});
