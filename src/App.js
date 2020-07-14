import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

import PokemonsContainer from './components/PokemonsContainer';

import './app.css'


function App() {
  const client = new ApolloClient({
    uri: 'https://graphql-pokemon.now.sh'
  })

  return (
    <div className="App">
      <ApolloProvider client={client}>
        <PokemonsContainer />
      </ApolloProvider>
    </div>
  );
}

export default App;
