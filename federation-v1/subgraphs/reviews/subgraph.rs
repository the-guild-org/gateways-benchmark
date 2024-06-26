use async_graphql::{
    http::GraphiQLSource, ComplexObject, EmptyMutation, EmptySubscription, Object,
    SDLExportOptions, Schema, SimpleObject, ID,
};
use async_graphql_axum::GraphQL;
use axum::{
    http::{Request, StatusCode},
    middleware::{from_fn, Next},
    response::{self, IntoResponse, Response},
    routing::get,
    Router, Server,
};
use lazy_static::lazy_static;
use rand::Rng;
use std::env::var;

async fn graphiql() -> impl IntoResponse {
    response::Html(GraphiQLSource::build().endpoint("/graphql").finish())
}

lazy_static! {
    static ref REVIEWS: Vec<Review> = vec![
        Review {
            id: ID("1".to_string()),
            body: Some("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".to_string()),
            product: Some(Product {
                upc: "1".to_string()
            })
        },
        Review {
            id: ID("2".to_string()),
            body: Some("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugi".to_string()),
            product: Some(Product {
                upc: "1".to_string()
            })
        },
        Review {
            id: ID("3".to_string()),
            body: Some("sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.".to_string()),
            product: Some(Product {
                upc: "1".to_string()
            })
        },
        Review {
            id: ID("4".to_string()),
            body: Some("Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem".to_string()),
            product: Some(Product {
                upc: "1".to_string()
            })
        },
        Review {
            id: ID("5".to_string()),
            body: Some("Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.".to_string()),
            product: Some(Product {
                upc: "2".to_string()
            })
        },
        Review {
            id: ID("6".to_string()),
            body: Some("Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugi".to_string()),
            product: Some(Product {
                upc: "2".to_string()
            })
        },
        Review {
            id: ID("7".to_string()),
            body: Some("sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.".to_string()),
            product: Some(Product {
                upc: "2".to_string()
            })
        },
        Review {
            id: ID("8".to_string()),
            body: Some("Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem".to_string()),
            product: Some(Product {
                upc: "2".to_string()
            })
        },
        Review {
            id: ID("9".to_string()),
            body: Some("Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem".to_string()),
            product: Some(Product {
                upc: "3".to_string()
            })
        },
        Review {
            id: ID("10".to_string()),
            body: Some("Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem".to_string()),
            product: Some(Product {
                upc: "4".to_string()
            })
        },
        Review {
            id: ID("11".to_string()),
            body: Some("At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.".to_string()),
            product: Some(Product {
                upc: "4".to_string()
            })
        }
    ];
}

#[derive(SimpleObject, Clone)]
#[graphql(complex)]
struct Review {
    pub id: ID,
    pub body: Option<String>,
    pub product: Option<Product>,
}

#[ComplexObject]
impl Review {
    #[graphql(provides = "username")]
    pub async fn author(&self) -> Option<User> {
        Some(User {
            id: "1".into(),
            username: Some("urigo".to_string()),
            reviews: Some(REVIEWS[0..2].iter().map(|r| Some(r.clone())).collect()),
        })
    }
}

#[derive(SimpleObject)]
#[graphql(extends)]
struct User {
    #[graphql(external)]
    id: ID,
    #[graphql(external)]
    username: Option<String>,
    reviews: Option<Vec<Option<Review>>>,
}

#[derive(SimpleObject, Clone)]
#[graphql(extends, complex)]

struct Product {
    #[graphql(external)]
    upc: String,
}

#[ComplexObject]
impl Product {
    pub async fn reviews(&self) -> Option<Vec<Option<Review>>> {
        let relevant = REVIEWS
            .iter()
            .filter(|r| {
                if let Some(product) = &r.product {
                    product.upc == self.upc
                } else {
                    false
                }
            })
            .map(|r| Some(r.clone()))
            .collect();

        Some(relevant)
    }
}

struct Query;

#[Object(extends = true)]
impl Query {
    #[graphql(entity)]
    async fn find_review_by_id(&self, id: ID) -> Review {
        REVIEWS.iter().find(|r| r.id == id).unwrap().clone()
    }

    #[graphql(entity)]
    async fn find_user_by_id(&self, id: ID) -> User {
        User {
            id: id.into(),
            username: Some("user".to_string()),
            reviews: Some(REVIEWS[0..2].iter().map(|r| Some(r.clone())).collect()),
        }
    }

    #[graphql(entity)]
    async fn find_product_by_id(&self, upc: ID) -> Product {
        Product {
            upc: upc.to_string(),
        }
    }
}

async fn delay_middleware<B>(req: Request<B>, next: Next<B>) -> Result<Response, StatusCode> {
    let delay_ms: Option<u64> = std::env::var("SUBGRAPH_DELAY_MS").ok().and_then(|s| s.parse().ok()).filter(|d| *d != 0);;

    if let Some(delay_ms) = delay_ms {
        tokio::time::sleep(tokio::time::Duration::from_millis(delay_ms)).await;
    }

    Ok(next.run(req).await)
}

#[tokio::main]
async fn main() {
    let schema = Schema::build(Query, EmptyMutation, EmptySubscription)
        .enable_federation()
        .finish();
    let sdl = schema.sdl_with_options(SDLExportOptions::new().federation().compose_directive());
    println!("GraphQL Federation SDL:\n{}", sdl);
    let host = var("HOST").unwrap_or("0.0.0.0".to_owned());
    let port = var("PORT").unwrap_or("4001".to_owned());
    let path = "/graphql";
    let app = Router::new()
        .route(path, get(graphiql).post_service(GraphQL::new(schema)))
        .route_layer(from_fn(delay_middleware))
        .route("/sdl", get(|| async move { response::Html(sdl.clone()) }));

    println!("GraphiQL IDE: http://{}:{}{}", host, port, path);
    Server::bind(&format!("{}:{}", host, port).parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
