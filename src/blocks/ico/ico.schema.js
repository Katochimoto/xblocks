(function(tv4, schema) {
    tv4 && tv4.addSchema('http://xblocks.ru/xb-ico', schema);
})(tv4, {
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
                }
            }
        }
    }
});
