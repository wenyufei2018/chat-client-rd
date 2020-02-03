import React from 'react';
import {Route, Switch, Link } from 'react-router-dom';
import SignIn from './SignIn';
import SignUp from './SignUp';


const TouristScreen: React.FC = (props) => {

  return (
      <div>
        <h1>欢迎游客</h1>
        <Switch>
          <Route exact path="/tourist/signIn" component={SignIn} />
          <Route exact path="/tourist/signUp" component={SignUp} />
        </Switch>
        <Link to ="/tourist/signIn" >登录</Link>
        <pre/>
        <Link to ="/tourist/signUp" >注册</Link>
      </div>
  );
};

export default TouristScreen;
