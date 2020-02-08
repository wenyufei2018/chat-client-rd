import React, {useState, useEffect} from 'react';
import {Route, Link, Switch } from 'react-router-dom';
import AddFriend from './AddFriend';
import ShowFriend from './ShowFriend';
import Chat from './chat';
import { useSubscription, useQuery } from '@apollo/react-hooks';
import {IMessage, IUser} from '../../utils/chat';
import gql from 'graphql-tag';

const userInitGql = gql`
  query userInit($userId: String!, $length: Int!){
    userInit(userId:$userId, length:$length){
      friend{
        userId
        avatar
      }
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
    friend: IUser;
    messages?: IMessage[];
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
  userSubscription:{
    type: string;
    newFriend?: IUser;
    newMessage?: IMessage;
  }
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
    console.log('查看', item);
    res[item.friend.userId] = {
      messages: item.messages || [],
      friendInfo: item.friend,
    }
  }
  return res;
};

export const addFriendState = (chatInfo: IChatInfo, newFriend: IUser): IChatInfo =>{
  const res = {...chatInfo, [newFriend.userId]:{
    messages: [],
    friendInfo: newFriend
  }}
  return res;
}

export const addMessageState = (chatInfo: IChatInfo, newMessage: IMessage, chatInfoKey: string): IChatInfo => {
  const res = {...chatInfo, [chatInfoKey]:{
    messages: [...chatInfo[chatInfoKey].messages, newMessage],
    friendInfo: chatInfo[chatInfoKey].friendInfo
  }}

  console.log('添加消息', res);
  
  return res;
}

interface IUserProps {
  userInitData: IUserInitReslut;
  userId: string;
}

const User: React.FC<IUserProps> = (props) => {

  const {userInitData, userId} = props;

  const [chatInfo, setChatInfo] = useState<IChatInfo>(fixChatInfo(userInitData));

  const {data: userSubscriptionData, error: userSubscriptionError} = useSubscription<IUserSubscriptionReslut, {userId: string}>(
    userSubscriptionGql,{variables:{userId}});
  userSubscriptionError && console.error(userSubscriptionError);

  console.log('进来了', userInitData, userId, chatInfo, userSubscriptionData );
  
  useEffect(() => {
    console.log('数据+++++', userSubscriptionData);
    if(!userSubscriptionData) return;
    const {userSubscription} = userSubscriptionData;
    switch(userSubscription?.type){
      case 'newFriend':
        const {newFriend} = userSubscription;
        console.log(newFriend);
        newFriend && setChatInfo(addFriendState(chatInfo, newFriend));
        break
      case 'newMessage':
        const {newMessage} = userSubscription;
        newMessage && setChatInfo(addMessageState(chatInfo, newMessage, newMessage.userId));
        break
      default:
        console.error('userSubscriptionData 添加数据失败')
    }
  }, [userSubscriptionData])

  return (
    <div>
      <ShowFriend chatInfo={chatInfo}/>
      <Switch>
        <Route exact path="/user/addFriend" render={
          () => <AddFriend chatInfo={chatInfo} setChatInfo={setChatInfo} userId={userId}/>
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
  userInfo: IUser
}

const UserInit: React.FC<IUserInitProps> = (props) => {
  const {userInfo: {userId, avatar}} = props;
  
  const {data: userInitData, loading} = useQuery<IUserInitReslut, {userId: string; length: number}>(userInitGql,{
    variables:{userId, length: 2},
  });
  return (
    <div>
    <h1>{`用户${userId} avater ${avatar}`}</h1>
    {
      !loading && <User userInitData={userInitData || {userInit: []}} userId={userId}/>
    }
    </div>
  )
}

export default UserInit;
