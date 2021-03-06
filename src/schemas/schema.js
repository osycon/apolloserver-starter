import { gql } from 'apollo-server'

const typeDefs = gql`
  # Comments in GraphQL are defined with the hash (#) symbol.

  type User {
    id: ID
    name: String
    email: String
    password: String
  }

  type Recipe {
    id: ID
    title: String
    description: String
    cooktime: Int
    createdAt: String
    ingredients: [Ingredient]
    steps: [String]
    author: String
  }

  type Ingredient {
    name: String
    amount: Int
    unit: String
  }

  # The "Query" type is the root of all GraphQL queries.
  # (A "Mutation" type will be covered later on.)
  type Query {
    users: [User]
    userstest: [User]
    recipes: [Recipe]
    recipestest: [Recipe]
  }
`

export default typeDefs
