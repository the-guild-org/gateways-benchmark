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

target "users" {
  context = "./users/"
  dockerfile = "./Dockerfile"
  tags = [
    image_tag("subgraph-v2-users", COMMIT_SHA),
  ]
}

target "reviews" {
  context = "./reviews/"
  dockerfile = "./Dockerfile"
  tags = [
    image_tag("subgraph-v2-reviews", COMMIT_SHA),
  ]
}

target "products" {
  context = "./products/"
  dockerfile = "./Dockerfile"
  tags = [
    image_tag("subgraph-v2-products", COMMIT_SHA),
  ]
}

target "inventory" {
  context = "./inventory/"
  dockerfile = "./Dockerfile"
  tags = [
    image_tag("subgraph-v2-inventory", COMMIT_SHA),
  ]
}

target "pandas" {
  context = "./pandas/"
  dockerfile = "./Dockerfile"
  tags = [
    image_tag("subgraph-v2-pandas", COMMIT_SHA),
  ]
}
target "inventory" {
  context = "./inventory/"
  dockerfile = "./Dockerfile"
  tags = [
    image_tag("subgraph-v2-inventory", COMMIT_SHA),
  ]
}

group "subgraphs" {
  targets = [
    "users",
    "reviews",
    "products",
    "inventory",
    "pandas"
  ]
}
