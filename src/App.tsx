import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './pages/NotFound';
import User from './pages/User';
import Tourist from './pages/Tourist';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

export default () => (
  <ApolloProvider client={client}>
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/tourist" push />} />
        <Route path="/user" component={User} />
        <Route path="/404" component={NotFound} />
        <Route path="/tourist" component={Tourist} />
        <Route component={NotFound} />
      </Switch>
    </Router>
  </ApolloProvider>
);
