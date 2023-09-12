variable "PWD" {
  default = "."
}

variable "DOCKER_REGISTRY" {
  default = ""
}

variable "COMMIT_SHA" {
  default = ""
}

function "image_tag" {
  params = [name, tag]
  result = notequal("", tag) ? "${DOCKER_REGISTRY}${name}:${tag}" : ""
}

target "accounts" {
  context = "${PWD}/accounts"
  tags = [
    image_tag("subgraph-accounts", COMMIT_SHA),
  ]
}

target "reviews" {
  context = "${PWD}/reviews"
  tags = [
    image_tag("subgraph-reviews", COMMIT_SHA),
  ]
}

target "products" {
  context = "${PWD}/products"
  tags = [
    image_tag("subgraph-products", COMMIT_SHA),
  ]
}

target "inventory" {
  context = "${PWD}/inventory"
  tags = [
    image_tag("subgraph-inventory", COMMIT_SHA),
  ]
}

group "subgraphs" {
  targets = [
    "accounts",
    "reviews",
    "products",
    "inventory"
  ]
}
