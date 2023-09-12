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
            "value": "reviews"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Review"
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
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Review"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "body"
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
            "value": "product"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Product"
            }
          },
          "directives": []
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "author"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "User"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "provides",
                "loc": {
                  "start": 462,
                  "end": 470
                }
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "fields",
                    "loc": {
                      "start": 471,
                      "end": 477
                    }
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "username",
                    "block": false,
                    "loc": {
                      "start": 479,
                      "end": 489
                    }
                  },
                  "loc": {
                    "start": 471,
                    "end": 489
                  }
                }
              ],
              "loc": {
                "start": 461,
                "end": 490
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
            "value": "key",
            "loc": {
              "start": 382,
              "end": 385
            }
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "fields",
                "loc": {
                  "start": 386,
                  "end": 392
                }
              },
              "value": {
                "kind": "StringValue",
                "value": "id",
                "block": false,
                "loc": {
                  "start": 394,
                  "end": 398
                }
              },
              "loc": {
                "start": 386,
                "end": 398
              }
            }
          ],
          "loc": {
            "start": 381,
            "end": 399
          }
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "User"
      },
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "id"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ID"
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
                  "start": 545,
                  "end": 553
                }
              },
              "arguments": [],
              "loc": {
                "start": 544,
                "end": 553
              }
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "username"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "String"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "external",
                "loc": {
                  "start": 574,
                  "end": 582
                }
              },
              "arguments": [],
              "loc": {
                "start": 573,
                "end": 582
              }
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "reviews"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Review"
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
              "start": 505,
              "end": 512
            }
          },
          "arguments": [],
          "loc": {
            "start": 504,
            "end": 512
          }
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "key",
            "loc": {
              "start": 514,
              "end": 517
            }
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "fields",
                "loc": {
                  "start": 518,
                  "end": 524
                }
              },
              "value": {
                "kind": "StringValue",
                "value": "id",
                "block": false,
                "loc": {
                  "start": 526,
                  "end": 530
                }
              },
              "loc": {
                "start": 518,
                "end": 530
              }
            }
          ],
          "loc": {
            "start": 513,
            "end": 531
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