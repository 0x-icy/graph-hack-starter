import {
  createHttpLink,
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
} from '@apollo/client';
import React from 'react';

const link = createHttpLink({
  uri: 'https://graphql.icy.tools/graphql',
  headers: {
    'x-api-key': 'YOUR_API_KEY_HERE',
  },
});

const client = new ApolloClient({
  link,
  cache: new InMemoryCache({
    typePolicies: {
      ERC721Token: {
        keyFields: ['tokenId', 'contract', ['address']],
      },
      ERC721Contract: {
        keyFields: ['address'],
      },
      Wallet: {
        keyFields: ['address'],
      },
    },
  }),
});

function Apollo({ children }: { children: React.ReactNode}) {
  return (
    <ApolloProvider client={client}>
      {children}
    </ApolloProvider>
  );
}

export default Apollo;
