variable "PWD" {
  default = "."
}

variable "DOCKER_REGISTRY" {
  default = ""
}

variable "COMMIT_SHA" {
  default = ""
}

target "accounts" {
  context = "${PWD}/accounts"
  args = {
    IMAGE_TITLE = "graphql-hive/app"
    PORT = "3000"
    IMAGE_DESCRIPTION = "The app of the GraphQL Hive project."
  }
  tags = [
    local_image_tag("app"),
    stable_image_tag("app"),
    image_tag("app", COMMIT_SHA),
    image_tag("app", BRANCH_NAME)
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
