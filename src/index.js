import { ApolloServer } from 'apollo-server'
import typeDefs from './schemas/schema'
import resolvers from './resolvers/resolvers'
import mocks from './mocks/mocks'

// In the most basic sense, the ApolloServer can be started
// by passing type definitions (typeDefs) and the resolvers
// responsible for fetching the data for those types.
const server = new ApolloServer({ typeDefs, resolvers, mocks })

// This `listen` method launches a web-server.  Existing apps
// can utilize middleware options, which we'll discuss later.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`)
})
