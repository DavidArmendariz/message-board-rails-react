import React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const QueryProvider = (props) => {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });
  return <QueryClientProvider client={client}>{props.children}</QueryClientProvider>;
};

export default QueryProvider;
