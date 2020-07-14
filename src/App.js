import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <h1>Pokemon GraphQL</h1>
      </ApolloProvider>
    </div>
  );
}

export default App;
