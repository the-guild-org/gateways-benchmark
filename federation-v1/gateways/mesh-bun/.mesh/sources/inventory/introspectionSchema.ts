// @ts-nocheck
import { buildASTSchema } from 'graphql';

const schemaAST = {
  "kind": "Document",
  "definitions": [
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "external"
      },
      "arguments": [],
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
          "value": "INTERFACE"
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
        }
      ]
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
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "_FieldSet"
      },
      "directives": []
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
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "external",
                "loc": {
                  "start": 337,
                  "end": 345
                }
              },
              "arguments": [],
              "loc": {
                "start": 336,
                "end": 345
              }
            }
          ]
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
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "external",
                "loc": {
                  "start": 361,
                  "end": 369
                }
              },
              "arguments": [],
              "loc": {
                "start": 360,
                "end": 369
              }
            }
          ]
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
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "external",
                "loc": {
                  "start": 384,
                  "end": 392
                }
              },
              "arguments": [],
              "loc": {
                "start": 383,
                "end": 392
              }
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "inStock"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "shippingEstimate"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Int"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "requires",
                "loc": {
                  "start": 437,
                  "end": 445
                }
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "fields",
                    "loc": {
                      "start": 446,
                      "end": 452
                    }
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "price weight",
                    "block": false,
                    "loc": {
                      "start": 454,
                      "end": 468
                    }
                  },
                  "loc": {
                    "start": 446,
                    "end": 468
                  }
                }
              ],
              "loc": {
                "start": 436,
                "end": 469
              }
            }
          ]
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
              "start": 291,
              "end": 298
            }
          },
          "arguments": [],
          "loc": {
            "start": 290,
            "end": 298
          }
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "key",
            "loc": {
              "start": 300,
              "end": 303
            }
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "fields",
                "loc": {
                  "start": 304,
                  "end": 310
                }
              },
              "value": {
                "kind": "StringValue",
                "value": "upc",
                "block": false,
                "loc": {
                  "start": 312,
                  "end": 317
                }
              },
              "loc": {
                "start": 304,
                "end": 317
              }
            }
          ],
          "loc": {
            "start": 299,
            "end": 318
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