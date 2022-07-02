import {ApolloServer, gql} from 'apollo-server';

const typeDefs = gql`
  type Query {
    ping: String
  }
`;

const resolvers = {
  Query: {
    ping: () => 'Pong',
  },
};

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.listen().then(({url}) => {
  console.log(`🚀  Server ready at ${url}`);
});

console.log('Hello World! 🌎');
