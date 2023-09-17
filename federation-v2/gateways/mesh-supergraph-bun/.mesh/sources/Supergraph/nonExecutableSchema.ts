// @ts-nocheck
export default {
  "kind": "Document",
  "definitions": [
    {
      "kind": "SchemaDefinition",
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "link"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://specs.apollo.dev/link/v1.0",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "link"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://specs.apollo.dev/join/v0.2",
                "block": false
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "for"
              },
              "value": {
                "kind": "EnumValue",
                "value": "EXECUTION"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "link"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://specs.apollo.dev/tag/v0.2",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "link"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://specs.apollo.dev/inaccessible/v0.2",
                "block": false
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "for"
              },
              "value": {
                "kind": "EnumValue",
                "value": "SECURITY"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "link"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "url"
              },
              "value": {
                "kind": "StringValue",
                "value": "https://myspecs.dev/myDirective/v1.0",
                "block": false
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "import"
              },
              "value": {
                "kind": "ListValue",
                "values": [
                  {
                    "kind": "StringValue",
                    "value": "@myDirective",
                    "block": false
                  },
                  {
                    "kind": "ObjectValue",
                    "fields": [
                      {
                        "kind": "ObjectField",
                        "name": {
                          "kind": "Name",
                          "value": "name"
                        },
                        "value": {
                          "kind": "StringValue",
                          "value": "@anotherDirective",
                          "block": false
                        }
                      },
                      {
                        "kind": "ObjectField",
                        "name": {
                          "kind": "Name",
                          "value": "as"
                        },
                        "value": {
                          "kind": "StringValue",
                          "value": "@hello",
                          "block": false
                        }
                      }
                    ]
                  }
                ]
              }
            }
          ]
        }
      ],
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
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "hello"
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
        "value": "inaccessible"
      },
      "arguments": [],
      "repeatable": false,
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
        "value": "join__field"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "graph"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "join__Graph"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "requires"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "join__FieldSet"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "provides"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "join__FieldSet"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "type"
          },
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
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "external"
          },
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
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "override"
          },
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
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "usedOverridden"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Boolean"
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
          "value": "INPUT_FIELD_DEFINITION"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "join__graph"
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
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "url"
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
      "repeatable": false,
      "locations": [
        {
          "kind": "Name",
          "value": "ENUM_VALUE"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "join__implements"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "graph"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "join__Graph"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "interface"
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
        "value": "join__type"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "graph"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "join__Graph"
              }
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "key"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "join__FieldSet"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "extension"
          },
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
            }
          },
          "defaultValue": {
            "kind": "BooleanValue",
            "value": false
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
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Boolean"
              }
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
        },
        {
          "kind": "Name",
          "value": "UNION"
        },
        {
          "kind": "Name",
          "value": "ENUM"
        },
        {
          "kind": "Name",
          "value": "INPUT_OBJECT"
        },
        {
          "kind": "Name",
          "value": "SCALAR"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "link"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "url"
          },
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
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "as"
          },
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
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "for"
          },
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "link__Purpose"
            }
          },
          "directives": []
        },
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "import"
          },
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "link__Import"
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
          "value": "SCHEMA"
        }
      ]
    },
    {
      "kind": "DirectiveDefinition",
      "name": {
        "kind": "Name",
        "value": "myDirective"
      },
      "arguments": [
        {
          "kind": "InputValueDefinition",
          "name": {
            "kind": "Name",
            "value": "a"
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
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "DeliveryEstimates"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "INVENTORY"
              }
            }
          ]
        }
      ],
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "estimatedDelivery"
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
            "value": "fastestDelivery"
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
      ]
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "join__FieldSet"
      },
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "join__Graph"
      },
      "directives": [],
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "INVENTORY"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__graph"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "inventory",
                    "block": false
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "url"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "http://inventory:4000/graphql",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PANDAS"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__graph"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "pandas",
                    "block": false
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "url"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "http://pandas:4005/graphql",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "PRODUCTS"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__graph"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "products",
                    "block": false
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "url"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "http://products:4003/graphql",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "REVIEWS"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__graph"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "reviews",
                    "block": false
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "url"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "http://reviews:4000/graphql",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "USERS"
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__graph"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "users",
                    "block": false
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "url"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "http://users:4001/graphql",
                    "block": false
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "ScalarTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "link__Import"
      },
      "directives": []
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "link__Purpose"
      },
      "directives": [],
      "values": [
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "`SECURITY` features provide metadata necessary to securely resolve fields.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "SECURITY"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "description": {
            "kind": "StringValue",
            "value": "`EXECUTION` features provide metadata necessary for operation execution.",
            "block": true
          },
          "name": {
            "kind": "Name",
            "value": "EXECUTION"
          },
          "directives": []
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Panda"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PANDAS"
              }
            }
          ]
        }
      ],
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "name"
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
            "value": "favoriteFood"
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
                "value": "tag"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "nom-nom-nom",
                    "block": false
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Product"
      },
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "ProductItf"
          }
        },
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "SkuItf"
          }
        }
      ],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__implements"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "INVENTORY"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "interface"
              },
              "value": {
                "kind": "StringValue",
                "value": "ProductItf",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__implements"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "interface"
              },
              "value": {
                "kind": "StringValue",
                "value": "ProductItf",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__implements"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "interface"
              },
              "value": {
                "kind": "StringValue",
                "value": "SkuItf",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__implements"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "REVIEWS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "interface"
              },
              "value": {
                "kind": "StringValue",
                "value": "ProductItf",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "INVENTORY"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "value": {
                "kind": "StringValue",
                "value": "id",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "value": {
                "kind": "StringValue",
                "value": "id",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "value": {
                "kind": "StringValue",
                "value": "sku package",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "value": {
                "kind": "StringValue",
                "value": "sku variation { id }",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "REVIEWS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "value": {
                "kind": "StringValue",
                "value": "id",
                "block": false
              }
            }
          ]
        }
      ],
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
                "value": "tag"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "hi-from-products",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "dimensions"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ProductDimension"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "INVENTORY"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "external"
                  },
                  "value": {
                    "kind": "BooleanValue",
                    "value": true
                  }
                }
              ]
            },
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "delivery"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "zip"
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
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DeliveryEstimates"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "INVENTORY"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "requires"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "dimensions { size weight }",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "sku"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
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
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            },
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "hello"
              },
              "arguments": []
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "package"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "variation"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ProductVariation"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "createdBy"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "hidden"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "reviewsScore"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Float"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "REVIEWS"
                  }
                },
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "override"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "products",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "oldField"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "reviewsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "REVIEWS"
                  }
                }
              ]
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
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Review"
                  }
                }
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "REVIEWS"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ProductDimension"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "INVENTORY"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            }
          ]
        }
      ],
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "size"
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
                "value": "hello"
              },
              "arguments": []
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
              "value": "Float"
            }
          },
          "directives": []
        }
      ]
    },
    {
      "kind": "InterfaceTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ProductItf"
      },
      "interfaces": [
        {
          "kind": "NamedType",
          "name": {
            "kind": "Name",
            "value": "SkuItf"
          }
        }
      ],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__implements"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "interface"
              },
              "value": {
                "kind": "StringValue",
                "value": "SkuItf",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "INVENTORY"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "REVIEWS"
              }
            }
          ]
        }
      ],
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
            "value": "dimensions"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ProductDimension"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "INVENTORY"
                  }
                }
              ]
            },
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "delivery"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "zip"
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
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "DeliveryEstimates"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "INVENTORY"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "sku"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
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
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "package"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "variation"
          },
          "arguments": [],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ProductVariation"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "createdBy"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "hidden"
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
                "value": "inaccessible"
              },
              "arguments": []
            },
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "oldField"
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
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            },
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "deprecated"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "reason"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "refactored out",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "reviewsCount"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Int"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "REVIEWS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "reviewsScore"
          },
          "arguments": [],
          "type": {
            "kind": "NonNullType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Float"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "REVIEWS"
                  }
                }
              ]
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
            "kind": "NonNullType",
            "type": {
              "kind": "ListType",
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Review"
                  }
                }
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "REVIEWS"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ProductVariation"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            }
          ]
        }
      ],
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
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Query"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "INVENTORY"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PANDAS"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "REVIEWS"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "USERS"
              }
            }
          ]
        }
      ],
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "allPandas"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "Panda"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PANDAS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "panda"
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
                    "value": "ID"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Panda"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PANDAS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "allProducts"
          },
          "arguments": [],
          "type": {
            "kind": "ListType",
            "type": {
              "kind": "NamedType",
              "name": {
                "kind": "Name",
                "value": "ProductItf"
              }
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "product"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
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
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "ProductItf"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "PRODUCTS"
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "review"
          },
          "arguments": [
            {
              "kind": "InputValueDefinition",
              "name": {
                "kind": "Name",
                "value": "id"
              },
              "type": {
                "kind": "NonNullType",
                "type": {
                  "kind": "NamedType",
                  "name": {
                    "kind": "Name",
                    "value": "Int"
                  }
                }
              },
              "directives": []
            }
          ],
          "type": {
            "kind": "NamedType",
            "name": {
              "kind": "Name",
              "value": "Review"
            }
          },
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "REVIEWS"
                  }
                }
              ]
            }
          ]
        }
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "Review"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "REVIEWS"
              }
            }
          ]
        }
      ],
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
                "value": "Int"
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
      ]
    },
    {
      "kind": "EnumTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "ShippingClass"
      },
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "INVENTORY"
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            }
          ]
        }
      ],
      "values": [
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "STANDARD"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "EXPRESS"
          },
          "directives": []
        },
        {
          "kind": "EnumValueDefinition",
          "name": {
            "kind": "Name",
            "value": "OVERNIGHT"
          },
          "directives": []
        }
      ]
    },
    {
      "kind": "InterfaceTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "SkuItf"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            }
          ]
        }
      ],
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "sku"
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
      ]
    },
    {
      "kind": "ObjectTypeDefinition",
      "name": {
        "kind": "Name",
        "value": "User"
      },
      "interfaces": [],
      "directives": [
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "PRODUCTS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "value": {
                "kind": "StringValue",
                "value": "email",
                "block": false
              }
            }
          ]
        },
        {
          "kind": "Directive",
          "name": {
            "kind": "Name",
            "value": "join__type"
          },
          "arguments": [
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "graph"
              },
              "value": {
                "kind": "EnumValue",
                "value": "USERS"
              }
            },
            {
              "kind": "Argument",
              "name": {
                "kind": "Name",
                "value": "key"
              },
              "value": {
                "kind": "StringValue",
                "value": "email",
                "block": false
              }
            }
          ]
        }
      ],
      "fields": [
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "email"
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
                "value": "tag"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "name"
                  },
                  "value": {
                    "kind": "StringValue",
                    "value": "test-from-users",
                    "block": false
                  }
                }
              ]
            }
          ]
        },
        {
          "kind": "FieldDefinition",
          "name": {
            "kind": "Name",
            "value": "totalProductsCreated"
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
          "directives": [
            {
              "kind": "Directive",
              "name": {
                "kind": "Name",
                "value": "join__field"
              },
              "arguments": [
                {
                  "kind": "Argument",
                  "name": {
                    "kind": "Name",
                    "value": "graph"
                  },
                  "value": {
                    "kind": "EnumValue",
                    "value": "USERS"
                  }
                }
              ]
            }
          ]
        }
      ]
    }
  ]
}