const { ApolloServer, gql } = require('apollo-server');

// Definir esquema
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

// Datos simulados
const productos = [{ id: "1", nombre: "Manzana", precio: 0.5 }];

// Resolver funciones
const resolvers = {
  Query: {
    productos: () => productos,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀 Server listo en ${url}`);
});
