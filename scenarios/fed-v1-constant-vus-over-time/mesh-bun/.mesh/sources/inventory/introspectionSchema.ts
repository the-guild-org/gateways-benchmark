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
                  "start": 571,
                  "end": 579
                }
              },
              "arguments": [],
              "loc": {
                "start": 570,
                "end": 579
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
                  "start": 595,
                  "end": 603
                }
              },
              "arguments": [],
              "loc": {
                "start": 594,
                "end": 603
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
                  "start": 618,
                  "end": 626
                }
              },
              "arguments": [],
              "loc": {
                "start": 617,
                "end": 626
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
                  "start": 671,
                  "end": 679
                }
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "fields",
                    "loc": {
                      "start": 680,
                      "end": 686
                    }
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "price weight",
                    "block": false,
                    "loc": {
                      "start": 688,
                      "end": 702
                    }
                  },
                  "loc": {
                    "start": 680,
                    "end": 702
                  }
                }
              ],
              "loc": {
                "start": 670,
                "end": 703
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
              "start": 523,
              "end": 530
            }
          },
          "arguments": [],
          "loc": {
            "start": 522,
            "end": 530
          }
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "key",
            "loc": {
              "start": 534,
              "end": 537
            }
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "fields",
                "loc": {
                  "start": 538,
                  "end": 544
                }
              },
              "value": {
                "kind": "StringValue",
                "value": "upc",
                "block": false,
                "loc": {
                  "start": 546,
                  "end": 551
                }
              },
              "loc": {
                "start": 538,
                "end": 551
              }
            }
          ],
          "loc": {
            "start": 533,
            "end": 552
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
            "value": "_entities"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "representations"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "ListType",
                  "type": {
                    "kind": "NonNullType",
                    "type": {
                      "kind": "NamedType",
                      "name": {
                        "kind": "Name",
                        "value": "_Any"
                      }
                    }
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NamedType",
                "name": {
                  "kind": "Name",
                  "value": "_Entity"
                }
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "_service"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "_Service"
              }
            }
          },
          "directives": []
        }
      ],
      "interfaces": [],
      "directives": []
    }
  ]
};

export default buildASTSchema(schemaAST, {
  assumeValid: true,
  assumeValidSDL: true
});