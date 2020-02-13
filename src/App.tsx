import React, {createContext, useState} from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import { ApolloClient } from 'apollo-client';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { ApolloLink, split } from 'apollo-link';
import { HttpLink } from 'apollo-link-http';
import { WebSocketLink } from 'apollo-link-ws';
import { ApolloProvider } from '@apollo/react-hooks';
import { OperationDefinitionNode } from 'graphql';

import NotFound from './pages/NotFound';
import User from './pages/User';
import Tourist from './pages/Tourist';
import {IUser} from './utils/chat'
// import TestChat from './test/chat2';
import Chat from './pages/Chat';
import Test from './test/test';

const createClient = () => {
  
  const httpLink = new HttpLink({
    uri: 'http://localhost:4000/graphql'
  });

  const wsLink = new WebSocketLink({
    uri: 'ws://localhost:4000/graphql',
    options: {
      reconnect: true
    }
  });

  const terminatingLink = split(
    ({ query: { definitions } }) =>
      definitions.some(node => {
        const { kind, operation } = node as OperationDefinitionNode;
        return kind === 'OperationDefinition' && operation === 'subscription';
      }),
    wsLink,
    httpLink
  );

  const link = ApolloLink.from([terminatingLink]);

  const client = new ApolloClient({
    link,
    cache: new InMemoryCache()
  });

  return client;
}
const client = createClient();

interface IUserInfoContext {
  userInfo: IUser;
  setUserInfo: (userInfo: IUser) => void;
}

export const userInfoContext = createContext<IUserInfoContext>({
  setUserInfo: () => {},
  userInfo:{
    userId: ''
  }
});

export default () => {

  const [userInfo, setUserInfo] = useState<IUser>({
    userId: '',
  });

  return (
    <userInfoContext.Provider value={{userInfo, setUserInfo}}>
      <ApolloProvider client={client}>
        <Router>
          <Switch>
            <Route exact path="/" render={() => <Redirect to="/tourist" push />} />
            <Route path="/user" render={() => {
              const {userId} = userInfo;
              if(!!userId) return <User userInfo={userInfo}/>
              else return  <div>
                <h1>{`用户没有登录`}</h1>
                <Link to ="/tourist/signIn" >登录</Link>  
              </div>
            }} />
            <Route path="/404" component={NotFound} />
            <Route path="/tourist" component={Tourist} />
            <Route path="/test" component={Test} />
            <Route path="/chat" component={Chat} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ApolloProvider> 
    </userInfoContext.Provider>
  )

};
