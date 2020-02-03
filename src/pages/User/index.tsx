import React, {useContext} from 'react';
import {userInfoContext} from '../../App';
import {Route, Switch, Link } from 'react-router-dom';
import AddFriend from './AddFriend';
import ShowFriend from './ShowFriend';


const User: React.FC = () => {
  const {userInfo: {name}} = useContext(userInfoContext);

  if(!!name){
    return(
      <div>
        <h1>{`用户${name}`}</h1>
        <ShowFriend/>
        <Switch>
          <Route exact path="/user/addFriend" component={AddFriend} />
        </Switch>
        <Link to ="/user/addFriend" >添加朋友</Link>
      </div>
    )
  }else{
    return (
      <div>
        <h1>{`用户${name}没有登录`}</h1>
        <Link to ="/tourist/signIn" >登录</Link>  
      </div>
    )
  }

}

export default User;
