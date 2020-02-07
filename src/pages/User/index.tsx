import React, {useContext, useState} from 'react';
import {userInfoContext} from '../../App';
import {Route, Switch, Link } from 'react-router-dom';
import AddFriend from './AddFriend';
import ShowFriend from './ShowFriend';
import Chat from './chat';
import { useSubscription, useQuery } from '@apollo/react-hooks';
import {IMessage, IUser} from '../../utils/chat';
import gql from 'graphql-tag';

const userInitGql = gql`
  query userInit($userId: String!, $length: Int!){
    userInit(userId:$userId, length:$length){
      friend
      messages{
        type
        content
        created
        messageId
        users
        userId
      }
    }
  }
`

interface IUserInitReslut{
  userInit: {
    friend: string;
    messages?: IMessage[];
    friendInfo: IUser;
  }[]
}

const userSubscriptionGql = gql`
  subscription userSubscription($userId: String!){
    userSubscription(userId: $userId){
      type
      newFriend{
        friends
        userId
        avatar
      }
      newMessage{
        type
        content
        created
        messageId
        users
        userId
      }
    }
  }

`

interface IUserSubscriptionReslut{
  type: string;
  newFriend?: IUser;
  newMessage?: IMessage;
}

export interface IChatInfo{
  [key: string]:{
    messages: IMessage[];
    friendInfo: IUser;
  }
}

export const fixChatInfo = (userInitData: IUserInitReslut):IChatInfo => {
  const res:IChatInfo = {};
  for(const item of userInitData.userInit){
    res[item.friend] = {
      messages: item.messages || [],
      friendInfo: item.friendInfo,
    }
  }
  return res;
};

interface IUserProps {
  userInitData: IUserInitReslut;
  userSubscriptionData?: IUserSubscriptionReslut;
}

const User: React.FC<IUserProps> = (props) => {

  const {userInitData, userSubscriptionData} = props;
  const {userInfo:{userId, avatar, friends}} = useContext(userInfoContext);

  const [chatInfo, setChatInfo] = useState<IChatInfo>(fixChatInfo(userInitData));
  console.log('测试', userInitData, userSubscriptionData);

  return (
    <div>
      <h1>{`用户${userId} avater ${avatar}`}</h1>
      <ShowFriend friends={friends || []}/>
      <Switch>
        <Route exact path="/user/addFriend" render={
          () => <AddFriend />
        }/>
        <Route exact path="/user/chat/:name" render= {
          (props) => {
            const {name} = props.match.params;
            return <Chat friendName={name} chatInfo={chatInfo} setChatInfo={setChatInfo} userId={userId}/>
          }
        } />
      </Switch>
      <Link to ="/user/addFriend" >添加朋友</Link>
    </div>
  )
}

interface IUserInitProps {
  userId: string
}

const UserInit: React.FC<IUserInitProps> = (props) => {
  const {userId} = props;
  
  const {data: userInitData} = useQuery<IUserInitReslut, {userId: string; length: number}>(userInitGql,{
    variables:{userId, length: 2},
  });

  const {data: userSubscriptionData, error: userSubscriptionError} = useSubscription<IUserSubscriptionReslut, {userId: string}>(
    userSubscriptionGql,{variables:{userId}});
  !!userSubscriptionError && console.error(userSubscriptionError);
  
  if(!!userInitData){
    return <User userInitData={userInitData} userSubscriptionData={userSubscriptionData}/>
  }else{
    return <div></div>
  }
 


}

export default UserInit;
