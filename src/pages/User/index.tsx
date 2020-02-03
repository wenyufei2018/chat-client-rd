import React, {useContext} from 'react';
import {userInfoContext} from '../../App';
import {Route, Switch, Link } from 'react-router-dom';
import AddFriend from './AddFriend';


const User: React.FC = () => {
  const {userInfo} = useContext(userInfoContext);

  return (
    <div>
      <h1>{`用户${userInfo?.name}`}</h1>
      <Switch>
        <Route exact path="/user/addFriend" component={AddFriend} />
      </Switch>
      <Link to ="/user/addFriend" >添加朋友</Link>
      <pre/>
      <Link to ="/tourist/signIn" >登录</Link>  
    </div>
  )
}

export default User;
