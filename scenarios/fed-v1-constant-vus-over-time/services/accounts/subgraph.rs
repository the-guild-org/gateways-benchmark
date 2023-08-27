use async_graphql::{
    http::GraphiQLSource, EmptyMutation, EmptySubscription, Object, SDLExportOptions, Schema,
    SimpleObject, ID,
};
use async_graphql_axum::GraphQL;
use axum::{
    http::{Request, StatusCode},
    middleware::{self, Next},
    response::{self, IntoResponse, Response},
    routing::get,
    Router, Server,
};
use rand::Rng;
use std::env::var;

async fn graphiql() -> impl IntoResponse {
    response::Html(GraphiQLSource::build().endpoint("/graphql").finish())
}

#[derive(SimpleObject)]
struct User {
    id: ID,
    name: Option<String>,
    username: Option<String>,
}

impl User {
    fn me() -> User {
        User {
            id: "1234".into(),
            name: Some("Me".to_string()),
            username: Some("me".to_string()),
        }
    }
}

struct Query;

#[Object(extends = true)]
impl Query {
    async fn me(&self) -> Option<User> {
        Some(User::me())
    }

    async fn user(&self, id: ID) -> Option<User> {
        let name = format!("User {}", id.as_str());
        let username = format!("user-{}", id.as_str());
        Some(User {
            id,
            name: Some(name),
            username: Some(username),
        })
    }

    async fn users(&self) -> Option<Vec<Option<User>>> {
        Some(
            vec![1, 2, 3, 4, 5, 6, 7, 8, 9]
                .iter()
                .map(|id| {
                    let name = format!("User {}", id);
                    let username = format!("user-{}", id);
                    Some(User {
                        id: id.into(),
                        name: Some(name),
                        username: Some(username),
                    })
                })
                .collect(),
        )
    }

    #[graphql(entity)]
    async fn find_user_by_id(&self, id: ID) -> User {
        if id == "1234" {
            User::me()
        } else {
            let name = format!("User {}", id.as_str());
            let username = format!("user-{}", id.as_str());
            User {
                id,
                name: Some(name),
                username: Some(username),
            }
        }
    }
}

async fn delay_middleware<B>(req: Request<B>, next: Next<B>) -> Result<Response, StatusCode> {
    let delay_range = var("SUBGRAPH_DELAY_MS").ok().and_then(|range| {
        let mut parts = range.split("~");
        let min: Option<i32> = parts.next().and_then(|s| s.parse().ok());
        let max: Option<i32> = parts.next().and_then(|s| s.parse().ok());

        match (min, max) {
            (Some(m1), Some(m2)) => Some((m1, m2)),
            _ => None,
        }
    });

    if let Some(range) = delay_range {
        let delay = rand::thread_rng().gen_range(range.0..range.1);
        tokio::time::sleep(tokio::time::Duration::from_millis(delay as u64)).await;
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
        .route_layer(middleware::from_fn(delay_middleware))
        .route("/sdl", get(|| async move { response::Html(sdl.clone()) }));

    println!("GraphiQL IDE: http://{}:{}{}", host, port, path);
    Server::bind(&format!("{}:{}", host, port).parse().unwrap())
        .serve(app.into_make_service())
        .await
        .unwrap();
}
