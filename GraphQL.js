const { ApolloServer, gql } = require('apollo-server');

const typeDefs = gql`
  type Producto {
    id: ID!
    nombre: String!
    precio: Float!
  }

  type Query {
    productos: [Producto]
  }
`;

const productos = [{ id: "1", nombre: "Manzana", precio: 0.5 }];

const resolvers = {
  Query: {
    productos: () => productos,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server listo en ${url}`);
});
