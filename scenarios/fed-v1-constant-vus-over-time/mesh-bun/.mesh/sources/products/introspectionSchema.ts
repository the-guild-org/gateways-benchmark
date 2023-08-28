// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "operationTypes": [
        {
          "kind": "OperationTypeDefinition",
          "operation": "query",
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Query"
            }
          }
        }
      ],
      "directives": []
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "key"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fields"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "_FieldSet"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "resolvable"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "defaultValue": {
            "kind": "BooleanValue",
            "value": true
          },
          "directives": []
        }
      ],
      "repeatable": true,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "INTERFACE"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "requires"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fields"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "_FieldSet"
              }
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "provides"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "fields"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "_FieldSet"
              }
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "external"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "reason"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "tag"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        }
      ],
      "repeatable": true,
      "locations": [
        {
          "kind": "Name",
          "value": "FIELD_DEFINITION"
        },
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "INTERFACE"
        },
        {
          "kind": "Name",
          "value": "UNION"
        },
        {
          "kind": "Name",
          "value": "ARGUMENT_DEFINITION"
        },
        {
          "kind": "Name",
          "value": "SCALAR"
        },
        {
          "kind": "Name",
          "value": "ENUM"
        },
        {
          "kind": "Name",
          "value": "ENUM_VALUE"
        },
        {
          "kind": "Name",
          "value": "INPUT_OBJECT"
        },
        {
          "kind": "Name",
          "value": "INPUT_FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "extends"
      },
      "arguments": [],
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "OBJECT"
        },
        {
          "kind": "Name",
          "value": "INTERFACE"
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "topProducts"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "first"
              },
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "Int"
                }
              },
              "defaultValue": {
                "kind": "IntValue",
                "value": "5"
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Product"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "extends",
            "loc": {
              "start": 610,
              "end": 617
            }
          },
          "arguments": [],
          "loc": {
            "start": 609,
            "end": 617
          }
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Product"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "upc"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "String"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "price"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "weight"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "key",
            "loc": {
              "start": 680,
              "end": 683
            }
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "fields",
                "loc": {
                  "start": 684,
                  "end": 690
                }
              },
              "value": {
                "kind": "StringValue",
                "value": "upc",
                "block": false,
                "loc": {
                  "start": 692,
                  "end": 697
                }
              },
              "loc": {
                "start": 684,
                "end": 697
              }
            }
          ],
          "loc": {
            "start": 679,
            "end": 698
          }
        }
      ]
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "_FieldSet"
      },
      "directives": []
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "_Any"
      },
      "directives": []
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "_Service"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "sdl"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    },
    {
      "kind": "UnionTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "_Entity"
      },
      "directives": [],
      "types": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "Product"
          }
        }
      ]
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});