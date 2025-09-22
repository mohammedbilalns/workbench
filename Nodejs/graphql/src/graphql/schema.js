import {gql } from "graphql-tag" 

const typeDefs = gql` 
type Product {
  id: ID!
  title: String!
  category: String!
  price: Float!
  inStock: Boolean!
}

type Query {
  products: [Product!]!
  product(id: ID!): Product
}

type Mutation {
  createProduct(title:String!, category:String!, inStock:Boolean!, price:Float!):Product
  deleteProduct(id: ID!): Boolean 
  
}
`;


export default typeDefs;

