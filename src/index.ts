import {ApolloServer} from 'apollo-server';

import resolvers from './graphql/resolvers';
import typeDefs from './graphql/schemas';

import services from './services';

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: {
    services,
  },
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});

console.log('Hello World! 🌎');
