import React, {createContext, useState} from 'react';
import { HashRouter as Router, Route, Switch, Redirect, Link } from 'react-router-dom';
import NotFound from './pages/NotFound';
import User from './pages/User';
import Tourist from './pages/Tourist';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from '@apollo/react-hooks';
import {IUser} from './utils/chat'

const client = new ApolloClient({ uri: 'http://localhost:4000/graphql' });

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
              if(!!userId) return <User userId={userId}/>
              else return  <div>
                <h1>{`用户没有登录`}</h1>
                <Link to ="/tourist/signIn" >登录</Link>  
              </div>
            }} />
            <Route path="/404" component={NotFound} />
            <Route path="/tourist" component={Tourist} />
            <Route component={NotFound} />
          </Switch>
        </Router>
      </ApolloProvider> 
    </userInfoContext.Provider>
  )

};
