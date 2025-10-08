
export const typeDefs = `#graphql
 type Show {
  id: ID!
  title: String
  description: String
  image: String
}

type Button {
  text: String
  variant: String
}

type Product {
  id: ID!
  title: String
  subtitle: String
  text: String
  img: String
  buttons: [Button]
}

type HeroBanner {
  id: ID!
  image: String
  subtitle: String
  title: String
  description: String
  buttons: [Button]
}

type Query {
  shows: [Show]
  products: [Product]
  heroBanner: HeroBanner
}
`;
