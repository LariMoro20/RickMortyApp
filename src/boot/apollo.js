import {
  ApolloClient,
  InMemoryCache, createHttpLink,
} from "@apollo/client/core";
import { ApolloClients } from "@vue/apollo-composable";
import { boot } from "quasar/wrappers";


export default boot(
  /* async */({ app }) => {

    const httpLink = createHttpLink({
      // You should use an absolute URL here
      uri: 'https://rickandmortyapi.com/graphql',
    })
    const apolloClient = new ApolloClient({
      cache: new InMemoryCache({
        typePolicies: {
          Query: {
            fields: {
              characters: {
                keyArgs: false,
              },
            },
          },
        },
      }),
      link: httpLink,
      defaultOptions: {
        watchQuery: {
          fetchPolicy: "network-only", // Used for first execution
          nextFetchPolicy: "network-only", // Used for subsequent executions
        },
      },
    });

    const apolloClients = {
      default: apolloClient,
    };
    app.provide(ApolloClients, apolloClients);
  }
);










/*
import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client/core'
import { boot } from "quasar/wrappers";

export default boot(({ app }) => {
  // HTTP connection to the API
  const httpLink = createHttpLink({
    // You should use an absolute URL here
    uri: 'https://rickandmortyapi.com/graphql',
  })

  // Cache implementation
  const cache = new InMemoryCache()

  // Create the apollo client
  const apolloClient = new ApolloClient({
    link: httpLink,
    cache,
  })
  app.provide(ApolloClient, apolloClient);
})
*/
