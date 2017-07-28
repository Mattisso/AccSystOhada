// Capture Schema Output
var schema = GenerateSchema.json('oStableauPoste',[]);

var jsonSchemaGenerator = require('json-schema-generator'),
    obj = { oTableauPoste: { object: true } },
    schemaObj;
 
schemaObj = jsonSchemaGenerator('../js/oTableauPoste.json');

/*{
  "type": "array",
  "$schema": "http://json-schema.org/draft-04/schema#",
  "description": "",
  "minItems": 1,
  "uniqueItems": true,
  "items": {
    "type": "object",
    "required": [
      "Id",
      "TableauName",
      "tbleauLongName"
    ],
    "properties": {
      "Id": {
        "type": "string",
        "minLength": 1
      },
      "TableauName": {
        "type": "string",
        "minLength": 1
      },
      "tbleauLongName": {
        "type": "string",
        "minLength": 1
      }
    }
  }
} */