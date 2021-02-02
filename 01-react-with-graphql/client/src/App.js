import { ApolloClient, InMemoryCache, ApolloProvider} from "@apollo/client";
import './App.css';
import Nav from './Component/Nav';
import Home from './Component/Home';
import Add from './Component/Add';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  uri: 'http://localhost:4000/graphql',
  onError: ({ networkError, graphQLErrors }) => {
    console.log('graphQLErrors', graphQLErrors)
    console.log('networkError', networkError)
  }
});

const App = () => {
  return (
    <Router >
      <Nav />
      <ApolloProvider client={ apolloClient }>
        <Route path='/' exact render={() => <Home client={ apolloClient } /> } />
        <Route path='/Home' render={() => <Home client={ apolloClient } /> } /> 
        <Route path='/Add' render={() => <Add client={ apolloClient } /> } />
      </ApolloProvider>
    </Router>
    
  );
};

export default App;
